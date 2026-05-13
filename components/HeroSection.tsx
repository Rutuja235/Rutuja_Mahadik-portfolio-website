'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { TypedText } from './TypedText';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I&apos;m <span className="gradient-text">Rutuja Mahadik</span>
        </motion.h1>

        {/* Typed subtitle */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-xl md:text-2xl text-cyan-400 mb-8 h-12">
          <TypedText
            texts={[
              'AI & Data Science Engineer',
              'Python Developer',
              'ML Enthusiast',
              'Backend Development Specialist',
            ]}
            speed={80}
            delayBetweenTexts={2500}
          />
        </motion.div>

        {/* Description */}
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Software Engineering student with strong foundations in Data Structures, Algorithms, and Object-Oriented Programming, building scalable backend systems using Python, Flask, and SQL.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-background font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            View Projects
          </button>
          <a
            href="/Rutuja-Mahadik-Resume.pdf"
            className="px-8 py-3 rounded-lg glass-dark border border-purple-500/50 text-purple-300 font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            Download Resume
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 rounded-lg glass-dark border border-pink-500/50 text-pink-300 font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all hover:scale-105"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="flex justify-center gap-6">
          <a href="https://linkedin.com/in/rutuja-mahadik-b8a939258" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg glass-dark hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:scale-110">
            <Linkedin className="w-6 h-6 text-cyan-400" />
          </a>
          <a href="https://github.com/Rutuja235" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg glass-dark hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-110">
            <Github className="w-6 h-6 text-purple-400" />
          </a>
          <a href="mailto:rutujamahadik23@gmail.com" className="p-3 rounded-lg glass-dark hover:shadow-lg hover:shadow-pink-500/30 transition-all hover:scale-110">
            <Mail className="w-6 h-6 text-pink-400" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2 animate-scroll-down"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
