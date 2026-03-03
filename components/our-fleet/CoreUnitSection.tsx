"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CoreUnitSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              {t("coreUnit")}
            </h2>
            <p className="mt-4 text-zinc-600">{t("coreUnitDesc")}</p>
            <div className="mt-6 space-y-3">
              <p className="text-sm font-medium text-zinc-900">
                {t("primeMoverDoubleVessel")}
              </p>
              <p className="text-sm text-zinc-600">
                <span className="font-medium">{t("brand")}:</span> Volvo FH16-700
              </p>
              <p className="text-sm text-zinc-600">
                <span className="font-medium">{t("totalActiveUnits")}:</span> 56
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-video overflow-hidden rounded-xl">
              <Image
                src="/OUR%20UNIT_CORE%20UNIT.JPG"
                alt="Core Unit - Prime Mover with Double Vessel"
                width={640}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
