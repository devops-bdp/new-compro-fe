"use client";

import { CountUp } from "@/components/ui/CountUp";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WorkforceSection() {
  const { t, language } = useLanguage();

  return (
    <section className="border-b border-zinc-200 bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          {t("workforce")}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <p className="text-sm font-medium text-zinc-600">
              {t("totalEmployees")}
            </p>
            <p className="mt-2 text-2xl font-bold text-orange-600">
              <CountUp value={300} suffix="+" duration={1800} locale={language} />
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <p className="text-sm font-medium text-zinc-600">
              {t("operators")}
            </p>
            <p className="mt-2 text-2xl font-bold text-orange-600">
              <CountUp value={125} suffix="+" duration={1800} locale={language} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
