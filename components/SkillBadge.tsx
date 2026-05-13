'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  icon?: string;
  color?: 'cyan' | 'purple' | 'pink' | 'blue';
}

const colorClasses = {
  cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-300',
  purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-300',
  pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30 text-pink-300',
  blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-300',
};

export function SkillBadge({ name, icon, color = 'cyan' }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`bg-gradient-to-r ${colorClasses[color]} border rounded-lg px-4 py-2 text-center text-sm font-medium backdrop-blur-sm transition-all`}
    >
      <div className="flex items-center justify-center gap-2">
        {icon && <span className="text-lg">{icon}</span>}
        <span>{name}</span>
      </div>
    </motion.div>
  );
}
