"use client"

import { useState } from "react"

type FormState = "idle" | "submitting" | "success"

const inquiryTypes = [
  "General inquiry",
  "Industry 4.0 strategy workshop",
  "Medical VR / Immersive training",
  "AI & Data platform assessment",
  "IoT & smart infrastructure",
  "Partnership opportunity",
]

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle")

  async function handleSubmit(formData: FormData) {
    setStatus("submitting")
    await new Promise((resolve) => setTimeout(resolve, 600))
    setStatus("success")
    console.table(Object.fromEntries(formData.entries()))
  }

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.2)]">
      <form action={handleSubmit} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <InputField id="name" name="name" label="Full name" placeholder="Your name" required />
          <InputField id="email" name="email" type="email" label="Email" placeholder="you@company.com" required />
          <InputField id="company" name="company" label="Company" placeholder="Organization" />
          <InputField id="phone" name="phone" label="Phone" placeholder="+962..." />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase tracking-[0.3em] text-gray-500" htmlFor="inquiry">
            Inquiry type
          </label>
          <select
            id="inquiry"
            name="inquiry"
            className="rounded-2xl border border-gray-200 px-4 py-3 text-sm font-light text-gray-700 outline-none transition-colors duration-200 focus:border-[#d4af37]/60 focus:ring-0"
            defaultValue={inquiryTypes[0]}
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase tracking-[0.3em] text-gray-500" htmlFor="message">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your project, goals, or challenges…"
            className="rounded-2xl border border-gray-200 px-4 py-3 text-sm font-light text-gray-700 outline-none transition-colors duration-200 focus:border-[#d4af37]/60 focus:ring-0"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-[11px] font-light text-gray-400">
            By submitting, you agree to our privacy policy and allow us to contact you about your inquiry.
          </p>
          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="inline-flex items-center gap-2 rounded-full bg-[#0c0805] px-6 py-2 text-xs font-medium text-white transition-transform duration-200 hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-60"
          >
            {status === "success" ? "Message sent" : status === "submitting" ? "Sending…" : "Send message"}
            {status !== "success" ? (
              <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 7H17V14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : null}
          </button>
        </div>
      </form>

      {status === "success" ? (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Thank you! Our team will reach out shortly.
        </div>
      ) : null}
    </div>
  )
}

type InputFieldProps = {
  id: string
  name: string
  label: string
  placeholder?: string
  type?: string
  required?: boolean
}

function InputField({ id, name, label, placeholder, type = "text", required }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs uppercase tracking-[0.3em] text-gray-500" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        className="rounded-2xl border border-gray-200 px-4 py-3 text-sm font-light text-gray-700 outline-none transition-colors duration-200 focus:border-[#d4af37]/60 focus:ring-0"
      />
    </div>
  )
}
