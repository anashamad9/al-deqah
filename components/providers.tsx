"use client"

import type { ReactNode } from "react"

import { LanguageProvider } from "@/components/language-context"
import { DeqahAIProvider } from "@/components/deqah-ai-widget"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <DeqahAIProvider>{children}</DeqahAIProvider>
    </LanguageProvider>
  )
}
