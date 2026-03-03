"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ORG_CHARS = ["orgChar1", "orgChar2", "orgChar3", "orgChar4"] as const;

const TEMPLATE_CARDS = [
  { key: "vision", contentKey: "visionContent", placeholderKey: "visionPlaceholder", icon: "🎯" },
  { key: "mission", contentKey: "missionContent", placeholderKey: "missionPlaceholder", icon: "🚀" },
  { key: "coreValues", contentKey: "coreValuesContent", placeholderKey: "coreValuesPlaceholder", icon: "💎" },
  { key: "addYourContent", contentKey: "addYourContentText", placeholderKey: "addYourContentPlaceholder", icon: "📌" },
] as const;

export default function OrganizationSection() {
  const { t } = useLanguage();
  const [expandedChar, setExpandedChar] = useState<number | null>(null);

  return (
    <section className="border-b border-zinc-200 bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Quick stats - interactive */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "300+", labelKey: "totalEmployees" },
            { value: "125+", labelKey: "operators" },
            { value: "12", labelKey: "departments" },
            { value: "2", labelKey: "locations" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group rounded-xl border border-zinc-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
            >
              <p className="text-2xl font-bold text-orange-600 transition-colors group-hover:text-orange-500">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-zinc-500">
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Umbrella + Quick links */}
        <div className="rounded-xl border border-orange-200 bg-linear-to-br from-orange-50/80 to-zinc-50 p-6 shadow-sm">
          <p className="text-zinc-700">👉 {t("organizationUmbrella")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/our-team"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow"
            >
              <span>{t("leadership")}</span>
              <span className="opacity-75 transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="/departments"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-orange-500 px-5 py-2.5 text-sm font-medium text-orange-600 transition-all hover:-translate-y-0.5 hover:bg-orange-50"
            >
              <span>{t("departments")}</span>
              <span className="opacity-75 transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </div>

        {/* Key characteristics - click to expand */}
        <div className="mt-12">
          <h2 className="mb-6 text-xl font-bold text-zinc-900">
            {t("orgMainChars")}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {ORG_CHARS.map((key, idx) => (
              <button
                key={key}
                type="button"
                onClick={() => setExpandedChar(expandedChar === idx ? null : idx)}
                className={`flex items-start gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
                  expandedChar === idx
                    ? "border-orange-300 bg-orange-50/50 shadow-sm"
                    : "border-zinc-200 bg-white hover:border-orange-200 hover:bg-zinc-50/50"
                }`}
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                  {idx + 1}
                </span>
                <span className="text-zinc-700">{t(key)}</span>
                <span className="ml-auto shrink-0 text-zinc-400">
                  {expandedChar === idx ? "−" : "+"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Template cards - fill with your content */}
        <div className="mt-16">
          <h2 className="mb-2 text-xl font-bold text-zinc-900">
            {t("companyOverview")}
          </h2>
          <p className="mb-6 text-sm text-zinc-500">
            {t("templateCardsHint")}
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {TEMPLATE_CARDS.map((card) => {
              const content = t(card.contentKey);
              const hasContent = content && content.trim().length > 0;
              return (
                <div
                  key={card.key}
                  className="group flex min-h-[160px] flex-col rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50/50 p-6 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50/30"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl">{card.icon}</span>
                    <h3 className="font-semibold text-orange-600">{t(card.key)}</h3>
                  </div>
                  <div className="flex-1 rounded-lg border border-zinc-100 bg-white p-4">
                    <p className={`text-sm ${hasContent ? "text-zinc-700" : "italic text-zinc-400"}`}>
                      {hasContent ? content : t(card.placeholderKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BDP Organization overview */}
        <div className="mt-16 rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
          <h3 className="font-semibold text-orange-600">
            📌 {t("orgExampleTitle")}
          </h3>
          <p className="mt-3 leading-relaxed text-zinc-700">{t("orgExample")}</p>
        </div>
      </div>
    </section>
  );
}
