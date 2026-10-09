import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a message or inquiry';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0EA5FF', '#06B6D4', '#8B5CF6']
      });
    } catch {
      // ignore
    }
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-xs font-mono text-accent-glow mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Let's Build <span className="text-gradient-blue">Something Intelligent</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            I'm interested in software development opportunities, AI projects, internships, and collaborations.
          </p>
        </div>

        {/* Contact Layout: Info Cards on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Email Card */}
            <div className="glass-panel rounded-2xl p-6 border border-accent-blue/20 hover:border-accent-blue/40 transition-all">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-accent-blue/15 text-accent-glow border border-accent-blue/30">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-lg font-bold text-white mt-4">Direct Email</h3>
              <p className="text-xs text-slate-400 mt-0.5">Primary communication channel</p>
              
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="mt-3 block text-sm sm:text-base font-mono text-accent-glow hover:underline break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel rounded-2xl p-5 border border-accent-blue/20">
                <div className="p-2.5 w-fit rounded-xl bg-accent-blue/15 text-accent-cyan border border-accent-blue/30 mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-mono text-slate-400">Phone</h4>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-sm font-mono text-white font-semibold hover:text-accent-glow mt-1 block"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              <div className="glass-panel rounded-2xl p-5 border border-accent-blue/20">
                <div className="p-2.5 w-fit rounded-xl bg-accent-blue/15 text-purple-400 border border-accent-blue/30 mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-mono text-slate-400">Location</h4>
                <p className="text-sm font-mono text-white font-semibold mt-1">
                  Thanjavur, India
                </p>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-panel rounded-2xl p-6 border border-accent-blue/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Professional Profiles
              </h4>
              <div className="space-y-2.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-accent-blue/15 border border-white/10 hover:border-accent-blue/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-accent-cyan" />
                    <span className="text-sm font-medium">LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-accent-cyan transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-accent-blue/15 border border-white/10 hover:border-accent-blue/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-accent-blue" />
                    <span className="text-sm font-medium">GitHub Repository</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-accent-blue transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-accent-blue/25 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill in the details below. You can submit directly or launch in your default mail app.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                  <p className="text-sm text-slate-300 mt-1 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Click below to launch your email client with your prefilled message to Ashwinkrishna.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold text-sm shadow-[0_0_20px_rgba(14,165,255,0.4)]"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Launch in Mail App Now</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-sm border border-white/10 cursor-pointer"
                  >
                    Edit Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-accent-blue">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Recruiter / Collaborator"
                      className="w-full px-4 py-3 rounded-xl bg-[#030617] border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                    />
                    {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-accent-blue">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#030617] border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                    />
                    {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. AI Internship / Development Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-[#030617] border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Message <span className="text-accent-blue">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, role, or project..."
                    className="w-full px-4 py-3 rounded-xl bg-[#030617] border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm text-white placeholder-slate-600 focus:outline-none transition-all resize-none"
                  />
                  {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold text-sm shadow-[0_0_25px_rgba(14,165,255,0.4)] hover:shadow-[0_0_35px_rgba(14,165,255,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-xs border border-white/10 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-accent-cyan" />
                    <span>Direct Mailto Link</span>
                  </a>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
