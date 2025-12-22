import arcjet, {
  detectBot,
  shield,
  slidingWindow,
  validateEmail,
} from '@arcjet/astro';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';
import icon from 'astro-icon';
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  env: {
    validateSecrets: true,
  },
  integrations: [
    react(),
    markdoc(),
    mdx(),
    sitemap(),
    icon({
      include: {
        'fa7-brands': ['*'],
      },
    }),
    arcjet({
      rules: [
        // Shield protects your app from common attacks e.g. SQL injection
        shield({ mode: 'LIVE' }),
        // Create a bot detection rule
        detectBot({
          mode: 'LIVE', // Blocks requests. Use "DRY_RUN" to log only
          // Block all bots except the following
          allow: [
            'CATEGORY:SEARCH_ENGINE', // Google, Bing, etc
            // Uncomment to allow these other common bot categories
            // See the full list at https://arcjet.com/bot-list
            'CATEGORY:MONITOR', // Uptime monitoring services
            'CATEGORY:PREVIEW', // Link previews e.g. Slack, Discord
          ],
        }),
        // Validate email addresses
        validateEmail({
          mode: 'LIVE',
          deny: ['DISPOSABLE', 'INVALID'],
        }),
        // Rate limit
        slidingWindow({
          mode: 'LIVE',
          interval: '10m',
          max: 5,
        }),
      ],
    }),
    sentry({
      project: 'portfolio-astro',
      org: 'hb-consultants-llc',
      // eslint-disable-next-line node/no-process-env
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
});
