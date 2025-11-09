"use client"

import Image from "next/image"
import Link from "next/link"

import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"

const galleryItems = [
  {
    src: "/tech-company.jpg",
    title: "Immersive Command Suites",
    category: "Spatial Experiences",
    description: "High-fidelity briefing environments that blend live situational data with cinematic lighting cues.",
  },
  {
    src: "/GettyImages-1383963898_1200x675.jpg",
    title: "Intelligent Operations",
    category: "Connected Systems",
    description: "Mission control workspaces where AI-assisted workflows keep every stakeholder aligned in real time.",
  },
  {
    src: "/abstract-network-connection-brown-plexus-lines-nodes-white-background-ideal-technology-connectivity-communication-data-383687407.jpg.webp",
    title: "Secure Data Fabrics",
    category: "Digital Infrastructure",
    description: "Layered data visualizations that translate complex analytics into clear, actionable narratives.",
  },
  {
    src: "/placeholder.jpg",
    title: "Immersive Briefings",
    category: "Experience Design",
    description: "Modular storytelling canvases designed for executive war rooms and ministerial showcases.",
  },
  {
    src: "/placeholder-user.jpg",
    title: "Human-Centered Design",
    category: "Innovation Labs",
    description: "Rapid prototyping spaces that keep teams experimenting, iterating, and learning faster together.",
  },
  {
    src: "/placeholder-logo.png",
    title: "Branded Touchpoints",
    category: "Identity Systems",
    description: "Signature artifacts and brand moments that extend trust across every client interaction.",
  },
] as const

export default function GalleryPageContent() {
  return (
    <div className="relative min-h-screen bg-[#fdf7f3] text-neutral-900">
      <NavBar />
      <div aria-hidden className="h-[72px] w-full md:h-[76px]" />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 lg:gap-16 lg:py-24">
        <section className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#863730]">Our Gallery</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Stories from the environments we craft
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-neutral-600">
            A glimpse into the immersive spaces, intelligent tooling, and human moments that define Al-Deqah’s work
            across defense, government, and enterprise innovation programs.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={item.title === "Immersive Command Suites"}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
              <div className="space-y-3 px-5 py-6">
                <p className="text-xs uppercase tracking-[0.35em] text-[#863730]">{item.category}</p>
                <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-[#f0dcd1] bg-gradient-to-br from-white via-[#fdf3ee] to-[#f4e4db] px-8 py-10 text-center shadow-[0_30px_90px_-60px_rgba(134,55,48,0.65)]">
          <p className="text-xs uppercase tracking-[0.35em] text-[#863730]">Schedule a walkthrough</p>
          <h2 className="mt-4 text-3xl font-semibold text-neutral-900">Bring your next activation to life</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600">
            We craft immersive rooms, decision theaters, and digital-first showcases that help leaders align faster.
            Let’s curate a tailored preview for your mission.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#863730] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#742f29]"
            >
              Talk to our team
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-full border border-neutral-900/15 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5 hover:border-[#863730]/50 hover:text-[#863730]"
            >
              Explore services
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
