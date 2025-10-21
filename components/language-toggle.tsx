"use client"

import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const options: Array<{ value: Language; label: string; className?: string }> = [
    { value: "en", label: "EN" },
    { value: "ar", label: "العربية", className: "arabic" },
  ]

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/25 bg-white/10 p-1 backdrop-blur">
      {options.map((option) => {
        const active = option.value === language
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value)}
            className={`rounded-full px-3 py-1 text-[11px] font-medium transition-all duration-200 ${
              active
                ? "bg-white text-black shadow-[0_6px_20px_-12px_rgba(0,0,0,0.6)]"
                : "text-white/70 hover:text-white"
            } ${option.className ?? ""}`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
