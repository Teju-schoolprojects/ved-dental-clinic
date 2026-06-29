"use client";

import React from "react";
import { Eye, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export default function VistaFooterDark() {
  return (
    <footer className="bg-[#050E1A] text-white pt-20 pb-12 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-black font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                <Eye className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block leading-none">
                  VISTA
                </span>
                <span className="text-[8px] font-extrabold uppercase tracking-widest text-cyan-400 block mt-0.5">
                  Dental Studio
                </span>
              </div>
            </a>
            <p className="text-xs text-gray-400 font-medium max-w-sm leading-relaxed">
              Redefining modern dental care through architectural dark minimalism, digital telemetry, and calm patient-first lounges.
            </p>
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>DCI Registered & Hospital-Grade Certified</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Treatments</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">3D Technology</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Transformations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-4">
              Studio Hours
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span className="text-white font-semibold">8:00 AM - 7:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span className="text-white font-semibold">9:00 AM - 4:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-cyan-400 font-semibold">Emergency Appts</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-4">
              Studio Contact
            </h4>
            <ul className="space-y-3 text-xs text-gray-400 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>104 Architectural Blvd, Suite 300, Medical Plaza</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+1 (800) 555-VISTA</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>care@vistadentalstudio.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-500 font-medium gap-4">
          <p>© 2026 Vista Dental Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Patient Portal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
