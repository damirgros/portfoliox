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
    <header className="sticky top-0 z-20 h-[80px] backdrop-blur-xl">
      <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-6 text-sm text-slate-200 sm:px-8">
        <nav className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.05)] sm:gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavLink
                key={item.href}
                href={item.href}
                transitionType={item.transitionType}
                className={`rounded-full px-3 py-1.5 font-medium transition duration-200 ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/10 hover:text-white"
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
