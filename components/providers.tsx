"use client"

import type { ReactNode } from "react"

import { LanguageProvider } from "@/components/language-context"
import { DeqahAIProvider } from "@/components/deqah-ai-widget"
import FloatingChatButton from "@/components/floating-chat-button"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <DeqahAIProvider>
        {children}
        <FloatingChatButton />
      </DeqahAIProvider>
    </LanguageProvider>
  )
}
