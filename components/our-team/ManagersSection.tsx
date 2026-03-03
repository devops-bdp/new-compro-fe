"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const MANAGERS = [
  { roleKey: "managerOperation" as const, name: "Dio Tragitza Rescha" },
  { roleKey: "managerPlant" as const, name: "Dadang Setyawan" },
  { roleKey: "managerHRGA" as const, name: "Eko Supriyanto" },
  { roleKey: "managerFinance" as const, name: "Susanto W" },
  { roleKey: "managerAccounting" as const, name: "Djumadi Herlambang" },
  { roleKey: "managerInfrastructure" as const, name: "Aldi Mezofanti" },
  { roleKey: "managerProcurement" as const, name: "Tedy Susanto" },
] as const;

export default function ManagersSection() {
  const { t } = useLanguage();

  return (
    <section
      id="managers"
      className="border-b border-zinc-200 bg-zinc-50 px-6 py-16 sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          {t("managers")}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MANAGERS.map((manager) => (
            <div
              key={manager.roleKey}
              className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-orange-200"
            >
              <p className="text-sm font-semibold text-orange-600">
                {t(manager.roleKey)}
              </p>
              <p className="mt-1 font-bold text-zinc-900">{manager.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
