"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-zinc-200 bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-xl font-bold text-zinc-900">{t("contactHeadOffice")}</h2>

        <div className="mt-8 space-y-6">
          <div className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-semibold text-orange-600">{t("contactAddress")}</p>
              <p className="mt-1 text-zinc-600">{t("contactAddressValue")}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <span className="text-2xl">📞</span>
            <div>
              <p className="font-semibold text-orange-600">{t("contactPhone")}</p>
              <Link
                href={`tel:${t("contactPhoneValue").replace(/\s/g, "")}`}
                className="mt-1 text-zinc-600 hover:text-orange-600"
              >
                {t("contactPhoneValue")}
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <span className="text-2xl">✉️</span>
            <div>
              <p className="font-semibold text-orange-600">{t("contactEmail")}</p>
              <Link
                href={`mailto:${t("contactEmailValue")}`}
                className="mt-1 text-zinc-600 hover:text-orange-600"
              >
                {t("contactEmailValue")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
