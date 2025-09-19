// app/page.tsx
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutUs from "@/app/components/AboutUs";
import OurServices from "@/app/components/OurServices";
import WhatWeDo from "@/app/components/WhatWeDo";
import TrustedBy from "@/app/components/TrustedBy";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <OurServices />
      <WhatWeDo />
      <TrustedBy />
      <Testimonials />
      <Footer />
    </main>
  );
}
