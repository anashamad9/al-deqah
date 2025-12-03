import type { Metadata } from "next"

import PortfolioPage from "@/components/portfolio-page"

export const metadata: Metadata = {
  title: "Portfolio | Al-Deqah",
  description: "المشاريع المنفّذة من قبل الشركة",
}

export default function Portfolio() {
  return <PortfolioPage />
}
