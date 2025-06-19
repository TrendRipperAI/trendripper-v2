'use client';

import Link from 'next/link';
import { Check, X, ArrowLeft } from 'lucide-react';

export default function SignUpTierSelection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 text-white bg-[#171e26] pt-10 pb-20">
      {/* Massive Logo + Brand Name */}
      <div className="flex items-center justify-center gap-6 mb-10">
        <img src="/logo.png" alt="TrendRipper Logo" className="w-32 h-32" />
        <div>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">TrendRipper</h1>
          <p className="text-white/60 mt-2 text-xl">The ultimate shortcut to your next big thing.</p>
        </div>
      </div>

      {/* Back to Home */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-white/70 hover:text-white transition underline-offset-4 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold mb-4 text-center">Pick Your Weapon</h2>
      <p className="text-white/70 mb-10 text-center max-w-xl">
        Whether you're testing the waters or diving into full-scale domination — we’ve got a tier for you.
      </p>

      {/* Comparison Block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Free Tier */}
        <div className="bg-[#1f2937] p-8 rounded-2xl border border-white/10 shadow-md flex flex-col">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white">Free</h2>
            <p className="text-white/60">Perfect for testing ideas fast</p>
          </div>
          <div className="text-4xl font-extrabold text-white mb-6">$0</div>
          <ul className="text-sm text-white/90 space-y-2 flex-1">
            <li className="flex items-center">
              <Check className="w-4 h-4 text-[#06C19F] mr-2" /> Save trends
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-[#06C19F] mr-2" /> 1 MVP build per day
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-[#06C19F] mr-2" /> Basic AI recommendations
            </li>
            <li className="flex items-center">
              <X className="w-4 h-4 text-red-500 mr-2" /> Full RIP AI chat
            </li>
            <li className="flex items-center">
              <X className="w-4 h-4 text-red-500 mr-2" /> Unlimited MVP builds
            </li>
            <li className="flex items-center">
              <X className="w-4 h-4 text-red-500 mr-2" /> Advanced analysis tools
            </li>
          </ul>
          <Link
            href="/sign-up/coming-soon"
            className="mt-8 bg-[#06C19F] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#04aa8e] transition text-center"
          >
            Continue with Free
          </Link>
        </div>

        {/* Pro Tier */}
        <div className="bg-[#1f2937] p-8 rounded-2xl border border-[#06C19F] shadow-md flex flex-col">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white">Pro</h2>
            <p className="text-white/60">Unlock the full War Room arsenal</p>
          </div>
          <div className="text-4xl font-extrabold text-white mb-6">
            $15<span className="text-lg font-normal text-white/50">/mo</span>
          </div>
          <ul className="text-sm text-white/90 space-y-2 flex-1">
            <li className="flex items-center">
              <Check className="w-4 h-4 text-[#06C19F] mr-2" /> Save trends
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-[#06C19F] mr-2" /> Unlimited MVP builds
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-[#06C19F] mr-2" /> Full RIP AI chat access
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-[#06C19F] mr-2" /> Advanced trend analysis tools
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-[#06C19F] mr-2" /> Full MVP planner + roadmap
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-[#06C19F] mr-2" /> Export, print & share projects
            </li>
          </ul>
          <Link
            href="/sign-up/pro"
            className="mt-8 bg-[#06C19F] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#04aa8e] transition text-center"
          >
            Enter Access Code
          </Link>
        </div>
      </div>
    </div>
  );
}
