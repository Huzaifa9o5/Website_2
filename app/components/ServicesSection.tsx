// "use client";

// import { useRef, useState, useLayoutEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function ServicesSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [scrollWidth, setScrollWidth] = useState(0);

//   const featuredServices = [
//     {
//       icon: "ri-code-line",
//       title: "Enterprise Software Solutions",
//       description: "Proven track record in scalable enterprise software.",
//       features: ["C4I System", "Banking", "Fintech", "Embedded Solutions"],
//     },
//     {
//       icon: "ri-brain-line",
//       title: "AI Development Services",
//       description: "Custom AI integration tailored to your needs.",
//       features: [
//         "Business Analytics Suite",
//         "Tracking Systems",
//         "Brain Image Processing",
//       ],
//     },
//     {
//       icon: "ri-terminal-window-line",
//       title: "Automotive Electronics",
//       description: "Access control and lifecycle automotive electronics.",
//       features: ["Fleet Management", "Infotainment System"],
//     },
//     {
//       icon: "ri-computer-line",
//       title: "Embedded Design Services",
//       description: "High-speed SBCs, custom boards, military avionics.",
//       features: ["Military Avionics", "Ground Defense", "Autotracking"],
//     },
//     {
//       icon: "ri-cpu-line",
//       title: "Embedded Systems Development",
//       description: "IoT, RTOS, automation with real-time reliability.",
//       features: ["IoT Devices", "Automation", "RTOS", "Firmware"],
//     },
//   ];

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"], // <--- this is better
//   });

//   useLayoutEffect(() => {
//     const scrollContainer = scrollContainerRef.current;

//     const updateScrollWidth = () => {
//       if (scrollContainer) {
//         const totalScroll = scrollContainer.scrollWidth - window.innerWidth; // instead of clientWidth
//         setScrollWidth(totalScroll);
//       }
//     };

//     updateScrollWidth();

//     const resizeObserver = new ResizeObserver(updateScrollWidth);
//     if (scrollContainer) {
//       resizeObserver.observe(scrollContainer);
//     }

//     return () => {
//       resizeObserver.disconnect();
//     };
//   }, []);

//   const x = useTransform(scrollYProgress, [0.1, 0.7], [0, -scrollWidth]);

//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-[200vh] bg-gradient-to-br from-gray-50 to-white"
//         style={{
//         backgroundImage: `url('/assets/images/services1.jpg')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="container mx-auto px-4 text-center mt-8 py-5">
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
//           Our{" "}
//           <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//             Services
//           </span>
//         </h2>
//         <p className="text-lg max-w-3xl mx-auto text-white mb-16">
//           Trusted by industry leaders and national institutions
//         </p>
//         </div>
//         <div className="sticky top-40 h-screen overflow-hidden py-5">
//           <motion.div
//             ref={scrollContainerRef}
//             style={{ x }}
//             className="flex space-x-10 px-10 w-max will-change-transform"
//           >
//             {featuredServices.map((service, index) => (
//               <div
//                 key={index}
//                 className="min-w-[35vw] max-w-[35vw] h-[350px] bg-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-2 hover:border-blue-400 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer snap-center flex flex-col items-center"
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div
//                   className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
//                     hoveredCard === index
//                       ? "bg-gradient-to-br from-blue-500 to-purple-500 scale-110 rotate-3 shadow-xl"
//                       : "bg-gradient-to-br from-gray-100 to-gray-200"
//                   }`}
//                 >
//                   <i
//                     className={`${
//                       service.icon
//                     } text-2xl transition-all duration-300 ${
//                       hoveredCard === index
//                         ? "text-white animate-pulse"
//                         : "text-gray-700"
//                     }`}
//                   />
//                 </div>

//                 <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>

//                 <div className="space-y-2">
//                   {service.features.map((feature, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300"
//                     >
//                       <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
//                       {feature}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       {/* </div> */}
//     </section>
//   );
// }
