"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightRays from "@/components/LightRays";
import {
  Mail,
  Phone,
  Code2,
  Megaphone,
  ArrowLeft,
  Linkedin,
  Github,
  Globe,
} from "lucide-react";

const team = [
  {
    name: "Mashhudur Rahman",
    role: "Founder & CEO",
    title: "Full Stack Developer",
    phone: "+880 1996-525342",
    email: "mashhudur.rahman.dev@gmail.com",
    bio: "Mashhudur is the technical backbone of NodeCraft Agency. With deep expertise in Next.js, TypeScript, Node.js, and MongoDB, he architects scalable systems that power real businesses. He founded NodeCraft with a single mission — to bring world-class web development to Bangladeshi businesses at an accessible price.",
    skills: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "REST API",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    icon: Code2,
    gradient: "from-blue-600 via-cyan-500 to-blue-700",
    glowColor: "rgba(59,130,246,0.4)",
    initial: "MR",
    tag: "CEO",
    github: "https://github.com/KGN15",
    linkedin: "https://www.linkedin.com/in/mashhudur--rahman",
    website: "https://mashhudurrahman.vercel.app/",
  },
  {
    name: "Mehraz Hossain",
    role: "Co-Founder & CMO",
    title: "Frontend Developer & Marketing Lead",
    phone: "+880 1874-404353",
    email: "rnjrohan786@gmail.com",
    bio: "Mehraz brings the perfect blend of design sensibility and marketing strategy to NodeCraft. As both a Frontend Developer and Marketing Lead, he ensures that every product we ship is not only visually stunning but also positioned to succeed in the market. He's the creative force behind NodeCraft's brand identity.",
    skills: [
      "React",
      "Tailwind CSS",
      "Figma",
      "SEO",
      "Digital Marketing",
      "Brand Strategy",
      "UI/UX",
      "Social Media",
    ],
    icon: Megaphone,
    gradient: "from-violet-600 via-purple-500 to-indigo-600",
    glowColor: "rgba(139,92,246,0.4)",
    initial: "MH",
    tag: "CMO",
    github: "https://github.com/rnjrohan786-cmyk",
    linkedin: "https://www.linkedin.com/in/mirajul-hossain-193b0b3b9/",
    website: "https://rnjrohan786-cmyk.github.io/ASSINTMENT-3/",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "2+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" },
];

const values = [
  {
    icon: "⚡",
    title: "Speed Without Compromise",
    desc: "We deliver fast — but never at the cost of quality. Every project is built to perform.",
  },
  {
    icon: "🎯",
    title: "Results-Driven Approach",
    desc: "We don't just build websites. We build digital systems designed to convert visitors into paying customers.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    desc: "Our relationship with clients doesn't end at delivery. We're with you every step of the way.",
  },
  {
    icon: "🔒",
    title: "Security & Reliability",
    desc: "Every system we build follows best practices in security, performance, and scalability.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen pt-24 sm:pt-32 pb-0 overflow-x-hidden">

        {/* ── LightRays background (absolute, behind everything) ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            height: "700px",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#3135d8"
            raysSpeed={1.4}
            lightSpread={0.8}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.3}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>

        {/* ── Ambient blobs ── */}
        <div className="pointer-events-none absolute top-0 left-1/4 w-[500px] h-[400px] blob blob-blue opacity-10" />
        <div className="pointer-events-none absolute top-20 right-0 w-[400px] h-[350px] blob blob-indigo opacity-8" />
        <div className="pointer-events-none absolute bottom-1/3 left-0 w-80 h-80 blob blob-cyan opacity-8" />

        {/* ── Grid overlay texture ── */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            zIndex: 0,
          }}
        />

        {/* ── Main content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          {/* ── Page header ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 sm:mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <p className="text-blue-400 font-mono text-xs tracking-[0.25em] uppercase">
                The Team
              </p>
            </motion.div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Meet Our{" "}
              <span className="gradient-text">CEO & CMO</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
              Two builders obsessed with crafting digital experiences that
              actually move the needle for businesses.
            </p>
          </motion.div>

          {/* ── Team cards ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-20 sm:mb-28">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative group"
              >
                {/* Card glow */}
                <div
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${member.glowColor} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative glass rounded-3xl border border-white/[0.08] group-hover:border-white/[0.15] transition-all duration-500 overflow-hidden h-full">
                  {/* Top gradient bar */}
                  <div className={`h-[2px] bg-gradient-to-r ${member.gradient}`} />

                  {/* Subtle inner glow at top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-32 opacity-[0.07]"
                    style={{
                      background: `linear-gradient(to bottom, ${member.glowColor}, transparent)`,
                    }}
                  />

                  <div className="relative p-5 sm:p-8">

                    {/* ── Header: Avatar + Name + Social ── */}
                    <div className="flex items-start gap-4 mb-6">

                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
                          style={{
                            boxShadow: `0 8px 32px ${member.glowColor}`,
                          }}
                        >
                          <span
                            className="text-white font-bold text-lg sm:text-xl"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {member.initial}
                          </span>
                        </div>
                        <div className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-mono font-bold leading-tight">
                          {member.tag}
                        </div>
                      </div>

                      {/* Name & role — takes remaining space */}
                      <div className="flex-1 min-w-0">
                        <h2
                          className="text-white text-lg sm:text-xl font-bold mb-0.5 leading-snug"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {member.name}
                        </h2>
                        <p
                          className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-semibold text-sm mb-1`}
                        >
                          {member.role}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <member.icon className="w-3 h-3 text-slate-500 flex-shrink-0" />
                          <span className="text-slate-500 text-xs truncate">
                            {member.title}
                          </span>
                        </div>
                      </div>

                      {/* Social icons */}
                      <div className="flex flex-col gap-1.5 flex-shrink-0">
                        {[
                          { icon: Github, href: member.github, label: "GitHub" },
                          { icon: Linkedin, href: member.linkedin, label: "LinkedIn" },
                          { icon: Globe, href: member.website, label: "Website" },
                        ].map(({ icon: Icon, href, label }, j) => (
                          <a
                            key={j}
                            href={href}
                            aria-label={label}
                            target="_blank"
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all"
                          >
                            <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/[0.06] mb-5" />

                    {/* Bio */}
                    <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <p className="text-slate-600 text-[10px] font-mono uppercase tracking-widest mb-3">
                        Expertise
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 text-[11px] font-mono border border-white/[0.07] hover:border-white/15 hover:bg-white/[0.07] transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2 pt-5 border-t border-white/[0.06]">
                      <a
                        href={`tel:${member.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group/link"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover/link:border-blue-500/30 group-hover/link:bg-blue-500/10 transition-all">
                          <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-mono">
                          {member.phone}
                        </span>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group/link"
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover/link:border-blue-500/30 group-hover/link:bg-blue-500/10 transition-all">
                          <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-mono break-all">
                          {member.email}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Stats ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative glass rounded-3xl border border-white/[0.08] p-8 sm:p-10 md:p-12 mb-20 sm:mb-28 overflow-hidden"
          >
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none">
              <div className="blob blob-blue w-80 h-56 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center group"
                >
                  <div
                    className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Our Values ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 sm:mb-28"
          >
            <div className="text-center mb-10 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <p className="text-blue-400 font-mono text-xs tracking-[0.25em] uppercase">
                  What Drives Us
                </p>
              </motion.div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-blue-500/25 transition-all duration-300 group"
                >
                  <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300 origin-left">
                    {val.icon}
                  </span>
                  <h3
                    className="text-white font-bold text-base sm:text-lg mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Story section ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 sm:mb-28"
          >
            <div className="relative glass rounded-3xl border border-white/[0.08] p-7 sm:p-12 lg:p-16 overflow-hidden">
              {/* Decorative blobs inside card */}
              <div className="blob blob-blue w-72 h-72 top-0 right-0 opacity-[0.08] pointer-events-none" />
              <div className="blob blob-indigo w-56 h-56 bottom-0 left-0 opacity-[0.08] pointer-events-none" />

              {/* Decorative quote mark */}
              <div
                className="absolute top-6 left-8 text-8xl text-white/[0.04] font-serif leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <p className="text-blue-400 font-mono text-xs tracking-[0.25em] uppercase">
                    Our Story
                  </p>
                </motion.div>

                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Why We Started NodeCraft
                </h2>
                <p className="text-slate-400 leading-relaxed mb-5 text-sm sm:text-base">
                  We noticed that most Bangladeshi businesses were either paying
                  way too much for mediocre websites, or settling for generic
                  templates that didn&apos;t represent their brand at all.
                </p>
                <p className="text-slate-400 leading-relaxed mb-5 text-sm sm:text-base">
                  Mashhudur and Mehraz joined forces with one goal — to offer
                  enterprise-grade web development at prices that small and
                  medium businesses could actually afford. No bloat, no
                  middlemen, just clean code and results.
                </p>
                <p className="text-slate-200 leading-relaxed font-medium text-sm sm:text-base">
                  Today, NodeCraft Agency is the go-to development partner for
                  businesses that are serious about their digital presence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── CTA section ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 sm:mb-24"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to build something great?
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto px-4 text-sm sm:text-base">
              Let&apos;s schedule a free 30-minute call and figure out exactly
              what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link
                href="/#contact"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/products"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/25 font-semibold transition-all duration-300 glass hover:-translate-y-0.5 text-sm sm:text-base"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </>
  );
}