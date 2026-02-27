"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const navLinks = [
  {
    key: "about",
    href: "#about",
    hasDropdown: true,
    subLinks: [
      "bayanOverview",
      "visionMission",
      "fromPresident",
      "corporateStructure",
      "organization",
      "corporateGovernance",
      "awardsRecognition",
      "contact",
    ],
  },
  {
    key: "coalHauling",
    href: "#coal-hauling",
    hasDropdown: true,
    subLinks: ["bayanOverview", "fleet", "operations", "services", "contact"],
  },
  {
    key: "ourTeam",
    href: "#our-team",
    hasDropdown: true,
    subLinks: ["leadership", "departments", "careers", "organization", "contact"],
  },
  {
    key: "projects",
    href: "#projects",
    hasDropdown: true,
    subLinks: ["currentProjects", "completedProjects", "bayanOverview", "contact", "news"],
  },
] as const;

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const SCROLL_THRESHOLD = 50;

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [openNavDropdown, setOpenNavDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navDropdownRef = useRef<HTMLDivElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isSearchOpenRef = useRef(isSearchOpen);

  useEffect(() => {
    isSearchOpenRef.current = isSearchOpen;
  }, [isSearchOpen]);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setOpenNavDropdown(null), 300);
  };

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
      setOpenNavDropdown(null);
      setIsSearchOpen(false);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const searchBar = document.getElementById("search-bar");
      const isSearchButton = searchButtonRef.current?.contains(target);
      const isInsideSearchBar = searchBarRef.current?.contains(target) ?? searchBar?.contains(target) ?? false;
      const searchOpen = isSearchOpenRef.current;
      if (searchOpen && isInsideSearchBar) return;
      if (!isSearchButton && searchOpen && !isInsideSearchBar) {
        setIsSearchOpen(false);
        return;
      }
      if (
        !isSearchButton &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        navDropdownRef.current &&
        !navDropdownRef.current.contains(target)
      ) {
        setIsLangDropdownOpen(false);
        setOpenNavDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearCloseTimeout();
    };
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const textClass = isScrolled
    ? "text-zinc-800 hover:text-orange-500"
    : "text-white hover:text-orange-300";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* Subtle dark overlay when transparent - for text visibility */}
      {!isScrolled && (
        <div
          className="pointer-events-none absolute inset-0 bg-black/10"
          aria-hidden
        />
      )}
      {/* White background - animates from top on scroll */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 bg-white shadow-sm transition-[height] duration-300 ease-out ${
          isScrolled ? "h-full" : "h-0"
        }`}
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {isSearchOpen ? (
          /* Search mode - navbar switches to search bar */
          <div
            id="search-bar"
            ref={searchBarRef}
            className="flex w-full items-center gap-3 animate-search-open"
          >
            <div className="flex flex-1 items-center gap-3 rounded-full border border-zinc-200 bg-zinc-100/80 px-5 py-3">
              <SearchIcon className="size-5 shrink-0 text-orange-500" />
              <input
                type="search"
                placeholder={t("search")}
                className="flex-1 bg-transparent text-sm text-zinc-900 placeholder:text-zinc-500 focus:outline-none"
                autoFocus
              />
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className={`shrink-0 p-1 transition-colors ${textClass}`}
              aria-label="Close search"
            >
              <CloseIcon />
            </button>
          </div>
        ) : (
          <>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/B.png"
            alt="Logo"
            width={28}
            height={28}
            className="object-contain"
            priority
          />
          <span
            className={`text-sm font-bold uppercase italic tracking-[0.02em] transition-colors sm:text-base ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            PT Batara Dharma Persada
          </span>
        </Link>

        {/* Nav Links */}
        <div
          ref={navDropdownRef}
          className="hidden items-center gap-8 pl-16 md:flex"
        >
          {navLinks.map((link) => (
            <div
              key={link.key}
              className="relative"
              onMouseEnter={() => {
                if (link.hasDropdown) {
                  clearCloseTimeout();
                  setOpenNavDropdown(link.key);
                }
              }}
              onMouseLeave={() => link.hasDropdown && scheduleClose()}
            >
              <a
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.15em] transition-colors ${textClass} ${
                  openNavDropdown === link.key ? "text-orange-500" : ""
                }`}
              >
                {t(link.key)}
              </a>
              {link.hasDropdown && openNavDropdown === link.key && (
                <div
                  className="fixed left-1/2 top-20 z-50 w-[min(80vw,900px)] -translate-x-1/2 animate-fade-in"
                  onMouseEnter={() => {
                    clearCloseTimeout();
                    setOpenNavDropdown(link.key);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <div className="relative min-h-[50vh] overflow-hidden rounded-2xl border border-zinc-100 p-10 shadow-xl">
                    {/* Background image - positioned from right */}
                    <div className="pointer-events-none absolute inset-0">
                      <Image
                        src="/BG_CARD%20HOVER_NAVBAR.png"
                        alt=""
                        fill
                        className="object-cover object-right"
                      />
                    </div>
                    {/* Light overlay from left - fades to show graphic on right */}
                    <div
                      className="pointer-events-none absolute inset-0 bg-linear-to-r from-white via-white/90 to-white/40"
                      aria-hidden
                    />
                    <div className="relative flex gap-10">
                      {/* Left: Image + description */}
                      <div className="flex-1 min-w-0">
                        <div className="aspect-video w-full overflow-hidden rounded-lg bg-zinc-100">
                          <Image
                            src="/Test1.JPG"
                            alt=""
                            width={320}
                            height={180}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <h3 className="mt-5 text-xl font-bold text-zinc-900">
                          {t(link.key)}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                          {t(`${link.key}Desc`)}
                        </p>
                        <Link
                          href={link.href}
                          className="mt-5 inline-block rounded border border-orange-500 px-5 py-2.5 text-sm font-medium text-orange-500 transition-colors hover:bg-orange-50"
                          onClick={() => setOpenNavDropdown(null)}
                        >
                          {t("learnMore")}...
                        </Link>
                      </div>
                      {/* Right: Link list */}
                      <div className="relative flex flex-1 flex-col gap-3 pl-4">
                        {link.subLinks?.map((subKey) => (
                          <Link
                            key={subKey}
                            href={`#${subKey}`}
                            className="relative z-10 text-sm text-zinc-700 transition-colors hover:text-orange-500"
                            onClick={() => setOpenNavDropdown(null)}
                          >
                            {t(subKey)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side: Language + Search */}
        <div className="flex items-center gap-6">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className={`flex items-center gap-1.5 text-xs font-normal uppercase tracking-[0.15em] transition-colors ${textClass}`}
              aria-expanded={isLangDropdownOpen}
              aria-haspopup="listbox"
            >
              {language === "en" ? "EN" : "ID"}
              <ChevronDownIcon
                className={`transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isLangDropdownOpen && (
              <ul
                className="absolute right-0 top-full mt-2 min-w-[80px] rounded-md border border-zinc-200 bg-white py-1 shadow-lg"
                role="listbox"
              >
                <li role="option" aria-selected={language === "en"}>
                  <button
                    onClick={() => handleLanguageSelect("en")}
                    className={`block w-full px-4 py-2 text-left text-sm font-normal hover:bg-zinc-50 ${
                      language === "en"
                        ? "bg-orange-50 font-medium text-orange-600"
                        : "text-zinc-700"
                    }`}
                  >
                    English
                  </button>
                </li>
                <li role="option" aria-selected={language === "id"}>
                  <button
                    onClick={() => handleLanguageSelect("id")}
                    className={`block w-full px-4 py-2 text-left text-sm font-normal hover:bg-zinc-50 ${
                      language === "id"
                        ? "bg-orange-50 font-medium text-orange-600"
                        : "text-zinc-700"
                    }`}
                  >
                    Indonesia
                  </button>
                </li>
              </ul>
            )}
          </div>

          <button
            ref={searchButtonRef}
            aria-label="Search"
            aria-expanded={isSearchOpen}
            onClick={() => setIsSearchOpen(true)}
            className={`transition-colors ${textClass}`}
          >
            <SearchIcon />
          </button>
        </div>
          </>
        )}
      </div>
    </nav>
  );
}
