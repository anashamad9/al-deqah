"use client"

import { useLanguage } from "@/components/language-context"

const COPY = {
  en: {
    title: "Strategic Partnerships",
    subtitle:
      "We collaborate with innovators, institutes, and technology vendors to accelerate Industry 4.0 adoption across the Middle East.",
    statusLabel: "This page is coming soon.",
    note: "We’re finalizing partnership tiers, co-innovation programs, and integration details. Reach out if you’d like to collaborate ahead of launch.",
    contactCta: "Talk with us",
  },
  ar: {
    title: "الشراكات الاستراتيجية",
    subtitle:
      "نتعاون مع المبتكرين والمؤسسات والموردين التقنيين لتسريع تبني الثورة الصناعية الرابعة في المنطقة.",
    statusLabel: "هذه الصفحة ستتوفر قريباً.",
    note: "نعمل على إكمال مستويات الشراكة وبرامج الابتكار المشترك وتفاصيل التكامل. يسعدنا تواصلك إذا رغبت في التعاون قبل الإطلاق.",
    contactCta: "تواصل معنا",
  },
} as const

export default function PartnersPageContent() {
  const { language } = useLanguage()
  const copy = COPY[language]
  const isArabic = language === "ar"

  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col gap-8 px-6 py-16 sm:px-12 lg:px-4">
      <header className={`space-y-3 ${isArabic ? "text-right arabic" : ""}`}>
        <p className="text-xs uppercase tracking-[0.3em] text-[#a05a3c]">{copy.title}</p>
        <h1 className="text-3xl font-light text-[#0c0805] sm:text-4xl">{copy.statusLabel}</h1>
        <p className="text-sm font-light text-gray-600">{copy.subtitle}</p>
      </header>

      <div
        className={`rounded-3xl border border-dashed border-[#c7b1a5] bg-white/70 px-6 py-10 text-sm text-gray-600 shadow-[0_35px_90px_-75px_rgba(0,0,0,0.4)] ${
          isArabic ? "text-right arabic" : ""
        }`}
      >
        <p className="font-medium text-[#a05a3c]">{copy.statusLabel}</p>
        <p className="mt-2 text-gray-500">{copy.note}</p>
        <a
          href="mailto:hello@al-deqah.com"
          className={`mt-6 inline-flex items-center gap-2 rounded-full border border-[#a05a3c]/30 px-5 py-2 text-xs font-medium text-[#a05a3c] transition-colors duration-200 hover:border-[#a05a3c] hover:text-[#7d4130] ${
            isArabic ? "flex-row-reverse arabic" : ""
          }`}
        >
          {copy.contactCta}
        </a>
      </div>
    </section>
  )
}
