import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';

// Import the Header and Footer components (same structure as Home component)
import Header from './partials/header';
import Footer from './partials/footer';

const Packaging = () => {
  const [activeSection, setActiveSection] = useState('packaging');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      setShowScrollTop(offset > 500);

      const sections = document.querySelectorAll('section');
      let currentSection = 'packaging';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (offset >= sectionTop - 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    setOpenDropdown(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = (itemId) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(itemId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Phone number submitted:', phoneNumber);
    setPhoneNumber('');
    alert('Thank you for your request! We will call you back soon.');
  };

  const navItems = [
    { 
      name: 'About Us', 
      id: 'about-us',
      dropdown: [
        { name: 'About Gazi Aeromatics', link: '/aboutus' },
        { name: 'Certifications', link: '/aboutus' }
      ]
    },
    { 
      name: 'Expertise', 
      id: 'expertise',
      dropdown: [
        { name: 'Sourcing', link: '/sourcing' },
        { name: 'Research and Innovation', link: '/research' },
        { name: 'Manufacturing Capabilities', link: '/manufacturing' },
        { name: 'Packaging', link: '/packaging' }
      ]
    },
    { 
      name: 'Products', 
      id: 'products',
      dropdown: [
        { name: 'Organic Essential Oils', link: '#organic-essential-oils' },
        { name: 'Conventional Essential Oils', link: '#conventional-essential-oils' },
        { name: 'Aroma Chemicals', link: '#aroma-chemicals' }
      ]
    },
    { name: 'Industries', id: 'industries', link: '#industries' },
    { name: 'Contact Us', id: 'contact-us', link: '#contact-us' },
  ];

  const packagingFeatures = [
    {
      icon: '🛡️',
      title: 'Tamper-proof and foolproof packaging',
      description: 'Complete security and protection for your products'
    },
    {
      icon: '🌿',
      title: 'Aroma and freshness over an extended period of time',
      description: 'Preserving the natural essence and quality'
    },
    {
      icon: '🌡️',
      title: 'Tolerate the extremities of temperature',
      description: 'Withstands harsh environmental conditions'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-inter">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .font-inter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
      `}</style>

      {/* Use the Header component */}
      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        navItems={navItems}
        scrollToSection={scrollToSection}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        openDropdown={openDropdown}
      />

      {/* Hero Section */}
      <section id="packaging" className="relative bg-gradient-to-r from-emerald-50 to-green-50 py-20">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Packaging</h1>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="h-full w-full bg-gradient-to-l from-emerald-200/30 to-transparent"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Call Back Request Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Do you have any requirements?</h2>
          <p className="text-gray-600 mb-8">Request a call back</p>
          
          <div className="max-w-md mx-auto">
            <div onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-left text-sm font-medium text-gray-700 mb-2">
                  Your Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Packaging Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <p className="text-emerald-600 font-semibold mb-4 uppercase tracking-wide">OUR ADVANCED PACKAGING FEATURES</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">How We Work With Packaging</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packagingFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Packaging Section */}
        <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-emerald-600 font-semibold mb-4 uppercase tracking-wide">PACKAGING REDEFINED</p>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  We Are Highly Professional In Packaging
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our tamper-proof and foolproof packaging ensures that our essential oils and aromatic products retain their aroma and freshness for an extended period. We use high-quality materials from certified vendors who adhere to strict industry standards. Our packaging is designed to withstand extreme temperatures and harsh weather conditions during transit.
                </p>
              </div>

              {/* Certification Icons */}
              <div className="flex space-x-4 pt-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  <div className="text-center">
                    <div className="text-sm">USDA</div>
                    <div className="text-xs">ORGANIC</div>
                  </div>
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  <div className="text-center">
                    <div className="text-sm">ISO</div>
                    <div className="text-xs">CERT</div>
                  </div>
                </div>
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  <div className="text-center">
                    <div className="text-sm">FDA</div>
                    <div className="text-xs">APPROVED</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                {/* Product Package Illustration */}
                <div className="w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-8xl mb-4">📦</div>
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                      <div className="text-emerald-600 font-bold text-lg">Gazi</div>
                      <div className="text-gray-600 text-sm">Aeromatics</div>
                      <div className="w-full h-8 bg-purple-600 rounded mt-3 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">ESSENTIAL OIL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use the Footer component */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Packaging;