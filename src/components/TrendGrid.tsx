'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Trend = {
  id: string;
  title: string;
  description?: string;
  monetizationIdea?: string;
  rating: number;
  categories?: string[];
  source: 'reddit' | 'producthunt';
};

type Props = {
  trends: Trend[];
  userId: string;
};

export default function TrendGrid({ trends, userId }: Props) {
  const router = useRouter();
  const [savedMap, setSavedMap] = useState<{ [trendId: string]: boolean }>({});
  const [expandedMap, setExpandedMap] = useState<{ [trendId: string]: boolean }>({});
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);

  const buildOnTrend = (trend: Trend) => {
    const query = new URLSearchParams({
      title: trend.title,
      description: trend.description || '',
      category: trend.categories?.[0] || '',
    }).toString();

    router.push(`/new-project?${query}`);
  };

  const toggleSave = async (trend: Trend) => {
    const isSaved = savedMap[trend.id];
    const method = isSaved ? 'DELETE' : 'POST';

    await fetch('/api/trends/save', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trendId: trend.id, source: trend.source }),
    });

    setSavedMap((prev) => ({
      ...prev,
      [trend.id]: !isSaved,
    }));
  };

  const toggleExpand = (trendId: string) => {
    setExpandedMap((prev) => ({
      ...prev,
      [trendId]: !prev[trendId],
    }));
  };

  const dismissTrend = (id: string) => {
    setDismissedIds((prev) => [...prev, id]);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-[#555]'}>
        ★
      </span>
    ));
  };

  const visibleTrends = trends.filter((t) => !dismissedIds.includes(t.id));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {visibleTrends.map((trend) => {
        const isExpanded = expandedMap[trend.id];

        return (
          <div
            key={trend.id}
            className="bg-[#1e252e] rounded-2xl p-4 shadow-md border border-[#06C19F] flex flex-col relative transition-all duration-300 hover:scale-[1.015] hover:shadow-lg"
          >
            {trend.categories?.[0] && (
              <div className="absolute top-4 left-4 bg-[#06C19F] text-black text-xs font-bold px-2 py-1 rounded">
                {trend.categories[0].toUpperCase()}
              </div>
            )}

            <h2 className="text-white font-bold text-lg mt-8 mb-1 line-clamp-2">{trend.title}</h2>

            <div className="mb-3">
              <span className="text-xs font-bold text-[#888] uppercase tracking-wide mb-1 block">
                Rip Rating
              </span>
              <div className="text-sm">{renderStars(trend.rating || 0)}</div>
            </div>

            <button
              onClick={() => toggleExpand(trend.id)}
              className="text-sm text-[#06C19F] font-semibold hover:underline mt-auto transition"
            >
              {isExpanded ? 'Hide Details' : 'Show Details'}
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                isExpanded ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="text-sm text-[#CCCCCC] space-y-2">
                <p>
                  <span className="font-semibold">🧠</span>{' '}
                  {trend.description || 'No description available.'}
                </p>
                <p>
                  <span className="font-semibold">💰</span>{' '}
                  {trend.monetizationIdea || 'No monetization angle yet.'}
                </p>

                <div className="flex justify-between items-center gap-2 pt-2">
                  <button
                    onClick={() => buildOnTrend(trend)}
                    className="bg-[#06C19F] text-black font-bold text-sm px-3 py-1.5 rounded-xl hover:opacity-90 w-full transition"
                  >
                    Build on This
                  </button>

                  <button
                    onClick={() => toggleSave(trend)}
                    className={`text-sm font-bold transition ${
                      savedMap[trend.id]
                        ? 'text-green-400 hover:text-green-300'
                        : 'text-white hover:text-[#06C19F]'
                    }`}
                  >
                    {savedMap[trend.id] ? '✅ Saved' : '💾 Save'}
                  </button>

                  <button
                    onClick={() => dismissTrend(trend.id)}
                    className="text-red-500 text-lg font-bold hover:text-red-400 transition"
                    title="Dismiss trend"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
