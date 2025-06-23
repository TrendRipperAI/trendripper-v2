'use client';

import Link from 'next/link';
import TopTrendsSection from '@/components/TopTrendsSection';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function LandingPage() {
  const [sessionExists, setSessionExists] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSessionExists(!!data.session);
    };

    checkSession();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#171e26] text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-[#2a2f36] sticky top-0 z-50 bg-[#171e26]">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="TrendRipper Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold">TrendRipper</h1>
        </div>
        {!sessionExists && (
          <Link
            href="/sign-in"
            className="bg-[#06C19F] text-black font-bold px-4 py-2 rounded hover:bg-[#04aa8e] transition"
          >
            Login
          </Link>
        )}
      </header>

      {/* Hero */}
      <section
        className="flex flex-col items-center justify-center flex-1 text-center px-6 py-16 animate-background"
        style={{
          backgroundImage:
            'linear-gradient(270deg, #171e26, #1f2a3a, #06C19F, #171e26)',
          backgroundSize: '600% 600%',
        }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#06C19F] to-white bg-clip-text text-transparent">
          Rip Trends. Launch Fast.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Discover explosive market shifts early and turn them into scalable microbusinesses—before anyone else.
        </p>
        <div className="flex gap-4 flex-col md:flex-row">
          <Link
            href="/sign-up"
            className="bg-[#06C19F] text-black font-bold px-6 py-3 rounded-lg text-lg hover:bg-[#04aa8e] transition"
          >
            Start Ripping Trends
          </Link>
          {!sessionExists && (
            <Link
              href="/sign-in"
              className="border border-white text-white font-bold px-6 py-3 rounded-lg text-lg hover:border-[#06C19F] hover:text-[#06C19F] transition"
            >
              Sign In
            </Link>
          )}
        </div>
      </section>

      {/* Trending Preview Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-6 text-center">Today’s Top Trends</h3>
        <TopTrendsSection />
      </section>
    </div>
  );
}
