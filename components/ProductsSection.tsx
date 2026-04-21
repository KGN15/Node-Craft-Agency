'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { products } from '@/lib/data'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function ProductsSection() {
  const preview = products.slice(0, 3)

  return (
    <section id="products" className="relative py-32 overflow-hidden">
      <div className="blob blob-blue w-[500px] h-[500px] -top-20 right-0 opacity-15" />
      <div className="blob blob-indigo w-80 h-80 bottom-0 left-0 opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Our Work</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Products We&apos;ve Built
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From startups to established businesses — here are some of the digital products we&apos;ve crafted.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {preview.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Link href={`/products/${product.id}`} className="block group">
                <div className="product-card glass rounded-2xl overflow-hidden border border-white/8 hover:border-blue-500/30 h-full">
                  {/* Card visual */}
                  <div className={`h-48 bg-gradient-to-br ${product.color} relative flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)'
                    }} />
                    <Image src={product.image} alt={product.title} width={400} height={250} />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold flex items-center gap-2 text-sm">
                        View Details <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-blue-400 text-xs font-mono uppercase tracking-widest">{product.category}</span>
                        <h3 className="text-white text-xl font-bold mt-1" style={{ fontFamily: 'var(--font-display)' }}>{product.title}</h3>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.tech.slice(0, 3).map(t => (
                        <span key={t} className="px-2 py-1 rounded-md bg-white/5 text-slate-400 text-xs font-mono border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-500/10 font-semibold transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
