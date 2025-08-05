import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const whatsappNumber = "919355621324";
  const phoneNumber = "919355621324";

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 leading-tight"
              style={{ fontFamily: 'Noto Sans Devanagari' }}
            >
              बाल गिरें या गंजपन –<br />
              <span className="text-amber-700">अब मिलेगी जड़ी-बूटी से शिफा!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Noto Sans Devanagari' }}>
              एक ही आयुर्वेदिक तेल, हाथों से बना, पुरानी जड़ी-बूटियों के नुस्खे से – 
              सिर्फ उनके लिए जो बालों का दर्द समझते हैं।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`tel:+${phoneNumber}`}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                📞 कॉल करें
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=नमस्ते, मुझे तेल के बारे में जानकारी चाहिए।`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                💬 WhatsApp करें
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-green-700 font-medium">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                100% प्राकृतिक
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                हाथों से बना
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                कोई केमिकल नहीं
              </div>
            </div>
          </div>

          {/* Right Side - Product Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/1.jpeg"
                alt="आयुर्वेदिक हेयर ऑयल की बोतल"
                className="w-full max-w-md mx-auto h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-200 rounded-full opacity-30 blur-xl"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-8 -left-4 bg-white p-3 rounded-full shadow-lg">
              <span className="text-2xl">🌿</span>
            </div>
            <div className="absolute bottom-12 -right-4 bg-white p-3 rounded-full shadow-lg">
              <span className="text-2xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;