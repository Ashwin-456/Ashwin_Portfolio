import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './BrandIcons';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Projects
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mt-2" />
          <p className="mt-3 text-sm text-slate-400">
            Selected projects demonstrating practical application development and machine learning implementations.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-5">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="p-6 rounded-lg bg-[#0e1424] border border-slate-800 hover:border-blue-900/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors shrink-0"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                  </a>
                )}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-900">
                <span className="text-xs text-slate-500 font-mono mr-1">Technologies:</span>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
