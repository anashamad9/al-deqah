import { Building2, Droplet, Radio, Heart, GraduationCap, HardHat } from "lucide-react"

import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"
import { homepageCopy, tString } from "@/lib/translations"

const ICONS = {
  Building2,
  Droplet,
  Radio,
  Heart,
  GraduationCap,
  HardHat,
} as const

const data = homepageCopy.sectors

function formatIndex(index: number, language: Language) {
  const numeric = `0${index + 1}`.slice(-2)
  if (language === "ar") {
    const eastern = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
    return numeric.replace(/\d/g, (digit) => eastern[Number(digit)])
  }
  return numeric
}

export function SectorsSection() {
  const { language } = useLanguage()
  const isArabic = language === "ar"

  const highlights = data.highlights.map((item) => ({
    label: tString(item.label, language),
    title: tString(item.title, language),
    description: tString(item.description, language),
  }))

  const sectors = data.items.map((item) => {
    const icon = ICONS[item.icon as keyof typeof ICONS] ?? Building2
    return {
      icon,
      title: item.copy[language].title,
      description: item.copy[language].description,
    }
  })

  return (
    <section id="sectors" className="bg-gradient-to-b from-white via-[#f8f4ec] to-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,340px)_1fr]">
          <div className="space-y-10">
            <div className={`space-y-6 ${isArabic ? "text-right arabic" : ""}`}>
              <span className="uppercase tracking-[0.35em] text-xs text-[#863730]">
                {tString(data.label, language)}
              </span>
              <h2 className="text-4xl font-light text-gray-900 md:text-5xl">
                {tString(data.headingPrefix, language)}{" "}
                <span className="font-medium italic text-[#863730]">
                  {tString(data.highlightAccent, language)}
                </span>
              </h2>
              <p className="text-sm font-light leading-relaxed text-gray-600">
                {tString(data.description, language)}
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="group relative overflow-hidden rounded-3xl border border-[#863730]/20 bg-white/80 p-6 shadow-[0_35px_80px_-65px_rgba(0,0,0,0.65)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:border-[#863730]/35"
                >
                  <span
                    className={`absolute top-0 h-full w-1 bg-gradient-to-b from-[#863730] via-[#863730]/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100 ${
                      isArabic ? "right-0" : "left-0"
                    }`}
                  />
                  <div className={`${isArabic ? "pr-4 text-right arabic" : "pl-4"}`}>
                    <p
                      className={
                        isArabic
                          ? "arabic text-[11px] font-medium text-[#863730]"
                          : "text-[11px] uppercase tracking-[0.35em] text-[#863730]"
                      }
                    >
                      {item.label}
                    </p>
                    <h3 className="mt-3 text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {sectors.map((sector, index) => {
              const Icon = sector.icon
              const label = formatIndex(index, language)
              return (
                <div
                  key={`${sector.title}-${index}`}
                  className="group relative overflow-hidden rounded-3xl border border-[#863730]/25 bg-white/70 p-px shadow-[0_35px_80px_-60px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#863730]/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#863730]/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div
                    className={`relative h-full rounded-[calc(1.5rem-1px)] bg-white/90 p-8 backdrop-blur ${
                      isArabic ? "text-right arabic" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center justify-between ${
                        isArabic ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#863730]/12 text-[#863730] transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span
                        className={
                          isArabic
                            ? "arabic text-[10px] font-medium text-gray-400"
                            : "text-[10px] font-medium uppercase tracking-[0.4em] text-gray-400"
                        }
                      >
                        {`${tString(data.sectorLabel, language)} ${label}`}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">{sector.title}</h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-gray-600">{sector.description}</p>
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#863730]/50 to-transparent" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
