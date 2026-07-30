import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Terminal } from 'lucide-react';

interface HeroProps {
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadResume }) => {
  const phrases = [
    'Full-Stack Engineer',
    'Machine Learning Developer',
    'Security & Systems Builder',
    'AWS & DevOps Practitioner',
  ];

  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && typedText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentPhrase.slice(0, typedText.length - 1)
            : currentPhrase.slice(0, typedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIdx]);

  const stats = [
    { num: 100, plus: '+', label: 'DSA Solved', bg: 'bg-indigo-950/80 border-indigo-500/40 text-indigo-200' },
    { num: 5, plus: '', label: 'Real Projects', bg: 'bg-amber-950/80 border-amber-500/40 text-amber-200' },
    { num: 96, plus: '%', label: 'ML Accuracy', bg: 'bg-teal-950/80 border-teal-500/40 text-teal-200' },
    { num: 5, plus: '', label: 'Certifications', bg: 'bg-pink-950/80 border-pink-500/40 text-pink-200' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center pt-28 pb-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto z-10 flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-mono tracking-wider mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span>Available for Roles & Internships</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold tracking-tight text-5xl sm:text-7xl md:text-8xl leading-none mb-6 flex flex-col items-center"
        >
          <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            ANANDITA
          </span>
          <span className="text-transparent font-black stroke-text" style={{ WebkitTextStroke: '1.5px #8b5cf6' }}>
            CHAKRABORTY
          </span>
        </motion.h1>

        {/* Typewriter Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-cyan-400 font-mono text-sm sm:text-base mb-6 shadow-inner"
        >
          <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
          <span className="text-slate-500">~/dev $</span>
          <span className="font-semibold text-cyan-300">{typedText}</span>
          <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
        </motion.div>

        {/* Professional Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-10"
        >
          CS Engineer @ Lovely Professional University — building <em className="text-purple-300 not-italic font-semibold">intelligent ML applications</em>, <em className="text-cyan-300 not-italic font-semibold">secure full-stack tools</em>, and <em className="text-pink-300 not-italic font-semibold">cloud infrastructure pipelines</em>.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 transition-all"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onDownloadResume}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-purple-500/50 text-slate-200 hover:text-white font-semibold text-sm hover:bg-slate-800 transition-all hover:scale-105"
          >
            <Download className="w-4 h-4 text-purple-400" />
            <span>Download Resume</span>
          </button>

          <a
            href="https://github.com/Ananditaishere"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-900/60 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white text-sm font-medium hover:bg-slate-800 transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ananditachakraborty10/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-900/60 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white text-sm font-medium hover:bg-slate-800 transition-all"
          >
            <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* Stat Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`p-4 sm:p-5 rounded-2xl border backdrop-blur-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${stat.bg}`}
            >
              <div className="font-bold text-3xl sm:text-4xl tracking-tight mb-1 font-mono">
                {stat.num}{stat.plus}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider opacity-80 font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
