import { notFound } from "next/navigation"

import SolutionDetailPage from "@/components/solution-detail-page"
import { getSolutionBySlug, solutions } from "@/lib/solutions"

type SolutionPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }))
}

export function generateMetadata({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug)
  if (!solution) {
    return {}
  }

  return {
    title: `${solution.name} | Al-Deqah`,
    description: solution.description,
  }
}

export default function SolutionPage({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug)

  if (!solution) {
    notFound()
  }

  return <SolutionDetailPage solution={solution} />
}
