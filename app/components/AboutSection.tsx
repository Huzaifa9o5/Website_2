
'use client';

import { useState, useEffect, useRef } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const tabs = [
    {
      title: 'Our Mission',
      content: 'To deliver innovative hardware and software solutions that empower businesses to achieve their technological goals through excellence in engineering.'
    },
    {
      title: 'Our Vision',
      content: 'To become the leading technology partner for businesses seeking cutting-edge engineering solutions that drive digital transformation.'
    },
    {
      title: 'Our Values',
      content: 'Innovation, Quality, Reliability, and Customer Success are at the core of everything we do at Teresol.'
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
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Teresol</span>
            </h2>
            
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="flex space-x-4 mb-6">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                      activeTab === index
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              
              <div className="min-h-[100px]">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {tabs[activeTab].content}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20engineering%20team%20working%20on%20advanced%20technology%20projects%2C%20professional%20workspace%20with%20multiple%20monitors%20displaying%20circuit%20designs%20and%20code%2C%20diverse%20team%20of%20engineers%20collaborating%20on%20hardware%20and%20software%20development%2C%20clean%20modern%20office%20environment&width=600&height=400&seq=about-team&orientation=landscape"
                alt="Teresol Engineering Team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: 'ri-award-line', text: 'Quality Excellence' },
                { icon: 'ri-time-line', text: 'On-Time Delivery' },
                { icon: 'ri-customer-service-2-line', text: '24/7 Support' }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className={`${item.icon} text-white text-xl`}></i>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
