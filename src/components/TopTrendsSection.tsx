'use client';

export default function TopTrendsSection() {
  const trends = [
    {
      title: 'Scent-Based Wellness Products',
      category: 'Health & Beauty',
      description: 'Aromatherapy startups using AI to personalize scent profiles for mental wellness are gaining momentum on TikTok and in boutique markets.',
    },
    {
      title: 'One-Person SaaS Tools',
      category: 'Tech / Productivity',
      description: 'Solo founders are generating $10k+/mo building simple AI-powered tools — no funding, no team, just MRR and niche domination.',
    },
    {
      title: 'Vintage Fashion Resale Apps',
      category: 'Retail / Fashion',
      description: 'Gen Z is flooding into mobile-first apps that streamline secondhand luxury sales, from sneakers to curated capsule wardrobes.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {trends.map((trend, index) => (
        <div
          key={index}
          className="bg-[#1f2937] p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h4 className="text-xl font-bold text-white mb-2">{trend.title}</h4>
          <span className="text-sm text-[#06C19F] font-semibold mb-3 block">
            {trend.category}
          </span>
          <p className="text-gray-300 text-sm">{trend.description}</p>
        </div>
      ))}
    </div>
  );
}
