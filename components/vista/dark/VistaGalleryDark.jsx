"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, ShieldCheck, X, CheckCircle2 } from "lucide-react";

export default function VistaGalleryDark() {
  const [selectedCase, setSelectedCase] = useState(null);

  const galleryItems = [
    {
      id: "v-case-1",
      title: "Guided Implant Restoration",
      category: "Implants",
      subtitle: "Single Tooth Titanium Root & Crown",
      details: "Complete central incisor replacement via computerized guided surgery and a custom E-Max ceramic crown.",
      image: "/dental_implant_model.jpg",
    },
    {
      id: "v-case-2",
      title: "Porcelain Veneers Design",
      category: "Cosmetic",
      subtitle: "6-Unit Upper Arch Veneers",
      details: "Minimal preparation hand-milled ceramic veneers correcting symmetry and enamel fluorosis staining.",
      image: "/porcelain_veneers.jpg",
    },
    {
      id: "v-case-3",
      title: "Full Mouth Rehab Plan",
      category: "Reconstruction",
      subtitle: "All-On-4 Zirconia Bridge",
      details: "Full jaw rehabilitation using 3D surgical templates for immediate fixed bridge loading.",
      image: "/full_mouth_rehab.jpg",
    },
    {
      id: "v-case-4",
      title: "Digital Smile Makeover",
      category: "Cosmetic",
      subtitle: "Virtual Design & Laser Gingivectomy",
      details: "Precision digital smile redesign combining laser tissue recontouring with ultra-thin composite bonding.",
      image: "/digital_smile_makeover.jpg",
    },
  ];

  return (
    <section id="gallery" className="py-28 bg-[#050E1A] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">
            Transformation Gallery
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Smile Transformations & <br />
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Clinical Studio Results
            </span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
            Explore verified patient outcomes achieved at Vista Dental Studio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedCase(item)}
              className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/15 shadow-2xl aspect-[4/5] sm:aspect-square flex flex-col justify-end cursor-pointer group hover:border-cyan-400/50 transition-all"
            >
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider shadow-sm border border-cyan-400/30 bg-black/60 text-cyan-400 backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
              </div>

              <div className="relative z-10 p-5">
                <h4 className="text-sm font-bold text-white tracking-tight truncate">
                  {item.title}
                </h4>
                <p className="text-[10px] text-gray-300 font-medium truncate mt-0.5">
                  {item.subtitle}
                </p>
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
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 top-20 max-w-lg mx-auto bg-gray-950 text-white rounded-3xl z-50 shadow-2xl overflow-hidden border border-white/20 flex flex-col"
            >
              <div className="h-52 relative flex items-center justify-center p-6 overflow-hidden">
                <img src={selectedCase.image} alt={selectedCase.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors z-10 border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-center relative z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-black/60 px-3 py-1 rounded-full border border-cyan-400/30 backdrop-blur-sm">
                    {selectedCase.category} Case
                  </span>
                  <h3 className="text-2xl font-extrabold mt-3">{selectedCase.title}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5 text-xs text-gray-300">
                <p className="leading-relaxed font-medium">
                  {selectedCase.details}
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Outcome
                  </span>
                  <a
                    href="#book"
                    onClick={() => setSelectedCase(null)}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-extrabold text-xs shadow-md hover:scale-105 transition-all"
                  >
                    Schedule Visit
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
