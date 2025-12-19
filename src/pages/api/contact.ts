import type { APIRoute } from 'astro';

import aj from 'arcjet:client';
import { Resend } from 'resend';

import { env } from '@/lib/env';

export const prerender = false;

const resend = new Resend(env.RESEND_API_KEY);

async function verifyTurnstile(token: string): Promise<boolean> {
  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    }
  );
  const data = await response.json();
  return data.success;
}

export const POST: APIRoute = async ({ request }) => {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return Response.json({ error: 'Expected JSON Body' }, { status: 400 });
  }

  const { name, email, message, turnstileToken } = await request.json();

  // Validate required fields
  if (!name || !email || !message || !turnstileToken) {
    return Response.json({ error: 'Missing fields' }, { status: 400 });
  }

  // Verify Turnstile first
  const isTurnstileValid = await verifyTurnstile(turnstileToken);
  if (!isTurnstileValid) {
    return Response.json(
      { error: 'Captcha verification failed' },
      { status: 403 }
    );
  }

  // Then run Arcjet protections
  const decision = await aj.protect(request, { email });
  if (decision.isDenied()) {
    return Response.json({ error: 'Request blocked' }, { status: 403 });
  }

  // Send email with Resend
  const { error } = await resend.emails.send({
    from: env.FROM_EMAIL,
    to: env.TO_EMAIL,
    subject: `Contact from ${name}`,
    text: message,
    replyTo: email,
  });

  if (error) {
    return Response.json({ error: 'Failed to send' }, { status: 500 });
  }

  return Response.json({ success: true });
};
