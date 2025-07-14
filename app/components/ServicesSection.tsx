'use client';

import { useState, useEffect, useRef } from 'react';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: 'ri-cpu-line',
      title: 'Hardware Engineering',
      description: 'Custom PCB design, embedded systems, and IoT device development with cutting-edge technology.',
      features: ['PCB Design', 'Embedded Systems', 'IoT Solutions', 'Prototyping']
    },
    {
      icon: 'ri-code-s-slash-line',
      title: 'Software Development',
      description: 'Full-stack web applications, mobile apps, and enterprise software solutions.',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Development']
    },
    {
      icon: 'ri-settings-3-line',
      title: 'System Integration',
      description: 'Seamless integration of hardware and software components for complete solutions.',
      features: ['System Design', 'Integration Testing', 'Performance Optimization', 'Technical Support']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Quality Assurance',
      description: 'Comprehensive testing and validation to ensure reliability and performance.',
      features: ['Automated Testing', 'Quality Control', 'Performance Testing', 'Documentation']
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

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to meet your specific requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                hoveredCard === index 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-500 scale-110 rotate-3 shadow-xl' 
                  : 'bg-gradient-to-br from-gray-100 to-gray-200'
              }`}>
                <i className={`${service.icon} text-2xl transition-all duration-300 ${hoveredCard === index ? 'text-white animate-pulse' : 'text-gray-700'}`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}