import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#444C5E' }} className="text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="mb-4">ElectroMart</h3>
            <p className="text-sm opacity-90 mb-4">
              Your trusted source for quality electronics, appliances, and home solutions in Lokoja, Kogi State.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:opacity-80">Home</Link></li>
              <li><Link to="/shop" className="hover:opacity-80">Shop</Link></li>
              <li><Link to="/shop?filter=upcoming" className="hover:opacity-80">Upcoming Products</Link></li>
              <li><Link to="/blog" className="hover:opacity-80">Blog</Link></li>
              <li><Link to="/about" className="hover:opacity-80">About Us</Link></li>
              <li><Link to="/track-order" className="hover:opacity-80">Track Order</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4">Popular Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop?category=Refrigerators" className="hover:opacity-80">Refrigerators</Link></li>
              <li><Link to="/shop?category=Air Conditioners" className="hover:opacity-80">Air Conditioners</Link></li>
              <li><Link to="/shop?category=Generators" className="hover:opacity-80">Generators</Link></li>
              <li><Link to="/shop?category=Televisions" className="hover:opacity-80">Televisions</Link></li>
              <li><Link to="/shop?category=Solar Panels" className="hover:opacity-80">Solar Products</Link></li>
              <li><Link to="/shop?category=Fans" className="hover:opacity-80">Fans</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Lokoja-Ankpa Rd, Lokoja 260101, Kogi State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:08037013940" className="hover:opacity-80">0803 701 3940</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@electromart.com" className="hover:opacity-80">info@electromart.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-sm text-center">
          <p className="opacity-90">
            © 2025 ElectroMart. All rights reserved. | Serving Lokoja and surrounding areas with quality electronics and appliances.
          </p>
        </div>
      </div>
    </footer>
  );
}
