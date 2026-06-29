"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function VistaBookingDark() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "Invisalign Clear Aligners",
    date: "",
    time: "10:00 AM",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const treatments = [
    "Invisalign Clear Aligners",
    "Guided Dental Implants",
    "Porcelain Veneers Design",
    "Single-Visit Root Canal",
    "Laser Teeth Whitening",
    "Comprehensive Studio Checkup",
  ];

  const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      setError("Please fill in all required fields (Name, Phone, and Preferred Date).");
      return;
    }

    setError("");
    const newAppointment = {
      id: "app-" + Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("vista_appointments") || "[]");
    const updated = [newAppointment, ...existing];
    localStorage.setItem("vista_appointments", JSON.stringify(updated));

    setSubmitted(true);
  };

  return (
    <section id="book" className="py-28 bg-[#0B132B] text-white relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-3 block">
              Instant Online Reservations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Schedule Your Visit to <br />
              <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Vista Dental Studio
              </span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
              Experience gentle, architecturally designed dental care tailored for busy professionals and families.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Zero-Wait Check-In</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Instant digital confirmation sent to your phone.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Calendar className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Flexible Rescheduling</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Manage or update your appointment anytime.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/15 shadow-2xl relative backdrop-blur-xl">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {error && (
                      <div className="p-4 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-semibold">
                        {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-gray-500 absolute left-4 top-3.5" />
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs font-semibold text-white focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-gray-500 absolute left-4 top-3.5" />
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs font-semibold text-white focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">
                        Treatment Category
                      </label>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs font-semibold text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        {treatments.map((t) => (
                          <option key={t} value={t} className="bg-gray-900 text-white">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs font-semibold text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">
                          Preferred Time Slot
                        </label>
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs font-semibold text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          {timeSlots.map((ts) => (
                            <option key={ts} value={ts} className="bg-gray-900 text-white">
                              {ts}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-extrabold text-xs sm:text-sm shadow-[0_0_25px_rgba(0,229,255,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <span>Confirm Studio Reservation</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-400/40">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">Reservation Confirmed!</h3>
                    <p className="text-xs text-gray-300 max-w-sm mt-2 font-medium">
                      Thank you, <span className="font-bold text-cyan-400">{formData.name}</span>. Your appointment for <span className="font-bold text-white">{formData.treatment}</span> on <span className="font-bold text-white">{formData.date}</span> at <span className="font-bold text-white">{formData.time}</span> has been confirmed.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors border border-white/15"
                    >
                      Schedule Another Visit
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
