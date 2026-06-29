"use client";

import React from "react";
import VistaNavbar from "@/components/vista/VistaNavbar";
import VistaHero from "@/components/vista/VistaHero";
import VistaAbout from "@/components/vista/VistaAbout";
import VistaServices from "@/components/vista/VistaServices";
import VistaTech from "@/components/vista/VistaTech";
import VistaGallery from "@/components/vista/VistaGallery";
import VistaBooking from "@/components/vista/VistaBooking";
import VistaFooter from "@/components/vista/VistaFooter";
import CustomCursor from "@/components/CustomCursor";

export default function VistaDentalStudioPage() {
  return (
    <main className="min-h-screen bg-[#fafbfc] relative selection:bg-teal-500 selection:text-white">
      <CustomCursor />
      <VistaNavbar />
      <VistaHero />
      <VistaAbout />
      <VistaServices />
      <VistaTech />
      <VistaGallery />
      <VistaBooking />
      <VistaFooter />
    </main>
  );
}
