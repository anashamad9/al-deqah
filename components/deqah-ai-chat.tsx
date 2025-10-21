"use client"

import { useEffect, useRef, useState } from "react"

type ChatRole = "assistant" | "user"

type ChatMessage = {
  role: ChatRole
  content: string
}

type DeqahAIChatProps = {
  quickPrompts?: string[]
}

export default function DeqahAIChat({ quickPrompts = [] }: DeqahAIChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm Deqah AI. I can help you explore Industry 4.0 solutions, scope projects, or surface relevant case studies. How can I assist you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = chatContainerRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [messages, isLoading])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    await sendMessage(input.trim())
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
      setError("We ran into an issue reaching Deqah AI. Please try again in a moment.")
      setMessages((prev) => prev.slice(0, -1))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {quickPrompts.length > 0 ? (
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50/60 p-3 text-xs text-gray-600 shadow-sm sm:px-4 sm:py-3">
          <span className="font-medium text-gray-400">Quick prompts:</span>
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => sendMessage(prompt)}
              disabled={isLoading}
              className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-medium text-gray-600 transition-colors duration-200 hover:border-[#d4af37]/60 hover:bg-[#fdfaf3] hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50"
            >
              {prompt}
            </button>
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-1 flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_25px_60px_-55px_rgba(0,0,0,0.25)]">
        <div className="border-b border-gray-100 bg-gray-50/80 px-6 py-4 text-xs font-medium text-gray-500">
          Conversation
        </div>

        <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
            {messages.map((message, index) => (
              <ChatBubble key={`${message.role}-${index}`} message={message} />
            ))}
            {isLoading ? <TypingIndicator /> : null}
          </div>
        </div>

        <div className="border-t border-gray-100 bg-white px-4 py-4 sm:px-6">
          <form className="mx-auto flex w-full max-w-4xl items-end gap-3" onSubmit={handleSubmit}>
            <textarea
              rows={1}
              placeholder="Ask Deqah AI anything…"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              disabled={isLoading}
              className="max-h-40 flex-1 resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm font-light text-gray-700 outline-none transition-colors duration-200 focus:border-[#d4af37]/60 focus:ring-0 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="rounded-full bg-[#0c0805] px-5 py-2 text-xs font-medium text-white transition-transform duration-200 hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-60"
            >
              {isLoading ? "Thinking…" : "Send"}
            </button>
          </form>
          {error ? <p className="mx-auto mt-3 max-w-4xl text-xs font-light text-red-500">{error}</p> : null}
        </div>
      </div>

      <p className="mt-6 text-center text-[11px] font-light text-gray-400">
        Deqah AI is a prototype assistant. For sensitive or regulated projects, connect directly with our delivery team.
      </p>
    </>
  )
}

function ChatBubble({ message }: { message: ChatMessage }) {
  const isAssistant = message.role === "assistant"
  return (
    <div className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm font-light leading-relaxed ${
          isAssistant
            ? "bg-gray-100 text-gray-700 shadow-[0_15px_40px_-35px_rgba(0,0,0,0.4)]"
            : "bg-[#0c0805] text-white shadow-[0_18px_45px_-35px_rgba(0,0,0,0.8)]"
        }`}
      >
        {message.content}
      </div>
    </div>
  )
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-3 text-xs font-light text-gray-500">
        <span className="sr-only">Deqah AI is typing</span>
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
