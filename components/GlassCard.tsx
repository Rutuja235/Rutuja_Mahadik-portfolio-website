'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'dark';
  hover?: boolean;
}

export function GlassCard({ children, className = '', variant = 'dark', hover = true }: GlassCardProps) {
  const baseClass = variant === 'dark' ? 'glass-dark' : 'glass';
  const hoverClass = hover ? 'card-hover' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${baseClass} ${hoverClass} rounded-xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
