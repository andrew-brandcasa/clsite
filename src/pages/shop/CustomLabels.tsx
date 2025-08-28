import React from 'react';
import ContactForm from '../../components/ContactForm';
import { Palette, Wine, Package } from 'lucide-react';

const CustomLabels: React.FC = () => {
  return (
    <div>
      <div className="bg-[#2C5530] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Custom Wine Labels</h1>
          <p className="text-xl md:text-2xl text-gray-200">Personalize Your Wine for Any Occasion</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Make your special event unforgettable with personalized Casa Larga wines. Whether it's a wedding, 
            corporate event, or milestone celebration, our custom labeling service creates unique keepsakes 
            that your guests will treasure.
          </p>
        </div>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#D4AF37] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Wine className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif text-[#2C5530] mb-4">Step 1: Choose Your Wine</h3>
              <p className="text-gray-600">
                Select from our full range of wines, from elegant Chardonnays to bold reds and sweet ice wines.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#D4AF37] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif text-[#2C5530] mb-4">Step 2: Design Your Label</h3>
              <p className="text-gray-600">
                Work with our design team to create a custom label featuring your text, images, or logos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#D4AF37] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif text-[#2C5530] mb-4">Step 3: Place Your Order</h3>
              <p className="text-gray-600">
                Minimum order of 12 bottles. Allow 2-3 weeks for production and delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Occasions */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Popular Occasions</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              "Weddings and anniversaries",
              "Corporate gifts and events", 
              "Milestone birthdays",
              "Holiday celebrations",
              "Fundraising events"
            ].map((occasion, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">{occasion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing and Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#2C5530] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-serif mb-6">Pricing</h3>
            <p className="text-lg mb-4">Custom labeling starts at $5 per bottle in addition to wine cost.</p>
            <p className="text-gray-200 mb-6">Design consultation included.</p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-[#D4AF37]">Contact Information:</h4>
              <p>Phone: (585) 223-4210</p>
              <p>Email: custom@casalarga.com</p>
            </div>
          </div>

          <ContactForm 
            title="Custom Label Inquiry"
            submitText="Request Quote"
            fields={['name', 'email', 'phone', 'message']}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomLabels;