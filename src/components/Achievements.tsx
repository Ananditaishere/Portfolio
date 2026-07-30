import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, GraduationCap } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      title: '100+ Coding Problems Solved',
      subtitle: 'LeetCode & HackerRank Platforms',
      description:
        'Demonstrated algorithmic consistency across Arrays, Strings, Trees, Dynamic Programming, and Graph algorithms.',
      date: 'Since 2025',
      icon: <Code2 className="w-6 h-6 text-purple-400" />,
      tag: 'DSA Consistency',
      gradient: 'from-purple-950/40 to-slate-900 border-purple-500/30',
    },
    {
      title: 'S1 Academic Category',
      subtitle: 'Lovely Professional University',
      description:
        'Achieved top academic categorization at LPU in recognition of sustained academic performance and technical coursework.',
      date: 'Since 2025',
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      tag: 'Top Academic Standing',
      gradient: 'from-cyan-950/40 to-slate-900 border-cyan-500/30',
    },
    {
      title: '11th Rank — Binary Blitz',
      subtitle: 'Competitive Coding Hackathon',
      description:
        'Secured 11th position overall among hundreds of competitors by solving complex algorithmic challenges under strict time constraints.',
      date: 'March 2024',
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
      tag: 'Top 11 Finish',
      gradient: 'from-amber-950/40 to-slate-900 border-amber-500/30',
    },
  ];

  return (
    <section id="achievements" className="relative py-28 px-6 bg-slate-950/70">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2 inline-block">
            Honors & Recognition
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Academic distinction, competitive coding accomplishments, and milestone recognitions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-7 rounded-3xl border bg-gradient-to-b ${item.gradient} backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <h4 className="text-xs font-semibold text-cyan-300 mb-3 font-mono">
                  {item.subtitle}
                </h4>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Timeline</span>
                <span className="text-slate-200 font-semibold">{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
