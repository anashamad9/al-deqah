"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Layers3, ShieldHalf, Info, BookOpen, Handshake, Newspaper } from "lucide-react"

import { cn } from "@/lib/utils"
import LanguageToggle from "@/components/language-toggle"
import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"
import { useDeqahAI } from "@/components/deqah-ai-widget"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { solutions } from "@/lib/solutions"
import { getLocalizedSolutions } from "@/lib/solutions-localized"

const NAV_LINKS = [
  { key: "solutions", href: "/solutions", icon: Layers3 },
  { key: "sectors", href: "/#sectors", icon: ShieldHalf },
  { key: "about", href: "/about", icon: Info },
  { key: "blog", href: "/blog", icon: Newspaper, soon: true },
  { key: "partners", href: "/partners", icon: Handshake },
] as const

const NAV_LABELS: Record<Language, Record<(typeof NAV_LINKS)[number]["key"], string>> = {
  en: {
    solutions: "Our Services",
    sectors: "Sectors",
    about: "About Us",
    blog: "Blog",
    partners: "Partners",
  },
  ar: {
    solutions: "خدماتنا",
    sectors: "القطاعات",
    about: "من نحن",
    blog: "المدونة",
    partners: "الشركاء",
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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLabels = useMemo(() => NAV_LABELS[language], [language])
  const localizedSolutions = useMemo(() => getLocalizedSolutions(language, solutions), [language])
  const solutionMenuItems = useMemo(
    () => [
      ...localizedSolutions.map((solution) => ({
        slug: `/solutions/${solution.slug}`,
        name: solution.name,
        tagline: solution.tagline,
      })),
      {
        slug: "/training",
        name: language === "ar" ? "برامج التدريب وتطوير القدرات" : "Training & Capability Uplift",
        tagline:
          language === "ar"
            ? "برامج متخصصة لرفع جاهزية القيادة والكوادر في بيئات العمل الرقمية."
            : "Specialized programmes that accelerate leadership, project delivery, and workforce readiness.",
      },
    ],
    [language, localizedSolutions]
  )
  const viewAllLabel = language === "ar" ? "عرض كل الحلول" : "See all solutions"

  const glassyClasses =
    variant === "dark"
      ? "border border-white/15 bg-[#0c0805]/70 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.65)] backdrop-saturate-150"
      : "border border-neutral-200/60 bg-white/65 shadow-[0_45px_100px_-70px_rgba(15,23,42,0.4)] backdrop-saturate-150"
  const solidClasses =
    variant === "dark"
      ? "border border-white/20 bg-[#0c0805]/90 shadow-[0_25px_70px_-40px_rgba(0,0,0,0.75)] backdrop-saturate-100"
      : "border border-neutral-200/80 bg-white shadow-[0_50px_120px_-65px_rgba(15,23,42,0.45)] backdrop-saturate-100"
  const backgroundClasses = isScrolled ? solidClasses : glassyClasses
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
      ? "bg-white text-[#0c0805] hover:shadow-[0_12px_22px_-12px_rgba(255,255,255,0.65)]"
      : "bg-black text-white hover:bg-[#23140e] hover:shadow-[0_15px_30px_-12px_rgba(134,55,48,0.45)]"

  return (
    <header
      className={cn(
        "fixed left-1/2 top-6 z-50 flex w-[min(calc(100%-3rem),1100px)] -translate-x-1/2 items-center justify-between rounded-[32px] px-5 py-3 transition-all duration-300 supports-[backdrop-filter]:backdrop-blur-xl md:px-8",
        backgroundClasses,
        className
      )}
    >
      {showLogo ? (
        <Link href="/" className="flex items-center" aria-label="Al-Deqah home">
          <Image src="/logo-2.png" alt="Al-Deqah logo" width={60} height={78} priority className="h-10 w-auto" />
        </Link>
      ) : (
        <span />
      )}

      <nav className="hidden items-center gap-2 md:flex">
        {NAV_LINKS.map((item) => {
          const Icon = item.icon
          const isSoon = Boolean((item as { soon?: boolean }).soon)
          const label = navLabels[item.key as keyof typeof navLabels]
          if (item.key === "solutions") {
            return (
              <HoverCard key={item.key} openDelay={150} closeDelay={150}>
                <HoverCardTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm font-normal transition-all duration-200",
                      language === "ar" && "arabic flex-row-reverse",
                      linkClasses
                    )}
                  >
                    <Icon className="h-5 w-5 text-[#a05a3c]" strokeWidth={1.6} />
                    <span>{label}</span>
                  </button>
                </HoverCardTrigger>
                <HoverCardContent
                  align="start"
                  className={cn(
                    "w-[640px] rounded-3xl border border-neutral-200/60 bg-white/95 p-0 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.4)] backdrop-blur",
                    language === "ar" && "text-right arabic"
                  )}
                >
                  <div
                    className={cn(
                      "grid overflow-hidden md:grid-cols-[1.2fr_2fr]",
                      language === "ar" ? "md:grid-flow-col-dense" : ""
                    )}
                  >
                    <div className="flex flex-col justify-between gap-6 bg-gradient-to-br from-[#fdf7f3] via-white to-[#f3e7e0] p-6">
                      <div className="space-y-3">
                        <h3 className="text-lg font-medium text-neutral-900">{label}</h3>
                        <p className="text-sm text-neutral-600">
                          {language === "ar"
                            ? "تعرّف على منصاتنا المكانية والذكية وكيف نفعّلها عبر القطاعات."
                            : "Explore spatial, intelligent, and connected platforms engineered for critical missions."}
                        </p>
                      </div>
                      <Link
                        href="/solutions"
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full bg-[#863730] px-4 py-2 text-xs font-medium text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-[#742f29]",
                          language === "ar" && "flex-row-reverse arabic"
                        )}
                      >
                        <span>{viewAllLabel}</span>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-2 p-6">
                      {solutionMenuItems.map((solutionItem) => (
                        <Link
                          key={solutionItem.slug}
                          href={solutionItem.slug}
                          className={cn(
                            "group flex flex-col gap-1 rounded-2xl border border-transparent px-4 py-3 text-left transition-all duration-200 hover:border-[#863730]/40 hover:bg-[#fdf7f3] hover:shadow-sm",
                            language === "ar" && "text-right arabic"
                          )}
                        >
                          <span className="text-sm font-medium text-neutral-900">{solutionItem.name}</span>
                          <span className="text-xs text-neutral-500 leading-relaxed">{solutionItem.tagline}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            )
          }
          const content = (
            <>
              <Icon className="h-5 w-5 text-[#a05a3c]" strokeWidth={1.6} />
              <span className="text-sm leading-none">{label}</span>
              {isSoon ? (
                <span className={`rounded-full border border-[#e6d3c8] bg-[#fdf7f3] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a05a3c] ${language === "ar" ? "arabic" : ""}`}>
                  {language === "ar" ? "قريباً" : "Soon"}
                </span>
              ) : null}
            </>
          )

          const soonClasses =
            variant === "dark"
              ? "text-white/50 hover:text-white/70 hover:bg-white/10"
              : "text-neutral-500 hover:text-neutral-700 hover:bg-neutral-900/5"

          return (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm font-normal transition-all duration-200",
                language === "ar" && "arabic flex-row-reverse",
                isSoon ? soonClasses : linkClasses
              )}
            >
              {content}
            </Link>
          )
        })}
      </nav>

      <div className="flex items-center gap-3">
        {showLanguageToggle ? <LanguageToggle variant={variant} /> : null}
        {showAssistantCta ? (
          <button
            type="button"
            onClick={open}
            id="gooey-btn"
            className="group relative flex items-center transition-transform duration-200 hover:-translate-y-0.5"
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
