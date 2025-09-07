import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, Leaf, Award, Users, Factory, Shield, Heart, Zap, 
  Globe, ArrowUp, CheckCircle, Phone, Mail, MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import the Header and Footer components
import Header from './partials/header';
import Footer from './partials/footer';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      setShowScrollTop(offset > 500);
      
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
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

  const navItems = [
    { 
      name: 'About Us', 
      id: 'about-us',
      dropdown: [
        'About Gazi Aeromatics',
        'Certifications'
      ]
    },
    { 
      name: 'Expertise', 
      id: 'expertise',
      dropdown: [
        'Sourcing',
        'Research and Innovation',
        'Manufacturing Capabilities',
        'Packaging'
      ]
    },
    { 
      name: 'Products', 
      id: 'products',
      dropdown: [
        'Organic Essential Oils',
        'Conventional Essential Oils',
        'Aroma Chemicals'
      ]
    },
    { name: 'Industries', id: 'industries' },
    { name: 'Contact Us', id: 'contact-us' },
  ];

  const stats = [
    { number: '2500+', label: 'Associated Farmers', icon: '👥' },
    { number: '6500+', label: 'Acres of Farmland', icon: '🌾' },
    { number: '350+', label: 'Metric Tonnes/Year', icon: '⚖️' },
    { number: '40+', label: 'Essential Oils', icon: '🧴' }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-inter">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .font-inter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-bounce {
          animation: bounce 3s ease-in-out infinite;
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

        .bg-pattern {
          background-image: url('/pattern.svg');
          background-repeat: repeat;
        }

        .bg-pattern-about {
          background-image: url('/pattern-about.svg');
          background-repeat: repeat;
        }
      `}</style>

      {/* Header */}
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
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 bg-pattern animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  About
                </span>
                <span className="text-gray-800"> Gazi </span>
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Aeromatics
                </span>
              </h1>
              <p className="text-2xl text-gray-600 font-medium max-w-4xl mx-auto">
                Leading the way in natural essential oils and aromatic solutions since 2001
              </p>
              <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
                Pioneering organic farming practices with over 2,500 farmers across India, producing 350+ metric tonnes of premium essential oils annually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We Always Think Ahead Section */}
      <section id="about-us" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              We Always <span className="text-emerald-600">Think Ahead...</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-emerald-100 to-green-200 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-8xl">🏢</div>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-3xl shadow-lg animate-bounce">
                🌱
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                  We at <strong className="text-emerald-600">Gazi Aeromatics</strong> are proud to be associated with over <strong>2,500 farmers</strong> across India, with our farms in <strong>Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Odisha, Chhattisgarh, Assam, Haryana and Uttar Pradesh</strong>. We ensure that the farmers we are associated with are practicing organic methods of farming.
                </p>
                
                <p>
                  We bank on the land of over <strong>6,500 acres</strong> across India, where we produce over <strong>350 Metric Tonnes of Natural Essential Oils</strong> every year.
                </p>
                
                <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg">
                  <p className="font-semibold text-lg mb-2">Save Soil Movement</p>
                  <p className="opacity-90">Our Corporate philosophy is very much in line with 'Save Soil' movement and have employed many of these practices for over two decades now.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-green-200 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                  <span className="text-4xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Journey <span className="text-emerald-600">So Far...</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong className="text-emerald-600">Gazi Aeromatics Private Limited</strong> started its operations back in 2001 in the field of Aromatics and Medicinal plants with the help of CIMAP-Bangalore.
              </p>
              
              <p>
                We specialize in <strong>organic farming, cultivation, distillation, procurement, storage and distribution</strong> of over 40 essential oils in both conventional and organic segments. We are <strong>ISO 27001, US FDA, Halal, Kosher certified</strong> with our clients across, <strong>India, USA, Europe, Africa and the Middle East</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Infrastructure</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <p>
                We have a robust infrastructural facility at <strong>Bengaluru in Karnataka</strong>, which is sprawled over a vast area of land. This facility helps us keep our business related processes in a systematic manner. We have outfitted technologically advanced machines and equipment in our manufacturing plant, which help us produce flawless products as per the prescribed industrial guidelines.
              </p>
              
              <p>
                Our manufacturing plant holds a <strong>high production capacity of minimum 1 ton per day</strong>. Our testing unit is installed with latest facilities such as <strong>G.C. from reputed Laboratories</strong> which help us ensure the quality standards of our products.
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-8xl">⚙️</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-orange-100 to-amber-200 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-9xl">🧪</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default AboutUs;