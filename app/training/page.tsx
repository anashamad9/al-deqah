import type { Metadata } from "next"

import TrainingPageContent from "@/components/training-page-content"

export const metadata: Metadata = {
  title: "Training & Capability Development",
  description:
    "Explore Al-Deqah’s immersive training programs across leadership, project management, and human capital excellence.",
}

export default function TrainingPage() {
  return <TrainingPageContent />
}
