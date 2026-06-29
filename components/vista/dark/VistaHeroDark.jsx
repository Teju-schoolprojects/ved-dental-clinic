"use client";

import React from "react";
import { motion } from "framer-motion";
import ThreeCanvas from "../../ThreeCanvas";
import ToothModel from "../../ToothModel";
import { ArrowRight, Sparkles, Star, ShieldCheck, Cpu, CheckCircle2 } from "lucide-react";

export default function VistaHeroDark() {
  const telemetryPoints = [
    "Sub-Millimeter 3D Precision",
    "Zero Impression Trays",
    "Computerized Painless Anesthesia",
    "Acoustic Noise-Isolated Suites",
    "Hospital-Grade Sterilization",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-[#050E1A] text-white"
    >
      {/* Background Central Portal Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-teal-400/15 blur-[120px] pointer-events-none"></div>

      {/* Cybernetic Wireframe Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#00e5ff 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-6 w-full flex-1 flex flex-col items-center justify-center text-center relative z-10 my-auto">
        
        {/* Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-cyan-400/30 text-cyan-400 font-extrabold text-xs uppercase tracking-widest mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.2)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Next-Gen Dental Architecture</span>
        </motion.div>

        {/* Centered Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl"
        >
          Clarity in Motion. <br />
          <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Precision in Dental Care.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base text-gray-300 font-medium max-w-2xl leading-relaxed"
        >
          Architecturally engineered dental care built for busy professionals and families. Experience high-precision digital treatment in a quiet, noise-isolated studio lounge.
        </motion.p>

        {/* Dual Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#book"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-extrabold text-xs sm:text-sm px-9 py-4 rounded-full shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_40px_rgba(0,229,255,0.8)] transition-all duration-300 hover:scale-105 group"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 border border-white/15 text-white font-bold text-xs sm:text-sm px-9 py-4 rounded-full hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-md"
          >
            Explore Studio Philosophy
          </a>
        </motion.div>

        {/* Central 3D Portal Gem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 h-[280px] sm:h-[340px] w-full max-w-md relative flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-pulse-slow mask-radial"></div>
          <ThreeCanvas className="h-full w-full">
            <ToothModel />
          </ThreeCanvas>
        </motion.div>

      </div>

      {/* Continuous Live Telemetry Ticker Bar */}
      <div className="w-full border-t border-b border-white/10 bg-black/40 backdrop-blur-md py-3.5 overflow-hidden relative z-20">
        <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap text-xs font-bold text-gray-400 uppercase tracking-widest">
          {telemetryPoints.concat(telemetryPoints).map((item, index) => (
            <div key={index} className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-gray-200">{item}</span>
              <span className="text-white/20 mx-4">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
