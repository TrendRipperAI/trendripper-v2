console.log('🟠 Product Hunt scraper starting...');

require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const OpenAI = require('openai');

const prisma = new PrismaClient();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function fetchProductHuntTrends() {
  const query = `
    {
      posts(first: 15) {
        edges {
          node {
            name
            tagline
            url
            votesCount
            topics {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch('https://api.producthunt.com/v2/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.PRODUCT_HUNT_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();
  const posts = json?.data?.posts?.edges || [];
  console.log(`🔍 Fetched ${posts.length} posts`);

  for (const post of posts) {
    try {
      const { name, tagline, url, votesCount, topics } = post.node;
      const categories = topics.edges.map(edge => edge.node.name.toLowerCase());

      const exists = await prisma.productHuntTrend.findFirst({
        where: { url },
      });

      if (exists) {
        console.log(`⏭ Skipped: ${name}`);
        continue;
      }

      const prompt = `
You are RIP — a ruthless AI startup analyst built into TrendRipper. Your job is to analyze new product launches and extract monetizable angles worth building.

Think like a builder who only wants *fast, scalable wins*.

Here’s the product:

- Name: "${name}"
- Tagline: "${tagline}"
- Categories: ${JSON.stringify(categories)}
- Votes: ${votesCount}
- Source: Product Hunt

Return ONLY this raw JSON object:

{
  "title": "Write a scroll-stopping headline (max 8 words). Think viral tweet, not just a cleaned name.",
  "description": "Explain why this product matters and what opportunity it reveals. Use sharp, clear language.",
  "monetizationIdea": "Describe exactly how someone could build a money-making version of this idea. Include platforms or strategies. No fluff.",
  "rating": 1
}

⚠️ Only give 4s or 5s to trends with real potential. Be blunt. Be strategic. No filler commentary.
`;

      // Safely extract AI output
      let aiOutput;
      try {
        const aiRes = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.6,
        });

        const raw = aiRes.choices[0].message.content;
        aiOutput = JSON.parse(raw.match(/\{[\s\S]*\}/)[0]);
      } catch (err) {
        console.error(`❌ Failed to parse AI output for "${name}":`, err.message);
        continue;
      }

      const { title, description, monetizationIdea, rating } = aiOutput;

      if (!title || !description || !monetizationIdea || typeof rating !== 'number') {
        console.log(`⏭ Skipping incomplete or invalid AI result for "${name}"`);
        continue;
      }

      await prisma.productHuntTrend.create({
        data: {
          title,
          tagline,
          url,
          upvotes: votesCount,
          categories,
          description: `${description}\n\n💰 ${monetizationIdea}`,
          rating,
        },
      });

      console.log(`✅ Saved: ${title}`);
    } catch (err) {
      console.error(`❌ Error saving "${post.node?.name || 'unknown'}":`, err.message);
    }
  }

  console.log('🎉 Product Hunt scraping done.');
  await prisma.$disconnect();
}

fetchProductHuntTrends().catch((err) => {
  console.error('❌ Error during scraping:', err.message);
  prisma.$disconnect();
});
