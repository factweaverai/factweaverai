'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const { language } = useLanguage();
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    // Check if user already accepted (localStorage) or declined this session (sessionStorage)
    const accepted = localStorage.getItem('cookie-consent') === 'true';
    const declinedThisSession = sessionStorage.getItem('cookie-consent-declined') === 'true';

    if (!accepted && !declinedThisSession) {
      // Defer state update
      setTimeout(() => {
        if (isMounted.current) {
          setShow(true);
        }
      }, 0);
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    // Save current language preference immediately
    localStorage.setItem('language', language);
    // Move any session language to localStorage
    const sessionLang = sessionStorage.getItem('language');
    if (sessionLang) {
      localStorage.setItem('language', sessionLang);
      sessionStorage.removeItem('language');
    }
    setShow(false);
  };

  const handleDecline = () => {
    // Only store in sessionStorage - banner won't show again this session
    // but will show again on next visit (no persistence)
    sessionStorage.setItem('cookie-consent-declined', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-sm">
        <p>
          We use cookies to improve your experience. By accepting, you allow us to store your language preference.
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleDecline}
          className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-800 transition-colors text-sm"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
