import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

const Cart: React.FC = () => {
  const cartItems = [
    {
      id: '1',
      title: 'Vintage Levi\'s 501 Jeans',
      brand: 'Levi\'s',
      size: 'M',
      price: 45.00,
      quantity: 1,
      image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=300',
      seller: 'Emma Wilson'
    },
    {
      id: '2', 
      title: 'Silk Floral Dress',
      brand: 'Zara',
      size: 'S',
      price: 32.00,
      quantity: 1,
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=300',
      seller: 'Maria Garcia'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 4.90;
  const buyerProtection = 1.50;
  const total = subtotal + shipping + buyerProtection;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-6">Start shopping to add items to your cart</p>
                <button className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 py-6 border-b border-gray-200 last:border-b-0">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.brand} • Size {item.size}</p>
                      <p className="text-sm text-gray-500">Sold by {item.seller}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-gray-900">€{item.price.toFixed(2)}</p>
                    </div>

                    <button className="p-2 text-red-500 hover:bg-red-50 rounded">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">€{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Buyer Protection</span>
                <span className="font-medium">€{buyerProtection.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">€{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-teal-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors mb-4">
              Proceed to Checkout
            </button>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <span>🔒</span>
                <span>Secure checkout with buyer protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;