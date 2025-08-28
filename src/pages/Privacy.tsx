import React from 'react';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div>
      <div className="bg-[#2C5530] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Privacy Policy</h1>
          <p className="text-xl md:text-2xl text-gray-200">How We Protect Your Personal Information</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Effective Date */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500">Effective Date: January 1, 2025</p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
          </div>
          <p className="text-gray-600 leading-relaxed">
            Casa Larga Vineyards ("we," "our," or "us") respects your privacy and is committed to protecting 
            your personal information. This Privacy Policy explains how we collect, use, and safeguard your 
            information when you visit our website or interact with our services.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif text-[#2C5530] mb-6">Information We Collect</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-[#2C5530] mb-4">Personal Information</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Name, email address, phone number</li>
                <li>• Billing and shipping addresses</li>
                <li>• Payment information (processed securely through third-party providers)</li>
                <li>• Date of birth (for age verification)</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-[#2C5530] mb-4">Automatically Collected Information</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• IP address and browser information</li>
                <li>• Website usage data and cookies</li>
                <li>• Device information and location data</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Eye className="h-8 w-8 text-[#D4AF37] mr-3" />
            <h2 className="text-2xl font-serif text-[#2C5530]">How We Use Your Information</h2>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <ul className="space-y-2 text-gray-600">
              <li>• Process orders and deliver products</li>
              <li>• Communicate about your orders and account</li>
              <li>• Send marketing communications (with your consent)</li>
              <li>• Improve our website and services</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </div>
        </section>

        {/* Information Sharing */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif text-[#2C5530] mb-6">Information Sharing</h2>
          <p className="text-gray-600 mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share information with:
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-2 text-gray-600">
              <li>• Service providers who assist with our operations</li>
              <li>• Payment processors for transaction processing</li>
              <li>• Shipping companies for order delivery</li>
              <li>• Legal authorities when required by law</li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <UserCheck className="h-8 w-8 text-[#D4AF37] mr-3" />
            <h2 className="text-2xl font-serif text-[#2C5530]">Your Rights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-gray-600">
              <li>• Access your personal information</li>
              <li>• Correct inaccurate information</li>
              <li>• Request deletion of your information</li>
            </ul>
            <ul className="space-y-2 text-gray-600">
              <li>• Opt-out of marketing communications</li>
              <li>• Withdraw consent where applicable</li>
            </ul>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Lock className="h-8 w-8 text-[#D4AF37] mr-3" />
            <h2 className="text-2xl font-serif text-[#2C5530]">Data Security</h2>
          </div>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <div className="bg-[#2C5530] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif mb-4">Questions About This Policy?</h2>
            <p className="text-gray-200 mb-6">
              Contact us if you have any questions about this Privacy Policy.
            </p>
            <div className="space-y-2">
              <p>privacy@casalarga.com</p>
              <p>(585) 223-4210</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;