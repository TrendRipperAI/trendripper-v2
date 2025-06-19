'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useSavedTrends } from '@/hooks/useSavedTrends';
import TrendGrid from '@/components/TrendGrid';
import {
  FolderKanban,
  BarChart3,
  BrainCircuit,
  Flame,
  Trash2,
  Pencil,
  Download
} from 'lucide-react';

type Project = {
  id: string;
  name: string;
  description: string;
  category: string;
  createdAt: string;
  ripGenerated?: boolean;
};

interface Props {
  userId: string;
  accountTier: string;
  projects: Project[];
}

export default function DashboardClient({ userId, accountTier }: Props) {
  const router = useRouter();

  const { trends, loading, error } = useSavedTrends(userId);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  const fetchProjects = async () => {
    setLoadingProjects(true);
    const { data, error } = await supabase
      .from('Project')
      .select('*')
      .eq('userId', userId)
      .order('createdAt', { ascending: false });

    if (error) {
      console.error('❌ Failed to fetch projects:', error.message);
    } else {
      setProjects(data ?? []);
    }

    setLoadingProjects(false);
  };

  useEffect(() => {
    fetchProjects();
  }, [userId]);

  const handleDelete = async (id: string) => {
    const confirmed = confirm(
      'Are you sure you want to delete this project? This action cannot be undone.'
    );
    if (!confirmed) return;

    const res = await fetch('/api/project/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      alert('Failed to delete project.');
      return;
    }

    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const sortProjects = (input: Project[]) => {
    return [...input].sort((a, b) => {
      if (sortBy === 'az') return a.name.localeCompare(b.name);
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  };

  const filteredProjects = sortProjects(
    projects.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="pt-20 flex flex-col lg:flex-row gap-8">
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-white text-2xl font-bold flex items-center gap-2">
          <FolderKanban className="w-6 h-6 text-[#06C19F]" />
          Dashboard
        </h1>

        {accountTier && (
          <div className="text-sm font-semibold bg-[#1e252e] text-[#06C19F] px-3 py-2 rounded-lg w-fit border border-[#06C19F]">
            {accountTier.toUpperCase()} TIER
          </div>
        )}

        <hr className="border-[#2b2d31]" />

        {/* Saved Trends */}
        <section>
          <h2 className="text-white text-xl font-bold mb-4">💾 Saved Trends</h2>
          {loading ? (
            <p className="text-white">Loading saved trends...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : trends.length === 0 ? (
            <p className="text-gray-400">You haven’t saved any trends yet.</p>
          ) : (
            <TrendGrid trends={trends} userId={userId} />
          )}
        </section>

        {/* AI Projects */}
        <section className="mt-10">
          <div className="flex justify-between items-center mb-4 gap-4 flex-wrap">
            <h2 className="text-white text-xl font-bold flex items-center gap-2">
              <BrainCircuit className="w-6 h-6 text-[#06C19F]" />
              AI Projects
            </h2>

            <div className="flex gap-3 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search projects..."
                className="bg-[#1e252e] text-white border border-[#06C19F] px-4 py-2 rounded-lg w-full sm:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#1e252e] text-white border border-[#06C19F] px-3 py-2 rounded-lg"
              >
                <option value="newest">Newest</option>
                <option value="az">A–Z</option>
              </select>
            </div>
          </div>

          {loadingProjects ? (
            <p className="text-white">Loading projects...</p>
          ) : filteredProjects.length === 0 ? (
            <p className="text-gray-400">No projects match your search.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#1e252e] rounded-2xl p-4 shadow-md border border-[#06C19F] flex flex-col relative transition-all"
                >
                  <div className="absolute top-4 left-4 bg-[#06C19F] text-black text-xs font-bold px-2 py-1 rounded">
                    {project.category.toUpperCase()}
                  </div>

                  <h2 className="text-white font-bold text-lg mt-8 mb-2">
                    {project.name}
                  </h2>
                  <p className="text-sm text-[#CCCCCC] line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  <p className="text-xs text-gray-500 mt-auto">
                    Created on {new Date(project.createdAt).toLocaleDateString()}
                  </p>

                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="text-red-500 hover:text-red-400"
                      title="Delete project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => router.push(`/builder/${project.id}`)}
                      className="text-[#06C19F] hover:text-green-400"
                      title="Continue building"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => alert('Download not implemented')}
                      className="text-white hover:text-gray-300"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* RIGHT COLUMN: Stats + Rip Credits + Top Trend */}
      <div className="flex flex-col gap-6 self-start h-fit sticky top-20">
        {/* Stats Tracker */}
        <div className="bg-[#1e252e] w-[280px] rounded-2xl border border-[#06C19F] p-6 shadow-lg flex flex-col gap-6">
          <h2 className="text-white text-xl font-bold flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-[#06C19F]" />
            Your Stats
          </h2>
          <div className="text-white flex flex-col gap-4 mt-2 text-sm">
            <div className="flex justify-between">
              <span>Projects Created</span>
              <span className="font-bold">{projects.length}</span>
            </div>
            <div className="flex justify-between">
              <span>MVPs Built</span>
              <span className="font-bold">
                {projects.filter((p) => p.ripGenerated).length}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Last Project</span>
              <span className="font-bold">
                {projects[0]
                  ? new Date(projects[0].createdAt).toLocaleDateString()
                  : '—'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Top Category</span>
              <span className="font-bold">AI</span>
            </div>
            <div className="flex justify-between">
              <span>Avg Rip Rating</span>
              <span className="font-bold">4.2 ★</span>
            </div>
          </div>
        </div>

        {/* Rip Credits */}
        <div className="bg-[#1e252e] w-[280px] rounded-2xl border border-[#06C19F] p-6 shadow-lg flex flex-col gap-4">
          <h2 className="text-white text-xl font-bold flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-[#06C19F]" />
            Rip Credits
          </h2>
          <div className="text-sm text-white flex justify-between">
            <span>Rips Remaining</span>
            <span className="font-bold">1 / 3</span>
          </div>
          <div className="text-sm text-white flex justify-between">
            <span>Plan</span>
            <span className="font-bold">FREE</span>
          </div>
          <button className="mt-2 bg-[#06C19F] text-black font-semibold text-sm py-2 px-3 rounded-xl hover:bg-opacity-90 transition">
            Upgrade to Pro
          </button>
        </div>

        {/* Today's Top Trend */}
        {trends.length > 0 && (
          <div className="bg-[#1e252e] w-[280px] rounded-2xl border border-[#06C19F] p-4 shadow-lg flex flex-col gap-3">
            <h2 className="text-white text-lg font-bold flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#06C19F]" />
              Today’s Top Trend
            </h2>
            <div className="bg-[#15171f] rounded-xl p-4 border border-[#2b2d31]">
              <div className="text-xs text-[#06C19F] font-bold uppercase mb-2">
                {trends[0].category}
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{trends[0].title}</h3>
              <p className="text-xs text-[#CCCCCC] line-clamp-3 mb-3">{trends[0].description}</p>
              <button
                onClick={() => router.push('/discover')}
                className="w-full bg-[#06C19F] text-black font-semibold text-xs py-1.5 rounded-xl hover:bg-opacity-90 transition"
              >
                View in Discover
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
