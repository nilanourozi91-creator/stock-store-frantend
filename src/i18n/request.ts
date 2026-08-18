import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  const validLocale =
    locale === "fa" || locale === "ko" || locale === "en"
      ? locale
      : "en";

  return {
    locale: validLocale,
    messages: (
      await import(`../messages/${validLocale}.json`)
    ).default,
  };
});