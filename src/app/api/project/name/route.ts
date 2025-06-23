import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { description } = await req.json();

    if (!description) {
      return NextResponse.json({ error: 'Missing description' }, { status: 400 });
    }

    const prompt = `
You are a creative branding expert. Come up with a short, catchy startup name for this idea:
"${description}"

Respond with ONLY the name, no extra text.
    `.trim();

    const res = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a branding expert startup strategist.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.9,
    });

    const name = res.choices[0].message.content?.replace(/["\n]/g, '').trim();

    return NextResponse.json({ success: true, name });
  } catch (err: any) {
    console.error('❌ Name gen failed:', err.message);
    return NextResponse.json({ error: 'Name generation failed' }, { status: 500 });
  }
}
