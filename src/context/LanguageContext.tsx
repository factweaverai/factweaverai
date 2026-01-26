'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  isLoading: boolean;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  isLoading: true,
});

export const useLanguage = () => useContext(LanguageContext);

const SUPPORTED_LANGUAGES = ['en', 'fr', 'de'];

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState('en');
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    // Check localStorage first (persisted with cookie consent), then sessionStorage (session-only)
    const savedLang = localStorage.getItem('language') || sessionStorage.getItem('language');

    setTimeout(() => {
      if (isMounted.current) {
        if (savedLang && SUPPORTED_LANGUAGES.includes(savedLang)) {
          setLanguageState(savedLang);
        }
        setIsLoading(false);
      }
    }, 0);

    return () => {
      isMounted.current = false;
    };
  }, []);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);

    const cookieConsent = localStorage.getItem('cookie-consent');
    if (cookieConsent === 'true') {
      // User accepted cookies - persist across sessions
      localStorage.setItem('language', lang);
    } else {
      // No consent or declined - only persist for current session
      sessionStorage.setItem('language', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};
