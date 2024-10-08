"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Default to 'en'

  // Helper function to read the 'locale' cookie
  const getLocaleFromCookie = () => {
    const match = document.cookie.match(new RegExp('(^| )locale=([^;]+)'));
    return match ? match[2] : 'en'; // Default to 'en' if no cookie is found
  };

  useEffect(() => {
    // Set the initial language based on the cookie value
    const locale = getLocaleFromCookie();
    setCurrentLanguage(locale);
  }, []);

  const changeLanguage = (locale) => {
    // Set the 'locale' cookie
    document.cookie = `locale=${locale}; path=/`;

    // Reload the page to apply the new locale
    router.refresh();
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ja' : 'en';
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <div className="flex bg-[#eef7fb ] justify-center items-center space-x-4">
    {/* American Flag */}
    <span role="img" aria-label="American Flag" className="text-xl">
      ENGLISH 🇺🇸
    </span>

    {/* Toggle Switch */}
    <div
      className={`relative rounded-full w-12 h-6 transition duration-200 ease-linear cursor-pointer ${
        currentLanguage === 'ja' ? 'bg-[#48AFDE]' : 'bg-gray-400'
      }`}
      onClick={toggleLanguage}
    >
      <div
        className={`absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer ${
          currentLanguage === 'ja' ? 'translate-x-full border-[#48AFDE]' : 'translate-x-0 border-gray-400'
        }`}
      />
    </div>

    {/* Japanese Flag */}
    <span role="img" aria-label="Japanese Flag" className="text-xl">
      日本語 🇯🇵
    </span>
  </div>
  );
}
