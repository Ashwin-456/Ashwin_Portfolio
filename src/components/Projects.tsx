import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  Eye, 
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './BrandIcons';
import { 
  DriverDrowsinessVisual, 
  FaceRecognitionVisual, 
  StudyMateVisual 
} from './ProjectVisuals';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0EA5FF', '#06B6D4', '#8B5CF6'],
        disableForReducedMotion: true
      });
    } catch {
      // Fallback
    }
  };

  const renderVisualMini = (visualType: string) => {
    switch (visualType) {
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
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-xs font-mono text-accent-glow mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Flagship <span className="text-gradient-blue">AI & Software Projects</span>
          </h2>
          
          <p className="mt-3 text-base text-slate-300">
            Real-world systems engineered across Computer Vision, Biometrics, and Generative AI agents. Each project emphasizes clean architecture, real-time latency, and quantifiable validation.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-2xl border border-accent-blue/20 hover:border-accent-blue/50 flex flex-col justify-between overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(14,165,255,0.2)] transition-all duration-300"
            >
              {/* Card Header & Visual Preview */}
              <div>
                {/* Visual Telemetry Container */}
                <div className="p-3 bg-[#020514]/60 border-b border-white/10 relative">
                  {renderVisualMini(project.visualType)}
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-accent-blue/15 text-accent-cyan border border-accent-blue/30 font-medium">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-glow transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-accent-cyan font-mono mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Problem Statement snippet */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                      Problem Context:
                    </span>
                    <p className="line-clamp-2 text-slate-300 font-sans">
                      {project.problemStatement}
                    </p>
                  </div>

                  {/* Actual Contribution snippet */}
                  <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/25 text-xs text-slate-200 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent-glow block font-semibold">
                      My Contribution:
                    </span>
                    <p className="line-clamp-2 text-slate-300 font-sans">
                      {project.actualContribution}
                    </p>
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-accent-blue/15 hover:bg-accent-blue text-accent-glow hover:text-white font-medium text-xs border border-accent-blue/30 hover:border-transparent transition-all cursor-pointer shadow-[0_0_15px_rgba(14,165,255,0.15)] hover:shadow-[0_0_20px_rgba(14,165,255,0.4)]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="View GitHub Profile & Code"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
