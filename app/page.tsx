"use client";

import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";
import MapSection from "./components/MapSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientsSection from "./components/ClientsSection";
import CertificationSection from "./components/CertificationSection";
import BlogsSection from "./components/BlogsSection"
import QuoteSection from "./components/QuoteSection";

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
        <ServiceSection />
        <MapSection />
        <CertificationSection />
        <ClientsSection />
        <QuoteSection/>
      <Footer />
      </main>
      
    </div>
  );
}
