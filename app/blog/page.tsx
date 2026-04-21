'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { blogPosts } from './blogData'
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react'
import Image from 'next/image'

// SVG patterns for placeholder images
function PatternBg({ pattern, gradient }: { pattern: string; gradient: string }) {
  const patterns: Record<string, string> = {
    grid: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='1'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3C/g%3E%3C/svg%3E")`,
    dots: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E")`,
    lines: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='40' x2='40' y2='0' stroke='rgba(255,255,255,0.07)' stroke-width='1'/%3E%3C/svg%3E")`,
    cross: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 0v32M0 16h32' stroke='rgba(255,255,255,0.08)' stroke-width='1'/%3E%3C/svg%3E")`,
    waves: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q15 0 30 10 Q45 20 60 10' stroke='rgba(255,255,255,0.08)' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
  }
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
      style={{ backgroundImage: patterns[pattern] || patterns.grid }}
    />
  )
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Blobs */}
      <div className="blob blob-blue w-[500px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-15" />
      <div className="blob blob-indigo w-80 h-80 bottom-1/3 right-0 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">NodeCraft Blog</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Insights &<br />
            <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Web development tips, business growth strategies, and behind-the-scenes from the NodeCraftAgency team.
          </p>
        </motion.div>

        {/* Featured post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-12"
        >
          <Link href={`/blog/${featured.slug}`} className="block group">
            <div className="relative rounded-3xl overflow-hidden border border-white/8 hover:border-blue-500/30 transition-all duration-500 product-card">
              {/* Image / placeholder */}
              <div className="relative h-72 md:h-96 overflow-hidden">
                <Image src={featured.thumbnel} width={1500} height={300} alt={featured.title}/>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Emoji watermark */}
                <div className="absolute top-8 right-8 text-8xl opacity-30 select-none">{featured.emoji}</div>
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/30 border border-blue-500/40 text-blue-300 text-xs font-mono uppercase tracking-wider">
                      {featured.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-mono">
                      Featured
                    </span>
                  </div>
                  <h2
                    className="text-2xl md:text-4xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mb-6 hidden md:block">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-slate-400 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                        {featured.author.initial}
                      </div>
                      <span>{featured.author.name}</span>
                    </div>
                    <span>·</span>
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {featured.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Rest of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
            >
              <Link href={`/blog/${post.slug}`} className="block group h-full">
                <div className="product-card glass rounded-2xl overflow-hidden border border-white/8 hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <Image src={post.thumbnel} width={600} height={0} alt={post.title}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* Emoji watermark */}
                    <div className="absolute top-5 right-5 text-6xl opacity-25 select-none">{post.emoji}</div>
                    {/* Category badge */}
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70 text-xs font-mono uppercase tracking-wider">
                        {post.tag}
                      </span>
                    </div>
                    {/* Overlay title hint */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a12] to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">{post.category}</span>
                    <h3
                      className="text-white text-xl font-bold mb-3 leading-snug group-hover:text-blue-100 transition-colors flex-1"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-5 border-t border-white/8">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                          {post.author.initial}
                        </div>
                        <div>
                          <p className="text-white text-xs font-medium">{post.author.name}</p>
                          <p className="text-slate-600 text-xs">{post.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-blue-400 text-xs group-hover:gap-2.5 transition-all">
                        <Clock className="w-3 h-3 text-slate-500" />
                        <span className="text-slate-500">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20 glass rounded-2xl border border-white/8 p-12"
        >
          <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-4">More coming soon</p>
          <h3 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Want us to build something for you?
          </h3>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 group"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
