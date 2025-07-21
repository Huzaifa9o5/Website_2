"use client";

import { useState, useEffect, useRef } from "react";

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const clients = [
    {
      name: "Bank Al Habib",
      logo: "/assets/images/bank-al-habib.png",
    },
    {
      name: "Pakistan Air Force",
      logo: "/assets/images/paf-logo.png",
    },
    {
      name: "Heavy Industries Taxila",
      logo: "/assets/images/hit-logo.png",
    },
    {
      name: "National Bank of Pakistan",
      logo: "/assets/images/nbp-logo.png",
    },
    {
      name: "The First MicroFinanceBank",
      logo: "/assets/images/tfmfb.png",
    },
    {
      name: "Honda",
      logo: "/assets/images/honda.png",
    },
    {
      name: "Fauji Fertilizer Bin Qasim Ltd",
      logo: "/assets/images/ffbl.png",
    },
    {
      name: "Sybrid",
      logo: "/assets/images/sybrid.png",
    },
    {
      name: "Oil & Gas Development Company",
      logo: "/assets/images/OGDCL.png",
    },
    {
      name: "Albayrak",
      logo: "/assets/images/Albayrak.png",
    },
  ];

  // Duplicate logos to create seamless marquee effect
  const marqueeClients = [...clients, ...clients];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="clients"
      className={`py-20 bg-white relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Clients
          </span>
        </h2>
        <p className="text-xl max-w-3xl mx-auto text-gray-800 mb-10">
          Trusted by industry leaders and national institutions
        </p>

        <div className="relative group overflow-hidden py-8">
          <div className="flex space-x-12 w-max marquee-wrapper marquee-paused">
            {[...marqueeClients, ...marqueeClients].map((client, index) => (
              <div
                key={index}
                className="relative group flex-shrink-0 w-80 h-48 bg-gradient-to-br from-white-100 to-gray-900 rounded-xl shadow-md p-4 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain transition duration-300"
                />
                <div className="absolute bottom-2 opacity-0 group-hover:opacity-100 text-sm font-medium text-blue-900 transition-opacity duration-300">
                  {client.name}
                </div>
              </div>
            ))}
          </div>

          {/* Optional: Slider Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {[0, 1, 2, 3].map((dot) => (
              <span
                key={dot}
                className="w-3 h-3 rounded-full bg-[#25237b] opacity-50 hover:opacity-100 transition"
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
