"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  getTranslation,
  languageLabels,
  languages,
  Language,
} from "@/lib/i18n";

interface LanguageContextValue {
  locale: Language;
  setLocale: (locale: Language) => void;
  t: (key: string) => string;
  languageLabels: typeof languageLabels;
  languages: typeof languages;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);
const STORAGE_KEY = "portfolio_lang";

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === "hr" || saved === "en") {
      setLocaleState(saved);
      return;
    }

    const browserLang = window.navigator.language.startsWith("hr")
      ? "hr"
      : "en";
    setLocaleState(browserLang);
  }, []);

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale: (nextLocale: Language) => {
        setLocaleState(nextLocale);
        window.localStorage.setItem(STORAGE_KEY, nextLocale);
      },
      t: (key: string) => getTranslation(locale, key),
      languageLabels,
      languages,
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
