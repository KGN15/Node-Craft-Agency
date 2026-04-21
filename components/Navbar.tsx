'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { GoArrowUpRight } from 'react-icons/go'

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'Products', href: '/products' },
  { label: 'Plan', href: '/#plan' },
  { label: 'Testimonial', href: '/#testimonial' },
  { label: 'Blog', href: '/blog' },
  { label: 'Meet Our CEO & CMO', href: '/about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    }
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4  z-50 w-full px-4 flex justify-center"
    >
      {/* FLOATING GLASS CARD */}
      <div
        className={`w-full max-w-4xl  rounded-3xl border transition-all duration-500 backdrop-blur-2xl shadow-2xl ${
          scrolled || open
            ? 'bg-white/10 border-white/20'
            : 'bg-transparent border-none'
        }`}
        style={{
          boxShadow:
            '0 10px 40px rgba(0,0,0,0.25), 0 0 60px rgba(59,130,246,0.15)',
        }}
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-[70px] px-5">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image src="/NodeCraftAgency.png" alt="Logo" width={48} height={48} />
          </Link>

          {/* HAMBURGER (smooth morph) */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-[5px] p-2"
          >
            <span
              className={`h-[2px] bg-white transition-all duration-300 ${
                open ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'
              }`}
            />
            <span
              className={`h-[2px] bg-white transition-all duration-300 ${
                open ? 'opacity-0' : 'w-4'
              }`}
            />
            <span
              className={`h-[2px] bg-white transition-all duration-300 ${
                open ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-3'
              }`}
            />
          </button>
        </div>

        {/* DROPDOWN */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <ul className="grid grid-cols-2 gap-3">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className="flex items-center justify-center gap-2 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                      >
                        <GoArrowUpRight className="text-blue-400" />
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}