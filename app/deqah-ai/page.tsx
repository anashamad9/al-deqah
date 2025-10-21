import DeqahAIChat from "@/components/deqah-ai-chat"
import Header from "@/components/header"
import Footer from "@/components/footer"

const quickPrompts = [
  "Outline a Cybersecurity maturity roadmap",
  "Compare XR training vs traditional onboarding",
  "What tech stack powers your IoT deployments?",
  "How can digital twins improve facilities management?",
]

export const metadata = {
  title: "Deqah AI Assistant",
  description:
    "Chat with Deqah AI to explore Al-Deqah’s immersive, intelligent, and connected Industry 4.0 capabilities.",
}

export default function DeqahAIPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-white text-gray-900">
        <div className="border-b border-gray-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
            <div className="flex flex-col gap-1">
              <span className="inline-flex w-fit items-center rounded-full border border-gray-200 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.35em] text-gray-500">
                Deqah AI
              </span>
              <p className="text-xs font-light text-gray-500">
                Intelligent assistant for Industry 4.0 questions, scoped by Al-Deqah.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
              <span className="size-2 rounded-full bg-emerald-400" />
              Online
            </span>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-3 pb-6 pt-4 sm:px-4 lg:px-6">
            <DeqahAIChat quickPrompts={quickPrompts} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
