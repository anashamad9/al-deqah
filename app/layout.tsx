import type React from "react"
import type { Metadata } from "next"
import { Figtree, IBM_Plex_Sans_Arabic, Instrument_Serif } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Providers } from "@/components/providers"

const languageInitScript = `
;(function () {
  try {
    var storageKey = 'aldeqah-language'
    var stored = typeof window !== 'undefined' ? window.localStorage.getItem(storageKey) : null
    var lang = stored === 'ar' ? 'ar' : 'en'
    var root = document.documentElement
    root.setAttribute('lang', lang)
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    root.dataset.language = lang
    if (lang === 'ar') {
      document.body && document.body.classList.add('arabic')
    } else {
      document.body && document.body.classList.remove('arabic')
    }
  } catch (error) {
    // ignore access issues (e.g. storage disabled)
  }
})()
`

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Al-Deqah Tech",
    template: "%s | Al-Deqah Tech",
  },
  applicationName: "Al-Deqah Tech",
  description:
    "Al-Deqah Tech delivers immersive, intelligent, and connected Industry 4.0 solutions across the Middle East.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${figtree.variable} ${instrumentSerif.variable} ${ibmPlexArabic.variable} ${GeistMono.variable}`}
      >
        <script dangerouslySetInnerHTML={{ __html: languageInitScript }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
