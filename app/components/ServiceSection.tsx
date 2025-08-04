"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Head from "next/head";

export default function ServicesSection() {
  const featuredServices = useMemo(
    () => [
      {
        iconType: "font",
        icon: "ri-cpu-line",
        title: "Embedded Design Services",
        description: "High-speed SBCs, custom boards, military avionics.",
        image: "/assets/images/embedded.jpg",
        bgImage: "/assets/images/services1.jpg",
        imageWidth: 200,
        imageHeight: 100,
      },
      {
        iconType: "image",
        iconImage: "/assets/images/esw.png",
        title: "Software Solutions",
        description: "Proven track record in scalable enterprise software.",
        image: "/assets/images/software.jpg",
        bgImage: "/assets/images/software1.jpg",
        imageWidth: 200,
        imageHeight: 100,
      },
      {
        iconType: "image",
        iconImage: "/assets/images/ai.png",
        title: "AI Development Services",
        description: "Custom AI integration tailored to your needs.",
        image: "/assets/images/ai.jpg",
        bgImage: "/assets/images/ai1.jpg",
        imageWidth: 200,
        imageHeight: 100,
      },
    ],
    []
  );

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentBg, setCurrentBg] = useState("/assets/images/services1.jpg");

  const handleCardHover = useCallback(
    (index: number | null, bgImage?: string) => {
      setHoveredCard(index);
      setCurrentBg(bgImage || "/assets/images/services1.jpg");
    },
    []
  );

  return (
    <>
      {/* Preload background images */}
      <Head>
        {featuredServices.map((service, index) => (
          <link
            rel="preload"
            as="image"
            href={service.bgImage}
            key={`preload-${index}`}
          />
        ))}
      </Head>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
            Our{" "}
            <span className="bg-gradient-to-r from-[#0f68f7] to-[#e80219] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 mb-4">
            Trusted by industry leaders and national institutions
          </p>
        </div>
      </section>

      <section className="relative pt-20 pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 transition-opacity duration-200 pointer-events-none">
          <Image
            src={currentBg}
            alt="Background"
            fill
            className="object-cover transition-opacity duration-500 will-change-opacity"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="min-w-[320px] h-[480px] bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-transparent hover:border-blue-400 transition-all duration-300 transform hover:scale-[1.03] will-change-transform cursor-pointer flex flex-col"
                onMouseEnter={() => handleCardHover(index, service.bgImage)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 will-change-transform ${
                      hoveredCard === index
                        ? "bg-gradient-to-r from-[#0f68f7] to-[#e80219] scale-110 shadow-xl"
                        : "bg-gradient-to-br from-gray-100 to-gray-200"
                    }`}
                  >
                    {service.iconType === "image" ? (
                      <Image
                        src={service.iconImage!}
                        alt="Icon"
                        width={50}
                        height={50}
                        className={`transition-transform duration-300 will-change-transform ${
                          hoveredCard === index ? "scale-110" : ""
                        }`}
                      />
                    ) : (
                      <i
                        className={`${
                          service.icon
                        } text-5xl text-blue-800 transition-all duration-300 will-change-transform ${
                          hoveredCard === index ? "animate-pulse" : ""
                        }`}
                      />
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed text-center line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="h-[180px] w-full rounded-xl overflow-hidden mt-auto relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={service.imageWidth}
                    height={service.imageHeight}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 will-change-transform"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
