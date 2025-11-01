"use client"

import { useLanguage } from "@/components/language-context"

const logos = [
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-1-300x300-1-150x150.png",
    alt: "Google Cloud",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-2-300x300-1-150x150.png",
    alt: "Dell Technologies",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-11-300x300-1-150x150.png",
    alt: "Oracle",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-12-300x300-1-150x150.png",
    alt: "SAP",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-3-300x300-1-150x150.png",
    alt: "Microsoft",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-4-300x300-1-150x150.png",
    alt: "AWS",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-6-300x300-1-150x150.png",
    alt: "Cisco",
  },
  {
    src: "https://aldeqah-tech.com/wp-content/uploads/2025/06/vendors-5-300x300-1-150x150.png",
    alt: "IBM",
  },
] as const

export function PartnersBar() {
  const { language } = useLanguage()
  const label = language === "ar" ? "شركاؤنا التقنيون" : "Our Technology Partners"

  const labelClass =
    language === "ar" ? "arabic text-right" : "uppercase tracking-[0.32em]"

  return (
    <section className="relative z-20 border-y border-black/[0.05] bg-white/95 py-6 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6">
        <div className={`text-xs font-medium text-[#a1694b] ${labelClass}`}>
          {label}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="flex h-16 w-32 items-center justify-center rounded-2xl bg-white/85 px-4 py-3 shadow-[0_18px_40px_-35px_rgba(15,23,42,0.45)] ring-1 ring-black/[0.04]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-h-12 w-auto mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
