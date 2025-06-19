import { useEffect, useState } from "react";

export interface RedditTrend {
  id: string;
  title: string;
  subreddit: string;
  score: number;
  url: string;
  createdAt: string;
}

export function useRedditTrends() {
  const [trends, setTrends] = useState<RedditTrend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const res = await fetch("/api/trends/reddit");
        const json = await res.json();

        if (!json.success) throw new Error(json.message || "Failed to load");

        setTrends(json.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrends();
  }, []);

  return { trends, loading, error };
}
