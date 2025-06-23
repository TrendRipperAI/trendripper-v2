'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Radar, Search } from 'lucide-react';
import TrendGrid from '@/components/TrendGrid';

const VALID_CATEGORIES = [
  'Startups',
  'SaaS',
  'AI',
  'Side Hustles',
  'Beauty & Fashion',
  'Skincare',
  'Finance',
  'Health & Fitness',
  'Content Ideas',
  'Ecommerce',
  'Local Business',
  'Tools & Automations',
  'Other'
];

export default function DiscoverPage() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category') || null;

  const [trends, setTrends] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);
  const [sortBy, setSortBy] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTrends = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/trends/all');
        const json = await res.json();
        console.log('[CLIENT] Trends response:', json);

        if (json.success) {
          let filtered = json.data;

          if (selectedCategory) {
            filtered = filtered.filter((t: any) =>
              t.categories?.includes(selectedCategory)
            );
          }

          setTrends(filtered);
        }
      } catch (err) {
        console.error('Failed to fetch trends:', err);
      } finally {
        setLoading(false);
        setVisibleCount(12);
      }
    };

    fetchTrends();
  }, [selectedCategory]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const sortTrends = (input: any[]) => {
    return [...input].sort((a, b) => {
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      if (sortBy === 'az') return a.title.localeCompare(b.title);
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  };

  const filteredAndSortedTrends = sortTrends(
    trends.filter(
      (t) =>
        t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.description?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const visibleTrends = filteredAndSortedTrends.slice(0, visibleCount);

  return (
    <div className="pt-20 flex flex-col gap-6">
      <h1 className="text-white text-2xl font-bold flex items-center gap-2">
        <Radar className="w-6 h-6 text-[#06C19F] animate-pulse" />
        Discover
      </h1>

      <div className="flex gap-8 items-start">
        {/* Sidebar */}
        <aside className="w-64 bg-[#1e252e] p-5 rounded-2xl border border-[#06C19F] shadow-md">
          <h2 className="text-white font-bold mb-4 text-lg">Categories</h2>
          <div className="flex flex-col gap-2">
            <a
              href="/discover"
              className={`px-3 py-2 rounded text-sm font-bold text-left border border-[#06C19F] ${
                !selectedCategory
                  ? 'bg-[#06C19F] text-black'
                  : 'bg-[#161d24] text-white hover:bg-[#3a3a3a]'
              }`}
            >
              All
            </a>
            {VALID_CATEGORIES.map((cat) => (
              <a
                key={cat}
                href={`/discover?category=${encodeURIComponent(cat)}`}
                className={`px-3 py-2 rounded text-sm font-bold text-left ${
                  cat === selectedCategory
                    ? 'bg-[#06C19F] text-black border border-[#06C19F]'
                    : 'bg-[#161d24] text-white hover:bg-[#3a3a3a]'
                }`}
              >
                {cat}
              </a>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Search trends..."
              className="bg-[#1e252e] text-white border border-[#06C19F] px-4 py-2 rounded-lg w-full sm:w-1/2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#1e252e] text-white border border-[#06C19F] px-3 py-2 rounded-lg"
            >
              <option value="newest">Newest</option>
              <option value="rating">Highest Rated</option>
              <option value="az">A–Z</option>
            </select>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-white opacity-80 animate-pulse">
              <Radar className="w-12 h-12 mb-4 text-[#06C19F] animate-spin" />
              <p className="text-lg font-bold tracking-wide">
                Scanning the internet for signals...
              </p>
            </div>
          ) : visibleTrends.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-[#AAAAAA] gap-4">
              <Search className="w-10 h-10 opacity-50" />
              <p className="text-lg font-semibold text-center">
                No trends found.<br />
                Try a different search or category.
              </p>
            </div>
          ) : (
            <>
              <TrendGrid trends={visibleTrends} userId={userId} />
              {visibleCount < filteredAndSortedTrends.length && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleLoadMore}
                    className="bg-[#06C19F] hover:bg-[#05a88a] text-black font-bold px-5 py-2 rounded-lg"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
