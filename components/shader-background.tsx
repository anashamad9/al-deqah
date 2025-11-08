"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ShaderBackgroundProps {
  children: ReactNode
}

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
}

function TechNetworkOverlay({ nodes = 70 }: { nodes?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let width = canvas.clientWidth
    let height = canvas.clientHeight
    let linkDistance = 140
    const particles: Particle[] = []

    const initParticles = () => {
      particles.length = 0
      const count = Math.max(24, Math.min(nodes, Math.round((width + height) / 14)))

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        })
      }
    }

    const resize = () => {
      width = canvas.clientWidth || canvas.offsetWidth
      height = canvas.clientHeight || canvas.offsetHeight
      linkDistance = Math.min(220, Math.max(width, height) * 0.28)

      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      initParticles()
    }

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x <= 0 || particle.x >= width) particle.vx *= -1
        if (particle.y <= 0 || particle.y >= height) particle.vy *= -1

        ctx.beginPath()
        ctx.fillStyle = "rgba(255, 186, 171, 0.9)"
        ctx.arc(particle.x, particle.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const source = particles[i]
          const target = particles[j]
          const dx = source.x - target.x
          const dy = source.y - target.y
          const distance = Math.hypot(dx, dy)

          if (distance < linkDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(137, 59, 46, ${0.85 - distance / (linkDistance * 1.3)})`
            ctx.lineWidth = 0.6
            ctx.moveTo(source.x, source.y)
            ctx.lineTo(target.x, target.y)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(drawFrame)
    }

    resize()
    window.addEventListener("resize", resize)
    animationId = requestAnimationFrame(drawFrame)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [nodes])

  return <canvas ref={canvasRef} aria-hidden className="network-canvas" />
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#1a0503] text-white">
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

      {/* Animated hero backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div aria-hidden className="absolute inset-0 hero-photo-layer" />
        <div aria-hidden className="absolute inset-0 hero-gradient-layer" />
        <div aria-hidden className="absolute inset-0 hero-vignette" />
        <div aria-hidden className="absolute inset-0 hero-glow" />
        <div aria-hidden className="absolute inset-0 hero-noise" />
        <TechNetworkOverlay />
      </div>

      {children}
    </div>
  )
}
