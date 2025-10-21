"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"
import ServicesSection from "@/components/services-section"
import { SectorsSection } from "@/components/sectors-section"
import { WhyUsSection } from "@/components/why-us-section"
import Footer from "@/components/footer"

export default function ShaderShowcase() {
  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>

      <ServicesSection />
      <SectorsSection />
      <WhyUsSection />
      <Footer />
    </>
  )
}
