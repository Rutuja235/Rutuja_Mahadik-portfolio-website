'use client';

import { motion } from 'framer-motion';

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
  const getGradient = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'from-cyan-400 to-blue-500';
      case 'purple':
        return 'from-purple-400 to-pink-500';
      case 'pink':
        return 'from-pink-400 to-rose-500';
      case 'blue':
        return 'from-blue-400 to-cyan-500';
      default:
        return 'from-cyan-400 to-blue-500';
    }
  };

  const getBorderAndShadow = (color: string) => {
    switch (color) {
      case 'cyan':
        return { border: 'border-cyan-500/30', shadow: 'hover:shadow-cyan-500/30' };
      case 'purple':
        return { border: 'border-purple-500/30', shadow: 'hover:shadow-purple-500/30' };
      case 'pink':
        return { border: 'border-pink-500/30', shadow: 'hover:shadow-pink-500/30' };
      case 'blue':
        return { border: 'border-blue-500/30', shadow: 'hover:shadow-blue-500/30' };
      default:
        return { border: 'border-cyan-500/30', shadow: 'hover:shadow-cyan-500/30' };
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'text-cyan-300';
      case 'purple':
        return 'text-purple-300';
      case 'pink':
        return 'text-pink-300';
      case 'blue':
        return 'text-blue-300';
      default:
        return 'text-cyan-300';
    }
  };

  return (
    <section id="skills" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
        </motion.div>

        {/* Skills Grid - Vertical Cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => {
            const { border, shadow } = getBorderAndShadow(category.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-dark rounded-xl p-6 border ${border} ${shadow} hover:shadow-2xl transition-all`}
              >
                {/* Category Title */}
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${getGradient(category.color)} bg-clip-text text-transparent`}>
                  {category.category}
                </h3>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <span className={`text-sm font-semibold ${getTextColor(category.color)} mt-0.5 flex-shrink-0`}>•</span>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
