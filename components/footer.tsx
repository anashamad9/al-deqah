"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, ArrowUpRight, Linkedin, Instagram, Twitter, Github } from "lucide-react"

import { solutions } from "@/lib/solutions"

const navigation = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Deqah AI", href: "/deqah-ai" },
      { label: "Industry Insights", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: solutions.map((solution) => ({
      label: solution.name,
      href: `/solutions/${solution.slug}`,
    })),
  },
]

const contacts = [
  {
    icon: Mail,
    label: "info@aldeqah-tech.com",
    href: "mailto:info@aldeqah-tech.com",
  },
  {
    icon: Phone,
    label: "+962 79 200 7354",
    href: "tel:+962792007354",
  },
  {
    icon: MapPin,
    label: "Amman, Jordan",
  },
]

const socials = [
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Twitter X", icon: Twitter, href: "#" },
  { label: "GitHub", icon: Github, href: "#" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0c0805] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1d140d] to-black opacity-90" />
        <div className="absolute left-1/2 top-[-35%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#d4af37]/25 blur-3xl opacity-70" />
        <div className="absolute bottom-[-45%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[#8b7355]/25 blur-3xl opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-8 py-20 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,340px)_1fr]">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-full bg-white/10">
                  <Image src="/logo-2.png" alt="Al-Deqah logo" width={52} height={68} className="h-10 w-auto" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">Al-Deqah</p>
                  <p className="text-sm font-light text-white/70">Advanced Visual Technology & Intelligent Systems</p>
                </div>
              </div>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Fusing spatial computing, intelligent automation, and immersive design to help organizations architect
                transformative experiences and measurable outcomes.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_65px_-55px_rgba(255,255,255,0.65)] backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">Let&apos;s collaborate</p>
              <h3 className="mt-3 text-lg font-medium text-white">
                Ready to prototype the next dimension of your digital experience?
              </h3>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-medium text-black transition-transform duration-300 hover:scale-105">
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4">
              {contacts.map((contact) => {
                const Icon = contact.icon
                const content = (
                  <div className="flex items-center gap-3 text-sm font-light text-white/70 transition-colors duration-200 hover:text-white">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#d4af37]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>{contact.label}</span>
                  </div>
                )

                return contact.href ? (
                  <a key={contact.label} href={contact.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={contact.label}>{content}</div>
                )
              })}
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {navigation.map((column) => (
              <div key={column.title} className="space-y-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">{column.title}</p>
                <ul className="space-y-3 text-sm font-light text-white/70">
                  {column.links.map((link) => {
                    const content = (
                      <>
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3 w-3 text-[#d4af37]/70" />
                      </>
                    )

                    const className =
                      "inline-flex items-center gap-2 transition-colors duration-200 hover:text-white"

                    if (link.href.startsWith("/")) {
                      return (
                        <li key={link.label}>
                          <Link href={link.href} className={className}>
                            {content}
                          </Link>
                        </li>
                      )
                    }

                    return (
                      <li key={link.label}>
                        <a href={link.href} className={className}>
                          {content}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}

            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Social</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/70 transition-all duration-200 hover:border-[#d4af37]/60 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                      {social.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-xs font-light text-white/50 sm:flex sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Al-Deqah. All rights reserved.</p>
          <div className="mt-4 flex items-center gap-4 sm:mt-0">
            <a href="#" className="transition-colors duration-200 hover:text-white">
              Terms
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
