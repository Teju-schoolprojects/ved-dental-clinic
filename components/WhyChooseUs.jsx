"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, CheckSquare, Stethoscope, Star } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Guided Surgery Precision",
      desc: "Our dental implants are designed using 3D surgical guides. This prevents structural mistakes, minimizes tissue incision size, and speeds up osseointegration.",
      icon: Stethoscope,
      image: "/assets/guided_surgical_template.jpg",
      bg: "bg-brand-light/70",
    },
    {
      title: "Class-B Sterilization",
      desc: "We follow stringent hospital-grade infection control policies, utilizing Class-B autoclave chambers to disinfect every dental tool before your appointment.",
      icon: ShieldCheck,
      image: "/assets/autoclave_sterilization.jpg",
      bg: "bg-brand-light/70",
    },
    {
      title: "Painless Anesthesia Tech",
      desc: "We utilize computerized local anesthesia delivery systems, creating a soothing, near-painless injection experience for anxious patients.",
      icon: HeartPulse,
      image: "/assets/painless_anesthesia.jpg",
      bg: "bg-brand-light/70",
    },
  ];

  const trustBadges = [
    "Digital Planning", "Sterilized Tools", "Guided Surgery", 
    "Experienced Doctors", "Patient Comfort", "Google Verified"
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-blue">
            Our Standard
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Setting the Benchmark for <br />
            <span className="text-gradient-accent">Safe & Reliable Dentistry</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-brand-text-muted font-medium leading-relaxed">
            We don't cut corners. From our digital diagnostics to sterilization workflows, 
            we maintain rigorous clinical standards to secure your health.
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-brand-blue/30 hover:shadow-premium duration-300 flex flex-col justify-between"
              >
                {/* Background glow hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${card.bg}`}></div>
                
                <div className="relative z-10">
                  {/* Icon or Image */}
                  {card.image ? (
                    <div className="w-full h-36 mb-6 rounded-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500 border border-gray-100 shadow-sm">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-3 text-[10px] font-extrabold text-white uppercase tracking-wider flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-blue fill-white" />
                        <span>Autoclave Unit Verified</span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="mt-4 text-lg font-bold text-brand-dark tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs text-brand-text-muted font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-[10px] font-bold text-brand-blue relative z-10">
                  <CheckSquare className="w-4 h-4 fill-brand-blue/10 stroke-[2.5]" />
                  <span>Clinical Standard Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Badge Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-10 border-t border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-3">
            {/* Google Rating representation */}
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs font-semibold text-brand-dark">
              Rated <span className="font-extrabold text-brand-blue">4.9/5 stars</span> on Google Business Reviews
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-bold text-brand-text-muted uppercase tracking-wider hover:border-brand-blue/30 hover:text-brand-blue transition-colors duration-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
