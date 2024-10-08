import localFont from "next/font/local";
import "./globals.css";
import Header from "../app/components/Header/Header";
import Footer from "./components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Recoleta-Black.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Recoleta-Medium.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Recoleta-Light.ttf",
      weight: "200",
    },
  ],
  variable: "--font-Recoleta-Black",
});

export const metadata = {
  title: "Yuta Asakura | Full-Stack Web Developer Portfolio",
  description:
    "Yuta Asakura's portfolio showcasing projects and skills in front-end web development, React, Next.js, and JavaScript.",
};

export default async function RootLayout({ children }) {
  // Get the current locale
  const locale = await getLocale();
  // Get the messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
