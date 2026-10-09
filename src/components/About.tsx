import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  FileText,
  Building,
  Target
} from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-xs font-mono text-accent-glow mb-4"
          >
            <Target className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Engineering Practical <span className="text-gradient-blue">AI & Software Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-slate-300 leading-relaxed font-sans"
          >
            A dedicated Artificial Intelligence & Data Science undergraduate focused on bridging theoretical machine learning models with performant, real-world software applications.
          </motion.p>
        </div>

        {/* Grid: Overview Card + Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-accent-blue/20 hover:border-accent-blue/40 transition-colors"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-blue/15 border border-accent-blue/30 text-accent-glow">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Undergraduate in AI & Data Science
                  </h3>
                  <p className="text-sm font-mono text-slate-400">
                    National Engineering College, Kovilpatti (2023–2027)
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a pre-final year B.Tech student specializing in <strong className="text-white">Artificial Intelligence and Data Science</strong> at National Engineering College, Kovilpatti, maintaining an undergraduate academic score of <strong className="text-accent-glow">7.25 CGPA</strong>.
                </p>
                <p>
                  My engineering journey is driven by practical problem solving. Rather than training models in isolation, I focus on integrating machine learning with robust software systems — ranging from <strong className="text-white">sub-second OpenCV video pipeline processing</strong> on IoT microcontrollers to <strong className="text-white">autonomous LangGraph RAG workflows</strong> backed by vector databases like PostgreSQL with pgvector.
                </p>
                <p>
                  I have hands-on experience developing practical AI systems such as real-time driver fatigue monitoring, deep learning age-invariant face verification benchmarked on UIDAI datasets, and adaptive exam preparation engines.
                </p>
              </div>

              {/* Verified core competencies */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Technical Focus Areas:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Computer Vision & Facial Landmarks",
                    "Deep Learning & Cosine Embeddings",
                    "Autonomous Web-Grounded RAG",
                    "Stateful AI with LangGraph & FastAPI",
                    "Relational & Vector DBs (SQL / pgvector)",
                    "Microcontroller Safety Interfacing (ESP32)"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic & Location Footer */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                Base: Thanjavur, Tamil Nadu
              </span>
              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-accent-glow hover:underline"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Verify via Resume PDF</span>
              </a>
            </div>
          </motion.div>

          {/* Stats & Quick Metric Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 content-stretch"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, borderColor: 'rgba(14, 165, 255, 0.5)' }}
                className="glass-panel rounded-2xl p-6 border border-accent-blue/15 flex flex-col justify-between group transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-accent-blue group-hover:shadow-[0_0_8px_#0ea5ff] transition-all" />
                </div>
                
                <div className="my-4">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-gradient-blue tracking-tight">
                    {stat.value}
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-sans">
                  {stat.subtext}
                </p>
              </motion.div>
            ))}

            {/* Educational highlight card */}
            <div className="sm:col-span-2 glass-panel rounded-2xl p-5 border border-accent-blue/20 bg-gradient-to-r from-dark-surface to-dark-card flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-blue/15 text-accent-cyan border border-accent-blue/30">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    National Engineering College
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Autonomous Institution • Accredited Program
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-accent-blue/10 border border-accent-blue/30 text-accent-glow">
                2023–2027
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
