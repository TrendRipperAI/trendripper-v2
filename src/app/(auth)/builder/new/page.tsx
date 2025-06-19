'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import {
  DollarSign,
  Layers,
  CheckCircle,
  Rocket,
  MessageSquare,
  Radar,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const markdownComponents = {
  li: ({ children }: any) => <li className="list-item">{children}</li>,
  p: ({ children }: any) => <>{children}</>,
};

export default function BuilderPage() {
  const params = useSearchParams();
  const router = useRouter();

  const title = params.get('title') || '';
  const description = params.get('description') || '';
  const category = params.get('category') || '';

  const [ripPlan, setRipPlan] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const [ripExpansions, setRipExpansions] = useState<{ [key: string]: string }>({});
  const [expanding, setExpanding] = useState<string | null>(null);

  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'rip'; content: string }[]>(() => {
    const trendContext = `The trend is: "${title}" — ${description}`;
    return [
      {
        role: 'rip',
        content: `Alright. ${trendContext}\n\nBefore we waste time, answer these:\n\n1. Do you have experience in this space?\n2. Any coding or scraping skills?\n3. Budget to hire if not?\n\nSpare me the fluff.`,
      },
    ];
  });

  const [parsed, setParsed] = useState<{
    monetization: string[];
    roadmap: string[];
    checklist: string[];
  }>({ monetization: [], roadmap: [], checklist: [] });

  useEffect(() => {
    const runBuilder = async () => {
      try {
        const res = await fetch('/api/rip', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, description, category }),
        });

        const data = await res.json();
        setRipPlan(data.output || '❌ Failed to generate MVP plan.');
      } catch (err) {
        console.error(err);
        setRipPlan('❌ Failed to generate MVP plan.');
      } finally {
        setLoading(false);
      }
    };

    runBuilder();
  }, [title, description, category]);

  useEffect(() => {
    if (!ripPlan) return;

    const sections = {
      monetization: [] as string[],
      roadmap: [] as string[],
      checklist: [] as string[],
    };

    const lines = ripPlan.split('\n').map((l) => l.trim());
    let current: keyof typeof sections | null = null;

    for (let line of lines) {
      if (/^monetization strategy[:]?$/i.test(line)) {
        current = 'monetization';
        continue;
      }
      if (/^roadmap[:]?$/i.test(line)) {
        current = 'roadmap';
        continue;
      }
      if (/^mvp checklist[:]?$/i.test(line)) {
        current = 'checklist';
        continue;
      }

      if (current && line && /^[-•\d]/.test(line)) {
        sections[current].push(line);
      }
    }

    setParsed(sections);
  }, [ripPlan]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/project/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: title,
          description,
          category,
          plan: parsed,
        }),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setSaved(true);
        toast.success('Project saved successfully');
        router.push(`/builder/${json.id}`);
      } else {
        console.error('❌ Save failed:', json);
        toast.error(json.error || 'Failed to save project');
      }
    } catch (err) {
      console.error(err);
      toast.error('Save failed.');
    } finally {
      setSaving(false);
    }
  };

  const handleExpand = async (step: string) => {
    if (expandedStep === step) {
      setExpandedStep(null);
      return;
    }

    setExpandedStep(step);

    if (ripExpansions[step]) return;

    setExpanding(step);
    try {
      const res = await fetch('/api/rip/expand', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, category, step }),
      });

      const data = await res.json();
      setRipExpansions((prev) => ({
        ...prev,
        [step]: data.output || 'No response from RIP.',
      }));
    } catch (err) {
      console.error(err);
      setRipExpansions((prev) => ({
        ...prev,
        [step]: '❌ RIP failed to expand that step.',
      }));
    } finally {
      setExpanding(null);
    }
  };

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const input = chatInput.trim();
    setMessages((prev) => [...prev, { role: 'user', content: input }]);
    setChatInput('');
    setChatLoading(true);

    try {
      const res = await fetch('/api/rip/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, category, message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'rip', content: data.output || 'RIP had no response.' }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: 'rip', content: '❌ RIP failed to respond.' }]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full py-12 px-6 text-white gap-10">
      {/* Left Panel */}
      <div className="w-full lg:w-3/4 pb-20">
        <div className="mt-10 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Rocket className="text-[#06C19F]" size={28} />
            <h1 className="text-3xl font-bold">{title}</h1>
          </div>

          <p className="text-gray-300 text-sm mb-4">{description}</p>
          <span className="text-sm bg-[#06C19F] text-black px-3 py-1 rounded-full inline-block mb-4">
            {category.toUpperCase()}
          </span>

          <div>
            <button
              onClick={handleSave}
              disabled={saving || saved}
              className={`rounded-xl px-4 py-2 font-semibold transition ${
                saved
                  ? 'bg-green-500 text-white cursor-default'
                  : 'bg-[#06C19F] text-black hover:bg-[#05a88a]'
              }`}
            >
              {saved ? 'Saved' : saving ? 'Saving...' : 'Save Project'}
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-white opacity-80 animate-pulse">
            <Radar className="w-12 h-12 mb-4 text-[#06C19F] animate-spin" />
            <p className="text-lg font-bold tracking-wide">RIP is thinking…</p>
          </div>
        ) : (
          <>
            {/* Monetization Strategy */}
            <section className="bg-[#161d24] border border-[#06C19F] rounded-xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign size={20} className="text-[#06C19F]" />
                <h2 className="text-xl font-bold">Monetization Strategy</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {parsed.monetization.map((m, i) => (
                  <ReactMarkdown key={i} components={markdownComponents}>
                    {`- ${m}`}
                  </ReactMarkdown>
                ))}
              </ul>
            </section>

            {/* Roadmap */}
            <section className="bg-[#161d24] border border-[#06C19F] rounded-xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Layers size={20} className="text-[#06C19F]" />
                <h2 className="text-xl font-bold">Roadmap</h2>
              </div>
              {parsed.roadmap.map((step, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">
                      <ReactMarkdown components={markdownComponents}>
                        {`${index + 1}. ${step}`}
                      </ReactMarkdown>
                    </p>
                    <button
                      onClick={() => handleExpand(step)}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-[#06C19F] text-black hover:opacity-90"
                    >
                      {expandedStep === step ? 'Hide' : 'Ask RIP how'}
                    </button>
                  </div>
                  {expandedStep === step && (
                    <div className="bg-[#1f2937] p-4 rounded mt-2 text-sm text-gray-300 whitespace-pre-wrap">
                      {expanding === step ? (
                        <p className="animate-pulse text-[#06C19F]">
                          RIP is decoding this step…
                        </p>
                      ) : (
                        <ReactMarkdown components={markdownComponents}>
                          {ripExpansions[step] || 'No expansion yet.'}
                        </ReactMarkdown>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </section>

            {/* MVP Checklist */}
            <section className="bg-[#161d24] border border-[#06C19F] rounded-xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle size={20} className="text-[#06C19F]" />
                <h2 className="text-xl font-bold">MVP Checklist</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {parsed.checklist.map((c, i) => (
                  <ReactMarkdown key={i} components={markdownComponents}>
                    {`- ${c}`}
                  </ReactMarkdown>
                ))}
              </ul>
            </section>
          </>
        )}
      </div>

      {/* Right Panel – RIP Chat */}
<div className="w-full lg:w-[35%]">
  <div className="sticky top-24">
    <div className="border border-[#06C19F] bg-[#151a21] rounded-xl p-4 flex flex-col h-[80vh]">
      <div className="flex items-center gap-2 mb-2">
        <MessageSquare className="text-[#06C19F]" size={20} />
        <h2 className="text-xl font-bold">Talk to RIP</h2>
      </div>

      <div
        className="flex-1 overflow-y-auto text-sm mb-4 rounded bg-[#13191f] p-3 space-y-3"
        ref={(el) => {
          if (el) el.scrollTop = el.scrollHeight;
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[80%] p-3 rounded-xl whitespace-pre-wrap ${
              msg.role === 'user'
                ? 'ml-auto bg-[#06C19F] text-black'
                : 'mr-auto bg-[#232a33] text-[#06C19F]'
            }`}
          >
            {msg.content}
          </div>
        ))}

        {chatLoading && (
          <div className="max-w-[80%] mr-auto p-3 rounded-xl bg-[#232a33] text-[#06C19F] animate-pulse">
            RIP is thinking…
          </div>
        )}
      </div>

      <form onSubmit={handleChat} className="flex gap-2">
        <input
          type="text"
          placeholder="Ask RIP..."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          className="flex-1 p-2 rounded text-black"
        />
        <button
          type="submit"
          disabled={!chatInput.trim() || chatLoading}
          className={`px-4 py-2 rounded font-bold ${
            chatLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#06C19F] text-black hover:opacity-90'
          }`}
        >
          Send
        </button>
      </form>
    </div>
  </div>
</div>

    </div>
  );
}
