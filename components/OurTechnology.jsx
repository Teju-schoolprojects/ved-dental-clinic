"use client";

import React from "react";
import { motion } from "framer-motion";
import ThreeCanvas from "./ThreeCanvas";
import TechShowcase from "./TechShowcase";
import { Target, Zap, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export default function OurTechnology() {
  const benefits = [
    {
      title: "Micron Precision",
      description: "Sub-millimeter 3D diagnostic scans ensure computer-guided accuracy for implants and prosthetics.",
      icon: Target,
    },
    {
      title: "Fast Recovery",
      description: "Minimally invasive digital surgical templates reduce soft-tissue disruption and accelerate healing time.",
      icon: Zap,
    },
    {
      title: "Maximum Comfort",
      description: "Replaces traditional gooey impression trays with comfortable 3D optical sweeps and gentle lasers.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="our-technology" className="py-28 bg-[#fafbfe] relative overflow-hidden">
      {/* Background Soft Glow Blobs for Airy Feel */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-brand-light/70 blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-brand-accent/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: 3D Visual / Image Placeholder Area */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 h-[420px] sm:h-[500px] lg:h-[560px] rounded-3xl bg-white border border-gray-100 shadow-premium relative flex items-center justify-center p-6 group"
          >
            {/* Visual Header Tag */}
            <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-brand-light/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-blue/10">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue">
                3D Holographic Scanner
              </span>
            </div>

            {/* Subtle Grid Backdrop */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0066ff_1px,transparent_1px)] bg-[size:20px_20px] rounded-3xl pointer-events-none"></div>

            {/* Interactive 3D Canvas / Image Display */}
            <div className="h-full w-full">
              <ThreeCanvas className="h-full w-full">
                <TechShowcase />
              </ThreeCanvas>
            </div>
          </motion.div>

          {/* Right Column: Text Description Block & Benefits List */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Category Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full badge-gradient text-brand-blue font-extrabold text-xs uppercase tracking-widest w-fit mb-4"
            >
              Next-Gen Diagnostics
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.15]"
            >
              State-Of-The-Art 3D Dental <br />
              <span className="text-gradient-accent">Imaging & Precision Tech</span>
            </motion.h2>

            {/* Description Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-brand-text-muted font-medium text-xs sm:text-sm leading-relaxed space-y-3"
            >
              <p>
                At Ved Dental Clinic & Implant Center, we replace conventional dental guesswork with 3D digital predictability. 
                Our clinic is equipped with Cone Beam Computed Tomography (CBCT) and optical intraoral scanners that capture high-resolution 3D anatomical structures in seconds.
              </p>
              <p>
                Whether you are receiving dental implants or undergoing a custom smile makeover, our technology ensures virtual treatment planning before any procedure begins.
              </p>
            </motion.div>

            {/* Icon-Based Features List Highlight (Benefits) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100"
            >
              {benefits.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="flex flex-col items-start group">
                    <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h4 className="mt-3 text-sm font-bold text-brand-dark tracking-tight">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[11px] text-brand-text-muted font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* Matching CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="#book"
                className="inline-flex items-center justify-center bg-brand-blue text-white font-bold text-sm px-8 py-4.5 rounded-full hover:bg-brand-blue/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
