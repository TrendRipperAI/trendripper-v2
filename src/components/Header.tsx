'use client';

import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-8 py-4 border-b border-[#2a2f36] bg-[#171e26]">
      <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
        <img src="/logo.png" alt="TrendRipper Logo" className="h-8 w-8" />
        <span className="text-xl font-bold text-white">TrendRipper</span>
      </Link>
      <nav className="flex items-center space-x-6">
        <Link href="/dashboard" className="hover:text-[#03beb2] transition">Dashboard</Link>
        <Link href="/discover" className="hover:text-[#03beb2] transition">Discover</Link>
        <Link href="/new-project" className="hover:text-[#03beb2] transition">New Project</Link>
        <Link href="/settings" className="hover:text-[#03beb2] transition">Settings</Link>
        <LogoutButton />
      </nav>
    </header>
  );
}
