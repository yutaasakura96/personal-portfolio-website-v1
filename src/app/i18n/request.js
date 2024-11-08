// Purpose: Define the layout for the entire application

// Import the getRequestConfig function from next-intl/server
import { getRequestConfig } from "next-intl/server";

// Import the cookies function from next/headers
import {cookies} from 'next/headers';

// Export the configuration for handling requests
export default getRequestConfig(async () => {
  // Get the cookie store
  const cookieStore = cookies();

  // Retrieve the 'locale' cookie value, default to 'en' if not set
  const locale = cookieStore.get('locale')?.value || 'en';

  // Return the configuration object
  return {
    // Set the locale
    locale,
    // Dynamically import the locale-specific messages
    messages: (await import(
      /* webpackInclude: /\.json$/ */
      `../../../messages/${locale}.json`
    )).default,
  };
});
