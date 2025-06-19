import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-white">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-block text-sm text-white/70 hover:text-white transition underline-offset-4 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy describes how TrendRipper ("we", "our", or "us") collects, uses, and discloses your
        information when you use our platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We collect basic information such as your name, email address, saved trends, and AI-generated projects.
        We do not collect sensitive personal information such as financial data or government-issued IDs.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to provide and improve our services, personalize your experience, and generate trend
        insights and AI-powered project outputs. We may also use aggregated, non-identifiable data for analytics and
        internal research.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Use of AI Services</h2>
      <p className="mb-4">
        Some features of TrendRipper rely on external AI providers (such as OpenAI). By using the platform, you consent
        to your submitted content (e.g., project prompts) being processed by these services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies & Local Storage</h2>
      <p className="mb-4">
        We may use cookies or browser local storage to maintain user sessions and store preferences. These are only used
        to improve your experience and are never shared with third parties.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Third-Party Services</h2>
      <p className="mb-4">
        We utilize services such as Supabase (for authentication and data storage), Vercel (for deployment), and OpenAI
        (for AI features). These providers may store or process limited data as required for their function.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Data Retention & Deletion</h2>
      <p className="mb-4">
        We retain user data as long as your account remains active. You may request deletion of your account and all
        associated data at any time by contacting hello@trendripperai.com.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Your Rights</h2>
      <p className="mb-4">
        In accordance with GDPR and other applicable laws, you have the right to access, correct, or delete your data,
        and to object to certain types of processing.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify users of significant changes via the
        platform or email.
      </p>

      <p className="mt-8">Last updated: May 26, 2025</p>
    </div>
  );
}
