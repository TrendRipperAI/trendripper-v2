import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { description } = await req.json();

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            'You are a business branding assistant. Come up with a short, catchy startup name based on the provided description.',
        },
        {
          role: 'user',
          content: description || 'A new business built around an emerging trend.',
        },
      ],
      max_tokens: 20,
      temperature: 0.8,
    });

    const name = response.choices[0].message.content?.trim().replace(/[".]/g, '') || 'Untitled Startup';

    return NextResponse.json({ name });
  } catch (err) {
    console.error('NameGen API error:', err);
    return NextResponse.json({ error: 'Failed to generate name.' }, { status: 500 });
  }
}
