"use client"

import Link from "next/link"

import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"
import { homepageCopy, tString } from "@/lib/translations"

const data = homepageCopy.services

type ServiceItem = {
  title: string
  description: string
  href?: string
}

export default function ServicesSection() {
  const { language } = useLanguage()
  const isArabic = language === "ar"

  const services: ServiceItem[] = data.items.map((item) => ({
    href: item.href,
    title: item.copy[language].title,
    description: item.copy[language].description,
  }))

  return (
    <section id="services" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className={`mb-16 text-center ${isArabic ? "arabic" : ""}`}>
          <h2 className={`text-4xl md:text-5xl font-light text-gray-900 mb-4 ${isArabic ? "leading-snug" : ""}`}>
            {language === "ar" ? (
              <>
                {tString(data.sectionLabel, language)}{" "}
                <span className="font-medium italic text-[#863730]">{tString(data.sectionAccent, language)}</span>
              </>
            ) : (
              <>
                {tString(data.sectionLabel, language)}{" "}
                <span className="font-medium italic text-[#863730]">{tString(data.sectionAccent, language)}</span>
              </>
            )}
          </h2>
          <p className={`mx-auto text-sm font-light text-gray-600 ${isArabic ? "arabic" : ""} max-w-2xl`}>
            {tString(data.description, language)}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={`${service.title}-${index}`}
              language={language}
              exploreLabel={tString(data.exploreLabel, language)}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

type ServiceCardProps = ServiceItem & {
  language: Language
  exploreLabel: string
}

function ServiceCard({ title, description, href, language, exploreLabel }: ServiceCardProps) {
  const isArabic = language === "ar"

  const paddingClass = isArabic ? "pr-11 text-right" : "pl-11"
  const labelLayout = isArabic ? "flex-row-reverse arabic" : ""
  const exploreTextClass = isArabic
    ? "arabic text-[11px] font-medium tracking-[0.15em]"
    : "text-[11px] font-medium uppercase tracking-[0.3em]"

  const cardContent = (
    <>
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#863730]/30 to-transparent" />
      <div className={`mb-3 flex items-start gap-3 ${isArabic ? "flex-row-reverse text-right arabic" : ""}`}>
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#863730]/30 bg-gradient-to-br from-[#863730]/20 to-[#863730]/5">
          <div className="h-2 w-2 rounded-full bg-[#863730]" />
        </div>
        <h3 className={`text-base font-normal leading-tight text-gray-900 pt-1 ${isArabic ? "arabic" : ""}`}>{title}</h3>
      </div>
      <p className={`text-xs font-light leading-relaxed text-gray-600 ${paddingClass} ${isArabic ? "arabic" : ""}`}>
        {description}
      </p>
      {href ? (
        <span
          className={`mt-4 inline-flex items-center gap-2 ${paddingClass} ${exploreTextClass} text-[#863730] transition-transform duration-200 ${labelLayout}`}
        >
          {exploreLabel}
          <svg className="h-3 w-3" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
            <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 7H17V14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      ) : null}
    </>
  )

  const className =
    "group relative flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:border-[#863730]/40 hover:bg-white hover:shadow-lg"

  if (href) {
    return (
      <Link href={href} className={className}>
        {cardContent}
      </Link>
    )
  }

  return <div className={className}>{cardContent}</div>
}
