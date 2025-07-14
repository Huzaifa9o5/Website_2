'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ServicesPage() {
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

  const certifications = [
    { name: 'ISO 9001:2015 Quality Management', icon: 'ri-award-line' },
    { name: 'IEEE Professional Member', icon: 'ri-medal-line' },
    { name: 'FCC Equipment Authorization', icon: 'ri-shield-check-line' },
    { name: 'CE Marking Compliance', icon: 'ri-verified-badge-line' },
    { name: 'RoHS Compliant Manufacturing', icon: 'ri-leaf-line' },
    { name: 'UL Listed Components', icon: 'ri-safety-certificate-line' },
    { name: 'IPC-A-610 Certified', icon: 'ri-check-double-line' },
    { name: 'Six Sigma Green Belt', icon: 'ri-star-line' }
  ];

  const memberships = [
    { name: 'Institute of Electrical Engineers', icon: 'ri-flashlight-line' },
    { name: 'Association for Computing Machinery', icon: 'ri-computer-line' },
    { name: 'International Association of Engineers', icon: 'ri-tools-line' },
    { name: 'Society of Manufacturing Engineers', icon: 'ri-factory-line' },
    { name: 'IEEE Computer Society', icon: 'ri-cpu-line' },
    { name: 'Electronic Industries Alliance', icon: 'ri-circuit-board-line' },
    { name: 'International Test Conference', icon: 'ri-test-tube-line' },
    { name: 'Embedded Systems Conference', icon: 'ri-microchip-line' }
  ];

  const licenses = [
    { name: 'Altium Designer Professional License', icon: 'ri-palette-line' },
    { name: 'MATLAB & Simulink Enterprise Suite', icon: 'ri-function-line' },
    { name: 'SolidWorks Professional 3D CAD', icon: 'ri-3d-view-line' },
    { name: 'LabVIEW Development Environment', icon: 'ri-dashboard-line' },
    { name: 'Ansys Electronics Desktop Suite', icon: 'ri-calculator-line' },
    { name: 'Cadence Virtuoso Platform', icon: 'ri-layout-line' },
    { name: 'Microsoft Visual Studio Enterprise', icon: 'ri-code-box-line' },
    { name: 'Unity Pro Development License', icon: 'ri-gamepad-line' },
    { name: 'AutoCAD Electrical Professional', icon: 'ri-draft-line' },
    { name: 'KiCad Professional Support', icon: 'ri-circuit-board-line' }
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive engineering solutions backed by industry certifications and professional expertise
            </p>
          </div>
        </section>

        <section ref={sectionRef} className="py-20">
          <div className="container mx-auto px-6">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Service <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end engineering solutions with proven expertise and industry recognition
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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

            <div className={`mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Industry <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
              </h3>
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-2xl py-8">
                <div className="flex animate-scroll-right whitespace-nowrap">
                  {[...certifications, ...certifications].map((cert, index) => (
                    <div 
                      key={index}
                      className="flex items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mx-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-max"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <i className={`${cert.icon} text-xl text-white`}></i>
                      </div>
                      <span className="font-semibold text-gray-800 text-lg">{cert.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`mb-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Memberships</span>
              </h3>
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-2xl py-8">
                <div className="flex animate-scroll-left whitespace-nowrap">
                  {[...memberships, ...memberships].map((membership, index) => (
                    <div 
                      key={index}
                      className="flex items-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 mx-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-max"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                        <i className={`${membership.icon} text-xl text-white`}></i>
                      </div>
                      <span className="font-semibold text-gray-800 text-lg">{membership.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Software <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Licenses</span>
              </h3>
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-2xl py-8">
                <div className="flex animate-scroll-right whitespace-nowrap">
                  {[...licenses, ...licenses].map((license, index) => (
                    <div 
                      key={index}
                      className="flex items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mx-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-max"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <i className={`${license.icon} text-xl text-white`}></i>
                      </div>
                      <span className="font-semibold text-gray-800 text-lg">{license.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </div>
  );
}