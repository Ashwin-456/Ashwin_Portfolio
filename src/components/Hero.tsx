import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Hero: React.FC = () => {
  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Single clear professional identity */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-900/40 text-blue-400 text-xs sm:text-sm font-medium tracking-wide">
            <span>{PERSONAL_INFO.identity}</span>
          </div>

          {/* Name & Academic Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-lg sm:text-xl font-medium text-slate-300">
              {PERSONAL_INFO.headline}
            </h2>
          </div>

          {/* Clean Introduction Summary */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>

          {/* Two Simple Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleScrollToProjects}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Ashwinkrishna_Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-slate-600 transition-colors"
            >
              <Download className="w-4 h-4 text-slate-300" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Direct Profile Links */}
          <div className="pt-4 flex items-center gap-4 text-slate-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm hover:text-blue-400 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <span className="text-slate-700">•</span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm hover:text-blue-400 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <span className="text-slate-700">•</span>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm hover:text-blue-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
