"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutUsContent() {
  const { t } = useLanguage();

  return (
    <div className="relative z-10 max-w-xl">
      <h2 className="text-3xl font-bold uppercase tracking-tight text-zinc-800 sm:text-4xl">
        {t("aboutUs")}
      </h2>
      <p className="mt-6 leading-relaxed text-zinc-600">
        {t("aboutUsParagraph1")}
      </p>
      <p className="mt-4 leading-relaxed text-zinc-600">
        {t("aboutUsParagraph2")}
      </p>
      <Link
        href="#about"
        className="mt-8 inline-block rounded-full bg-linear-to-b from-orange-500 to-orange-600 px-8 py-3.5 text-base font-medium text-white shadow-md transition-opacity hover:opacity-90"
      >
        {t("learnMore")}
      </Link>
    </div>
  );
}
