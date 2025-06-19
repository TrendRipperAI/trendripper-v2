import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner'; // ✅ Add this

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TrendRipper',
  description: 'Rip trends. Launch fast. Dominate.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#171e26] text-white font-sans min-h-screen">
        {/* ✅ Toast notifications */}
        <Toaster richColors position="top-right" />
        
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
