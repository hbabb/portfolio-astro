import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: 'https://794cd5fe39d28a65ef3b77557a7937ad@o4509379475406848.ingest.us.sentry.io/4510575681273856',
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  // Enable logs to be sent to Sentry
  enableLogs: true,
  // Define how likely traces are sampled. Adjust this value in production,
  // or use tracesSampler for greater control.
  tracesSampleRate: 1.0,
});
