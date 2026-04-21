'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/data'
import { Quote, Star } from 'lucide-react'

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="relative py-32 overflow-hidden">
      <div className="blob blob-indigo w-[500px] h-[500px] top-0 left-0 opacity-15" />
      <div className="blob blob-blue w-96 h-96 bottom-0 right-0 opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Client Love</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            What They Say
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real results from real clients. See how NodeCraft transformed their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass rounded-2xl p-8 border border-white/8 hover:border-blue-500/20 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <div className="relative z-10">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-blue-500/40 mb-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-300 leading-relaxed mb-8 text-sm">&ldquo;{t.text}&rdquo;</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/8">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-display)' }}>{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
