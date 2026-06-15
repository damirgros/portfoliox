"use client";

import Link from "next/link";
import { projects } from "@/lib/portfolio";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 sm:px-8">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
          {t("labels.projects")}
        </p>
        <h1 className="mt-4 text-6xl font-bold uppercase tracking-[-0.08em] text-white sm:text-7xl">
          {t("pages.projects.title")}
        </h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-6 transition hover:-translate-y-0.5"
          >
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="text-sm text-slate-400">
                {t(project.descriptionKey)}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm font-semibold text-cyan-300 transition hover:text-white"
              >
                {t("actions.viewPage")}
              </Link>
              <Link
                href={project.codeLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm font-semibold text-slate-400 transition hover:text-white"
              >
                {t("actions.viewCode")}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
