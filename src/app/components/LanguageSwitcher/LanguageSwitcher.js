// src/components/LanguageSwitcher.js

'use client';

import {useRouter} from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = (locale) => {
    // Set the 'locale' cookie
    document.cookie = `locale=${locale}; path=/`;

    // Reload the page to apply the new locale
    router.refresh();
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ja')}>日本語</button>
    </div>
  );
}
