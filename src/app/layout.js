// purpose: Define the layout for the entire application
// Font and global styles
import localFont from "next/font/local";
import "./globals.css";

// Layout components
import Header from "../app/components/Header/Header";
import Footer from "./components/Footer/Footer";

// Internationalization (i18n) imports
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

// Load custom fonts with specific weights and accessible font display
const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Recoleta-Black.ttf",
      weight: "400", // Regular weight for general text
    },
    {
      path: "../../public/fonts/Recoleta-Medium.ttf",
      weight: "300", // Medium weight for emphasis
    },
    {
      path: "../../public/fonts/Recoleta-Light.ttf",
      weight: "200", // Light weight for subtle text
    },
  ],
  variable: "--font-Recoleta-Black", // CSS variable for easy font management
  display: "swap", // Ensures text remains visible while the font loads
});

// Define metadata for SEO and page information
export const metadata = {
  title: "Yuta Asakura | Full-Stack Web Developer Portfolio", // Page title for better SEO
  description:
    "Yuta Asakura's portfolio showcasing projects and skills in full-stack web development.", // Page description for search engines
};

export default async function RootLayout({ children }) {
  // Get the current locale based on user preferences
  const locale = await getLocale();

  // Fetch translation messages for the determined locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        {/* Provide translations and locale settings for the app */}
        <NextIntlClientProvider messages={messages}>
          {/* Header component with aria-label for accessibility */}
          <Header aria-label="Site Header" />

          {/* Main content area with role="main" */}
          <main role="main">{children}</main>

          {/* Footer component with aria-label for accessibility */}
          <Footer aria-label="Site Footer" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
