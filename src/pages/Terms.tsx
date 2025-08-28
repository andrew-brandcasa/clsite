import React from 'react';
import { FileText, Shield, CreditCard, Truck } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div>
      <div className="bg-[#2C5530] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Terms of Service</h1>
          <p className="text-xl md:text-2xl text-gray-200">Terms and Conditions for Using Our Website and Services</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Effective Date */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500">Effective Date: January 1, 2025</p>
        </div>

        {/* Acceptance of Terms */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <FileText className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
          </div>
          <h2 className="text-2xl font-serif text-[#2C5530] mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using the Casa Larga Vineyards website and services, you agree to be bound 
            by these Terms of Service.
          </p>
        </section>

        {/* Use of Website */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif text-[#2C5530] mb-6">Use of Website</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-2 text-gray-600">
              <li>• You must be 21 or older to purchase alcoholic beverages</li>
              <li>• You agree to provide accurate information</li>
              <li>• You will not use the site for illegal purposes</li>
              <li>• You will not interfere with site operations</li>
            </ul>
          </div>
        </section>

        {/* Orders and Payment */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <CreditCard className="h-8 w-8 text-[#D4AF37] mr-3" />
            <h2 className="text-2xl font-serif text-[#2C5530]">Orders and Payment</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <ul className="space-y-2 text-gray-600">
              <li>• All orders subject to acceptance and availability</li>
              <li>• Payment must be received before shipment</li>
              <li>• We reserve the right to cancel orders for any reason</li>
              <li>• Pricing errors may result in order cancellation</li>
            </ul>
          </div>
        </section>

        {/* Shipping and Delivery */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Truck className="h-8 w-8 text-[#D4AF37] mr-3" />
            <h2 className="text-2xl font-serif text-[#2C5530]">Shipping and Delivery</h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-2 text-gray-600">
              <li>• Delivery to adults 21+ only</li>
              <li>• Risk of loss transfers upon delivery</li>
              <li>• Shipping restrictions apply based on state laws</li>
              <li>• Delivery delays may occur due to weather or other factors</li>
            </ul>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-[#D4AF37] mr-3" />
            <h2 className="text-2xl font-serif text-[#2C5530]">Intellectual Property</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <ul className="space-y-2 text-gray-600">
              <li>• All website content is owned by Casa Larga Vineyards</li>
              <li>• You may not reproduce content without permission</li>
              <li>• Trademarks and logos are protected property</li>
            </ul>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif text-[#2C5530] mb-4">Governing Law</h2>
          <p className="text-gray-600">
            These terms are governed by the laws of New York State.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <div className="bg-[#2C5530] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif mb-4">Questions About These Terms?</h2>
            <div className="space-y-2">
              <p>legal@casalarga.com</p>
              <p>(585) 223-4210</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;