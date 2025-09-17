import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';

// Import the Header and Footer components (same structure as Home component)
import Header from './partials/header';
import Footer from './partials/footer';

const ManufacturingCapabilities = () => {
  const [activeSection, setActiveSection] = useState('manufacturing-capabilities');
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
      let currentSection = 'manufacturing-capabilities';
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
      <section id="manufacturing-capabilities" className="relative bg-gradient-to-r from-emerald-50 to-green-50 py-20">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Manufacturing Capabilities</h1>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="h-full w-full bg-gradient-to-l from-emerald-200/30 to-transparent"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Essential Oils are not made, but instead, they are extracted from plant materials. Extractions are used to obtain a plant's active botanical constituents that function as its "life force." They are essentially the liquefied version of a plant, and they effectively allow its beneficial compounds to reach the bloodstream faster than they would by simply consuming the plant.
              </p>
              <p>
                A herbal extract is produced when a botanical material is introduced to a solvent in which some of the plant material components dissolve. Ultimately, the solvent becomes infused with the botanical materials that it has pulled from the source plant, and this is what is referred to as the "extract." The solution that remains at the end of the process can be liquid, or the liquid can be removed to turn the remnants of the botanical into a solid. The solvents can act as preservatives or as agents that help plant cells to break down and release their contents.
              </p>
            </div>

            {/* Steam Distillation Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">STEAM DISTILLATION</h2>
              
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Steam Distillation is the simplest technique to distill volatile components from various raw materials, like spices, seeds, leaves, roots etc. The aromatic oils in these materials are recovered by directly applying steam to raw materials followed by condensation of the distillate. The temperature of the steam needs to be carefully controlled - just enough to force the plant material to let go of the essential oil, but not too hot as to burn the essential oil. Different components of these essential oils contribute to the characteristic fragrance and aroma. These oils can be customized to meet the exact requirement of the user.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">⚗️</div>
                    <p className="text-sm">Steam Distillation Equipment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solvent Extraction Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">SOLVENT EXTRACTION</h2>
              
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🏭</div>
                    <p className="text-sm">Solvent Extraction Equipment</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    This method employs food grade solvents (E.g. Hexane or Ethanol) to isolate essential oils from plant material. It is best suited for plant materials that yield low amounts of essential oil, that are largely resinous, or that are delicate aromatics unable to withstand the pressure and distress of steam distillation. This method also produces a finer fragrance than any type of distillation method. Through this process, the non-volatile plant material such as waxes and pigments, are also extracted and sometimes removed through other processes.
                  </p>
                  <p>
                    Once the plant material has been treated with the solvent, it produces a waxy aromatic compound called a "concrete." When this concrete substance is mixed with alcohol, the oil particles are released. The aforementioned chemicals used in the process then remain in the oil and the oil is used in perfumes by the perfume industry or for aromatherapy purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* CO2 Extraction Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">CO2 EXTRACTION</h2>
              
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Essential oils derived from the supercritical CO2 extraction of herbs are similar to the oils produced through distillation in that they can be used in aromatherapy and natural perfumery.
                  </p>
                  <p>
                    Oils derived from steam distillation vary in their qualities depending on the temperatures, pressures, and length of time applied for the process. The CO2 extraction process might thus produce higher quality oils that have not been altered by the application of high heat, unlike the steam distillation process. In CO2 extraction, none of the constituents of the oil are damaged by heat.
                  </p>
                  <p>
                    Thus, the difference between traditional distillation and supercritical extraction is that instead of heated water or steam, CO2 is used as a solvent in the latter method.
                  </p>
                  <p>
                    In steam distillation, the molecular composition of both the plant matter and the essential oil are changed due to the temperature applied. On the other hand, a CO2 extract is closer in chemical composition to the original plant from which it is derived, as it contains a wider range of the plant's constituents.
                  </p>
                  <p>
                    CO2 extracts are usually thicker than their essential oil counterparts and often give off more of the aroma of the natural herb, spice, or plant than a distilled essential oil. CO2 extracts have been said to contain more plant constituents than the amount extracted from the same plant using steam distillation.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🏭</div>
                    <p className="text-sm">CO2 Extraction Equipment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Maceration Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">MACERATION</h2>
              
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🫙</div>
                    <p className="text-sm">Maceration Equipment</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Macerated oils are also referred to as infused oils. They are created when carrier oils are used as solvents to extract therapeutic properties from plant material. The benefit of a macerated oil above a distilled oil is that more of a plant's essence is captured in the oil, because it captures heavier, larger plant molecules than the ones captured in the distillation process. This keeps the product closer to retaining more of the plant's valuable offerings.
                  </p>
                </div>
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

export default ManufacturingCapabilities;