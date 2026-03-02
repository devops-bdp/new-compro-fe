"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const PARTNERSHIPS = [
  { nameKey: "partnership1Name", descKey: "partnership1Desc" },
  { nameKey: "partnership2Name", descKey: "partnership2Desc" },
] as const;

export default function PartnershipSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-zinc-200 bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          {t("partnership")}
        </h2>
        <p className="mt-4 max-w-3xl text-zinc-600">{t("partnershipDesc")}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {PARTNERSHIPS.map((p) => (
            <div
              key={p.nameKey}
              className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {t(p.nameKey)}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{t(p.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
