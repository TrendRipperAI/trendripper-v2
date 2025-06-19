import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { trend } = await req.json();

    if (!trend) {
      return NextResponse.json({ error: 'Missing trend title' }, { status: 400 });
    }

    // 🟡 Use mock response if in dev/mock mode
    if (process.env.MOCK_TRENDS === 'true') {
      return NextResponse.json({
        success: true,
        title: `${trend} Pro`,
        description: `A clever AI-generated business idea based on the trend "${trend}".`,
      });
    }

    const prompt = `
Given the trend: "${trend}", generate:

1. A short, catchy project title (no more than 6 words)
2. A one-liner project description that clearly explains the business idea inspired by this trend.

Respond in this exact JSON format:
{
  "title": "Your Generated Title",
  "description": "Your one-liner project description"
}
    `.trim();

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a sharp startup strategist.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.8,
    });

    const text = response.choices[0].message.content || '';
    const match = text.match(/\{[\s\S]*\}/);
    const data = match ? JSON.parse(match[0]) : null;

    if (!data) {
      throw new Error('Failed to parse AI response');
    }

    return NextResponse.json({ success: true, ...data });
  } catch (err: any) {
    console.error('❌ Prefill error:', err.message);
    return NextResponse.json({ error: 'Prefill failed' }, { status: 500 });
  }
}
