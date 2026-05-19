'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const certifications = [
    { name: 'Data Visualization: Empowering Business with Effective Insights', issuer: 'Tata Group', file: 'https://blobs.vusercontent.net/blob/Data_visulization_Tata-9GfXHbXTSmDALWCTfm5x6VqPAz7jtj.pdf', type: 'Certification' },
    { name: 'NVIDIA Certificate', issuer: 'NVIDIA', file: 'https://blobs.vusercontent.net/blob/NVDIA%20Certificate-YobP6Y9YpOluwn1tfsBP7K8RpnKhU7.pdf', type: 'Certification' },
    { name: 'Python Full Stack', issuer: 'Eduskill Internship', file: 'https://blobs.vusercontent.net/blob/Python%20Full%20Stack-TloWd7xTWutpcndD0LHZ1gv7vrsalF.pdf', type: 'Internship' },
    { name: 'Data Science Master', issuer: 'Eduskill Internship', file: 'https://blobs.vusercontent.net/blob/Data%20Science%20Master-khvVw14VrKwW5IFodmYUKg0shB99gA.pdf', type: 'Internship' },
    { name: 'Generative AI', issuer: 'Eduskill Internship', file: 'https://blobs.vusercontent.net/blob/Generative%20AI-VvApRNduMVyyBGz2Dl1nibN2L5tVT7.pdf', type: 'Internship' },
    { name: 'Google AI-ML', issuer: 'Eduskill Internship', file: 'https://blobs.vusercontent.net/blob/Google%20AI-ML-qFnycjkbQ8u88YXwllE1tAQVINwvDN.pdf', type: 'Internship' },
    { name: 'AWS', issuer: 'Eduskill Internship', file: 'https://blobs.vusercontent.net/blob/AWS-9FTfanRi1eiTbNLoA641ECjU4Ac4fB.pdf', type: 'Internship' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-dark border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            RM
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1 items-center">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
              </motion.button>
            ))}

            {/* Certifications Dropdown */}
            <motion.div className="relative group">
              <motion.button
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-all group-hover:text-cyan-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Certifications
              </motion.button>
              <div className="absolute right-0 mt-0 w-80 bg-slate-950/95 border border-white/10 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg backdrop-blur-md max-h-96 overflow-y-auto">
                {/* Certifications */}
                <div className="px-4 py-3 border-b border-white/10 sticky top-0 bg-slate-950/95 backdrop-blur-md">
                  <p className="text-xs font-semibold text-cyan-400">CERTIFICATIONS</p>
                </div>
                {certifications.filter(c => c.type === 'Certification').map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-muted-foreground hover:text-cyan-400 hover:bg-white/5 border-b border-white/5 transition-colors"
                  >
                    <div className="font-medium text-foreground">{cert.name}</div>
                    <div className="text-xs text-muted-foreground">{cert.issuer}</div>
                  </a>
                ))}
                
                {/* Eduskill Internships */}
                <div className="px-4 py-3 border-b border-white/10 sticky top-12 bg-slate-950/95 backdrop-blur-md">
                  <p className="text-xs font-semibold text-purple-400">EDUSKILL INTERNSHIPS</p>
                </div>
                {certifications.filter(c => c.type === 'Internship').map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-muted-foreground hover:text-purple-400 hover:bg-white/5 border-b border-white/5 last:border-b-0 transition-colors"
                  >
                    <div className="font-medium text-foreground">{cert.name}</div>
                    <div className="text-xs text-muted-foreground">{cert.issuer}</div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg glass-dark"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-2 pb-4"
          >
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
              </motion.button>
            ))}
            
            {/* Mobile Certifications Section */}
            <div className="px-4 py-2 border-t border-white/10 mt-2">
              <p className="text-xs font-semibold text-cyan-400 mb-2">CERTIFICATIONS</p>
              {certifications.filter(c => c.type === 'Certification').map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left px-2 py-2 text-xs text-muted-foreground hover:text-cyan-400 hover:bg-white/5 rounded transition-colors"
                >
                  <div className="font-medium text-foreground">{cert.name}</div>
                  <div className="text-xs text-muted-foreground">{cert.issuer}</div>
                </a>
              ))}
              
              <p className="text-xs font-semibold text-purple-400 mb-2 mt-3">EDUSKILL INTERNSHIPS</p>
              {certifications.filter(c => c.type === 'Internship').map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left px-2 py-2 text-xs text-muted-foreground hover:text-purple-400 hover:bg-white/5 rounded transition-colors"
                >
                  <div className="font-medium text-foreground">{cert.name}</div>
                  <div className="text-xs text-muted-foreground">{cert.issuer}</div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
