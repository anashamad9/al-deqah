"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"

import { cn } from "@/lib/utils"
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

const CTA_LABELS: Record<Language, string> = {
  en: "Talk to AI",
  ar: "تحدث مع الذكاء الاصطناعي",
}

type NavBarVariant = "light" | "dark"

type NavBarProps = {
  className?: string
  showLogo?: boolean
  showLanguageToggle?: boolean
  showAssistantCta?: boolean
  variant?: NavBarVariant
}

export default function NavBar({
  className,
  showLogo = true,
  showLanguageToggle = true,
  showAssistantCta = true,
  variant = "light",
}: NavBarProps) {
  const { language } = useLanguage()
  const { open } = useDeqahAI()

  const navLabels = useMemo(() => NAV_LABELS[language], [language])

  const linkClasses =
    variant === "dark"
      ? "text-white/80 hover:text-white hover:bg-white/10"
      : "text-neutral-800 hover:text-neutral-950 hover:bg-neutral-900/5"
  const ctaBubbleClasses =
    variant === "dark"
      ? "bg-[#0c0805] text-white"
      : "bg-black text-white"
  const ctaMainClasses =
    variant === "dark"
      ? "bg-white text-[#0c0805] group-hover:bg-white/90"
      : "bg-black text-white group-hover:bg-black/80"

  return (
    <header className={cn("relative z-20 flex items-center justify-between p-6", className)}>
      {showLogo ? (
        <div className="flex items-center">
          <Image src="/logo-2.png" alt="Al-Deqah logo" width={60} height={78} priority className="h-12 w-auto" />
        </div>
      ) : (
        <span />
      )}

      <nav className="hidden items-center gap-2 md:flex">
        {NAV_LINKS.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={cn(
              "rounded-full px-3 py-2 text-xs font-light transition-all duration-200",
              linkClasses,
              language === "ar" && "arabic"
            )}
          >
            {navLabels[item.key]}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        {showLanguageToggle ? <LanguageToggle variant={variant} /> : null}
        {showAssistantCta ? (
          <button
            type="button"
            onClick={open}
            id="gooey-btn"
            className="group relative flex items-center"
            style={{ filter: "url(#gooey-filter)" }}
          >
            <span
              className={cn(
                "absolute right-0 flex h-8 w-8 items-center justify-center -translate-x-10 rounded-full transition-all duration-300 group-hover:-translate-x-19",
                ctaBubbleClasses
              )}
            >
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
            <span
              className={cn(
                "z-10 flex h-8 items-center rounded-full px-6 py-2 text-xs font-normal transition-all duration-300",
                ctaMainClasses,
                language === "ar" && "arabic"
              )}
            >
              {CTA_LABELS[language]}
            </span>
          </button>
        ) : null}
      </div>
    </header>
  )
}
