"use client";

import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";
import MapSection from "./components/MapSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientsSection from "./components/ClientsSection";
import CertificationSection from "./components/CertificationSection";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen scroll-smooth transition-all duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        {/* <AboutSection /> */}
        <MapSection />
        <ClientsSection />
        <CertificationSection />
        {/* <StatsSection /> */}
        <FeaturesSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
}
