"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const INFRASTRUCTURES = [
  {
    image: "/DJI_0675.JPG",
    key: "infrastructureKftJetty",
  },
  {
    image: "/IMG_8463.JPG",
    key: "infrastructureMuaraPahuJetty",
  },
  {
    image: "/IMG_8480.JPG",
    key: "infrastructurePikJetty",
  },
  {
    image: "/IMG_8499.JPG",
    key: "infrastructureSenyiurJetty",
  },
] as const;

export default function InfrastructureSection() {
  const { t } = useLanguage();

  return (
    <section className="mt-24">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold uppercase tracking-tight text-zinc-800 sm:text-3xl">
          {t("Infrastructure")}
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
          {t("projectLocationDesc") ??
            "Our projects with Bayan Resource across multiple locations in Indonesia."}
        </p>
      </div>

      <div className="relative mt-10">
        {/* gradient edges for scroll hint */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-white to-transparent" />

        <div className="flex gap-6 overflow-x-auto pb-4 pt-1 scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent">
          {INFRASTRUCTURES.map((item) => (
            <article
              key={item.key}
              className="group relative w-64 shrink-0 snap-start overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-72"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={item.image}
                  alt={t(`${item.key}Name`) ?? "Infrastructure image"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 70vw, 320px"
                />
              </div>
              <div className="flex flex-col gap-1 p-4">
                <h3 className="text-sm font-semibold text-zinc-900">
                  {t(`${item.key}Name`) ?? "Infrastructure asset"}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-600">
                  {t(`${item.key}Desc`) ??
                    "Supporting loading, unloading, and logistics activities for our operations."}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

