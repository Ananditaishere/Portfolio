import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, FolderGit2, Trophy, Calendar } from 'lucide-react';
import { timelineItems } from '../data/timeline';

export const Timeline: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Education', 'Certifications', 'Projects', 'Milestone'];

  const filteredItems =
    activeCategory === 'All'
      ? timelineItems
      : timelineItems.filter((i) => i.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-cyan-400" />;
      case 'Certifications':
        return <Award className="w-4 h-4 text-purple-400" />;
      case 'Projects':
        return <FolderGit2 className="w-4 h-4 text-pink-400" />;
      default:
        return <Trophy className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="timeline" className="relative py-28 px-6 bg-slate-950/60">
      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2 inline-block">
            Education & Journey Roadmap
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Experience & <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Key academic milestones, professional cloud certifications, hackathon rankings, and software releases.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <div className="flex items-center gap-1 p-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  activeCategory === cat
                    ? 'text-white bg-gradient-to-r from-purple-600 to-cyan-500 shadow-md shadow-purple-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800 space-y-12 ml-4 sm:ml-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative group"
            >
              <div className="absolute -left-[31px] sm:-left-[47px] top-0.5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 border-2 border-purple-500/60 flex items-center justify-center text-lg shadow-lg group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                <span>{item.icon}</span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-purple-500/40 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-slate-800 border border-slate-700">
                      {getCategoryIcon(item.category)}
                    </span>
                    <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider font-mono">
                      {item.category}
                    </span>
                    {item.highlight && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
                        {item.highlight}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-slate-400 font-mono text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-semibold text-cyan-300 mb-3">
                  {item.subtitle}
                </h4>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-[11px] border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
