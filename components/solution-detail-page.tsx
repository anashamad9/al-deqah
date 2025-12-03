"use client"

import type { Solution } from "@/lib/solutions"
import CybersecuritySolutionPage from "@/components/cybersecurity-solution-page"

type SolutionDetailPageProps = {
  solution: Solution
}

export default function SolutionDetailPage({ solution }: SolutionDetailPageProps) {
  return <CybersecuritySolutionPage solution={solution} />
}
