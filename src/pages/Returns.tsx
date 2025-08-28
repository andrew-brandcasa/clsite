import React from 'react';
import { RotateCcw, Shield, Clock, CreditCard } from 'lucide-react';

const Returns: React.FC = () => {
  return (
    <div>
      <div className="bg-[#2C5530] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Returns & Refunds</h1>
          <p className="text-xl md:text-2xl text-gray-200">Our Commitment to Your Satisfaction</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Guarantee */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-[#2C5530] mb-4">Our Guarantee</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Casa Larga stands behind the quality of our wines. If you're not completely satisfied 
              with your purchase, we'll make it right.
            </p>
          </div>
        </section>

        {/* Return Policy */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-[#2C5530] mb-8">Return Policy</h2>
          
          <div className="space-y-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#2C5530] mb-4">Defective or Damaged Products</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Timeframe:</strong> Report within 48 hours of delivery</li>
                <li>• <strong>Process:</strong> Contact customer service with photos of damage</li>
                <li>• <strong>Resolution:</strong> Full refund or replacement at no charge</li>
                <li>• <strong>Shipping:</strong> We cover return shipping costs</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#2C5530] mb-4">Quality Issues</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Timeframe:</strong> Within 30 days of purchase</li>
                <li>• <strong>Process:</strong> Contact customer service to discuss the issue</li>
                <li>• <strong>Resolution:</strong> Replacement bottle or store credit</li>
                <li>• <strong>Requirements:</strong> Bottle must be at least 75% full</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#2C5530] mb-4">Event Tickets</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Cancellation:</strong> Full refund if cancelled 48 hours before event</li>
                <li>• <strong>Weather:</strong> Refund or credit for weather-cancelled outdoor events</li>
                <li>• <strong>Transfer:</strong> Tickets may be transferred to another person</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#2C5530] mb-4">Custom Labels</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>No Returns:</strong> Custom labeled wines cannot be returned unless defective</li>
                <li>• <strong>Approval Process:</strong> All designs must be approved before production</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Refund Process */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <RotateCcw className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-2xl font-serif text-[#2C5530] mb-4">Refund Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Contact Us",
              "Provide Details", 
              "Authorization",
              "Ship Back",
              "Processing"
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#D4AF37] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 font-bold">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-[#2C5530] text-sm mb-2">{step}</h4>
                <p className="text-xs text-gray-600">
                  {index === 0 && "Call or email us"}
                  {index === 1 && "Order number and issue"}
                  {index === 2 && "Receive return number"}
                  {index === 3 && "Package securely"}
                  {index === 4 && "5-7 business days"}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Non-Returnable Items */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-[#2C5530] mb-8">Non-Returnable Items</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <ul className="space-y-2 text-gray-600">
              <li>• Gift cards</li>
              <li>• Custom labeled wines (unless defective)</li>
              <li>• Opened bottles (except for quality issues)</li>
              <li>• Items purchased more than 30 days ago</li>
            </ul>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <div className="bg-[#2C5530] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#D4AF37] mb-2">Returns Department</h3>
                <p>returns@casalarga.com</p>
                <p>(585) 223-4210 ext. 2</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#D4AF37] mb-2">Hours</h3>
                <p>Monday-Friday, 9 AM - 5 PM</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Returns;