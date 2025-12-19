import type { StandardSchemaV1 } from '@t3-oss/env-core';

import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.string(),
    RESEND_API_KEY: z.string(),
    ARCJET_KEY: z.string(),
    TURNSTILE_SECRET_KEY: z.string(),
    FROM_EMAIL: z.email(),
    TO_EMAIL: z.email(),
  },

  /**
   * The prefix that client-side variables must have. This is enforced both at
   * a type-level and at runtime.
   */
  clientPrefix: 'PUBLIC_',

  client: {
    PUBLIC_TURNSTILE_SITE_KEY: z.string(),
  },

  emptyStringAsUndefined: true,
  onValidationError: (issues: readonly StandardSchemaV1.Issue[]) => {
    console.error('❌ Invalid environment variables:', issues);
    throw new Error('Invalid environment variables');
  },
  // eslint-disable-next-line unused-imports/no-unused-vars
  onInvalidAccess: (variable: string) => {
    throw new Error(
      '❌ Attempted to access a server-side environment variable on the client'
    );
  },
  isServer: typeof window === 'undefined',

  runtimeEnv: import.meta.env,
});
