'use client';

import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink } from 'lucide-react';

export function PublicationsSection() {
  const publications = [
    {
      title: 'HeartCare: ML-Powered Prediction of Cardiovascular Risk',
      journal: 'Analytical Science and Technology',
      issn: 'ISSN: 1225-0163',
      volume: 'Volume 7, Issue 4, April 2025',
      authors: ['Ms. Rutuja Mahadik', 'Prof. Aditya N. Magdum', 'Prof. Savali Surywanshi'],
      affiliation: 'Dr. J.J. Magdum College of Engineering, Jaysingpur, Maharashtra, India',
      abstract: 'Heart-related ailments continue to be a leading factor in global fatalities. This study explores the use of automated predictive techniques for categorizing heart conditions using various machine learning algorithms including Logistic Regression, Decision Trees, KNN, SVM, Random Forest, and ANN with integrated modeling strategies such as ensemble learning and adaptive boosting methods.',
      keywords: ['Heart Disease Prediction', 'Machine Learning', 'Cardiovascular Disease', 'Classification Algorithms', 'Healthcare Analytics'],
      pdf: 'https://blobs.vusercontent.net/blob/AST-4209%20Published-Wds4IcetVDmFqhQ4LTmL3qoYjM2ktq.pdf',
    },
  ];

  const certificateFile = 'https://blobs.vusercontent.net/blob/Publication_Certificate-6h9ddGVfB8QYKMaGXeVM26hBU6JxYj.pdf';

  return (
    <section id="publications" className="relative py-20 px-4 md:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="gradient-text">Publications</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          </motion.div>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-dark rounded-lg p-6 md:p-8 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              {/* Title and Journal */}
              <div className="flex items-start gap-4 mb-4">
                <BookOpen className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{publication.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-3">
                    <span className="text-cyan-400 font-semibold">{publication.journal}</span>
                    <span className="text-purple-400">{publication.issn}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{publication.volume}</p>
                </div>
              </div>

              {/* Authors */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-1">Authors:</p>
                <p className="text-sm text-muted-foreground">{publication.authors.join(', ')}</p>
                <p className="text-xs text-muted-foreground mt-1">{publication.affiliation}</p>
              </div>

              {/* Abstract */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-2">Abstract:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{publication.abstract}</p>
              </div>

              {/* Keywords */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">Keywords:</p>
                <div className="flex flex-wrap gap-2">
                  {publication.keywords.map((keyword, idx) => (
                    <span key={idx} className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* View PDF Button */}
              <div className="flex gap-3">
                <motion.a
                  href={publication.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Publication
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publication Certificate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 glass-dark rounded-lg p-6 md:p-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-6 h-6 text-purple-400 flex-shrink-0" />
            <h3 className="text-xl font-bold text-foreground">Publication Certificate</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-6">Official certificate recognizing the publication of research work in Analytical Science and Technology journal.</p>
          <motion.a
            href={certificateFile}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            View Certificate
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
