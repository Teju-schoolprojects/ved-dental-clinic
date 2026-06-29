"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ThreeCanvas from "./ThreeCanvas";
import ImplantModel from "./ImplantModel";
import { Hammer, Orbit, Sparkles, Camera, Box } from "lucide-react";

export default function ImplantShowcase() {
  const [viewMode, setViewMode] = useState("3d");

  const parts = [
    {
      number: "01",
      name: "Porcelain Crown",
      material: "Biocompatible Ceramic / Zirconia",
      description: "The visible dental crown custom-milled via CAD/CAM to match the exact shade, texture, and contour of your adjacent teeth.",
    },
    {
      number: "02",
      name: "Gold-Titanium Abutment",
      material: "Precision Anodized Gold/Titanium",
      description: "The custom connector that anchors the crown. It sits above the gum line to provide a stable, tight seal that protects the implant root.",
    },
    {
      number: "03",
      name: "Titanium Root Fixture",
      material: "Medical Grade 5 Titanium",
      description: "The screw-threaded prosthetic root placed into the jawbone. It biological fuses with the bone (osseointegration) to act as a permanent anchor.",
    },
  ];

  return (
    <section id="implant-tech" className="py-24 bg-brand-light/35 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-blue">
            Advanced Implantology
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Anatomy of a Permanent <br />
            <span className="text-gradient-accent">Dental Restoration</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-brand-text-muted font-medium max-w-xl">
            At Ved Dental Clinic, we utilize premium biocompatible components and digital surgical guides 
            to offer implants that look, feel, and function exactly like natural teeth.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D Exploded-View Canvas or Studio Photo */}
          <div className="lg:col-span-6 h-[480px] sm:h-[550px] lg:h-[600px] rounded-3xl bg-white border border-gray-100/80 shadow-premium relative flex items-center justify-center p-6 group overflow-hidden">
            
            {/* View Mode Switcher Header */}
            <div className="absolute top-6 right-6 z-20 flex items-center bg-gray-100/80 backdrop-blur-md p-1 rounded-full border border-gray-200/60 shadow-sm">
              <button
                onClick={() => setViewMode("3d")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 ${
                  viewMode === "3d"
                    ? "bg-brand-blue text-white shadow-sm"
                    : "text-brand-text-muted hover:text-brand-dark"
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D Exploded</span>
              </button>
              <button
                onClick={() => setViewMode("photo")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 ${
                  viewMode === "photo"
                    ? "bg-brand-blue text-white shadow-sm"
                    : "text-brand-text-muted hover:text-brand-dark"
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Studio Photo</span>
              </button>
            </div>

            {viewMode === "3d" ? (
              <>
                {/* Hover instructions overlay */}
                <div className="absolute top-6 left-6 z-10 flex flex-col gap-2 pointer-events-none">
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-brand-blue bg-brand-light px-3 py-1 rounded-full w-fit">
                    <Sparkles className="w-3 h-3 fill-brand-blue/10 stroke-[2]" />
                    <span>Interactive Model</span>
                  </div>
                  <p className="text-[11px] font-semibold text-brand-text-muted">
                    Hover over the model to assemble.
                  </p>
                </div>

                <div className="absolute bottom-6 right-6 z-10 pointer-events-none flex items-center gap-1.5 text-[10px] font-bold text-brand-text-muted/80 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full">
                  <Orbit className="w-3.5 h-3.5 text-brand-blue animate-spin-slow" />
                  <span>Drag to rotate</span>
                </div>

                <div className="h-full w-full">
                  <ThreeCanvas className="h-full w-full">
                    <ImplantModel />
                  </ThreeCanvas>
                </div>
              </>
            ) : (
              <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/dental_implant_model.jpg"
                  alt="High-end studio photograph of dental implant model"
                  className="w-full h-full object-cover rounded-2xl shadow-inner transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10">
                  4K Clinical Studio Macro Photograph
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Exploded components list */}
          <div className="lg:col-span-6 space-y-6">
            {parts.map((part, index) => (
              <motion.div
                key={part.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white hover:border-brand-blue/20 hover:shadow-premium transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  {/* Part Number Badge */}
                  <span className="text-xl sm:text-2xl font-extrabold text-brand-blue/30 group-hover:text-brand-blue transition-colors duration-300 shrink-0">
                    {part.number}
                  </span>

                  <div>
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-brand-dark leading-none">
                        {part.name}
                      </h3>
                      <span className="text-[9px] font-extrabold bg-gray-100 text-brand-text-muted px-2 py-0.5 rounded uppercase tracking-wider">
                        {part.material}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs text-brand-text-muted font-medium leading-relaxed">
                      {part.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
