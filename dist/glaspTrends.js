const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

async function scrapeGlaspTrends() {
  const url = "https://glasp.co/trends";
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Accept":
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1",
    "DNT": "1",
  };

  try {
    const response = await axios.get(url, { headers });
    const $ = cheerio.load(response.data);
    const trends = [];

    $("div.flex.flex-col").each((_, el) => {
      const title = $(el).find("h2").text().trim();
      const description = $(el).find("p").first().text().trim();
      const country = $(el).find("img[alt]").attr("alt") || "Unknown";
      const date = new Date().toISOString();

      if (title) {
        trends.push({
          title,
          description,
          country,
          date,
          source: "glasp",
          scrapedAt: date,
          url,
        });
      }
    });

    const outputPath = path.resolve(__dirname, "glasp_trends.json");
    fs.writeFileSync(outputPath, JSON.stringify(trends, null, 2));
    console.log(`✅ Scraped ${trends.length} trends to glasp_trends.json`);
  } catch (err) {
    console.error("❌ Failed to scrape Glasp trends:", err.message);
  }
}

scrapeGlaspTrends();
