"use client";

import React from "react";
import { motion } from "framer-motion";
import ThreeCanvas from "./ThreeCanvas";
import TechShowcase from "./TechShowcase";
import { Cpu, Zap, ScanFace, Layers } from "lucide-react";

export default function TechShowcaseSection() {
  const technologies = [
    {
      title: "Cone Beam 3D CT (CBCT)",
      desc: "Produces high-definition 3D scans of teeth, bone, and nerve pathways in seconds with ultra-low radiation, guaranteeing safe and guided surgical implant placement.",
      icon: ScanFace,
    },
    {
      title: "Intraoral 3D Digital Scanners",
      desc: "Replaces uncomfortable gooey trays with speed-of-light digital camera sweeps, capturing accurate 3D dental models for prosthetic crowns and veneers.",
      icon: Layers,
    },
    {
      title: "Dental Laser Systems",
      desc: "Specialized Biolase systems for minimally invasive soft-tissue procedures, resulting in near-painless treatments, reduced bleeding, and rapid healing.",
      icon: Zap,
    },
  ];

  return (
    <section id="tech-showcase" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Holographic Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 229, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(0, 229, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Cyberpunk accent glows */}
      <div className="absolute top-1/3 left-1/2 w-96 h-96 rounded-full bg-brand-accent/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Tech details */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-accent">
              Digital Infrastructure
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Futuristic Technology <br />
              For Precise, Painless Care
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-gray-400 font-medium max-w-xl leading-relaxed">
              We invest in next-generation medical systems to shift dental treatments from guesswork 
              to digital predictability, ensuring exceptional diagnostics and patient comfort.
            </p>

            <div className="mt-12 space-y-8">
              {technologies.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-accent/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-white">
                        {tech.title}
                      </h3>
                      <p className="mt-2 text-xs text-gray-400 font-medium leading-relaxed">
                        {tech.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Holographic R3F Canvas */}
          <div className="lg:col-span-5 order-1 lg:order-2 h-[350px] sm:h-[420px] lg:h-[500px] relative w-full flex items-center justify-center">
            
            {/* Holographic scanner layout UI frame */}
            <div className="absolute inset-0 border border-brand-accent/10 rounded-3xl p-6 pointer-events-none flex flex-col justify-between">
              <div className="flex justify-between text-[8px] font-extrabold uppercase tracking-widest text-brand-accent/40">
                <span>Scanner Active: v3.45</span>
                <span>Frame locked</span>
              </div>
              <div className="flex justify-between text-[8px] font-extrabold uppercase tracking-widest text-brand-accent/40">
                <span>Rendering CBCT grid...</span>
                <span>Ved Clinic Tech</span>
              </div>
            </div>

            <ThreeCanvas className="h-full w-full">
              <TechShowcase />
            </ThreeCanvas>
          </div>

        </div>

      </div>
    </section>
  );
}
