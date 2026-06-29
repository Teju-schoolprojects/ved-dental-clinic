"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export default function Contact() {
  const details = [
    {
      title: "Clinic Location",
      desc: "Ved Dental Clinic & Implant Center, Shop No. 4/5, Near Ambernath Railway Station, Ambernath East, Thane, Maharashtra - 421501",
      icon: MapPin,
    },
    {
      title: "Phone & Mobile",
      desc: "+91 98765 43210 / 0251-2684321",
      icon: Phone,
    },
    {
      title: "Email Queries",
      desc: "contact@veddentalclinic.com",
      icon: Mail,
    },
    {
      title: "Clinical Hours",
      desc: "Mon - Sat: 10:00 AM - 01:30 PM & 05:00 PM - 08:30 PM. Sundays: Emergency Only.",
      icon: Clock,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-brand-bg relative overflow-hidden border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-blue">
                Find Our Center
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
                Visiting Ved Dental <br />
                <span className="text-gradient-accent">Clinic in Ambernath</span>
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-brand-text-muted font-medium leading-relaxed">
                We are situated right next to the station, making it highly accessible for patients 
                traveling from Thane, Kalyan, Badlapur, and surrounding areas.
              </p>
            </div>

            <div className="space-y-6">
              {details.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div key={detail.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-brand-blue shrink-0">
                      <Icon className="w-4.5 h-4.5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs text-brand-blue uppercase tracking-wider">
                        {detail.title}
                      </h4>
                      <p className="mt-1 text-xs text-brand-dark font-medium leading-relaxed">
                        {detail.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="lg:col-span-6 h-[400px] w-full rounded-3xl overflow-hidden border border-gray-100 shadow-premium bg-white relative p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.587848694073!2d73.1802271871582!3d19.134091699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79541ffffff7f%3A0xc3cb74620023a9d9!2sAmbernath%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location of Ved Dental Clinic, Ambernath"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
