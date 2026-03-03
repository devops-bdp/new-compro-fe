"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectLocationSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-zinc-200 bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          {t("projectLocation")}
        </h2>
        <p className="mt-4 text-zinc-600">{t("projectLocationDesc")}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <p className="text-xl font-semibold text-orange-600">
              {t("senyiur")}
            </p>
            <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              {t("ongoing")}
            </span>
            <p className="mt-3 text-sm text-zinc-600">
              {t("senyiurDesc")}
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <p className="text-xl font-semibold text-orange-600">
              {t("muaraPahu")}
            </p>
            <span className="mt-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
              {t("openProjects")}
            </span>
            <p className="mt-3 text-sm font-medium text-zinc-700">
              {t("runsJuly2026")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
