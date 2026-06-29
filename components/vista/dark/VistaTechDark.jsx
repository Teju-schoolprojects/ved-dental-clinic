"use client";

import React from "react";
import { motion } from "framer-motion";
import ThreeCanvas from "../../ThreeCanvas";
import TechShowcase from "../../TechShowcase";
import { Target, Zap, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export default function VistaTechDark() {
  const benefits = [
    { title: "Micron Precision", description: "Sub-millimeter 3D optical scans ensure computer-guided placement accuracy.", icon: Target },
    { title: "Fast Recovery", description: "Minimally invasive digital templates reduce surgical disruption and accelerate healing.", icon: Zap },
    { title: "Maximum Comfort", description: "Replaces traditional gooey trays with comfortable 3D optical sweeps.", icon: ShieldCheck },
  ];

  return (
    <section id="tech" className="py-28 bg-[#0B132B] text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 h-[420px] sm:h-[500px] lg:h-[560px] rounded-3xl bg-white/5 border border-white/15 shadow-2xl relative flex items-center justify-center p-6 group backdrop-blur-md"
          >
            <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-black/60 px-4 py-1.5 rounded-full border border-cyan-400/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">
                Holographic Scanner Telemetry
              </span>
            </div>
            <div className="h-full w-full">
              <ThreeCanvas className="h-full w-full">
                <TechShowcase />
              </ThreeCanvas>
            </div>
          </motion.div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-3 block">
              Next-Gen Studio Infrastructure
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              State-Of-The-Art 3D Dental <br />
              <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Imaging & Precision Tech
              </span>
            </h2>

            <div className="mt-6 text-gray-300 font-medium text-xs sm:text-sm leading-relaxed space-y-3">
              <p>
                At Vista Dental Studio, we replace conventional guesswork with 3D digital predictability. Our studio is equipped with Cone Beam Computed Tomography (CBCT) capturing ultra-detailed anatomical maps in seconds.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex flex-col items-start group">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h4 className="mt-3 text-sm font-bold text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[11px] text-gray-400 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <a
                href="#book"
                className="inline-flex items-center justify-center bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-extrabold text-xs sm:text-sm px-8 py-4 rounded-full shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:scale-105 transition-all group"
              >
                <span>Schedule Digital Scan</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
