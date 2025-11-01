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
    <section id="sectors" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(134,55,48,0.15),transparent_60%),radial-gradient(circle_at_84%_22%,rgba(162,110,80,0.12),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(94,74,60,0.05) 1px, transparent 1px), linear-gradient(-120deg, rgba(94,74,60,0.04) 1px, transparent 1px)",
            backgroundSize: "170px 170px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,360px)_1fr]">
          <div className="space-y-8">
            <div
              className={`space-y-5 rounded-[36px] border border-white/60 bg-white/85 p-8 shadow-[0_35px_110px_-70px_rgba(15,23,42,0.45)] backdrop-blur ${
                isArabic ? "text-right arabic" : ""
              }`}
            >
              <span
                className={`inline-flex items-center gap-2 text-[11px] font-medium text-[#863730] ${
                  isArabic ? "arabic" : "uppercase tracking-[0.35em]"
                }`}
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-[#863730]" />
                {tString(data.label, language)}
              </span>
              <h2 className="text-4xl font-light text-[#0f172a] md:text-5xl">
                {tString(data.headingPrefix, language)}{" "}
                <span className="font-medium italic text-[#863730]">
                  {tString(data.highlightAccent, language)}
                </span>
              </h2>
              <p className="text-sm font-light leading-relaxed text-slate-600">
                {tString(data.description, language)}
              </p>
              <div
                className={`grid gap-2 text-[12px] font-medium text-[#a05a3c] ${
                  isArabic ? "arabic text-right" : "uppercase tracking-[0.35em]"
                }`}
              >
                <span className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#a05a3c]" />
                  {isArabic ? "أنظمة موثوقة" : "Reliable Systems"}
                </span>
                <span className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#a05a3c]" />
                  {isArabic ? "شراكات طويلة" : "Long-Term Partners"}
                </span>
              </div>
            </div>

            <div className="grid gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-start gap-4 rounded-[26px] border border-white/50 bg-white/80 p-5 shadow-[0_30px_90px_-70px_rgba(15,23,42,0.38)] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5 ${
                    isArabic ? "flex-row-reverse text-right arabic" : ""
                  }`}
                >
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-white/60 bg-gradient-to-br from-[#f2dfd6] via-white to-[#fbeee7] text-[#863730] shadow-[0_25px_55px_-45px_rgba(61,43,33,0.4)]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 17.5 8.5 12 11 14.5l3.5-4 5.5 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="space-y-1">
                    <p
                      className={
                        isArabic
                          ? "arabic text-[11px] font-medium text-[#863730]"
                          : "text-[11px] uppercase tracking-[0.35em] text-[#863730]"
                      }
                    >
                      {item.label}
                    </p>
                    <h3 className="text-sm font-semibold text-[#0f172a]">{item.title}</h3>
                    <p className="text-xs font-light leading-relaxed text-slate-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector, index) => {
              const Icon = sector.icon
              const label = formatIndex(index, language)
              return (
                <div
                  key={`${sector.title}-${index}`}
                  className="group relative overflow-hidden rounded-[30px] border border-[#ede0d7] bg-white/90 p-6 shadow-[0_40px_105px_-72px_rgba(60,41,31,0.34)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_40px_115px_-60px_rgba(134,55,48,0.3)]"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(140deg, rgba(134,55,48,0.12) 0%, transparent 60%, rgba(134,55,48,0.06) 100%)" }} />
                  <div className={`relative flex h-full flex-col gap-4 ${isArabic ? "text-right arabic" : ""}`}>
                    <div className={`flex items-start justify-between ${isArabic ? "flex-row-reverse" : ""}`}>
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f0ded4] bg-gradient-to-br from-[#f2dfd6] via-white to-[#fcefe9] text-[#863730] shadow-[0_20px_55px_-45px_rgba(61,43,33,0.38)]">
                          <Icon className="h-6 w-6" />
                        </span>
                      </div>
                      <span
                        className={
                          isArabic
                            ? "arabic text-[11px] font-medium text-slate-500"
                            : "text-[11px] font-medium uppercase tracking-[0.35em] text-slate-500"
                        }
                      >
                        {`${tString(data.sectorLabel, language)} ${label}`}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-[#0f172a]">{sector.title}</h3>
                      <p className="text-sm font-light leading-relaxed text-slate-600">{sector.description}</p>
                    </div>
                    <div
                      className={`mt-auto flex items-center gap-2 text-[11px] font-medium text-[#a1694b] ${
                        isArabic ? "arabic flex-row-reverse" : "uppercase tracking-[0.32em]"
                      }`}
                    >
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#863730]" />
                      <span>{isArabic ? "حلول موثوقة" : "Trusted Systems"}</span>
                    </div>
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
