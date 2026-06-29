"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, UserCheck, HeartPulse, Award, Layers, Box } from "lucide-react";

export default function VistaAboutDark() {
  const materialTextures = [
    { title: "Frosted Acoustic Glass", desc: "Noise-isolating soundproof treatment suites providing total mental peace.", icon: Layers },
    { title: "Zirconia Bio-Ceramics", desc: "Translucent high-durability crowns hand-milled for natural light reflection.", icon: Box },
    { title: "Guided Titanium Threads", desc: "Biocompatible sub-millimeter implants designed for rapid osseointegration.", icon: ShieldCheck },
  ];

  return (
    <section id="about" className="py-28 bg-[#0B132B] text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-3 block">
              Architectural Studio Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A Studio Engineered for <br />
              <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Clarity, Peace & Precision
              </span>
            </h2>
            <div className="mt-6 text-gray-300 space-y-4 font-medium text-xs sm:text-sm leading-relaxed">
              <p>
                At Vista Dental Studio, we believe that clinical environments should inspire tranquil confidence. We engineered our studio lounge to eliminate clinical anxiety.
              </p>
              <p>
                From private, soundproof acoustic suites with overhead relaxation monitors to computer-guided local anesthesia delivery, every detail is tuned for your physical and emotional comfort.
              </p>
            </div>

            <div className="mt-8 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex items-start gap-4">
              <div className="w-1.5 h-14 bg-cyan-400 rounded-full shrink-0"></div>
              <div>
                <p className="text-xs italic font-semibold text-gray-200 leading-relaxed">
                  "Our mission is simple: to combine minimalist studio architecture with advanced biotechnology so every patient leaves with total clarity and a renewed smile."
                </p>
                <h4 className="mt-3 text-[11px] font-extrabold text-cyan-400 uppercase tracking-wider">
                  Dr. Jonathan Vance — Clinical Director
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-4">
              Material Texture & Architectural Standards
            </h3>
            {materialTextures.map((mat, idx) => {
              const Icon = mat.icon;
              return (
                <motion.div
                  key={mat.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300 flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all shrink-0">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {mat.title}
                    </h4>
                    <p className="mt-1 text-xs text-gray-400 font-medium leading-relaxed">
                      {mat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
