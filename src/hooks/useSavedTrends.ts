import { useEffect, useState } from 'react';
import { RedditTrend } from './useRedditTrends';

export function useSavedTrends(userId: string) {
  const [trends, setTrends] = useState<RedditTrend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSaved = async () => {
      try {
        const res = await fetch('/api/trends/saved/list', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId }),
        });

        const json = await res.json();

        if (!json.success) throw new Error(json.message || 'Failed to load');

        setTrends(json.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSaved();
  }, [userId]);

  return { trends, loading, error };
}
