'use client'

import Link from 'next/link'
import { Facebook,PhoneCall,ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import FooterTextAnime from './FooterTextAnime'

const brand = 'NodeCraftAgency'


  
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-20 pb-0">
      <FooterTextAnime/>
      <div className="blob blob-blue w-96 h-96 top-0 left-1/2 -translate-x-1/2 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src='/NodeCraftAgency.png' width={100} height={100} alt='NodeCraftAgency'/>
              <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                Node<span className="text-blue-400">Craft</span> Agency
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              We build high-performance digital systems that help businesses grow.
              From landing pages to full-scale e-commerce — we&apos;ve got you covered.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61570693414175' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  className=" w-40 h-9 rounded-lg border border-none flex items-center justify-center text-white font-bold text-1xl hover:text-white bg-blue-600 hover:bg-blue-900 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />FaceBook Page
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-semibold mb-5 text-sm" style={{ fontFamily: 'var(--font-display)' }}>Navigation</p>
            <ul className="space-y-3">
                              <Link href="/#hero" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">Home</Link>
              {[ 'Products', 'Plan', 'Testimonial', 'Contact'].map(item => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(item.toLowerCase())
                      el?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-slate-500 hover:text-blue-400 text-sm transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">Meet Out CEO & CMO</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold mb-5 text-sm" style={{ fontFamily: 'var(--font-display)' }}>Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+8801996525342" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">
                  +880 1996-525342
                </a>
              </li>
              <li>
                <a href="tel:+8801874404353" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">
                  +880 1874-404353
                </a>
              </li>
              <li>
                <a href="mailto:mashhudur.rahman.dev@gmail.com" className="text-slate-500 hover:text-blue-400 text-sm transition-colors break-all">
                  mashhudur.rahman.dev@gmail.com
                </a>
              </li>
              <li className="pt-2 flex flex-col gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-blue-400 text-sm hover:text-blue-300 transition-colors"
                >
                  View All Projects <ArrowUpRight className="w-3 h-3" />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-blue-400 text-sm hover:text-blue-300 transition-colors"
                >
                  View All Blog <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} NodeCraft Agency. All rights reserved.</p>
          <p>Built with Next.js · TypeScript · Tailwind CSS</p>
          <p>Built with 💝 By <span className='font-mono text-gray-400 font-bold cursor'>NodeCraftAgency</span></p>
        </div>
      </div>

     
    </footer>
  )
}
