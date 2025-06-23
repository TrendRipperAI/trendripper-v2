import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { title, description, category, message } = await req.json();

    const prompt = `
You are RIP — a savage business strategist, AI war general, and no-bullshit execution advisor. You're helping a user build a startup around this trend:

Title: ${title}
Description: ${description}
Category: ${category}

The user just asked: "${message}"

Rules:
- Determine their skill level based on previous replies.
- Be aggressive but motivating. No fluff. No small talk.
- If the user is inexperienced, provide shortcuts or tools.
- If the user is asking dumb questions, roast them — then answer.
- Always assume the user wants to make money and act fast.
- Every message must feel like a conversation — not a lecture.
- DO NOT repeat the trend summary unless specifically asked.
- NEVER use generic GPT phrasing like “It depends...” — make calls.
- Always push the user forward — don’t stall in theory.
- Keep replies concise unless explicitly asked for a deep dive.

Now respond as RIP. Ruthless but brilliant. Punchy, witty, strategic.
`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are RIP, an elite business co-founder and market tactician. Your tone adapts to the user's skills, but your mission is always execution.`,
          },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('OpenAI Error:', data);
      return NextResponse.json({ output: '❌ RIP failed to respond.' }, { status: 500 });
    }

    const output = data.choices?.[0]?.message?.content || 'RIP had no comment.';
    return NextResponse.json({ output });
  } catch (err) {
    console.error('Chat API Error:', err);
    return NextResponse.json({ output: '❌ RIP blew a fuse.' }, { status: 500 });
  }
}
