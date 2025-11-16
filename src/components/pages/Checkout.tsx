import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, CreditCard, MapPin, CheckCircle } from 'lucide-react';

interface CheckoutProps {
  cart: any[];
  clearCart: () => void;
}

export default function Checkout({ cart, clearCart }: CheckoutProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState('full');
  const [paymentType, setPaymentType] = useState('bank-transfer');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Kogi',
    notes: ''
  });

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = deliveryMethod === 'delivery' && subtotal < 100000 ? 5000 : 0;
  const total = subtotal + deliveryFee;
  const amountToPay = paymentMethod === 'partial' ? total * 0.5 : total;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate order number
    const orderNum = `EM${Date.now().toString().slice(-8)}`;
    setOrderNumber(orderNum);
    setOrderPlaced(true);
    clearCart();
  };

  if (cart.length === 0 && !orderPlaced) {
    navigate('/shop');
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: '#E4CF8B' }}
          >
            <CheckCircle className="w-12 h-12" style={{ color: '#444C5E' }} />
          </div>
          <h1 style={{ color: '#444C5E' }} className="mb-4">Order Placed Successfully!</h1>
          <p className="opacity-70 mb-6">
            Your order has been received and is being processed.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="mb-4">
              <div className="text-sm opacity-60 mb-1">Order Number</div>
              <div className="text-2xl" style={{ color: '#E4CF8B' }}>{orderNumber}</div>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm opacity-60 mb-1">Amount {paymentMethod === 'partial' ? 'Paid (50%)' : 'Paid'}</div>
              <div className="text-xl" style={{ color: '#444C5E' }}>₦{amountToPay.toLocaleString()}</div>
              {paymentMethod === 'partial' && (
                <div className="text-sm opacity-60 mt-2">
                  Remaining: ₦{(total - amountToPay).toLocaleString()} (Pay on delivery)
                </div>
              )}
            </div>
          </div>

          <p className="mb-8 opacity-70">
            We've sent a confirmation email to <strong>{formData.email}</strong>.
            {deliveryMethod === 'delivery' ? (
              <> Your order will be delivered to the address provided.</>
            ) : (
              <> You can pick up your order at our Lokoja store.</>
            )}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate(`/track-order?order=${orderNumber}`)}
              className="px-8 py-4 rounded-lg"
              style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
            >
              Track Order
            </button>
            <button
              onClick={() => navigate('/shop')}
              className="px-8 py-4 rounded-lg border-2"
              style={{ borderColor: '#E4CF8B', color: '#444C5E' }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 style={{ color: '#444C5E' }} className="mb-8">Checkout</h1>

      {/* Progress Steps */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= s ? 'text-white' : 'border-2'
                }`}
                style={{
                  backgroundColor: step >= s ? '#E4CF8B' : 'transparent',
                  borderColor: step >= s ? '#E4CF8B' : '#ddd',
                  color: step >= s ? '#444C5E' : '#999'
                }}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className="flex-1 h-1 mx-2"
                  style={{ backgroundColor: step > s ? '#E4CF8B' : '#ddd' }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span>Delivery</span>
          <span>Payment</span>
          <span>Review</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handlePlaceOrder} className="space-y-6">
            {/* Step 1: Delivery Information */}
            {step === 1 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 style={{ color: '#444C5E' }} className="mb-6">Delivery Information</h2>

                {/* Delivery Method */}
                <div className="mb-6">
                  <label className="block mb-3" style={{ color: '#444C5E' }}>Delivery Method</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('delivery')}
                      className={`p-4 rounded-lg border-2 text-left ${
                        deliveryMethod === 'delivery' ? 'border-[#E4CF8B]' : 'border-gray-200'
                      }`}
                    >
                      <MapPin className="w-6 h-6 mb-2" style={{ color: '#E4CF8B' }} />
                      <div style={{ color: '#444C5E' }} className="mb-1">Home Delivery</div>
                      <div className="text-sm opacity-60">Delivered to your address</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('pickup')}
                      className={`p-4 rounded-lg border-2 text-left ${
                        deliveryMethod === 'pickup' ? 'border-[#E4CF8B]' : 'border-gray-200'
                      }`}
                    >
                      <Package className="w-6 h-6 mb-2" style={{ color: '#E4CF8B' }} />
                      <div style={{ color: '#444C5E' }} className="mb-1">Store Pickup</div>
                      <div className="text-sm opacity-60">Collect at our Lokoja store</div>
                    </button>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2" style={{ color: '#444C5E' }}>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                      style={{ borderColor: '#E4CF8B' }}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2" style={{ color: '#444C5E' }}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                        style={{ borderColor: '#E4CF8B' }}
                      />
                    </div>
                    <div>
                      <label className="block mb-2" style={{ color: '#444C5E' }}>Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                        style={{ borderColor: '#E4CF8B' }}
                      />
                    </div>
                  </div>

                  {deliveryMethod === 'delivery' && (
                    <>
                      <div>
                        <label className="block mb-2" style={{ color: '#444C5E' }}>Delivery Address *</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                          style={{ borderColor: '#E4CF8B' }}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2" style={{ color: '#444C5E' }}>City *</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                            style={{ borderColor: '#E4CF8B' }}
                          />
                        </div>
                        <div>
                          <label className="block mb-2" style={{ color: '#444C5E' }}>State *</label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                            style={{ borderColor: '#E4CF8B' }}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block mb-2" style={{ color: '#444C5E' }}>Order Notes (Optional)</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                      style={{ borderColor: '#E4CF8B' }}
                      placeholder="Special instructions for your order..."
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full mt-6 py-4 rounded-lg"
                  style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 style={{ color: '#444C5E' }} className="mb-6">Payment Options</h2>

                {/* Payment Amount */}
                <div className="mb-6">
                  <label className="block mb-3" style={{ color: '#444C5E' }}>Payment Amount</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('full')}
                      className={`p-4 rounded-lg border-2 text-left ${
                        paymentMethod === 'full' ? 'border-[#E4CF8B]' : 'border-gray-200'
                      }`}
                    >
                      <CreditCard className="w-6 h-6 mb-2" style={{ color: '#E4CF8B' }} />
                      <div style={{ color: '#444C5E' }} className="mb-1">Full Payment</div>
                      <div className="text-sm opacity-60">Pay ₦{total.toLocaleString()} now</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('partial')}
                      className={`p-4 rounded-lg border-2 text-left ${
                        paymentMethod === 'partial' ? 'border-[#E4CF8B]' : 'border-gray-200'
                      }`}
                    >
                      <CreditCard className="w-6 h-6 mb-2" style={{ color: '#E4CF8B' }} />
                      <div style={{ color: '#444C5E' }} className="mb-1">50% Deposit</div>
                      <div className="text-sm opacity-60">
                        Pay ₦{(total * 0.5).toLocaleString()} now, rest on delivery
                      </div>
                    </button>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <label className="block mb-3" style={{ color: '#444C5E' }}>Payment Method</label>
                  <div className="space-y-3">
                    {['bank-transfer', 'card', 'cash'].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setPaymentType(method)}
                        className={`w-full p-4 rounded-lg border-2 text-left ${
                          paymentType === method ? 'border-[#E4CF8B]' : 'border-gray-200'
                        }`}
                      >
                        <div style={{ color: '#444C5E' }} className="mb-1">
                          {method === 'bank-transfer' && 'Bank Transfer'}
                          {method === 'card' && 'Debit/Credit Card'}
                          {method === 'cash' && 'Cash on Delivery/Pickup'}
                        </div>
                        <div className="text-sm opacity-60">
                          {method === 'bank-transfer' && 'Transfer to our bank account'}
                          {method === 'card' && 'Pay securely with your card'}
                          {method === 'cash' && paymentMethod === 'partial' ? 'Pay 50% on delivery/pickup' : 'Pay when you receive'}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 rounded-lg border-2"
                    style={{ borderColor: '#E4CF8B', color: '#444C5E' }}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 py-4 rounded-lg"
                    style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 style={{ color: '#444C5E' }} className="mb-6">Review Your Order</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm opacity-60 mb-1">Delivery Method</div>
                    <div style={{ color: '#444C5E' }}>
                      {deliveryMethod === 'delivery' ? 'Home Delivery' : 'Store Pickup'}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm opacity-60 mb-1">Contact</div>
                    <div style={{ color: '#444C5E' }}>
                      {formData.fullName}<br />
                      {formData.email}<br />
                      {formData.phone}
                    </div>
                  </div>
                  {deliveryMethod === 'delivery' && (
                    <div>
                      <div className="text-sm opacity-60 mb-1">Delivery Address</div>
                      <div style={{ color: '#444C5E' }}>
                        {formData.address}<br />
                        {formData.city}, {formData.state}
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="text-sm opacity-60 mb-1">Payment</div>
                    <div style={{ color: '#444C5E' }}>
                      {paymentMethod === 'full' ? 'Full Payment' : '50% Deposit'} - {' '}
                      {paymentType === 'bank-transfer' && 'Bank Transfer'}
                      {paymentType === 'card' && 'Card Payment'}
                      {paymentType === 'cash' && 'Cash'}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="space-y-2">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.name} x {item.quantity}</span>
                        <span>₦{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 py-4 rounded-lg border-2"
                    style={{ borderColor: '#E4CF8B', color: '#444C5E' }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 rounded-lg"
                    style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 style={{ color: '#444C5E' }} className="mb-4">Order Summary</h3>
            <div className="space-y-3 mb-4">
              {cart.map(item => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded"></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm line-clamp-2 mb-1">{item.name}</div>
                    <div className="text-xs opacity-60">Qty: {item.quantity}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="opacity-70">Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-70">Delivery</span>
                <span>{deliveryFee === 0 ? 'FREE' : `₦${deliveryFee.toLocaleString()}`}</span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span style={{ color: '#444C5E' }}>Total</span>
                <span style={{ color: '#E4CF8B' }}>₦{total.toLocaleString()}</span>
              </div>
              {paymentMethod === 'partial' && (
                <div className="flex justify-between text-sm pt-2 border-t">
                  <span style={{ color: '#444C5E' }}>Amount to Pay Now</span>
                  <span style={{ color: '#E4CF8B' }}>₦{amountToPay.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
