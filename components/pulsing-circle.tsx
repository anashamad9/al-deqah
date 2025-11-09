"use client"

import { PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

import { useDeqahAI } from "@/components/deqah-ai-widget"
import { useLanguage } from "@/components/language-context"

export default function PulsingCircle() {
  const { language } = useLanguage()
  const { open } = useDeqahAI()
  const text =
    language === "ar"
      ? "شركة الدقة مذهلة • شركة الدقة مذهلة • شركة الدقة مذهلة • شركة الدقة مذهلة •"
      : "Al-Deqah is amazing • Al-Deqah is amazing • Al-Deqah is amazing • Al-Deqah is amazing •"
  const ariaLabel = language === "ar" ? "افتح محادثة الدقة" : "Open Al-Deqah chat"

  return (
    <div className={`absolute bottom-8 z-30 ${language === "ar" ? "left-8" : "right-8"}`}>
      <button
        type="button"
        onClick={open}
        aria-label={ariaLabel}
        className="relative flex h-20 w-20 items-center justify-center rounded-full cursor-pointer transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BEECFF]/60"
      >
        {/* Pulsing Border Circle */}
        <PulsingBorder
          colors={["#BEECFF", "#E77EDC", "#FF4C3E", "#00FF88", "#FFD700", "#FF6B35", "#8A2BE2"]}
          colorBack="#00000000"
          speed={1.5}
          roundness={1}
          thickness={0.1}
          softness={0.2}
          intensity={5}
          spotsPerColor={5}
          spotSize={0.1}
          pulse={0.1}
          smoke={0.5}
          smokeSize={4}
          scale={0.65}
          rotation={0}
          frame={9161408.251009725}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        {/* Rotating Text Around the Pulsing Border */}
        <motion.svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ transform: "scale(1.6)", pointerEvents: "none" }}
        >
          <defs>
            <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text className={`text-sm fill-neutral-800 instrument ${language === "ar" ? "arabic" : ""}`}>
            <textPath href="#circle" startOffset="0%">
              {text}
            </textPath>
          </text>
        </motion.svg>
      </button>
    </div>
  )
}
