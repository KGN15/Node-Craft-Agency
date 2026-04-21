"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { use } from "react";
import Image from "next/image";
export default function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="blob blob-blue w-[500px] h-[500px] top-0 right-0 opacity-15" />
        <div className="blob blob-indigo w-96 h-96 bottom-0 left-0 opacity-10" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-10"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Projects
            </Link>
          </motion.div>

          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className={`rounded-3xl bg-gradient-to-br ${product.color} relative overflow-hidden flex items-center justify-center min-h-72`}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)",
                }}
              />
              <div className="relative w-full h-[400px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">
                {product.category}
              </span>
              <h1
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {product.title}
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {product.longDescription}
              </p>

              {/* Tech stack */}
              <div className="mb-8">
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm font-mono border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {product.liveUrl && (
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 w-fit"
                >
                  View Live Project <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-10 border border-white/8 mb-16"
          >
            <h2
              className="text-2xl font-bold text-white mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center glass rounded-2xl p-12 border border-blue-500/20 mb-20 relative overflow-hidden"
          >
            <div className="blob blob-blue w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
            <div className="relative z-10">
              <h2
                className="text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Want something like this?
              </h2>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                Let&apos;s discuss your project. Book a free 30-minute
                consultation call with our team.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300"
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>

          {/* Related projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl font-bold text-white mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              More Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.id}`}
                  className="block group"
                >
                  <div className="product-card glass rounded-xl overflow-hidden border border-white/8 hover:border-blue-500/30">
                    <div className="object-cover">
                      <div className="relative w-full h-40 overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-1">
                        {p.category}
                      </p>
                      <h3
                        className="text-white font-bold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
