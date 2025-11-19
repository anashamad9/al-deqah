"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"

import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/i18n"
import { cn } from "@/lib/utils"

type ChatRole = "assistant" | "user"

type ChatMessage = {
  role: ChatRole
  content: string
}

type DeqahAIChatProps = {
  quickPrompts?: string[]
  variant?: "page" | "popup"
}

type ChatCopy = {
  introMessage: string
  quickPromptsLabel: string
  placeholder: string
  sendLabel: string
  thinkingLabel: string
  errorMessage: string
  disclaimer: string
  typingLabel: string
  scrollToBottomLabel: string
}

const CHAT_COPY: Record<Language, ChatCopy> = {
  en: {
    introMessage:
      "Hi there! I'm Al-Deqah. I can help you explore Industry 4.0 solutions, scope projects, or surface relevant case studies. How can I assist you today?",
    quickPromptsLabel: "Quick prompts:",
    placeholder: "Ask Al-Deqah anything…",
    sendLabel: "Send",
    thinkingLabel: "Thinking…",
    errorMessage: "We ran into an issue reaching Al-Deqah. Please try again in a moment.",
    disclaimer:
      "Al-Deqah is a prototype assistant. For sensitive or regulated projects, connect directly with our delivery team.",
    typingLabel: "Al-Deqah is typing",
    scrollToBottomLabel: "Scroll to latest",
  },
  ar: {
    introMessage:
      "مرحباً! أنا الدقة. أساعدك في استكشاف حلول الثورة الصناعية الرابعة، تحديد نطاق المشاريع، أو إبراز دراسات حالة ذات صلة. كيف يمكنني مساعدتك اليوم؟",
    quickPromptsLabel: "اقتراحات سريعة:",
    placeholder: "اطرح أي سؤال على الدقة…",
    sendLabel: "إرسال",
    thinkingLabel: "جارٍ التفكير…",
    errorMessage: "حدث خطأ في الوصول إلى الدقة. يرجى المحاولة بعد لحظات.",
    disclaimer: "الدقة مساعد أولي. للمشروعات الحساسة أو الخاضعة للضوابط، تواصل مباشرة مع فريقنا التنفيذي.",
    typingLabel: "الدقة يكتب",
    scrollToBottomLabel: "التمرير للأسفل",
  },
}

export default function DeqahAIChat({ quickPrompts = [], variant = "page" }: DeqahAIChatProps) {
  const { language } = useLanguage()
  const copy = CHAT_COPY[language]
  const isArabic = language === "ar"
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: CHAT_COPY.en.introMessage,
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [isAtBottom, setIsAtBottom] = useState(true)

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 0) {
        return [{ role: "assistant", content: copy.introMessage }]
      }

      const [first, ...rest] = prev
      if (first.role !== "assistant") {
        return prev
      }

      if (first.content === copy.introMessage) {
        return prev
      }

      if (rest.length === 0) {
        return [{ role: "assistant", content: copy.introMessage }]
      }

      return [{ ...first, content: copy.introMessage }, ...rest]
    })
  }, [copy.introMessage])

  useEffect(() => {
    const container = chatContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight
      setIsAtBottom(distanceFromBottom <= 120)
    }

    handleScroll()
    container.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    const container = chatContainerRef.current
    if (!container) return
    container.scrollTo({ top: container.scrollHeight, behavior })
  }

  useEffect(() => {
    if (!isAtBottom) return
    scrollToBottom("instant")
  }, [messages, isLoading, isAtBottom])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    await sendMessage(input.trim())
    setInput("")
  }

  function handleTextareaKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey || event.nativeEvent.isComposing) {
      return
    }
    event.preventDefault()
    const content = input.trim()
    if (!content || isLoading) return
    void sendMessage(content)
    setInput("")
  }

  async function sendMessage(content: string) {
    const userMessage: ChatMessage = { role: "user", content }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/deqah-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      if (!response.ok) {
        throw new Error(await response.text())
      }

      const data = (await response.json()) as { message: ChatMessage }
      setMessages((prev) => [...prev, data.message])
    } catch (err) {
      console.error(err)
      setError(copy.errorMessage)
      setMessages((prev) => prev.slice(0, -1))
    } finally {
      setIsLoading(false)
    }
  }

  const isPopup = variant === "popup"
  const promptOptions = quickPrompts.slice(0, 3)
  const showScrollButton = !isAtBottom

  const containerClasses = cn(
    "flex min-h-0 flex-1 flex-col overflow-hidden",
    isPopup
      ? "max-h-full rounded-none border-none bg-transparent shadow-none"
      : "mt-6 rounded-3xl border border-gray-200 bg-white shadow-[0_25px_60px_-55px_rgba(0,0,0,0.25)]"
  )

  const headerClasses = cn(
    "border-b px-6 py-4 text-xs font-medium text-gray-500",
    isArabic && "arabic",
    isPopup ? "border-white/20 bg-transparent" : "bg-gray-50/80 border-gray-100"
  )

  const footerClasses = cn(
    "border-t px-4 py-4 sm:px-6",
    isPopup ? "border-white/20 bg-transparent" : "border-gray-100 bg-white"
  )

  const scrollContainerStyle = isPopup ? ({ WebkitOverflowScrolling: "touch" } as const) : undefined

  return (
    <div className={cn("flex min-h-0 flex-col", isPopup ? "h-full" : "flex-1")}>
      <div className={containerClasses}>
        {promptOptions.length > 0 ? (
          <div className={headerClasses}>
            <div
              className={cn(
                "flex flex-wrap items-center gap-2 text-[11px] font-medium text-gray-500",
                isArabic ? "justify-end text-right arabic" : ""
              )}
              dir={isArabic ? "rtl" : undefined}
            >
              <span className="text-gray-400">{copy.quickPromptsLabel}</span>
              {promptOptions.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  disabled={isLoading}
                  className={cn(
                    "rounded-full border px-3 py-1 text-[11px] text-gray-700 transition-all duration-200",
                    isPopup
                      ? "border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/20"
                      : "border-[#c8b0a3] bg-white shadow-sm hover:border-[#863730]/50 hover:bg-[#fef5ef]",
                    isArabic ? "arabic" : ""
                  )}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <div className="relative flex-1 min-h-0">
          <div
            ref={chatContainerRef}
            className="flex h-full min-h-0 max-h-full flex-col overflow-y-auto px-4 py-6 sm:px-6"
            style={scrollContainerStyle}
          >
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
              {messages.map((message, index) => (
                <ChatBubble key={`${message.role}-${index}`} message={message} language={language} />
              ))}
              {isLoading ? <TypingIndicator label={copy.typingLabel} isArabic={isArabic} /> : null}
            </div>
          </div>
          {showScrollButton ? (
            <button
              type="button"
              onClick={() => scrollToBottom()}
              className={cn(
                "pointer-events-auto absolute bottom-4 inline-flex items-center gap-2 rounded-full bg-[#863730] px-4 py-2 text-xs font-medium text-white shadow-lg transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#863730]/40",
                isArabic ? "left-4 flex-row-reverse" : "right-4"
              )}
            >
              <ArrowDown className="h-4 w-4" />
              <span className={isArabic ? "arabic" : ""}>{copy.scrollToBottomLabel}</span>
            </button>
          ) : null}
        </div>

        <div className={footerClasses}>
          <form
            className={`mx-auto flex w-full max-w-4xl items-end gap-3 ${isArabic ? "flex-row-reverse text-right" : ""}`}
            onSubmit={handleSubmit}
          >
            <textarea
              rows={1}
              placeholder={copy.placeholder}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleTextareaKeyDown}
              disabled={isLoading}
              className={`max-h-40 flex-1 resize-none rounded-2xl border border-[#863730]/40 bg-white px-4 py-3 text-base font-light text-gray-700 outline-none transition-colors duration-200 focus:border-[#863730] focus:ring-0 disabled:opacity-60 ${
                isArabic ? "arabic text-right" : ""
              }`}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={`rounded-full bg-[#863730] px-5 py-2 text-xs font-medium text-white transition-transform duration-200 hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-60 ${
                isArabic ? "arabic" : ""
              }`}
            >
              {isLoading ? copy.thinkingLabel : copy.sendLabel}
            </button>
          </form>
          {error ? (
            <p
              className={`mx-auto mt-3 max-w-4xl text-xs font-light text-red-500 ${isArabic ? "text-right arabic" : ""}`}
            >
              {copy.errorMessage}
            </p>
          ) : null}
        </div>
      </div>

      <p
        className={cn(
          `mt-6 text-center text-[11px] font-light text-gray-400 ${isArabic ? "arabic" : ""}`,
          isPopup && `mt-4 text-[10px] text-gray-500 ${isArabic ? "arabic" : ""}`
        )}
      >
        {copy.disclaimer}
      </p>
    </div>
  )
}

function ChatBubble({ message, language }: { message: ChatMessage; language: Language }) {
  const isAssistant = message.role === "assistant"
  const isArabic = language === "ar"
  const formattedContent = formatMessageHtml(message.content)

  return (
    <div className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm font-light leading-relaxed ${
          isAssistant
            ? "bg-[#863730] text-white shadow-[0_15px_40px_-35px_rgba(134,55,48,0.6)]"
            : "bg-[#0c0805] text-white shadow-[0_18px_45px_-35px_rgba(0,0,0,0.8)]"
        } ${isArabic ? "text-right arabic" : ""}`}
        dangerouslySetInnerHTML={{ __html: formattedContent }}
      >
      </div>
    </div>
  )
}

function TypingIndicator({ label, isArabic }: { label: string; isArabic: boolean }) {
  return (
    <div className="flex justify-start">
      <div
        className={`flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-3 text-xs font-light text-gray-500 ${
          isArabic ? "arabic" : ""
        }`}
      >
        <span className="sr-only">{label}</span>
        <span className="flex gap-1">
          <Dot />
          <Dot />
          <Dot />
        </span>
      </div>
    </div>
  )
}

function Dot() {
  return (
    <span className="size-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:calc(var(--i,0)*120ms)]" />
  )
}

function formatMessageHtml(content: string) {
  const withoutHeadingMarkers = content.replace(/(^|\s)#{1,6}\s*/g, "$1")
  const escaped = escapeHtml(withoutHeadingMarkers)
  const withBold = escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
  return withBold.replace(/\n/g, "<br />")
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
