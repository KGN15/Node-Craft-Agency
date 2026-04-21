'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      <div className="blob blob-blue w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <div className="blob blob-indigo w-80 h-80 top-0 right-0 opacity-10" />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'backOut' }}
          className="mb-8"
        >
          <span className="text-[140px] font-black gradient-text leading-none" style={{ fontFamily: 'var(--font-display)' }}>
            404
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Page Not Found
          </h1>
          <p className="text-slate-400 mb-10 max-w-sm mx-auto">
            Looks like this page doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300"
            >
              Back to Home
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 rounded-xl border border-white/10 text-slate-300 hover:text-white glass font-semibold transition-all duration-300"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
