import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Sparkles, 
  HeartHandshake, 
  CheckCircle2
} from 'lucide-react';
import { ACTIVITIES } from '../data/portfolioData';

export const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-xs font-mono text-accent-glow mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Extracurricular & Technical Development</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Activities & <span className="text-gradient-blue">Initiatives</span>
          </h2>
          
          <p className="mt-3 text-base text-slate-300">
            Technical specialization workshops and civic leadership initiatives.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ACTIVITIES.map((act, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-accent-blue/20 hover:border-accent-blue/45 transition-all flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-accent-blue/15 text-accent-glow border border-accent-blue/30 group-hover:bg-accent-blue/25 transition-colors">
                    {act.type === 'Technical' ? (
                      <Camera className="w-6 h-6 text-accent-cyan" />
                    ) : (
                      <HeartHandshake className="w-6 h-6 text-purple-400" />
                    )}
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
                    act.type === 'Technical'
                      ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                      : 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                  }`}>
                    {act.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-glow transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-sm font-semibold text-accent-glow font-mono mt-0.5">
                    {act.organization}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {act.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {act.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified in Resume</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Active Experience
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
