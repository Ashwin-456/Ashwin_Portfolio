import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Contact
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mt-2" />
          <p className="mt-3 text-sm text-slate-400">
            Feel free to reach out for software developer opportunities, project collaborations, or inquiries.
          </p>
        </div>

        {/* Contact Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-4 rounded-lg bg-[#0e1424] border border-slate-800 hover:border-blue-900/50 transition-colors group flex items-start gap-3"
          >
            <div className="p-2.5 rounded bg-slate-900 text-blue-400 border border-slate-800 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-400 font-medium">Email</p>
              <p className="text-sm font-mono text-slate-200 group-hover:text-blue-400 transition-colors truncate mt-0.5">
                {PERSONAL_INFO.email}
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-[#0e1424] border border-slate-800 hover:border-blue-900/50 transition-colors group flex items-start gap-3"
          >
            <div className="p-2.5 rounded bg-slate-900 text-blue-400 border border-slate-800 shrink-0">
              <LinkedinIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400 font-medium">LinkedIn</p>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <p className="text-sm font-mono text-slate-200 group-hover:text-blue-400 transition-colors truncate mt-0.5">
                Ashwinkrishna N
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-[#0e1424] border border-slate-800 hover:border-blue-900/50 transition-colors group flex items-start gap-3"
          >
            <div className="p-2.5 rounded bg-slate-900 text-blue-400 border border-slate-800 shrink-0">
              <GithubIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400 font-medium">GitHub</p>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <p className="text-sm font-mono text-slate-200 group-hover:text-blue-400 transition-colors truncate mt-0.5">
                2317004-rgb
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="p-4 rounded-lg bg-[#0e1424] border border-slate-800 hover:border-blue-900/50 transition-colors group flex items-start gap-3"
          >
            <div className="p-2.5 rounded bg-slate-900 text-blue-400 border border-slate-800 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-400 font-medium">Phone</p>
              <p className="text-sm font-mono text-slate-200 group-hover:text-blue-400 transition-colors truncate mt-0.5">
                {PERSONAL_INFO.phone}
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="p-4 rounded-lg bg-[#0e1424] border border-slate-800 flex items-start gap-3 sm:col-span-2 lg:col-span-2">
            <div className="p-2.5 rounded bg-slate-900 text-blue-400 border border-slate-800 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-400 font-medium">Location</p>
              <p className="text-sm text-slate-200 mt-0.5">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
