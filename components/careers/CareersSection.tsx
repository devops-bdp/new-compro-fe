"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CareersSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-zinc-200 bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        {/* Why Join Us */}
        <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-6">
          <h2 className="text-xl font-bold text-zinc-900">{t("whyJoinUs")}</h2>
          <p className="mt-3 text-zinc-600">{t("whyJoinDesc")}</p>
        </div>

        {/* How to Apply */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-zinc-900">{t("howToApply")}</h2>
          <p className="mt-3 text-zinc-600">{t("checkPositionsFirst")}</p>
          <p className="mt-2 text-zinc-600">{t("howToApplyDesc")}</p>
          <Link
            href="https://bdphrdatabase.vercel.app/recruitment-form"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-600"
          >
            {t("sendCV")}
          </Link>
        </div>
      </div>
    </section>
  );
}
