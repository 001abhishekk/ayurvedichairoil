import React from 'react';
import { Leaf, Sparkles, Droplets, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Natural Ingredients',
    description: 'Made with 100% pure herbs and natural oils'
  },
  {
    icon: Sparkles,
    title: 'Promotes Hair Growth',
    description: 'Stimulates follicles for stronger, healthier hair'
  },
  {
    icon: Droplets,
    title: 'Non-Sticky Formula',
    description: 'Light texture that absorbs quickly'
  },
  {
    icon: Shield,
    title: 'Prevents Dandruff',
    description: 'Nourishes scalp and reduces flakiness'
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Why Choose Our Hair Oil?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the natural benefits that make our hair oil the perfect choice for your hair care routine
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <benefit.icon className="w-10 h-10 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;