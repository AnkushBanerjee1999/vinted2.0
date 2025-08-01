import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Vinted</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for items"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/catalog" className="text-gray-700 hover:text-teal-500 transition-colors">
              Browse
            </Link>
            <Link to="/sell" className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors">
              Sell now
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-teal-500 transition-colors">
              <Heart className="w-6 h-6" />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-teal-500 transition-colors">
              <ShoppingBag className="w-6 h-6" />
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-teal-500 transition-colors">
              <User className="w-6 h-6" />
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for items"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link to="/catalog" className="text-gray-700 hover:text-teal-500 transition-colors">
                Browse
              </Link>
              <Link to="/sell" className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors text-center">
                Sell now
              </Link>
              <Link to="/profile" className="text-gray-700 hover:text-teal-500 transition-colors flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Favorites</span>
              </Link>
              <Link to="/cart" className="text-gray-700 hover:text-teal-500 transition-colors flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5" />
                <span>Cart</span>
              </Link>
              <Link to="/profile" className="text-gray-700 hover:text-teal-500 transition-colors flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;