'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation, Locale, Namespace } from '@/lib/translations';

// Define a type for the translations object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Translations = any;

export function useTranslation(namespace: Namespace) {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState<Translations>({});
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    // Defer setting loading state to avoid synchronous state update warning
    Promise.resolve().then(() => {
        if (active && isMounted.current) {
            setLoading(true);
        }
    });

    getTranslation(language as Locale, namespace).then((data) => {
      if (active && isMounted.current) {
        setTranslations(data);
        setLoading(false);
      }
    });
    return () => { active = false; };
  }, [language, namespace]);

  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value;
  };

  return { t, loading, language, raw: translations };
}
