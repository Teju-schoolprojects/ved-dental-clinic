"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, ShieldCheck, X, CheckCircle2 } from "lucide-react";

export default function SmileGallery() {
  const [selectedCase, setSelectedCase] = useState(null);

  const galleryItems = [
    {
      id: "case-1",
      title: "Implant Restoration",
      category: "Implants",
      subtitle: "Single Tooth Titanium Implant",
      details: "Complete replacement of central incisor using guided surgery and a custom E-Max ceramic crown. Natural translucent finish.",
      gradient: "from-brand-dark via-slate-900 to-brand-blue",
      tagColor: "bg-blue-50 text-brand-blue",
      image: "/dental_implant_model.jpg",
    },
    {
      id: "case-2",
      title: "Porcelain Veneers",
      category: "Cosmetic",
      subtitle: "6-Unit Upper Arch Veneers",
      details: "Minimal prep ceramic veneers installed to correct asymmetry and permanent fluorosis staining. Achieved natural Bleach Shade B1.",
      gradient: "from-slate-900 via-brand-dark to-cyan-900",
      tagColor: "bg-cyan-50 text-cyan-700",
      image: "/porcelain_veneers.jpg",
    },
    {
      id: "case-3",
      title: "Full Mouth Rehab",
      category: "Reconstruction",
      subtitle: "All-On-4 Fixed Zirconia Bridge",
      details: "Full arch reconstruction for severe tooth wear. Utilized computer-guided placement of 4 titanium implants with immediate loading bridge.",
      gradient: "from-indigo-950 via-brand-dark to-blue-900",
      tagColor: "bg-indigo-50 text-indigo-700",
      image: "/full_mouth_rehab.jpg",
    },
    {
      id: "case-4",
      title: "Digital Smile Makeover",
      category: "Cosmetic",
      subtitle: "Gummy Smile & Alignment Correction",
      details: "Laser gingivectomy combined with ultra-thin composite bonding to realign the smile line and improve proportion.",
      gradient: "from-slate-900 via-cyan-950 to-brand-blue",
      tagColor: "bg-cyan-50 text-cyan-700",
      image: "/digital_smile_makeover.jpg",
    },
    {
      id: "case-5",
      title: "Invisalign Alignment",
      category: "Orthodontics",
      subtitle: "3D-Planned Clear Aligner Therapy",
      details: "Transform your smile with complete discretion. Our 3D-planned clear aligners provide gentle, precise tooth movement and custom-milled comfort without metal brackets.",
      gradient: "from-brand-dark via-blue-950 to-slate-900",
      tagColor: "bg-emerald-50 text-emerald-700",
      image: "/invisalign_alignment.jpg",
    },
    {
      id: "case-6",
      title: "Single-Visit Root Canal",
      category: "Endodontics",
      subtitle: "Precision Endodontic Restoration",
      details: "Authoritative care designed for your comfort and schedule. Advanced micro-endodontic rotary tools deliver thorough bacterial elimination and relief in just one seamless appointment.",
      gradient: "from-slate-950 via-brand-dark to-indigo-900",
      tagColor: "bg-purple-50 text-purple-700",
      image: "/single_visit_root_canal.jpg",
    },
    {
      id: "case-7",
      title: "Laser Teeth Whitening",
      category: "Hygiene",
      subtitle: "Sophisticated In-Office Brightening",
      details: "Achieve immediate, brilliant results safely. Non-invasive medical laser energy activates high-grade whitening agents to erase years of enamel stains in a single session.",
      gradient: "from-cyan-950 via-slate-900 to-brand-blue",
      tagColor: "bg-sky-50 text-sky-700",
      image: "/laser_teeth_whitening.jpg",
    },
    {
      id: "case-8",
      title: "Composite Edge Bonding",
      category: "Cosmetic",
      subtitle: "Artistic Same-Day Restoration",
      details: "A minimalist, artistic approach to tooth repair. Custom-sculpted composite resin seamless restores worn or chipped enamel edges with virtually zero enamel reduction.",
      gradient: "from-brand-dark via-slate-900 to-cyan-900",
      tagColor: "bg-cyan-50 text-cyan-700",
      image: "/composite_edge_bonding.jpg",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Glow Blobs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-brand-accent/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-blue">
            Patient Transformation
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Smile Gallery & <br />
            <span className="text-gradient-accent">Clinical Case Showcase</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-brand-text-muted font-medium leading-relaxed">
            Explore real treatment outcomes achieved at Ved Dental Clinic. 
            Each case represents custom digital planning and biocompatible restorations.
          </p>
        </div>

        {/* Responsive Image Grid: 4 Columns Desktop, 2 Columns Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedCase(item)}
              className="relative rounded-3xl overflow-hidden glass-card group cursor-pointer aspect-[4/5] sm:aspect-square flex flex-col justify-end shadow-premium hover:shadow-2xl transition-all duration-500 border border-gray-100/80"
            >
              {/* Subtle Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider shadow-sm border border-white/40 backdrop-blur-md ${item.tagColor}`}>
                  {item.category}
                </span>
              </div>

              {/* Graphical Visual Canvas / Real Image Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-transform duration-700 group-hover:scale-105 overflow-hidden`}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00e5ff_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Sparkles className="w-8 h-8 stroke-[1.5]" />
                    </div>
                  </>
                )}
              </div>

              {/* Default Bottom Bar (Visible when not hovering) */}
              <div className="relative z-10 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                  {item.title}
                </h4>
              </div>

              {/* Smooth Hover Overlay Displaying Treatment Name & Arrow */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/75 to-brand-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end z-20">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] font-extrabold text-brand-accent uppercase tracking-widest">
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

      {/* Case Details Modal */}
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
              <div className={`h-48 bg-gradient-to-br ${selectedCase.gradient} relative flex items-center justify-center p-6 text-white`}>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-center">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-accent bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    {selectedCase.category}
                  </span>
                  <h3 className="text-2xl font-extrabold mt-3">{selectedCase.title}</h3>
                  <p className="text-xs text-blue-100 mt-1 font-medium">{selectedCase.subtitle}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5 text-xs text-brand-text-muted">
                <div>
                  <h4 className="font-extrabold text-brand-dark uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-blue" />
                    Treatment Summary & Outcome
                  </h4>
                  <p className="leading-relaxed font-medium text-brand-text leading-relaxed">
                    {selectedCase.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Ved Dental Case
                  </span>
                  <a
                    href="#book"
                    onClick={() => setSelectedCase(null)}
                    className="px-5 py-2.5 rounded-full bg-brand-blue text-white font-bold text-xs shadow-md hover:bg-brand-blue/95 transition-all"
                  >
                    Consult for Similar Result
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
