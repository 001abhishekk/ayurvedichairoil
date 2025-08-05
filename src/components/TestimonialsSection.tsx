import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya S.',
    location: 'Mumbai',
    rating: 5,
    text: 'My hair fall reduced in just 2 weeks! The oil smells divine and feels light on the scalp. I love how it doesn\'t make my hair greasy.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 2,
    name: 'Anita R.',
    location: 'Delhi',
    rating: 5,
    text: 'Best hair oil I\'ve ever used! My hair has become so much stronger and shinier. The natural ingredients make all the difference.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 3,
    name: 'Meera K.',
    location: 'Bangalore',
    rating: 5,
    text: 'Amazing results! My dandruff is completely gone and my hair feels so nourished. Will definitely order again.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from real people who trust our natural hair care
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <Quote className="w-12 h-12 text-green-700 mx-auto mb-6 opacity-50" />
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-6 h-6 text-yellow-400 fill-current" 
                />
              ))}
            </div>

            <blockquote className="text-xl lg:text-2xl text-gray-800 mb-8 leading-relaxed italic">
              "{currentTestimonial.text}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
              />
              <div className="text-left">
                <div className="font-semibold text-amber-900 text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-gray-600">
                  {currentTestimonial.location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 hover:text-green-700"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 hover:text-green-700"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-green-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;