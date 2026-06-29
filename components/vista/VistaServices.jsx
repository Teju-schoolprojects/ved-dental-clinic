"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Smile, FlameKindling, Zap, ArrowUpRight } from "lucide-react";

function VistaServiceCard({ service, index }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    setRotateX(-(y / (box.height / 2)) * 10);
    setRotateY((x / (box.width / 2)) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: rotateX === 0 && rotateY === 0 ? "transform 0.5s ease" : "none",
      }}
      className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 transform-gpu cursor-pointer flex flex-col justify-between min-h-[360px] group"
    >
      <div>
        <div className="flex justify-between items-center">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
            <Icon className="w-5 h-5 stroke-[2]" />
          </div>
          <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-teal-600 group-hover:border-teal-500/30 transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <h3 className="mt-8 text-xl font-bold text-gray-900 tracking-tight">
          {service.title}
        </h3>
        <p className="mt-3 text-xs text-gray-500 font-medium leading-relaxed">
          {service.description}
        </p>

        <ul className="mt-6 space-y-2 border-t border-gray-50 pt-4">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2 text-[11px] font-semibold text-gray-700">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0"></div>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-[10px] font-bold uppercase tracking-wider text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
        Explore Treatment Details
      </div>
    </motion.div>
  );
}

export default function VistaServices() {
  const servicesList = [
    {
      title: "Invisalign Clear Aligners",
      description: "Transform your smile with complete discretion. 3D-planned clear aligners provide gentle, precise tooth movement.",
      bullets: ["3D Optical Scan Planning", "Virtually Invisible Resins", "Laser-Trimmed Comfort"],
      icon: Smile,
    },
    {
      title: "Guided Dental Implants",
      description: "Computerized sub-millimeter implant placement replacing missing teeth with durable titanium roots and custom ceramic crowns.",
      bullets: ["Single & Full Arch Implants", "Guided Surgical Templates", "Immediate Loading Options"],
      icon: Shield,
    },
    {
      title: "Porcelain Veneers",
      description: "Hand-milled E-Max ceramic veneers custom layered to correct discoloration, gaps, and minor structural wear.",
      bullets: ["Minimal Prep Technique", "Digital Smile Mockups", "Natural Enamel Luminosity"],
      icon: Sparkles,
    },
    {
      title: "Single-Visit Root Canals",
      description: "Painless micro-endodontic therapy using digital rotary tools to remove bacterial infection and seal the tooth in one visit.",
      bullets: ["Single Appointment Relief", "Microscopic Precision", "Protective Zirconia Crowns"],
      icon: FlameKindling,
    },
    {
      title: "Laser Teeth Whitening",
      description: "Immediate in-office laser brightening safely removing deep coffee, tea, and age stains without enamel damage.",
      bullets: ["45-Minute Clinical Session", "Enamel-Safe Formulation", "Anti-Sensitivity Coating"],
      icon: Zap,
    },
    {
      title: "Composite Edge Bonding",
      description: "An artistic, minimalist procedure repairing chipped or worn teeth in a single comfortable visit with zero drill prep.",
      bullets: ["Custom Enamel Layering", "Same-Day Restoration", "Undetectable Shade Matching"],
      icon: Sparkles,
    },
  ];

  return (
    <section id="treatments" className="py-24 bg-[#fafbfc] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600">
            Studio Treatments
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            High-Precision Care Designed <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">
              For Lasting Aesthetics
            </span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
            We deliver comprehensive dental solutions in a gentle, stress-free studio environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <VistaServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
