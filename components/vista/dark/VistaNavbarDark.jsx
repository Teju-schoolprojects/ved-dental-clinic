"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Menu, X, Eye, Clock, Trash2, Shield } from "lucide-react";

export default function VistaNavbarDark() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingsOpen, setBookingsOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (bookingsOpen) {
      const stored = localStorage.getItem("vista_appointments");
      setAppointments(stored ? JSON.parse(stored) : []);
    }
  }, [bookingsOpen]);

  const deleteAppointment = (id) => {
    const updated = appointments.filter((app) => app.id !== id);
    setAppointments(updated);
    localStorage.setItem("vista_appointments", JSON.stringify(updated));
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Philosophy", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Technology", href: "#tech" },
    { name: "Cases", href: "#gallery" },
  ];

  return (
    <>
      {/* Floating Pill Navigation Dock */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-5xl bg-black/75 backdrop-blur-2xl rounded-full border border-white/15 px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-between transition-all duration-300">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-black font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)] group-hover:scale-105 transition-transform">
            <Eye className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-base font-extrabold tracking-tight text-white block leading-none">
              VISTA
            </span>
            <span className="text-[8px] font-extrabold uppercase tracking-widest text-cyan-400 block mt-0.5">
              Dental Studio
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7 font-semibold text-xs text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors duration-300 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setBookingsOpen(true)}
            className="p-2 rounded-full hover:bg-white/10 text-cyan-400 transition-colors relative"
            title="View Reservations"
          >
            <Calendar className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></span>
          </button>

          <a
            href="#book"
            className="hidden sm:inline-flex items-center justify-center bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-extrabold text-xs px-5 py-2.5 rounded-full hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all duration-300 hover:scale-105"
          >
            Book Visit
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl bg-gray-950/95 backdrop-blur-2xl rounded-3xl border border-white/15 p-6 z-40 shadow-2xl md:hidden flex flex-col space-y-4 font-bold text-sm text-white"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-cyan-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gradient-to-r from-teal-400 to-cyan-400 text-black text-center py-3 rounded-full font-extrabold text-xs block"
            >
              Book Visit
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark Reservations Drawer */}
      <AnimatePresence>
        {bookingsOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setBookingsOpen(false)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-gray-950 text-white z-50 shadow-2xl flex flex-col border-l border-white/10"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                <div>
                  <h3 className="text-base font-bold text-white">Studio Reservations</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Your scheduled appointments at Vista Dental</p>
                </div>
                <button
                  onClick={() => setBookingsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {appointments.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <Calendar className="w-12 h-12 text-cyan-400/30 mb-3" />
                    <p className="font-semibold text-white">No active reservations</p>
                    <p className="text-xs text-gray-400 max-w-xs mt-1">
                      Schedule your appointment using our instant booking portal.
                    </p>
                  </div>
                ) : (
                  appointments.map((app) => (
                    <div
                      key={app.id}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 relative group hover:border-cyan-400/40 transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30">
                            {app.treatment}
                          </span>
                          <h4 className="font-bold text-white mt-2.5 text-sm">{app.name}</h4>
                        </div>
                        <button
                          onClick={() => deleteAppointment(app.id)}
                          className="p-1.5 text-red-400 hover:bg-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-gray-300">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{app.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{app.time}</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
