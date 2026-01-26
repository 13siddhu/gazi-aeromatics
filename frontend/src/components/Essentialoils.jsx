import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './partials/header';
import Footer from './partials/footer';
import { Search, Filter, Leaf, Droplets } from 'lucide-react';

// --- IMAGE IMPORTS ---
// Make sure images exist in src/assets/products/
// If you don't have local images yet, these imports will error. 
// Comment them out and use the URL version if you are still testing.
import ajwainImg from '../assets/products/spearmint.jpg';
import basilImg from '../assets/products/indianbasiloil.jpg';
import blackPepperImg from '../assets/products/peppermint.jpg';
import cardamomImg from '../assets/products/cornmint.jpg';
import carrotSeedImg from '../assets/products/spearmint.jpg';
import castorImg from '../assets/products/menths.jpg';
import eucalyptusImg from '../assets/products/menths.jpg';
import lavenderImg from '../assets/products/spearmint.jpg';
import lemonImg from '../assets/products/lemongrass.jpg';
import peppermintImg from '../assets/products/peppermint.jpg';
import roseImg from '../assets/products/indianbasiloil.jpg';
import teaTreeImg from '../assets/products/cornmint.jpg';

const EssentialOils = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Essential oils data using IMPORTED images
  const essentialOils = [
    {
      id: 1,
      name: 'Ajwain Seed Oil',
      slug: 'ajwain-seed-oil',
      image: ajwainImg, // Uses the imported variable
      category: 'seed'
    },
    {
      id: 2,
      name: 'Basil Oil',
      slug: 'basil-oil',
      image: basilImg,
      category: 'herbal'
    },
    {
      id: 3,
      name: 'Black Pepper Oil',
      slug: 'black-pepper-oil',
      image: blackPepperImg,
      category: 'spice'
    },
    {
      id: 4,
      name: 'Cardamom Oil',
      slug: 'cardamom-oil',
      image: cardamomImg,
      category: 'spice'
    },
    {
      id: 5,
      name: 'Carrot Seed Oil',
      slug: 'carrot-seed-oil',
      image: carrotSeedImg,
      category: 'seed'
    },
    {
      id: 6,
      name: 'Castor Oil',
      slug: 'castor-oil',
      image: castorImg,
      category: 'carrier'
    },
    {
      id: 7,
      name: 'Eucalyptus Oil',
      slug: 'eucalyptus-oil',
      image: eucalyptusImg,
      category: 'herbal'
    },
    {
      id: 8,
      name: 'Lavender Oil',
      slug: 'lavender-oil',
      image: lavenderImg,
      category: 'floral'
    },
    {
      id: 9,
      name: 'Lemon Oil',
      slug: 'lemon-oil',
      image: lemonImg,
      category: 'citrus'
    },
    {
      id: 10,
      name: 'Peppermint Oil',
      slug: 'peppermint-oil',
      image: peppermintImg,
      category: 'herbal'
    },
    {
      id: 11,
      name: 'Rose Oil',
      slug: 'rose-oil',
      image: roseImg,
      category: 'floral'
    },
    {
      id: 12,
      name: 'Tea Tree Oil',
      slug: 'tea-tree-oil',
      image: teaTreeImg,
      category: 'herbal'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: essentialOils.length },
    { id: 'herbal', name: 'Herbal Oils', count: essentialOils.filter(oil => oil.category === 'herbal').length },
    { id: 'citrus', name: 'Citrus Oils', count: essentialOils.filter(oil => oil.category === 'citrus').length },
    { id: 'floral', name: 'Floral Oils', count: essentialOils.filter(oil => oil.category === 'floral').length },
    { id: 'spice', name: 'Spice Oils', count: essentialOils.filter(oil => oil.category === 'spice').length },
    { id: 'seed', name: 'Seed Oils', count: essentialOils.filter(oil => oil.category === 'seed').length },
    { id: 'carrier', name: 'Carrier Oils', count: essentialOils.filter(oil => oil.category === 'carrier').length }
  ];

  // Scroll handlers
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 100);
      setShowScrollTop(offset > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (dropdownId) => {
    setOpenDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // Filter products
  const filteredOils = essentialOils.filter(oil => {
    const matchesSearch = oil.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || oil.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const ProductCard = ({ oil }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-100 flex flex-col h-full">
      <Link to={`/${oil.slug}`} className="block h-full flex flex-col">
        <div className="relative overflow-hidden h-64">
          <img 
            src={oil.image} 
            alt={oil.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            // Fallback for missing images to prevent broken layout
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300?text=No+Image'; 
            }}
          />
        </div>
        
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2 block">
              {oil.category}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
              {oil.name}
            </h3>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <span className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm flex items-center gap-1">
              Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        activeSection={activeSection}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-600/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Droplets className="w-8 h-8 text-emerald-400" />
              <Leaf className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              Conventional Essential Oils
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
              Discover our premium collection of pure, therapeutic-grade essential oils
            </p>
            <div className="flex items-center justify-center space-x-6 text-emerald-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>100% Pure</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Therapeutic Grade</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                <span>Lab Tested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search and Filter Bar */}
          <div className="bg-black rounded-2xl shadow-lg p-6 mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search essential oils..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <Filter className="text-gray-500 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredOils.length} of {essentialOils.length} products
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${categories.find(cat => cat.id === selectedCategory)?.name}`}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredOils.map(oil => (
              <ProductCard key={oil.id} oil={oil} />
            ))}
          </div>

          {/* No Results */}
          {filteredOils.length === 0 && (
            <div className="text-center py-16">
              <Leaf className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 mt-16 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Custom Blends or Bulk Orders?
            </h2>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Our team of experts can create custom essential oil blends tailored to your specific needs. 
              Contact us for bulk pricing and custom formulations.
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      <Footer 
        scrollToSection={scrollToSection}
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
      />
    </div>
  );
};

export default EssentialOils;