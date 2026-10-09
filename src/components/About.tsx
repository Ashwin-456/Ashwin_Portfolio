import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mt-2" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6 text-slate-300 leading-relaxed text-base"
        >
          <p>
            I am a B.Tech Artificial Intelligence and Data Science student at{' '}
            <span className="text-white font-medium">National Engineering College, Kovilpatti</span> (2023–2027). 
            My primary interests lie in software development, Python programming, and building practical AI-based applications.
          </p>

          <p>
            I focus on developing reliable software and applying machine learning and computer vision to solve concrete problems. 
            Through hands-on projects, industry internship experience, and continuous problem-solving, I work to strengthen my foundations 
            in core computer science concepts, backend systems, and application architecture.
          </p>

          {/* Compact details bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="p-3.5 rounded-lg bg-[#0e1424] border border-slate-800 flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400">Education</p>
                <p className="text-sm font-medium text-slate-200 mt-0.5">B.Tech AI & DS</p>
                <p className="text-xs text-slate-500">2023–2027</p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0e1424] border border-slate-800 flex items-start gap-3">
              <Award className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400">Institution</p>
                <p className="text-sm font-medium text-slate-200 mt-0.5">NEC Kovilpatti</p>
                <p className="text-xs text-slate-500">CGPA: {PERSONAL_INFO.cgpa}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0e1424] border border-slate-800 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="text-sm font-medium text-slate-200 mt-0.5">Thanjavur, India</p>
                <p className="text-xs text-slate-500">Tamil Nadu</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
