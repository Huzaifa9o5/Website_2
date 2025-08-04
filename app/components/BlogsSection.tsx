"use client";

import { useEffect, useState, useRef } from "react";
import Tilt from "react-parallax-tilt";

export default function NewsArticlesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const articles = [
    {
      title: "Signing of MoU with the Institute of Space Technology (IST)",
      image: "/assets/images/blog1.png",
      content:
        "TeReSol has joined hands with Institute of Space Technology (IST) by signing Memorandum of Understanding (MoU) to promote University-Industry collaboration through joint research and development activities.",
    },
    {
      title: "TeReSol won an award at PaSHA ICT Awards 2016",
      image: "/assets/images/blog2.png",
      content:
        "P@SHA organised its 13th annual ICT Awards Ceremony, lauding innovation and excellence in the Pakistan ICT industry and recognized the efforts of outstanding achievers who have been making waves locally and internationally.",
    },
    {
      title: "TeReSol participated at IDEAS 2018",
      image: "/assets/images/blog3.png",
      content:
        "TeReSol was part of the 10th Edition of International Defense Exhibition and Seminar (IDEAS) which was held at Expo Center Karachi-Pakistan from 27 to 30 November 2018. The event brought together international manufacturers and suppliers of defense products and related technology to explore business opportunities.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center ">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
          Latest{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            News & Articles
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
              scale={1.02}
              transitionSpeed={400}
              gyroscope={true}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl group relative">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.content}
                  </p>
                  <button
                    className="flex items-center justify-center gap-2 border-2 border-white bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                    onClick={() => {
                      console.log("Read More clicked");
                    }}
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
