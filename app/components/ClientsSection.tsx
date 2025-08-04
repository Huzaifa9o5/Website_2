// "use client";

// import { useState, useEffect, useRef } from "react";

// export default function ClientsSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   const clients = [
//     {
//       name: "Bank Al Habib",
//       logo: "/assets/images/bank-al-habib.png",
//     },
//     {
//       name: "Pakistan Air Force",
//       logo: "/assets/images/paf-logo.png",
//     },
//     {
//       name: "Heavy Industries Taxila",
//       logo: "/assets/images/hit-logo.png",
//     },
//     {
//       name: "National Bank of Pakistan",
//       logo: "/assets/images/nbp-logo.png",
//     },
//     {
//       name: "The First MicroFinanceBank",
//       logo: "/assets/images/tfmfb.png",
//     },
//     {
//       name: "Honda",
//       logo: "/assets/images/honda.png",
//     },
//     {
//       name: "Fauji Fertilizer Bin Qasim Ltd",
//       logo: "/assets/images/ffbl.png",
//     },
//     {
//       name: "Sybrid",
//       logo: "/assets/images/sybrid.png",
//     },
//     {
//       name: "Oil & Gas Development Company",
//       logo: "/assets/images/OGDCL.png",
//     },
//     {
//       name: "Albayrak",
//       logo: "/assets/images/Albayrak.png",
//     },
//   ];

//   // Duplicate logos to create seamless marquee effect
//   const marqueeClients = [...clients, ...clients];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="clients"
//       className={`py-20 bg-white relative overflow-hidden transition-all duration-1000 ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//     >
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
//           Our{" "}
//           <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Clients
//           </span>
//         </h2>
//         <p className="text-xl max-w-3xl mx-auto text-gray-800 mb-10">
//           Trusted by industry leaders and national institutions
//         </p>

//         <div className="relative group overflow-hidden py-8">
//           <div className="flex space-x-12 w-max marquee-wrapper marquee-paused">
//             {[...marqueeClients, ...marqueeClients].map((client, index) => (
//               <div
//                 key={index}
//                 className="relative group flex-shrink-0 w-80 h-48 bg-gradient-to-br from-white-100 to-gray-900 rounded-xl shadow-md p-4 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300"
//               >
//                 <img
//                   src={client.logo}
//                   alt={client.name}
//                   className="max-h-16 max-w-full object-contain transition duration-300"
//                 />
//                 <div className="absolute bottom-2 opacity-0 group-hover:opacity-100 text-sm font-medium text-blue-900 transition-opacity duration-300">
//                   {client.name}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Optional: Slider Dots */}
//           <div className="flex justify-center mt-6 space-x-2">
//             {[0, 1, 2, 3].map((dot) => (
//               <span
//                 key={dot}
//                 className="w-3 h-3 rounded-full bg-[#25237b] opacity-50 hover:opacity-100 transition"
//               ></span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// export default function ClientsSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   const clients = [
//     {
//       name: "Bank Al Habib",
//       logo: "/assets/images/bank-al-habib.png",
//     },
//     {
//       name: "Pakistan Air Force",
//       logo: "/assets/images/paf-logo.png",
//     },
//     {
//       name: "Heavy Industries Taxila",
//       logo: "/assets/images/hit-logo.png",
//     },
//     {
//       name: "National Bank of Pakistan",
//       logo: "/assets/images/nbp-logo.png",
//     },
//     {
//       name: "The First MicroFinanceBank",
//       logo: "/assets/images/tfmfb.png",
//     },
//     {
//       name: "Honda",
//       logo: "/assets/images/honda.png",
//     },
//     {
//       name: "Fauji Fertilizer Bin Qasim Ltd",
//       logo: "/assets/images/ffbl.png",
//     },
//     {
//       name: "Sybrid",
//       logo: "/assets/images/sybrid.png",
//     },
//     {
//       name: "Oil & Gas Development Company",
//       logo: "/assets/images/OGDCL.png",
//     },
//     {
//       name: "Albayrak",
//       logo: "/assets/images/Albayrak.png",
//     },
//     {
//       name:"ANPC",
//       logo:"/assets/images/anpc.jpeg"
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       id="clients"
//       ref={sectionRef}
//       className="py-20 bg-white relative overflow-hidden transition-all duration-1000"
//     >
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
//           Our{" "}
//           <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Clients
//           </span>
//         </h2>
//         <p className="text-xl max-w-3xl mx-auto text-gray-800 mb-10">
//           Trusted by industry leaders and national institutions
//         </p>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2 sm:px-4 md:px-8">
//           {clients.map((client, index) => (
//             <motion.div
//               key={index}
//               className="bg-white border border-gray-200  shadow-md rounded-xl p-4 flex items-center justify-center h-24 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
//               initial={{ y: -50, opacity: 0 }}
//               animate={
//                 isVisible
//                   ? { y: 0, opacity: 1 }
//                   : { y: -50, opacity: 0 }
//               }
//               transition={{
//                 delay: index * 0.3  ,
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 12,
//               }}
//             >
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 className="max-h-16 max-w-full object-contain"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Tilt from "react-parallax-tilt";

export default function ClientsSection() {
  const clients = [
    { name: "Bank Al Habib", logo: "/assets/images/clients/bank-al-habib.png" },
    { name: "Pakistan Air Force", logo: "/assets/images/clients/paf-logo.png" },
    {
      name: "Heavy Industries Taxila",
      logo: "/assets/images/clients/hit-logo.png",
    },
    { name: "ANPC", logo: "/assets/images/clients/ANPC.png" },
    {
      name: "National Bank of Pakistan",
      logo: "/assets/images/clients/NBP-01.png",
    },
    {
      name: "The First MicroFinanceBank",
      logo: "/assets/images/clients/tfmfb.png",
    },
    { name: "Honda", logo: "/assets/images/clients/Honda-01.png" },
    {
      name: "Fauji Fertilizer Bin Qasim Ltd",
      logo: "/assets/images/clients/ffbl.png",
    },
    { name: "Sybrid", logo: "/assets/images/clients/sybrid.png" },
    {
      name: "Oil & Gas Development Company",
      logo: "/assets/images/clients/OGDCL.png",
    },
    { name: "Albayrak", logo: "/assets/images/clients/Albayrak.png" },
  ];

  // Group clients into chunks of 4
  const groupedClients = [];
  for (let i = 0; i < clients.length; i += 4) {
    groupedClients.push(clients.slice(i, i + 4));
  }

  return (
    <section
      id="clients"
      className="relative py-12 bg-black overflow-hidden"
      style={{
        backgroundImage: `url('/assets/images/clients.jpg')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
          Our{" "}
          <span className="bg-gradient-to-r from-[#0f68f7] to-[#e80219] bg-clip-text text-transparent">
            Clients
          </span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-300 mb-16">
          Trusted by industry leaders and national institutions
        </p>

        <div className="pb-20">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={1000}
            spaceBetween={30}
            pagination={{
              clickable: true,
              dynamicBullets: false,
              el: ".custom-pagination",
              type: "bullets",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
              renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
              },
            }}
            slidesPerView={1}
            className="!pb-16"
          >
            {groupedClients.map((clientGroup, index) => (
              <SwiperSlide key={index} className="py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {clientGroup.map((client, idx) => (
                    <Tilt
                      key={idx}
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      perspective={1000}
                      scale={1.05}
                      transitionSpeed={1500}
                      glareEnable={true}
                      glareMaxOpacity={0.2}
                      glareColor="lightblue"
                      glarePosition="all"
                      className="rounded-xl h-full"
                    >
                      <div className="bg-white border border-white backdrop-blur-lg p-8 flex items-center justify-center rounded-xl transition-all duration-500 hover:scale-105">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-h-32 max-w-full object-contain transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </Tilt>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination flex justify-center gap-3 mt-5"></div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination {
          position: relative;
          bottom: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 12px;
          padding-top: 5px;
        }
        .custom-bullet {
          width: 60px;
          height: 5px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
          transition: all 0.7s ease;
        }
        .custom-bullet-active {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transform: scaleY(1.5);
        }
      `}</style>
    </section>
  );
}
