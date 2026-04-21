"use client";

import { motion } from "framer-motion";
import Aurora from "./Aurora";
import GradientText from "./GradientText";
import { useEffect } from "react";
import { useLoading } from "@/lib/loadingContext";
import Link from "next/link";
export default function HeroSection() {
  const { setIsLoaded } = useLoading();
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 🌌 FULL Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#485cee", "#150424", "#f3f3f3"]}
          blend={0.15}
          amplitude={1.0}
          speed={1.3}
        />
      </div>

      {/* 🔥 Optional dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] z-[2]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 🚀 CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8 text-white"
        >
          We build systems <br />
          <GradientText
            colors={["#141dd8", "#000000", "#ffffff", "#4351aa"]}
            animationSpeed={2}
            showBorder={false}
            className="custom-class"
          >
            that help your business
          </GradientText>
          grow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          From sleek landing pages to full-scale e-commerce platforms — we craft
          digital experiences that convert visitors into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#plan"
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition"
          >
            View Plans & Pricing
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            Get Free Consultation
          </a>
          <Link
            href="/about"
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition"
          >
            Meet our CEO & CMO
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-10 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </div>
    </section>
  );
}
