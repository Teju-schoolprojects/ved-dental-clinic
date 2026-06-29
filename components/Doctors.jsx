"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Award, GraduationCap, ArrowRight, X, Calendar, CheckCircle2, Star } from "lucide-react";

export default function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: "dr-vedant",
      name: "Dr. Vedant Sharma",
      credentials: "BDS, MDS (Oral Implantology)",
      role: "Chief Dental Surgeon & Implant Specialist",
      experience: "15+ Years Experience",
      bio: "Dr. Vedant Sharma is a pioneer in computer-guided implantology in Maharashtra. Having performed over 4,000 successful dental implant procedures, he specializes in painless full-mouth restorations and immediate loading implant techniques.",
      education: ["MDS in Oral & Maxillofacial Implantology", "Fellowship of the International Congress of Oral Implantologists (ICOI)", "BDS from Maharashtra University of Health Sciences"],
      specialties: ["Guided Dental Implants", "All-On-4 & All-On-6 Reconstruction", "Bone Grafting & Sinus Lifts"],
      avatarGradient: "from-blue-600 to-cyan-500",
      initials: "VS",
    },
    {
      id: "dr-ananya",
      name: "Dr. Ananya Roy",
      credentials: "BDS, MDS (Endodontics)",
      role: "Senior Endodontist & Micro-Surgeon",
      experience: "12+ Years Experience",
      bio: "Dr. Ananya Roy specializes in precision microscopic endodontics and single-visit painless root canal treatments. Her clinical focus combines biological preservation with state-of-the-art laser disinfection technologies.",
      education: ["MDS in Conservative Dentistry & Endodontics", "Certified Micro-Endodontic Specialist (Germany)", "BDS - Gold Medalist"],
      specialties: ["Single-Visit Painless Root Canals", "Microscopic Endodontics", "Laser Dental Therapy"],
      avatarGradient: "from-indigo-600 to-blue-500",
      initials: "AR",
    },
    {
      id: "dr-siddharth",
      name: "Dr. Siddharth Mehta",
      credentials: "BDS, MDS (Cosmetic & Orthodontics)",
      role: "Aesthetic Dentist & Invisalign Provider",
      experience: "10+ Years Experience",
      bio: "Dr. Siddharth Mehta designs custom smile transformations using Digital Smile Design (DSD) protocols. He is a certified Invisalign provider known for fabricating ultra-thin E-Max porcelain veneers and subtle aesthetic aligners.",
      education: ["MDS in Orthodontics & Dentofacial Orthopedics", "Certified Digital Smile Designer (DSD Master)", "Invisalign Platinum Provider"],
      specialties: ["Digital Smile Makeovers", "E-Max Porcelain Veneers", "Clear Aligner Therapy (Invisalign)"],
      avatarGradient: "from-cyan-600 to-blue-600",
      initials: "SM",
    },
  ];

  return (
    <section id="experts" className="py-24 bg-white relative overflow-hidden">
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-brand-accent/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-blue">
            Clinical Leadership
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Meet Our Team Of <br />
            <span className="text-gradient-accent">Dental Specialists & Surgeons</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-brand-text-muted font-medium leading-relaxed">
            Our clinic brings together highly credentialed implantologists, endodontists, and cosmetic surgeons 
            dedicated to precise, compassionate patient care.
          </p>
        </div>

        {/* 3-Column Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card rounded-3xl overflow-hidden border border-gray-100 shadow-premium group hover:border-brand-blue/30 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Placeholder Area with Clinical Branding */}
                <div className="h-64 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-blue relative flex items-center justify-center overflow-hidden">
                  {/* Background Grid Lines */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00e5ff_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                  
                  {/* Glowing Aura ring */}
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-tr ${doctor.avatarGradient} opacity-40 blur-xl animate-pulse-slow`}></div>

                  {/* Doctor Graphic Silhouette / Initials Badge */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <span className="text-3xl font-black text-white tracking-wider">
                        {doctor.initials}
                      </span>
                    </div>
                    <span className="mt-3 text-[10px] font-bold uppercase tracking-widest text-brand-accent/90 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                      {doctor.experience}
                    </span>
                  </div>

                  {/* Top Specialty Tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-dark px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                    <Stethoscope className="w-3 h-3 text-brand-blue" />
                    <span>Specialist</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-8">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-brand-blue">
                    {doctor.role}
                  </div>
                  <h3 className="mt-1 text-xl font-extrabold text-brand-dark tracking-tight">
                    {doctor.name}
                  </h3>
                  <div className="mt-1 text-xs font-semibold text-brand-text-muted flex items-center gap-1">
                    <GraduationCap className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>{doctor.credentials}</span>
                  </div>

                  <p className="mt-4 text-xs text-brand-text-muted font-medium leading-relaxed line-clamp-3">
                    {doctor.bio}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-8 pb-8 pt-0">
                <button
                  onClick={() => setSelectedDoctor(doctor)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-brand-light/60 hover:bg-brand-blue hover:text-white text-brand-blue font-bold text-xs transition-all duration-300 group/btn border border-brand-blue/10"
                >
                  <span>View Full Profile</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Doctor Profile Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoctor(null)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-x-4 top-12 md:top-20 max-w-2xl mx-auto bg-white rounded-3xl z-50 shadow-2xl overflow-hidden border border-gray-100 max-h-[85vh] flex flex-col"
            >
              {/* Modal Header Banner */}
              <div className="bg-gradient-to-r from-brand-dark to-brand-blue p-6 text-white relative flex justify-between items-start shrink-0">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-accent bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {selectedDoctor.role}
                  </span>
                  <h3 className="text-2xl font-extrabold mt-3">{selectedDoctor.name}</h3>
                  <p className="text-xs text-blue-100 mt-1 font-medium">{selectedDoctor.credentials}</p>
                </div>
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-xs text-brand-text-muted">
                <div>
                  <h4 className="font-extrabold text-brand-dark uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-brand-blue fill-brand-blue/20" />
                    Biography & Clinical Focus
                  </h4>
                  <p className="leading-relaxed font-medium text-brand-text">{selectedDoctor.bio}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                  {/* Specialties */}
                  <div>
                    <h4 className="font-extrabold text-brand-dark uppercase tracking-wider text-[11px] mb-3 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-brand-blue" />
                      Specialized Treatments
                    </h4>
                    <ul className="space-y-2 font-semibold">
                      {selectedDoctor.specialties.map((spec) => (
                        <li key={spec} className="flex items-center gap-2 text-brand-dark">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Qualifications */}
                  <div>
                    <h4 className="font-extrabold text-brand-dark uppercase tracking-wider text-[11px] mb-3 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-brand-blue" />
                      Academic Qualifications
                    </h4>
                    <ul className="space-y-2 font-medium">
                      {selectedDoctor.education.map((edu) => (
                        <li key={edu} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0"></div>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] font-semibold text-brand-text-muted">
                    Available for consultations at Ambernath clinic.
                  </span>
                  <a
                    href="#book"
                    onClick={() => setSelectedDoctor(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white font-bold text-xs shadow-md hover:bg-brand-blue/95 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
