'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { products } from '@/lib/data'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="blob blob-blue w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-15" />
        <div className="blob blob-indigo w-96 h-96 bottom-1/4 right-0 opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <p className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              All Projects
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A showcase of digital products we&apos;ve built for businesses across different industries.
            </p>
          </motion.div>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link href={`/products/${product.id}`} className="block group">
                  <div className="product-card glass rounded-2xl overflow-hidden border border-white/8 hover:border-blue-500/30 h-full">
                    {/* Visual */}
                    <div className={`h-56 bg-gradient-to-br ${product.color} relative flex items-center justify-center overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)'
                      }} />
                      <Image src={product.image} alt={product.title} width={500} height={300} />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold flex items-center gap-2">
                          View Details <ExternalLink className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-blue-400 text-xs font-mono uppercase tracking-widest">{product.category}</span>
                      <h2 className="text-white text-2xl font-bold mt-1 mb-2" style={{ fontFamily: 'var(--font-display)' }}>{product.title}</h2>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{product.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.tech.map(t => (
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
        </div>
      </main>
      <Footer />
    </>
  )
}
