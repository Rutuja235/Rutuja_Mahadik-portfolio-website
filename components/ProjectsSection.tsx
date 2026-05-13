'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'CuraMind – AI-Powered Health & Wellness Platform',
    description: 'Multi-module health platform combining mental health assessment, fitness tracking, nutrition guidance, and medication reminders using advanced NLP.',
    techStack: ['Python', 'Flask', 'NLP', 'SQL', 'REST APIs'],
    features: [
      'Mental health assessment with PHQ-9 & GAD-7 analysis',
      'Algorithm-based assessment systems for personalized insights',
      'NLP-driven sentiment analysis for real-time health recommendations',
      'Optimized system design for low-latency processing',
      'Flask backend with modular REST API architecture',
    ],
  },
  {
    title: 'Real-Time Vibration Monitoring System',
    description: 'Advanced monitoring system with real-time data streaming, anomaly detection algorithms achieving 94% accuracy, and low-latency backend architecture.',
    techStack: ['Python', 'Flask', 'SQL', 'Backend'],
    features: [
      'Real-time monitoring system with continuous data streaming',
      'Anomaly detection algorithms with 94% accuracy rate',
      'Enhanced system performance through optimized data processing',
      'Low-latency architecture enabling faster decision-making',
      'Scalable backend infrastructure for continuous monitoring',
    ],
  },
  {
    title: 'HeartCare – ML-Based Cardiovascular Risk Prediction',
    description: 'Machine learning prediction system leveraging 10,000+ healthcare records with advanced data preprocessing and feature engineering for actionable insights.',
    techStack: ['Python', 'TensorFlow', 'Scikit-learn', 'ML'],
    features: [
      'Developed using 10,000+ healthcare records dataset',
      'Efficient data preprocessing and feature selection techniques',
      'Advanced ML algorithms for improved model performance',
      'Healthcare-focused prediction system for risk assessment',
      'Actionable insights for data-driven healthcare decisions',
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              features={project.features}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
