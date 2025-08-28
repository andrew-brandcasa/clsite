import React from 'react';
import { Eye, Keyboard, Monitor, Users } from 'lucide-react';

const Accessibility: React.FC = () => {
  return (
    <div>
      <div className="bg-[#2C5530] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Accessibility Statement</h1>
          <p className="text-xl md:text-2xl text-gray-200">Our Commitment to Digital Accessibility</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Commitment */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Users className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
          </div>
          <h2 className="text-2xl font-serif text-[#2C5530] mb-4">Our Commitment</h2>
          <p className="text-gray-600 leading-relaxed">
            Casa Larga Vineyards is committed to ensuring digital accessibility for people with disabilities. 
            We continually improve the user experience for everyone and apply relevant accessibility standards.
          </p>
        </section>

        {/* Accessibility Standards */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif text-[#2C5530] mb-6">Accessibility Standards</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-600">
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards 
              to ensure our website is accessible to people with disabilities.
            </p>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif text-[#2C5530] mb-8">Accessibility Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Keyboard className="h-6 w-6 text-[#D4AF37] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#2C5530] mb-2">Keyboard Navigation</h3>
                  <p className="text-gray-600 text-sm">Full site navigation using keyboard only</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Eye className="h-6 w-6 text-[#D4AF37] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#2C5530] mb-2">Screen Reader Compatibility</h3>
                  <p className="text-gray-600 text-sm">Compatible with popular screen reading software</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Monitor className="h-6 w-6 text-[#D4AF37] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#2C5530] mb-2">Color Contrast</h3>
                  <p className="text-gray-600 text-sm">Sufficient contrast ratios for text and backgrounds</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-[#2C5530]">Additional Features:</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Alt text for all images</li>
                <li>• Resizable text up to 200%</li>
                <li>• Clear navigation structure</li>
                <li>• Descriptive link text</li>
                <li>• Form labels and instructions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Feedback and Assistance */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif text-[#2C5530] mb-6">Feedback and Assistance</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <p className="text-gray-600 mb-6">
              We welcome feedback on the accessibility of our website. If you encounter any accessibility 
              barriers or need assistance accessing content, please contact us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-[#2C5530] mb-2">Email</h3>
                <p className="text-gray-600">accessibility@casalarga.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#2C5530] mb-2">Phone</h3>
                <p className="text-gray-600">(585) 223-4210</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#2C5530] mb-2">Response Time</h3>
                <p className="text-gray-600">Within 2 business days</p>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Access */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif text-[#2C5530] mb-6">Alternative Access</h2>
          <p className="text-gray-600 mb-4">
            If you cannot access certain content or features, we can provide information in alternative formats:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-gray-600">
              <li>• Large print materials</li>
              <li>• Audio descriptions</li>
            </ul>
            <ul className="space-y-2 text-gray-600">
              <li>• Personal assistance for website navigation</li>
              <li>• Phone-based ordering and customer service</li>
            </ul>
          </div>
        </section>

        {/* Continuous Improvement */}
        <section>
          <div className="bg-[#2C5530] text-white rounded-lg p-8">
            <h2 className="text-2xl font-serif mb-4 text-center">Continuous Improvement</h2>
            <p className="text-gray-200 text-center">
              Accessibility is an ongoing effort. We regularly review and update our website to improve 
              accessibility and welcome suggestions for enhancement.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accessibility;