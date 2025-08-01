import React, { useState } from 'react';
import { Heart, Package, Settings, Star, MessageCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('favorites');

  const userProducts = products.slice(0, 6);
  const favoriteProducts = products.slice(6, 12);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
          <img 
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Sarah Johnson</h1>
            <div className="flex items-center space-x-4 text-gray-600 mb-4">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-medium">4.9</span>
                <span>(127 reviews)</span>
              </div>
              <span>•</span>
              <span>Member since 2022</span>
              <span>•</span>
              <span>Berlin, Germany</span>
            </div>
            <p className="text-gray-700 mb-4">
              Fashion enthusiast selling curated pieces from my wardrobe. All items are in excellent condition and come from a smoke-free home.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">87</div>
                <div className="text-sm text-gray-600">Items sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">23</div>
                <div className="text-sm text-gray-600">Active listings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">156</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Message</span>
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-lg">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-8">
            <button
              onClick={() => setActiveTab('favorites')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'favorites'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Favorites</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('listings')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'listings'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Package className="w-5 h-5" />
                <span>My Listings</span>
              </div>
            </button>
          </nav>
        </div>

        <div className="p-8">
          {activeTab === 'favorites' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Favorite Items</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favoriteProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'listings' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">My Listings</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {userProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;