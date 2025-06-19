'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // 🚨 This is critical: forces full reload so the server sees the session
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Sign In</h1>
      <form onSubmit={handleSignIn} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded text-black"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded text-black"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="bg-[#06C19F] text-black font-bold py-2 rounded">
          Sign In
        </button>
      </form>
      <p className="text-white text-sm mt-4">
        Don’t have an account?{' '}
        <Link href="/sign-up" className="underline text-[#06C19F]">
          Sign up here
        </Link>
      </p>
    </div>
  );
}
