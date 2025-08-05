import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

const StickyContact = () => {
  const [isVisible, setIsVisible] = useState(true);
  const whatsappNumber = "919355621324";
  const phoneNumber = "919355621324";

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-auto">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-2xl shadow-2xl border border-green-500">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="text-center mb-3">
          <p className="text-sm font-semibold" style={{ fontFamily: 'Noto Sans Devanagari' }}>
            🌿 तुरंत संपर्क करें
          </p>
        </div>
        
        <div className="flex gap-3">
          <a
            href={`https://wa.me/${whatsappNumber}?text=नमस्ते, मुझे तेल के बारे में जानकारी चाहिए।`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center text-sm"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </a>
          <a
            href={`tel:+${phoneNumber}`}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center text-sm"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyContact;