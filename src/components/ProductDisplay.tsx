import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const ProductDisplay = () => {
  const whatsappNumber = "919355621324";
  const phoneNumber = "919355621324";

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-green-100 to-amber-100 rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h2 
            className="text-2xl md:text-3xl font-bold text-green-800 mb-8"
            style={{ fontFamily: 'Noto Sans Devanagari' }}
          >
            आयुर्वेदिक हेयर ऑयल
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div className="relative">
              <img
                src="/2.jpeg"
                alt="आयुर्वेदिक हेयर ऑयल"
                className="w-full max-w-sm mx-auto h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                सीमित स्टॉक!
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-800" style={{ fontFamily: 'Noto Sans Devanagari' }}>
                  विशेषताएं:
                </h3>
                <ul className="text-left space-y-2 text-green-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    15+ प्राकृतिक जड़ी-बूटियां
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    हाथों से तैयार किया गया
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    कोई साइड इफेक्ट नहीं
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    सभी प्रकार के बालों के लिए
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl">
                <p className="text-lg font-semibold text-amber-700 mb-2" style={{ fontFamily: 'Noto Sans Devanagari' }}>
                  कीमत जानने के लिए संपर्क करें
                </p>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Noto Sans Devanagari' }}>
                  सभी के लिए किफायती दाम
                </p>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=नमस्ते, मुझे तेल की कीमत और जानकारी चाहिए।`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp पर पूछें
                </a>
                <a
                  href={`tel:+${phoneNumber}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  कॉल करें
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;