'use client';

import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export function AchievementsSection() {
  const achievements = [
    {
      title: 'Best Outgoing Student Award',
      date: 'Feb 2026',
      description: 'Recognized for academic excellence, leadership, and technical contributions',
      icon: '🏆',
    },
    {
      title: 'President – ISTE Student Chapter',
      date: 'Nov 2022 - Present',
      description: 'Leading a team of 25+ members, organizing technical workshops and mentoring students',
      icon: '👥',
    },
  ];

  const education = {
    institution: 'Dr. J.J. Magdum College of Engineering',
    location: 'Jaysingpur',
    degree: 'B.Tech in Artificial Intelligence and Data Science Engineering',
    duration: 'Nov 2022 - Present',
    cgpa: '9.13',
  };

  const certifications = [
    { name: 'Data Visualization: Empowering Business with Effective Insights', issuer: 'Tata Group', file: '/Data-Visualization-Tata-Certificate.pdf' },
    { name: 'NVIDIA Certificate', issuer: 'NVIDIA', file: '/NVDIA-Certificate.pdf' },
  ];

  const eduskillInternships = [
    { name: 'Python Full Stack', file: '/Python-Full-Stack-Eduskill.pdf' },
    { name: 'Data Science Master', file: '/Data-Science-Master-Eduskill.pdf' },
    { name: 'Generative AI', file: '/Generative-AI-Eduskill.pdf' },
    { name: 'Google AI-ML', file: '/Google-AI-ML-Eduskill.pdf' },
    { name: 'AWS', file: '/AWS-Eduskill.pdf' },
  ];

  return (
    <section id="achievements" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Achievements */}
        <div>
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gradient-text">Achievements</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-dark rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-cyan-300 mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{achievement.date}</p>
                <p className="text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <div>
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          </motion.div>

          <GlassCard>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-cyan-400 font-semibold mb-1">INSTITUTION</p>
                <h3 className="text-2xl font-bold text-foreground">{education.institution}</h3>
              </div>
              <div>
                <p className="text-xs text-purple-400 font-semibold mb-1">DEGREE</p>
                <p className="text-lg text-muted-foreground">{education.degree}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-xs text-pink-400 font-semibold mb-1">DURATION</p>
                  <p className="text-muted-foreground">{education.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-blue-400 font-semibold mb-1">CGPA</p>
                  <p className="text-2xl font-bold gradient-text">{education.cgpa}</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Certifications */}
        <div>
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gradient-text">Certifications</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-dark rounded-lg p-4 flex items-center gap-3 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer transition-all"
                onClick={() => window.open(cert.file, '_blank')}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                <div className="flex-1">
                  <p className="text-foreground text-sm font-medium">{cert.name}</p>
                  <p className="text-xs text-cyan-400 font-semibold">{cert.issuer}</p>
                </div>
                <div className="text-cyan-400 text-xs font-semibold">View</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Eduskill Internships */}
        <div>
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gradient-text">Eduskill Internships</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eduskillInternships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-dark rounded-lg p-4 flex items-center gap-3 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer transition-all"
                onClick={() => window.open(internship.file, '_blank')}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
                <div className="flex-1">
                  <p className="text-foreground text-sm font-medium">{internship.name}</p>
                  <p className="text-xs text-purple-400 font-semibold">Eduskill Internship</p>
                </div>
                <div className="text-purple-400 text-xs font-semibold">View</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
