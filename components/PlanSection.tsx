"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { plans, featureMatrix } from "@/lib/data";
import React from "react";
import {
  Clock,
  Zap,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Key,
} from "lucide-react";

/* ─── tiny helper ─── */
function CellValue({ val }: { val: boolean | string }) {
  if (val === true)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40">
        <Check className="w-3.5 h-3.5 text-emerald-400" />
      </span>
    );
  if (val === false)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/[0.04] border border-white/[0.08]">
        <X className="w-3 h-3 text-slate-600" />
      </span>
    );
  return (
    <span className="text-[11px] font-mono text-blue-300 leading-tight text-center block px-1">
      {val}
    </span>
  );
}

export default function PlanSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    featureMatrix[0].category,
  );

  const planIds = plans.map((p) => p.id);

  return (
    <section id="plan" className="relative py-24 sm:py-32 overflow-hidden">
      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] blob blob-blue opacity-[0.08]" />
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 blob blob-cyan opacity-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 blob blob-indigo opacity-10" />

      {/* ── Grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-400 font-mono text-xs tracking-[0.25em] uppercase">
              Transparent Pricing
            </span>
          </motion.div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Pick Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Every plan ships with a free AI chatbot. No hidden fees. No
            surprises.
          </p>
        </motion.div>

        {/* ════════════════════════════════════
            PLAN CARDS
        ════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-24">
          {plans.map((plan, i) => {
            const discount = plan.discount ?? 0;

            const hasDiscount = discount > 0;

            const finalPriceBDT = hasDiscount
              ? Math.round(plan.priceBDT * (1 - discount / 100))
              : plan.priceBDT;

            const finalPriceUSD = hasDiscount
              ? Math.round(plan.priceUSD * (1 - discount / 100))
              : plan.priceUSD;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="relative group"
              >
                {/* outer glow layer */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%,${plan.glowColor},transparent 70%)`,
                  }}
                />
                {/* featured permanent glow */}
                {plan.featured && (
                  <div
                    className="absolute -inset-px rounded-2xl blur-md"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%,${plan.glowColor},transparent 60%)`,
                    }}
                  />
                )}
                {(plan.discount ?? 0) > 0 && (
                  <div className="absolute top-1 left-[-50px] rotate-[-45deg] bg-red-800 text-white text-[20px] font-bold px-10 py-1 shadow-lg">
                    {plan.discount}% OFF
                  </div>
                )}
                <div
                  className={`relative h-full rounded-2xl border overflow-hidden glass flex flex-col transition-all duration-500 ${
                    plan.featured
                      ? "border-white/20 shadow-2xl"
                      : "border-white/[0.08] hover:border-white/15"
                  }`}
                >
                  {/* Top gradient line */}
                  <div
                    className={`h-[2px] bg-gradient-to-r ${plan.gradient} flex-shrink-0`}
                  />

                  {/* Subtle top inner glow */}
                  <div
                    className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
                    style={{
                      background: `linear-gradient(to bottom,${plan.glowColor},transparent)`,
                      opacity: plan.featured ? 0.5 : 0.2,
                    }}
                  />

                  <div className="relative p-6 sm:p-7 flex flex-col flex-1">
                    {/* Badge */}
                    {plan.badge && (
                      <div className="absolute top-5 right-5">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider border ${
                            plan.id === "master-premium"
                              ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
                              : "bg-blue-500/20 border-blue-500/40 text-blue-300"
                          }`}
                        >
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    {/* Name & tagline */}
                    <div className="mb-5">
                      <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                        {plan.icon} Package
                      </p>
                      <h3
                        className="text-white text-xl font-bold leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-slate-500 text-xs mt-1">
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-white/[0.07]">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        {/* USD */}
                        <div className="flex items-baseline gap-1">
                          {hasDiscount && (
                            <span className="text-lg text-red-700 line-through opacity-70">
                              ${plan.priceUSD}
                            </span>
                          )}
                          <span className="text-3xl font-bold text-yellow-400">
                            ${finalPriceUSD}
                          </span>
                        </div>

                        <span className="text-slate-600 text-sm">/</span>

                        {/* BDT */}
                        <div className="flex items-baseline gap-2">
                          {hasDiscount && (
                            <span className="text-lg text-red-700 line-through opacity-70">
                              ৳{plan.priceBDT.toLocaleString()}
                            </span>
                          )}

                          <span
                            className={`text-3xl font-bold bg-gradient-to-r text-green-700  ${plan.gradient} bg-clip-text`}
                          >
                            ৳{finalPriceBDT.toLocaleString()}
                          </span>
                        </div>

                        {/* Discount Tag */}
                        {hasDiscount && (
                          <span className="text-xs font-bold text-red-400">
                            -{plan.discount}%
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-slate-500 text-xs">
                        <Clock className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                        Delivery: {plan.delivery}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 mb-6 group/btn ${
                        plan.featured
                          ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:opacity-90 hover:-translate-y-0.5`
                          : "border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>

                    {/* Feature highlights (top 4 only — full matrix below) */}
                    <div className="space-y-2.5 mb-6 flex-1">
                      {featureMatrix
                        .flatMap((cat) => cat.items)
                        .filter((item) => item.plans[plan.id] !== false)
                        .slice(0, 6)
                        .map((item) => (
                          <div
                            key={item.label}
                            className="flex items-start gap-2.5"
                          >
                            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-emerald-400" />
                            </span>
                            <span className="text-slate-300 text-xs leading-relaxed">
                              {item.label}
                              {typeof item.plans[plan.id] === "string" && (
                                <span className="ml-1 text-blue-400 font-mono text-[10px]">
                                  ({item.plans[plan.id]})
                                </span>
                              )}
                            </span>
                          </div>
                        ))}
                    </div>

                    {/* Bonus box */}
                    <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-3.5 mb-4">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Zap className="w-3.5 h-3.5 text-yellow-400" />
                        <span className="text-yellow-400 text-[10px] font-mono uppercase tracking-wider">
                          Free Bonus
                        </span>
                      </div>
                      <div className="space-y-1">
                        {plan.bonus.map((b) => (
                          <p key={b} className="text-slate-300 text-xs">
                            {b}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Extras */}
                    {plan.extras.length > 0 && (
                      <div>
                        <p className="text-slate-600 text-[10px] font-mono uppercase tracking-wider mb-2">
                          Add-ons
                        </p>
                        <div className="space-y-1">
                          {plan.extras.map((extra) => (
                            <p
                              key={extra}
                              className="text-slate-600 text-[11px] leading-relaxed"
                            >
                              + {extra}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ════════════════════════════════════
            FULL COMPARISON TABLE
        ════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span className="text-slate-400 font-mono text-xs tracking-[0.25em] uppercase">
                Full Comparison
              </span>
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What's Included in Each Plan
            </h3>
          </div>

          {/* Scrollable table wrapper */}
          <div className="rounded-2xl border border-white/[0.08] overflow-hidden glass">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                {/* Table head — plan names */}
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="text-left p-4 sm:p-5 text-slate-500 text-xs font-mono uppercase tracking-widest w-48 sm:w-56">
                      Feature
                    </th>
                    {plans.map((plan) => (
                      <th
                        key={plan.id}
                        className="p-3 sm:p-4 text-center min-w-[90px]"
                      >
                        <div className="flex flex-col items-center gap-1">
                          <div
                            className={`w-7 h-7 rounded-lg bg-gradient-to-br ${plan.gradient} flex items-center justify-center text-xs mb-0.5`}
                            style={{
                              boxShadow: `0 4px 16px ${plan.glowColor}`,
                            }}
                          >
                            {plan.id === "master-premium"
                              ? "💎"
                              : plan.id === "ecommerce"
                                ? "🛒"
                                : "·"}
                          </div>
                          <span
                            className={`text-[11px] font-bold leading-tight text-center ${
                              plan.featured ? "text-white" : "text-slate-400"
                            }`}
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {plan.name}
                          </span>
                          {plan.badge && (
                            <span
                              className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full border ${
                                plan.id === "master-premium"
                                  ? "bg-amber-500/20 border-amber-500/30 text-amber-300"
                                  : "bg-blue-500/20 border-blue-500/30 text-blue-300"
                              }`}
                            >
                              {plan.badge}
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {featureMatrix.map((category, catIdx) => (
                    <React.Fragment key={category.category}>
                      {/* Category header row — collapsible */}
                      <tr
                        key={`cat-${catIdx}`}
                        className="cursor-pointer select-none border-t border-white/[0.05]"
                        onClick={() =>
                          setOpenCategory(
                            openCategory === category.category
                              ? null
                              : category.category,
                          )
                        }
                      >
                        <td
                          colSpan={planIds.length + 1}
                          className="px-4 sm:px-5 py-3 bg-white/[0.025]"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-slate-300 text-xs font-semibold tracking-wide">
                              {category.category}
                            </span>
                            {openCategory === category.category ? (
                              <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                            )}
                          </div>
                        </td>
                      </tr>

                      {/* Feature rows */}
                      <AnimatePresence initial={false}>
                        {openCategory === category.category &&
                          category.items.map((item, rowIdx) => (
                            <motion.tr
                              key={`row-${catIdx}-${rowIdx}`}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{
                                duration: 0.18,
                                delay: rowIdx * 0.03,
                              }}
                              className={`border-t border-white/[0.04] ${
                                rowIdx % 2 === 0 ? "" : "bg-white/[0.015]"
                              }`}
                            >
                              {/* Feature label */}
                              <td className="px-4 sm:px-5 py-3 text-slate-400 text-xs leading-snug align-middle">
                                {item.label}
                              </td>

                              {/* Plan cells */}
                              {plans.map((plan) => (
                                <td
                                  key={plan.id}
                                  className={`px-2 py-3 text-center align-middle ${
                                    plan.featured ? "bg-white/[0.015]" : ""
                                  }`}
                                >
                                  <div className="flex items-center justify-center">
                                    <CellValue val={item.plans[plan.id]} />
                                  </div>
                                </td>
                              ))}
                            </motion.tr>
                          ))}
                      </AnimatePresence>
                    </React.Fragment>
                  ))}

                  {/* Price footer row */}
                  <tr className="border-t-2 border-white/10">
                    <td className="px-4 sm:px-5 py-5 text-slate-400 text-xs font-mono uppercase tracking-widest">
                      Total Price
                    </td>
                    {plans.map((plan) => (
                      <td
                        key={plan.id}
                        className={`px-2 py-5 text-center ${plan.featured ? "bg-white/[0.02]" : ""}`}
                      >
                        <div className="flex flex-col items-center gap-0.5">
                          <span
                            className={`text-2xl font-bold bg-gradient-to-r text-green-800 ${plan.gradient} bg-clip-text `}
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            ৳{plan.priceBDT.toLocaleString()}
                          </span>
                          <span className="text-slate-600 text-[10px] font-mono">
                            ${plan.priceUSD}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* CTA footer row */}
                  <tr className="border-t border-white/[0.06] bg-white/[0.02]">
                    <td className="px-4 sm:px-5 py-4" />
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-2 py-4 text-center">
                        <a
                          href="#contact"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .getElementById("contact")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className={`inline-flex items-center justify-center px-3 py-2 rounded-lg text-[11px] font-semibold transition-all duration-300 ${
                            plan.featured
                              ? `bg-gradient-to-r ${plan.gradient} text-white hover:opacity-90`
                              : "border border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                          }`}
                        >
                          Choose
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 text-xs sm:text-sm mt-10"
        >
          All prices include a free 30-minute consultation call. Contact us for
          custom requirements.
        </motion.p>
      </div>
    </section>
  );
}
