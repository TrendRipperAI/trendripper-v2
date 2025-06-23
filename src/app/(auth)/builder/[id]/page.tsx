'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export default function BuilderPage() {
  const { id } = useParams();
  const [user, setUser] = useState<{ id: string; token: string } | null>(null);
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const [windowHeight, setWindowHeight] = useState(800);

  const [project, setProject] = useState<{
    name: string;
    description: string;
    category: string;
  } | null>(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.access_token) {
        setUser({
          id: data.session.user.id,
          token: data.session.access_token,
        });
      } else {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from('Project')
        .select('name, description, category')
        .eq('id', id)
        .single();

      if (error) {
        toast.error('Project not found.');
        return;
      }

      setProject(data);
    };

    fetchProject();
  }, [id]);

  const handleExpand = (step: string) => {
    setExpandedStep(step === expandedStep ? null : step);
  };

  const handleSaveProject = async () => {
    if (!user || !project) {
      toast.error('You must be logged in to save projects.');
      return;
    }

    try {
      const res = await fetch('/api/project/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(project),
      });

      const json = await res.json();
      if (res.ok) {
        toast.success('💾 Project saved successfully!');
      } else {
        toast.error(json.error || 'Failed to save project.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong while saving.');
    }
  };

  if (!user) return <p className="text-red-500 p-4">You must be logged in to view this page.</p>;
  if (!project) return <p className="text-gray-300 p-4">Loading project...</p>;

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto py-12 px-4 text-white gap-8">
      {/* Left Panel: Project Plan */}
      <div className="flex-1">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">🚀 {project.name}</h1>
          <p className="text-gray-300 mt-2">{project.description}</p>
          <span className="text-sm bg-[#06C19F] text-black px-3 py-1 rounded-full mt-2 inline-block">
            {project.category.toUpperCase()}
          </span>

          <div className="mt-4">
            <button
              onClick={handleSaveProject}
              className="bg-white text-black rounded-xl px-4 py-2 font-semibold hover:bg-gray-200 transition"
            >
              💾 Save Project
            </button>
          </div>
        </div>

        {/* Monetization Strategy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">💸 Monetization Strategy</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Charge a monthly fee for early access</li>
            <li>Upsell premium features</li>
            <li>Build a paid community</li>
          </ul>
        </section>

        {/* Roadmap */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">🧱 Roadmap</h2>
          {[
            'Validate interest with a landing page',
            'Build an MVP using no-code tools',
            'Onboard first 10 users',
            'Launch to a private beta list',
          ].map((step, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <p className="font-semibold">
                  {index + 1}. {step}
                </p>
                <button
                  onClick={() => handleExpand(step)}
                  className="text-sm underline text-[#06C19F]"
                >
                  {expandedStep === step ? 'Hide' : 'Ask RIP how'}
                </button>
              </div>
              {expandedStep === step && (
                <div className="bg-[#1f2937] p-4 rounded mt-2 text-sm text-gray-300">
                  <p>
                    <strong>RIP:</strong> Here's how you can do this step effectively...
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Use a tool like Carrd or Framer to build your page</li>
                    <li>Write a one-liner pitch and add a waitlist signup</li>
                    <li>Promote on Reddit/X to validate early interest</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* MVP Checklist */}
        <section>
          <h2 className="text-2xl font-bold mb-4">✅ MVP Checklist</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Landing page</li>
            <li>Email capture</li>
            <li>Basic trend analytics</li>
            <li>Manual idea generation</li>
          </ul>
        </section>
      </div>

      {/* Right Panel: RIP Chatbox */}
      <div
        className="w-full lg:w-1/3 bg-[#1f2937] p-4 rounded shadow flex flex-col"
        style={{ height: windowHeight - 96 }}
      >
        <h2 className="text-xl font-bold mb-2">💬 Talk to RIP</h2>
        <div className="flex-1 bg-[#151a21] p-3 rounded overflow-y-auto text-sm text-gray-300 mb-4">
          <p>
            <strong>RIP:</strong> Ready when you are, boss. Ask me how to build, scale, or dominate.
          </p>
        </div>
        <form className="flex gap-2">
          <input
            type="text"
            placeholder="Ask RIP..."
            className="flex-1 p-2 rounded text-black"
          />
          <button
            type="submit"
            className="bg-[#06C19F] text-black px-4 py-2 rounded font-bold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
