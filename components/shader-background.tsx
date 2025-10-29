"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.MeshGradient),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#f5e7c9_0%,#ffffff_60%,#ffffff_100%)]"
      />
    ),
  }
)

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches)
    setPrefersReducedMotion(media.matches)
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", handleChange)
    } else {
      media.addListener(handleChange)
    }
    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", handleChange)
      } else {
        media.removeListener(handleChange)
      }
    }
  }, [])

  const shouldAnimate = !prefersReducedMotion
  const baseSpeed = isActive ? 0.35 : 0.18
  const accentSpeed = isActive ? 0.22 : 0.12

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-white">
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Background Shaders */}
      {shouldAnimate ? (
        <>
          <MeshGradient
            className="absolute inset-0 w-full h-full"
            colors={["#ffffff", "#f7efe0", "#d4af37", "#f0e4cf", "#ffffff"]}
            speed={baseSpeed}
            backgroundColor="#ffffff"
          />
          <MeshGradient
            className="absolute inset-0 w-full h-full opacity-60"
            colors={["#ffffff", "#f5e7c9", "#d4af37", "#ffffff"]}
            speed={accentSpeed}
            wireframe="true"
            backgroundColor="transparent"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,#f7efe0_0%,#ffffff_65%,#ffffff_100%)]"
        />
      )}

      {children}
    </div>
  )
}
