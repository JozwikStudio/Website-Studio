import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { getCookie, setCookie } from '../lib/cookies';

export type Language = 'de' | 'en';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
const LANGUAGE_COOKIE_NAME = 'jozwik_language';
const COOKIE_NOTICE_NAME = 'jozwik_cookie_notice_v2';

function getInitialLanguage(): Language {
  const savedLanguage = getCookie(LANGUAGE_COOKIE_NAME);
  return savedLanguage === 'en' ? 'en' : 'de';
}

function hasCookieConsent() {
  return getCookie(COOKIE_NOTICE_NAME) === 'accepted';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);

    if (hasCookieConsent()) {
      setCookie(LANGUAGE_COOKIE_NAME, nextLanguage, 365);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const nextLanguage = prev === 'de' ? 'en' : 'de';

      if (hasCookieConsent()) {
        setCookie(LANGUAGE_COOKIE_NAME, nextLanguage, 365);
      }

      return nextLanguage;
    });
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
    }),
    [language, setLanguage, toggleLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
