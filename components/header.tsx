"use client"

import Image from "next/image"
import Link from "next/link"

import LanguageToggle from "@/components/language-toggle"
import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"
import { useDeqahAI } from "@/components/deqah-ai-widget"

const NAV_LINKS = [
  { key: "solutions", href: "/solutions" },
  { key: "services", href: "/#services" },
  { key: "sectors", href: "/#sectors" },
  { key: "whyUs", href: "/#why-us" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const

const NAV_LABELS: Record<Language, Record<(typeof NAV_LINKS)[number]["key"], string>> = {
  en: {
    solutions: "Solutions",
    services: "Services",
    sectors: "Sectors",
    whyUs: "Why Us",
    about: "About",
    contact: "Contact",
  },
  ar: {
    solutions: "الحلول",
    services: "الخدمات",
    sectors: "القطاعات",
    whyUs: "لماذا نحن",
    about: "من نحن",
    contact: "تواصل معنا",
  },
}

export default function Header() {
  const { language } = useLanguage()
  const { open } = useDeqahAI()

  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo-2.png" alt="Al-Deqah logo" width={60} height={78} priority className="h-12 w-auto" />
      </div>

      {/* Navigation */}
      <nav className="hidden items-center space-x-2 md:flex">
        {NAV_LINKS.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={`rounded-full px-3 py-2 text-xs font-light text-neutral-800 transition-all duration-200 hover:bg-neutral-900/5 hover:text-neutral-950 ${
              language === "ar" ? "arabic" : ""
            }`}
          >
            {NAV_LABELS[language][item.key]}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <LanguageToggle />
        <button
          type="button"
          onClick={open}
          id="gooey-btn"
          className="relative flex items-center group"
          style={{ filter: "url(#gooey-filter)" }}
        >
          <span className="absolute right-0 flex h-8 w-8 items-center justify-center -translate-x-10 rounded-full bg-black text-white transition-all duration-300 group-hover:-translate-x-19">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </span>
          <span className="z-10 flex h-8 items-center rounded-full bg-black px-6 py-2 text-xs font-normal text-white transition-all duration-300 group-hover:bg-black/80">
            Talk to AI
          </span>
        </button>
      </div>
    </header>
  )
}
