'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-8 py-6 border-t border-[#2a2f36] text-sm text-gray-400 bg-[#171e26]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-center md:text-left">
          &copy; {new Date().getFullYear()} TrendRipper. All rights reserved.
        </span>
        <div className="flex space-x-4">
          <Link
            href="/legal/terms"
            className="hover:text-white transition underline-offset-4 hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            href="/legal/privacy"
            className="hover:text-white transition underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Company Address */}
      <div className="mt-4 text-center text-xs text-white/40">
        1111B S Governors Ave STE 29189, Dover, DE 19904
      </div>
    </footer>
  );
}
