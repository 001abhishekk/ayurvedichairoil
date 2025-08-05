import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const whatsappNumber = "919355621324";
  const phoneNumber = "919355621324";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-green-800" style={{ fontFamily: 'Noto Sans Devanagari' }}>
              🌿 आयुर्वेदिक हेयर ऑयल
            </h1>
            <p className="text-xs text-green-600">हाथों से बना, जड़ी-बूटियों का तेल</p>
          </div>

          {/* Contact Buttons */}
          <div className="flex items-center space-x-2">
            <a
              href={`tel:+${phoneNumber}`}
              className="flex items-center bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Call</span>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=नमस्ते, मुझे तेल के बारे में जानकारी चाहिए।`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;