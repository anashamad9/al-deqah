import { useState } from "react"
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

const BACKGROUNDS: Record<keyof typeof ICONS, string> = {
  Building2: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
  Droplet: "https://images.unsplash.com/photo-1451188214936-ec16af5ca155?auto=format&fit=crop&w=1600&q=80",
  Radio: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
  Heart: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&w=1600&q=80",
  GraduationCap: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
  HardHat: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1600&q=80",
}

const data = homepageCopy.sectors

export function SectorsSection() {
  const { language } = useLanguage()
  const isArabic = language === "ar"
  const direction = isArabic ? "rtl" : "ltr"

  const highlights = data.highlights.map((item) => ({
    label: tString(item.label, language),
    title: tString(item.title, language),
    description: tString(item.description, language),
  }))

  const sectors = data.items.map((item) => {
    const iconKey = (item.icon as keyof typeof ICONS) ?? "Building2"
    const icon = ICONS[iconKey]
    return {
      icon,
      background: BACKGROUNDS[iconKey] ?? BACKGROUNDS.Building2,
      title: item.copy[language].title,
      description: item.copy[language].description,
    }
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const activeSector = sectors[activeIndex]

  return (
    <section
      id="sectors"
      dir={direction}
      className="relative overflow-hidden bg-gradient-to-b from-[#f6f2ed] via-white to-white py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(134,55,48,0.12),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_65%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className={`rounded-[40px] border border-white/60 bg-white/85 p-10 shadow-[0_50px_140px_-90px_rgba(15,23,42,0.45)] backdrop-blur ${
          isArabic ? "text-right arabic" : "text-left"
        }`}>
          <span
            className={`inline-flex items-center gap-2 rounded-full border border-[#e9d7cd] bg-[#fdf7f3] px-4 py-2 text-[11px] font-medium text-[#a1694b] ${
              isArabic ? "flex-row-reverse arabic" : "uppercase tracking-[0.35em]"
            }`}
          >
            {tString(data.label, language)}
          </span>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl font-light text-[#0f172a] md:text-5xl">
                {tString(data.headingPrefix, language)} {" "}
                <span className="font-medium text-[#863730]">{tString(data.highlightAccent, language)}</span>
              </h2>
              <p className="text-sm font-light leading-relaxed text-slate-600">{tString(data.description, language)}</p>
            </div>
            <div className={`grid gap-2 rounded-[32px] border border-[#f0dfd5] bg-[#fdf7f3] p-3 text-[12px] font-medium ${
              isArabic ? "arabic text-right" : "uppercase tracking-[0.32em]"
            }`}
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  dir={isArabic ? "rtl" : "ltr"}
                  className={`flex items-center gap-2 rounded-[28px] px-4 py-3 text-[#a1694b] ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#a1694b]" />
                  <div className="text-[11px] font-medium">{item.label}</div>
                  <span className="text-[11px] font-normal text-slate-500">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col gap-8 rounded-[44px] border border-white/60 bg-white/90 p-10 shadow-[0_55px_160px_-100px_rgba(15,23,42,0.4)] backdrop-blur md:flex-row ${
            isArabic ? "text-right arabic" : ""
          }`}
        >
          <div className="w-full md:w-[340px]">
            <div className="grid gap-3">
              {sectors.map((sector, index) => {
                const Icon = sector.icon
                const isActive = activeIndex === index
                return (
                  <button
                    key={sector.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    dir={direction}
                    className={`flex w-full items-center gap-4 rounded-[28px] border px-5 py-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#863730] ${
                      isActive
                        ? "border-[#863730]/50 bg-[#fdf7f3] text-[#863730] shadow-[0_25px_70px_-55px_rgba(134,55,48,0.4)]"
                        : "border-[#f0e3db] bg-white text-neutral-700 hover:border-[#863730]/30 hover:text-[#863730]"
                    } ${isArabic ? "text-right arabic" : "text-left"}`}
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl border border-[#f0dfd5] bg-[#fff9f4] text-[#a1694b]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className={`flex flex-col ${isArabic ? "items-end text-right" : "text-left"}`} dir={direction}>
                      <span className="text-[13px] font-semibold">{sector.title}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-[36px] border border-[#f0dfd5]">
            <div
              className="relative flex flex-col gap-6 p-8"
              style={{
                backgroundImage: `linear-gradient(120deg, rgba(255,255,255,0.85) 35%, rgba(248,238,231,0.85) 70%), url(${activeSector.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center gap-3 text-[12px] font-medium text-[#a1694b]">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#a1694b]" />
                <span>{isArabic ? "القطاع المختار" : "Selected sector"}</span>
              </div>
              <h3 className="text-2xl font-light text-[#0f172a] drop-shadow-sm">{activeSector.title}</h3>
              <p className="text-sm leading-relaxed text-slate-700 drop-shadow-sm">{activeSector.description}</p>
            </div>
            <div className="border-t border-white/70 bg-white/90 p-5 text-xs text-[#a1694b]">
              {isArabic
                ? "ننمذج الحلول للبنية التحتية الذكية، والحوكمة، والعمليات الرقمية مع ضمان الامتثال والجاهزية التشغيلية."
                : "We blueprint smart infrastructure, governance, and digital operations that balance compliance with operational readiness."}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
