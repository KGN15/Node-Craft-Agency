'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { use } from 'react'
import { notFound } from 'next/navigation'
import { blogPosts } from '../blogData'
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

/* ─────────────────────────────────────────
   Pattern background helper
───────────────────────────────────────── */
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
      style={{ backgroundImage: patterns[pattern] ?? patterns.grid }}
    />
  )
}

/* ─────────────────────────────────────────
   Markdown renderer
───────────────────────────────────────── */
function parseLine(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(
      /`(.+?)`/g,
      '<code class="px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-300 text-sm font-mono border border-blue-500/20">$1</code>',
    )
}

function renderContent(markdown: string) {
  const lines = markdown.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    if (!line) { i++; continue }

    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={key++}
          className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4 first:mt-0"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {line.slice(3)}
        </h2>,
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3
          key={key++}
          className="text-xl font-bold text-white mt-8 mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {line.slice(4)}
        </h3>,
      )
    } else if (line.startsWith('```')) {
      const lang = line.slice(3)
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <div key={key++} className="my-6 rounded-xl overflow-hidden border border-white/10">
          {lang && (
            <div className="px-4 py-2 bg-white/5 border-b border-white/8 text-slate-500 text-xs font-mono">
              {lang}
            </div>
          )}
          <pre className="p-5 overflow-x-auto bg-[#0d0d16]">
            <code className="text-blue-300 text-sm font-mono leading-relaxed">
              {codeLines.join('\n')}
            </code>
          </pre>
        </div>,
      )
    } else if (line.startsWith('- ') || line.match(/^\d+\. /)) {
      const listItems: string[] = []
      const isOrdered = !!line.match(/^\d+\./)
      while (
        i < lines.length &&
        (lines[i].trim().startsWith('- ') || lines[i].trim().match(/^\d+\. /))
      ) {
        const text = lines[i].trim().replace(/^- /, '').replace(/^\d+\. /, '')
        listItems.push(text)
        i++
      }
      elements.push(
        isOrdered ? (
          <ol key={key++} className="my-4 space-y-2 pl-0">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-slate-300 text-base leading-relaxed">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs flex items-center justify-center font-mono font-bold mt-0.5">
                  {idx + 1}
                </span>
                <span dangerouslySetInnerHTML={{ __html: parseLine(item) }} />
              </li>
            ))}
          </ol>
        ) : (
          <ul key={key++} className="my-4 space-y-2 pl-0">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-slate-300 text-base leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2.5" />
                <span dangerouslySetInnerHTML={{ __html: parseLine(item) }} />
              </li>
            ))}
          </ul>
        ),
      )
      continue
    } else {
      elements.push(
        <p
          key={key++}
          className="text-slate-300 text-base md:text-lg leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: parseLine(line) }}
        />,
      )
    }
    i++
  }

  return elements
}

/* ─────────────────────────────────────────
   Page component
   FIX: use React.use() to unwrap params in
   a 'use client' component (Next.js 15+).
   For Next.js 13/14 the old props.params
   pattern still works — both are safe here.
───────────────────────────────────────── */
export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string }
}) {
  // Safely unwrap whether params is a Promise (Next 15) or plain object (Next 13/14)
  const resolvedParams = params instanceof Promise ? use(params) : params
  const { slug } = resolvedParams

  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  // Show max 2 related posts (exclude current)
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen pt-24 sm:pt-32 pb-24 overflow-x-hidden">

        {/* ── Ambient blobs ── */}
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] blob blob-blue opacity-10" />
        <div className="pointer-events-none absolute bottom-1/3 left-0 w-80 h-80 blob blob-indigo opacity-10" />

        {/* ── Subtle grid texture ── */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            zIndex: 0,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Back link ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 sm:mb-10"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Articles
            </Link>
          </motion.div>

          {/* ── Hero image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden mb-8 sm:mb-10 h-52 sm:h-64 md:h-80"
          >
            <Image src={post.thumbnel} width={1000} height={300} alt={post.title}/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute top-5 right-5 text-6xl sm:text-7xl opacity-30 select-none">
              {post.emoji}
            </div>
            <div className="absolute bottom-5 left-5">
              <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white/70 text-xs font-mono uppercase tracking-wider">
                {post.tag}
              </span>
            </div>
          </motion.div>

          {/* ── Article header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-10 sm:mb-12"
          >
            <span className="text-blue-400 font-mono text-xs uppercase tracking-widest">
              {post.category}
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {post.author.initial}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{post.author.name}</p>
                  <p className="text-slate-500 text-xs">{post.author.role}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-500 text-xs sm:text-sm sm:ml-auto">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Article body ── */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-16 sm:mb-20"
          >
            {renderContent(post.content)}
          </motion.article>

          {/* ── Author card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl border border-white/[0.08] p-6 sm:p-8 mb-16 sm:mb-20 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
              {post.author.initial}
            </div>
            <div>
              <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">
                Written by
              </p>
              <p className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                {post.author.name}
              </p>
              <p className="text-slate-400 text-sm">{post.author.role} · NodeCraft Agency</p>
            </div>
          </motion.div>

          {/* ── Related posts ── */}
          {related.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 sm:mb-20"
            >
              <h2
                className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                More Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                    <div className="glass rounded-xl overflow-hidden border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 flex">
                      <div className="relative w-20 sm:w-24 flex-shrink-0 overflow-hidden">
                        <Image src={p.thumbnel} width={1300} height={0} alt={p.title}/>
                        <div className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl opacity-50">
                          {p.emoji}
                        </div>
                      </div>
                      <div className="p-4 flex-1 min-w-0">
                        <span className="text-blue-400 text-xs font-mono uppercase">{p.tag}</span>
                        <h3
                          className="text-white text-sm font-semibold mt-1 leading-snug group-hover:text-blue-100 transition-colors line-clamp-2"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {p.title}
                        </h3>
                        <p className="text-slate-500 text-xs mt-2 flex items-center gap-1">
                          <Clock className="w-3 h-3 flex-shrink-0" />
                          {p.readTime}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center glass rounded-2xl border border-blue-500/20 p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="blob blob-blue w-48 h-48 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <h3
                className="text-xl sm:text-2xl font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Ready to start your project?
              </h3>
              <p className="text-slate-400 mb-6 text-sm">
                Book a free 30-minute consultation with our team.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </>
  )
}