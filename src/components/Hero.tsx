import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  Cpu, 
  Terminal, 
  ShieldCheck 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = PERSONAL_INFO.heroRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseDuration = 2200;

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedRole === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedRole === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.heroRoles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedRole((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-mono font-medium text-accent-glow">
                Open to Opportunities & Internships
              </span>
            </div>

            {/* Name and Greeting */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-mono text-accent-glow flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent-cyan inline" />
                <span>Hi, I'm</span>
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
                Ashwinkrishna <span className="text-gradient-blue">N</span>
              </h1>
            </div>

            {/* Cycling Animated Role */}
            <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200">
              <span className="text-slate-400 mr-2 font-light">I build as an</span>
              <span className="text-accent-glow border-r-2 border-accent-blue pr-1 font-mono">
                {displayedRole}
              </span>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
              Building intelligent applications that solve real-world problems through AI, computer vision, and modern software development.
            </p>

            {/* Quick Metadata chips */}
            <div className="flex flex-wrap gap-2 pt-1 pb-2 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                Thanjavur, India
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
                B.Tech (2023–2027)
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                CGPA: 7.25 / 10
              </span>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold text-sm shadow-[0_0_25px_rgba(14,165,255,0.4)] hover:shadow-[0_0_35px_rgba(14,165,255,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Ashwinkrishna_Profile.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-accent-blue/30 hover:border-accent-blue transition-all group"
              >
                <Download className="w-4 h-4 text-accent-glow group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links from Resume */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-mono">Connect:</span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-accent-blue/20 text-slate-300 hover:text-accent-glow border border-white/10 hover:border-accent-blue/40 transition-all"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-accent-blue/20 text-slate-300 hover:text-accent-glow border border-white/10 hover:border-accent-blue/40 transition-all"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-accent-blue/20 text-slate-300 hover:text-accent-glow border border-white/10 hover:border-accent-blue/40 transition-all"
                title="Send Email"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-accent-blue/20 text-slate-300 hover:text-accent-glow border border-white/10 hover:border-accent-blue/40 transition-all"
                title="Phone"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Cybernetic Profile Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 sm:w-88 md:w-96 aspect-square flex items-center justify-center">
              
              {/* Outer Rotating Glowing Ring */}
              <div className="absolute inset-0 rounded-full border border-accent-blue/20 border-dashed animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-accent-cyan/30 animate-[spin_20s_linear_infinite_reverse]" />
              
              {/* Pulsing Glow behind avatar */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent-blue/20 via-accent-cyan/15 to-accent-purple/20 blur-2xl animate-pulse" />

              {/* Main Futuristic Card Container */}
              <div className="relative w-64 sm:w-76 aspect-square rounded-3xl bg-gradient-to-b from-dark-surface to-dark-card border border-accent-blue/40 p-5 shadow-[0_0_50px_rgba(14,165,255,0.25)] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden group">
                
                {/* Circuit Grid Backdrop */}
                <div className="absolute inset-0 cyber-grid opacity-30" />
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-accent-blue/20 rounded-full blur-xl" />
                <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-accent-cyan/20 rounded-full blur-xl" />

                {/* Avatar Icon / Monogram Crest */}
                <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#070b1e] border-2 border-accent-blue/60 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(14,165,255,0.4)] group-hover:border-accent-cyan transition-colors">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-accent-blue text-[9px] font-mono font-bold tracking-widest uppercase text-white shadow-sm">
                    DEV-CORE
                  </div>
                  <span className="text-4xl sm:text-5xl font-black font-mono text-gradient-blue tracking-tighter">
                    AK
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping" />
                    <span className="text-[10px] font-mono text-slate-400">ENGINEER</span>
                  </div>
                </div>

                {/* Developer details banner */}
                <div className="relative z-10 mt-5 text-center space-y-1">
                  <h3 className="text-base font-bold text-white tracking-wide">
                    Ashwinkrishna N
                  </h3>
                  <p className="text-xs text-accent-glow font-mono">
                    NEC Kovilpatti • 2023–2027
                  </p>
                </div>

                {/* Tech Badges inside card */}
                <div className="relative z-10 mt-3 flex items-center justify-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-blue/15 text-accent-cyan border border-accent-blue/30">
                    PyTorch/CV
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-purple/15 text-purple-300 border border-accent-purple/30">
                    LangGraph
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    FastAPI
                  </span>
                </div>
              </div>

              {/* Floating Information Card 1: AI • Computer Vision • Software Development */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:-left-8 z-20 px-3.5 py-2 rounded-xl bg-[#090e28]/90 border border-accent-blue/50 shadow-[0_10px_25px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center gap-2.5"
              >
                <div className="p-1.5 rounded-lg bg-accent-blue/20 text-accent-glow">
                  <Sparkles className="w-4 h-4 text-accent-cyan" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-mono font-bold text-white">
                    AI • Computer Vision • Software Development
                  </p>
                  <p className="text-[9px] text-slate-400">
                    National Engineering College
                  </p>
                </div>
              </motion.div>

              {/* Floating Mini Badge 2: Real-time CV & RAG */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-3 -right-2 sm:-right-4 z-20 px-3 py-1.5 rounded-lg bg-[#090e28]/90 border border-accent-cyan/50 shadow-[0_10px_25px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono font-semibold text-slate-200">
                  UIDAI Benchmark & IoT Verified
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
