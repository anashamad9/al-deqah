"use client"

import Link from "next/link"
import { useMemo } from "react"
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"
import type { Solution } from "@/lib/solutions"
import { getLocalizedSolution } from "@/lib/solutions-localized"

const DETAIL_COPY: Record<
  Language,
  {
    backLabel: string
    whyHeading: string
    approachLabel: string
    coreHeading: string
    featureLabel: string
    useCasesLabel: string
    useCasesHeading: string
    useCasesIntro: string
    techHeading: string
    techIntro: string
    stackLabel: string
    engagementHeading: string
    phaseLabel: string
  }
> = {
  en: {
    backLabel: "Back to homepage",
    whyHeading: "Why it matters",
    approachLabel: "Our approach",
    coreHeading: "Core capabilities",
    featureLabel: "Feature",
    useCasesLabel: "Use Cases",
    useCasesHeading: "Where we deploy",
    useCasesIntro:
      "Each engagement is mapped to measurable operational outcomes, with playbooks tailored to industry regulations and field conditions.",
    techHeading: "Tech stack & delivery",
    techIntro:
      "We select interoperable tooling that integrates with your existing investments while preparing the organization for future innovation.",
    stackLabel: "Stack",
    engagementHeading: "Engagement rhythm",
    phaseLabel: "Phase",
  },
  ar: {
    backLabel: "العودة إلى الصفحة الرئيسية",
    whyHeading: "لماذا يهم",
    approachLabel: "منهجنا",
    coreHeading: "القدرات الأساسية",
    featureLabel: "ميزة",
    useCasesLabel: "حالات الاستخدام",
    useCasesHeading: "أين ننفّذ الحل",
    useCasesIntro:
      "نربط كل تعاون بمؤشرات تشغيل قابلة للقياس، مع أدلة تشغيل مضبوطة بحسب المتطلبات التنظيمية وظروف الميدان.",
    techHeading: "مكدس التقنية وآلية التنفيذ",
    techIntro:
      "نختار أدوات قابلة للتشغيل البيني تتكامل مع استثماراتك الحالية وتُهيّئ المؤسسة للابتكار المستقبلي.",
    stackLabel: "المكدس",
    engagementHeading: "إيقاع التعاون",
    phaseLabel: "المرحلة",
  },
}

type SolutionDetailPageProps = {
  solution: Solution
}

export default function SolutionDetailPage({ solution }: SolutionDetailPageProps) {
  const { language } = useLanguage()
  const copy = DETAIL_COPY[language]
  const isArabic = language === "ar"
  const localizedSolution = useMemo(() => getLocalizedSolution(solution, language), [solution, language])

  return (
    <>
      <Header variant="dark" />
      <div className="bg-white text-gray-900">
        <section className="relative overflow-hidden bg-[#0c0805] py-28 text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1d140d] to-black opacity-90" />
            <div className="absolute left-1/2 top-[-45%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#863730]/25 blur-3xl opacity-60" />
            <div className="absolute bottom-[-50%] right-[-10%] h-[480px] w-[480px] rounded-full bg-[#863730]/25 blur-3xl opacity-60" />
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-8">
            <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${isArabic ? "text-right" : ""}`}>
              <div className={`max-w-3xl space-y-5 ${isArabic ? "ml-auto text-right arabic" : ""}`}>
                <div
                  className={`inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#863730] ${
                    isArabic ? "flex-row-reverse arabic" : ""
                  }`}
                >
                  <span>{localizedSolution.category}</span>
                  <span className="h-[1px] w-10 bg-[#863730]/60" />
                  <span>{localizedSolution.name}</span>
                </div>
                <h1 className={`text-4xl font-light leading-tight md:text-5xl ${isArabic ? "arabic" : ""}`}>
                  {localizedSolution.tagline}
                </h1>
                <p className={`text-sm font-light text-white/70 md:text-base ${isArabic ? "arabic" : ""}`}>
                  {localizedSolution.description}
                </p>
              </div>
              <div className={`flex gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                <Link
                  href="/"
                  className={`inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs font-medium text-white transition-colors duration-200 hover:border-white ${
                    isArabic ? "flex-row-reverse arabic" : ""
                  }`}
                >
                  <ArrowLeft className="h-4 w-4" />
                  {copy.backLabel}
                </Link>
                <Link
                  href={localizedSolution.cta.href}
                  className={`inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-medium text-black transition-transform duration-200 hover:scale-105 ${
                    isArabic ? "flex-row-reverse arabic" : ""
                  }`}
                >
                  {localizedSolution.cta.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {localizedSolution.stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-3xl border border-white/15 bg-white/10 px-6 py-5 text-sm font-light text-white/80 backdrop-blur ${
                    isArabic ? "text-right arabic" : ""
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#863730]/80">{stat.label}</p>
                  <p className="mt-2 text-2xl font-medium text-white">{stat.value}</p>
                  {stat.description ? <p className="mt-2 text-xs text-white/60">{stat.description}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
              <div className={`space-y-6 ${isArabic ? "text-right arabic" : ""}`}>
                <h2 className="text-3xl font-light text-gray-900 md:text-4xl">{copy.whyHeading}</h2>
                <p className="text-sm font-light leading-relaxed text-gray-600">{localizedSolution.overview}</p>
                <div className="rounded-3xl border border-[#863730]/20 bg-[#fdfaf3] p-6 text-xs text-gray-700">
                  <p className="font-medium uppercase tracking-[0.3em] text-[#863730]">{copy.approachLabel}</p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-gray-600">
                    {localizedSolution.cta.description}
                  </p>
                </div>
              </div>

              <div className={`${isArabic ? "text-right arabic" : ""}`}>
                <h3 className="text-lg font-medium text-gray-900">{copy.coreHeading}</h3>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {localizedSolution.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_25px_60px_-50px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#863730]/40"
                    >
                      <p className={`text-[11px] uppercase tracking-[0.35em] text-[#863730] ${isArabic ? "arabic" : ""}`}>
                        {copy.featureLabel}
                      </p>
                      <h4 className="mt-3 text-base font-medium text-gray-900">{feature.title}</h4>
                      <p className="mt-2 text-sm font-light leading-relaxed text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-[#f8f4ec] py-20">
          <div className="mx-auto max-w-6xl px-8">
            <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${isArabic ? "text-right arabic" : ""}`}>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#863730]">{copy.useCasesLabel}</p>
                <h2 className="mt-3 text-3xl font-light text-gray-900 md:text-4xl">{copy.useCasesHeading}</h2>
              </div>
              <p className="max-w-xl text-sm font-light leading-relaxed text-gray-600">{copy.useCasesIntro}</p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {localizedSolution.useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className={`relative overflow-hidden rounded-3xl border border-[#863730]/20 bg-white p-8 shadow-[0_35px_80px_-65px_rgba(0,0,0,0.65)] ${
                    isArabic ? "text-right arabic" : ""
                  }`}
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#863730] to-[#863730]" />
                  <h3 className="text-lg font-medium text-gray-900">{useCase.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-gray-600">{useCase.description}</p>
                  {useCase.bullets ? (
                    <ul className="mt-4 space-y-2 text-sm font-light text-gray-600">
                      {useCase.bullets.map((bullet) => (
                        <li key={bullet} className={`flex items-start gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#863730]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
              <div className={`space-y-6 ${isArabic ? "text-right arabic" : ""}`}>
                <h2 className="text-3xl font-light text-gray-900 md:text-4xl">{copy.techHeading}</h2>
                <p className="text-sm font-light leading-relaxed text-gray-600">{copy.techIntro}</p>
              </div>

              <div className="space-y-10">
                <div className="grid gap-6 md:grid-cols-2">
                  {localizedSolution.techStack.map((category) => (
                    <div
                      key={category.title}
                      className={`rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_30px_60px_-55px_rgba(0,0,0,0.5)] ${
                        isArabic ? "text-right arabic" : ""
                      }`}
                    >
                      <p className="text-[11px] uppercase tracking-[0.35em] text-[#863730]">{copy.stackLabel}</p>
                      <h3 className="mt-3 text-base font-medium text-gray-900">{category.title}</h3>
                      <ul className="mt-3 space-y-1 text-sm font-light text-gray-600">
                        {category.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className={`${isArabic ? "text-right arabic" : ""}`}>
                  <h3 className="text-lg font-medium text-gray-900">{copy.engagementHeading}</h3>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {localizedSolution.engagement.map((step, index) => (
                      <div key={step.title} className="rounded-3xl border border-gray-200 bg-[#fdfaf3] p-5">
                        <span className="text-xs uppercase tracking-[0.3em] text-[#863730]">
                          {copy.phaseLabel} 0{index + 1}
                        </span>
                        <h4 className="mt-2 text-base font-medium text-gray-900">{step.title}</h4>
                        <p className="mt-2 text-sm font-light text-gray-600">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
