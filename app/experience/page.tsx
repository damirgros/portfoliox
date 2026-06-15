"use client";

import { education, experience } from "@/lib/portfolio";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function ExperiencePage() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 sm:px-8">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
          {t("labels.experienceSection")}
        </p>
        <h1 className="mt-4 text-6xl font-bold uppercase tracking-[-0.08em] text-white sm:text-7xl">
          {t("pages.experience.title")}
        </h1>
      </div>

      <div className="space-y-6">
        {experience.map((item) => (
          <article
            key={item.company}
            className="rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {item.role}
                </h2>
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                  {item.company}
                </p>
              </div>
              <p className="text-sm text-slate-400">{item.period}</p>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              {(item.detailKeys
                ? item.detailKeys.map((key) => t(key))
                : item.details
              ).map((detail, index) => (
                <p
                  key={`${item.company}-${index}`}
                  className="before:mr-2 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-cyan-300"
                >
                  {detail}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
          {t("labels.education")}
        </p>
        {education.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                  {item.organization}
                </p>
              </div>
              <p className="text-sm text-slate-400">{item.period}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
