import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: any;
  addToCart: (product: any, quantity: number) => void;
}

export default function ProductCard({ product, addToCart }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.inStock) {
      addToCart(product, 1);
    }
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white px-4 py-2 rounded-full" style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}>
              {product.isUpcoming ? 'Coming Soon' : 'Out of Stock'}
            </span>
          </div>
        )}
        {product.inStock && (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg text-white"
            style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs mb-2 opacity-60">{product.manufacturer}</div>
        <h3 style={{ color: '#444C5E' }} className="mb-2 line-clamp-2">{product.name}</h3>
        <div className="text-xs mb-2 opacity-60">{product.category}</div>
        {product.rating > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{product.rating}</span>
            <span className="text-xs opacity-60">({product.reviews})</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <div>
            <div style={{ color: '#E4CF8B' }}>
              ₦{product.price.toLocaleString()}
            </div>
          </div>
          {product.inStock && (
            <span className="text-xs text-green-600">In Stock</span>
          )}
        </div>
      </div>
    </Link>
  );
}
