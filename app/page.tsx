
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhatWeDo from "@/components/WhatWeDo";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import LetsTalk from "@/components/LetsTalk";
import Footer from "@/components/Footer";
export default function Home() {
  return (
     <main className="bg-black min-h-screen text-white">
   <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <WhatWeDo />
      <TrustedBy />
      <Testimonials/>
      <LetsTalk />
      <Footer />
      </main>
  );
}

