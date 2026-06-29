"use client";

import React from "react";
import { motion } from "framer-motion";
import ThreeCanvas from "../ThreeCanvas";
import ToothModel from "../ToothModel";
import { ArrowRight, Sparkles, Star, ShieldCheck, Cpu } from "lucide-react";

export default function VistaHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#fafbfc]"
    >
      {/* Soft Architectural Glow Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-teal-500/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[480px] h-[480px] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none"></div>

      {/* Subtle Architectural Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #028090 1px, transparent 1px), linear-gradient(to bottom, #028090 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-500/20 text-teal-700 font-extrabold text-xs uppercase tracking-widest mx-auto lg:mx-0 w-fit mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Comprehensive Modern Dental Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-gray-900"
          >
            A Clearer Vision for <br />
            <span className="bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
              Gentle, High-Precision Care
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-gray-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Experience stress-free, modern dental care in an architecturally designed studio built around your peace of mind. Exceptional clinical outcomes for busy professionals and families.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#book"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-teal-600 text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-teal-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <span>Schedule Your Visit</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#treatments"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white border border-gray-200 text-gray-800 font-bold text-sm px-8 py-4 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
            >
              Explore Studio Treatments
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-xs font-semibold text-gray-600"
          >
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>4.9/5 Google Rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-teal-600" />
              <span>Digital 3D Scans (No Gooey Trays)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Painless Anesthesia Tech</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: 3D Studio Artifact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-5 h-[380px] sm:h-[460px] lg:h-[540px] relative w-full flex items-center justify-center"
        >
          <div className="absolute w-72 h-72 rounded-full bg-teal-500/5 border border-teal-500/15 animate-spin-slow flex items-center justify-center mask-radial"></div>
          <ThreeCanvas className="h-full w-full">
            <ToothModel />
          </ThreeCanvas>
        </motion.div>

      </div>
    </section>
  );
}
