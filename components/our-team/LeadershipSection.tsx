"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const BOD_STRUCTURE = {
  level0: { roleKey: "commissary" as const, name: "Lauw Lie In" },
  level1: { roleKey: "presidentDirector" as const, name: "Eric NG" },
  level2: [
    { roleKey: "director" as const, name: "Alice NG" },
    { roleKey: "director" as const, name: "Tommy" },
    { roleKey: "directorOperations" as const, name: "Sumardi" },
  ],
};

const TRAIT_KEYS = ["traitVision", "traitStrategic", "traitRoleModel", "traitCulture"] as const;

export default function LeadershipSection() {
  const { t } = useLanguage();

  return (
    <section
      id="leadership"
      className="border-b border-zinc-200 bg-white px-6 py-16 sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          {t("leadership")}
        </h2>
        <p className="mt-4 max-w-3xl text-zinc-600">
          {t("leadershipFocus")}
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* BOD Structure - Hierarchical */}
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-orange-600">
              {t("boardOfDirectors")} — PT Batara Dharma Persada
            </h3>
            <div className="mt-6 flex flex-col items-center">
              {/* Level 0: Komisaris */}
              <div className="rounded-lg border-2 border-orange-500 bg-white px-6 py-4 text-center shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-orange-600">
                  {t(BOD_STRUCTURE.level0.roleKey)}
                </p>
                <p className="mt-1 font-bold text-zinc-900">
                  {BOD_STRUCTURE.level0.name}
                </p>
              </div>
              {/* Vertical line */}
              <div className="h-6 w-0.5 bg-zinc-300" />
              {/* Level 1: President Director */}
              <div className="rounded-lg border-2 border-zinc-300 bg-white px-6 py-4 text-center shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-600">
                  {t(BOD_STRUCTURE.level1.roleKey)}
                </p>
                <p className="mt-1 font-bold text-zinc-900">
                  {BOD_STRUCTURE.level1.name}
                </p>
              </div>
              {/* Vertical line + horizontal branch */}
              <div className="flex flex-col items-center">
                <div className="h-6 w-0.5 bg-zinc-300" />
                <div className="h-0.5 w-64 bg-zinc-300 sm:w-80" />
                <div className="flex w-full max-w-md justify-around gap-2 px-2">
                  {BOD_STRUCTURE.level2.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="h-4 w-0.5 bg-zinc-300" />
                      <div className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-center shadow-sm">
                        <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-600">
                          {t(item.roleKey)}
                        </p>
                        <p className="mt-1 text-sm font-bold text-zinc-900">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Leadership traits */}
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">
              {t("leadershipTraits")}
            </h3>
            <ul className="mt-4 space-y-3">
              {TRAIT_KEYS.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-500"
                    aria-hidden
                  />
                  <span className="text-zinc-700">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
