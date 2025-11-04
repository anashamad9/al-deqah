"use client"

import { useMemo } from "react"

import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, ArrowUpRight, Linkedin, Instagram } from "lucide-react"

import { useLanguage } from "@/components/language-context"
import { useDeqahAI } from "@/components/deqah-ai-widget"
import type { Language } from "@/lib/i18n"
import { solutions } from "@/lib/solutions"
import { getLocalizedSolutions } from "@/lib/solutions-localized"

const COMPANY_LINKS = [
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
  { key: "deqahAI", href: "/deqah-ai" },
  { key: "insights", href: "#" },
] as const

const SOCIAL_LINKS = [
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
] as const

const FOOTER_COPY: Record<
  Language,
  {
    brandLabel: string
    brandTagline: string
    description: string
    ctaLabel: string
    ctaHeading: string
    ctaButton: string
    contactCard: {
      label: string
      address: string
      details: string
    }
    navTitles: {
      company: string
      solutions: string
      social: string
    }
    companyLinks: Record<(typeof COMPANY_LINKS)[number]["key"], string>
    contactItems: {
      email: string
      phone: string
      location: string
    }
    legal: {
      rights: string
      terms: string
      privacy: string
      cookies: string
    }
  }
> = {
  en: {
    brandLabel: "Al-Deqah",
    brandTagline: "Advanced Visual Technology & Intelligent Systems",
    description:
      "Fusing spatial computing, intelligent automation, and immersive design to help organizations architect transformative experiences and measurable outcomes.",
    ctaLabel: "Let's collaborate",
    ctaHeading: "Ready to prototype the next dimension of your digital experience?",
    ctaButton: "Start a project",
    contactCard: {
      label: "Headquarters",
      address: "Al-Deqah Tech, Amman - Jordan",
      details: "info@aldeqah-tech.com · +962 79 200 7354",
    },
    navTitles: {
      company: "Company",
      solutions: "Solutions",
      social: "Social",
    },
    companyLinks: {
      about: "About",
      contact: "Contact",
      deqahAI: "Deqah AI",
      insights: "Industry Insights",
    },
    contactItems: {
      email: "info@aldeqah-tech.com",
      phone: "+962 79 200 7354",
      location: "Amman, Jordan",
    },
    legal: {
      rights: "Al-Deqah. All rights reserved.",
      terms: "Terms",
      privacy: "Privacy",
      cookies: "Cookies",
    },
  },
  ar: {
    brandLabel: "شركة الدقة",
    brandTagline: "حلول رقمية غامرة وأنظمة متصلة",
    description:
      "نمزج الحوسبة المكانية، والأتمتة الذكية، والتصميم الغامر لمساعدة المؤسسات على بناء تجارب تحويلية ونتائج قابلة للقياس.",
    ctaLabel: "لنتعاون",
    ctaHeading: "هل أنت مستعد لنموذج أولي للبعد التالي من تجربتك الرقمية؟",
    ctaButton: "ابدأ مشروعاً",
    contactCard: {
      label: "المقر الرئيسي",
      address: "شركة الدقة، عمّان - الأردن",
      details: "info@aldeqah-tech.com · ‎+962 79 200 7354",
    },
    navTitles: {
      company: "الشركة",
      solutions: "الحلول",
      social: "التواصل",
    },
    companyLinks: {
      about: "من نحن",
      contact: "تواصل معنا",
      deqahAI: "الدقة AI",
      insights: "رؤى صناعية",
    },
    contactItems: {
      email: "info@aldeqah-tech.com",
      phone: "+962 79 200 7354",
      location: "عمّان، الأردن",
    },
    legal: {
      rights: "شركة الدقة. جميع الحقوق محفوظة.",
      terms: "الشروط",
      privacy: "الخصوصية",
      cookies: "الكوكيز",
    },
  },
}

const CONTACT_ITEMS = [
  {
    key: "email",
    icon: Mail,
    href: "mailto:info@aldeqah-tech.com",
  },
  {
    key: "phone",
    icon: Phone,
    href: "tel:+962792007354",
  },
  {
    key: "location",
    icon: MapPin,
  },
] as const

export default function Footer() {
  const { language } = useLanguage()
  const copy = FOOTER_COPY[language]
  const isArabic = language === "ar"
  const { open } = useDeqahAI()
  const localizedSolutions = useMemo(() => getLocalizedSolutions(language, solutions), [language])

  return (
    <footer className="relative overflow-hidden bg-[#0c0805] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1d140d] to-black opacity-90" />
        <div className="absolute left-1/2 top-[-35%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#863730]/25 blur-3xl opacity-70" />
        <div className="absolute bottom-[-45%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[#863730]/25 blur-3xl opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-8 py-20 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,340px)_1fr]">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className={`flex items-center gap-4 ${isArabic ? "flex-row-reverse text-right" : ""}`}>
                <div className="flex size-14 items-center justify-center rounded-full bg-white/10">
                  <Image src="/logo-2.png" alt="Al-Deqah logo" width={52} height={68} className="h-10 w-auto" />
                </div>
                <div className={isArabic ? "text-right arabic" : ""}>
                  <p className={`text-xs uppercase tracking-[0.35em] text-[#863730] ${isArabic ? "arabic" : ""}`}>
                    {copy.brandLabel}
                  </p>
                  <p className={`text-sm font-light text-white/70 ${isArabic ? "arabic" : ""}`}>{copy.brandTagline}</p>
                </div>
              </div>
              <p className={`text-sm font-light text-white/70 leading-relaxed ${isArabic ? "arabic text-right" : ""}`}>
                {copy.description}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_65px_-55px_rgba(255,255,255,0.65)] backdrop-blur">
              <p className={`text-xs uppercase tracking-[0.3em] text-[#863730] ${isArabic ? "arabic text-right" : ""}`}>
                {copy.ctaLabel}
              </p>
              <h3 className={`mt-3 text-lg font-medium text-white ${isArabic ? "arabic text-right" : ""}`}>
                {copy.ctaHeading}
              </h3>
              <Link
                href="/contact"
                className={`mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-medium text-black transition-transform duration-300 hover:scale-105 ${
                  isArabic ? "flex-row-reverse arabic" : ""
                }`}
              >
                {copy.ctaButton}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-[#863730]/30 bg-white/5 p-6 text-xs font-light text-white/70 shadow-[0_25px_60px_-55px_rgba(255,255,255,0.45)]">
              <p
                className={`uppercase tracking-[0.3em] text-[#863730] ${isArabic ? "arabic text-right" : ""}`}
              >
                {copy.contactCard.label}
              </p>
              <p className={`mt-3 text-sm ${isArabic ? "arabic text-right" : ""}`}>{copy.contactCard.address}</p>
              <p className={`mt-1 text-sm ${isArabic ? "arabic text-right" : ""}`}>{copy.contactCard.details}</p>
            </div>

            <div className="space-y-4">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon
                const label = copy.contactItems[item.key]
                const content = (
                  <div
                    className={`flex items-center gap-3 text-sm font-light text-white/70 transition-colors duration-200 hover:text-white ${
                      isArabic ? "flex-row-reverse text-right arabic" : ""
                    }`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#863730]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>{label}</span>
                  </div>
                )

                return item.href ? (
                  <a key={item.key} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.key}>{content}</div>
                )
              })}
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: copy.navTitles.company,
                links: COMPANY_LINKS.map((link) => ({
                  ...link,
                  label: copy.companyLinks[link.key],
                  isAI: link.key === "deqahAI",
                })),
              },
              {
                title: copy.navTitles.solutions,
                links: localizedSolutions.map((solution) => ({
                  label: solution.name,
                  href: `/solutions/${solution.slug}`,
                })),
              },
            ].map((column) => (
              <div key={column.title} className="space-y-5">
                <p
                  className={`text-xs uppercase tracking-[0.3em] text-white/40 ${isArabic ? "arabic text-right" : ""}`}
                >
                  {column.title}
                </p>
                <ul className={`space-y-3 text-sm font-light text-white/70 ${isArabic ? "text-right" : ""}`}>
                  {column.links.map((link) => {
                    const content = (
                      <>
                        <span className={isArabic ? "arabic" : ""}>{link.label}</span>
                        <ArrowUpRight className="h-3 w-3 text-[#863730]/70" />
                      </>
                    )

                    const className = `inline-flex items-center gap-2 transition-colors duration-200 hover:text-white ${
                      isArabic ? "flex-row-reverse arabic" : ""
                    }`

                    if ("isAI" in link && link.isAI) {
                      return (
                        <li key={link.label}>
                          <button type="button" onClick={open} className={className}>
                            {content}
                          </button>
                        </li>
                      )
                    }

                    if ("href" in link && typeof link.href === "string" && link.href.startsWith("/")) {
                      return (
                        <li key={link.label}>
                          <Link href={link.href} className={className}>
                            {content}
                          </Link>
                        </li>
                      )
                    }

                    return (
                      <li key={link.label}>
                        <a href={("href" in link && link.href) || "#"} className={className}>
                          {content}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}

            <div className="space-y-5">
              <p className={`text-xs uppercase tracking-[0.3em] text-white/40 ${isArabic ? "arabic text-right" : ""}`}>
                {copy.navTitles.social}
              </p>
              <div className={`flex flex-wrap gap-3 ${isArabic ? "justify-end" : ""}`}>
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/70 transition-all duration-200 hover:border-[#863730]/60 hover:text-white ${
                        isArabic ? "flex-row-reverse arabic" : ""
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {social.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-xs font-light text-white/50 sm:flex sm:items-center sm:justify-between">
          <p className={isArabic ? "arabic text-right" : ""}>
            &copy; {new Date().getFullYear()} {copy.legal.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
