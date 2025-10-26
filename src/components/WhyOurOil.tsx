import React from 'react';
import { Star } from 'lucide-react';

const beforeAfterImages = [
  {
    before: '/before-1.jpg',
    after: '/after-1.jpg',
    title: 'एलोपेसिया एरीटा - 3 महीने का परिणाम'
  },
  {
    before: '/before-2.jpg',
    after: '/after-2.jpg',
    title: 'गंजेपन के धब्बे - 2 महीने का परिणाम'
  }
];

const benefits = [
  {
    icon: '🤲',
    title: 'बाबा जी का आशीर्वाद',
    description: 'यह तेल हमें एक बाबा जी ने आशीर्वाद के तौर पर दिया था और बनाना सिखाया था'
  },
  {
    icon: '🌿',
    title: 'कोई केमिकल नहीं',
    description: 'सिर्फ प्राकृतिक जड़ी-बूटियां'
  },
  {
    icon: '🧠',
    title: 'मानसिक तनाव पर असर',
    description: 'स्ट्रेस से झड़ने वाले बालों पर भी काम करता है'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'सभी के लिए एक तेल',
    description: 'पुरुष, महिला, बच्चे - सबके लिए उपयुक्त'
  }
];

const testimonials = [
  {
    name: 'प्रिया शर्मा',
    location: 'दिल्ली',
    text: 'सिर्फ 3 हफ्ते में मेरे बाल झड़ना बंद हो गए। बहुत अच्छा तेल है!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'राजेश कुमार',
    location: 'मुंबई',
    text: 'गंजेपन के धब्बे भरने लगे हैं। बहुत खुश हूं इस तेल से।',
    rating: 5,
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'अनीता देवी',
    location: 'जयपुर',
    text: 'मेरे बालों में चमक आ गई है। डैंड्रफ भी खत्म हो गया।',
    rating: 5,
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

const WhyOurOil = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
            style={{ fontFamily: 'Noto Sans Devanagari' }}
          >
            हमारा तेल क्यों काम करता है?
          </h2>
          <p className="text-lg text-green-700 mb-8" style={{ fontFamily: 'Noto Sans Devanagari' }}>
            यह तेल हमें एक संत बाबा जी ने आशीर्वाद के तौर पर दिया था। उन्होंने हमें यह पुराना नुस्खा सिखाया था जो पीढ़ियों से चला आ रहा है।
          </p>
        </div>

        {/* Before After Images */}
        <div className="mb-16">
          <h3 
            className="text-xl md:text-2xl font-bold text-center text-green-800 mb-8"
            style={{ fontFamily: 'Noto Sans Devanagari' }}
          >
            एलोपेसिया एरीटा के परिणाम - पहले और बाद में
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {beforeAfterImages.map((image, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-4 text-center" style={{ fontFamily: 'Noto Sans Devanagari' }}>
                  {image.title}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <img
                      src={image.before}
                      alt="पहले"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-semibold text-red-600" style={{ fontFamily: 'Noto Sans Devanagari' }}>
                      पहले
                    </p>
                  </div>
                  <div className="text-center">
                    <img
                      src={image.after}
                      alt="बाद में"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-semibold text-green-600" style={{ fontFamily: 'Noto Sans Devanagari' }}>
                      बाद में
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2" style={{ fontFamily: 'Noto Sans Devanagari' }}>
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Noto Sans Devanagari' }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-8">
          <h3 
            className="text-xl md:text-2xl font-bold text-center text-green-800 mb-8"
            style={{ fontFamily: 'Noto Sans Devanagari' }}
          >
            असली लोगों के असली अनुभव
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-green-800" style={{ fontFamily: 'Noto Sans Devanagari' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic" style={{ fontFamily: 'Noto Sans Devanagari' }}>
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOurOil;
