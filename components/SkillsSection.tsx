'use client';

import { motion } from 'framer-motion';
import { SkillBadge } from './SkillBadge';

const skillsData = [
  { name: 'Python', color: 'cyan' as const },
  { name: 'SQL', color: 'purple' as const },
  { name: 'Data Structures & Algorithms', color: 'cyan' as const },
  { name: 'OOP', color: 'purple' as const },
  { name: 'Flask', color: 'pink' as const },
  { name: 'Django', color: 'blue' as const },
  { name: 'REST APIs', color: 'cyan' as const },
  { name: 'Machine Learning', color: 'purple' as const },
  { name: 'TensorFlow', color: 'pink' as const },
  { name: 'Scikit-learn', color: 'blue' as const },
  { name: 'NLP', color: 'cyan' as const },
  { name: 'MongoDB', color: 'purple' as const },
  { name: 'MySQL', color: 'pink' as const },
  { name: 'Git & GitHub', color: 'blue' as const },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="gradient-text">Technical</span> Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsData.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} color={skill.color} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
