import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { codingProfiles } from '../data/codingProfiles';

export const CodingProfiles: React.FC = () => {
  return (
    <section id="profiles" className="relative py-28 px-6 bg-slate-950/80">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-2 inline-block">
            Online Presence & Code Activity
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Explore active competitive programming metrics, GitHub code repositories, and professional credentials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {codingProfiles.map((profile, idx) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-7 rounded-3xl border bg-slate-900/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${profile.color}`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner">
                      {profile.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                      <div className="text-xs font-mono text-slate-400">@{profile.username}</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[11px] font-bold text-cyan-300">
                    {profile.badge}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {profile.description}
                </p>

                <div className="space-y-2 mb-6">
                  {profile.stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs"
                    >
                      <span className="text-slate-400">{stat.label}</span>
                      <span className="font-bold text-white font-mono">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white font-semibold text-xs transition-all hover:scale-[1.02] shadow-md group"
              >
                <span>Visit {profile.name} Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
