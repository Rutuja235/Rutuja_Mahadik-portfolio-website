'use client';

import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
        </motion.div>

        {/* Content */}
        <GlassCard>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a passionate AI & Data Science Engineering student currently pursuing my B.Tech at Dr. J.J. Magdum College of Engineering in Jaysingpur. My journey into technology is driven by a deep curiosity about building scalable systems and leveraging AI to solve real-world problems.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              With strong foundations in Data Structures, Algorithms, and Object-Oriented Programming, I specialize in backend development using Python, Flask, and SQL. I&apos;ve worked on distributed systems, real-time monitoring applications, and ML-driven healthcare solutions that prioritize efficiency and accuracy.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              My professional experience includes internships at BARC and Technothinksup Solutions, where I developed scalable systems, optimized databases, and improved system efficiency by up to 30%. I&apos;m passionate about machine learning, healthcare AI applications, and building solutions that make a meaningful impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-xs text-cyan-400 font-semibold mb-1">CGPA</p>
                <p className="text-2xl font-bold text-cyan-300">9.13</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <p className="text-xs text-purple-400 font-semibold mb-1">Position</p>
                <p className="text-2xl font-bold text-purple-300">President, ISTE</p>
              </div>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                <p className="text-xs text-pink-400 font-semibold mb-1">Award</p>
                <p className="text-2xl font-bold text-pink-300">Best Outgoing</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
