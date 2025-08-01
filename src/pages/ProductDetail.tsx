import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingBag, MessageCircle, Shield, Truck, ArrowLeft, Star } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return <div className="text-center py-16">Product not found</div>;
  }

  const images = [product.image, product.image, product.image]; // Mock multiple images

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button 
        onClick={() => window.history.back()}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to catalog</span>
      </button>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="mb-4">
            <img 
              src={images[selectedImage]}
              alt={product.title}
              className="w-full h-96 md:h-[500px] object-cover rounded-xl"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'border-teal-500' : 'border-gray-200'
                }`}
              >
                <img 
                  src={image}
                  alt={`View ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-lg text-gray-600">{product.brand}</p>
            </div>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Heart 
                className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-400'}`}
              />
            </button>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-3xl font-bold text-gray-900">€{product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">€{product.originalPrice}</span>
            )}
            {product.discount && (
              <span className="bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                -{product.discount}% OFF
              </span>
            )}
          </div>

          {/* Details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold mb-4">Item Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Size:</span>
                <span className="ml-2 font-medium">{product.size}</span>
              </div>
              <div>
                <span className="text-gray-600">Condition:</span>
                <span className="ml-2 font-medium">Very Good</span>
              </div>
              <div>
                <span className="text-gray-600">Category:</span>
                <span className="ml-2 font-medium capitalize">{product.category}</span>
              </div>
              <div>
                <span className="text-gray-600">Color:</span>
                <span className="ml-2 font-medium">Black</span>
              </div>
            </div>
          </div>

          {/* Seller Info */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold mb-4">Seller Information</h3>
            <div className="flex items-center space-x-4">
              <img 
                src={product.seller.avatar}
                alt={product.seller.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <h4 className="font-medium">{product.seller.name}</h4>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{product.rating} (48 reviews)</span>
                  <span>•</span>
                  <span>{product.location}</span>
                </div>
              </div>
              <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Message</span>
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <button className="w-full bg-teal-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors flex items-center justify-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            
            <button className="w-full border-2 border-teal-500 text-teal-500 py-4 rounded-xl font-semibold text-lg hover:bg-teal-500 hover:text-white transition-colors">
              Buy Now
            </button>
          </div>

          {/* Guarantees */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Shield className="w-5 h-5 text-teal-500" />
              <span>Buyer protection included</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Truck className="w-5 h-5 text-teal-500" />
              <span>Fast shipping (3-5 business days)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;