import axios from "axios";
import * as cheerio from "cheerio";
import * as fs from "fs";
import * as path from "path";

async function scrapeGlaspTrends() {
  const url = "https://glasp.co/trends";
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:110.0) Gecko/20100101 Firefox/110.0",
  };

  try {
    const response = await axios.get(url, { headers });
    const $ = cheerio.load(response.data);
    const trends: {
      title: string;
      description: string;
      country: string;
      date: string;
      source: string;
      scrapedAt: string;
      url: string;
    }[] = [];

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
  } catch (err: any) {
    console.error("❌ Failed to scrape Glasp trends:", err.message);
  }
}

scrapeGlaspTrends();
