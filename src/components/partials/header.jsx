import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Linkedin, Menu, X, Leaf, ChevronRight } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen, scrolled, activeSection, openDropdown, setOpenDropdown, handleMouseEnter, handleMouseLeave, scrollToSection }) => {
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
        { name: 'Sourcing', link: '#sourcing' },
        { name: 'Research and Innovation', link: '#research-and-innovation' },
        { name: 'Manufacturing Capabilities', link: '#manufacturing-capabilities' },
        { name: 'Packaging', link: '#packaging' }
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
    <>
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
              <Link to="/" className="flex items-center space-x-4">
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
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <button
                      className={`px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 rounded-lg hover:bg-emerald-50 text-sm font-semibold tracking-wide ${
                        activeSection === item.id ? 'text-emerald-600 bg-emerald-50' : ''
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 rounded-lg hover:bg-emerald-50 text-sm font-semibold tracking-wide ${
                        activeSection === item.id ? 'text-emerald-600 bg-emerald-50' : ''
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                  {item.dropdown && openDropdown === item.id && (
                    <ul className="absolute left-0 top-full mt-2 w-60 bg-white shadow-xl rounded-lg border border-gray-100 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {item.dropdown.map((dropdownItem, index) => (
                        <li
                          key={index}
                          className="px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200 cursor-pointer text-sm font-medium"
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link to={dropdownItem.link}>
                            {dropdownItem.name}
                          </Link>
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
                            className="px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors text-sm"
                          >
                            <Link to={dropdownItem.link} onClick={() => setIsMenuOpen(false)}>
                              {dropdownItem.name}
                            </Link>
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
    </>
  );
};

export default Header;
