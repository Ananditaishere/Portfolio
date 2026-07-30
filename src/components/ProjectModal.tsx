import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Layers, Calendar, Star } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 text-slate-100 shadow-2xl custom-scrollbar"
        >
          <div className={`relative h-56 sm:h-64 w-full bg-gradient-to-br ${project.gradient} p-8 flex flex-col justify-end overflow-hidden`}>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

            {project.featured && (
              <div className="absolute top-6 left-6 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/90 text-black font-bold text-xs shadow-lg">
                <Star className="w-3.5 h-3.5 fill-black" />
                <span>Featured Project</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-black font-mono text-white/10 select-none pointer-events-none">
              {project.initials}
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-0.5 rounded-full bg-black/40 border border-white/20 text-slate-200 text-xs font-semibold"
                  >
                    {cat}
                  </span>
                ))}
                <span className="text-xs text-slate-300 font-mono flex items-center gap-1 ml-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.date}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>GitHub Repository</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              {project.metrics && (
                <div className="flex flex-wrap gap-4">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 text-center">
                      <div className="text-sm font-bold font-mono text-cyan-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Overview & Purpose</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.fullDesc}
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Key Features</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Technical Challenges Solved</span>
              </h3>
              <div className="space-y-2.5">
                {project.challenges.map((c, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                    🎯 {c}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
