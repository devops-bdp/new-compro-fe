"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const STRIVE_LETTERS = [
  { letter: "S", key: "striveS", highlight: false },
  { letter: "T", key: "striveT", highlight: false },
  { letter: "R", key: "striveR", highlight: false },
  { letter: "I", key: "striveI", highlight: true },
  { letter: "V", key: "striveV", highlight: false },
  { letter: "E", key: "striveE", highlight: false },
] as const;

export default function StriveSection() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="border-b border-zinc-200 bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="relative flex justify-center">
            <Image
              src="/STRIVE2.png"
              alt="STRIVE - PT Batara Dharma Persada Core Values"
              width={240}
              height={80}
              className="h-auto w-[180px] object-contain sm:w-[240px]"
            />
          </div>
          <p className="mt-4 text-sm text-zinc-500">{t("striveSubtitle")}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STRIVE_LETTERS.map((item, idx) => (
            <button
              key={item.letter}
              type="button"
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              className={`group flex items-start gap-4 rounded-xl border p-5 text-left transition-all duration-200 ${
                expanded === idx
                  ? "border-orange-300 bg-orange-50/50 shadow-sm"
                  : "border-zinc-200 bg-zinc-50 hover:border-orange-200 hover:bg-orange-50/30"
              }`}
            >
              <span
                className={`flex size-12 shrink-0 items-center justify-center rounded-lg text-xl font-bold ${
                  item.highlight
                    ? "bg-orange-500 text-white"
                    : "bg-zinc-200 text-zinc-700 group-hover:bg-zinc-300"
                }`}
              >
                {item.letter}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={`line-clamp-3 text-sm leading-relaxed text-zinc-600 transition-all ${
                    expanded === idx ? "line-clamp-none" : ""
                  }`}
                >
                  {t(item.key)}
                </p>
              </div>
              <span className="shrink-0 text-zinc-400">
                {expanded === idx ? "−" : "+"}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
