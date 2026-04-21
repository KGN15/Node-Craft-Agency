'use client'



import { motion } from 'framer-motion'
import Link from 'next/link'
import { blogPosts } from '@/app/blog/blogData'   // ← adjust path if needed
import Image from 'next/image'
import { Clock, ArrowRight } from 'lucide-react'

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

export default function BlogSection() {
  const preview = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="relative py-32 overflow-hidden">
      <div className="blob blob-cyan w-[500px] h-[400px] top-0 left-0 opacity-10" />
      <div className="blob blob-blue w-80 h-80 bottom-0 right-0 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">From the Blog</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Insights &{' '}
            <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Web dev tips, business strategies, and real talk from the NodeCraft team.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {preview.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Link href={`/blog/${post.slug}`} className="block group h-full">
                <div className="product-card glass rounded-2xl overflow-hidden border border-white/8 hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col">
                  {/* Placeholder image */}
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <Image src={post.thumbnel} width={400} height={300} alt={post.title}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 text-5xl opacity-25 select-none">{post.emoji}</div>
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/60 text-xs font-mono uppercase tracking-wider">
                        {post.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-2">{post.category}</span>
                    <h3
                      className="text-white font-bold text-base leading-snug mb-3 group-hover:text-blue-100 transition-colors flex-1"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/8">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                          {post.author.initial}
                        </div>
                        <span className="text-slate-500 text-xs">{post.author.name.split(' ')[0]}</span>
                      </div>
                      <span className="text-slate-600 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
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
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-500/10 font-semibold transition-all duration-300 group"
          >
            Read All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
