"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const medicUnits = [
  { key: "ambulance", model: "Toyota Innova", image: "/Default.jpeg" },
  { key: "rescueCar", model: "Mitsubishi Triton", image: "/Default.jpeg" },
] as const;

export default function MedicUnitSection() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          {t("medicUnit")}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {medicUnits.map((unit) => (
            <div
              key={unit.key}
              className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="aspect-video">
                <Image
                  src={unit.image}
                  alt={t(unit.key)}
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="font-medium text-zinc-900">{t(unit.key)}</p>
                <p className="mt-1 text-sm text-zinc-600">{unit.model}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
