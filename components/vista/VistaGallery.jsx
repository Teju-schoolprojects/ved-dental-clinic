"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, ShieldCheck, X, CheckCircle2 } from "lucide-react";

export default function VistaGallery() {
  const [selectedCase, setSelectedCase] = useState(null);

  const galleryItems = [
    {
      id: "v-case-1",
      title: "Guided Implant Restoration",
      category: "Implants",
      subtitle: "Single Tooth Titanium Root & Crown",
      details: "Complete central incisor replacement via computerized guided surgery and a custom E-Max ceramic crown. Translucent aesthetic finish.",
      gradient: "from-gray-900 via-slate-800 to-teal-900",
      tagColor: "bg-teal-50 text-teal-700",
      image: "/dental_implant_model.jpg",
    },
    {
      id: "v-case-2",
      title: "Porcelain Veneers Design",
      category: "Cosmetic",
      subtitle: "6-Unit Upper Arch Veneers",
      details: "Minimal preparation hand-milled ceramic veneers correcting symmetry and enamel fluorosis staining. Achieved natural Bleach B1 shade.",
      gradient: "from-slate-900 via-teal-950 to-cyan-900",
      tagColor: "bg-cyan-50 text-cyan-700",
      image: "/porcelain_veneers.jpg",
    },
    {
      id: "v-case-3",
      title: "Full Mouth Rehab Plan",
      category: "Reconstruction",
      subtitle: "All-On-4 Zirconia Bridge",
      details: "Full jaw rehabilitation using 3D surgical templates for immediate fixed bridge loading with complete structural recovery.",
      gradient: "from-slate-900 via-gray-800 to-teal-950",
      tagColor: "bg-gray-100 text-gray-800",
      image: "/full_mouth_rehab.jpg",
    },
    {
      id: "v-case-4",
      title: "Digital Smile Makeover",
      category: "Cosmetic",
      subtitle: "Virtual Design & Laser Gingivectomy",
      details: "Precision digital smile redesign combining laser tissue recontouring with ultra-thin composite bonding.",
      gradient: "from-teal-950 via-slate-900 to-gray-900",
      tagColor: "bg-cyan-50 text-cyan-700",
      image: "/digital_smile_makeover.jpg",
    },
    {
      id: "v-case-5",
      title: "Invisalign Clear Aligners",
      category: "Orthodontics",
      subtitle: "3D Optical Aligner Therapy",
      details: "Non-extraction crowding correction utilizing discreet, custom-milled optical aligners and digital movement maps.",
      gradient: "from-slate-900 via-gray-900 to-teal-900",
      tagColor: "bg-emerald-50 text-emerald-700",
      image: "/invisalign_alignment.jpg",
    },
    {
      id: "v-case-6",
      title: "Single-Visit Root Canal",
      category: "Endodontics",
      subtitle: "Microscopic Rotary Therapy",
      details: "Thorough bacterial elimination in one comfortable visit using rotary endodontic locators and protective crowns.",
      gradient: "from-gray-900 via-slate-900 to-teal-950",
      tagColor: "bg-purple-50 text-purple-700",
      image: "/single_visit_root_canal.jpg",
    },
    {
      id: "v-case-7",
      title: "Laser Teeth Whitening",
      category: "Hygiene",
      subtitle: "In-Office Biolase Whitening",
      details: "Painless 45-minute laser activation lightening tooth shade significantly while preserving natural enamel health.",
      gradient: "from-slate-900 via-teal-900 to-gray-900",
      tagColor: "bg-sky-50 text-sky-700",
      image: "/laser_teeth_whitening.jpg",
    },
    {
      id: "v-case-8",
      title: "Composite Edge Bonding",
      category: "Cosmetic",
      subtitle: "Same-Day Enamel Restoration",
      details: "Minimalist artistically layered composite resin repairing worn incisor edges with zero enamel drill prep.",
      gradient: "from-teal-950 via-gray-900 to-slate-900",
      tagColor: "bg-cyan-50 text-cyan-700",
      image: "/composite_edge_bonding.jpg",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600">
            Transformation Gallery
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Smile Transformations & <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">
              Clinical Studio Results
            </span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
            Explore real patient outcomes achieved at Vista Dental Studio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedCase(item)}
              className="relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 aspect-[4/5] sm:aspect-square flex flex-col justify-end cursor-pointer group"
            >
              <div className="absolute top-3 left-3 z-10">
                <span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider shadow-sm border border-white/40 backdrop-blur-md ${item.tagColor}`}>
                  {item.category}
                </span>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-transform duration-700 group-hover:scale-105 overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="relative z-10 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-0 transition-opacity">
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                  {item.title}
                </h4>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/75 to-gray-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end z-20">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] font-extrabold text-teal-400 uppercase tracking-widest">
                      {item.category} Case
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-gray-300 font-medium mt-1 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCase && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-x-4 top-16 max-w-lg mx-auto bg-white rounded-3xl z-50 shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="h-48 relative flex items-center justify-center p-6 text-white overflow-hidden">
                <img src={selectedCase.image} alt={selectedCase.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-center relative z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-400 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    {selectedCase.category}
                  </span>
                  <h3 className="text-2xl font-extrabold mt-3">{selectedCase.title}</h3>
                  <p className="text-xs text-gray-200 mt-1 font-medium">{selectedCase.subtitle}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5 text-xs text-gray-600">
                <div>
                  <h4 className="font-extrabold text-gray-900 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    Clinical Result Summary
                  </h4>
                  <p className="leading-relaxed font-medium text-gray-800">
                    {selectedCase.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Vista Case
                  </span>
                  <a
                    href="#book"
                    onClick={() => setSelectedCase(null)}
                    className="px-5 py-2.5 rounded-full bg-teal-600 text-white font-bold text-xs shadow-md hover:bg-teal-700 transition-all"
                  >
                    Schedule Consultation
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
