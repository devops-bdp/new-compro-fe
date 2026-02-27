"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function PartnershipSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-zinc-200 bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          {t("partnership")}
        </h2>
        <p className="mt-4 max-w-3xl text-zinc-600">{t("partnershipDesc")}</p>
      </div>
    </section>
  );
}
