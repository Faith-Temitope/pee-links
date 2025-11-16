import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CartProps {
  cart: any[];
  updateCartQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

export default function Cart({ cart, updateCartQuantity, removeFromCart }: CartProps) {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 100000 ? 0 : 5000;
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: '#E4CF8B' }}
          >
            <ShoppingBag className="w-12 h-12" style={{ color: '#444C5E' }} />
          </div>
          <h1 style={{ color: '#444C5E' }} className="mb-4">Your Cart is Empty</h1>
          <p className="opacity-70 mb-8">
            Add some products to your cart to see them here
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-4 rounded-lg"
            style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 style={{ color: '#444C5E' }} className="mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex gap-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <Link
                    to={`/product/${item.id}`}
                    className="hover:opacity-80"
                    style={{ color: '#444C5E' }}
                  >
                    <h3 className="line-clamp-2 mb-1">{item.name}</h3>
                  </Link>
                  <div className="text-sm opacity-60 mb-2">{item.manufacturer}</div>
                  <div style={{ color: '#E4CF8B' }}>
                    ₦{item.price.toLocaleString()}
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-700 p-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>

                  <div className="flex items-center border-2 rounded-lg" style={{ borderColor: '#E4CF8B' }}>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <span className="text-sm opacity-60">Item Total:</span>
                <span style={{ color: '#444C5E' }}>
                  ₦{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 style={{ color: '#444C5E' }} className="mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="opacity-70">Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Delivery Fee</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    `₦${deliveryFee.toLocaleString()}`
                  )}
                </span>
              </div>
              {subtotal < 100000 && (
                <div className="text-sm opacity-60 bg-gray-50 p-3 rounded-lg">
                  Add ₦{(100000 - subtotal).toLocaleString()} more for free delivery
                </div>
              )}
              <div className="border-t pt-4 flex justify-between">
                <span style={{ color: '#444C5E' }}>Total</span>
                <span style={{ color: '#E4CF8B' }}>
                  ₦{total.toLocaleString()}
                </span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full py-4 text-center rounded-lg mb-4 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/shop"
              className="block w-full py-4 text-center rounded-lg border-2 hover:bg-gray-50 transition-colors"
              style={{ borderColor: '#E4CF8B', color: '#444C5E' }}
            >
              Continue Shopping
            </Link>

            <div className="mt-6 pt-6 border-t text-sm opacity-70">
              <p className="mb-2">✓ Secure checkout</p>
              <p className="mb-2">✓ Multiple payment options</p>
              <p>✓ Pay 50% now, complete on delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
