"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const PLACEHOLDER_IMAGES = [
  "/hero-tech-1.png",
  "/hero-tech-2.png",
  "/hero-tech-3.png",
]

export default function HeroIllustration() {
  return (
    <div className="pointer-events-none flex max-w-full justify-center overflow-hidden lg:pointer-events-auto">
      <div className="relative grid h-full max-w-2xl grid-cols-1 gap-4 rounded-[32px] border border-white/60 bg-white/70 p-6 shadow-[0_45px_120px_-70px_rgba(8,47,73,0.25)] backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-3">
        {PLACEHOLDER_IMAGES.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl border border-slate-100/70 bg-white/80 shadow-[0_35px_90px_-70px_rgba(15,23,42,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-full min-h-[220px] items-center justify-center overflow-hidden">
              <Image
                src={src}
                alt="Hero technology visual placeholder"
                fill
                sizes="(max-width: 1024px) 50vw, 280px"
                className="object-cover opacity-70 transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/40 bg-white/70 px-4 py-2 text-[11px] font-medium text-slate-600 shadow-sm">
              <span className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#863730]" />
                Replace with hero tech image {index + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
