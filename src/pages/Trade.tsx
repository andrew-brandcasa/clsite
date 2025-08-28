import React from 'react';
import ContactForm from '../../components/ContactForm';
import { Handshake, TrendingUp, Award, DollarSign } from 'lucide-react';

const Trade: React.FC = () => {
  const wholesaleWines = [
    "Cab-Merlot (750mL)",
    "Chard-Riesling (750mL)", 
    "CLV Chardonnay (750mL)",
    "Dolci Bianco (750mL & 1.5L)",
    "Dolci Rosso (750mL & 1.5L)",
    "Dry Rosé (750mL)",
    "Lilac Hill (750mL & 1.5L)",
    "Meritage (750mL)",
    "Pallido (750mL & 1.5L)",
    "Petite Noir (750mL)",
    "Riesling - Dry (750mL)",
    "Riesling - Medium Dry (750mL)",
    "Vineyard Hill Chardonnay (750mL)",
    "Vineyard Hill Riesling (750mL & 1.5L)"
  ];

  return (
    <div>
      <div className="bg-[#2C5530] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Trade & Wholesale</h1>
          <p className="text-xl md:text-2xl text-gray-200">Partner with Casa Larga to Offer Award-Winning New York Wines</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Casa Larga wines are distributed throughout New York and select markets nationwide. We're actively 
            seeking retail partners, restaurants, and distributors who share our commitment to quality and excellence.
          </p>
        </div>

        {/* Why Partner with Casa Larga */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Why Partner with Casa Larga</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Award-Winning Wines",
                description: "Consistently recognized for quality and craftsmanship"
              },
              {
                icon: TrendingUp,
                title: "Established Brand", 
                description: "Nearly 50 years of winemaking excellence"
              },
              {
                icon: DollarSign,
                title: "Growing Market",
                description: "Expanding distribution in key markets"
              },
              {
                icon: Handshake,
                title: "Marketing Support",
                description: "Point-of-sale materials and promotional support"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <benefit.icon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-semibold text-[#2C5530] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Available Wines */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Available Wines for Wholesale</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wholesaleWines.map((wine, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="text-gray-700">{wine}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Application Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Submit wholesale inquiry form",
              "Provide business license and resale certificate",
              "Review terms and pricing", 
              "Complete partnership agreement",
              "Begin offering Casa Larga wines"
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#D4AF37] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 font-bold">
                  {index + 1}
                </div>
                <p className="text-sm text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact and Form */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-[#2C5530] mb-6">Become a Partner</h2>
              <p className="text-gray-600 mb-8">
                Whether you're a retailer looking to add our award-winning wines to your portfolio, or a 
                distributor seeking to represent our wines in new markets, we'd love to hear from you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="text-gray-600">Wholesale Inquiries: wholesale@casalarga.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="text-gray-600">Phone: (585) 223-4210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="text-gray-600">Brand Toolkit: Available upon request for approved partners</span>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-[#2C5530] mb-2">Current Distribution</h4>
                <p className="text-gray-600 text-sm">
                  Casa Larga wines are currently available in New York State and select markets. 
                  We're actively expanding our distribution network.
                </p>
              </div>
            </div>

            <ContactForm 
              title="Wholesale Inquiry"
              submitText="Submit Inquiry"
              fields={['name', 'email', 'phone', 'message']}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Trade;