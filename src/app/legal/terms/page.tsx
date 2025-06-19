import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
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

      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        By accessing or using TrendRipper ("the Platform"), you agree to be bound by these Terms of Service.
        If you do not agree with these terms, do not use the Platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Platform</h2>
      <p className="mb-4">
        TrendRipper is a business intelligence and AI trend analysis platform. All content and insights are
        for informational purposes only and do not constitute business, financial, or legal advice.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. AI-Generated Content</h2>
      <p className="mb-4">
        Content may be generated using artificial intelligence. You acknowledge the experimental nature of such outputs,
        and agree to verify any business decisions made based on AI-generated suggestions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Intellectual Property</h2>
      <p className="mb-4">
        TrendRipper retains rights to all platform-generated content and code. You retain ownership of trends or content
        you save, but by submitting content you grant us a non-exclusive right to use it for platform analytics and
        product improvement. Projects built using TrendRipper tools may be subject to TrendRipper’s retained interest.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate any account for misuse, abuse, or breach of terms. All rights to
        saved data and projects may be revoked in such cases.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Disclaimers</h2>
      <p className="mb-4">
        TrendRipper is provided “as is” with no warranties or guarantees of outcome. The Platform is not liable for
        losses, damages, or missed opportunities resulting from reliance on its content.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of the State of Delaware, USA.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms at any time. Continued use of the Platform signifies acceptance of the modified terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Refund Policy</h2>
      <p className="mb-4">
        All sales are final. Due to the nature of our digital services and AI-generated outputs, we do not offer refunds
        or partial credits under any circumstances.
      </p>

      <p className="mt-8">Last updated: June 19, 2025</p>
    </div>
  );
}
