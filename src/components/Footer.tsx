import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#030305] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-400 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-wider font-sans">
            ANANDITA CHAKRABORTY
          </span>
          <span className="text-slate-600">•</span>
          <span>Computer Science Engineer</span>
        </div>

        <div className="flex items-center gap-1 text-slate-500">
          <span>Handcrafted with React & Tailwind</span>
          <span>© 2026</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Ananditaishere"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ananditachakraborty10/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/oneandonlyanandita/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LeetCode
          </a>
          <a
            href="mailto:anandita105205@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
