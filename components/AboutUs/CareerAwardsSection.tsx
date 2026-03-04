"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function CareerAwardsSection() {
  const { t } = useLanguage();

  return (
    <section className="mt-24">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Career */}
        <article className="flex flex-col items-center rounded-3xl border border-transparent bg-white px-8 py-10 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md sm:px-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-orange-300 text-orange-500">
            <span className="text-2xl">🤝</span>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-orange-500 sm:text-2xl">
            {t("careerTitle") ?? "Career"}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600">
            {t("careerDesc") ??
              "Start your career with our company. As a dynamic and innovative organization, we foster collaboration, creativity and growth."}
          </p>
          <button className="mt-5 inline-flex items-center justify-center rounded-full border border-orange-500 px-7 py-2.5 text-sm font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white">
            {t("joinUsCta") ?? "Join Us"}
          </button>
        </article>

        {/* Awards */}
        <article className="flex flex-col items-center rounded-3xl border border-transparent bg-white px-8 py-10 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md sm:px-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-orange-300 text-orange-500">
            <span className="text-2xl">🏅</span>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-orange-500 sm:text-2xl">
            {t("awardsTitle") ?? "Awards"}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600">
            {t("awardsDesc") ??
              "We are proud that our company has been recognized for excellence in the industry with numerous awards and accolades."}
          </p>
          <button className="mt-5 inline-flex items-center justify-center rounded-full border border-orange-500 px-7 py-2.5 text-sm font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white">
            {t("seeAllAwardsCta") ?? "See All Awards"}
          </button>
        </article>
      </div>
    </section>
  );
}

