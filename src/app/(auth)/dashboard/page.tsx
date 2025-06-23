// This file should NOT have 'use client'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import DashboardClient from './DashboardClient';
import { prisma } from '@/lib/prisma';

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = session?.user?.id || '';

  // Optional: Fetch user account tier from your DB if needed
  const accountTier = 'free'; // Hardcoded for now, update later if needed

  // Optional: Fetch user projects
  const projects = await prisma.project.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <DashboardClient
      userId={userId}
      accountTier={accountTier}
      projects={projects}
    />
  );
}
