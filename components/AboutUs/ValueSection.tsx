"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const REPORT_ITEMS = [
  {
    id: "annual-report-2024",
    date: "20 June 2025",
    titleKey: "newsAnnualReport2024Title",
    titleFallback: "Annual Report 2024",
    descKey: "newsAnnualReport2024Desc",
    descFallback: "Download our Annual Report 2024 for detailed performance insights.",
    ctaKey: "download",
  },
  {
    id: "financial-report-2025",
    date: "30 March 2025",
    titleKey: "newsFinancialReport2025Title",
    titleFallback: "Financial Report 2025",
    descKey: "newsFinancialReport2025Desc",
    descFallback: "Financial highlights and key figures for the year 2025.",
    ctaKey: "download",
  },
  {
    id: "sustainability-report-2024",
    date: "15 December 2024",
    titleKey: "newsSustainabilityReport2024Title",
    titleFallback: "Sustainability Report 2024",
    descKey: "newsSustainabilityReport2024Desc",
    descFallback: "Our approach and progress on sustainability initiatives.",
    ctaKey: "download",
  },
] as const;

export default function ValueSection() {
  const { t } = useLanguage();

  return (
    <section className="mt-24">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] md:items-start">
        {/* Left highlight card */}
        <div className="relative overflow-hidden rounded-3xl bg-orange-50 px-8 py-10 text-zinc-900 shadow-sm sm:px-10 sm:py-12">
          {/* soft shapes */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-orange-200/40" />
          <div className="pointer-events-none absolute -right-10 top-10 h-32 w-32 rounded-full bg-orange-100/60" />
          <div className="pointer-events-none absolute -right-24 bottom-[-40px] h-52 w-52 rounded-full bg-orange-200/40" />

          <div className="relative flex h-full flex-col justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                {t("valueForInvestorLabel") ?? "VALUE FOR"}
              </p>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-zinc-900 sm:text-3xl">
                {t("investorTitle") ?? "INVESTOR"}
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-zinc-700">
                {t("investorDesc") ??
                  "Strategic decision making and maximizing returns through transparent reporting."}
              </p>
            </div>

            <button className="inline-flex w-fit items-center justify-center rounded-full bg-orange-500 px-7 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600">
              {t("learnMore")}
            </button>
          </div>
        </div>

        {/* Right list of key reports */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold uppercase tracking-tight text-zinc-800 sm:text-xl">
            {t("keyReportsTitle") ?? "Key Reports"}
          </h3>
          <p className="text-sm text-zinc-600">
            {t("keyReportsSubtitle") ??
              "Access our latest annual, financial, and sustainability reports."}
          </p>

          <div className="divide-y divide-zinc-100 rounded-2xl border border-zinc-100 bg-white shadow-sm">
            {REPORT_ITEMS.map((item) => (
              <article
                key={item.id}
                className="flex cursor-pointer flex-col gap-3 px-5 py-4 transition-colors hover:bg-orange-50/60 sm:flex-row sm:items-center sm:gap-8 sm:px-7"
              >
                <div className="w-full max-w-[160px] shrink-0 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                  {item.date}
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-sm font-semibold text-zinc-900 sm:text-base">
                    {t(item.titleKey) ?? item.titleFallback}
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-600 sm:text-sm">
                    {t(item.descKey) ?? item.descFallback}
                  </p>
                </div>
                <div className="flex items-center justify-start sm:justify-end">
                  <button className="inline-flex items-center gap-1 rounded-full border border-orange-500 px-4 py-1.5 text-xs font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white">
                    {t(item.ctaKey) ?? "Download"}
                    <span aria-hidden>⬇︎</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

