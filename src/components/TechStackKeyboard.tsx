import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skillsMap } from '../data/skills';
import type { SkillInfo } from '../data/skills';

export const TechStackKeyboard: React.FC = () => {
  const [activeSkillKey, setActiveSkillKey] = useState<string>('p');
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Languages', 'AI/ML', 'Cloud & DevOps', 'Frontend', 'Backend', 'Tools & Other'];

  const keyboardRows = [
    [
      { key: '`', label: '~' },
      { key: '1', label: '1' },
      { key: '2', label: '2' },
      { key: '3', label: '3' },
      { key: '4', label: '4' },
      { key: '5', label: '5' },
      { key: '6', label: '6' },
      { key: '7', label: '7' },
      { key: '8', label: '8' },
      { key: '9', label: '9' },
      { key: '0', label: '0' },
      { key: '-', label: '-' },
      { key: '=', label: '=' },
      { key: 'Backspace', label: '⌫', wide: 'w-12 sm:w-16' },
    ],
    [
      { key: 'Tab', label: 'Tab', wide: 'w-12 sm:w-16' },
      { key: 'q', label: 'Q', sub: 'Selenium' },
      { key: 'w', label: 'W', sub: 'OpenCV' },
      { key: 'e', label: 'E', sub: 'Excel' },
      { key: 'r', label: 'R', sub: 'REST' },
      { key: 't', label: 'T', sub: 'Terraform' },
      { key: 'y', label: 'Y', sub: 'Tailwind' },
      { key: 'u', label: 'U', sub: 'PyTorch' },
      { key: 'i', label: 'I', sub: 'Jenkins' },
      { key: 'o', label: 'O', sub: 'Oracle' },
      { key: 'p', label: 'P', sub: 'Python' },
      { key: '[', label: '[' },
      { key: ']', label: ']' },
      { key: '\\', label: '\\' },
    ],
    [
      { key: 'CapsLock', label: 'Caps', wide: 'w-14 sm:w-20' },
      { key: 'a', label: 'A', sub: 'AWS' },
      { key: 's', label: 'S', sub: 'Sklearn' },
      { key: 'd', label: 'D', sub: 'Docker' },
      { key: 'f', label: 'F', sub: 'Flask' },
      { key: 'g', label: 'G', sub: 'Git' },
      { key: 'h', label: 'H', sub: 'HTML' },
      { key: 'j', label: 'J', sub: 'Java' },
      { key: 'k', label: 'K', sub: 'Kali' },
      { key: 'l', label: 'L', sub: 'DSA' },
      { key: ';', label: ';' },
      { key: "'", label: "'" },
      { key: 'Enter', label: 'Enter ↵', wide: 'w-16 sm:w-24' },
    ],
    [
      { key: 'Shift', label: 'Shift', wide: 'w-16 sm:w-24' },
      { key: 'z', label: 'Z', sub: 'MySQL' },
      { key: 'x', label: 'X', sub: 'C++' },
      { key: 'c', label: 'C', sub: 'Chrome' },
      { key: 'v', label: 'V', sub: 'VSCode' },
      { key: 'b', label: 'B', sub: 'Bootstrap' },
      { key: 'n', label: 'N', sub: 'Pandas' },
      { key: 'm', label: 'M', sub: 'Plots' },
      { key: ',', label: ',' },
      { key: '.', label: '.' },
      { key: '/', label: '/' },
      { key: 'Shift', label: 'Shift', wide: 'w-16 sm:w-24' },
    ],
    [
      { key: 'Control', label: 'Ctrl', wide: 'w-12' },
      { key: 'Alt', label: 'Alt', wide: 'w-12' },
      { key: 'space', label: 'SPACE — Streamlit Framework', sub: 'Streamlit', wide: 'w-64 sm:w-96' },
      { key: 'Alt', label: 'Alt', wide: 'w-12' },
      { key: 'Control', label: 'Ctrl', wide: 'w-12' },
    ],
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      const targetKey = e.key === ' ' ? 'space' : k;

      if (skillsMap[targetKey]) {
        setActiveSkillKey(targetKey);
        setPressedKey(targetKey);
        setTimeout(() => setPressedKey(null), 200);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeSkill: SkillInfo = skillsMap[activeSkillKey] || skillsMap['p'];

  return (
    <section id="skills" className="relative py-28 px-6 bg-slate-950/80">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-2 inline-block">
            Interactive Skill Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Explore My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Press any letter on your hardware keyboard or tap the keys below to inspect proficiency, tool descriptions, and real project implementations.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filterCategory === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={activeSkill.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-slate-900/90 border border-purple-500/30 shadow-xl shadow-purple-500/10 mb-10 max-w-3xl mx-auto backdrop-blur-xl"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-white/10 shrink-0"
                style={{ backgroundColor: `${activeSkill.color}20` }}
              >
                {activeSkill.icon}
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">{activeSkill.name}</h3>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border"
                    style={{
                      color: activeSkill.color,
                      borderColor: `${activeSkill.color}40`,
                      backgroundColor: `${activeSkill.color}15`,
                    }}
                  >
                    {activeSkill.level}
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                  {activeSkill.desc}
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800 w-full sm:w-auto">
              <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold mb-1">
                Used In Projects:
              </div>
              <div className="text-xs font-semibold text-cyan-300 max-w-xs">
                {activeSkill.usedIn}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="p-4 sm:p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md max-w-4xl mx-auto overflow-x-auto">
          <div className="flex flex-col gap-2 min-w-[650px] justify-center items-center">
            {keyboardRows.map((row, rIdx) => (
              <div key={rIdx} className="flex gap-1.5 justify-center">
                {row.map((item, kIdx) => {
                  const skill = skillsMap[item.key];
                  const isSelected = activeSkillKey === item.key;
                  const isPressed = pressedKey === item.key;
                  const isDimmed =
                    filterCategory !== 'All' && skill && skill.category !== filterCategory;

                  return (
                    <button
                      key={kIdx}
                      onClick={() => skill && setActiveSkillKey(item.key)}
                      className={`h-12 flex flex-col items-center justify-center rounded-xl font-mono text-xs transition-all duration-150 select-none relative ${
                        item.wide || 'w-10 sm:w-12'
                      } ${
                        skill
                          ? 'cursor-pointer hover:-translate-y-1'
                          : 'cursor-default opacity-40 bg-slate-950 border-slate-900 text-slate-600'
                      } ${
                        isSelected
                          ? 'bg-slate-800 border-2 text-white shadow-lg ring-2 ring-purple-500/50 scale-105'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                      } ${isPressed ? 'translate-y-1 scale-95' : ''} ${
                        isDimmed ? 'opacity-30' : ''
                      }`}
                      style={{
                        borderColor: isSelected ? activeSkill.color : undefined,
                      }}
                    >
                      <span className="font-bold text-xs">{item.label}</span>
                      {item.sub && (
                        <span
                          className="text-[9px] truncate max-w-full px-0.5 font-sans"
                          style={{ color: skill?.color || '#94a3b8' }}
                        >
                          {item.sub}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
