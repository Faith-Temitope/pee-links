import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/products';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 style={{ color: '#444C5E' }} className="mb-4">Blog & News</h1>
          <p className="opacity-70">
            Stay updated with the latest news, tips, and product announcements from ElectroMart
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex items-center gap-4 text-sm opacity-60 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <h2 style={{ color: '#444C5E' }} className="mb-3 hover:opacity-80">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="opacity-70 mb-4">{post.excerpt}</p>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 hover:opacity-80"
                    style={{ color: '#E4CF8B' }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div 
          className="mt-12 p-8 rounded-lg text-center"
          style={{ backgroundColor: '#444C5E' }}
        >
          <h2 className="text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white opacity-90 mb-6">
            Get the latest updates, tips, and exclusive offers delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg"
              style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
