import React, { useState } from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-amber-900 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display' }}>
              Pure Hair Oil
            </h3>
            <p className="text-amber-100 leading-relaxed">
              Handcrafted with love using ancient ayurvedic wisdom. 
              Natural, pure, and effective hair care for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/911234567890" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-200">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-amber-100 hover:text-white transition-colors">Home</a>
              <a href="#products" className="text-amber-100 hover:text-white transition-colors">Shop</a>
              <a href="#about" className="text-amber-100 hover:text-white transition-colors">About Us</a>
              <a href="#ingredients" className="text-amber-100 hover:text-white transition-colors">Ingredients</a>
              <a href="#contact" className="text-amber-100 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-200">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-200" />
                <span className="text-amber-100">+91 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-200" />
                <span className="text-amber-100">info@purehair.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-200 mt-1" />
                <span className="text-amber-100">
                  123 Herbal Street,<br />
                  Natural City, India 400001
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-200">Get Natural Hair Care Tips!</h4>
            <p className="text-amber-100 text-sm">
              Subscribe to our newsletter for exclusive tips, offers, and natural hair care advice.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-amber-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-amber-100 text-sm">
              © 2024 Pure Hair Oil. All rights reserved. Made with 💚 for healthy hair.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm text-amber-100">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Shipping Info</a>
              <a href="#" className="hover:text-white transition-colors">Returns</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;