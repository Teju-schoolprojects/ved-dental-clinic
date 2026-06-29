"use client";

import React from "react";
import VistaNavbarDark from "@/components/vista/dark/VistaNavbarDark";
import VistaHeroDark from "@/components/vista/dark/VistaHeroDark";
import VistaAboutDark from "@/components/vista/dark/VistaAboutDark";
import VistaServicesDark from "@/components/vista/dark/VistaServicesDark";
import VistaTechDark from "@/components/vista/dark/VistaTechDark";
import VistaGalleryDark from "@/components/vista/dark/VistaGalleryDark";
import VistaBookingDark from "@/components/vista/dark/VistaBookingDark";
import VistaFooterDark from "@/components/vista/dark/VistaFooterDark";
import CustomCursor from "@/components/CustomCursor";

export default function VistaDentalStudioPage() {
  return (
    <main className="min-h-screen bg-[#050E1A] text-white relative selection:bg-cyan-400 selection:text-black">
      <CustomCursor />
      <VistaNavbarDark />
      <VistaHeroDark />
      <VistaAboutDark />
      <VistaServicesDark />
      <VistaTechDark />
      <VistaGalleryDark />
      <VistaBookingDark />
      <VistaFooterDark />
    </main>
  );
}
