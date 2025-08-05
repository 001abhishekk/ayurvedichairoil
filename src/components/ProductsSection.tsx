import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Classic Ayurvedic Hair Oil',
    price: '₹399',
    originalPrice: '₹499',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 124,
    description: 'Traditional blend with amla, bhringraj, and coconut oil'
  },
  {
    id: 2,
    name: 'Anti-Dandruff Hair Oil',
    price: '₹449',
    originalPrice: '₹549',
    image: 'https://images.pexels.com/photos/6540944/pexels-photo-6540944.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 87,
    description: 'Special formula with neem and tea tree for dandruff control'
  },
  {
    id: 3,
    name: 'Hair Growth Booster Oil',
    price: '₹529',
    originalPrice: '₹649',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 156,
    description: 'Power-packed with onion extract and rosemary for growth'
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully crafted range of natural hair oils, each designed for specific hair needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  Save ₹{parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-700">
                      {product.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  
                  <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors flex items-center space-x-2 group">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;