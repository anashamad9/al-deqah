"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react"

import DeqahAIChat from "@/components/deqah-ai-chat"
import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"

type DeqahAIContextValue = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const DeqahAIContext = createContext<DeqahAIContextValue | null>(null)

const QUICK_PROMPTS: Record<Language, string[]> = {
  en: [
    "Outline a Cybersecurity maturity roadmap",
    "Compare XR training vs traditional onboarding",
    "What tech stack powers your IoT deployments?",
    "How can digital twins improve facilities management?",
  ],
  ar: [
    "ضع خارطة طريق لنضج الأمن السيبراني",
    "قارن بين تدريب XR والتأهيل التقليدي",
    "ما المكدس التقني الذي يدعم نشر إنترنت الأشياء لديكم؟",
    "كيف تعزز التوائم الرقمية إدارة المرافق؟",
  ],
}

const CLOSE_LABELS: Record<Language, string> = {
  en: "Close Deqah AI chat",
  ar: "إغلاق محادثة ديقاه AI",
}

export function DeqahAIProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  const value = useMemo(() => ({ isOpen, open, close, toggle }), [isOpen, open, close, toggle])

  return (
    <DeqahAIContext.Provider value={value}>
      {children}
      <DeqahAIPopup />
    </DeqahAIContext.Provider>
  )
}

export function useDeqahAI() {
  const context = useContext(DeqahAIContext)
  if (!context) {
    throw new Error("useDeqahAI must be used within a DeqahAIProvider")
  }
  return context
}

function DeqahAIPopup() {
  const { language } = useLanguage()
  const { isOpen, close } = useDeqahAI()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen, close])

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-end sm:justify-end sm:p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={close} />

      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-lg shadow-[0_30px_70px_-35px_rgba(0,0,0,0.65)]"
      >
        <button
          type="button"
          onClick={close}
          className="absolute -right-2 -top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:text-gray-900"
          aria-label={CLOSE_LABELS[language]}
        >
          <span className="text-lg leading-none">&times;</span>
        </button>

        <div className="flex max-h-[72vh] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-[0_20px_55px_-35px_rgba(0,0,0,0.6)] sm:p-6">
          <DeqahAIChat quickPrompts={QUICK_PROMPTS[language]} variant="popup" />
        </div>
      </div>
    </div>
  )
}
