"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Menu, X, Eye, Clock, Trash2, Shield } from "lucide-react";

export default function VistaNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingsOpen, setBookingsOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    window.dispatchEvent(new Event("vistaAppointmentsChanged"));
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Studio", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Technology", href: "#tech" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled ? "py-4 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-gray-900 block leading-none">
                VISTA
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-teal-600 block mt-0.5">
                Dental Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 font-medium text-sm text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-teal-600 transition-colors duration-300 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setBookingsOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-teal-50 text-teal-600 transition-colors"
              aria-label="View Reservations"
            >
              <Calendar className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-teal-400 rounded-full animate-ping"></span>
            </button>

            <a
              href="#book"
              className="hidden sm:inline-flex items-center justify-center bg-teal-600 text-white font-bold text-sm px-7 py-3 rounded-full hover:bg-teal-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Schedule Visit
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full hover:bg-gray-100 text-gray-900 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-4 absolute top-full left-0 w-full shadow-lg"
            >
              <div className="flex flex-col space-y-4 font-semibold text-gray-900">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-teal-600 transition-colors duration-300 py-1"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-teal-600 text-white text-center py-3 rounded-full shadow-md font-bold text-sm block"
                >
                  Schedule Visit
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Reservations Drawer */}
      <AnimatePresence>
        {bookingsOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setBookingsOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Studio Reservations</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Your scheduled visits to Vista Dental Studio</p>
                </div>
                <button
                  onClick={() => setBookingsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-200 text-gray-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {appointments.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <Calendar className="w-12 h-12 text-teal-600/30 mb-3" />
                    <p className="font-semibold text-gray-900">No active reservations</p>
                    <p className="text-xs text-gray-500 max-w-xs mt-1">
                      Schedule your dental visit using the reservation form below.
                    </p>
                  </div>
                ) : (
                  appointments.map((app) => (
                    <div
                      key={app.id}
                      className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm relative group hover:border-teal-500/30 transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-teal-50 text-teal-700">
                            {app.treatment}
                          </span>
                          <h4 className="font-bold text-gray-900 mt-2">{app.name}</h4>
                        </div>
                        <button
                          onClick={() => deleteAppointment(app.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-50 grid grid-cols-2 gap-2 text-xs text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-teal-600" />
                          <span>{app.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-teal-600" />
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
