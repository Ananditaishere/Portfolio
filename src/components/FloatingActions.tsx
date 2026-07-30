import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Briefcase, Download, Mail, Code, Plus, X } from 'lucide-react';

interface FloatingActionsProps {
  onDownloadResume: () => void;
  onCopyEmail: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onDownloadResume, onCopyEmail }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col gap-2.5 bg-slate-900/90 border border-slate-800 backdrop-blur-2xl p-3 rounded-2xl shadow-2xl"
          >
            <button
              onClick={() => {
                setMenuOpen(false);
                onDownloadResume();
              }}
              className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-800 text-xs font-semibold text-purple-300 transition-colors"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                onCopyEmail();
              }}
              className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-800 text-xs font-semibold text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Email Me</span>
            </button>

            <a
              href="https://github.com/Ananditaishere"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-slate-400" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>GitHub Profile</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ananditachakraborty10/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-800 text-xs font-semibold text-blue-300 transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span>LinkedIn Profile</span>
            </a>

            <a
              href="https://leetcode.com/u/oneandonlyanandita/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3.5 py-2 rounded-xl hover:bg-slate-800 text-xs font-semibold text-amber-300 transition-colors"
            >
              <Code className="w-4 h-4 text-amber-400" />
              <span>LeetCode Profile</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="p-3 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 shadow-xl backdrop-blur-xl transition-all"
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs shadow-xl shadow-purple-600/30 hover:scale-105 transition-all"
        >
          <Briefcase className="w-4 h-4" />
          <span className="hidden sm:inline">Recruiter Menu</span>
          {menuOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
