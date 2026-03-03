"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const SITES = [
  {
    image: "/East%20Kalimantan%20province%20location%20Indonesia%203d%20map.jpg",
    key: "senyiur",
  },
  {
    image: "/3d-isometric-map-of-east-kalimantan-is-a-province-of-indonesia-vector.jpg",
    key: "muarapahu",
  },
] as const;

export default function SiteLocations() {
  const { t } = useLanguage();

  return (
    <section className="mt-24">
      <h2 className="mb-10 text-2xl font-bold uppercase tracking-tight text-zinc-800 sm:text-3xl">
        {t("siteLocationsTitle")}
      </h2>
      <div className="flex flex-col gap-8">
        {SITES.map((site) => (
          <article
            key={site.key}
            className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="grid min-h-0 gap-0 sm:grid-cols-[320px_1fr] lg:grid-cols-[400px_1fr]">
              <div className="relative aspect-video w-full sm:aspect-auto sm:h-full sm:min-h-[240px]">
                <Image
                  src={site.image}
                  alt={t(`${site.key}SiteName`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <h3 className="text-xl font-bold text-zinc-800">
                  {t(`${site.key}SiteName`)}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-600">
                  {t(`${site.key}SiteDesc`)}
                </p>
                <dl className="mt-5 grid gap-2 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                      {t("province")}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-zinc-700">
                      {t(`${site.key}SiteProvince`)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                      {t("regency")}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-zinc-700">
                      {t(`${site.key}SiteRegency`)}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
