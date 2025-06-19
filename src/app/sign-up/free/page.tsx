'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function FreeSignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptTerms) {
      setError('You must accept the Terms & Privacy Policy.');
      return;
    }

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          account_tier: 'free',
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
    } else {
      router.push('/sign-up/verify');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Sign Up - Free Plan</h1>
      <form onSubmit={handleSignUp} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="p-2 rounded text-black"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="p-2 rounded text-black"
          required
        />
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
        <label className="text-sm text-white flex items-center gap-2">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          I accept the&nbsp;
          <Link href="/legal/terms" className="underline text-[#06C19F]" target="_blank">
            Terms
          </Link>
          &nbsp;and&nbsp;
          <Link href="/legal/privacy" className="underline text-[#06C19F]" target="_blank">
            Privacy Policy
          </Link>
        </label>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-[#06C19F] text-black font-bold py-2 rounded hover:bg-[#04aa8e] transition"
        >
          Sign Up Free
        </button>
      </form>
      <p className="text-white text-sm mt-4">
        Already have an account?{' '}
        <Link href="/sign-in" className="underline text-[#06C19F]">
          Sign in
        </Link>
      </p>
    </div>
  );
}
