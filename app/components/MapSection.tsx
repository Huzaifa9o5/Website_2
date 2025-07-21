"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function MapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement | null>(null);

  const markers = [
    { name: "USA", style: "top-[70%] left-[28%]", value: "Export: 150M" },
    { name: "Germany", style: "top-[45%] left-[47%]", value: "R&D: 200+" },
    { name: "Turkey", style: "top-[54%] left-[51%]", value: "HQ: 1,200+" },
    {
      name: "Pakistan",
      style: "top-[58%] left-[57%]",
      value: "Employees: 320",
    },
  ];

  const stats = [
    {
      number: 500,
      label: "Projects Delivered",
      suffix: "+",
      icon: "ri-trophy-line",
    },
    {
      number: 50,
      label: "Expert Engineers",
      suffix: "+",
      icon: "ri-team-line",
    },
    {
      number: 99,
      label: "Client Satisfaction",
      suffix: "%",
      icon: "ri-heart-line",
    },
    {
      number: 24,
      label: "Support Hours",
      suffix: "/7",
      icon: "ri-customer-service-line",
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("map-section");
      if (
        section &&
        section.getBoundingClientRect().top < window.innerHeight * 0.75
      ) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isVisible) animateCounters();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 30);
    });
  };

  return (
    <section
      id="map-section"
      ref={sectionRef}
      className="relative py-20 text-white overflow-hidden transition-all duration-500 ease-in-out shadow-2xl rounded-2xl"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
          Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Global Presence</span>
        </h2>
        <p className="text-lg text-gray-800 mt-4">Trusted leaderships</p>
      </div>

      {/* Map Container */}
   <div className="px-2 md:px-6">
  <div className="relative max-w-8xl mx-auto h-[700px] overflow-hidden rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3),0_-20px_40px_-10px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-[1.01]">
    <img
      src="/assets/images/map.jpg"
      alt="World Map"
      className="w-full h-full object-cover rounded-xl"
    />
    </div>
        {/* Markers */}
        {markers.map((marker, idx) => (
          <div
            key={idx}
            className={`absolute ${marker.style} flex flex-col items-center group`}
          >
            {isVisible && (
              <motion.div
                className="w-4 h-4 bg-red-700 rounded-full shadow-lg"
                animate={{ scale: [1, 1.8, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
            <div className="bg-white text-black text-xs font-semibold px-2 py-1 mt-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
              {marker.name}: {marker.value}
            </div>
          </div>
        ))}

        {/* Overlaid Stats */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group p-[2px] rounded-xl transition-all transform hover:scale-105"
              >
                <div className="bg-white/10 group-hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 w-full h-full transition-all duration-500 ease-in-out">
                  <div className="text-white group-hover:text-blue-900 text-3xl font-bold transition-colors duration-300">
                    {counters[index]}
                    {stat.suffix}
                  </div>
                  <p className="text-sm text-gray-200 group-hover:text-blue-900 mt-1 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>

                {/* Animated Border Overlay */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-black group-hover:animate-border-glow pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
