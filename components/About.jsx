"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, HeartPulse, UserCheck } from "lucide-react";

export default function About() {
  const stats = [
    { number: "15+", label: "Years of Service", desc: "Serving Ambernath with trust", icon: Award },
    { number: "12,000+", label: "Happy Smiles", desc: "Transformative treatments", icon: UserCheck },
    { number: "99.4%", label: "Implant Success Rate", desc: "Guided computer surgery", icon: ShieldCheck },
    { number: "100%", label: "Pain-Free Tech", desc: "Prioritizing patient comfort", icon: HeartPulse },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
              className="text-xs font-extrabold uppercase tracking-widest text-brand-blue mb-4"
            >
              About Our Clinic
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight"
            >
              Redefining Clinical Excellence <br />
              <span className="text-gradient-accent">In Modern Dentistry</span>
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={2}
              className="mt-6 text-brand-text-muted space-y-4 font-medium text-sm leading-relaxed"
            >
              <p>
                Ved Dental Clinic & Implant Center is Ambernath’s premier destination for high-end, 
                evidence-based dental care. Led by senior dental surgeons and specialized implantologists, 
                our clinic is designed to deliver a patient experience that is comfortable, efficient, 
                and precise.
              </p>
              <p>
                We use the world’s leading digital diagnostic equipment, including low-radiation CBCT 
                3D imaging, digital impression scanners, and micro-dentistry tools. Our sterilization 
                protocols meet strict international standards, ensuring your absolute safety.
              </p>
              <p>
                We believe that every smile is unique. Our team collaborates to formulate 
                individualized, minimally invasive treatment plans, providing long-lasting restorative 
                solutions from simple fillings to full-mouth reconstruction.
              </p>
            </motion.div>

            {/* Doctor info / trust quote */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={3}
              className="mt-8 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-4"
            >
              <div className="w-1.5 h-14 bg-brand-blue rounded-full shrink-0"></div>
              <div>
                <p className="text-xs italic font-semibold text-brand-dark leading-relaxed">
                  "Our philosophy is simple: we merge advanced biotechnology with custom aesthetics 
                  to recreate natural-looking smiles that stand the test of time."
                </p>
                <h4 className="mt-3 text-xs font-extrabold text-brand-blue uppercase tracking-wider">
                  Dr. Ved & Associates — Founder & Clinical Director
                </h4>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                  custom={idx + 2}
                  className="glass-card p-8 rounded-3xl relative group hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300 shadow-premium"
                >
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  
                  {/* Number */}
                  <h3 className="mt-6 text-3xl font-extrabold text-brand-dark tracking-tight">
                    {stat.number}
                  </h3>
                  
                  {/* Label */}
                  <h4 className="mt-2 font-bold text-xs text-brand-blue uppercase tracking-wider">
                    {stat.label}
                  </h4>
                  
                  {/* Description */}
                  <p className="mt-1 text-xs text-brand-text-muted font-medium">
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
