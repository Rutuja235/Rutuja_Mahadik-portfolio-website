'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950/50 border-t border-slate-800/50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-8">
          {/* Footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800/50">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2">Rutuja Mahadik</h3>
              <p className="text-sm text-muted-foreground">AI & Data Science Engineer | Python Developer | ML Enthusiast</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/rutuja-mahadik-b8a939258" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass-dark hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                  <Linkedin className="w-5 h-5 text-purple-400" />
                </a>
                <a href="https://github.com/Rutuja235" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass-dark hover:shadow-lg hover:shadow-pink-500/30 transition-all">
                  <Github className="w-5 h-5 text-pink-400" />
                </a>
                <a href="mailto:rutujamahadik23@gmail.com" className="p-2 rounded-lg glass-dark hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
            <span>© {currentYear} Rutuja Mahadik. Built with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
