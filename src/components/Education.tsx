import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import { EDUCATION, ADDITIONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Education Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Education & Additional Information
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mt-2" />
        </div>

        {/* Compact Education Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="p-5 rounded-lg bg-[#0e1424] border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-blue-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white">
                  {edu.degree}
                </h3>

                <p className="text-sm text-slate-300 mt-1">
                  {edu.institution}
                </p>

                <p className="text-xs text-slate-500 mt-0.5">
                  {edu.location}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Academic Standing:</span>
                <span className="text-xs font-mono font-semibold text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/40">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Additional Information Section */}
        <div className="p-5 rounded-lg bg-[#0e1424] border border-slate-800">
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Workshops & Activities</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {ADDITIONAL_INFO.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-200">{item.title}</span>
                  <span className="text-xs font-mono text-blue-400">({item.organization})</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
