export async function fetchRedditTrendsFromMultiple(subreddits: string[]) {
  const allTrends: any[] = [];

  for (const sub of subreddits) {
    const res = await fetch(`https://www.reddit.com/r/${sub}/hot.json?limit=5`);
    const json = await res.json();

    const posts = json.data.children.map((post: any) => ({
      id: `${sub}-${post.data.id}`,
      title: post.data.title,
      description: post.data.selftext || "No description available.",
      category: `Reddit: /r/${sub}`,
    }));

    allTrends.push(...posts);
  }

  return allTrends;
}
