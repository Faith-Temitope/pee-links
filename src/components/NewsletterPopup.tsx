import { useState } from 'react';
import { X, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NewsletterPopupProps {
  onClose: () => void;
}

export default function NewsletterPopup({ onClose }: NewsletterPopupProps) {
  const [email, setEmail] = useState('');
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreedToPrivacy) {
      // Store that user has seen the newsletter
      localStorage.setItem('hasSeenNewsletter', 'true');
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  const handleClose = () => {
    localStorage.setItem('hasSeenNewsletter', 'true');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden relative shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg"
          style={{ color: '#444C5E' }}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-64 md:h-auto">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500"
              alt="Newsletter"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="p-8">
            {!submitted ? (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#E4CF8B' }}
                  >
                    <Mail className="w-6 h-6" style={{ color: '#444C5E' }} />
                  </div>
                  <div>
                    <h2 style={{ color: '#444C5E' }}>Subscribe to Our Newsletter</h2>
                    <p className="text-sm opacity-70">Stay updated with our latest offers!</p>
                  </div>
                </div>

                <p className="mb-6 text-sm">
                  Get exclusive deals, new product announcements, and helpful tips delivered to your inbox.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                      style={{ borderColor: '#E4CF8B' }}
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={agreedToPrivacy}
                      onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                      required
                      className="mt-1 w-4 h-4 rounded"
                      style={{ accentColor: '#E4CF8B' }}
                    />
                    <label htmlFor="privacy" className="text-sm">
                      I agree to the privacy policy and cookie policy. I consent to receive newsletters and promotional emails.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!email || !agreedToPrivacy}
                    className="w-full py-3 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
                  >
                    Subscribe Now
                  </button>
                </form>

                <p className="text-xs text-center mt-4 opacity-60">
                  You can unsubscribe at any time. We respect your privacy.
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#E4CF8B' }}
                >
                  <span className="text-3xl">✓</span>
                </div>
                <h2 style={{ color: '#444C5E' }} className="mb-2">Thank You!</h2>
                <p className="text-sm">You've successfully subscribed to our newsletter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
