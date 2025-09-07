import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, Phone, Facebook, Instagram, Linkedin, Menu, X, ChevronRight, 
  Leaf, Award, Users, Factory, Shield, Heart, Zap, Globe, Star, ArrowUp, MapPin, CheckCircle
} from 'lucide-react';

const AboutUsPage = () => {
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
        'About Anandateertha Aromatics',
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

      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 94490 44326</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline">International Sales:</span>
              <a href="mailto:info@saaromatics.com" className="hover:text-green-200 transition-colors">
                info@saaromatics.com
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:sales@saaromatics.com" className="hover:text-green-200 transition-colors">
                sales@saaromatics.com
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
                  Anandateertha
                </h1>
                <p className="text-sm text-gray-600 font-medium tracking-wide">AROMATICS</p>
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
                          onClick={() => scrollToSection(item.id)}
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
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  About
                </span>
                <span className="text-gray-800"> Anandateertha </span>
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Aromatics
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
                  We at <strong className="text-emerald-600">Anandateertha Aromatics</strong> are proud to be associated with over <strong>2,500 farmers</strong> across India, with our farms in <strong>Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Odisha, Chhattisgarh, Assam, Haryana and Uttar Pradesh</strong>. We ensure that the farmers we are associated with are practicing organic methods of farming.
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
                <strong className="text-emerald-600">Anandateertha Aromatics Private Limited</strong> started its operations back in 2001 in the field of Aromatics and Medicinal plants with the help of CIMAP-Bangalore.
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
                    Anandateertha Aromatics
                  </h3>
                  <p className="text-sm text-gray-300">Crafting Purity Since 2001</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide text-emerald-400">Contact Us</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>Sy No. 56 and 57, Vijayaraja Estate, Chokkanahalli, Jakkur Post, Bangalore - 560064, Karnataka, India</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+919449044326" className="hover:text-emerald-400 transition-colors">+91 94490 44326</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:info@saaromatics.com" className="hover:text-emerald-400 transition-colors">info@saaromatics.com</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:sales@saaromatics.com" className="hover:text-emerald-400 transition-colors">sales@saaromatics.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide text-emerald-400">Information</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                {['About Us', 'Contact Us', 'Products', 'Privacy Policy', 'Terms Of Use'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-emerald-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide text-emerald-400">Products</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Organic Essential Oil</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Conventional Essential Oil</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Aroma Chemicals</a></li>
              </ul>
              <h3 className="text-lg font-semibold mb-4 mt-8 uppercase tracking-wide text-emerald-400">Social Media</h3>
              <div className="flex space-x-3">
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
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>Anandateertha Aromatics © 2022 Crafted by Fugensys</p>
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

export default AboutUsPage;