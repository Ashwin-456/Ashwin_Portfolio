import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './BrandIcons';
import { 
  DriverDrowsinessVisual, 
  FaceRecognitionVisual, 
  StudyMateVisual 
} from './ProjectVisuals';

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
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderVisual = () => {
    switch (project.visualType) {
      case 'drowsiness':
        return <DriverDrowsinessVisual />;
      case 'face_recognition':
        return <FaceRecognitionVisual />;
      case 'studymate':
        return <StudyMateVisual />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#070c24] border border-accent-blue/40 rounded-2xl shadow-[0_0_50px_rgba(14,165,255,0.3)] overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-dark-surface to-dark-card">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-accent-blue/15 text-accent-glow border border-accent-blue/30">
                  {project.category}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  {project.status}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-slate-300">
            
            {/* Interactive Visual Box */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-accent-glow mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Technical Architecture HUD & Telemetry
              </p>
              {renderVisual()}
            </div>

            {/* Problem & Contribution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1.5 mb-2">
                  <AlertCircle className="w-4 h-4" />
                  Problem Statement
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 font-sans">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-accent-blue/10 border border-accent-blue/30">
                <h3 className="text-xs font-mono uppercase tracking-wider text-accent-glow flex items-center gap-1.5 mb-2">
                  <ShieldCheck className="w-4 h-4 text-accent-cyan" />
                  My Actual Contribution
                </h3>
                <p className="text-sm leading-relaxed text-slate-200 font-sans">
                  {project.actualContribution}
                </p>
              </div>
            </div>

            {/* Core Features */}
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-blue" />
                Key Engineered Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Metrics / Technical Notes */}
            <div className="p-4 rounded-xl bg-dark-card border border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Architecture & Performance Verification Notes
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                {project.metricsOrHighlights.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Technologies Utilized
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-accent-blue/10 border border-accent-blue/30 text-accent-glow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-dark-card flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-400 font-mono">
              Source verified from Ashwinkrishna N's resume
            </span>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile & Repos</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-accent-blue hover:bg-accent-blue/80 text-white font-medium text-xs shadow-[0_0_20px_rgba(14,165,255,0.4)] transition-all cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
