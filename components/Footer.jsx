"use client";

import React from "react";
import { Shield, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Col 1: Logo & Certification */}
        <div className="space-y-4">
          <a href="#home" className="flex items-center gap-2 group w-fit">
            <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-md">
              <Shield className="w-4.5 h-4.5 fill-brand-accent/20" />
            </div>
            <div>
              <span className="text-base font-extrabold tracking-tight text-white block leading-none">
                VED DENTAL
              </span>
              <span className="text-[8px] font-extrabold uppercase tracking-widest text-brand-accent block mt-0.5">
                Clinic & Implant Center
              </span>
            </div>
          </a>
          <p className="text-[11px] text-gray-400 font-medium leading-relaxed max-w-xs pt-2">
            Ved Dental Clinic & Implant Center is Ambernath's leading digital dental clinic, offering premium guided implants, laser endodontics, and smile design.
          </p>
          {/* Socials */}
          <div className="flex gap-3 pt-2">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-brand-blue hover:text-white transition-all text-gray-400" aria-label="Facebook">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-brand-blue hover:text-white transition-all text-gray-400" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-brand-blue hover:text-white transition-all text-gray-400" aria-label="Twitter">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-5">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-semibold">
            <li><a href="#home" className="hover:text-brand-accent transition-colors">Home Landing</a></li>
            <li><a href="#about" className="hover:text-brand-accent transition-colors">About Clinic</a></li>
            <li><a href="#services" className="hover:text-brand-accent transition-colors">Treatments Offered</a></li>
            <li><a href="#implant-tech" className="hover:text-brand-accent transition-colors">Implant Anatomy</a></li>
            <li><a href="#journey" className="hover:text-brand-accent transition-colors">Clinical Process</a></li>
            <li><a href="#book" className="hover:text-brand-accent transition-colors">Book appointment</a></li>
          </ul>
        </div>

        {/* Col 3: Specialties */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-5">
            Our Specialties
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-semibold">
            <li><a href="#services" className="hover:text-brand-accent transition-colors">Computer-Guided Implants</a></li>
            <li><a href="#services" className="hover:text-brand-accent transition-colors">Single-Visit Root Canals</a></li>
            <li><a href="#services" className="hover:text-brand-accent transition-colors">Digital Smile Makeovers</a></li>
            <li><a href="#services" className="hover:text-brand-accent transition-colors">E-Max Porcelain Veneers</a></li>
            <li><a href="#services" className="hover:text-brand-accent transition-colors">Laser Gingivectomy</a></li>
            <li><a href="#services" className="hover:text-brand-accent transition-colors">Full-Mouth Rehabilitation</a></li>
          </ul>
        </div>

        {/* Col 4: Credentials */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-5">
            Affiliations & Quality
          </h4>
          <ul className="space-y-3.5 text-[11px] text-gray-400 font-medium">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-1.5"></div>
              <span>Dental Council of India (DCI) Registered Practitioners</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-1.5"></div>
              <span>State-of-the-Art Hospital Grade Autoclave Sterilization</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-1.5"></div>
              <span>All implants backed by global manufacturer warranties</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest relative z-10">
        <p>© 2026 Ved Dental Clinic & Implant Center. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5 normal-case tracking-normal">
          Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> in Maharashtra
        </p>
      </div>
    </footer>
  );
}
