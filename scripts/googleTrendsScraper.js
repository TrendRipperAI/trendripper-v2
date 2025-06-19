const puppeteer = require("puppeteer");
const Database = require("better-sqlite3");
const path = require("path");

(async () => {
  const dbPath = path.join(__dirname, "../trends.sqlite");
  const db = new Database(dbPath);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto("https://trends.google.com/trends/trendingsearches/daily?geo=US", {
    waitUntil: "networkidle2",
  });

  await new Promise((res) => setTimeout(res, 8000)); // Force wait for hydration

  const trends = await page.evaluate(() => {
    const results = [];

    const containers = document.querySelectorAll("div.feed-item");
    containers.forEach((el) => {
      const title = el.querySelector("span.title")?.textContent?.trim() || "Untitled";
      const snippet = el.querySelector("div.search-count-title")?.textContent?.trim() || "";
      const summary = el.querySelector("div.summary-text")?.textContent?.trim() || "";
      const description = `${summary} ${snippet}`.trim() || "No description available.";

      results.push({ title, description });
    });

    return results;
  });

  console.log("📦 Trends scraped:", trends);

  const insert = db.prepare(`
    INSERT INTO google_trends (title, description, category)
    VALUES (?, ?, ?)
  `);

  const existingTitles = db
    .prepare("SELECT title FROM google_trends ORDER BY created_at DESC LIMIT 100")
    .all()
    .map((row) => row.title);

  let inserted = 0;

  for (const trend of trends) {
    if (!existingTitles.includes(trend.title)) {
      insert.run(trend.title, trend.description, "Google Trends (US)");
      inserted++;
    }
  }

  await browser.close();
  db.close();

  console.log(`✅ Scraped and inserted ${inserted} new Google Trends.`);
})();
