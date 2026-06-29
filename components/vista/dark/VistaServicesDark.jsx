"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smile, Shield, Sparkles, FlameKindling, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function VistaServicesDark() {
  const [activeIndex, setActiveIndex] = useState(0);

  const servicesList = [
    {
      id: "01",
      title: "Invisalign Clear Aligners",
      category: "Orthodontics",
      description: "Transform your smile with complete discretion. 3D-planned clear aligners provide gentle, precise tooth movement without metal brackets.",
      bullets: ["3D Optical Scan Planning", "Virtually Invisible Resins", "Laser-Trimmed Comfort"],
      image: "/invisalign_alignment.jpg",
      icon: Smile,
    },
    {
      id: "02",
      title: "Guided Dental Implants",
      category: "Restorative",
      description: "Computerized sub-millimeter implant placement replacing missing teeth with durable titanium roots and custom hand-layered crowns.",
      bullets: ["Single & Full Arch Implants", "Guided Surgical Templates", "Immediate Loading Options"],
      image: "/dental_implant_model.jpg",
      icon: Shield,
    },
    {
      id: "03",
      title: "Porcelain Veneers Design",
      category: "Cosmetic",
      description: "Hand-milled E-Max ceramic veneers custom layered to correct discoloration, gaps, and minor structural wear.",
      bullets: ["Minimal Prep Technique", "Digital Smile Mockups", "Natural Enamel Luminosity"],
      image: "/porcelain_veneers.jpg",
      icon: Sparkles,
    },
    {
      id: "04",
      title: "Single-Visit Root Canals",
      category: "Endodontics",
      description: "Painless micro-endodontic therapy using digital rotary tools to remove bacterial infection and seal the tooth in one visit.",
      bullets: ["Single Appointment Relief", "Microscopic Precision", "Protective Zirconia Crowns"],
      image: "/single_visit_root_canal.jpg",
      icon: FlameKindling,
    },
    {
      id: "05",
      title: "Laser Teeth Whitening",
      category: "Hygiene",
      description: "Immediate in-office laser brightening safely removing deep coffee, tea, and age stains without enamel damage.",
      bullets: ["45-Minute Clinical Session", "Enamel-Safe Formulation", "Anti-Sensitivity Coating"],
      image: "/laser_teeth_whitening.jpg",
      icon: Zap,
    },
    {
      id: "06",
      title: "Composite Edge Bonding",
      category: "Cosmetic",
      description: "An artistic, minimalist procedure repairing chipped or worn teeth in a single comfortable visit with zero drill prep.",
      bullets: ["Custom Enamel Layering", "Same-Day Restoration", "Undetectable Shade Matching"],
      image: "/composite_edge_bonding.jpg",
      icon: Sparkles,
    },
  ];

  const activeService = servicesList[activeIndex];

  return (
    <section id="treatments" className="py-28 bg-[#050E1A] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 block mb-2">
              Modernized Treatment Grid
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              High-Precision Care Designed <br />
              <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                For Lasting Aesthetics
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 font-medium max-w-sm leading-relaxed">
            Hover or tap any treatment on the left to inspect digital telemetry and full-bleed 3D previews.
          </p>
        </div>

        {/* Horizontal Asymmetric Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Expandable Telemetry List */}
          <div className="lg:col-span-6 space-y-3 flex flex-col justify-center">
            {servicesList.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`p-5 rounded-3xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-white/10 border-cyan-400/50 shadow-[0_0_25px_rgba(0,229,255,0.15)]"
                      : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-extrabold tracking-widest px-2.5 py-1 rounded-full ${isActive ? "bg-cyan-400 text-black" : "bg-white/10 text-gray-400"}`}>
                        {service.id}
                      </span>
                      <h3 className={`text-base font-bold tracking-tight transition-colors ${isActive ? "text-cyan-400" : "text-white"}`}>
                        {service.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 hidden sm:inline">
                      {service.category}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-3 border-t border-white/10 space-y-3"
                      >
                        <p className="text-xs text-gray-300 font-medium leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {service.bullets.map((b) => (
                            <span key={b} className="inline-flex items-center gap-1 text-[10px] font-semibold bg-cyan-400/10 text-cyan-300 px-2.5 py-1 rounded-full border border-cyan-400/20">
                              <CheckCircle2 className="w-3 h-3" />
                              {b}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Full-Bleed 3D Preview Panel */}
          <div className="lg:col-span-6 min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden relative border border-white/15 shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-black/60 border border-cyan-400/30 backdrop-blur-md">
                    {activeService.category} Telemetry
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-3">
                    {activeService.title}
                  </h3>
                  <a
                    href="#book"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-white transition-colors"
                  >
                    <span>Schedule Treatment Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
