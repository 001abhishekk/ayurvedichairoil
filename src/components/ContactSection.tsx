import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const whatsappNumber = "919355621324";
  const phoneNumber = "919355621324";

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-green-800 to-amber-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: 'Noto Sans Devanagari' }}
          >
            आज ही संपर्क करें
          </h2>
          <p className="text-lg text-green-100" style={{ fontFamily: 'Noto Sans Devanagari' }}>
            बालों की समस्या का समाधान सिर्फ एक कॉल की दूरी पर
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* WhatsApp */}
          <div className="bg-white/10 p-6 rounded-xl text-center hover:bg-white/20 transition-colors">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-green-300" />
            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Noto Sans Devanagari' }}>
              WhatsApp करें
            </h3>
            <a
              href={`https://wa.me/${whatsappNumber}?text=नमस्ते, मुझे तेल के बारे में जानकारी चाहिए।`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-white transition-colors"
            >
              +91 93556 21324
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white/10 p-6 rounded-xl text-center hover:bg-white/20 transition-colors">
            <Phone className="w-12 h-12 mx-auto mb-4 text-blue-300" />
            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Noto Sans Devanagari' }}>
              कॉल करें
            </h3>
            <a
              href={`tel:+${phoneNumber}`}
              className="text-blue-300 hover:text-white transition-colors"
            >
              +91 93556 21324
            </a>
          </div>

          {/* Location */}
          <div className="bg-white/10 p-6 rounded-xl text-center hover:bg-white/20 transition-colors">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-300" />
            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Noto Sans Devanagari' }}>
              डिलीवरी एरिया
            </h3>
            <p className="text-amber-300" style={{ fontFamily: 'Noto Sans Devanagari' }}>
              पूरे भारत में उपलब्ध
            </p>
          </div>

          {/* Timing */}
          <div className="bg-white/10 p-6 rounded-xl text-center hover:bg-white/20 transition-colors">
            <Clock className="w-12 h-12 mx-auto mb-4 text-purple-300" />
            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Noto Sans Devanagari' }}>
              समय
            </h3>
            <p className="text-purple-300" style={{ fontFamily: 'Noto Sans Devanagari' }}>
              सुबह 9 से रात 9 बजे तक
            </p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="bg-white/10 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ fontFamily: 'Noto Sans Devanagari' }}
            >
              अभी संपर्क करें और पाएं:
            </h3>
            <ul className="text-left space-y-2 mb-6 text-green-100">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                मुफ्त सलाह और जानकारी
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                विशेष छूट की जानकारी
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                घर तक डिलीवरी
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=नमस्ते, मुझे तेल के बारे में विस्तार से जानकारी चाहिए।`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                +91 93556 21324
                WhatsApp करें
              </a>
              <a
                href={`tel:+${phoneNumber}`}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                अभी कॉल करें
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;