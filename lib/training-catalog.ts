import trainingCatalogData from "@/lib/training-catalog-data.json"

type LocalizedString = {
  en: string
  ar: string
}

type LocalizedObjectives = {
  en: string[]
  ar: string[]
}

export type TrainingProgram = {
  id: string
  title: LocalizedString
  hours: LocalizedString
  objectives: LocalizedObjectives
}

export type TrainingCategory = {
  id: string
  header?: string
  title: LocalizedString
  description: LocalizedString
  programs: TrainingProgram[]
}

export const trainingCatalog = trainingCatalogData as TrainingCategory[]
