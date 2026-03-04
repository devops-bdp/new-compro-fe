"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const NEWS_LIST = [
  {
    id: "news-1",
    date: "01 August 2025",
    titleKey: "newsItem1Title",
    titleFallback:
      "Company achieves record coal hauling volume in first half of 2025",
    descKey: "newsItem1Desc",
    descFallback:
      "Strong collaboration with partners and continuous fleet optimization drove solid operational performance.",
    image: "/DJI_0675.JPG",
  },
  {
    id: "news-2",
    date: "10 June 2025",
    titleKey: "newsItem2Title",
    titleFallback:
      "PT Batara Dharma Persada strengthens HSE program across all sites",
    descKey: "newsItem2Desc",
    descFallback:
      "New safety initiatives and training modules are implemented to enhance workplace safety culture.",
    image: "/IMG_8463.JPG",
  },
  {
    id: "news-3",
    date: "15 March 2025",
    titleKey: "newsItem3Title",
    titleFallback:
      "New hauling route partnership agreement signed with strategic partner",
    descKey: "newsItem3Desc",
    descFallback:
      "The agreement expands service coverage and supports long-term growth of coal logistics operations.",
    image: "/IMG_8480.JPG",
  },
] as const;

export default function NewsSection() {
  const { t } = useLanguage();

  return (
    <section className="mt-24">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold uppercase tracking-tight text-zinc-800 sm:text-3xl">
          {t("News") ?? "News"}
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-zinc-600">
          {t("newsDesc") ??
            "Latest updates, press releases, and stories from our operations and partnerships."}
        </p>
      </div>
      <div className="mt-8 space-y-4">
        {NEWS_LIST.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-zinc-100 bg-white px-6 py-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:px-8"
          >
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:items-stretch">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-orange-500">
                  {item.date}
                </div>
                <h3 className="mt-2 text-sm font-semibold text-zinc-900 sm:text-base">
                  {t(item.titleKey) ?? item.titleFallback}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 sm:text-sm">
                  {t(item.descKey) ?? item.descFallback}
                </p>
                <button className="mt-3 text-xs font-semibold text-orange-500 underline-offset-4 hover:underline">
                  {t("readMoreCta") ?? "Read More"}
                </button>
              </div>
              <div className="relative mt-2 h-24 w-full overflow-hidden rounded-xl bg-zinc-100 sm:mt-0 sm:h-[140px] sm:-my-5 sm:-mr-8 sm:rounded-l-none sm:rounded-r-2xl sm:bg-transparent lg:h-[160px]">
                <Image
                  src={item.image}
                  alt={t(item.titleKey) ?? item.titleFallback}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 320px"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

