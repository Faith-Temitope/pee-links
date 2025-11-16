import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#444C5E' }} className="text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-lg opacity-90">
              Have a question or need assistance? We're here to help! Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#E4CF8B' }}
              >
                <Phone className="w-8 h-8" style={{ color: '#444C5E' }} />
              </div>
              <h3 style={{ color: '#444C5E' }} className="mb-3">Call Us</h3>
              <a href="tel:08037013940" className="hover:opacity-80" style={{ color: '#E4CF8B' }}>
                0803 701 3940
              </a>
              <p className="text-sm opacity-60 mt-2">Mon-Sat: 8AM-7PM</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#E4CF8B' }}
              >
                <Mail className="w-8 h-8" style={{ color: '#444C5E' }} />
              </div>
              <h3 style={{ color: '#444C5E' }} className="mb-3">Email Us</h3>
              <a href="mailto:info@electromart.com" className="hover:opacity-80" style={{ color: '#E4CF8B' }}>
                info@electromart.com
              </a>
              <p className="text-sm opacity-60 mt-2">We'll respond within 24 hours</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#E4CF8B' }}
              >
                <MapPin className="w-8 h-8" style={{ color: '#444C5E' }} />
              </div>
              <h3 style={{ color: '#444C5E' }} className="mb-3">Visit Us</h3>
              <p className="text-sm">
                Lokoja-Ankpa Rd<br />
                Lokoja 260101, Kogi
              </p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 style={{ color: '#444C5E' }} className="mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: '#E4CF8B' }}
                  >
                    <CheckCircle className="w-8 h-8" style={{ color: '#444C5E' }} />
                  </div>
                  <h3 style={{ color: '#444C5E' }} className="mb-2">Message Sent!</h3>
                  <p className="opacity-70">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block mb-2" style={{ color: '#444C5E' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                      style={{ borderColor: '#E4CF8B' }}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2" style={{ color: '#444C5E' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                        style={{ borderColor: '#E4CF8B' }}
                      />
                    </div>
                    <div>
                      <label className="block mb-2" style={{ color: '#444C5E' }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                        style={{ borderColor: '#E4CF8B' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2" style={{ color: '#444C5E' }}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                      style={{ borderColor: '#E4CF8B' }}
                    >
                      <option value="">Select a subject</option>
                      <option value="product">Product Inquiry</option>
                      <option value="order">Order Status</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2" style={{ color: '#444C5E' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none resize-none"
                      style={{ borderColor: '#E4CF8B' }}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <div className="h-full min-h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 style={{ color: '#444C5E' }} className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 style={{ color: '#444C5E' }} className="mb-3">What are your delivery charges?</h3>
              <p className="opacity-70">
                We offer free delivery on all orders over ₦100,000. For orders below this amount, a flat delivery fee of ₦5,000 applies within Lokoja and surrounding areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 style={{ color: '#444C5E' }} className="mb-3">Do you offer warranties on your products?</h3>
              <p className="opacity-70">
                Yes! All our products come with manufacturer warranties. The warranty period varies by product and brand, typically ranging from 6 months to 2 years.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 style={{ color: '#444C5E' }} className="mb-3">Can I return a product if I'm not satisfied?</h3>
              <p className="opacity-70">
                We have a 7-day return policy for defective products. Items must be in their original condition with all packaging and accessories. Please contact us immediately if you receive a defective product.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 style={{ color: '#444C5E' }} className="mb-3">Do you offer installation services?</h3>
              <p className="opacity-70">
                Yes, we provide professional installation services for air conditioners, solar panels, and other appliances that require technical installation. Please inquire about installation when placing your order.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
