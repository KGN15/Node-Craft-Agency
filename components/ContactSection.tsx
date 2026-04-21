'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Clock, Calendar } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="blob blob-blue w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Let&apos;s Talk</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Start Your Project
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Message us or call — we&apos;ll schedule a{' '}
            <span className="text-blue-400 font-semibold">free 30-minute consultation</span>{' '}
            to understand your vision and plan the perfect solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Free meeting callout */}
            <div className="glass rounded-2xl p-8 border border-blue-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold" style={{ fontFamily: 'var(--font-display)' }}>Free Discovery Call</h3>
                    <p className="text-slate-500 text-sm">30 minutes · No commitment</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Book a free 30-minute meeting with our team. We&apos;ll discuss your requirements, budget, timeline, and create the perfect digital strategy for your business.
                </p>
              </div>
            </div>

            {/* Contact cards */}
            {[
              {
                icon: Phone,
                label: 'Mashhudur Rahman (CEO)',
                value: '+880 1996-525342',
                sub: 'WhatsApp available',
                href: 'tel:+8801996525342',
              },
              {
                icon: Phone,
                label: 'Mehraz Hossain (CMO)',
                value: '+880 1874-404353',
                sub: 'WhatsApp available',
                href: 'tel:+8801874404353',
              },
              {
                icon: Mail,
                label: 'Email Us',
                value: 'mashhudur.rahman.dev@gmail.com',
                sub: 'Reply within 2 hours',
                href: 'mailto:mashhudur.rahman.dev@gmail.com',
              },
            ].map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 glass rounded-xl p-5 border border-white/8 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <c.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-0.5">{c.label}</p>
                  <p className="text-white font-medium text-sm">{c.value}</p>
                  <p className="text-slate-600 text-xs">{c.sub}</p>
                </div>
              </motion.a>
            ))}

            {/* WhatsApp button */}
            <a
              href="https://wa.link/5k747o"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 font-semibold transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Message on WhatsApp
            </a>
          </motion.div>

          {/* Simple contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 border border-white/8">
              <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                Send a Message
              </h3>
              <p className="text-slate-500 text-sm mb-8">We'll reply within 2 hours</p>

              <div className="space-y-5">
                  <form action="https://formsubmit.co/mashhudur.rahman.dev@gmail.com" method="POST" className="space-y-5">
                <div>

                  <label className="text-slate-400 text-sm mb-2 block">Your Name</label>
                  <input
                    type="text"
                    required
                    name='Name'
                    placeholder="e.g. Rahul Ahmed"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Your Email</label>
                  <input
                    required
                    name='email'
                    type="email"
                    placeholder="e.g. jon@gmail.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                  />
                  <input type="hidden" name="_autoresponse" value="Thanks! We received your message. Our team will contact you soon." />
                </div>
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Phone / WhatsApp</label>
                  <input
                    type="number"
                    required
                    name='Phone'
                    placeholder="+880 XXXX-XXXXXX"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">What do you need?</label>
                    
                  <select name='Package' required  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500/50 transition-all">
                    <option value="" className="bg-[#050508]">Select a package...</option>
                    <option value="basic" className="bg-[#050508]">Basic Landing Page — ৳5,000</option>
                    <option value="starter" className="bg-[#050508]">Starter Website — ৳9,000</option>
                    <option value="micro" className="bg-[#050508]">Micro Business — ৳12,000</option>
                    <option value="business" className="bg-[#050508]">Business Website — ৳18,000</option>
                    <option value="ecommerce" className="bg-[#050508]">E-Commerce — ৳25,000</option>
                    <option value="master-premium" className="bg-[#050508]">Master Premium — ৳50,000</option>
                    <option value="custom" className="bg-[#050508]">Custom / Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Tell us about your project</label>
                  <textarea
                  required
                  rows={4}
                  name='Description'
                  placeholder="Brief description of your business and what you want..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                  >
                  <Clock className="w-4 h-4" />
                  Book Free 30-Min Meeting
                </button>
                  </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
