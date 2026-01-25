import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUp, CheckCircle, Shield, Leaf, Globe, Award 
} from 'lucide-react';

// Import Header and Footer (Adjust paths if necessary based on your folder structure)
import Header from './partials/header';
import Footer from './partials/footer';

// --- IMAGE IMPORTS ---
// Assumes images are in src/assets/certifications/
import usdaLogo from '../assets/photo/NOP-usda.png';
import kosherLogo from '../assets/photo/KOSHIER.png';
import iso14001Logo from '../assets/photo/iso-2.png';
import iso9001Logo from '../assets/photo/ISO.png';
import indiaOrganicLogo from '../assets/photo/INDIA-ORGANIC.png';
import halalLogo from '../assets/photo/HALAL.png';

const Certifications = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  // Scroll logic
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
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = (itemId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(itemId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 500);
  };

  // Navigation Items
  const navItems = [
    { 
      name: 'About Us', 
      id: 'about-us',
      dropdown: ['About Gazi Aeromatics', 'Certifications']
    },
    { 
      name: 'Expertise', 
      id: 'expertise',
      dropdown: ['Sourcing', 'Research and Innovation', 'Manufacturing Capabilities', 'Packaging']
    },
    { 
      name: 'Products', 
      id: 'products',
      dropdown: ['Organic Essential Oils', 'Conventional Essential Oils', 'Aroma Chemicals']
    },
    { name: 'Industries', id: 'industries' },
    { name: 'Contact Us', id: 'contact-us' },
  ];

  // Certificate Data using imported images
  const certifications = [
    { 
      name: 'USDA ORGANIC', 
      description: 'Certified organic by the United States Department of Agriculture, ensuring our products are grown and processed according to federal guidelines.',
      src: usdaLogo, 
      color: 'border-green-700',
      bg: 'bg-green-50'
    },
    { 
      name: 'KOSHER', 
      description: 'Certified to meet Jewish dietary laws, ensuring purity and suitability for Kosher-certified production lines.',
      src: kosherLogo, 
      color: 'border-gray-900',
      bg: 'bg-gray-50'
    },
    { 
      name: 'ISO 14001:2015', 
      description: 'International standard that specifies requirements for an effective environmental management system (EMS).',
      src: iso14001Logo, 
      color: 'border-blue-600',
      bg: 'bg-blue-50'
    },
    { 
      name: 'ISO 9001:2015', 
      description: 'Demonstrates our ability to consistently provide products and services that meet customer and regulatory requirements.',
      src: iso9001Logo,
      color: 'border-blue-800',
      bg: 'bg-blue-100'
    },
    { 
      name: 'INDIA ORGANIC', 
      description: 'Certification mark for organically farmed food products manufactured in India.',
      src: indiaOrganicLogo,
      color: 'border-orange-500',
      bg: 'bg-orange-50'
    },
    { 
      name: 'HALAL', 
      description: 'Certified as permissible under Islamic law, ensuring no forbidden ingredients or processes are used.',
      src: halalLogo,
      color: 'border-emerald-600',
      bg: 'bg-emerald-50'
    }
  ];

  const qualityFeatures = [
    { icon: <Leaf className="w-6 h-6"/>, title: "100% Pure & Natural", desc: "Sourced directly from nature without synthetics." },
    { icon: <Shield className="w-6 h-6"/>, title: "Rigorous Testing", desc: "GC-MS analysis for every batch produced." },
    { icon: <Globe className="w-6 h-6"/>, title: "Global Standards", desc: "Compliant with international regulatory norms." },
    { icon: <Award className="w-6 h-6"/>, title: "Ethical Sourcing", desc: "Fair trade practices with our farming partners." },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-inter">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
        .bg-pattern { background-image: url('/pattern.svg'); background-repeat: repeat; }
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
      <section id="home" className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold tracking-wide mb-6">
            QUALITY ASSURANCE
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Certifications</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Gazi Aeromatics, quality is not just a benchmark; it is our philosophy. 
            We hold ourselves to the highest international standards to ensure purity, safety, and sustainability.
          </p>
        </div>
      </section>

      {/* Main Certificates Grid */}
      <section id="certificates-grid" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2"
              >
                {/* Decorative Background Blob inside card */}
                <div className={`absolute top-0 left-0 w-full h-32 ${cert.bg} rounded-t-3xl opacity-50 transition-opacity group-hover:opacity-100`}></div>
                
                <div className="relative z-10 w-40 h-40 mb-6 bg-white rounded-full flex items-center justify-center p-4 shadow-md border-4 transition-transform duration-500 group-hover:rotate-6">
                  <div className={`absolute inset-0 rounded-full border-4 ${cert.color} opacity-20`}></div>
                  
                  {/* Image Display */}
                  <img 
                    src={cert.src} 
                    alt={cert.name} 
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="relative z-10 space-y-3">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">
                    {cert.name}
                  </h3>
                  <div className="h-1 w-12 bg-gray-200 mx-auto group-hover:bg-emerald-500 transition-colors"></div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Our Quality <span className="text-emerald-600">Standard Policy</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to delivering products that meet strict global safety and purity standards. Our facilities are regularly audited, and our processes are continuously optimized to minimize environmental impact while maximizing product potency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {qualityFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Side Element */}
            <div className="relative h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-3xl transform rotate-3 shadow-2xl opacity-10"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col justify-center items-center text-center space-y-6">
                 <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-800">100% Compliance</h3>
                 <p className="text-gray-600">
                   We adhere to all statutory and regulatory requirements, ensuring that every drop of oil that leaves our facility is safe, pure, and traceable.
                 </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Scroll to Top */}
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

export default Certifications;