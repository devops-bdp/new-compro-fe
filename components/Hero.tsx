"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen w-full">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Test1.JPG"
          alt="Industrial landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay from mid to top */}
        <div
          className="absolute inset-0 bg-linear-to-b from-black/25 via-black/20 via-50% to-transparent"
          aria-hidden
        />
      </div>

      {/* Hero content - same container/padding as Navbar for alignment */}
      <div className="relative flex min-h-screen flex-col justify-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
          <p className="text-lg font-bold uppercase tracking-wider text-white sm:text-xl">
            {t("ourCommitment")}
          </p>
          <h1 className="mt-2 bg-linear-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-4xl font-extrabold uppercase leading-tight text-transparent sm:text-5xl lg:text-6xl">
            {t("toSustainability")}
          </h1>
          <p className="mt-4 text-lg text-white sm:text-xl">
            {t("heroTagline")}
          </p>
          <a
            href="#sustainability"
            className="mt-8 inline-block rounded-full bg-linear-to-r from-orange-500 via-orange-400 to-amber-400 px-8 py-3.5 text-base font-medium text-white shadow-lg transition-opacity hover:opacity-90"
          >
            {t("learnMore")}
          </a>
          </div>
        </div>
      </div>

      {/* Gradient at bottom - fades to black */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent"
        aria-hidden
      />
    </section>
  );
}
