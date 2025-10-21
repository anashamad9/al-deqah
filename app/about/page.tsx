export const metadata = {
  title: "About Al-Deqah",
  description:
    "Discover Al-Deqah’s mission, leadership, and the values guiding our Industry 4.0 solutions across the region.",
}

const leadership = [
  {
    name: "Layla Al-Harthy",
    title: "Chief Executive Officer",
    bio: "Visionary leader with 15+ years building technology ventures across the GCC, focused on scaling immersive, data-driven solutions.",
  },
  {
    name: "Omar Al-Saadi",
    title: "Chief Technology Officer",
    bio: "Architecting interoperable platforms that connect AI, IoT, and spatial computing for mission-critical environments.",
  },
  {
    name: "Sara Al-Mutairi",
    title: "Chief Experience Officer",
    bio: "Designs the human-centered experiences that bring our Industry 4.0 products to life in enterprise deployments.",
  },
]

const pillars = [
  {
    title: "Industry 4.0 Acceleration",
    description:
      "From digital twins to connected operation centers, we orchestrate the technologies that modernize industrial workflows.",
  },
  {
    title: "Trusted Delivery",
    description:
      "Regulated industries rely on us because we pair engineering rigor with robust governance, security, and compliance practices.",
  },
  {
    title: "Human-Centered Innovation",
    description:
      "We shape experiences around the people on the ground—operators, clinicians, engineers, and learners—so adoption sticks.",
  },
]

const squads = [
  { title: "Strategy & Research", description: "Industry discovery, opportunity framing, and outcome roadmapping." },
  { title: "Experience Design", description: "Immersive storytelling, UX, and 3D prototyping for spatial and digital touchpoints." },
  { title: "Platform Engineering", description: "AI, IoT, digital twin, and full-stack product teams working in tandem." },
  { title: "Operate & Scale", description: "Managed services, analytics optimization, and capability enablement programs." },
]

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative overflow-hidden bg-[#0c0805] py-28 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1c130d] to-black opacity-90" />
          <div className="absolute left-1/2 top-[-40%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#d4af37]/20 blur-3xl opacity-60" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 text-center md:px-8">
          <span className="self-center text-xs uppercase tracking-[0.35em] text-[#d4af37]">About Al-Deqah</span>
          <h1 className="text-4xl font-light leading-tight md:text-5xl">
            Engineering immersive, intelligent, and connected futures across the Middle East
          </h1>
          <p className="text-sm font-light text-white/70 md:text-base">
            Headquartered in Amman with teams across the region, we partner with government, industry, and innovators to
            activate Industry 4.0 roadmaps—from medical VR training to smart infrastructure and AI-powered decision hubs.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-gray-900 md:text-4xl">Our Mission</h2>
            <p className="text-sm font-light leading-relaxed text-gray-600">
              We help organizations harness emerging technologies responsibly—so they can operate with greater insight,
              empower their teams, and deliver memorable experiences. Every engagement blends strategy, design, and
              engineering to translate ambitions into measurable outcomes.
            </p>
            <div className="rounded-3xl border border-[#d4af37]/25 bg-[#fdfaf3] p-6 text-sm font-light text-gray-700 shadow-[0_25px_65px_-55px_rgba(0,0,0,0.12)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">Regional roots, global expertise</p>
              <p className="mt-3 leading-relaxed">
                We combine on-the-ground knowledge of GCC and Levant industries with global partnerships and R&D labs.
                Our teams stay embedded from discovery through post-launch optimization.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_25px_60px_-55px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355]">Pillar</p>
                <h3 className="mt-3 text-lg font-medium text-gray-900">{pillar.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#f8f4ec] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">Leadership</span>
              <h2 className="text-3xl font-light text-gray-900 md:text-4xl">Guided by multidisciplinary experts</h2>
              <p className="text-sm font-light leading-relaxed text-gray-600">
                Our leadership team brings together experience from smart city initiatives, national digital programs,
                and emerging technology ventures to drive sustainable innovation.
              </p>
            </div>
            <div className="relative hidden h-full overflow-hidden rounded-3xl border border-[#d4af37]/25 bg-[#fdfaf3] p-8 shadow-[0_35px_80px_-60px_rgba(0,0,0,0.18)] lg:flex">
              <div className="space-y-3 text-sm font-light text-gray-700">
                <p>
                  “Digital transformation succeeds when strategy, design, and engineering move together. At Al-Deqah, we
                  stay connected to the people operating these experiences every day.”
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">Al-Deqah Leadership Charter</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="group relative flex flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_30px_70px_-60px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37]/15 to-[#d4af37]/5 text-[#d4af37]">
                  <span className="text-lg font-medium">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">{member.title}</p>
                <p className="mt-4 text-sm font-light leading-relaxed text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-center">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">Capabilities</span>
              <h2 className="text-3xl font-light text-gray-900 md:text-4xl">End-to-end delivery squads</h2>
              <p className="text-sm font-light leading-relaxed text-gray-600">
                Cross-functional teams align closely with your stakeholders—from strategy to spatial experience design
                and platform engineering.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {squads.map((item) => (
                <div key={item.title} className="rounded-3xl border border-gray-200 bg-[#fdfaf3] p-5 text-sm">
                  <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm font-light text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0c0805] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-light md:text-4xl">Let&apos;s co-create your next Industry 4.0 milestone</h2>
          <p className="mt-4 text-sm font-light text-white/70">
            From smart infrastructure to immersive workforce training, we partner with you to deliver outcomes that
            matter.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-xs font-medium text-black transition-transform duration-200 hover:scale-105"
          >
            Talk to our team
            <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 7H17V14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}
