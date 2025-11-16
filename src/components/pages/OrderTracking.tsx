import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';

export default function OrderTracking() {
  const [searchParams] = useSearchParams();
  const orderFromUrl = searchParams.get('order') || '';
  const [orderNumber, setOrderNumber] = useState(orderFromUrl);
  const [searchedOrder, setSearchedOrder] = useState(orderFromUrl);
  const [orderStatus, setOrderStatus] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchedOrder(orderNumber);
    
    // Simulate order status (in real app, this would fetch from backend)
    setOrderStatus({
      orderNumber: orderNumber,
      status: 'processing',
      date: new Date().toLocaleDateString(),
      customer: 'John Doe',
      items: 3,
      total: 250000,
      timeline: [
        { status: 'Order Placed', date: '2025-11-16 10:30 AM', completed: true },
        { status: 'Payment Confirmed', date: '2025-11-16 10:35 AM', completed: true },
        { status: 'Processing', date: '2025-11-16 11:00 AM', completed: true },
        { status: 'Ready for Delivery', date: 'Pending', completed: false },
        { status: 'Out for Delivery', date: 'Pending', completed: false },
        { status: 'Delivered', date: 'Pending', completed: false }
      ]
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 style={{ color: '#444C5E' }} className="mb-8">Track Your Order</h1>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-md p-6 mb-8">
          <label className="block mb-3" style={{ color: '#444C5E' }}>
            Enter Your Order Number
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="e.g., EM12345678"
              required
              className="flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none"
              style={{ borderColor: '#E4CF8B' }}
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg flex items-center gap-2"
              style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
            >
              <Search className="w-5 h-5" />
              Track
            </button>
          </div>
          <p className="text-sm opacity-60 mt-3">
            You can find your order number in the confirmation email we sent you.
          </p>
        </form>

        {/* Order Status Display */}
        {searchedOrder && orderStatus && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 style={{ color: '#444C5E' }} className="mb-2">
                  Order {orderStatus.orderNumber}
                </h2>
                <p className="text-sm opacity-60">Placed on {orderStatus.date}</p>
              </div>
              <div
                className="px-4 py-2 rounded-full text-white"
                style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
              >
                Processing
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="text-sm opacity-60 mb-1">Customer</div>
                <div style={{ color: '#444C5E' }}>{orderStatus.customer}</div>
              </div>
              <div>
                <div className="text-sm opacity-60 mb-1">Items</div>
                <div style={{ color: '#444C5E' }}>{orderStatus.items} products</div>
              </div>
              <div>
                <div className="text-sm opacity-60 mb-1">Total</div>
                <div style={{ color: '#E4CF8B' }}>₦{orderStatus.total.toLocaleString()}</div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <h3 style={{ color: '#444C5E' }} className="mb-4">Order Timeline</h3>
              {orderStatus.timeline.map((item: any, index: number) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.completed ? 'text-white' : 'border-2'
                      }`}
                      style={{
                        backgroundColor: item.completed ? '#E4CF8B' : 'transparent',
                        borderColor: item.completed ? '#E4CF8B' : '#ddd',
                        color: item.completed ? '#444C5E' : '#999'
                      }}
                    >
                      {item.completed ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : index === orderStatus.timeline.findIndex((t: any) => !t.completed) ? (
                        <Clock className="w-5 h-5" />
                      ) : (
                        <Package className="w-5 h-5" />
                      )}
                    </div>
                    {index < orderStatus.timeline.length - 1 && (
                      <div
                        className="w-0.5 h-12"
                        style={{ backgroundColor: item.completed ? '#E4CF8B' : '#ddd' }}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div style={{ color: '#444C5E' }} className="mb-1">
                      {item.status}
                    </div>
                    <div className="text-sm opacity-60">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Estimated Delivery */}
            <div className="mt-8 p-4 rounded-lg border-2" style={{ borderColor: '#E4CF8B' }}>
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6" style={{ color: '#E4CF8B' }} />
                <div>
                  <div style={{ color: '#444C5E' }} className="mb-1">
                    Estimated Delivery
                  </div>
                  <div className="text-sm opacity-60">November 18-19, 2025</div>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-6 pt-6 border-t text-center">
              <p className="opacity-70 mb-4">Need help with your order?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:08037013940"
                  className="px-6 py-3 rounded-lg"
                  style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
                >
                  Call: 0803 701 3940
                </a>
                <a
                  href="mailto:info@electromart.com"
                  className="px-6 py-3 rounded-lg border-2"
                  style={{ borderColor: '#E4CF8B', color: '#444C5E' }}
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        )}

        {searchedOrder && !orderStatus && (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-red-600" />
            </div>
            <h3 style={{ color: '#444C5E' }} className="mb-2">Order Not Found</h3>
            <p className="opacity-70 mb-4">
              We couldn't find an order with number {searchedOrder}. Please check the order number and try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
