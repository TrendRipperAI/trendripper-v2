import { NextRequest, NextResponse } from "next/server";
import { mockBuilderOutput } from "@/lib/mockBuilder";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const useMock = process.env.MOCK_TRENDS === "true";
  const { title, description, category } = await req.json();

  const prompt = `
You are Rip, an uncensored, ruthless startup strategist. Your job is to take a trend and turn it into a brutal, brilliant MVP idea that a solo founder could launch fast.

Trend: ${title}
Category: ${category}
Summary: ${description}

Give a short plan that includes:
- What the MVP would do
- Why this trend is hot right now
- 2 monetization angles
- Who should launch this and why

Respond with no fluff. Just the brutal business case.
`;

  if (useMock) {
    console.log("🟡 Using mock builder response");
    return NextResponse.json({ output: mockBuilderOutput });
  }

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const ripResponse = chatResponse.choices[0].message?.content;
    return NextResponse.json({ output: ripResponse });
  } catch (error: any) {
    console.error("❌ OpenAI builder error:", error.message);
    return NextResponse.json(
      { output: "Failed to generate MVP. Please try again later." },
      { status: 500 }
    );
  }
}
