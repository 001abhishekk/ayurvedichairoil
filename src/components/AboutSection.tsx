import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Traditional ayurvedic herbs and oil making process"
              className="w-full h-96 lg:h-full object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <div>
              <h2 
                className="text-3xl sm:text-4xl font-bold text-amber-900 mb-6"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Our Story & Tradition
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Our oil is made using ancient ayurvedic methods passed down through generations. 
                  Every bottle contains the wisdom of traditional Indian hair care, carefully preserved 
                  and crafted with modern quality standards.
                </p>
                <p>
                  We believe in the power of nature's ingredients. No chemicals, no shortcuts, 
                  no compromises. Just pure, authentic herbal formulations that have been trusted 
                  for centuries to nourish and strengthen hair from root to tip.
                </p>
                <p>
                  Each batch is handcrafted in small quantities to ensure freshness and potency. 
                  We source our ingredients directly from trusted farmers who share our commitment 
                  to organic, sustainable practices.
                </p>
              </div>
            </div>

            <button className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors group">
              Learn More About Our Process
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">15+</div>
                <div className="text-sm text-gray-600">Natural Herbs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">100%</div>
                <div className="text-sm text-gray-600">Chemical Free</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;