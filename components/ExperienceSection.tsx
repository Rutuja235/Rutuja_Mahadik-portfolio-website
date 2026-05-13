'use client';

import { motion } from 'framer-motion';
import { TimelineItem } from './TimelineItem';

export function ExperienceSection() {
  const experiences = [
    {
      date: 'Dec 2024 – Feb 2025',
      title: 'Bhabha Atomic Research Centre (BARC)',
      subtitle: 'Project Intern, Mumbai',
      highlights: [
        'Designed and developed scalable real-time monitoring system using Python and SQL',
        'Implemented distributed client-server architecture, increasing efficiency by 30%',
        'Built optimized backend pipelines for low-latency data processing and real-time analytics',
        'Developed automated anomaly detection and performed unit testing & debugging',
      ],
    },
    {
      date: 'Jun 2024 – Sept 2024',
      title: 'Technothinksup Solutions',
      subtitle: 'Data Science & Full Stack Intern, Kolhapur (Remote)',
      highlights: [
        'Developed backend applications using Flask and REST APIs',
        'Automated preprocessing pipelines, reducing execution time by 25%',
        'Designed optimized SQL queries and worked in agile environment',
        'Improved scalability and application efficiency',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              date={exp.date}
              title={exp.title}
              subtitle={exp.subtitle}
              highlights={exp.highlights}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
