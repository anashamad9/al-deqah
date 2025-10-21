import { NextResponse } from "next/server"

type ChatRole = "assistant" | "user"

type ChatMessage = {
  role: ChatRole
  content: string
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured. Set OPENAI_API_KEY in your environment." },
        { status: 500 }
      )
    }

    const body = (await request.json()) as { messages?: ChatMessage[] }
    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
    }

    const trimmedMessages = body.messages.slice(-10)

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.4,
        messages: [
          {
            role: "system",
            content:
              "You are Deqah AI, a helpful assistant representing Al-Deqah Tech. Provide concise, practical guidance about Industry 4.0, immersive technologies, AI, IoT, and the company’s capabilities. When relevant, recommend workshops, discovery sprints, or managed services. Keep responses professional, empathetic, and tailored to organizations in the Middle East.",
          },
          ...trimmedMessages,
        ],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("OpenAI API Error:", errorText)
      return NextResponse.json({ error: "Failed to fetch response from Deqah AI." }, { status: 502 })
    }

    const data = await response.json()
    const choice = data.choices?.[0]?.message
    if (!choice?.content) {
      return NextResponse.json({ error: "No response generated." }, { status: 500 })
    }

    return NextResponse.json({
      message: {
        role: choice.role === "assistant" ? "assistant" : "assistant",
        content: choice.content,
      } satisfies ChatMessage,
    })
  } catch (error) {
    console.error("Deqah AI route error:", error)
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 })
  }
}
