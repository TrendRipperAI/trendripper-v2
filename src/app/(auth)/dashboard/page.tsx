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
  const accountTier = 'free';

  const projects = await prisma.project.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });

  // 👇 Convert Date objects to string for client compatibility
  const safeProjects = projects.map((project) => ({
    ...project,
    createdAt: project.createdAt.toISOString(),
  }));

  return (
    <DashboardClient
      userId={userId}
      accountTier={accountTier}
      projects={safeProjects}
    />
  );
}
