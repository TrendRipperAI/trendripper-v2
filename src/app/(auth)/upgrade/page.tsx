'use client';

import { CheckCircle, XCircle, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function UpgradePage() {
  const router = useRouter();

  const features = [
    { label: 'View trend cards', free: true, pro: true },
    { label: 'Click 3 trends per day', free: true, pro: true },
    { label: 'Unlimited trend access', free: false, pro: true },
    { label: 'Use RIP AI builder', free: false, pro: true },
    { label: 'Save & edit business plans', free: false, pro: true },
    { label: 'Access premium trend signals', free: false, pro: true },
    { label: 'Future tools (auto-MVPs, deploys, etc.)', free: false, pro: true },
  ];

  return (
    <div className="p-10 max-w-4xl mx-auto text-white">
      {/* Hero */}
      <div className="flex items-center gap-3 mt-10 mb-8">
        <Zap className="text-[#06C19F]" size={28} />
        <h1 className="text-3xl font-bold">Unlock RIP. Build like a weapon.</h1>
      </div>
      <p className="text-white/70 mb-8 text-base max-w-2xl text-center mx-auto">
  Upgrade to Pro and unleash the full power of TrendRipper — unlimited trend access, full AI builds, saved projects, premium signals, and more.
</p>

      {/* Feature Comparison Table */}
      <div className="grid grid-cols-3 gap-4 bg-[#161d24] border border-[#06C19F] rounded-xl p-6 mb-10 text-sm">
        <div className="font-bold text-white">Feature</div>
        <div className="font-bold text-white text-center">Free</div>
        <div className="font-bold text-white text-center">Pro</div>
        {features.map((f, i) => (
          <div
            key={i}
            className={`py-2 border-t border-white/10 col-span-3 grid grid-cols-3 items-center`}
          >
            <p className="text-white">{f.label}</p>
            <div className="flex justify-center">
              {f.free ? (
                <CheckCircle className="text-[#06C19F]" size={18} />
              ) : (
                <XCircle className="text-red-500" size={18} />
              )}
            </div>
            <div className="flex justify-center">
              {f.pro ? (
                <CheckCircle className="text-[#06C19F]" size={18} />
              ) : (
                <XCircle className="text-red-500" size={18} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={() => router.push('/subscribe')}
          className="bg-[#06C19F] text-black font-bold px-6 py-3 rounded-md hover:opacity-90 text-base"
        >
          Upgrade to Pro
        </button>
        <p className="text-white/50 text-sm mt-2">Cancel anytime. No bullshit.</p>
      </div>
    </div>
  );
}
