"use client"

import { useState } from "react"

import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"

type FormState = "idle" | "submitting" | "success"

const FORM_COPY: Record<
  Language,
  {
    fields: {
      name: { label: string; placeholder: string }
      email: { label: string; placeholder: string }
      company: { label: string; placeholder: string }
      phone: { label: string; placeholder: string }
    }
    inquiryLabel: string
    inquiryTypes: string[]
    messageLabel: string
    messagePlaceholder: string
    disclaimer: string
    button: {
      idle: string
      submitting: string
      success: string
    }
    successMessage: string
  }
> = {
  en: {
    fields: {
      name: { label: "Full name", placeholder: "Your name" },
      email: { label: "Email", placeholder: "you@company.com" },
      company: { label: "Company", placeholder: "Organization" },
      phone: { label: "Phone", placeholder: "+962..." },
    },
    inquiryLabel: "Inquiry type",
    inquiryTypes: [
      "General inquiry",
      "Industry 4.0 strategy workshop",
      "Medical VR / Immersive training",
      "AI & Data platform assessment",
      "IoT & smart infrastructure",
      "Partnership opportunity",
    ],
    messageLabel: "How can we help?",
    messagePlaceholder: "Tell us about your project, goals, or challenges…",
    disclaimer: "By submitting, you agree to our privacy policy and allow us to contact you about your inquiry.",
    button: {
      idle: "Send message",
      submitting: "Sending…",
      success: "Message sent",
    },
    successMessage: "Thank you! Our team will reach out shortly.",
  },
  ar: {
    fields: {
      name: { label: "الاسم الكامل", placeholder: "اسمك" },
      email: { label: "البريد الإلكتروني", placeholder: "you@company.com" },
      company: { label: "الشركة", placeholder: "المؤسسة" },
      phone: { label: "رقم الهاتف", placeholder: "+962..." },
    },
    inquiryLabel: "نوع الاستفسار",
    inquiryTypes: [
      "استفسار عام",
      "ورشة استراتيجية للثورة الصناعية الرابعة",
      "الواقع الطبي الافتراضي / التدريب الغامر",
      "تقييم منصة الذكاء الاصطناعي والبيانات",
      "إنترنت الأشياء والبنية التحتية الذكية",
      "فرصة شراكة",
    ],
    messageLabel: "كيف يمكننا مساعدتك؟",
    messagePlaceholder: "أخبرنا عن مشروعك أو أهدافك أو التحديات التي تواجهها…",
    disclaimer: "بإرسال هذا النموذج، فإنك توافق على سياسة الخصوصية لدينا وتسمح لنا بالتواصل معك حول استفسارك.",
    button: {
      idle: "إرسال الرسالة",
      submitting: "جارٍ الإرسال…",
      success: "تم إرسال الرسالة",
    },
    successMessage: "شكراً لك! سيتواصل معك فريقنا في أقرب وقت.",
  },
}

export default function ContactForm() {
  const { language } = useLanguage()
  const copy = FORM_COPY[language]
  const isArabic = language === "ar"
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
          <InputField
            id="name"
            name="name"
            label={copy.fields.name.label}
            placeholder={copy.fields.name.placeholder}
            required
            isArabic={isArabic}
          />
          <InputField
            id="email"
            name="email"
            type="email"
            label={copy.fields.email.label}
            placeholder={copy.fields.email.placeholder}
            required
            isArabic={isArabic}
          />
          <InputField
            id="company"
            name="company"
            label={copy.fields.company.label}
            placeholder={copy.fields.company.placeholder}
            isArabic={isArabic}
          />
          <InputField
            id="phone"
            name="phone"
            label={copy.fields.phone.label}
            placeholder={copy.fields.phone.placeholder}
            isArabic={isArabic}
          />
        </div>

        <div className={`flex flex-col gap-1.5 ${isArabic ? "text-right" : ""}`}>
          <label className={`text-xs uppercase tracking-[0.3em] text-gray-500 ${isArabic ? "arabic" : ""}`} htmlFor="inquiry">
            {copy.inquiryLabel}
          </label>
          <select
            id="inquiry"
            name="inquiry"
            className={`rounded-2xl border border-gray-200 px-4 py-3 text-sm font-light text-gray-700 outline-none transition-colors duration-200 focus:border-[#d4af37]/60 focus:ring-0 ${
              isArabic ? "arabic text-right" : ""
            }`}
            defaultValue={copy.inquiryTypes[0]}
          >
            {copy.inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className={`flex flex-col gap-1.5 ${isArabic ? "text-right" : ""}`}>
          <label className={`text-xs uppercase tracking-[0.3em] text-gray-500 ${isArabic ? "arabic" : ""}`} htmlFor="message">
            {copy.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder={copy.messagePlaceholder}
            className={`rounded-2xl border border-gray-200 px-4 py-3 text-sm font-light text-gray-700 outline-none transition-colors duration-200 focus:border-[#d4af37]/60 focus:ring-0 ${
              isArabic ? "arabic text-right" : ""
            }`}
          />
        </div>

        <div className={`flex items-center justify-between gap-4 ${isArabic ? "flex-row-reverse text-right" : ""}`}>
          <p className={`text-[11px] font-light text-gray-400 ${isArabic ? "arabic" : ""}`}>{copy.disclaimer}</p>
          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className={`inline-flex items-center gap-2 rounded-full bg-[#0c0805] px-6 py-2 text-xs font-medium text-white transition-transform duration-200 hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-60 ${
              isArabic ? "flex-row-reverse arabic" : ""
            }`}
          >
            {status === "success" ? copy.button.success : status === "submitting" ? copy.button.submitting : copy.button.idle}
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
        <div
          className={`mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 ${
            isArabic ? "text-right arabic" : ""
          }`}
        >
          {copy.successMessage}
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
  isArabic?: boolean
}

function InputField({ id, name, label, placeholder, type = "text", required, isArabic }: InputFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${isArabic ? "text-right" : ""}`}>
      <label className={`text-xs uppercase tracking-[0.3em] text-gray-500 ${isArabic ? "arabic" : ""}`} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        className={`rounded-2xl border border-gray-200 px-4 py-3 text-sm font-light text-gray-700 outline-none transition-colors duration-200 focus:border-[#d4af37]/60 focus:ring-0 ${
          isArabic ? "arabic text-right" : ""
        }`}
      />
    </div>
  )
}
