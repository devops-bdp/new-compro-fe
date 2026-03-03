"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactCTASection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-zinc-200 bg-zinc-50 px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-orange-200 bg-linear-to-br from-orange-50 to-white p-8 text-center shadow-sm sm:p-12">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            {t("ctaTitle")}
          </h2>
          <p className="mt-3 text-zinc-600">{t("ctaDesc")}</p>
          <Link
            href={`mailto:${t("contactEmailValue")}`}
            className="mt-6 inline-flex rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}
