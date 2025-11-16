import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, Shield, Truck } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from '../ProductCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomeProps {
  addToCart: (product: any, quantity: number) => void;
}

export default function Home({ addToCart }: HomeProps) {
  const featuredProducts = products.filter(p => p.inStock).slice(0, 8);
  const upcomingProducts = products.filter(p => p.isUpcoming).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32"
        style={{ backgroundColor: '#444C5E' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Quality Electronics & Appliances for Your Home
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Discover premium brands like LG, Samsung, Sony, and more at unbeatable prices. Serving Lokoja and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 rounded-lg border-2 border-white inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800"
                alt="Modern home appliances"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#E4CF8B' }}
              >
                <Shield className="w-8 h-8" style={{ color: '#444C5E' }} />
              </div>
              <h3 style={{ color: '#444C5E' }} className="mb-2">Quality Guaranteed</h3>
              <p className="text-sm opacity-70">Authentic products from trusted brands</p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#E4CF8B' }}
              >
                <Truck className="w-8 h-8" style={{ color: '#444C5E' }} />
              </div>
              <h3 style={{ color: '#444C5E' }} className="mb-2">Free Delivery</h3>
              <p className="text-sm opacity-70">On orders over ₦100,000</p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#E4CF8B' }}
              >
                <Zap className="w-8 h-8" style={{ color: '#444C5E' }} />
              </div>
              <h3 style={{ color: '#444C5E' }} className="mb-2">Fast Service</h3>
              <p className="text-sm opacity-70">Quick processing and pickup options</p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#E4CF8B' }}
              >
                <TrendingUp className="w-8 h-8" style={{ color: '#444C5E' }} />
              </div>
              <h3 style={{ color: '#444C5E' }} className="mb-2">Best Prices</h3>
              <p className="text-sm opacity-70">Competitive pricing on all products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 style={{ color: '#444C5E' }}>Featured Products</h2>
              <p className="opacity-70">Handpicked selection of our best appliances</p>
            </div>
            <Link
              to="/shop"
              className="hidden md:inline-flex items-center gap-2 hover:opacity-80"
              style={{ color: '#E4CF8B' }}
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg"
              style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Products */}
      {upcomingProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 style={{ color: '#444C5E' }}>Coming Soon</h2>
                <p className="opacity-70">Be the first to get our upcoming products</p>
              </div>
              <Link
                to="/shop?filter=upcoming"
                className="hidden md:inline-flex items-center gap-2 hover:opacity-80"
                style={{ color: '#E4CF8B' }}
              >
                View All
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingProducts.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 style={{ color: '#444C5E' }} className="text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Refrigerators', img: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300' },
              { name: 'Air Conditioners', img: 'https://images.unsplash.com/photo-1631545806609-7ae8f4d0a5b0?w=300' },
              { name: 'Televisions', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300' },
              { name: 'Generators', img: 'https://images.unsplash.com/photo-1621905195320-f87c7fd1d8ce?w=300' },
              { name: 'Fans', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300' },
              { name: 'Solar Panels', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300' }
            ].map(category => (
              <Link
                key={category.name}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square relative">
                  <ImageWithFallback
                    src={category.img}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white p-3">{category.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16"
        style={{ backgroundColor: '#E4CF8B' }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 style={{ color: '#444C5E' }} className="mb-4">Need Help Choosing?</h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: '#444C5E' }}>
            Our expert team is ready to help you find the perfect appliances for your home or business. Visit our store or give us a call.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-white"
              style={{ backgroundColor: '#444C5E' }}
            >
              Contact Us
            </Link>
            <a
              href="tel:08037013940"
              className="px-8 py-4 rounded-lg border-2 hover:bg-white/10 transition-colors"
              style={{ borderColor: '#444C5E', color: '#444C5E' }}
            >
              Call: 0803 701 3940
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
