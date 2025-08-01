import React, { useState } from 'react';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const ProductCatalog: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', 'dresses', 'tops', 'jeans', 'shoes', 'accessories'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (selectedSizes.length > 0 && !selectedSizes.includes(product.size)) return false;
    return true;
  });

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Items</h1>
          <p className="text-gray-600">{filteredProducts.length} items found</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Sort Dropdown */}
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>

          {/* View Mode Toggle */}
          <div className="hidden md:flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white rounded-xl p-6 h-fit sticky top-24`}>
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          
          {/* Categories */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Category</h4>
            <div className="space-y-2">
              {categories.map(category => (
                <label key={category} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-4 h-4 text-teal-500 focus:ring-teal-500 border-gray-300"
                  />
                  <span className="ml-2 capitalize">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>€{priceRange[0]}</span>
                <span>€{priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Size</h4>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                    selectedSizes.includes(size)
                      ? 'bg-teal-500 text-white border-teal-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-teal-500'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button 
            onClick={() => {
              setSelectedCategory('all');
              setPriceRange([0, 100]);
              setSelectedSizes([]);
            }}
            className="w-full text-teal-500 hover:text-teal-600 font-medium"
          >
            Clear all filters
          </button>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No items match your filters.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange([0, 100]);
                  setSelectedSizes([]);
                }}
                className="mt-4 text-teal-500 hover:text-teal-600 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;