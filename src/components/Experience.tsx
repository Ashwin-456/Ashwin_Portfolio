import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-xs font-mono text-accent-glow mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry <span className="text-gradient-blue">Internship</span>
          </h2>
          
          <p className="mt-3 text-base text-slate-300">
            Real-world software engineering and production UI development experience at Hostwire Systems Pvt. Ltd.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-cyan to-transparent shadow-[0_0_10px_#0ea5ff]" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline node icon */}
                <div className="absolute left-1.5 sm:left-5.5 top-1.5 -translate-x-1/2 w-6 h-6 rounded-full bg-[#050816] border-2 border-accent-blue flex items-center justify-center shadow-[0_0_15px_#0ea5ff]">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
                </div>

                {/* Card Container */}
                <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-accent-blue/25 hover:border-accent-blue/45 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                  
                  {/* Top Bar: Role & Company & Dates */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-accent-blue/15 text-accent-cyan border border-accent-blue/30 font-semibold">
                          Internship
                        </span>
                        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Verified
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-accent-glow font-medium mt-0.5">
                        <Building2 className="w-4 h-4 text-accent-blue" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300 shrink-0 self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Project Focus Sub-banner */}
                  <div className="p-4 rounded-xl bg-accent-blue/10 border border-accent-blue/20 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-mono text-accent-cyan uppercase tracking-wider font-semibold">
                        Assigned Project:
                      </p>
                      <h4 className="text-base font-bold text-white mt-0.5">
                        {exp.project}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 font-sans">
                        {exp.projectDescription}
                      </p>
                    </div>
                  </div>

                  {/* Core Responsibilities */}
                  <div className="space-y-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Engineering Responsibilities:
                    </p>

                    <div className="grid grid-cols-1 gap-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-200 hover:border-accent-blue/20 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech / Skills Practiced */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2">
                      Competencies Applied:
                    </span>
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
