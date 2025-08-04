"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function MapSection() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -100px 0px" });

  const markers = [
    { name: "Singapore", style: "top-[68%] left-[69%]", value: "Export: 150M" },
    { name: "France", style: "top-[45%] left-[47%]", value: "R&D: 200+" },
    { name: "Qatar", style: "top-[61%] left-[57%]", value: "HQ: 1,200+" },
    { name: "Zambia", style: "top-[64%] left-[50%]", value: "HQ: 1,200+" },
    { name: "USA", style: "top-[50%] left-[23%]", value: "HQ: 1,200+" },
    { name: "Pakistan", style: "top-[58%] left-[61%]", value: "Employees: 320" },
  ];

  const stats = [
    { number: 500, label: "Projects Delivered", suffix: "+", icon: "ri-trophy-line" },
    { number: 50, label: "Expert Engineers", suffix: "+", icon: "ri-team-line" },
    { number: 99, label: "Satisfaction", suffix: "%", icon: "ri-heart-line" },
    { number: 24, label: "Support Hours", suffix: "/7", icon: "ri-customer-service-line" },
  ];

  useEffect(() => {
    if (isInView) animateCounters();
  }, [isInView]);

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
      className="relative py-20 text-white overflow-hidden bg-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
          Our <span className="bg-gradient-to-r from-[#0f68f7] to-[#e80219] bg-clip-text text-transparent">Global Presence</span>
        </h2>
        <p className="text-lg text-gray-800 mt-4">Trusted leaderships</p>
      </div>

      <div className="px-2 md:px-6">
        <div className="relative max-w-8xl mx-auto h-[700px] overflow-hidden rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3),0_-20px_40px_-10px_rgba(0,0,0,0.2)]">
          <img
            src="/assets/images/map.jpg"
            alt="World Map"
            className="w-full h-full object-cover rounded-xl"
          />

          {markers.map((marker, idx) => (
            <div
              key={idx}
              className={`absolute ${marker.style} flex flex-col items-center group`}
            >
              {isInView && (
                <motion.div
                  className="w-4 h-4 bg-red-700 rounded-full shadow-lg"
                  animate={{ scale: [1, 1.8, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
              <div className="bg-white text-black text-xs font-semibold px-2 py-1 mt-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                {marker.name}
              </div>
            </div>
          ))}

          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative group p-[2px] rounded-xl transition-all transform hover:scale-105"
                >
                  <div className="bg-white/10 group-hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 w-full h-full transition-all duration-500 ease-in-out">
                    <div className="text-black group-hover:text-blue-900 text-3xl font-bold transition-colors duration-300">
                      {counters[index]}
                      {stat.suffix}
                    </div>
                    <p className="text-sm text-black group-hover:text-blue-900 mt-1 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-black group-hover:animate-border-glow pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";

// declare global {
//   interface Window {
//     Sketchfab: any;
//   }
// }

// export default function MapSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js";
//     script.async = true;
//     script.onload = () => {
//       const iframe = document.createElement("iframe");
//       iframe.setAttribute("id", "api-frame");
//       iframe.setAttribute("allow", "autoplay; fullscreen; xr-spatial-tracking");
//       iframe.setAttribute("allowfullscreen", "true");
//       iframe.setAttribute("mozallowfullscreen", "true");
//       iframe.setAttribute("webkitallowfullscreen", "true");
//       iframe.className = "w-full h-full rounded-xl";
//       document.getElementById("sketchfab-viewer")?.appendChild(iframe);

//       const client = new window.Sketchfab(iframe);
//       client.init("f996c2489cfc435eb79399ad1890f8e0", {
//         success: function (api: any) {
//           api.start();
//           api.addEventListener("viewerready", function () {
//             console.log("Sketchfab viewer is ready");
//           });
//         },
//         error: function () {
//           console.log("Sketchfab viewer error");
//         },
//       });
//     };

//     document.body.appendChild(script);

//     return () => {
//       const viewer = document.getElementById("sketchfab-viewer");
//       if (viewer) viewer.innerHTML = "";
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`relative z-20 px-6 py-24 sm:py-32 lg:px-8 h-[700px] overflow-hidden`}
//     >
//       <div className="mx-auto max-w-3xl text-center">
//         <h2
//           className={`text-3xl font-bold tracking-tight text-white sm:text-4xl transition-opacity duration-1000 ease-in-out ${
//             isVisible ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           Our Global Reach
//         </h2>
//         <p
//           className={`mt-4 text-lg leading-8 text-white/70 transition-opacity duration-1000 ease-in-out ${
//             isVisible ? "opacity-100 delay-300" : "opacity-0"
//           }`}
//         >
//           We’ve worked with clients from all over the world.
//         </p>
//       </div>

//       <div
//         className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//           isVisible ? "opacity-100 delay-500" : "opacity-0"
//         }`}
//       >
//         <div id="sketchfab-viewer" className="w-full h-full rounded-xl" />
//       </div>
//     </section>
//   );
// }
