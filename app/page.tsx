"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
import { PartnersBar } from "@/components/partners-bar"
import ServicesSection from "@/components/services-section"
import { SectorsSection } from "@/components/sectors-section"
import { WhyUsSection } from "@/components/why-us-section"
import HomeFAQ from "@/components/home-faq"
import Footer from "@/components/footer"

export default function ShaderShowcase() {
  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
      </ShaderBackground>

      <PartnersBar />
      <ServicesSection />
      <SectorsSection />
      <WhyUsSection />
      <HomeFAQ />
      <Footer />
    </>
  )
}
