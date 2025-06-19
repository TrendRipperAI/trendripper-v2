'use client';

import { useEffect, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Settings, Trash2, SunMoon } from 'lucide-react';
import Link from 'next/link';

export default function SettingsPage() {
  const [user, setUser] = useState<any>(null);
  const [tier, setTier] = useState('Free'); // Placeholder for now
  const [createdAt, setCreatedAt] = useState('');
  const supabase = createBrowserClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      const { user } = data;
      if (user) {
        setUser(user);
        setCreatedAt(new Date(user.created_at).toLocaleDateString());
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="p-10 max-w-2xl mx-auto text-white">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-6 mt-10">
        <Settings className="text-[#06C19F]" size={28} />
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>

      {/* USER INFO SECTION */}
      <div className="bg-[#161d24] border border-[#06C19F] p-6 rounded-xl mb-8 space-y-4">
        <h2 className="text-lg font-semibold text-white mb-2">Account Info</h2>
        <div className="text-base leading-relaxed">
          <p><span className="text-white/60">Name:</span> {user?.user_metadata?.name || '—'}</p>
          <p><span className="text-white/60">Surname:</span> {user?.user_metadata?.surname || '—'}</p>
          <p><span className="text-white/60">Email:</span> {user?.email}</p>
          <p><span className="text-white/60">Account Created:</span> {createdAt || '—'}</p>
          <p><span className="text-white/60">Account Tier:</span> {tier}</p>
        </div>
        <button
          onClick={() => alert('TODO: Delete account logic')}
          className="mt-4 flex items-center gap-2 text-red-500 text-sm hover:underline"
        >
          <Trash2 size={16} />
          Delete Account
        </button>
      </div>

      {/* COMMUNICATION PREFS */}
      <div className="bg-[#161d24] border border-[#06C19F] p-6 rounded-xl mb-8 space-y-3">
        <h2 className="text-lg font-semibold text-white mb-2">Communication</h2>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" defaultChecked className="accent-[#06C19F]" />
          Receive product updates
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" defaultChecked className="accent-[#06C19F]" />
          Get trend alerts
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="accent-[#06C19F]" />
          Join feature testing program
        </label>
      </div>

      {/* T&Cs + THEME SETTINGS */}
      <div className="bg-[#161d24] border border-[#06C19F] p-6 rounded-xl space-y-3">
        <h2 className="text-lg font-semibold text-white mb-2">Preferences</h2>
        <button
          disabled
          className="flex items-center gap-2 text-sm text-white/80 cursor-not-allowed"
        >
          <SunMoon size={16} />
          Light/Dark mode (coming soon)
        </button>
        <Link href="/terms" className="text-sm text-white/80 underline hover:text-white">
          View Terms & Conditions
        </Link>
      </div>
    </div>
  );
}
