"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, ShieldCheck, User, Phone, Mail, FileText, Calendar, Clock, CheckCircle } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "Dental Implants",
    date: "",
    time: "10:00 AM - 11:00 AM",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const treatments = [
    "Dental Implants",
    "General Dentistry",
    "Root Canal Treatment",
    "Teeth Cleaning & Hygiene",
    "Cosmetic Dentistry",
    "Smile Makeovers",
  ];

  const timeSlots = [
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
    "07:00 PM - 08:00 PM",
  ];

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required.";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone)) {
      tempErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email address.";
    }
    if (!formData.date) tempErrors.date = "Select a preferred date.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Save appointment
      const newBooking = {
        id: Date.now().toString(),
        ...formData,
      };

      const current = localStorage.getItem("ved_dental_appointments");
      const appointmentsList = current ? JSON.parse(current) : [];
      appointmentsList.push(newBooking);
      localStorage.setItem("ved_dental_appointments", JSON.stringify(appointmentsList));

      // Trigger custom event to let navbar know appointments changed
      window.dispatchEvent(new Event("appointmentsChanged"));

      setSubmitted(true);
      // Clear form
      setFormData({
        name: "",
        phone: "",
        email: "",
        treatment: "Dental Implants",
        date: "",
        time: "10:00 AM - 11:00 AM",
      });
    }
  };

  return (
    <section id="book" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-blue">
            Reserve Your Visit
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Schedule a Guided Consultation <br />
            <span className="text-gradient-accent">For Your Smile</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-brand-text-muted font-medium leading-relaxed">
            Fill out the form below. Our clinical coordinators will verify your details and 
            confirm your slot within 2 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Clinic policies & support */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 rounded-3xl bg-brand-light/40 border border-brand-blue/5">
              <h3 className="text-base font-bold text-brand-dark flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-brand-blue" />
                Appointment Standards
              </h3>
              <p className="mt-3 text-xs text-brand-text-muted font-medium leading-relaxed">
                We value your time. If you need to cancel or reschedule, please do so at least 24 hours 
                prior to your appointment using the dashboard or via phone.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-brand-light/40 border border-brand-blue/5">
              <h3 className="text-base font-bold text-brand-dark flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
                Patient Privacy
              </h3>
              <p className="mt-3 text-xs text-brand-text-muted font-medium leading-relaxed">
                Your medical history and contact information are encrypted and protected under strict 
                healthcare data guidelines.
              </p>
            </div>

            {/* Quick Contact info */}
            <div className="pt-4 text-xs font-semibold text-brand-text-muted">
              <p>Need urgent assistance? Call us directly:</p>
              <p className="mt-2 text-base font-extrabold text-brand-blue">
                +91 98765 43210
              </p>
              <p className="mt-1 text-[10px] text-brand-text-muted/80">
                Opening Hours: Mon - Sat: 10:00 AM to 08:30 PM
              </p>
            </div>
          </div>

          {/* Right Column: Glassmorphism Booking Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-3xl border border-gray-100 shadow-premium space-y-5"
            >
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-brand-text-muted flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-brand-blue" />
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl glass-input text-xs font-medium"
                />
                {errors.name && <p className="text-[10px] font-bold text-red-500">{errors.name}</p>}
              </div>

              {/* Contact Grid: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-brand-text-muted flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-brand-blue" />
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl glass-input text-xs font-medium"
                  />
                  {errors.phone && <p className="text-[10px] font-bold text-red-500">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-brand-text-muted flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-brand-blue" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl glass-input text-xs font-medium"
                  />
                  {errors.email && <p className="text-[10px] font-bold text-red-500">{errors.email}</p>}
                </div>
              </div>

              {/* Treatment Selected */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-brand-text-muted flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-brand-blue" />
                  Select Treatment <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl glass-input text-xs font-medium bg-white"
                >
                  {treatments.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Scheduling Grid: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-brand-text-muted flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl glass-input text-xs font-medium"
                  />
                  {errors.date && <p className="text-[10px] font-bold text-red-500">{errors.date}</p>}
                </div>

                {/* Time slot */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-brand-text-muted flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-blue" />
                    Preferred Time Slot <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl glass-input text-xs font-medium bg-white"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 bg-brand-blue text-white font-bold text-sm px-6 py-4.5 rounded-xl hover:bg-brand-blue/95 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Request Appointment Confirm
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {submitted && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setSubmitted(false)}
              className="fixed inset-0 bg-black z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-x-4 top-1/4 max-w-sm mx-auto bg-white p-8 rounded-3xl z-50 shadow-2xl text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-blue mx-auto">
                <CheckCircle className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Booking Submitted!</h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                Thank you! Your appointment request has been logged. You can review and manage this slot in the 
                <strong>"My Bookings"</strong> dashboard accessible from the calendar icon in the top header.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="w-full py-3 bg-brand-blue text-white font-bold text-xs rounded-xl shadow-md hover:bg-brand-blue/95 transition-all"
              >
                Close & Check Bookings
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
