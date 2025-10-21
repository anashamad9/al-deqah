"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import type { Language } from "@/lib/i18n"
export type { Language } from "@/lib/i18n"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const STORAGE_KEY = "aldeqah-language"

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function applyLanguage(language: Language) {
  if (typeof document === "undefined") return

  const root = document.documentElement
  root.lang = language
  root.dir = language === "ar" ? "rtl" : "ltr"

  if (language === "ar") {
    document.body.classList.add("arabic")
  } else {
    document.body.classList.remove("arabic")
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
    applyLanguage(next)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored === "ar" || stored === "en") {
      setLanguage(stored)
    } else {
      setLanguage("en")
    }
  }, [setLanguage])

  useEffect(() => {
    applyLanguage(language)
  }, [language])

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
