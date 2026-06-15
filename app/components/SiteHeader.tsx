"use client";

import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { useLanguage } from "./LanguageProvider";

const navItems = [
  { key: "home", href: "/", transitionType: "topToBottom" },
  { key: "projects", href: "/projects", transitionType: "leftToRight" },
  { key: "skills", href: "/skills", transitionType: "rightToLeft" },
  { key: "experience", href: "/experience", transitionType: "bottomToTop" },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale, t, languages, languageLabels } = useLanguage();

  return (
    <header className="sticky top-0 z-20 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-5 text-sm text-slate-200 sm:px-8">
        <nav className="flex items-center gap-4 sm:gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavLink
                key={item.href}
                href={item.href}
                transitionType={item.transitionType}
                className={`transition duration-200 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            );
          })}
        </nav>
        <div className="absolute right-6 hidden items-center gap-2 sm:flex">
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLocale(lang)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                locale === lang
                  ? "bg-white text-slate-950"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {languageLabels[lang]}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
