import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Package, Truck, ArrowLeft } from 'lucide-react';
import { products } from '../../data/products';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import ProductCard from '../ProductCard';

interface ProductDetailProps {
  addToCart: (product: any, quantity: number) => void;
}

export default function ProductDetail({ addToCart }: ProductDetailProps) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 style={{ color: '#444C5E' }} className="mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-blue-600 hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id && p.inStock)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart(product, quantity);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 3000);
    }
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 mb-6 hover:opacity-80"
          style={{ color: '#444C5E' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span
                  className="text-white px-6 py-3 rounded-full"
                  style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
                >
                  {product.isUpcoming ? 'Coming Soon' : 'Out of Stock'}
                </span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="text-sm mb-2 opacity-60">{product.manufacturer}</div>
            <h1 style={{ color: '#444C5E' }} className="mb-4">{product.name}</h1>
            <div className="text-sm mb-4 opacity-60">{product.category}</div>

            {product.rating > 0 && (
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span>{product.rating}</span>
                <span className="opacity-60">({product.reviews} reviews)</span>
              </div>
            )}

            <div className="mb-6">
              <div className="text-3xl mb-2" style={{ color: '#E4CF8B' }}>
                ₦{product.price.toLocaleString()}
              </div>
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Package className="w-5 h-5" />
                  <span>In Stock - Ready to Ship</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600">
                  <Package className="w-5 h-5" />
                  <span>{product.isUpcoming ? 'Available Soon' : 'Currently Unavailable'}</span>
                </div>
              )}
            </div>

            <p className="mb-6 opacity-70">{product.description}</p>

            {product.inStock && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label style={{ color: '#444C5E' }}>Quantity:</label>
                  <div className="flex items-center border-2 rounded-lg" style={{ borderColor: '#E4CF8B' }}>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-16 text-center focus:outline-none"
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
                </button>

                <Link
                  to="/cart"
                  className="block w-full py-4 rounded-lg text-center border-2 hover:bg-gray-50 transition-colors"
                  style={{ borderColor: '#E4CF8B', color: '#444C5E' }}
                >
                  Go to Cart
                </Link>
              </div>
            )}

            {/* Features */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Truck className="w-5 h-5" style={{ color: '#E4CF8B' }} />
                <div>
                  <div style={{ color: '#444C5E' }}>Free Delivery</div>
                  <div className="text-sm opacity-60">On orders over ₦100,000</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Package className="w-5 h-5" style={{ color: '#E4CF8B' }} />
                <div>
                  <div style={{ color: '#444C5E' }}>Pickup Available</div>
                  <div className="text-sm opacity-60">At our Lokoja store</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 style={{ color: '#444C5E' }} className="mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
