import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    '⚡ Full-Stack Developer',
    '🔐 Cybersecurity Practitioner',
    '🤖 Machine Learning & AI',
    '☁️ AWS EC2 & DevOps Pipelines',
    '🏆 Binary Blitz — Top 11 Rank',
    '💻 100+ LeetCode DSA Solved',
    '🏅 Oracle Certified Cloud Associate',
    '🐳 Docker Containerization',
    '⚙️ Jenkins CI/CD',
    '🏗️ Terraform IaC',
  ];

  return (
    <div className="relative z-10 w-full overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-cyan-900 border-y border-white/10 py-3 shadow-lg">
      <div className="flex whitespace-nowrap animate-marquee font-mono text-xs sm:text-sm font-semibold text-slate-200 tracking-wider">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-4">
            <span>{item}</span>
            <span className="text-cyan-400 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
