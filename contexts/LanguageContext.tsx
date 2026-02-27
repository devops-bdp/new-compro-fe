"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    about: "ABOUT",
    coalHauling: "COAL HAULING",
    ourTeam: "OUR TEAM",
    projects: "PROJECTS",
    news: "NEWS",
    learnMore: "Learn More",
    ourCommitment: "OUR COMMITMENT",
    toSustainability: "TO SUSTAINABILITY",
    heroTagline: "Let's energize Indonesia. Together.",
    search: "Search",
    aboutDesc: "The business of the Bayan Group is strongly built on the strength of our experience in Indonesia.",
    coalHaulingDesc: "Reliable coal transportation services with modern fleet and experienced team.",
    ourTeamDesc: "Our dedicated professionals committed to excellence and sustainable growth.",
    projectsDesc: "Explore our portfolio of completed and ongoing projects across Indonesia.",
    newsDesc: "Latest updates, press releases, and announcements from our company.",
    bayanOverview: "Bayan Overview",
    visionMission: "Vision & Mission",
    fleet: "Our Fleet",
    operations: "Operations",
    services: "Services",
    leadership: "Leadership",
    departments: "Departments",
    careers: "Careers",
    currentProjects: "Current Projects",
    completedProjects: "Completed Projects",
    pressReleases: "Press Releases",
    announcements: "Announcements",
    fromPresident: "From President Director",
    corporateStructure: "Corporate Structure",
    organization: "Organization",
    corporateGovernance: "Corporate Governance",
    awardsRecognition: "Awards & Recognition",
    contact: "Contact",
  },
  id: {
    about: "TENTANG",
    coalHauling: "TRANSPORTASI BATUBARA",
    ourTeam: "TIM KAMI",
    projects: "PROYEK",
    news: "BERITA",
    learnMore: "Pelajari Lebih Lanjut",
    ourCommitment: "KOMITMEN KAMI",
    toSustainability: "UNTUK KEBERLANJUTAN",
    heroTagline: "Mari bersama-sama memberdayakan Indonesia.",
    search: "Cari",
    aboutDesc: "Bisnis Grup Bayan dibangun kuat berdasarkan pengalaman kami di Indonesia.",
    coalHaulingDesc: "Layanan transportasi batubara yang andal dengan armada modern dan tim berpengalaman.",
    ourTeamDesc: "Profesional kami yang berdedikasi untuk keunggulan dan pertumbuhan berkelanjutan.",
    projectsDesc: "Jelajahi portofolio proyek kami yang telah selesai dan sedang berjalan di Indonesia.",
    newsDesc: "Update terbaru, siaran pers, dan pengumuman dari perusahaan kami.",
    bayanOverview: "Gambaran Bayan",
    visionMission: "Visi & Misi",
    fleet: "Armada Kami",
    operations: "Operasi",
    services: "Layanan",
    leadership: "Kepemimpinan",
    departments: "Departemen",
    careers: "Karir",
    currentProjects: "Proyek Berjalan",
    completedProjects: "Proyek Selesai",
    pressReleases: "Siaran Pers",
    announcements: "Pengumuman",
    fromPresident: "Dari Direktur Utama",
    corporateStructure: "Struktur Perusahaan",
    organization: "Organisasi",
    corporateGovernance: "Tata Kelola Perusahaan",
    awardsRecognition: "Penghargaan & Pengakuan",
    contact: "Kontak",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[language][key] ?? translations.en[key] ?? key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
