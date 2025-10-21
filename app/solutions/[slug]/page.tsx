import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react"

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

  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0c0805] py-28 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1d140d] to-black opacity-90" />
          <div className="absolute left-1/2 top-[-45%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#d4af37]/25 blur-3xl opacity-60" />
          <div className="absolute bottom-[-50%] right-[-10%] h-[480px] w-[480px] rounded-full bg-[#8b7355]/25 blur-3xl opacity-60" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
                <span>{solution.category}</span>
                <span className="h-[1px] w-10 bg-[#d4af37]/60" />
                <span>{solution.name}</span>
              </div>
              <h1 className="text-4xl font-light leading-tight md:text-5xl">{solution.tagline}</h1>
              <p className="text-sm font-light text-white/70 md:text-base">{solution.description}</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs font-medium text-white transition-colors duration-200 hover:border-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to homepage
              </Link>
              <Link
                href={solution.cta.href}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-medium text-black transition-transform duration-200 hover:scale-105"
              >
                {solution.cta.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solution.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/15 bg-white/10 px-6 py-5 text-sm font-light text-white/80 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]/80">{stat.label}</p>
                <p className="mt-2 text-2xl font-medium text-white">{stat.value}</p>
                {stat.description ? <p className="mt-2 text-xs text-white/60">{stat.description}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-900 md:text-4xl">Why it matters</h2>
              <p className="text-sm font-light leading-relaxed text-gray-600">{solution.overview}</p>
              <div className="rounded-3xl border border-[#d4af37]/20 bg-[#fdfaf3] p-6 text-xs text-gray-700">
                <p className="font-medium uppercase tracking-[0.3em] text-[#8b7355]">Our approach</p>
                <p className="mt-3 text-sm font-light leading-relaxed text-gray-600">{solution.cta.description}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Core capabilities</h3>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {solution.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_25px_60px_-50px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#d4af37]/40"
                  >
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b7355]">Feature</p>
                    <h4 className="mt-3 text-base font-medium text-gray-900">{feature.title}</h4>
                    <p className="mt-2 text-sm font-light leading-relaxed text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gradient-to-b from-white to-[#f8f4ec] py-20">
        <div className="mx-auto max-w-6xl px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">Use Cases</p>
              <h2 className="mt-3 text-3xl font-light text-gray-900 md:text-4xl">Where we deploy</h2>
            </div>
            <p className="max-w-xl text-sm font-light leading-relaxed text-gray-600">
              Each engagement is mapped to measurable operational outcomes, with playbooks tailored to industry regulations and field conditions.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {solution.useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="relative overflow-hidden rounded-3xl border border-[#d4af37]/20 bg-white p-8 shadow-[0_35px_80px_-65px_rgba(0,0,0,0.65)]"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#8b7355]" />
                <h3 className="text-lg font-medium text-gray-900">{useCase.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-gray-600">{useCase.description}</p>
                {useCase.bullets ? (
                  <ul className="mt-4 space-y-2 text-sm font-light text-gray-600">
                    {useCase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d4af37]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Engagement */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-900 md:text-4xl">Tech stack & delivery</h2>
              <p className="text-sm font-light leading-relaxed text-gray-600">
                We select interoperable tooling that integrates with your existing investments while preparing the organization for future innovation.
              </p>
            </div>

            <div className="space-y-10">
              <div className="grid gap-6 md:grid-cols-2">
                {solution.techStack.map((category) => (
                  <div
                    key={category.title}
                    className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_30px_60px_-55px_rgba(0,0,0,0.5)]"
                  >
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b7355]">Stack</p>
                    <h3 className="mt-3 text-base font-medium text-gray-900">{category.title}</h3>
                    <ul className="mt-3 space-y-1 text-sm font-light text-gray-600">
                      {category.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Engagement rhythm</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {solution.engagement.map((step, index) => (
                    <div key={step.title} className="rounded-3xl border border-gray-200 bg-[#fdfaf3] p-5">
                      <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">Phase 0{index + 1}</span>
                      <h4 className="mt-2 text-base font-medium text-gray-900">{step.title}</h4>
                      <p className="mt-2 text-sm font-light text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-gradient-to-b from-[#f8f4ec] to-white py-20">
        <div className="mx-auto max-w-6xl px-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">Why Al-Deqah</p>
            <h2 className="text-3xl font-light text-gray-900 md:text-4xl">What makes our delivery different</h2>
            <p className="text-sm font-light leading-relaxed text-gray-600">
              Cross-disciplinary teams blend engineering, design, and sector expertise, ensuring that every solution is grounded in measurable value and real-world adoption.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solution.differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#d4af37]/20 bg-white p-6 shadow-[0_30px_60px_-55px_rgba(0,0,0,0.45)]"
              >
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b7355]">Differentiator</p>
                <h3 className="mt-3 text-base font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm font-light text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0c0805] py-20 text-white">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">Let’s build</p>
          <h2 className="mt-4 text-3xl font-light md:text-4xl">{solution.tagline}</h2>
          <p className="mt-4 text-sm font-light text-white/70">{solution.overview}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={solution.cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-xs font-medium text-black transition-transform duration-200 hover:scale-105"
            >
              {solution.cta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-2 text-xs font-medium text-white transition-colors duration-200 hover:border-white"
            >
              Explore more solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
