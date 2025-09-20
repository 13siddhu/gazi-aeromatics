import React, { useState, useEffect } from 'react';
import Header from './partials/header';
import Footer from './partials/footer';
import { Search, Filter, Star, ShoppingCart, Eye, Heart, ArrowRight, Leaf, Droplets } from 'lucide-react';

const EssentialOils = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Essential oils data
  const essentialOils = [
    {
      id: 1,
      name: 'Ajwain Seed Oil',
      image: '/api/placeholder/300/300',
      category: 'seed',
      description: 'Premium quality ajwain seed oil with therapeutic properties',
      price: '$25.99',
      rating: 4.8,
      inStock: true,
      benefits: ['Digestive support', 'Antimicrobial', 'Respiratory health']
    },
    {
      id: 2,
      name: 'Basil Oil',
      image: '/api/placeholder/300/300',
      category: 'herbal',
      description: 'Pure basil oil extracted from fresh basil leaves',
      price: '$22.50',
      rating: 4.7,
      inStock: true,
      benefits: ['Stress relief', 'Mental clarity', 'Immune support']
    },
    {
      id: 3,
      name: 'Black Pepper Oil',
      image: '/api/placeholder/300/300',
      category: 'spice',
      description: 'Concentrated black pepper oil with warming properties',
      price: '$28.75',
      rating: 4.9,
      inStock: true,
      benefits: ['Circulation', 'Digestive aid', 'Muscle relief']
    },
    {
      id: 4,
      name: 'Cardamom Oil',
      image: '/api/placeholder/300/300',
      category: 'spice',
      description: 'Aromatic cardamom oil with sweet and spicy notes',
      price: '$35.00',
      rating: 4.6,
      inStock: true,
      benefits: ['Digestive comfort', 'Fresh breath', 'Mood uplift']
    },
    {
      id: 5,
      name: 'Carrot Seed Oil',
      image: '/api/placeholder/300/300',
      category: 'seed',
      description: 'Nutrient-rich carrot seed oil for skincare applications',
      price: '$42.99',
      rating: 4.8,
      inStock: false,
      benefits: ['Skin rejuvenation', 'Anti-aging', 'UV protection']
    },
    {
      id: 6,
      name: 'Castor Oil',
      image: '/api/placeholder/300/300',
      category: 'carrier',
      description: 'Pure castor oil for hair and skin care',
      price: '$18.25',
      rating: 4.5,
      inStock: true,
      benefits: ['Hair growth', 'Skin moisturizing', 'Anti-inflammatory']
    },
    {
      id: 7,
      name: 'Eucalyptus Oil',
      image: '/api/placeholder/300/300',
      category: 'herbal',
      description: 'Refreshing eucalyptus oil with cooling properties',
      price: '$24.50',
      rating: 4.9,
      inStock: true,
      benefits: ['Respiratory support', 'Mental clarity', 'Pain relief']
    },
    {
      id: 8,
      name: 'Lavender Oil',
      image: '/api/placeholder/300/300',
      category: 'floral',
      description: 'Premium lavender oil for relaxation and aromatherapy',
      price: '$29.99',
      rating: 5.0,
      inStock: true,
      benefits: ['Relaxation', 'Sleep support', 'Skin soothing']
    },
    {
      id: 9,
      name: 'Lemon Oil',
      image: '/api/placeholder/300/300',
      category: 'citrus',
      description: 'Fresh lemon oil with uplifting citrus fragrance',
      price: '$21.75',
      rating: 4.7,
      inStock: true,
      benefits: ['Mood boost', 'Immune support', 'Natural cleanser']
    },
    {
      id: 10,
      name: 'Peppermint Oil',
      image: '/api/placeholder/300/300',
      category: 'herbal',
      description: 'Cooling peppermint oil with invigorating properties',
      price: '$26.50',
      rating: 4.8,
      inStock: true,
      benefits: ['Digestive comfort', 'Mental alertness', 'Cooling relief']
    },
    {
      id: 11,
      name: 'Rose Oil',
      image: '/api/placeholder/300/300',
      category: 'floral',
      description: 'Luxurious rose oil for premium skincare',
      price: '$89.99',
      rating: 4.9,
      inStock: true,
      benefits: ['Skin hydration', 'Anti-aging', 'Emotional balance']
    },
    {
      id: 12,
      name: 'Tea Tree Oil',
      image: '/api/placeholder/300/300',
      category: 'herbal',
      description: 'Pure tea tree oil with powerful antimicrobial properties',
      price: '$23.25',
      rating: 4.8,
      inStock: true,
      benefits: ['Acne treatment', 'Antiseptic', 'Scalp health']
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
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img 
          src={oil.image} 
          alt={oil.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          {oil.inStock ? (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              In Stock
            </span>
          ) : (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Out of Stock
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
            <Eye className="w-5 h-5 text-gray-700" />
          </button>
          <button className="bg-emerald-500 p-3 rounded-full shadow-lg hover:bg-emerald-600 transition-colors">
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
            {oil.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm text-gray-600">{oil.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {oil.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {oil.benefits.slice(0, 2).map((benefit, index) => (
              <span key={index} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-medium">
                {benefit}
              </span>
            ))}
            {oil.benefits.length > 2 && (
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                +{oil.benefits.length - 2} more
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-emerald-600">
            {oil.price}
          </div>
          <button 
            className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200 flex items-center space-x-2 text-sm"
            disabled={!oil.inStock}
          >
            <span>{oil.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
            {oil.inStock && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
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
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
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