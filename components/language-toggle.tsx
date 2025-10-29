"use client"

import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"
import { cn } from "@/lib/utils"

type LanguageToggleProps = {
  variant?: "light" | "dark"
}

export default function LanguageToggle({ variant = "light" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()

  const options: Array<{ value: Language; label: string; className?: string }> = [
    { value: "en", label: "EN" },
    { value: "ar", label: "العربية", className: "arabic" },
  ]

  const containerClass =
    variant === "dark"
      ? "border-white/20 bg-white/10"
      : "border-neutral-900/10 bg-neutral-900/5"
  const activeClass =
    variant === "dark"
      ? "bg-white text-[#0c0805] shadow-[0_6px_20px_-12px_rgba(255,255,255,0.45)]"
      : "bg-black text-white shadow-[0_6px_20px_-12px_rgba(0,0,0,0.6)]"
  const inactiveClass =
    variant === "dark"
      ? "text-white/80 hover:text-white"
      : "text-neutral-700 hover:text-neutral-900"

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full p-1 backdrop-blur",
        containerClass
      )}
    >
      {options.map((option) => {
        const active = option.value === language
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value)}
            className={cn(
              "rounded-full px-3 py-1 text-[11px] font-medium transition-all duration-200",
              active ? activeClass : inactiveClass,
              option.className ?? ""
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
