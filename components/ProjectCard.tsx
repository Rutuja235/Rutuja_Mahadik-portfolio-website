'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  index?: number;
}

export function ProjectCard({ title, description, techStack, features, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-dark rounded-xl p-6 hover:shadow-2xl hover:shadow-purple-500/30 transition-all"
    >
      <h3 className="text-xl font-bold mb-2 gradient-text">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>

      {/* Features */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-cyan-400 mb-2">FEATURES:</p>
        <ul className="text-xs text-muted-foreground space-y-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, i) => (
          <span key={i} className="text-xs bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 rounded px-2 py-1">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
