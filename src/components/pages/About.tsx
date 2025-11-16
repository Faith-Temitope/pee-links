import { MapPin, Phone, Mail, Clock, Award, Users, Package } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#444C5E' }} className="text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About ElectroMart</h1>
            <p className="text-lg opacity-90">
              Your trusted partner for quality electronics and home appliances in Lokoja, Kogi State. 
              We've been serving our community with excellence, bringing you the best brands at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ color: '#444C5E' }} className="mb-6">Our Story</h2>
              <p className="mb-4 opacity-70">
                ElectroMart was founded with a simple mission: to provide the people of Lokoja and surrounding areas 
                with access to quality electronics and appliances from trusted brands at affordable prices.
              </p>
              <p className="mb-4 opacity-70">
                Over the years, we've grown from a small shop to become one of the most trusted names in home 
                appliances and electronics in Kogi State. Our success is built on our commitment to quality products, 
                excellent customer service, and competitive pricing.
              </p>
              <p className="opacity-70">
                Today, we carry a wide range of products from leading manufacturers including LG, Samsung, Sony, 
                ScanFrost, TCL, and many more. Whether you're furnishing a new home or upgrading your existing 
                appliances, we have everything you need.
              </p>
            </div>
            <div className="relative h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
                alt="Our store"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 style={{ color: '#444C5E' }} className="text-center mb-12">Why Choose ElectroMart?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#E4CF8B' }}
              >
                <Award className="w-6 h-6" style={{ color: '#444C5E' }} />
              </div>
              <h3 style={{ color: '#444C5E' }} className="mb-3">Quality Guaranteed</h3>
              <p className="text-sm opacity-70">
                We only stock authentic products from authorized manufacturers with full warranties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#E4CF8B' }}
              >
                <Users className="w-6 h-6" style={{ color: '#444C5E' }} />
              </div>
              <h3 style={{ color: '#444C5E' }} className="mb-3">Expert Staff</h3>
              <p className="text-sm opacity-70">
                Our knowledgeable team is always ready to help you find the perfect products for your needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#E4CF8B' }}
              >
                <Package className="w-6 h-6" style={{ color: '#444C5E' }} />
              </div>
              <h3 style={{ color: '#444C5E' }} className="mb-3">Wide Selection</h3>
              <p className="text-sm opacity-70">
                From refrigerators to solar panels, we have everything you need for your home or business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 style={{ color: '#444C5E' }} className="text-center mb-12">Visit Our Store</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#E4CF8B' }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: '#444C5E' }} />
                  </div>
                  <div>
                    <h3 style={{ color: '#444C5E' }} className="mb-2">Address</h3>
                    <p className="opacity-70">
                      Lokoja-Ankpa Rd, Lokoja 260101<br />
                      Kogi State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#E4CF8B' }}
                  >
                    <Phone className="w-6 h-6" style={{ color: '#444C5E' }} />
                  </div>
                  <div>
                    <h3 style={{ color: '#444C5E' }} className="mb-2">Phone</h3>
                    <a href="tel:08037013940" className="opacity-70 hover:opacity-100">
                      0803 701 3940
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#E4CF8B' }}
                  >
                    <Mail className="w-6 h-6" style={{ color: '#444C5E' }} />
                  </div>
                  <div>
                    <h3 style={{ color: '#444C5E' }} className="mb-2">Email</h3>
                    <a href="mailto:info@electromart.com" className="opacity-70 hover:opacity-100">
                      info@electromart.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#E4CF8B' }}
                  >
                    <Clock className="w-6 h-6" style={{ color: '#444C5E' }} />
                  </div>
                  <div>
                    <h3 style={{ color: '#444C5E' }} className="mb-2">Business Hours</h3>
                    <p className="opacity-70">
                      Monday - Saturday: 8:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126246.50349726937!2d6.7333!3d7.8000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104780e47c9b6ccf%3A0x359033c385f9487e!2sLokoja%2C%20Kogi!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#E4CF8B' }} className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 style={{ color: '#444C5E' }} className="mb-4">Ready to Shop?</h2>
          <p style={{ color: '#444C5E' }} className="mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of electronics and appliances online or visit our store for personalized service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/shop"
              className="px-8 py-4 rounded-lg text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#444C5E' }}
            >
              Browse Products
            </a>
            <a
              href="tel:08037013940"
              className="px-8 py-4 rounded-lg border-2 hover:bg-white/10 transition-colors"
              style={{ borderColor: '#444C5E', color: '#444C5E' }}
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
