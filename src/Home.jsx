import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, Leaf, Award, Users, Factory, Shield, Heart, Zap, 
  Globe, ArrowUp, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import the Header and Footer components
import Header from './components/partials/header';
import Footer from './components/partials/footer';

const Home = () => {
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
    }
  ];

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
      
      {/* Use the new Header component */}
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
                  Our corporate philosophy driving excellence since 2010
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
                <Link to="/aboutus"
                  className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Discover Our Story</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
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
                  Since 2010, we've been pioneers in ethical sourcing and organic farming. Our partnership with over 2,500 dedicated farmers across India spans Punjab, Bihar, and Uttar Pradesh.
                </p>
                <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg">
                  <p className="font-semibold text-lg mb-2">4,000+ Acres</p>
                  <p className="opacity-90">Organic farmland producing 250+ metric tonnes of natural essential oils annually</p>
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
                { icon: '💡', title: 'SINCE 2010', subtitle: 'Pioneering Excellence' },
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

      {/* Use the new Footer component */}
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

export default Home;