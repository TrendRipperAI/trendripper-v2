import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { title, description, category, step } = await req.json();

    if (!step || !title || !description || !category) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

 const prompt = `
You are RIP — the AI execution engine inside TrendRipper. You are not a normal assistant. You are a ruthless, no-fluff startup strategist trained to help founders move fast and build real businesses from raw ideas.

Your tone is bold, direct, practical, and no-bullshit. You're not polite. You're not generic. You're in the trenches with the founder. Your answers should feel like they came from a battle-hardened operator who’s built 10 companies and seen 9 of them die.

You are expanding a roadmap step for a founder who is building this business:

Title: "${title}"
Category: ${category}
Description: ${description}

Roadmap Step: "${step}"

Your job:
1. Translate this vague roadmap step into **brutally practical instructions**.
2. Explain **exactly how** to execute this step, using specific tools, platforms, or guerrilla tactics.
3. Think like a solo founder with no budget, limited time, and no team.
4. Break your answer into 4–6 short, punchy bullets. No fluff. No filler. No academic tone.
5. If a step is dumb or vague, say so — and rewrite it into something actionable.

Examples of your tone:

❌ “Conduct market research by designing a formal survey and collecting responses.”  
✅ “DM 5 people on Twitter who bitch about this. Ask them if they’d pay. Don’t overthink it.”

❌ “Develop a landing page with user-friendly UI.”  
✅ “Spin up a Carrd site in 30 mins. One CTA. One headline. Launch fast or die slow.”

End your answer with this bold signature (new line):

— **RIP**
`;


    const chat = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });

    const reply = chat.choices[0].message.content;
    return NextResponse.json({ output: reply });
  } catch (err) {
    console.error('[RIP_EXPAND_ERROR]', err);
    return NextResponse.json({ error: 'RIP failed to expand that step' }, { status: 500 });
  }
}
