import { getRequestConfig } from "next-intl/server";
import {cookies} from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  // Default to 'en' if not set
  const locale = cookieStore.get('locale')?.value || 'en';

  return {
    locale,
    messages: (await import(
      /* webpackInclude: /\.json$/ */
      `../../../messages/${locale}.json`
    )).default,
  };
});
