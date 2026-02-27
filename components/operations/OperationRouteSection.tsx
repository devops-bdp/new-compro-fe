"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function OperationRouteSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-zinc-200 bg-zinc-50 px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          {t("operationRoute")}
        </h2>
        <p className="mt-4 text-zinc-600">{t("routeDesc")}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <span className="text-lg font-bold">1</span>
            </div>
            <div>
              <p className="font-medium text-zinc-900">
                {t("coalpadToWeightbridge")}
              </p>
              <p className="mt-1 text-xl font-bold text-orange-600">
                {t("coalpadDistance")}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <span className="text-lg font-bold">2</span>
            </div>
            <div>
              <p className="font-medium text-zinc-900">
                {t("weightbridgeToJetty")}
              </p>
              <p className="mt-1 text-xl font-bold text-orange-600">
                {t("jettyDistance")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
