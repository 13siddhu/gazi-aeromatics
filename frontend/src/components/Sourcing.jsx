import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';

// Import the Header and Footer components (same structure as Home component)
import Header from './partials/header';
import Footer from './partials/footer';

const Sourcing = () => {
  const [activeSection, setActiveSection] = useState('sourcing');
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
      let currentSection = 'sourcing';
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
      <section id="sourcing" className="relative bg-gradient-to-r from-emerald-50 to-green-50 py-20">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Sourcing</h1>
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
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Responsibly Sourced Natural Ingredients
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We leave no stone unturned, when it comes to sourcing the best raw materials for all our aromatic extracts. We circumvent across India trying to identify the aromatic plants native to each location. We work to provide pure, natural, transparent and sustainable ingredients that meet the standard on quality and inspire customers and delight consumers every day. Our guiding principle has always been to deliver premium, 100% pure and natural extracts, with a strict ethic of complete transparency and dedication to environmental management and sustainable development. We are proud of our commitment and are passionate about bringing our customers more than materials across responsibly.
                </p>
                
                <p>
                  Sourcing raw materials is much more complex than creating an aroma. It is not enough to find a new plant, extract the oils and dump it on the market.
                </p>
                
                <p>
                  It is very important to build a partnership with the farming community and work together to improve the farming, cultivation and harvesting techniques to harvest the raw materials without damaging the surrounding environment and the livelihoods of the local people and ensuring a win-win situation for all. We always do a survey of the region, the soil, the fertility and talk to the local farmers and communities there. We bring extraction units close to the source location, employ and train the local communities in sustainable farming, build a partnership for a long term and a progressive engagement. We care deeply about working with partners who are committed to sustainable growing and harvesting practices.
                </p>
                
                <p>
                  We leave no stone unturned, when it comes to sourcing the best raw materials for all our aromatic extracts. We circumvent across India trying to identify the aromatic plants native to each location. We work to provide pure, natural, transparent and sustainable ingredients that meet the standard on quality and inspire customers and delight consumers every day. Our guiding principle has always been to deliver premium, quality oil, season and farming methods. Based on this identification, we setup extraction units close to the source location. We build and nurture partnership with local communities for a long term and progressive engagement. Through this partnership, we have been able to harvest the raw materials without damaging the surrounding environment and the livelihoods of the local people and ensuring a win-win situation for all.
                </p>
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

export default Sourcing;