import React from 'react';

const ingredients = [
  {
    name: 'Amla',
    description: 'Rich in Vitamin C, strengthens roots and prevents premature greying',
    image: 'https://images.pexels.com/photos/9863672/pexels-photo-9863672.jpeg?auto=compress&cs=tinysrgb&w=300',
    benefits: ['Strengthens roots', 'Prevents greying', 'Rich in antioxidants']
  },
  {
    name: 'Bhringraj',
    description: 'The "king of herbs" for hair, promotes growth and reduces hair fall',
    image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=300',
    benefits: ['Promotes growth', 'Reduces hair fall', 'Improves texture']
  },
  {
    name: 'Coconut Oil',
    description: 'Deeply nourishes scalp and provides essential fatty acids',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300',
    benefits: ['Deep nourishment', 'Moisturizes scalp', 'Adds natural shine']
  },
  {
    name: 'Hibiscus',
    description: 'Natural conditioner that adds shine, softness and prevents split ends',
    image: 'https://images.pexels.com/photos/8142963/pexels-photo-8142963.jpeg?auto=compress&cs=tinysrgb&w=300',
    benefits: ['Adds shine', 'Natural conditioner', 'Prevents split ends']
  }
];

const IngredientsSection = () => {
  return (
    <section id="ingredients" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Pure Natural Ingredients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every ingredient in our hair oil is carefully selected for its proven benefits and purity. 
            Discover the natural power that makes our formula so effective.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative mb-6">
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>

              <h3 className="text-2xl font-bold text-amber-900 mb-3" style={{ fontFamily: 'Playfair Display' }}>
                {ingredient.name}
              </h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {ingredient.description}
              </p>

              <div className="space-y-2">
                {ingredient.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm text-green-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-100 to-amber-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Playfair Display' }}>
              And 10+ More Natural Herbs
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our complete formula includes additional ayurvedic herbs like neem, fenugreek, curry leaves, 
              and more, each contributing to the overall health and beauty of your hair.
            </p>
            <button className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
              View Complete Ingredient List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;