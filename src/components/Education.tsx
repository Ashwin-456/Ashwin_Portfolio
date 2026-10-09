import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Award, 
  School
} from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-xs font-mono text-accent-glow mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Formal <span className="text-gradient-blue">Education</span>
          </h2>
          
          <p className="mt-3 text-base text-slate-300">
            Solid foundations in Artificial Intelligence, Data Science, and Mathematics.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-accent-blue/20 hover:border-accent-blue/45 transition-all flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              <div>
                {/* Degree / Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent-blue/15 text-accent-glow border border-accent-blue/30 group-hover:bg-accent-blue/25 transition-colors">
                    {index === 0 ? <GraduationCap className="w-6 h-6" /> : <School className="w-6 h-6" />}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-accent-glow transition-colors">
                  {edu.degree}
                </h3>

                <p className="text-sm font-semibold text-accent-cyan mt-1">
                  {edu.institution}
                </p>

                <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                  <span>{edu.location}</span>
                </p>

                <p className="text-sm text-slate-300 mt-4 leading-relaxed font-sans">
                  {edu.details}
                </p>
              </div>

              {/* Grade Badge */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Official Standing</span>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-blue/15 border border-accent-blue/30 text-accent-glow font-mono font-bold text-sm shadow-[0_0_15px_rgba(14,165,255,0.2)]">
                  <Award className="w-4 h-4 text-accent-cyan" />
                  <span>{edu.grade}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
