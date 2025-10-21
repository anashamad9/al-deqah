import type React from "react"
import type { Metadata } from "next"
import { Figtree, IBM_Plex_Sans_Arabic } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
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
    <html lang="en" dir="ltr">
      <body className={`${figtree.variable} ${instrumentSerif.variable} ${ibmPlexArabic.variable} ${GeistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
