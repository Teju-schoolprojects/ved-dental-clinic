"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, CalendarRange, Sparkles, UserCheck } from "lucide-react";

export default function PatientJourney() {
  const steps = [
    {
      number: "01",
      title: "Digital Consultation & 3D Scanning",
      desc: "We perform a thorough exam using low-radiation CBCT 3D X-rays and intraoral digital cameras. This creates a high-fidelity digital map of your oral structures without messy impression trays.",
      icon: Camera,
      image3d: "/assets/intraoral_scanner_3d.jpg",
      timelineAlign: "left",
    },
    {
      number: "02",
      title: "Virtual Smile Mockup & Planning",
      desc: "Our doctors design your treatment pathway virtually using advanced simulation software. We show you a 3D digital mockup of your finalized smile for feedback before starting clinical work.",
      icon: CalendarRange,
      image3d: "/assets/smile_simulation_3d.jpg",
      timelineAlign: "right",
    },
    {
      number: "03",
      title: "Guided Clinical Treatment",
      desc: "For implants or restorations, we print custom surgical templates to execute the procedure with sub-millimeter precision, making treatment faster and recovery exceptionally comfortable.",
      icon: UserCheck,
      image3d: "/assets/guided_treatment_3d.jpg",
      timelineAlign: "left",
    },
    {
      number: "04",
      title: "Restoration Reveal & Activation",
      desc: "We place your final custom-milled porcelain crowns or veneers. We verify your bite alignment, polish the ceramic surfaces, and reveal your natural-looking, permanent new smile.",
      icon: Sparkles,
      image3d: "/assets/restoration_reveal_3d.jpg",
      timelineAlign: "right",
    },
  ];

  return (
    <section id="journey" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-blue">
            The Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Your Digital Pathway To A <br />
            <span className="text-gradient-accent">Perfect Smile Restoration</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-brand-text-muted font-medium leading-relaxed">
            See how we combine clinical expertise with 3D technology to guide you through a 
            comfortable, predictable dental experience.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-brand-blue/15 hidden md:block"></div>

          {/* Timeline steps */}
          <div className="space-y-12 md:space-y-20 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row items-center relative ${
                    step.timelineAlign === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Timeline Node Dot (Center) */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-[#f8fafc] bg-brand-blue shadow-premium items-center justify-center text-white text-xs font-bold hidden md:flex z-10">
                    {step.number}
                  </div>

                  {/* Card Content Side */}
                  <div className="w-full md:w-[45%]">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="glass-card p-6 sm:p-8 rounded-3xl hover:border-brand-blue/20 hover:shadow-premium transition-all duration-300 relative group"
                    >
                      {/* Step Number for Mobile */}
                      <span className="inline-flex md:hidden text-xs font-extrabold uppercase px-3 py-1 rounded bg-brand-blue/10 text-brand-blue mb-4">
                        Step {step.number}
                      </span>

                      {/* 3D Graphic or Icon Header */}
                      {step.image3d ? (
                        <div className="w-full h-36 mb-4 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                          <div className="absolute inset-0 bg-[#e0f2fe]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#e0f2fe]/30 transition-colors duration-500"></div>
                          <img
                            src={step.image3d}
                            alt={step.title}
                            className="max-h-full max-w-full object-contain relative z-10 mix-blend-multiply filter drop-shadow-md rounded-xl"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-blue mb-5 group-hover:scale-105 transition-transform duration-300">
                          <Icon className="w-5 h-5 stroke-[2]" />
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-brand-dark tracking-tight">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-xs text-brand-text-muted font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Spacer Side for desktop grid */}
                  <div className="w-0 md:w-[10%] shrink-0"></div>
                  <div className="w-0 md:w-[45%]"></div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
