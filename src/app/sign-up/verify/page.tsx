'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function VerifyEmailPage() {
  const [checking, setChecking] = useState(true);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const router = useRouter();

  useEffect(() => {
    const startPolling = () => {
      const id = setInterval(async () => {
        const { data } = await supabase.auth.getUser();

        if (data?.user?.email_confirmed_at) {
          clearInterval(id);
          setIntervalId(null);
          router.push('/dashboard');
        } else {
          console.log('Still waiting for email confirmation...');
        }
      }, 4000); // check every 4 seconds

      setIntervalId(id);
    };

    startPolling();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-white text-center max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">✅ Verify Your Email</h1>
      <p>
        You’re nearly in. Check your inbox and click the verification link we sent.
      </p>
      <p className="text-sm text-gray-400 mt-4">
        This page will redirect automatically once your email is confirmed.
      </p>
    </div>
  );
}
