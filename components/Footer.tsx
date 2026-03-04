"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-linear-to-b from-black/80 via-black to-black text-neutral-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="grid gap-10 text-sm md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)_minmax(0,1.7fr)]">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8">
                <Image
                  src="/B.png"
                  alt="PT Batara Dharma Persada"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-xs font-semibold tracking-[0.22em] text-white">
                PT BATARA DHARMA
                <br />
                PERSADA
              </div>
            </div>
            <p className="max-w-sm text-xs text-neutral-400">
              {t("heroTagline")}
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3 text-xs">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-neutral-400">
              QUICK LINKS
            </p>
            <div className="flex flex-col gap-1.5 text-[11px] tracking-wide text-neutral-300">
              <a href="#about" className="hover:text-white">
                {t("about")}
              </a>
              <a href="#coal-hauling" className="hover:text-white">
                {t("coalHauling")}
              </a>
              <a href="#our-team" className="hover:text-white">
                {t("ourTeam")}
              </a>
              <a href="#projects" className="hover:text-white">
                {t("projects")}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3 text-xs">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-neutral-400">
              {t("contact")?.toUpperCase() || "CONTACT"}
            </p>
            <div className="space-y-2 text-[11px] leading-relaxed text-neutral-300">
              <p className="font-semibold text-white">
                {t("contactHeadOffice")}
              </p>
              <div>
                <p className="font-semibold text-neutral-400">
                  {t("contactAddress")}
                </p>
                <p className="max-w-xs text-neutral-300">
                  {t("contactAddressValue")}
                </p>
              </div>
              <div>
                <p className="font-semibold text-neutral-400">
                  {t("contactPhone")}
                </p>
                <p className="text-neutral-300">{t("contactPhoneValue")}</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-400">
                  {t("contactEmail")}
                </p>
                <p className="text-neutral-300">{t("contactEmailValue")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-900 pt-4 text-[11px] text-neutral-500">
          <p>
            © {year} PT Batara Dharma Persada. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

