import React from 'react';
import { Truck, Package, Clock, Shield } from 'lucide-react';

const Shipping: React.FC = () => {
  return (
    <div>
      <div className="bg-[#2C5530] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Shipping Information</h1>
          <p className="text-xl md:text-2xl text-gray-200">Getting Your Casa Larga Wines Delivered Safely</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Shipping Zones */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Truck className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-[#2C5530] mb-4">Shipping Zones</h2>
            <p className="text-gray-600">
              We ship Casa Larga wines to 40 states across the United States. Due to state regulations, 
              we cannot ship to all states. Please check our shipping map for current availability.
            </p>
          </div>
        </section>

        {/* Shipping Rates */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-[#2C5530] mb-8">Shipping Rates</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#2C5530] mb-4">Standard Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Standard Shipping:</strong> $20 flat rate for most destinations</li>
                <li>• <strong>Local Delivery:</strong> $25 within 20 miles of the winery</li>
                <li>• <strong>Extended Local Delivery:</strong> $35+ for 20-50 mile radius</li>
                <li>• <strong>Expedited Shipping:</strong> Available upon request for additional fee</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#2C5530] mb-4">Delivery Times</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Ground Shipping:</strong> 3-7 business days</li>
                <li>• <strong>Expedited Shipping:</strong> 2-3 business days</li>
                <li>• <strong>Local Delivery:</strong> Scheduled delivery within 48 hours</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Packaging */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Package className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-2xl font-serif text-[#2C5530] mb-4">Packaging</h2>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <p className="text-gray-600 leading-relaxed text-center mb-6">
              All wines are carefully packaged in protective shipping materials to ensure safe delivery. 
              We use temperature-controlled shipping when necessary to protect wine quality.
            </p>
          </div>
        </section>

        {/* Delivery Requirements */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-[#2C5530] mb-8">Delivery Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-[#2C5530]">Important Notes:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Adult Signature Required:</strong> Someone 21 or older must be present to sign for delivery</li>
                <li>• <strong>Business Addresses:</strong> Recommended for reliable delivery</li>
                <li>• <strong>Delivery Attempts:</strong> Carrier will attempt delivery 3 times before returning to depot</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-[#2C5530]">Shipping Restrictions:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Temperature Sensitive:</strong> We may delay shipments during extreme weather</li>
                <li>• <strong>Holiday Delays:</strong> Expect delays during peak holiday seasons</li>
                <li>• <strong>State Regulations:</strong> Some states have specific shipping requirements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Order Processing */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Clock className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-2xl font-serif text-[#2C5530] mb-4">Order Processing</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-[#2C5530] mb-2">Processing Time</h3>
                <p className="text-gray-600">1-2 business days</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#2C5530] mb-2">Order Cutoff</h3>
                <p className="text-gray-600">Orders placed by 2 PM EST ship same day</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#2C5530] mb-2">Tracking</h3>
                <p className="text-gray-600">Provided via email once order ships</p>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance and International */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <Shield className="h-8 w-8 text-[#D4AF37] mb-4" />
              <h3 className="font-semibold text-[#2C5530] mb-3">Shipping Insurance</h3>
              <p className="text-gray-600 text-sm">
                All shipments are insured against loss or damage. Report any issues within 48 hours of delivery.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#2C5530] mb-3">International Shipping</h3>
              <p className="text-gray-600 text-sm">
                Currently, we only ship within the United States.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 bg-[#2C5530] text-white rounded-lg p-6">
            <h3 className="text-lg font-serif mb-2">Questions?</h3>
            <p>Contact our shipping department at (585) 223-4210 ext. 2 or shipping@casalarga.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shipping;