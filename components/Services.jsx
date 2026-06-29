"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Smile, FlameKindling, Activity, ClipboardList, ArrowUpRight } from "lucide-react";

// ServiceCard sub-component with custom 3D tilt effect and centered 3D graphic support
function ServiceCard({ service, index }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    
    // Get mouse coordinates relative to the center of the card
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Calculate rotation angles (max 10 degrees)
    const factorX = -(y / (box.height / 2)) * 10;
    const factorY = (x / (box.width / 2)) * 10;
    
    setRotateX(factorX);
    setRotateY(factorY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: rotateX === 0 && rotateY === 0 ? "transform 0.5s ease" : "none",
      }}
      className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-brand-blue/30 hover:shadow-premium duration-300 transform-gpu cursor-pointer flex flex-col justify-between min-h-[420px]"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#0a1d37_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

      <div>
        {/* Header (3D Graphic or Icon & Arrow) */}
        <div className="relative">
          <div className="flex justify-between items-start">
            {service.image3d ? (
              <div className="w-full flex justify-center py-2">
                <div className="w-36 h-36 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-[#e0f2fe]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#e0f2fe]/30 transition-colors duration-500"></div>
                  <img
                    src={service.image3d}
                    alt={service.title}
                    className="w-full h-full object-contain relative z-10 mix-blend-multiply filter drop-shadow-md rounded-2xl"
                  />
                </div>
              </div>
            ) : (
              <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <IconComponent className="w-5 h-5 stroke-[1.8]" />
              </div>
            )}

            <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-brand-text-muted group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-all duration-300 shrink-0 absolute top-0 right-0 z-20">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className={`${service.image3d ? 'mt-4' : 'mt-8'} text-xl font-bold text-brand-dark tracking-tight`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-xs text-brand-text-muted font-medium leading-relaxed">
          {service.description}
        </p>

        {/* Treatment Bullet List */}
        <ul className="mt-6 space-y-2 border-t border-gray-50 pt-4">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2 text-[11px] font-semibold text-brand-text">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0"></div>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-[10px] font-bold uppercase tracking-wider text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn More & Book
      </div>
    </motion.div>
  );
}

export default function Services() {
  const servicesList = [
    {
      title: "Dental Implants",
      description: "Advanced surgical restoration replacing missing teeth with durable titanium implants and custom crowns.",
      bullets: ["Single & Multiple Implants", "All-on-4 / All-on-6 Reconstructions", "Bone Grafting & Sinus Lift"],
      icon: Shield,
      image3d: "/assets/dental_implant_3d.jpg",
    },
    {
      title: "Root Canal Treatment",
      description: "Painless Endodontic treatments using digital apex locators and rotary technology to save decaying teeth.",
      bullets: ["Single-Visit RCT", "Restorative Laser Endodontics", "Dental Crowns & Overlays"],
      icon: FlameKindling,
      image3d: "/assets/root_canal_3d.jpg",
    },
    {
      title: "Smile Makeovers",
      description: "A complete aesthetic redesign of your smile, utilizing modern porcelain veneers and digital mockups.",
      bullets: ["Digital Smile Design (DSD)", "E-Max Porcelain Veneers", "Gum Recontouring & Lift"],
      icon: Smile,
      image3d: "/assets/smile_makeover_3d.jpg",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your appearance with professional whitening, bonding, and aesthetic restorations.",
      bullets: ["In-Office Zoom Whitening", "Composite Edge Bonding", "Metal-Free Inlays / Onlays"],
      icon: Sparkles,
      image3d: "/assets/cosmetic_dentistry_3d.jpg",
    },
    {
      title: "Teeth Cleaning & Hygiene",
      description: "Ultrasonic scaling and airflow polishing to remove plaque, tartar, and tea/coffee stains.",
      bullets: ["Ultrasonic Scaling", "Airflow Stain Removal", "Fluoride Protective Coating"],
      icon: Activity,
      image3d: "/assets/teeth_cleaning_3d.jpg",
    },
    {
      title: "General Dentistry",
      description: "Comprehensive dental checkups, diagnostics, and customized treatment planning for the family.",
      bullets: ["Digital X-Rays & Diagnostics", "Tooth-Colored Fillings", "Nightguards & Bite Realignment"],
      icon: ClipboardList,
      image3d: "/assets/general_dentistry_3d.jpg",
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-blue">
            Our Specialties
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Designed to Restore Comfort <br />
            <span className="text-gradient-accent">And Dental Health</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-brand-text-muted font-medium leading-relaxed">
            We provide a comprehensive range of premium dental treatments in Ambernath. 
            Our care combines modern digital diagnostics with gentle, painless techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
