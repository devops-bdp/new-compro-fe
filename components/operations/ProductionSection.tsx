"use client";

import { CountUp, CountUpRange } from "@/components/ui/CountUp";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProductionSection() {
  const { t, language } = useLanguage();

  return (
    <section className="border-b border-zinc-200 bg-zinc-50 px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          {t("production")}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-zinc-600">
              {t("dailyProduction")}
            </p>
            <p className="mt-2 text-2xl font-bold text-orange-600">
              <CountUpRange
                from={25000}
                to={35000}
                suffix={` ${t("ton")}`}
                duration={2200}
                locale={language}
              />
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-zinc-600">
              {t("yearlyProduction")}
            </p>
            <p className="mt-2 text-2xl font-bold text-orange-600">
              <CountUp
                value={4575815}
                suffix={` ${t("ton")}`}
                duration={2500}
                locale={language}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
