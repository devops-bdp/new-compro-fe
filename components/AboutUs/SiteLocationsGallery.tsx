"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const GALLERY_IMAGES = [
  "/IMG_8463.JPG",
  "/IMG_8480.JPG",
  "/IMG_8499.JPG",
  "/DJI_0675.JPG",
  "/Test2.JPG",
  "/OUR UNIT_CORE UNIT.JPG",
] as const;

export default function SiteLocationsGallery() {
  const { t } = useLanguage();
  const galleryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const elements = galleryRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-16">
        <h2 className="text-2xl font-bold uppercase tracking-tight text-zinc-800 sm:text-3xl">
        {t("Our Fleet")}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
        {t("projectLocationDesc") ??
          "Our projects with Bayan Resource across multiple locations in Indonesia."}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_IMAGES.map((src, idx) => (
          <div
            key={src}
            ref={(el) => {
              galleryRefs.current[idx] = el;
            }}
            className="transform overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm opacity-0 translate-y-4 transition-all duration-700 ease-out"
          >
            <div className="relative aspect-4/3 w-full">
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

