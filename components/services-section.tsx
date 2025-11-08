"use client"

import { useRef } from "react"
import Link from "next/link"
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

type Localized = Record<Language, string>

type VisualTheme = {
  label: Localized
  statsLabel: Localized
  stats: { label: Localized; value: string }[]
  bars: number[]
  sparkline: number[]
  barGradient: string
  accentDot: string
}

const localize = (en: string, ar: string): Localized => ({
  en,
  ar,
})

const visualThemes: Record<string, VisualTheme> = {
  cyber: {
    label: localize("Threat Pulse", "نبض التهديد"),
    statsLabel: localize("Protection Indicators", "مؤشرات الحماية"),
    stats: [
      { label: localize("Blocked Intrusions", "التسللات المحظورة"), value: "92%" },
      { label: localize("Average Response", "متوسط الاستجابة"), value: "4.3m" },
    ],
    bars: [48, 72, 88, 63, 95],
    sparkline: [34, 52, 46, 68, 82, 91, 87],
    barGradient: "linear-gradient(180deg, rgba(91,63,216,0.85) 0%, rgba(91,63,216,0.18) 100%)",
    accentDot: "#5b3fd8",
  },
  ai: {
    label: localize("Insight Velocity", "سرعة الرؤى"),
    statsLabel: localize("Predictive Signals", "إشارات تنبؤية"),
    stats: [
      { label: localize("Models Deployed", "النماذج المفعّلة"), value: "36" },
      { label: localize("Accuracy", "الدقة"), value: "97%" },
    ],
    bars: [42, 58, 74, 82, 95],
    sparkline: [45, 58, 72, 88, 76, 90, 98],
    barGradient: "linear-gradient(180deg, rgba(216,54,139,0.85) 0%, rgba(216,54,139,0.18) 100%)",
    accentDot: "#d8368b",
  },
  xr: {
    label: localize("Immersion Index", "مؤشر الانغماس"),
    statsLabel: localize("Experience Metrics", "مقاييس التجربة"),
    stats: [
      { label: localize("Average Session", "مدة الجلسة"), value: "18m" },
      { label: localize("Engagement", "التفاعل"), value: "86%" },
    ],
    bars: [38, 56, 68, 85, 78],
    sparkline: [28, 42, 60, 88, 72, 83, 91],
    barGradient: "linear-gradient(180deg, rgba(98,106,238,0.85) 0%, rgba(98,106,238,0.18) 100%)",
    accentDot: "#626aee",
  },
  iot: {
    label: localize("Ops Telemetry", "قياسات التشغيل"),
    statsLabel: localize("Smart Signals", "إشارات ذكية"),
    stats: [
      { label: localize("Connected Assets", "الأصول المتصلة"), value: "1.2K" },
      { label: localize("Uptime", "التوافر"), value: "99.4%" },
    ],
    bars: [52, 66, 83, 78, 92],
    sparkline: [38, 54, 68, 80, 92, 88, 94],
    barGradient: "linear-gradient(180deg, rgba(43,156,211,0.85) 0%, rgba(43,156,211,0.18) 100%)",
    accentDot: "#2b9cd3",
  },
  digitalTwins: {
    label: localize("Simulation Depth", "عمق المحاكاة"),
    statsLabel: localize("Twin KPIs", "مؤشرات التوأم"),
    stats: [
      { label: localize("Runtime Scenarios", "سيناريوهات التشغيل"), value: "48" },
      { label: localize("Optimization", "التحسين"), value: "93%" },
    ],
    bars: [44, 62, 77, 88, 96],
    sparkline: [36, 48, 66, 74, 83, 92, 97],
    barGradient: "linear-gradient(180deg, rgba(64,143,145,0.85) 0%, rgba(64,143,145,0.18) 100%)",
    accentDot: "#408f91",
  },
  medicalVR: {
    label: localize("Clinical Fidelity", "دقة المحاكاة السريرية"),
    statsLabel: localize("Training Metrics", "مؤشرات التدريب"),
    stats: [
      { label: localize("Skill Retention", "الاحتفاظ بالمهارة"), value: "89%" },
      { label: localize("Scenario Library", "مكتبة السيناريوهات"), value: "220" },
    ],
    bars: [40, 58, 72, 84, 93],
    sparkline: [32, 44, 59, 70, 82, 90, 96],
    barGradient: "linear-gradient(180deg, rgba(208,91,128,0.85) 0%, rgba(208,91,128,0.18) 100%)",
    accentDot: "#d05b80",
  },
  default: {
    label: localize("Performance Pulse", "نبض الأداء"),
    statsLabel: localize("Operational Metrics", "المقاييس التشغيلية"),
    stats: [
      { label: localize("Efficiency", "الكفاءة"), value: "88%" },
      { label: localize("Stability", "الاستقرار"), value: "99%" },
    ],
    bars: [36, 54, 68, 80, 92],
    sparkline: [28, 46, 60, 72, 86, 94, 90],
    barGradient: "linear-gradient(180deg, rgba(134,55,48,0.85) 0%, rgba(134,55,48,0.18) 100%)",
    accentDot: "#863730",
  },
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
  const theme = visualThemes[serviceKey] ?? visualThemes.default
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

          <div className={`mt-8 flex flex-wrap gap-3 ${isArabic ? "justify-end" : ""}`}>
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
                isArabic ? "flex-row-reverse arabic" : ""
              }`}
            >
              <span className={`${exploreTextClass}`}>{exploreLabel}</span>
              <ArrowUpRight className={`h-5 w-5 ${isArabic ? "rotate-180" : ""}`} />
            </Link>
          )}
        </div>

        <div
          className={`relative min-h-[260px] overflow-hidden rounded-[32px] border border-white/60 bg-gradient-to-br ${accent} p-10`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75),transparent_65%)]" />
          <CardVisualization
            language={language}
            isArabic={isArabic}
            title={title}
            solutionLabel={solutionLabel}
            tokens={tokens}
            accentLabelClass={accentLabelClass}
            theme={theme}
          />

          <div className="pointer-events-none absolute -top-12 left-8 h-36 w-36 rounded-full bg-white/40 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 right-2 h-28 w-28 rounded-full bg-[#863730]/18 blur-xl" />
        </div>
      </div>
    </motion.article>
  )
}

type CardVisualizationProps = {
  language: Language
  isArabic: boolean
  title: string
  solutionLabel: string
  tokens: string[]
  accentLabelClass: string
  theme: VisualTheme
}

function CardVisualization({ language, isArabic, title, solutionLabel, tokens, accentLabelClass, theme }: CardVisualizationProps) {
  const maxBar = Math.max(...theme.bars)
  const barHeights = theme.bars.map((value) => (maxBar === 0 ? 0 : Math.round((value / maxBar) * 100)))
  const sparklinePoints = theme.sparkline
    .map((value, idx) => {
      const x = (idx / Math.max(theme.sparkline.length - 1, 1)) * 120
      const y = 60 - (value / 100) * 60
      return `${x},${y}`
    })
    .join(" ")

  return (
    <div className="relative mx-auto flex h-full w-full max-w-sm flex-col justify-between rounded-[28px] bg-white/85 p-6 shadow-[0_25px_60px_-35px_rgba(36,32,57,0.45)] backdrop-blur">
      <div className={`flex items-center justify-between text-[11px] font-semibold text-slate-600 ${isArabic ? "flex-row-reverse arabic" : "uppercase tracking-[0.32em]"}`}>
        <span className={`${isArabic ? "arabic" : "tracking-[0.32em]"}`}>{theme.label[language]}</span>
        <span className={`flex items-center gap-2 text-[10px] font-medium text-slate-400 ${isArabic ? "flex-row-reverse arabic" : ""}`}>
          {language === "ar" ? "مراقبة فورية" : "Realtime Monitoring"}
          <span className="flex h-2 w-2 items-center justify-center">
            <span className="h-2 w-2 animate-ping rounded-full" style={{ backgroundColor: theme.accentDot }} />
          </span>
        </span>
      </div>

      <div className={`mt-6 text-base font-medium leading-snug text-gray-900 ${isArabic ? "arabic text-right" : ""}`}>{title}</div>

      <div className="mt-6">
        <div className="relative h-32">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-white/20" />
          <div className="relative flex h-full items-end justify-between gap-3 px-2">
            {barHeights.map((height, idx) => (
              <motion.span
                key={`bar-${idx}`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: height / 100 }}
                transition={{ duration: 0.8, delay: idx * 0.09, ease: [0.21, 0.67, 0.38, 0.98] }}
                style={{
                  transformOrigin: "bottom",
                  background: theme.barGradient,
                  boxShadow: `0 10px 25px -12px ${theme.accentDot}66`,
                  height: `${Math.max(height, 8)}%`,
                }}
                className="w-6 rounded-full"
              />
            ))}
          </div>
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 120 60" fill="none">
            <defs>
              <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={theme.accentDot} stopOpacity="0.28" />
                <stop offset="100%" stopColor={theme.accentDot} stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <motion.polygon
              points={`0,60 ${sparklinePoints} 120,60`}
              fill="url(#sparkline-gradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.3 }}
            />
            <motion.polyline
              points={sparklinePoints}
              stroke={theme.accentDot}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>

      <div className={`mt-7 text-[11px] font-semibold text-[#863730]/70 ${accentLabelClass}`}>
        {solutionLabel}
      </div>

      <div className={`mt-3 flex flex-wrap gap-2 ${isArabic ? "justify-end" : ""}`}>
        {tokens.slice(0, 2).map((token) => (
          <span
            key={`card-${token}-${language}`}
            className={`rounded-full bg-[#863730]/10 px-3 py-1 text-[11px] font-medium text-[#863730] ${isArabic ? "arabic" : ""}`}
          >
            {token}
          </span>
        ))}
      </div>

      <div
        className={`mt-6 text-[10px] font-semibold text-slate-500 ${
          isArabic ? "arabic" : "uppercase tracking-[0.32em]"
        }`}
      >
        {theme.statsLabel[language]}
      </div>
      <div className="mt-3 grid gap-3">
        {theme.stats.map((stat, idx) => (
          <div
            key={`stat-${idx}`}
            className={`flex items-center justify-between rounded-2xl bg-white/60 px-3 py-2 text-[11px] text-slate-600 ${isArabic ? "flex-row-reverse arabic" : ""}`}
          >
            <span>{stat.label[language]}</span>
            <span className="font-semibold text-gray-900">{stat.value}</span>
          </div>
        ))}
      </div>

      <motion.span
        className="pointer-events-none absolute -right-10 top-6 h-24 w-24 rounded-full blur-3xl"
        style={{ backgroundColor: `${theme.accentDot}33` }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
