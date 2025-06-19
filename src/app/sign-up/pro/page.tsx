'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ProSignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const validCodes = ['RIPPRO2024', 'VIPLAUNCH', 'TRXALPHA'];

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptTerms) {
      setError('You must accept the Terms & Privacy Policy.');
      return;
    }

    if (!validCodes.includes(accessCode.trim().toUpperCase())) {
      setError('Invalid access code.');
      return;
    }

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          account_tier: 'pro',
          access_code_used: accessCode.trim().toUpperCase(),
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
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-[#171e26] pt-20 pb-20 text-white">
      {/* Centered Back Button */}
      <div className="mb-6">
        <Link
          href="/sign-up"
          className="inline-flex items-center text-sm text-white/70 hover:text-white transition underline-offset-4 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Pricing
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-4">Sign Up – Pro Plan</h1>

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
        <input
          type="text"
          placeholder="Access Code"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          className="p-2 rounded text-black"
          required
        />
        <label className="text-sm flex items-center gap-2">
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
          Sign Up Pro
        </button>
      </form>

      <p className="text-sm mt-4">
        Already have an account?{' '}
        <Link href="/sign-in" className="underline text-[#06C19F]">
          Sign in
        </Link>
      </p>
    </div>
  );
}
