import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';

// Import the Header and Footer components (same structure as Home component)
import Header from './partials/header';
import Footer from './partials/footer';

const ResearchAndInnovation = () => {
  const [activeSection, setActiveSection] = useState('research-innovation');
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
      let currentSection = 'research-innovation';
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

  const innovators = [
    {
      title: 'CHEMISTS',
      description: 'We have invested in a state-of-the-art lab facility and an in-house R&D division to bring out the bestquality products. Research and Development activities are mainly focused on areas of Aromatics, Natural Anti-Oxidants, Natural Colours, Culinary Platforms, Delivery Platforms, Technology Platforms, Functional Ingredients, and Cosmeceuticals. These endeavors are supported by well-qualified application teams.'
    },
    {
      title: 'CHEMICAL ENGINEERS',
      description: 'Our chemical engineers work with advanced extraction and distillation technologies to optimize the production processes while maintaining the highest quality standards.'
    },
    {
      title: 'LAB TECHNICIANS',
      description: 'Our skilled lab technicians ensure rigorous quality control and testing procedures are followed at every stage of production.'
    },
    {
      title: 'CONSULTING SCIENTISTS',
      description: 'We collaborate with leading consulting scientists to stay at the forefront of innovation and research in the aromatics industry.'
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
      <section id="research-innovation" className="relative bg-gradient-to-r from-emerald-50 to-green-50 py-20">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Research and Innovation</h1>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="h-full w-full bg-gradient-to-l from-emerald-200/30 to-transparent"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div>
              <div className="space-y-6 text-gray-600 leading-relaxed mb-12">
                <p>
                  Gazi Aeromatics is backed by a full-fledged research facility staffed with a team of Chemists, Chemical Engineers, Lab technicians and consulting Scientists, who are in constant pursuit of innovations of products for our global customers. Our focus on innovations is aimed to provide our customers the full benefits of the products while maintaining sustainability. advanced methods of extraction are applied for extracting ingredients at their purest best. We work with various government and private research labs across the country to exchange ideas and advancement in techniques to improve the raw material quality.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                OUR INNOVATORS
              </h2>

              {/* Innovators Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {innovators.map((innovator, index) => (
                  <div key={index} className="bg-gradient-to-br from-emerald-50 to-green-100 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {innovator.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {innovator.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
        </div>
      </div>

      {/* Use the Footer component */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default ResearchAndInnovation;