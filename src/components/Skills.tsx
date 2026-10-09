import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skills
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mt-2" />
        </div>

        {/* Compact Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILL_GROUPS.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="p-5 rounded-lg bg-[#0e1424] border border-slate-800 hover:border-blue-900/40 transition-colors"
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    {skill}
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
