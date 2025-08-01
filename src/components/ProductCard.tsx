import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
      <div className="relative">
        <img 
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <Heart 
            className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-400'}`}
          />
        </button>
        {product.discount && (
          <div className="absolute top-3 left-3 bg-coral-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            -{product.discount}%
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{product.brand}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-500 transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">€{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">€{product.originalPrice}</span>
            )}
          </div>
          <span className="text-sm text-gray-500">Size {product.size}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={product.seller.avatar}
              alt={product.seller.name}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm text-gray-600">{product.seller.name}</span>
          </div>
          <span className="text-xs text-gray-500">{product.location}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;