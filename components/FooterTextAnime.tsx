"use client";
import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function FooterTextAnime({
  className = "",
}: {
  className?: string;
}) {
  const text = "NodeCraftAgency";
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // স্মুথ মুভমেন্টের জন্য স্প্রিং কনফিগ
  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={` relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl ${className}`}
      
    >
      <h2 className="text-[#090909] select-none text-[10vw] font-black tracking-tighter  md:text-[10vw] leading-none uppercase" >
        {text}
      </h2>

      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{
          opacity: isHovered ? 1 : 0,
          WebkitMaskImage: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(120px circle at ${x}px ${y}px, black 0%, transparent 100%)`
          ),
          maskImage: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(120px circle at ${x}px ${y}px, black 0%, transparent 100%)`
          ),
          transition: "opacity 0.4s ease",
        }}
      >
        <h2 className="select-none text-[8vw] font-black tracking-tighter text-white md:text-[10vw] leading-none uppercase" style={{ WebkitTextStroke: "1px white" }}>
          {text}
        </h2>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(250px circle at ${x}px ${y}px, rgba(255,255,255,0.03), transparent 70%)`
          ),
        }}
      />
    </div>
  );
}
