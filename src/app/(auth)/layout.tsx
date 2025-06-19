'use client';

import Header from '@/components/Header';
import { ProjectProvider } from '@/context/ProjectContext';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProjectProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto bg-[#171e26]">
          {children}
        </main>
      </div>
    </ProjectProvider>
  );
}
