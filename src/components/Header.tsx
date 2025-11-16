import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Phone, MapPin } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
}

export default function Header({ cartItemsCount }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div style={{ backgroundColor: '#444C5E' }} className="text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-4 flex-wrap">
              <a href="tel:08037013940" className="flex items-center gap-2 hover:opacity-80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">0803 701 3940</span>
              </a>
              <a href="#location" className="flex items-center gap-2 hover:opacity-80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm hidden sm:inline">Lokoja-Ankpa Rd, Lokoja</span>
              </a>
            </div>
            <div className="text-sm">
              <span>Free delivery on orders over ₦100,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div style={{ backgroundColor: '#E4CF8B' }} className="w-12 h-12 rounded-lg flex items-center justify-center">
              <span className="text-xl" style={{ color: '#444C5E' }}>⚡</span>
            </div>
            <div>
              <div style={{ color: '#444C5E' }}>ElectroMart</div>
              <div className="text-xs" style={{ color: '#E4CF8B' }}>Quality Appliances</div>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full px-4 py-2 border-2 rounded-lg pr-12 focus:outline-none"
                style={{ borderColor: '#E4CF8B' }}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded"
                style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" style={{ color: '#444C5E' }} />
              {cartItemsCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white"
                  style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
                >
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              style={{ color: '#444C5E' }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <form onSubmit={handleSearch} className="md:hidden mt-4">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full px-4 py-2 border-2 rounded-lg pr-12 focus:outline-none"
              style={{ borderColor: '#E4CF8B' }}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded"
              style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6 mt-4">
          <Link to="/" className="hover:opacity-80" style={{ color: '#444C5E' }}>Home</Link>
          <Link to="/shop" className="hover:opacity-80" style={{ color: '#444C5E' }}>Shop</Link>
          <Link to="/shop?filter=upcoming" className="hover:opacity-80" style={{ color: '#444C5E' }}>Upcoming Products</Link>
          <Link to="/blog" className="hover:opacity-80" style={{ color: '#444C5E' }}>Blog</Link>
          <Link to="/about" className="hover:opacity-80" style={{ color: '#444C5E' }}>About Us</Link>
          <Link to="/contact" className="hover:opacity-80" style={{ color: '#444C5E' }}>Contact</Link>
          <Link to="/track-order" className="hover:opacity-80" style={{ color: '#444C5E' }}>Track Order</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-80" style={{ color: '#444C5E' }}>Home</Link>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-80" style={{ color: '#444C5E' }}>Shop</Link>
            <Link to="/shop?filter=upcoming" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-80" style={{ color: '#444C5E' }}>Upcoming Products</Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-80" style={{ color: '#444C5E' }}>Blog</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-80" style={{ color: '#444C5E' }}>About Us</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-80" style={{ color: '#444C5E' }}>Contact</Link>
            <Link to="/track-order" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-80" style={{ color: '#444C5E' }}>Track Order</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
