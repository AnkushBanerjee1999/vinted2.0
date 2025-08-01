import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from '../data/products';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Buy & Sell
                <span className="text-teal-500"> Pre-loved</span>
                <br />Fashion
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join millions of fashion lovers buying and selling pre-owned clothes. 
                Discover unique pieces and give your wardrobe a second life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/catalog"
                  className="bg-teal-500 text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-105 text-center font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Start Shopping</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/sell"
                  className="border-2 border-teal-500 text-teal-500 px-8 py-4 rounded-lg hover:bg-teal-500 hover:text-white transition-all text-center font-semibold"
                >
                  Sell Your Items
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fashion collage"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.8/5</span>
                  <span className="text-gray-500 text-sm">1M+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Vinted?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make buying and selling second-hand fashion simple, safe, and sustainable.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                <Shield className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Buyer Protection</h3>
              <p className="text-gray-600">
                Shop with confidence. Every purchase is protected until you receive your item.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-coral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-coral-200 transition-colors">
                <Truck className="w-8 h-8 text-coral-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Quick and reliable delivery. Most items arrive within 3-5 business days.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Star className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Items</h3>
              <p className="text-gray-600">
                Carefully curated pre-loved fashion from trusted sellers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
            <Link 
              to="/catalog"
              className="text-teal-500 hover:text-teal-600 font-semibold flex items-center space-x-1"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Fashion Journey?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join our community of fashion lovers and discover amazing deals on pre-loved items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/catalog"
              className="bg-white text-teal-500 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Browse Items
            </Link>
            <Link 
              to="/sell"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-teal-500 transition-colors font-semibold"
            >
              Start Selling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;