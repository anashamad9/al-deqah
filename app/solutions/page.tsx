import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { solutions } from "@/lib/solutions"

export const metadata = {
  title: "Solutions | Al-Deqah",
  description: "Explore immersive, intelligent, and connected solutions engineered by Al-Deqah.",
}

export default function SolutionsIndexPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="relative overflow-hidden bg-[#0c0805] py-28 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1d140d] to-black opacity-90" />
          <div className="absolute left-1/2 top-[-45%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#d4af37]/25 blur-3xl opacity-60" />
          <div className="absolute bottom-[-50%] right-[-10%] h-[480px] w-[480px] rounded-full bg-[#8b7355]/25 blur-3xl opacity-60" />
        </div>
        <div className="relative mx-auto max-w-5xl px-8 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">Solutions</p>
          <h1 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
            Spatial, Intelligent, and Connected systems engineered for impact
          </h1>
          <p className="mt-4 text-sm font-light text-white/70 md:text-base">
            Our teams combine immersive design, AI, IoT, and operations strategy to build products and platforms that
            transform how people work, learn, and experience the world.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-[#d4af37]/20 bg-white p-8 shadow-[0_35px_80px_-65px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d4af37] to-transparent" />
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#8b7355]">
                  <span>{solution.category}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#d4af37]/80 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h2 className="mt-4 text-2xl font-light text-gray-900">{solution.name}</h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-gray-600">{solution.tagline}</p>
                <p className="mt-4 text-xs font-light uppercase tracking-[0.3em] text-[#d4af37]">Explore →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
