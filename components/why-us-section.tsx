import { Shield, Zap, Users, Award, Globe, Lightbulb } from "lucide-react"

import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"
import { homepageCopy, tString } from "@/lib/translations"

const ICONS = {
  Shield,
  Zap,
  Users,
  Award,
  Globe,
  Lightbulb,
} as const

const data = homepageCopy.whyUs

export function WhyUsSection() {
  const { language } = useLanguage()
  const isArabic = language === "ar"

  const reasons = data.reasons.map((reason) => ({
    icon: ICONS[reason.icon as keyof typeof ICONS] ?? Shield,
    title: reason.copy[language].title,
    description: reason.copy[language].description,
  }))

  return (
    <section id="why-us" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className={`mb-16 text-center ${isArabic ? "arabic" : ""}`}>
          <h2 className="text-4xl font-light text-gray-900 md:text-5xl">
            {tString(data.headingPrefix, language)}{" "}
            <span className="font-medium italic text-[#d4af37]">{tString(data.accent, language)}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-light text-gray-600">
            {tString(data.description, language)}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={`${reason.title}-${index}`}
                className={`group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#d4af37]/30 hover:shadow-xl ${
                  isArabic ? "text-right arabic" : ""
                }`}
              >
                <div className={`mb-6 ${isArabic ? "flex justify-end" : ""}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37]/10 to-[#d4af37]/5 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-[#d4af37]" />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900">{reason.title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-600">{reason.description}</p>
                <div
                  className={`absolute bottom-0 h-1 w-full transform transition-transform duration-300 group-hover:scale-x-100 ${
                    isArabic
                      ? "right-0 origin-right bg-gradient-to-l from-[#d4af37] to-[#8b7355]"
                      : "left-0 origin-left bg-gradient-to-r from-[#d4af37] to-[#8b7355]"
                  } scale-x-0 rounded-b-2xl`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
