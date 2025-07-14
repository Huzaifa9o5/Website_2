
'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/images/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Hardware Engineering', href: '#services' },
      { name: 'Software Development', href: '#services' },
      { name: 'System Integration', href: '#services' },
      { name: 'Quality Assurance', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#contact' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Support', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: 'ri-linkedin-fill', href: '#', name: 'LinkedIn' },
    { icon: 'ri-twitter-fill', href: '#', name: 'Twitter' },
    { icon: 'ri-github-fill', href: '#', name: 'GitHub' },
    { icon: 'ri-mail-fill', href: '#contact', name: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <i className="ri-cpu-line text-white text-xl"></i>
              </div> */}
              {/* <span className="text-2xl font-bold">Teresol</span> */}
                <Image
              src={logo}
              alt="Teresol Logo"
              width={100}
              height={100}
              className="object-contain"
              style={{filter:'brightness(0) invert(1)'}}
            />
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Leading the future of technology through innovative hardware and software engineering solutions that transform businesses and drive digital excellence.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Teresol. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-blue-100 text-sm">
            Engineered with precision • Built for the future • Powered by innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
