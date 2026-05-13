'use client';

import { motion } from 'framer-motion';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  highlights: string[];
  index?: number;
}

export function TimelineItem({ date, title, subtitle, highlights, index = 0 }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-8 mb-8"
    >
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 z-10 relative"></div>
        {index !== 1 && <div className="w-0.5 h-32 bg-gradient-to-b from-cyan-400/30 to-transparent mt-4"></div>}
      </div>

      {/* Content */}
      <div className="glass-dark rounded-lg p-6 flex-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
        <p className="text-xs text-cyan-400 font-semibold mb-1">{date}</p>
        <h4 className="text-lg font-bold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>

        <ul className="space-y-2">
          {highlights.map((highlight, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-cyan-400 mt-1">→</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
