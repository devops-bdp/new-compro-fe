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
    aboutUs: "ABOUT US",
    aboutUsParagraph1:
      "Bayan Resources operates in the open-cut mining sector with four major projects located in East and South Kalimantan, Indonesia.",
    aboutUsParagraph2:
      "As an integrated coal producer, Bayan produces coal ranging from high-calorific bituminous coal to low-sulfur and low-ash sub-bituminous coal.",
    statsTitle: "OUR PRODUCTION CONTINUES TO GROW",
    millionTons: "MILLION TONS",
    siteLocationsTitle: "OUR SITE LOCATIONS",
    province: "Province",
    regency: "Regency",
    senyiurSiteName: "Senyiur",
    senyiurSiteDesc:
      "Senyiur is one of the villages in Muara Ancalong District, Kutai Timur Regency, East Kalimantan Province. PT Batara Dharma Persada operates coal hauling services in this area.",
    senyiurSiteProvince: "East Kalimantan",
    senyiurSiteRegency: "Kutai Timur",
    muarapahuSiteName: "Muara Pahu",
    muarapahuSiteDesc:
      "Muara Pahu is a sub-district in West Kutai Regency, East Kalimantan. Our operations here support coal transportation and logistics for the surrounding mining areas.",
    muarapahuSiteProvince: "East Kalimantan",
    muarapahuSiteRegency: "Kutai Barat",
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
    aboutUs: "TENTANG KAMI",
    aboutUsParagraph1:
      "Bayan Resources bergerak di bidang pertambangan open cut dengan empat proyek besar yang berlokasi di Kalimantan Timur dan Selatan, Indonesia.",
    aboutUsParagraph2:
      "Sebagai produsen batubara terintegrasi, Bayan memproduksi batubara yang berkisar dari batubara bituminus berkalori tinggi hingga batubara sub-bituminus berkadar belerang dan abu rendah.",
    statsTitle: "PRODUKSI KAMI TERUS BERTUMBUH",
    millionTons: "JUTA TON",
    siteLocationsTitle: "LOKASI SITE KAMI",
    province: "Provinsi",
    regency: "Kabupaten",
    senyiurSiteName: "Senyiur",
    senyiurSiteDesc:
      "Senyiur adalah salah satu desa di wilayah kecamatan Muara Ancalong, Kabupaten Kutai Timur, Provinsi Kalimantan Timur. PT Batara Dharma Persada mengoperasikan layanan coal hauling di area ini.",
    senyiurSiteProvince: "Kalimantan Timur",
    senyiurSiteRegency: "Kutai Timur",
    muarapahuSiteName: "Muara Pahu",
    muarapahuSiteDesc:
      "Muara Pahu adalah sebuah kecamatan di Kabupaten Kutai Barat, Kalimantan Timur. Operasi kami di sini mendukung transportasi batubara dan logistik untuk area pertambangan sekitarnya.",
    muarapahuSiteProvince: "Kalimantan Timur",
    muarapahuSiteRegency: "Kutai Barat",
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
