import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, Phone, Facebook, Instagram, Linkedin, Menu, X, ChevronRight, 
  Leaf, Award, Users, Factory, Shield, Heart, Zap, Globe, Star, ArrowUp, MapPin, CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ModernAromatics = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown
  const timeoutRef = useRef(null); // Reference for timeout

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      setShowScrollTop(offset > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    setOpenDropdown(null); // Close dropdown on section click
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any pending timeout
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = (itemId) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear timeout if re-entering
    }
    setOpenDropdown(itemId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null); // Close dropdown after 500ms
    }, 500); // 500ms delay
  };

  const industries = [
    { icon: '🧪', name: 'Natural Oil', gradient: 'from-emerald-400 to-teal-600' },
    { icon: '💊', name: 'Pharma', gradient: 'from-blue-400 to-indigo-600' },
    { icon: '🌸', name: 'Agarbatti', gradient: 'from-pink-400 to-rose-600' },
    { icon: '💄', name: 'Cosmetics', gradient: 'from-purple-400 to-violet-600' },
    { icon: '🌺', name: 'Fragrance', gradient: 'from-orange-400 to-red-600' },
    { icon: '🧴', name: 'Home Care', gradient: 'from-cyan-400 to-blue-600' }
  ];

  const expertise = [
    { 
      title: 'Ingenious Sourcing', 
      desc: 'Sustainable and Responsible sourcing from trusted farmers',
      icon: '🌱'
    },
    { 
      title: 'Research & Innovation', 
      desc: 'We take your feedback to our advanced laboratories',
      icon: '🔬'
    },
    { 
      title: 'Manufacturing Excellence', 
      desc: 'Continued innovation to meet changing industry needs',
      icon: '⚙️'
    },
    { 
      title: 'Premium Packaging', 
      desc: 'Safeguarding the essence of aromas with care',
      icon: '📦'
    }
  ];

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Organic Certified',
      desc: 'We are committed to organic farming practices with our dedicated farmers across India.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Fair Price Promise',
      desc: 'High-grade essential oils at competitive prices for sustainable development.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assured',
      desc: 'International certifications testify to the purity and quality of our products.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Globally Certified',
      desc: 'ISO 27001, US FDA, Halal, Kosher certified with clients worldwide.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'White Labeling',
      desc: 'International brands leverage our quality for their private label products.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'R & D Excellence',
      desc: '18% of gross profit invested in R&D annually for innovation and purity.',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

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

      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 88649 80972</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline">International Sales:</span>
              <a href="mailto:info@saaromatics.com" className="hover:text-green-200 transition-colors">
                info@gaziaeromatics.com
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:sales@saaromatics.com" className="hover:text-green-200 transition-colors">
                sales@gaziaeromatics.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
          : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl xl:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent">
                  Gazi
                </h1>
                <p className="text-sm text-gray-600 font-medium tracking-wide">AEROMATICS</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 rounded-lg hover:bg-emerald-50 text-sm font-semibold tracking-wide ${
                      activeSection === item.id ? 'text-emerald-600 bg-emerald-50' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                  {item.dropdown && openDropdown === item.id && (
                    <ul className="absolute left-0 top-full mt-2 w-60 bg-white shadow-xl rounded-lg border border-gray-100 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {item.dropdown.map((dropdownItem, index) => (
                        <li
                          key={index}
                          className="px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200 cursor-pointer text-sm font-medium"
                          onClick={() => {
                            if (dropdownItem === 'About Gazi Aeromatics' || dropdownItem === 'Certifications') {
                              scrollToSection('about-us');
                            } else {
                              scrollToSection(item.id);
                            }
                          }}
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {dropdownItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm tracking-wide">
                REQUEST SAMPLE
              </button>
              
              <div className="flex items-center space-x-2 pl-4 border-l border-gray-200">
                {[
                  { icon: Facebook, color: 'hover:bg-blue-500' },
                  { icon: Instagram, color: 'hover:bg-pink-500' },
                  { icon: Linkedin, color: 'hover:bg-blue-600' }
                ].map(({ icon: Icon, color }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200 transform hover:scale-110 ${color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white">
              <nav className="py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium text-left text-sm font-semibold tracking-wide"
                    >
                      {item.name}
                    </button>
                    {item.dropdown && (
                      <ul className="pl-6 space-y-1">
                        {item.dropdown.map((dropdownItem, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors text-sm cursor-pointer"
                            onClick={() => {
                              if (dropdownItem === 'About Gazi Aeromatics' || dropdownItem === 'Certifications') {
                                scrollToSection('about-us');
                              } else {
                                scrollToSection(item.id);
                              }
                            }}
                          >
                            {dropdownItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-100 space-y-4 px-4">
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-200">
                    REQUEST SAMPLE
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 bg-pattern animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    Trust
                  </span>
                  <span className="text-gray-800"> and </span>
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    Value
                  </span>
                </h1>
                <p className="text-2xl text-gray-600 font-medium">
                  Our corporate philosophy driving excellence since 2001
                </p>
                <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                  Committed to ethical sourcing and organic farming practices, delivering premium essential oils worldwide with uncompromised quality.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { label: 'USDA', sublabel: 'ORGANIC', color: 'from-green-400 to-emerald-600' },
                  { label: 'KJ', sublabel: 'KOSHER', color: 'from-blue-400 to-indigo-600' },
                  { label: '🌙', sublabel: 'HALAL', color: 'from-purple-400 to-violet-600' },
                  { label: 'ISO', sublabel: '27001', color: 'from-orange-400 to-red-600' }
                ].map((cert, index) => (
                  <div
                    key={index}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cert.color} flex flex-col items-center justify-center text-white text-xs font-bold shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="text-sm">{cert.label}</div>
                    {cert.sublabel && <div className="text-xs opacity-90">{cert.sublabel}</div>}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('about-us')}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Discover Our Story</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-200 flex items-center space-x-2"
                >
                  <span>View Products</span>
                </button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-green-200 to-emerald-200 rounded-full animate-spin-slow opacity-20"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-emerald-300 to-green-400 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-9xl animate-bounce">🧴</div>
                </div>
                
                <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-3xl shadow-lg animate-pulse">
                  🌸
                </div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-4xl shadow-lg animate-pulse delay-1000">
                  🌿
                </div>
                <div className="absolute top-16 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-2xl shadow-lg animate-pulse delay-500">
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Industries <span className="text-emerald-600">We Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering excellence across diverse sectors with premium essential oils and aromatic solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-4xl shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300`}>
                  {industry.icon}
                </div>
                <h3 className="text-center font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-us" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50 relative">
        <div className="absolute inset-0 bg-pattern-about"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  <span className="text-emerald-600">Gazi</span> Aeromatics
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Since 2001, we've been pioneers in ethical sourcing and organic farming. Our partnership with over 2,500 dedicated farmers across India spans Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Odisha, Chhattisgarh, Haryana, and Uttar Pradesh.
                </p>
                <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg">
                  <p className="font-semibold text-lg mb-2">6,000+ Acres</p>
                  <p className="opacity-90">Organic farmland producing 350+ metric tonnes of natural essential oils annually</p>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('expertise')}
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {[
                { icon: '💡', title: 'SINCE 2001', subtitle: 'Pioneering Excellence' },
                { icon: '✓', title: '100% AUTHENTIC', subtitle: '& NATURAL' },
                { icon: '🌿', title: '100% PURE', subtitle: 'EMINENCE FOR PURITY' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-emerald-600 font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm font-medium">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Our Philosophy',
                desc: 'Ethical business practices with environmental consciousness, delivering trust and value to every stakeholder.',
                icon: <Heart className="w-8 h-8" />,
                color: 'from-rose-400 to-pink-600'
              },
              {
                title: 'Our Motto',
                desc: 'Consistently delivering premium quality products through sustainable organic farming methods.',
                icon: <Leaf className="w-8 h-8" />,
                color: 'from-green-400 to-emerald-600'
              },
              {
                title: 'Our Endeavor',
                desc: 'Farmers are our backbone. We ensure their family wellbeing and sustainable livelihoods.',
                icon: <Users className="w-8 h-8" />,
                color: 'from-blue-400 to-indigo-600'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Decades of experience in sourcing, manufacturing, and delivering premium aromatic solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 h-full">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 flex items-center space-x-2 group-hover:translate-x-2 transform transition-transform duration-200">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Premium <span className="text-emerald-600">Product Range</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive collection of certified organic and conventional essential oils
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                title: 'Organic Essential Oils', 
                gradient: 'from-green-400 to-emerald-600', 
                icon: '🌿',
                desc: 'Certified organic oils from sustainable farming'
              },
              { 
                title: 'Conventional Oils', 
                gradient: 'from-amber-400 to-orange-600', 
                icon: '🧴',
                desc: 'High-quality conventional essential oils'
              },
              { 
                title: 'Aroma Chemicals', 
                gradient: 'from-purple-400 to-violet-600', 
                icon: '⚗️',
                desc: 'Premium synthetic aromatic compounds'
              }
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4">
                  <div className={`h-64 bg-gradient-to-br ${category.gradient} flex items-center justify-center text-8xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-200">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{category.desc}</p>
                    <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full">
                      Explore Products
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Featured <span className="text-emerald-600">Products</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: 'Premium Neem Oil', icon: '🌿', gradient: 'from-green-400 to-emerald-600', desc: 'Pure, organic neem oil for versatile applications' },
                { name: 'Ceylon Cinnamon Oil', icon: '🍃', gradient: 'from-amber-400 to-orange-600', desc: 'Rich, aromatic cinnamon oil for premium blends' }
              ].map((product, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-center space-x-6 bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`w-32 h-24 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200">
                        {product.name}
                      </h4>
                      <p className="text-gray-600 mb-4">{product.desc}</p>
                      <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 flex items-center space-x-2 group-hover:translate-x-2 transform transition-transform duration-200">
                        <span>Know More</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why <span className="text-emerald-600">Choose Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality, sustainability, and innovation sets us apart in the essential oils industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities ensuring quality and efficiency in every drop
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Factory className="w-16 h-16" />, title: 'Modern Facilities', desc: 'Cutting-edge production units with advanced technology', gradient: 'from-gray-200 to-gray-400' },
              { icon: <CheckCircle className="w-16 h-16" />, title: 'Quality Control', desc: 'Rigorous testing and quality assurance processes', gradient: 'from-blue-200 to-blue-400' }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4">
                  <div className={`h-80 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
                    <div className="relative z-10 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{item.desc}</p>
                    <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 flex items-center space-x-2 group-hover:translate-x-2 transform transition-transform duration-200">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact-us" className="bg-gradient-to-br from-gray-900 to-emerald-900 text-white py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                    Gazi Aeromatics
                  </h3>
                  <p className="text-sm text-gray-300">Crafting Purity Since 2001</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Trusted globally for premium essential oils and sustainable practices.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide text-emerald-400">Contact Us</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span> Badaun - 243601,Uttar Pradesh, India</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+919449044326" className="hover:text-emerald-400 transition-colors">+91 88649 80972</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:info@saaromatics.com" className="hover:text-emerald-400 transition-colors">info@gaziaeromatics.com</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:sales@saaromatics.com" className="hover:text-emerald-400 transition-colors">sales@gaziaeromatics.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide text-emerald-400">Quick Links</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li key="home">
                  <button onClick={() => scrollToSection('home')} className="hover:text-emerald-400 transition-colors">
                    Home
                  </button>
                </li>
                <li key="about">
                  <button onClick={() => scrollToSection('about-us')} className="hover:text-emerald-400 transition-colors">
                    About Us
                  </button>
                </li>
                {['Expertise', 'Products', 'Industries', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide text-emerald-400">Connect With Us</h3>
              <div className="flex space-x-3 mb-6">
                {[
                  { icon: Facebook, color: 'hover:bg-blue-500' },
                  { icon: Instagram, color: 'hover:bg-pink-500' },
                  { icon: Linkedin, color: 'hover:bg-blue-600' }
                ].map(({ icon: Icon, color }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110 ${color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide text-emerald-400">Newsletter</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:border-emerald-400"
                />
                <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>Gazi Aeromatics © 2025. All rights reserved. Crafted by Siddhartha.</p>
          </div>
        </div>
      </footer>

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

export default ModernAromatics;
