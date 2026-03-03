"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function OurTeamPageHeader() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[35vh] overflow-hidden border-b border-zinc-200 px-6 pt-28 pb-10 sm:px-12 sm:pt-32 sm:pb-12 lg:px-20">
      <div className="absolute inset-0">
        <Image
          src="/Test2.JPG"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          {t("ourTeam")}
        </h1>
        <p className="mt-2 max-w-2xl text-zinc-200">{t("ourTeamDesc")}</p>
      </div>
    </section>
  );
}
