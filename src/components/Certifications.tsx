import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, BookOpen } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Machine Learning Fundamentals',
      issuer: 'Infosys Springboard',
      date: 'January 2026',
      emoji: '🤖',
      bg: 'bg-purple-950/40 border-purple-500/30 text-purple-200',
    },
    {
      title: 'Master Generative AI & Tools',
      issuer: 'Infosys Springboard',
      date: 'August 2025',
      emoji: '✨',
      bg: 'bg-amber-950/40 border-amber-500/30 text-amber-200',
    },
    {
      title: 'ChatGPT, Gen AI & LLM Architecture',
      issuer: 'Infosys Springboard',
      date: 'August 2025',
      emoji: '💬',
      bg: 'bg-teal-950/40 border-teal-500/30 text-teal-200',
    },
    {
      title: 'Google Cybersecurity Professional',
      issuer: 'Coursera / Google',
      date: 'July 2024',
      emoji: '🔐',
      bg: 'bg-pink-950/40 border-pink-500/30 text-pink-200',
    },
  ];

  return (
    <section id="certs" className="relative py-28 px-6 bg-slate-950/90">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-2 inline-block">
            Verified Knowledge & Credentials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Certifications & <span className="gradient-text">Training</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Industry credentials from Oracle, Google, Infosys, and CipherSchools validating cloud, security, and algorithmic expertise.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/80 border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 backdrop-blur-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-black font-bold text-[10px] uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              <span>Featured Credential</span>
            </div>

            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Oracle Cloud Infrastructure
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Oracle Certified Foundations Associate
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              Official Oracle certification validating foundational understanding of cloud concepts, OCI core compute services, security frameworks, networking architectures, and database deployment models.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono">
                March 2026
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-900/60 border border-purple-500/40 text-purple-200 text-xs font-semibold">
                Cloud Architecture & OCI
              </span>
            </div>
          </div>

          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-amber-500 to-red-500 p-1 shrink-0 shadow-2xl group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-xl bg-slate-950 flex flex-col items-center justify-center text-center p-2">
              <Award className="w-10 h-10 text-amber-400 mb-1" />
              <span className="text-[10px] font-bold font-mono text-white tracking-tighter">
                ORACLE
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cert.bg}`}
            >
              <div className="text-3xl mb-3">{cert.emoji}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest opacity-70 mb-1">
                {cert.issuer}
              </div>
              <h4 className="text-base font-bold text-white mb-3 leading-snug">
                {cert.title}
              </h4>
              <div className="text-xs font-mono opacity-80">{cert.date}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-5 backdrop-blur-md"
        >
          <div className="p-3 rounded-xl bg-slate-800 text-purple-400 border border-slate-700 shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <h4 className="text-lg font-bold text-white">
                Data Structures & Algorithms (DSA) Intensive
              </h4>
              <span className="text-xs font-mono text-slate-400">
                June – July 2025 · CipherSchools
              </span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
              Completed rigorous 40-hour program covering foundational and advanced data structures, asymptotic time & space complexity analysis, and algorithmic optimization.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              <span>✓ 40 Hours Coursework</span>
              <span>•</span>
              <span>✓ Assessment Passed</span>
              <span>•</span>
              <span>✓ Asymptotic Analysis</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
