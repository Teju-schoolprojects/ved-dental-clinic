import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Doctors from "@/components/Doctors";
import Services from "@/components/Services";
import SmileGallery from "@/components/SmileGallery";
import OurTechnology from "@/components/OurTechnology";
import ImplantShowcase from "@/components/ImplantShowcase";
import TechShowcaseSection from "@/components/TechShowcaseSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PatientJourney from "@/components/PatientJourney";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Sticky Header Nav */}
      <Navbar />

      {/* Core Sections */}
      <main className="flex flex-col min-h-screen">
        {/* 1. Hero with 3D Tooth */}
        <Hero />

        {/* 2. About Clinic */}
        <About />

        {/* 3. Meet the Experts */}
        <Doctors />

        {/* 4. Services Tilt Cards */}
        <Services />

        {/* 5. Smile Gallery Showcase */}
        <SmileGallery />

        {/* 6. Our Technology Section Template */}
        <OurTechnology />

        {/* 7. Dental Implant Exploded 3D Assembly */}
        <ImplantShowcase />

        {/* 8. Why Choose Us Trust Standards */}
        <WhyChooseUs />

        {/* 9. Holographic Dental Tech Scanner */}
        <TechShowcaseSection />

        {/* 10. Patient Journey Timeline */}
        <PatientJourney />

        {/* 11. Booking Form (localStorage sync) */}
        <Booking />

        {/* 12. Contact Info & Google Map */}
        <Contact />
      </main>

      {/* Footer & Certifications */}
      <Footer />
    </>
  );
}
