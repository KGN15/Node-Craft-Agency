"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/lib/loadingContext";

import Image from "next/image";
export default function LoadingScreen() {
  const { isLoaded } = useLoading();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("loaded");
    if (alreadyLoaded) {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 95)); // max 95%
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      setProgress(100);
      sessionStorage.setItem("loaded", "true");

      setTimeout(() => {
        setVisible(false);
      }, 500);
    }
  }, [isLoaded]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508]"
        >
          {/* Background blobs */}
          <div className="blob blob-blue w-96 h-96 top-1/4 left-1/4 opacity-40" />
          <div className="blob blob-indigo w-80 h-80 bottom-1/4 right-1/4 opacity-30" />

          <div className="relative z-10 text-center px-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "backOut" }}
              className="mb-10 flex justify-center"
            >
              <div className="relative">
                <Image
                  src="/NodeCraftAgency.png"
                  alt="NodeCraftAgency Logo"
                  width={100}
                  height={100}
                />
                <div className="absolute -inset-1 rounded-xl bg-blue-500/20 blur-md -z-10 animate-pulse" />
              </div>
            </motion.div>

            {/* Main text */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="gradient-text">We will make your</span>
              <br />
              <span className="text-white">imagination come true</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-slate-500 text-sm tracking-[0.3em] uppercase mb-16 font-mono"
            >
              NodeCraft Agency
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-64 mx-auto"
            >
              <div className="h-[1px] bg-white/10 rounded-full overflow-hidden mb-3">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <span className="text-slate-600 text-xs font-mono">
                {progress}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
