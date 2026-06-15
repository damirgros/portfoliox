"use client";

import { skills } from "@/lib/portfolio";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function SkillsPage() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 sm:px-8">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
          {t("labels.skills")}
        </p>
        <h1 className="mt-4 text-6xl font-bold uppercase tracking-[-0.08em] text-white sm:text-7xl">
          {t("pages.skills.title")}
        </h1>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((section) => (
          <div
            key={section.category}
            className="rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-5"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              {section.category}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {section.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
