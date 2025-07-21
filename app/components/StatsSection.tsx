
'use client';

import { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
const sectionRef = useRef<HTMLElement | null>(null);

  const stats = [
    { number: 500, label: 'Projects Delivered', suffix: '+', icon: 'ri-trophy-line' },
    { number: 50, label: 'Expert Engineers', suffix: '+', icon: 'ri-team-line' },
    { number: 99, label: 'Client Satisfaction', suffix: '%', icon: 'ri-heart-line' },
    { number: 24, label: 'Support Hours', suffix: '/7', icon: 'ri-customer-service-line' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

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
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 30);
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20technology%20pattern%20with%20flowing%20data%20streams%20and%20digital%20connections%2C%20dark%20gradient%20background%20with%20blue%20and%20purple%20glowing%20elements%2C%20futuristic%20engineering%20visualization%2C%20professional%20tech%20aesthetic&width=1920&height=600&seq=stats-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in the numbers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${stat.icon} text-white text-2xl`}></i>
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                
                <p className="text-gray-300 text-lg font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
