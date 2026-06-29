"use client";

import React from "react";
import { motion } from "framer-motion";
import ThreeCanvas from "../ThreeCanvas";
import TechShowcase from "../TechShowcase";
import { Target, Zap, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export default function VistaTech() {
  const benefits = [
    {
      title: "Micron Precision",
      description: "Sub-millimeter 3D optical scans ensure computer-guided accuracy for implants & clear aligners.",
      icon: Target,
    },
    {
      title: "Fast Recovery",
      description: "Minimally invasive digital templates reduce soft-tissue disruption and accelerate healing.",
      icon: Zap,
    },
    {
      title: "Maximum Comfort",
      description: "Replaces traditional gooey impression trays with comfortable 3D optical sweeps and gentle lasers.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="tech" className="py-28 bg-[#fafbfc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 h-[420px] sm:h-[500px] lg:h-[560px] rounded-3xl bg-white border border-gray-100 shadow-sm relative flex items-center justify-center p-6 group"
          >
            <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-500/20">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-700">
                3D Holographic Scanner
              </span>
            </div>
            <div className="h-full w-full">
              <ThreeCanvas className="h-full w-full">
                <TechShowcase />
              </ThreeCanvas>
            </div>
          </motion.div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 mb-3 block">
              Next-Gen Studio Infrastructure
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              State-Of-The-Art 3D Dental <br />
              <span className="bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">
                Imaging & Precision Tech
              </span>
            </h2>

            <div className="mt-6 text-gray-600 font-medium text-xs sm:text-sm leading-relaxed space-y-3">
              <p>
                At Vista Dental Studio, we replace conventional guesswork with 3D digital predictability. Our studio is equipped with Cone Beam Computed Tomography (CBCT) and optical intraoral scanners capturing high-resolution anatomical maps in seconds.
              </p>
              <p>
                Whether you are receiving Invisalign aligners or guided implants, our technology ensures virtual planning before clinical work begins.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200/60">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex flex-col items-start group">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h4 className="mt-3 text-sm font-bold text-gray-900 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[11px] text-gray-500 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <a
                href="#book"
                className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-teal-700 shadow-md hover:shadow-lg transition-all group"
              >
                <span>Schedule Your Visit</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
