import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Linkedin, Leaf, MapPin, ArrowUp } from 'lucide-react';

const Footer = ({ scrollToSection, showScrollTop, scrollToTop }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const API_URL = import.meta.env.VITE_BACKEND_URL; // Use environment variable
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.text();
      if (response.ok) {
        alert(result);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(result || 'Error sending email');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Error sending email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
                  <p className="text-sm text-gray-300">Crafting Purity Since 2010</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our tamper-proof, foolproof packaging ensures our essential oils and aromatic products retain their aroma and freshness. Using high-quality materials from certified vendors, our packaging withstands extreme temperatures and harsh weather during transit.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide text-emerald-400">Contact Us</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>Badaun - 243601, Uttar Pradesh, India</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+919837453889" className="hover:text-emerald-400 transition-colors">+91 9837453889</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+919458879319" className="hover:text-emerald-400 transition-colors">+91 9458879319</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:gaziaeromatics@gmail.com" className="hover:text-emerald-400 transition-colors">gaziaeromatics@gmail.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide text-emerald-400">Quick Links</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li>
                  <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus" className="hover:text-emerald-400 transition-colors">About Us</Link>
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
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide text-emerald-400">Enquiry Form</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:border-emerald-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:border-emerald-400"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:border-emerald-400"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:border-emerald-400"
                />
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Sending...' : 'Send Enquiry'}
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>Gazi Aeromatics © 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Footer;