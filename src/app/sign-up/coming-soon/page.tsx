'use client';

import Link from 'next/link';
import { Clock, ArrowLeft } from 'lucide-react';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 text-white bg-[#171e26] pt-20 pb-20">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/sign-up"
          className="inline-flex items-center text-sm text-white/70 hover:text-white transition underline-offset-4 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Pricing
        </Link>
      </div>

      {/* Icon */}
      <div className="mb-4">
        <Clock className="w-10 h-10 text-[#06C19F]" />
      </div>

      <h1 className="text-4xl font-extrabold mb-4">Free Tier Launching Soon</h1>

      <p className="text-gray-300 max-w-xl mb-6 text-lg">
        We're finalizing implementation and testing for the Free tier. The public release is locked in for{' '}
        <span className="text-[#06C19F] font-semibold">August 1st</span>.
      </p>

      <p className="text-gray-400 mb-10">
        Follow us on X for feature previews, product updates, and the occasional mic drop.
      </p>

      <Link
        href="https://x.com/TrendRipperAI"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#06C19F] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#04aa8e] transition"
      >
        Follow @TrendRipperAI on X
      </Link>
    </div>
  );
}
