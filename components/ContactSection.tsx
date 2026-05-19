'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    
    try {
      // Send using FormData (required by FormSubmit.co)
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', `New message from ${formData.name}`);
      formDataToSend.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/rutujamahadik23@gmail.com', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        console.log('[v0] Form submitted successfully:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setError('');
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or email directly at rutujamahadik23@gmail.com');
      console.error('[v0] Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-dark rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:rutujamahadik23@gmail.com" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                    rutujamahadik23@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Linkedin className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                  <a href="https://linkedin.com/in/rutuja-mahadik-b8a939258" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple-400 transition-colors">
                    Rutuja Mahadik
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Github className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                  <a href="https://github.com/Rutuja235" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pink-400 transition-colors">
                    github.com/Rutuja235
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form onSubmit={handleSubmit} className="glass-dark rounded-lg p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-950/50 border border-cyan-500/30 rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-950/50 border border-cyan-500/30 rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-slate-950/50 border border-cyan-500/30 rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: !loading ? 1.05 : 1 }}
              whileTap={{ scale: !loading ? 0.95 : 1 }}
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-background font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>

            {error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-center text-red-300 text-sm">
                {error}
              </motion.div>
            )}

            {submitted && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center text-green-300 text-sm">
                <p className="font-semibold mb-1">🎉 Message sent successfully!</p>
                <p>Thank you for reaching out! I&apos;ll get back to you as soon as possible at <strong>{formData.email}</strong></p>
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
