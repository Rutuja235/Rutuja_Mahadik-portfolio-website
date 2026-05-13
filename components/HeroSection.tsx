'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { TypedText } from './TypedText';
import Image from 'next/image';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-32">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            {/* Main heading */}
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I&apos;m <span className="gradient-text">Rutuja Mahadik</span>
            </motion.h1>

            {/* Typed subtitle */}
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-lg md:text-2xl text-cyan-400 mb-8 h-12">
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
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12">
              Software Engineering student with strong foundations in Data Structures, Algorithms, and Object-Oriented Programming, building scalable backend systems using Python, Flask, and SQL.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-background font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
              >
                View Projects
              </button>
              <a
                href="/Rutuja-Mahadik-Resume.pdf"
                download
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
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="flex justify-center md:justify-start gap-6">
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
          </div>

          {/* Right: Photo */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl p-1 opacity-75"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full bg-background rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-S80rwMK2E1j8tBIekl1CJ5BUjZfypp.jpg"
                  alt="Rutuja Mahadik"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10 animate-glow-pulse"></div>
            </div>
          </motion.div>
        </div>

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
