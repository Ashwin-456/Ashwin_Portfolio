import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Database, 
  Cpu, 
  Terminal, 
  Sparkles, 
  Eye, 
  Server, 
  Zap, 
  Layers, 
  Radio, 
  Search,
  MessageSquare,
  Info
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Python':
        return <Terminal className="w-5 h-5 text-accent-cyan" />;
      case 'Coffee':
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-accent-glow" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-sky-400" />;
      case 'Search':
        return <Search className="w-5 h-5 text-teal-400" />;
      case 'Camera':
        return <Eye className="w-5 h-5 text-red-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-emerald-400" />;
      case 'GitFork':
        return <Layers className="w-5 h-5 text-violet-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-accent-blue" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-orange-400" />;
      default:
        return <Code2 className="w-5 h-5 text-accent-blue" />;
    }
  };

  const filteredCategories = activeTab === 'All' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.title === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-xs font-mono text-accent-glow mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Verified <span className="text-gradient-blue">Skills & Stack</span>
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Explicitly documented in my curriculum and projects. Core languages and foundational AI skills are distinguished from specialized frameworks used in specific implementations.
          </p>

          {/* Project-specific clarification banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-blue/5 border border-accent-blue/20 text-xs text-slate-300">
            <Info className="w-4 h-4 text-accent-cyan shrink-0" />
            <span>
              Specialized tools like <strong>FastAPI, LangGraph, pgvector, and ESP32</strong> are deployed in targeted project architectures.
            </span>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-accent-blue text-white shadow-[0_0_20px_rgba(14,165,255,0.4)] scale-105'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-accent-cyan">
                  ({category.skills.length} competencies)
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  — {category.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4, borderColor: 'rgba(14, 165, 255, 0.5)' }}
                    className="glass-panel rounded-xl p-4 border border-accent-blue/15 hover:border-accent-blue/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-accent-blue/15 group-hover:border-accent-blue/30 transition-colors">
                          {getSkillIcon(skill.icon)}
                        </div>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          skill.level === 'Project Tech' 
                            ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                            : skill.level === 'Specialized'
                            ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                            : 'bg-accent-blue/15 text-accent-glow border border-accent-blue/30'
                        }`}>
                          {skill.level}
                        </span>
                      </div>

                      <h4 className="text-base font-semibold text-white group-hover:text-accent-glow transition-colors">
                        {skill.name}
                      </h4>

                      {skill.note && (
                        <p className="mt-1 text-xs text-slate-400 font-sans leading-relaxed">
                          {skill.note}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>Status</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                        Verified
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
