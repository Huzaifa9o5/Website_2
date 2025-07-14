
'use client';

import { useState, useEffect, useRef } from 'react';

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      title: 'Advanced Hardware Design',
      description: 'State-of-the-art PCB design and embedded systems development using the latest technologies and industry best practices.',
      icon: 'ri-cpu-line',
      details: ['Custom PCB Layout', 'Component Selection', 'Signal Integrity Analysis', 'Thermal Management'],
      image: 'https://readdy.ai/api/search-image?query=advanced%20electronic%20circuit%20board%20with%20microprocessors%20and%20components%20on%20professional%20engineering%20workstation%2C%20high-tech%20PCB%20design%20with%20intricate%20traces%20and%20components%2C%20modern%20electronics%20laboratory%20with%20sophisticated%20testing%20equipment%20and%20oscilloscopes%2C%20clean%20white%20background%20with%20blue%20accent%20lighting&width=600&height=400&seq=hardware-design&orientation=landscape'
    },
    {
      title: 'Cutting-Edge Software',
      description: 'Modern software development practices with scalable architectures and user-centric design principles.',
      icon: 'ri-code-s-slash-line',
      details: ['Full-Stack Development', 'Cloud Integration', 'API Design', 'Mobile Applications'],
      image: 'https://readdy.ai/api/search-image?query=modern%20software%20development%20workspace%20with%20multiple%20monitors%20displaying%20colorful%20code%20interfaces%20and%20development%20environments%2C%20clean%20minimalist%20desk%20setup%20with%20laptop%20showing%20programming%20languages%2C%20futuristic%20software%20architecture%20diagrams%2C%20white%20background%20with%20blue%20accent%20elements&width=600&height=400&seq=software-dev&orientation=landscape'
    },
    {
      title: 'Seamless Integration',
      description: 'Perfect harmony between hardware and software components ensuring optimal performance and reliability.',
      icon: 'ri-links-line',
      details: ['System Architecture', 'Protocol Implementation', 'Testing & Validation', 'Performance Optimization'],
      image: 'https://readdy.ai/api/search-image?query=integrated%20technology%20ecosystem%20showing%20connected%20IoT%20devices%20sensors%20and%20controllers%20with%20digital%20interfaces%2C%20seamless%20hardware%20software%20integration%20with%20data%20flow%20visualization%2C%20modern%20tech%20setup%20with%20wireless%20connectivity%20indicators%2C%20clean%20white%20background%20with%20subtle%20blue%20connections&width=600&height=400&seq=integration&orientation=landscape'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Teresol</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of innovation and reliability in every project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 hover:shadow-2xl ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 transform scale-105 shadow-xl'
                      : 'bg-white hover:bg-gray-50 border-2 border-transparent hover:scale-102'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      activeFeature === index
                        ? 'bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg'
                        : 'bg-gray-100 hover:bg-blue-100'
                    }`}>
                      <i className={`${feature.icon} text-xl transition-all duration-300 ${activeFeature === index ? 'text-white' : 'text-gray-600'}`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                      
                      {activeFeature === index && (
                        <div className="mt-4 grid grid-cols-2 gap-2 animate-fade-in">
                          {feature.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                              {detail}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative group">
              <img
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl transition-opacity duration-300 group-hover:opacity-50"></div>
              
              <div className="absolute bottom-6 left-6 right-6 transform transition-all duration-500 group-hover:translate-y-[-4px]">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-1">{features[activeFeature].title}</h4>
                  <p className="text-sm text-gray-600">{features[activeFeature].description}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    activeFeature === index ? 'bg-blue-500 shadow-lg' : 'bg-gray-300 hover:bg-blue-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
