import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../../data/products';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 style={{ color: '#444C5E' }} className="mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  const otherPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mb-6 hover:opacity-80"
          style={{ color: '#444C5E' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="flex items-center gap-4 text-sm opacity-60 mb-4">
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

            <h1 style={{ color: '#444C5E' }} className="mb-6">{post.title}</h1>

            <div className="prose max-w-none">
              <p className="mb-4 opacity-80">{post.excerpt}</p>
              
              <p className="mb-4">
                At ElectroMart, we're committed to helping our customers make the most of their appliances while saving on energy costs. Here are some practical tips that can help you reduce your electricity consumption without sacrificing comfort or convenience.
              </p>

              <h2 style={{ color: '#444C5E' }} className="mt-8 mb-4">1. Choose Energy-Efficient Appliances</h2>
              <p className="mb-4">
                When shopping for new appliances, look for energy-efficient models. Modern appliances from brands like LG, Samsung, and ScanFrost come with inverter technology that significantly reduces power consumption. While they may cost a bit more upfront, the long-term savings on your electricity bills make them worthwhile investments.
              </p>

              <h2 style={{ color: '#444C5E' }} className="mt-8 mb-4">2. Proper Maintenance is Key</h2>
              <p className="mb-4">
                Regular maintenance can improve the efficiency of your appliances. Clean your air conditioner filters monthly, defrost your freezer regularly, and keep refrigerator coils dust-free. These simple tasks can improve performance and reduce energy consumption by up to 15%.
              </p>

              <h2 style={{ color: '#444C5E' }} className="mt-8 mb-4">3. Smart Usage Habits</h2>
              <p className="mb-4">
                Small changes in how you use your appliances can lead to big savings. Set your air conditioner to 25°C instead of 18°C, use your washing machine with full loads, and avoid opening your refrigerator door unnecessarily. These habits can significantly reduce your monthly electricity costs.
              </p>

              <h2 style={{ color: '#444C5E' }} className="mt-8 mb-4">4. Consider Solar Solutions</h2>
              <p className="mb-4">
                With the rising cost of electricity, many of our customers are exploring solar power options. We offer a range of solar panels, inverters, and batteries that can help you achieve energy independence. Our team can help you design a solar system that meets your specific needs and budget.
              </p>

              <h2 style={{ color: '#444C5E' }} className="mt-8 mb-4">Visit Our Store</h2>
              <p className="mb-4">
                For more personalized advice on choosing the right appliances and maximizing energy efficiency, visit our store at Lokoja-Ankpa Road or give us a call at 0803 701 3940. Our expert team is always ready to help!
              </p>
            </div>

            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}>
                  Energy Saving
                </span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}>
                  Tips & Advice
                </span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}>
                  Home Appliances
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {otherPosts.length > 0 && (
          <div>
            <h2 style={{ color: '#444C5E' }} className="mb-6">More Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherPosts.map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <ImageWithFallback
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="text-xs opacity-60 mb-2">
                      {new Date(relatedPost.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <h3 style={{ color: '#444C5E' }} className="line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
