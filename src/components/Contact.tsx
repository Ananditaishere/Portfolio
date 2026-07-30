import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Download, Copy, ExternalLink } from 'lucide-react';

interface ContactProps {
  onCopyText: (text: string, label: string) => void;
  onDownloadResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyText, onDownloadResume }) => {
  const email = 'anandita105205@gmail.com';
  const phone = '+917009245787';
  const phoneDisplay = '+91 70092 45787';

  return (
    <section id="contact" className="relative py-28 px-6 bg-[#050508]">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-purple-950/40 via-slate-900/90 to-cyan-950/40 border-2 border-purple-500/30 p-8 sm:p-14 text-center backdrop-blur-2xl shadow-2xl overflow-hidden"
        >
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-10 w-72 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3 inline-block">
            Let's Connect & Collaborate
          </span>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Open to software engineering roles, full-stack internships, AI/ML projects, and technical collaborations.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                    Email Address
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white truncate font-mono">
                    {email}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onCopyText(email, 'Email address')}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all shrink-0 active:scale-95"
                title="Copy Email"
              >
                <Copy className="w-4 h-4 text-purple-400" />
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                    Phone / WhatsApp
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white truncate font-mono">
                    {phoneDisplay}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onCopyText(phone, 'Phone number')}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all shrink-0 active:scale-95"
                title="Copy Phone Number"
              >
                <Copy className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="https://www.linkedin.com/in/ananditachakraborty10/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 text-slate-200 hover:text-white text-xs font-semibold transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href="https://github.com/Ananditaishere"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 text-slate-200 hover:text-white text-xs font-semibold transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current text-purple-400" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href="https://leetcode.com/u/oneandonlyanandita/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 text-slate-200 hover:text-white text-xs font-semibold transition-all hover:scale-105"
            >
              <span className="text-amber-400">💡</span>
              <span>LeetCode</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>

          <button
            onClick={onDownloadResume}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Official Resume (PDF)</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
