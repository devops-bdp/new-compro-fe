"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import SiteLocationsGallery from "./SiteLocationsGallery";

const SITES = [
  { key: "Senyiur" },
  { key: "Muara Pahu" },
] as const;

const INDONESIA_MAP_SRC = "/indonesia-map.gif";

export default function SiteLocations() {
  const { t } = useLanguage();

  return (
    <section className="mt-24">
      <h2 className="text-2xl font-bold uppercase tracking-tight text-zinc-800 sm:text-3xl">
        {t("Site Locations")}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
        {t("projectLocationDesc") ??
          "Our projects with Bayan Resource across multiple locations in Indonesia."}
      </p>

      {/* Peta full-width di atas, detail site di bawah */}
      <div className="mt-10">
        <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[620px]">
          <Image
            src={INDONESIA_MAP_SRC}
            alt="Map of Indonesia"
            fill
            className="object-contain"
            sizes="100vw"
            unoptimized
          />
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {SITES.map((site) => (
            <article key={site.key}>
              <h3 className="text-xl font-bold text-zinc-800">
                {t(`${site.key}`)}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                {t(`${site.key} Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`)}
              </p>
              <dl className="mt-5 grid gap-2 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                    {t("province")}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium text-zinc-700">
                    {t(`${site.key}Site Province`)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                    {t("regency")}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium text-zinc-700">
                    {t(`${site.key}Site Regency`)}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-16">
        <SiteLocationsGallery />
      </div>
    </section>
  );
}
