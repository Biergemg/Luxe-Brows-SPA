const clean = (value?: string) => value?.trim() || undefined;

const withNoTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const resolveSiteUrl = () => {
  const explicit = clean(process.env.NEXT_PUBLIC_SITE_URL);
  if (explicit) return withNoTrailingSlash(explicit);

  const production = clean(process.env.VERCEL_PROJECT_PRODUCTION_URL);
  if (production) return withNoTrailingSlash(`https://${production}`);

  const preview = clean(process.env.VERCEL_URL);
  if (preview) return withNoTrailingSlash(`https://${preview}`);

  return "https://luxebrowsspa.com";
};

export const env = {
  siteUrl: resolveSiteUrl(),
  googleAnalyticsId: clean(process.env.NEXT_PUBLIC_GA_ID),
  googleTagManagerId: clean(process.env.NEXT_PUBLIC_GTM_ID),
  googleMapsUrl: clean(process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL),
  googleMapsEmbedUrl: clean(process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL),
};

export const hasGoogleTagManager = Boolean(env.googleTagManagerId);
export const hasGoogleAnalytics = Boolean(env.googleAnalyticsId) && !hasGoogleTagManager;
