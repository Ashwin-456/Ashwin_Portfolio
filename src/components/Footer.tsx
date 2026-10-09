import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Mail } from 'lucide-react';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {

  return (
    <footer className="border-t border-slate-900 bg-[#060911] py-8 text-xs text-slate-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div>
            <span className="font-semibold text-slate-200">{PERSONAL_INFO.name}</span>
            <span className="text-slate-500 ml-2">— {PERSONAL_INFO.identity}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-400 hover:text-blue-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="text-slate-500">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};
