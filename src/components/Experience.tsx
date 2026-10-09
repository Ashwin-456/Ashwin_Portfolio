import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Experience
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mt-2" />
          <p className="mt-3 text-sm text-slate-400">
            Professional internship experience in application development and UI refinement.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="p-6 rounded-lg bg-[#0e1424] border border-slate-800 hover:border-blue-900/40 transition-colors"
            >
              {/* Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900 pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-blue-400 font-medium mt-0.5">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Project Focus */}
              <div className="mb-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Assigned Project:{' '}
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  {exp.project}
                </span>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-2 text-sm text-slate-300">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5">
                    <span className="text-blue-500 font-bold leading-relaxed">•</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
