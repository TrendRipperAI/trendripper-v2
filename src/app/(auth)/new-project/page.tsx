'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { Lightbulb } from 'lucide-react';

export default function NewProjectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [trendTitle, setTrendTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  useEffect(() => {
    const title = searchParams.get('title') || '';
    const description = searchParams.get('description') || '';
    const cat = searchParams.get('category') || '';

    setTrendTitle(title);
    setDesc(description);
    setCategory(cat);
  }, [searchParams]);

  const generateName = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/namegen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: desc }),
      });

      const data = await res.json();
      if (data.name) {
        setName(data.name);
      } else {
        setName('Untitled Startup');
      }
    } catch (err) {
      console.error('Error generating name:', err);
      setName('Untitled Startup');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    const params = new URLSearchParams({
      title: name,
      description: desc,
      category,
    });

    router.push(`/builder/new?${params.toString()}`);
  };

  return (
    <div className="p-10 max-w-2xl mx-auto text-white">
      {/* Heading */}
      <div className="flex items-center gap-3 mt-10 mb-6">
        <Lightbulb className="text-[#06C19F]" size={28} />
        <h1 className="text-3xl font-bold">Let’s shape your idea</h1>
      </div>

      {/* Based on trend card */}
      {trendTitle && (
        <div className="bg-[#161d24] border border-[#06C19F] p-4 rounded-xl mb-6">
          <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Based on Trend</p>
          <p className="text-white font-semibold">{trendTitle}</p>
        </div>
      )}

      {/* Form */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <input
            className="bg-white text-black px-4 py-3 rounded-md flex-1"
            placeholder="Business Name"
            value={name}
            readOnly
          />
          <button
            onClick={generateName}
            disabled={isLoading}
            className="bg-[#06C19F] text-black font-bold px-4 py-2 rounded-md hover:opacity-90"
          >
            {isLoading ? 'Thinking...' : 'Generate Name'}
          </button>
        </div>

        <textarea
          className="bg-white text-black px-4 py-3 rounded-md"
          placeholder="What’s your idea about?"
          rows={8}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <input
          className="bg-white text-black px-4 py-3 rounded-md"
          value={category}
          disabled
        />

        <button
          onClick={handleSubmit}
          className="bg-[#06C19F] text-black font-bold py-3 rounded-md hover:opacity-90 mt-4"
        >
          Rip It
        </button>
      </div>

      {/* Upgrade modal (temporarily unused) */}
      <Dialog open={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-[#1a1a1a] max-w-md p-6 rounded-2xl shadow-lg border border-white/10">
            <Dialog.Title className="text-lg font-bold text-white mb-2">Unlock RIP</Dialog.Title>
            <Dialog.Description className="text-white/70 mb-4">
              This feature is part of the Pro plan. Upgrade to start building your business with RIP.
            </Dialog.Description>
            <button
              onClick={() => {
                setShowUpgradeModal(false);
                router.push('/upgrade');
              }}
              className="bg-[#06C19F] text-black font-bold px-4 py-2 rounded-md hover:opacity-90 w-full"
            >
              Upgrade to Pro
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
