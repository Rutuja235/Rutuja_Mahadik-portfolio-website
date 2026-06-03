'use client';

import { motion } from 'framer-motion';
import { SkillBadge } from './SkillBadge';

const skillsData = [
  {
    category: 'Programming',
    skills: ['Python', 'SQL', 'JavaScript (Basics)'],
    color: 'cyan' as const,
  },
  {
    category: 'Backend & APIs',
    skills: ['Flask', 'Django', 'REST APIs', 'API Integration'],
    color: 'purple' as const,
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB'],
    color: 'pink' as const,
  },
  {
    category: 'Core CS',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Cyber Security Fundamentals'],
    color: 'blue' as const,
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
    color: 'cyan' as const,
  },
  {
    category: 'Development Practices',
    skills: ['SDLC', 'Debugging', 'Unit Testing', 'CI/CD Fundamentals'],
    color: 'purple' as const,
  },
  {
    category: 'AI & Automation',
    skills: ['NLP', 'Machine Learning', 'Data Science', 'AI-Assisted Development Tools'],
    color: 'pink' as const,
  },
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

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-dark rounded-lg p-6"
            >
              {/* Category Title */}
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                <span className={`bg-gradient-to-r ${
                  category.color === 'cyan' ? 'from-cyan-400 to-blue-500' :
                  category.color === 'purple' ? 'from-purple-400 to-pink-500' :
                  category.color === 'pink' ? 'from-pink-400 to-rose-500' :
                  'from-blue-400 to-cyan-500'
                } bg-clip-text text-transparent`}>
                  {category.category}
                </span>
              </h3>

              {/* Skills for this category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skillIndex} name={skill} color={category.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
