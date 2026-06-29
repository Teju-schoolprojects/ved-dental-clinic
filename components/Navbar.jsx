"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Menu, X, Shield, Clock, MapPin, Trash2 } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingsOpen, setBookingsOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);

  // Handle scroll class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch appointments from localStorage when drawer opens
  useEffect(() => {
    if (bookingsOpen) {
      const stored = localStorage.getItem("ved_dental_appointments");
      if (stored) {
        setAppointments(JSON.parse(stored));
      } else {
        setAppointments([]);
      }
    }
  }, [bookingsOpen]);

  const deleteAppointment = (id) => {
    const updated = appointments.filter((app) => app.id !== id);
    setAppointments(updated);
    localStorage.setItem("ved_dental_appointments", JSON.stringify(updated));
    // Dispatch event to sync booking count if needed
    window.dispatchEvent(new Event("appointmentsChanged"));
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experts", href: "#experts" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Tech", href: "#our-technology" },
    { name: "Implant Tech", href: "#implant-tech" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Journey", href: "#journey" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled ? "py-4 glass-navbar shadow-premium" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-5 h-5 fill-brand-accent/20" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-brand-dark block leading-none">
                VED DENTAL
              </span>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-blue block mt-0.5">
                Clinic & Implant Center
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 font-medium text-sm text-brand-text">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-blue transition-colors duration-300 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* View Bookings Button */}
            <button
              onClick={() => setBookingsOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-brand-blue/5 text-brand-blue transition-colors"
              aria-label="View Appointments"
            >
              <Calendar className="w-5 h-5" />
              {/* Pulse notification if there are bookings */}
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-brand-accent rounded-full animate-ping"></span>
            </button>

            {/* Book Now button */}
            <a
              href="#book"
              className="hidden sm:inline-flex items-center justify-center bg-brand-blue text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-brand-blue/90 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Appointment
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full hover:bg-gray-100 text-brand-dark transition-colors"
              aria-label="Toggle menu"
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
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-4 absolute top-full left-0 w-full shadow-premium"
            >
              <div className="flex flex-col space-y-4 font-semibold text-brand-dark">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-brand-blue transition-colors duration-300 py-1"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-brand-blue text-white text-center py-3 rounded-full shadow-md font-semibold text-sm block"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Bookings Drawer (Sidebar) */}
      <AnimatePresence>
        {bookingsOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setBookingsOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            {/* Drawer Body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-brand-light/30">
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">My Scheduled Bookings</h3>
                  <p className="text-xs text-brand-text-muted mt-0.5">
                    Manage your visits to Ved Dental Clinic
                  </p>
                </div>
                <button
                  onClick={() => setBookingsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-brand-dark transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Booking List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {appointments.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <Calendar className="w-12 h-12 text-brand-blue/30 stroke-[1.5] mb-3" />
                    <p className="font-semibold text-brand-dark">No appointments found</p>
                    <p className="text-xs text-brand-text-muted max-w-xs mt-1">
                      Use the appointment booking form below to schedule your dental visit.
                    </p>
                    <a
                      href="#book"
                      onClick={() => setBookingsOpen(false)}
                      className="mt-4 text-xs font-semibold text-brand-blue border border-brand-blue/30 px-4 py-2 rounded-full hover:bg-brand-blue/5 transition-colors"
                    >
                      Book Now
                    </a>
                  </div>
                ) : (
                  appointments.map((app) => (
                    <div
                      key={app.id}
                      className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm relative group hover:border-brand-blue/20 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue">
                            {app.treatment}
                          </span>
                          <h4 className="font-bold text-brand-dark mt-2">{app.name}</h4>
                        </div>
                        <button
                          onClick={() => deleteAppointment(app.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                          title="Cancel Appointment"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-50 grid grid-cols-2 gap-2 text-xs text-brand-text-muted">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                          <span>{app.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-brand-blue" />
                          <span>{app.time}</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Policy Info */}
              <div className="p-6 border-t border-gray-100 bg-gray-50/50 text-[11px] text-brand-text-muted flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <p>
                  Appointments booked here are stored locally in your browser. To reschedule or ask
                  questions, please contact us at Ved Dental Clinic, Ambernath.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
