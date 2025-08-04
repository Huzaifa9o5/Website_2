"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const certifications = [
    {
      title: "P@SHA Member",
      description: "Pakistan Software Houses Association",
      image: "/assets/images/certifications/PASHA.png",
    },
    {
      title: "PSEB",
      description: "Quality Management Systems",
      image: "/assets/images/certifications/PSEB.png",
    },
    {
      title: "PTA",
      description: "Regulatory Body For Telecom",
      image: "/assets/images/certifications/PTA.png",
    },
    {
      title: "PAeC",
      description: "Defense Contractor And An Aerospace Manufacturer",
      image: "/assets/images/certifications/paec.png",
    },
    {
      title: "ISO 9001",
      description: "Standard For Quality Management Systems",
      image: "/assets/images/certifications/ISO-9001.png",
    },
    {
      title: "ISO 20000",
      description: "International IT Service Management Standard",
      image: "/assets/images/certifications/iso2000-01.png",
    },
    {
      title: "MIL-STD-461",
      description:
        "Military standard that specifies requirements for the control of electromagnetic interference (EMI) characteristics of electronic equipment and subsystems",
      image: "/assets/images/certifications/mil-std-461.png",
    },
    {
      title: "MIL-STD-704",
      description:
        "U.S. military standard that defines the characteristics of electrical power provided to equipment on military aircraft.",
      image: "/assets/images/certifications/mil-std-704.png",
    },
    {
      title: "MIL-STD-810",
      description:
        "Military standard that establishes environmental engineering considerations and laboratory tests to assess the performance of equipment under various environmental conditions.",
      image: "/assets/images/certifications/mil-std-810.png",
    },
  ];

  const marqueeCerts = [...certifications, ...certifications]; // duplicate for smooth loop

  const marqueeControls = useAnimation();

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

  // Infinite scroll loop animation
  useEffect(() => {
    marqueeControls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 30,
      },
    });
  }, [marqueeControls]);

  return (
    <section
      ref={sectionRef}
      id="clients"
      className={`py-20 bg-white relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-8 text-center">
        {" "}
        {/* Increased padding */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 hover:scale-105 transition-transform duration-300">
          Our{" "}
          <span className="bg-gradient-to-r from-[#0f68f7] to-[#e80219] bg-clip-text text-transparent">
            Certifications & Compliances
          </span>
        </h2>
        <p className="text-xl max-w-3xl mx-auto text-gray-800 mb-12">
          Recognized and accredited by national and international bodies
        </p>
        <div className="relative w-[calc(100%-40px)] mx-auto h-[280px] py-6">
          {" "}
          <motion.div
            className="flex space-x-12 w-max"
            animate={marqueeControls}
          >
            {marqueeCerts.map((cert, index) => (
              <div
                key={index}
                className="relative group flex-shrink-0 w-80 h-48 bg-gray-100 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-28 h-full object-contain transition duration-300"
                />
                <div className="absolute bottom-2 opacity-0 group-hover:opacity-100 text-sm font-medium text-blue-900 transition-opacity duration-300">
                  {cert.title}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Optional: Slider Dots */}
        {/* <div className="flex justify-center mt-6 space-x-2">
          {[0, 1, 2, 3].map((dot) => (
            <span
              key={dot}
              className="w-3 h-3 rounded-full bg-[#25237b] opacity-50 hover:opacity-100 transition"
            ></span>
          ))}
        </div> */}
      </div>
    </section>
  );
}
