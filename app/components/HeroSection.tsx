"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    "Hardware Excellence",
    "Software Innovation",
    "Engineering Solutions",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/video/hardware.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-28">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Pioneering
            <span className="block">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {heroTexts[currentText]}
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into reality through cutting-edge hardware and
            software engineering solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              Explore Our Solutions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              Watch Demo
            </button>
          </div>
        </div>

        <div
          className={`pb-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {[
            {
              icon: "ri-cpu-line",
              title: "Hardware Design",
              desc: "Custom PCB & Embedded Systems",
            },
            {
              icon: "ri-code-s-slash-line",
              title: "Software Development",
              desc: "Full-stack & Mobile Applications",
            },
            {
              icon: "ri-settings-3-line",
              title: "System Integration",
              desc: "End-to-end Engineering Solutions",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <i className={`${item.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
