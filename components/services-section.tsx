"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"
import { homepageCopy, tString } from "@/lib/translations"

const data = homepageCopy.services

const accentGradients = [
  "from-[#efe8ff] via-white to-[#ffe8f5]",
  "from-[#eaf5ff] via-white to-[#f2f5ff]",
  "from-[#fff3eb] via-white to-[#edf9ff]",
] as const

const serviceImages: Record<string, string> = {
  cyber: "/services/cyber.avif",
  ai: "/services/ai.jpg",
  training: "/services/training.jpg",
  xr: "/services/metaverse.jpeg",
  iot: "/services/iot.jpeg",
  digitalTwins: "/services/digital-twins.webp",
  medicalVR: "/services/ar-vr.jpg",
}

type ServiceItem = {
  slug: string
  title: string
  description: string
  href?: string
}

export default function ServicesSection() {
  const { language } = useLanguage()
  const isArabic = language === "ar"

  const services: ServiceItem[] = data.items.map((item) => ({
    slug: item.key,
    href: item.href,
    title: item.copy[language].title,
    description: item.copy[language].description,
  }))

  return (
    <section id="services" className="relative overflow-hidden bg-white py-28">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#f9f7ff] via-transparent to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-8">
        <div className={`mb-20 text-center ${isArabic ? "arabic" : ""}`}>
          <h2 className={`mb-6 text-4xl font-light text-gray-900 md:text-5xl ${isArabic ? "leading-snug" : ""}`}>
            {tString(data.sectionLabel, language)}{" "}
            <span className="font-medium text-[#863730]">{tString(data.sectionAccent, language)}</span>
          </h2>
          <p className={`mx-auto max-w-3xl text-base font-light text-gray-600 ${isArabic ? "arabic" : ""}`}>
            {tString(data.description, language)}
          </p>
        </div>

        <div className="relative pb-32">
          <div className="pointer-events-none absolute inset-x-0 -top-10 bottom-0 rounded-[56px] bg-gradient-to-b from-[#ffffff] via-[#f7f5ff]/45 to-transparent blur-2xl" aria-hidden />
          <div className="relative flex flex-col gap-24">
            {services.map((service, index) => (
              <ServiceStackCard
                key={service.slug}
                index={index}
                total={services.length}
                serviceKey={service.slug}
                language={language}
                exploreLabel={tString(data.exploreLabel, language)}
                {...service}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type ServiceCardProps = ServiceItem & {
  index: number
  total: number
  serviceKey: string
  language: Language
  exploreLabel: string
}

function ServiceStackCard({ title, description, href, index, total, serviceKey, language, exploreLabel }: ServiceCardProps) {
  const isArabic = language === "ar"
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.95, 0.9])
  const exitY = index === total - 1 ? -60 : -120
  const y = useTransform(scrollYProgress, [0, 1], [0, exitY])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.72])

  const accent = accentGradients[index % accentGradients.length]
  const imageSrc = serviceImages[serviceKey] ?? "/placeholder.jpg"
  const tokens = isArabic ? ["ابتكار", "تكامل", "قابلية التوسع"] : ["Innovation", "Integration", "Scalability"]
  const solutionLabel = isArabic ? "حل متخصص" : "Specialized Solution"
  const accentLabelClass = isArabic ? "arabic" : "uppercase tracking-[0.35em]"
  const tokenClass = isArabic ? "arabic" : "uppercase tracking-[0.2em]"
  const exploreTextClass = isArabic ? "arabic" : "uppercase tracking-[0.28em]"

  return (
    <motion.article
      ref={cardRef}
      style={{ scale, y, opacity, zIndex: index + 1, willChange: "transform, opacity" }}
      className="group sticky top-24 overflow-hidden rounded-[40px] border border-white/60 bg-white/94 p-10 shadow-[0_26px_110px_-75px_rgba(36,32,57,0.32)] backdrop-blur transition-shadow duration-300 hover:shadow-[0_38px_136px_-62px_rgba(134,55,48,0.34)]"
    >
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
      >
        <div className={`flex flex-col justify-center ${isArabic ? "text-right arabic" : ""}`}>
          <span className={`text-xs font-medium text-[#863730]/70 ${accentLabelClass}`}>
            {tString(data.sectionAccent, language)}
          </span>
          <h3 className="mt-5 text-3xl font-light leading-snug text-gray-900 md:text-4xl">{title}</h3>
          <p className="mt-6 text-sm leading-relaxed text-gray-600 md:text-base">{description}</p>

          <div className={`mt-8 flex flex-wrap gap-3 ${isArabic ? "flex-row-reverse justify-end" : ""}`}>
            {tokens.map((token) => (
              <span
                key={`${token}-${language}`}
                className={`rounded-full bg-[#863730]/10 px-4 py-2 text-xs font-medium text-[#863730] ${tokenClass}`}
              >
                {token}
              </span>
            ))}
          </div>

          {href && (
            <Link
              href={href}
              className={`mt-10 inline-flex items-center gap-3 text-sm font-medium text-[#863730] transition-transform duration-200 hover:translate-y-[-2px] ${
                isArabic ? "flex-row-reverse self-end text-right arabic" : ""
              }`}
            >
              <span className={`${exploreTextClass}`}>{exploreLabel}</span>
              <ArrowUpRight className={`h-5 w-5 ${isArabic ? "rotate-180" : ""}`} />
            </Link>
          )}
        </div>

        <div
          className={`relative min-h-[300px] overflow-hidden rounded-[32px] border border-white/60 bg-gradient-to-br ${accent} p-4 sm:p-6`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75),transparent_65%)]" />
          <div className="relative flex h-full items-end overflow-hidden rounded-[28px] shadow-[0_25px_60px_-30px_rgba(36,32,57,0.35)]">
            <Image
              src={imageSrc}
              alt={`${title} visual`}
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            <div
              className={`relative z-10 flex w-full flex-col gap-3 px-6 pb-6 text-white ${
                isArabic ? "items-end text-right arabic" : ""
              }`}
            >
              <span className={`text-[11px] font-semibold text-white/80 ${accentLabelClass}`}>{solutionLabel}</span>
              <p className="text-lg font-medium leading-snug">{title}</p>
              <div className={`flex flex-wrap gap-2 ${isArabic ? "flex-row-reverse justify-end" : ""}`}>
                {tokens.slice(0, 2).map((token) => (
                  <span
                    key={`card-${token}-${language}`}
                    className={`rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white/90 ${tokenClass}`}
                  >
                    {token}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -top-12 left-8 h-36 w-36 rounded-full bg-white/40 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 right-2 h-28 w-28 rounded-full bg-[#863730]/18 blur-xl" />
        </div>
      </div>
    </motion.article>
  )
}
