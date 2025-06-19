require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const OpenAI = require('openai');

const prisma = new PrismaClient();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const subreddits = [
  'startups',
  'Entrepreneur',
  'SaaS',
  'sideproject',
  'smallbusiness',
  'femalefashionadvice',
  'fragrance',
  'skincareaddiction',
  'finance',
  'povertyfinance',
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function enrichTrend(originalTitle, subreddit) {
  const prompt = `
You are RIP — the brutal AI trend strategist inside TrendRipper. You turn Reddit noise into monetizable, builder-friendly business opportunities.

Follow Reign’s 5 ruthless rules:
1. Decode the *real signal* behind the Reddit post — not surface hype.
2. Translate that signal into a digital or monetizable format (e.g., SaaS, community, service).
3. Identify exactly how to monetize it (platforms, tools, offers — no fluff).
4. Filter out trends that solo builders couldn’t execute in under 30 days.
5. Be brutally honest. Don’t polish garbage. Only weaponize real signals.

Analyze this Reddit post:
- Title: "${originalTitle}"
- Subreddit: r/${subreddit}

Return ONLY this raw JSON — no commentary or explanation:

{
  "title": "Magnetic, scroll-stopping headline (max 8 words). Think viral Twitter. NEVER copy the Reddit title.",
  "categories": ["Relevant", "Precise", "No bullshit"],
  "description": "Why this matters in plain, sharp English.",
  "monetization": "Exactly how to make money from it. Include platform, format, or offer type. Must be clear.",
  "builderFilter": "Who should build this? (e.g. Solo devs, designers, coaches)",
  "feasibility": 1,
  "urgency": 1,
  "rating": 1
}
`;

  try {
    const res = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.6,
    });

    const raw = res.choices[0].message.content;
    const match = raw.match(/\{[\s\S]*\}/);
    const parsed = match ? JSON.parse(match[0]) : null;

    if (!parsed?.title || !parsed?.description || typeof parsed.rating !== 'number') {
      throw new Error('Invalid AI format');
    }

    return parsed;
  } catch (err) {
    console.error(`❌ OpenAI failed on: "${originalTitle}" — ${err.message}`);
    return null;
  }
}

async function scrapeRedditTrends() {
  const allTrends = [];

  for (const subreddit of subreddits) {
    const res = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=10`);
    const json = await res.json();
    const posts = json.data?.children || [];

    for (const post of posts) {
      const title = post.data.title;
      const score = post.data.score;
      const url = `https://reddit.com${post.data.permalink}`;

      const enriched = await enrichTrend(title, subreddit);
      await delay(2500); // Respect OpenAI rate limit

      if (!enriched) continue;

      const {
        title: cleanedTitle,
        description,
        categories,
        monetization,
        builderFilter,
        feasibility,
        urgency,
        rating,
      } = enriched;

      if (rating < 3 || !monetization || monetization.toLowerCase().includes('no monetization')) {
        console.log(`⏭ Skipped weak trend: ${cleanedTitle}`);
        continue;
      }

      const existing = await prisma.redditTrend.findFirst({ where: { url } });
      if (existing) {
        console.log(`⏭ Already exists: ${cleanedTitle}`);
        continue;
      }

      await prisma.redditTrend.create({
        data: {
          title: cleanedTitle,
          subreddit,
          score,
          url,
          categories: categories || [],
          description,
          monetizationIdea: monetization,
          builderFilter,
          feasibility,
          urgency,
          rating,
        },
      });

      console.log(`✅ Saved: ${cleanedTitle}`);
      allTrends.push(cleanedTitle);
    }
  }

  console.log(`🎉 Done. ${allTrends.length} trends saved.`);
  await prisma.$disconnect();
}

scrapeRedditTrends();
