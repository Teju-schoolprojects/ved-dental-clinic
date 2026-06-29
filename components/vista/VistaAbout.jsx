"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, UserCheck, HeartPulse, Award } from "lucide-react";

export default function VistaAbout() {
  const stats = [
    { number: "100%", label: "Stress-Free Promise", desc: "Noise-canceling treatment suites", icon: HeartPulse },
    { number: "0", label: "Gooey Impression Trays", desc: "100% optical digital 3D scans", icon: Sparkles },
    { number: "15+", label: "Years Experience", desc: "Senior clinical specialists", icon: Award },
    { number: "99.6%", label: "Patient Satisfaction", desc: "Verified by Google reviews", icon: UserCheck },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 mb-4 block">
              Architectural Studio Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              A Studio Environment Designed for <br />
              <span className="bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">
                Clarity, Peace & Precision
              </span>
            </h2>
            <div className="mt-6 text-gray-600 space-y-4 font-medium text-sm leading-relaxed">
              <p>
                At Vista Dental Studio, we believe that dental visits should feel calming, transparent, and restorative. We engineered our studio from the ground up to eliminate clinical stress.
              </p>
              <p>
                From private, sound-isolated suites with overhead relaxation monitors to computerized local anesthesia systems, every detail is tuned for your physical and mental comfort.
              </p>
              <p>
                Whether you are a busy professional looking for efficient morning appointments or a family seeking gentle preventive care, our specialists deliver predictable, world-class dentistry.
              </p>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-4">
              <div className="w-1.5 h-14 bg-teal-600 rounded-full shrink-0"></div>
              <div>
                <p className="text-xs italic font-semibold text-gray-800 leading-relaxed">
                  "Our goal is simple: to combine minimalist design with advanced biotechnology so every patient leaves with absolute clarity and a confident smile."
                </p>
                <h4 className="mt-3 text-xs font-extrabold text-teal-700 uppercase tracking-wider">
                  Dr. Jonathan Vance — Founder & Lead Director
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-gray-50/70 border border-gray-100 hover:border-teal-500/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="mt-6 text-3xl font-extrabold text-gray-900 tracking-tight">
                    {stat.number}
                  </h3>
                  <h4 className="mt-2 font-bold text-xs text-teal-700 uppercase tracking-wider">
                    {stat.label}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500 font-medium">
                    {stat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
