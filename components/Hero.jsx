"use client";

import React from "react";
import { motion } from "framer-motion";
import ThreeCanvas from "./ThreeCanvas";
import ToothModel from "./ToothModel";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-brand-bg"
    >
      {/* Background Soft Glow Blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-light/60 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-brand-accent/5 blur-[150px] pointer-events-none animate-pulse-slow"></div>
      
      {/* Background Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0a1d37 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full badge-gradient text-brand-blue font-bold text-xs uppercase tracking-widest mx-auto lg:mx-0 w-fit mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 fill-brand-blue/15" />
            <span>Ambernath's Premier Dental Center</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-brand-dark"
          >
            Advanced Dental Care & <br className="hidden md:inline" />
            <span className="text-gradient-accent">Implant Solutions</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-brand-text-muted font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Experience modern dentistry designed around your comfort and smile. 
            At Ved Dental, we combine world-class medical expertise with cutting-edge 3D technology.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#book"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-blue text-white font-bold text-sm px-8 py-4.5 rounded-full hover:bg-brand-blue/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white border border-gray-200 text-brand-dark font-bold text-sm px-8 py-4.5 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
            >
              Explore Treatments
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-xs font-semibold text-brand-text-muted"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4.5 h-4.5 text-brand-blue" />
              <span>NABH Standards Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4.5 h-4.5 text-brand-blue" />
              <span>ISO 9001:2015 Certified Clinic</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: 3D Canvas & Studio Render Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-5 h-[380px] sm:h-[450px] lg:h-[550px] relative w-full flex items-center justify-center group"
        >
          {/* Rotating Backdrop Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-brand-blue/5 border border-brand-blue/10 animate-spin-slow flex items-center justify-center mask-radial">
            <div className="w-56 h-56 rounded-full border border-dashed border-brand-blue/20"></div>
          </div>
          
          <ThreeCanvas className="h-full w-full">
            <ToothModel />
          </ThreeCanvas>

          {/* Floating Premium Studio Render Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-3 left-4 right-4 sm:left-8 sm:right-8 bg-white/95 backdrop-blur-md border border-gray-100/80 p-4 rounded-2xl shadow-xl flex flex-col items-center text-center z-20 group-hover:translate-y-[-2px] transition-transform duration-300 max-w-xs mx-auto"
          >
            {/* Compact Icon with Soft Circular Shadow sitting comfortably above */}
            <div className="relative mb-2.5 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#e0f2fe]/15 rounded-full blur-xl transform scale-150"></div>
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-100 bg-white shadow-sm relative z-10 flex items-center justify-center p-1">
                <img
                  src="/assets/hero_dental_implant_3d.jpg"
                  alt="Ceramic Crown & Titanium Implant Fusion 3D Render"
                  className="w-full h-full object-contain scale-[0.6] transform-gpu"
                />
              </div>
            </div>

            {/* Aligned Text below */}
            <div className="flex items-center justify-center gap-1 text-[10px] font-extrabold uppercase text-brand-blue tracking-wider">
              <Sparkles className="w-3 h-3 fill-brand-blue/10 stroke-[2]" />
              <span>Biocompatible Fusion</span>
            </div>
            <p className="text-xs font-bold text-brand-dark mt-1 leading-tight">
              Glossy Ceramic Crown & Titanium Implant
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
