import { parseStringPromise } from "xml2js";

export async function getGoogleTrends() {
  try {
    console.log("🧠 Fetching Google Trends RSS...");

    const res = await fetch("https://trends.google.com/trends/trendingsearches/daily/rss?geo=US");
    if (!res.ok) throw new Error(`Google Trends RSS fetch failed: ${res.status}`);

    const xml = await res.text();
    const parsed = await parseStringPromise(xml);

    const items = parsed.rss.channel[0].item;

    return items.map((item: any, index: number) => ({
      id: `gtrend-${index}`,
      title: item.title[0],
      description: item.description?.[0]?.split(" - ")[0] || "No description.",
      category: "Google Trends (US)",
    }));
  } catch (err) {
    console.error("❌ Error inside getGoogleTrends():", err);
    throw err;
  }
}
