"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const DEFAULT_AVATAR = "/default-avatar.svg";

const SITE_TOP = [
  { roleKey: "siteManager" as const, name: "Anggi Okta Yudha Perkasa", avatarUrl: undefined as string | undefined },
  { roleKey: "deputySite" as const, name: "Zulfahmi", avatarUrl: undefined as string | undefined },
] as const;

const DEPT_HEADS = [
  { roleKey: "deptHeadProduction" as const, name: "Hamdani", avatarUrl: undefined as string | undefined },
  { roleKey: "deptHeadPlantLogistic" as const, name: "Fandi Achmad", avatarUrl: undefined as string | undefined },
  { roleKey: "deptHeadHSE" as const, name: "Untung Subekti", avatarUrl: undefined as string | undefined },
  { roleKey: "deptHeadInfrastructure" as const, name: "Akbar Bimantoro", avatarUrl: undefined as string | undefined },
  { roleKey: "deptHeadHRGA" as const, name: "Vacant", avatarUrl: undefined as string | undefined },
] as const;

export default function SiteSenyiurSection() {
  const { t } = useLanguage();

  return (
    <section
      id="site-senyiur"
      className="border-b border-zinc-200 bg-white px-6 py-16 sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          {t("siteSenyiurPIC")}
        </h2>

        <div className="mt-4 flex items-center gap-4">
          <p className="font-semibold italic text-zinc-800">{t("indonesiaPratamaProject")}</p>
          <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
            <Image
              src="/IP_LOGO.png"
              alt={t("indonesiaPratamaProject")}
              width={56}
              height={56}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        {/* Top level: Site Manager & Deputy Site */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          {SITE_TOP.map((item) => (
            <div
              key={item.roleKey}
              className="flex w-full max-w-xs flex-col items-center rounded-xl border-2 border-orange-200 bg-orange-50/50 p-5 text-center shadow-sm sm:max-w-[280px]"
            >
              <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-orange-100 sm:size-20">
                <Image
                  src={item.avatarUrl ?? DEFAULT_AVATAR}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="size-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-orange-600">
                {t(item.roleKey)}
              </p>
              <p className="mt-1 font-bold text-zinc-900">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Connector line */}
        <div className="mx-auto mt-6 flex justify-center">
          <div className="h-8 w-0.5 bg-zinc-300" />
        </div>

        {/* Dept Heads */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {DEPT_HEADS.map((item) => (
            <div
              key={item.roleKey}
              className={`flex flex-col items-center rounded-xl border border-zinc-200 p-5 text-center shadow-sm ${
                item.name === "Vacant"
                  ? "bg-zinc-100"
                  : "bg-zinc-50 hover:border-orange-200"
              }`}
            >
              <div
                className={`flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full sm:size-14 ${
                  item.name === "Vacant" ? "bg-zinc-200" : "bg-orange-100"
                }`}
              >
                <Image
                  src={item.avatarUrl ?? DEFAULT_AVATAR}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="size-full object-cover object-top"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-orange-600">
                {t(item.roleKey)}
              </p>
              <p
                className={`mt-1 font-bold ${
                  item.name === "Vacant" ? "italic text-zinc-500" : "text-zinc-900"
                }`}
              >
                {item.name === "Vacant" ? t("vacant") : item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
