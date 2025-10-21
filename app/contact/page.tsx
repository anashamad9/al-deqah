import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Contact Al-Deqah",
  description:
    "Start a conversation with Al-Deqah’s Industry 4.0 specialists to explore immersive, intelligent, and connected solutions.",
}

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative overflow-hidden bg-[#0c0805] py-24 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1c130d] to-black opacity-90" />
          <div className="absolute left-1/2 top-[-45%] h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-[#d4af37]/20 blur-3xl opacity-60" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col gap-5 px-6 text-center md:px-8">
          <span className="self-center text-xs uppercase tracking-[0.35em] text-[#d4af37]">Contact</span>
          <h1 className="text-4xl font-light leading-tight md:text-5xl">
            Let’s scope your next Industry 4.0 initiative together
          </h1>
          <p className="text-sm font-light text-white/70 md:text-base">
            Share a few details about your goals and our specialists will follow up within two business days to align on
            the right workshop, prototype, or delivery program.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
          <div className="space-y-6 rounded-3xl border border-[#d4af37]/20 bg-[#fdfaf3] p-6 shadow-[0_25px_60px_-55px_rgba(0,0,0,0.18)]">
            <h2 className="text-2xl font-light text-gray-900">How we can help</h2>
            <ul className="space-y-4 text-sm font-light text-gray-700">
              <li>• Rapid discovery sprints to prioritize Industry 4.0 use cases</li>
              <li>• Technical assessments for AI, IoT, and digital twin platforms</li>
              <li>• Immersive experience prototyping (VR/AR/XR)</li>
              <li>• Long-term managed services and capability enablement</li>
            </ul>
            <div className="rounded-2xl border border-[#d4af37]/30 bg-white/80 p-4 text-xs font-light text-gray-600">
              <p className="uppercase tracking-[0.3em] text-[#8b7355]">Headquarters</p>
              <p className="mt-2 text-sm">Al-Deqah Tech, Amman - Jordan</p>
              <p className="mt-1 text-sm">info@aldeqah-tech.com · +962 79 200 7354</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  )
}
