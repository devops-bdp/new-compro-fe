"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const SITE_DEPARTMENTS = [
  { deptKey: "productionDept", focusKey: "productionDeptFocus", icon: "🏭" },
  { deptKey: "plantDept", focusKey: "plantDeptFocus", icon: "⚙️" },
  { deptKey: "hrgaDept", focusKey: "hrgaDeptFocus", icon: "👥" },
  { deptKey: "hseDept", focusKey: "hseDeptFocus", icon: "🦺" },
  { deptKey: "logisticDept", focusKey: "logisticDeptFocus", icon: "🚚" },
  { deptKey: "infrastructureDept", focusKey: "infrastructureDeptFocus", icon: "🏗️" },
  { deptKey: "trainingCenterDept", focusKey: "trainingCenterDeptFocus", icon: "📚" },
] as const;

const HEAD_OFFICE_DEPARTMENTS = [
  { deptKey: "operationDept", focusKey: "operationDeptFocus", icon: "📊" },
  { deptKey: "plantDept", focusKey: "plantDeptFocus", icon: "⚙️" },
  { deptKey: "financeDept", focusKey: "financeDeptFocus", icon: "💰" },
  { deptKey: "accountingDept", focusKey: "accountingDeptFocus", icon: "📒" },
  { deptKey: "hrgaDept", focusKey: "hrgaDeptFocus", icon: "👥" },
  { deptKey: "itDept", focusKey: "itDeptFocus", icon: "💻" },
  { deptKey: "procurementDept", focusKey: "procurementDeptFocus", icon: "🛒" },
] as const;

function DepartmentCards({
  departments,
}: {
  departments: ReadonlyArray<{ deptKey: string; focusKey: string; icon: string }>;
}) {
  const { t } = useLanguage();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {departments.map(({ deptKey, focusKey, icon }) => (
        <div
          key={deptKey}
          className="group flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:border-orange-200 hover:shadow-md"
        >
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-2xl transition-colors group-hover:bg-orange-200">
            {icon}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-orange-600">{t(deptKey)}</p>
            <p className="mt-1 text-sm text-zinc-600">{t(focusKey)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DepartmentsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="departments"
      className="border-b border-zinc-200 bg-zinc-50 px-6 py-16 sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          {t("departments")}
        </h2>
        <p className="mt-4 max-w-3xl text-zinc-600">
          {t("ourTeamDesc")}
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Site */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-orange-600">
              <span className="text-xl">📍</span>
              {t("siteDepartment")}
            </h3>
            <DepartmentCards departments={SITE_DEPARTMENTS} />
          </div>

          {/* Head Office */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-orange-600">
              <span className="text-xl">🏢</span>
              {t("headOffice")}
            </h3>
            <DepartmentCards departments={HEAD_OFFICE_DEPARTMENTS} />
          </div>
        </div>
      </div>
    </section>
  );
}
