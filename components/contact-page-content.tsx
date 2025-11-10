"use client"

import ContactForm from "@/components/contact-form"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"

const CONTACT_COPY: Record<
  Language,
  {
    hero: {
      label: string
      heading: string
      description: string
    }
    helpTitle: string
    helpPoints: string[]
    headquarters: {
      label: string
      address: string
      contact: string
    }
  }
> = {
  en: {
    hero: {
      label: "Contact",
      heading: "Let’s scope your next Industry 4.0 initiative together",
      description:
        "Share a few details about your goals and our specialists will follow up within two business days to align on the right workshop, prototype, or delivery program.",
    },
    helpTitle: "How we can help",
    helpPoints: [
      "• Rapid discovery sprints to prioritize Industry 4.0 use cases",
      "• Technical assessments for AI, IoT, and digital twin platforms",
      "• Immersive experience prototyping (VR/AR/XR)",
      "• Long-term managed services and capability enablement",
    ],
    headquarters: {
      label: "Headquarters",
      address: "Al-Deqah Tech, Amman - Jordan",
      contact: "info@aldeqah-tech.com · 962792007354+",
    },
  },
  ar: {
    hero: {
      label: "تواصل",
      heading: "دعنا نحدد معاً مبادرتك القادمة في الثورة الصناعية الرابعة",
      description:
        "شارك بعض التفاصيل عن أهدافك وسيتواصل معك متخصصونا خلال يومي عمل للتوافق على الورشة أو النموذج أو برنامج التنفيذ الأنسب.",
    },
    helpTitle: "كيف يمكننا مساعدتك",
    helpPoints: [
      "• سباقات استكشاف سريعة لتحديد أولويات حالات استخدام الثورة الصناعية الرابعة",
      "• تقييمات تقنية لمنصات الذكاء الاصطناعي وإنترنت الأشياء والتوائم الرقمية",
      "• نماذج أولية لتجارب رائعة (VR/AR/XR)",
      "• خدمات مُدارة طويلة الأمد وبرامج تمكين القدرات",
    ],
    headquarters: {
      label: "المقر الرئيسي",
      address: "شركة الدقة، عمّان - الأردن",
      contact: "info@aldeqah-tech.com · ‎962792007354+",
    },
  },
}

export default function ContactPageContent() {
  const { language } = useLanguage()
  const copy = CONTACT_COPY[language]
  const isArabic = language === "ar"

  return (
    <>
      <Header variant="light" />
      <main className="bg-white text-gray-900">
        <section className="relative overflow-hidden bg-[#0c0805] py-24 text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1c130d] to-black opacity-90" />
            <div className="absolute left-1/2 top-[-45%] h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-[#863730]/20 blur-3xl opacity-60" />
          </div>
          <div
            className={`relative mx-auto flex max-w-4xl flex-col gap-5 px-6 md:px-8 ${
              isArabic ? "items-end text-right" : "text-center"
            }`}
          >
            <span
              className={
                isArabic
                  ? "self-end text-xs font-medium text-[#863730] arabic tracking-normal"
                  : "self-center text-xs uppercase tracking-[0.35em] text-[#863730]"
              }
            >
              {copy.hero.label}
            </span>
            <h1 className={`text-4xl font-light leading-tight md:text-5xl ${isArabic ? "arabic" : ""}`}>
              {copy.hero.heading}
            </h1>
            <p className={`text-sm font-light text-white/70 md:text-base ${isArabic ? "arabic" : ""}`}>
              {copy.hero.description}
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
            <div className="space-y-6 rounded-3xl border border-[#863730]/20 bg-[#fdfaf3] p-6 shadow-[0_25px_60px_-55px_rgba(0,0,0,0.18)]">
              <h2 className={`text-2xl font-light text-gray-900 ${isArabic ? "arabic text-right" : ""}`}>{copy.helpTitle}</h2>
              <ul className={`space-y-4 text-sm font-light text-gray-700 ${isArabic ? "arabic text-right" : ""}`}>
                {copy.helpPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="rounded-2xl border border-[#863730]/30 bg-white/80 p-4 text-xs font-light text-gray-600">
                <p
                  className={
                    isArabic
                      ? "arabic text-right text-sm font-medium text-[#863730] tracking-normal"
                      : "text-xs uppercase tracking-[0.3em] text-[#863730]"
                  }
                >
                  {copy.headquarters.label}
                </p>
                <p className={`mt-2 text-sm ${isArabic ? "arabic text-right" : ""}`}>{copy.headquarters.address}</p>
                <p className={`mt-1 text-sm ${isArabic ? "arabic text-right" : ""}`}>{copy.headquarters.contact}</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
