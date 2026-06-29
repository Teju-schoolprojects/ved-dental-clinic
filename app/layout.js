import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: "Ved Dental Clinic & Implant Center | Advanced Care & Implants",
  description: "Experience premium modern dentistry and advanced dental implant solutions at Ved Dental Clinic & Implant Center in Ambernath, Thane. Specializing in high-end implants, root canals, cosmetic dentistry, and smile makeovers with state-of-the-art technology.",
  keywords: [
    "dental clinic Ambernath",
    "implant center Thane",
    "dental implants Maharashtra",
    "dentist in Ambernath",
    "root canal treatment",
    "cosmetic dentistry",
    "smile makeover",
    "Ved dental clinic",
    "best dentist Ambernath",
    "implantologist Thane",
  ],
  authors: [{ name: "Ved Dental Clinic" }],
  robots: "index, follow",
  openGraph: {
    title: "Ved Dental Clinic & Implant Center | Advanced Care & Implants",
    description: "State-of-the-art dental care & implant solutions in Ambernath, Thane. Book your modern dentistry experience today.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-brand-dark bg-[#fafbfe]">
        {children}
      </body>
    </html>
  );
}
