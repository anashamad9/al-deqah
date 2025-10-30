"use client"

import Link from "next/link"

import { useLanguage } from "@/components/language-context"

const COPY = {
  en: {
    title: "Insights & Updates",
    subtitle: "We’re curating thought leadership on immersive, intelligent transformation across the region.",
    emptyHeading: "No posts published yet",
    emptyDescription:
      "Our team is preparing stories, case studies, and research notes. Check back soon or follow our social channels for updates.",
    backToHome: "Return to homepage",
  },
  ar: {
    title: "رؤى وتحديثات",
    subtitle: "نعمل على إعداد محتوى يلخص خبراتنا في التحول الذكي والغامر في المنطقة.",
    emptyHeading: "لا توجد مقالات حالياً",
    emptyDescription:
      "فريقنا يحضّر مقالات ودراسات حالة وأبحاث متخصصة. تفضل بالعودة قريباً أو تابعنا على القنوات الاجتماعية للاطلاع على المستجدات.",
    backToHome: "العودة إلى الصفحة الرئيسية",
  },
} as const

export default function BlogPageContent() {
  const { language } = useLanguage()
  const copy = COPY[language]
  const isArabic = language === "ar"

  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col gap-8 px-6 py-16 sm:px-12 lg:px-4">
      <header className={`space-y-3 ${isArabic ? "text-right arabic" : ""}`}>
        <p className="text-xs uppercase tracking-[0.3em] text-[#a05a3c]">{copy.title}</p>
        <h1 className="text-3xl font-light text-[#0c0805] sm:text-4xl">{copy.emptyHeading}</h1>
        <p className="text-sm font-light text-gray-600">{copy.subtitle}</p>
      </header>

      <div
        className={`rounded-3xl border border-dashed border-[#e6d3c8] bg-[#fdf7f3]/60 px-6 py-10 text-sm text-gray-600 shadow-[0_35px_90px_-75px_rgba(0,0,0,0.4)] ${
          isArabic ? "text-right arabic" : ""
        }`}
      >
        <p className="font-medium text-[#a05a3c]">{copy.emptyHeading}</p>
        <p className="mt-2 text-gray-500">{copy.emptyDescription}</p>
        <Link
          href="/"
          className={`mt-6 inline-flex items-center gap-2 text-xs font-medium text-[#a05a3c] transition-colors duration-200 hover:text-[#7d4130] ${
            isArabic ? "flex-row-reverse arabic" : ""
          }`}
        >
          <span>{copy.backToHome}</span>
          <span aria-hidden="true">{isArabic ? "↩︎" : "↪︎"}</span>
        </Link>
      </div>
    </section>
  )
}
