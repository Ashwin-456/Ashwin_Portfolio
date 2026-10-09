import React from 'react';
import { 
  Mail, 
  Phone, 
  FileText 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-accent-blue/15 bg-[#030614] pt-14 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent-blue/20 border border-accent-blue/40 flex items-center justify-center font-mono font-bold text-accent-glow text-base">
                AK
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-accent-cyan font-mono">
                  AI & Data Science • NEC Kovilpatti
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
              Building intelligent applications that solve real-world problems through AI, computer vision, and modern software development.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-blue/10 border border-accent-blue/30 text-accent-glow text-xs font-mono hover:bg-accent-blue/20 transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-slate-400 hover:text-accent-glow transition-colors py-1 cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Verified Profiles
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-accent-blue/20 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-accent-blue/20 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-accent-blue/20 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-accent-blue/20 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="Phone"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] font-mono text-slate-500 pt-1">
              Thanjavur, Tamil Nadu, India
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="text-slate-400 text-center">
            Designed with curiosity. Built with code.
          </div>

          <div className="text-[11px] text-slate-500">
            B.Tech AI & DS • 2023–2027
          </div>
        </div>

      </div>
    </footer>
  );
};
