import React from 'react';
import { MapPin, Search, Store, UtensilsCrossed } from 'lucide-react';

const WhereToBuy: React.FC = () => {
  return (
    <div>
      <div className="bg-[#2C5530] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Find Casa Larga Wines</h1>
          <p className="text-xl md:text-2xl text-gray-200">Discover Our Wines at Fine Retailers Near You</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Casa Larga wines are available at select retailers throughout New York and beyond. 
            Use our store locator to find the nearest location carrying our award-winning wines.
          </p>
        </div>

        {/* Store Locator */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Search className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-[#2C5530] mb-4">Store Locator</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-[#2C5530] mb-4">Find Retailers Near You</h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Enter ZIP code or city"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                  />
                  <button className="w-full bg-[#D4AF37] text-white py-2 rounded hover:bg-[#c29c2a] transition-colors">
                    Search Locations
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-[#2C5530] mb-4">Online Retailers</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Casa Larga Online Shop (casalarga.com)</li>
                  <li>• Authorized online partners</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Interactive store locator map would be embedded here</p>
            </div>
          </div>
        </section>

        {/* Restaurant Partners */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <UtensilsCrossed className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-[#2C5530] mb-4">Restaurant Partners</h2>
            <p className="text-lg text-gray-600">Enjoy Casa Larga wines at these fine dining establishments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-[#2C5530] mb-2">Restaurant Name {i + 1}</h3>
                <p className="text-gray-600 text-sm mb-2">123 Main Street, Rochester, NY</p>
                <p className="text-gray-500 text-xs">Fine dining restaurant specializing in local cuisine</p>
              </div>
            ))}
          </div>
        </section>

        {/* Become a Retailer */}
        <section>
          <div className="bg-[#2C5530] text-white rounded-lg p-8 text-center">
            <Store className="h-16 w-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl font-serif mb-4">Become a Retailer</h2>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
              Interested in carrying Casa Larga wines at your establishment? Contact our wholesale team 
              to learn about partnership opportunities.
            </p>
            <div className="space-y-2">
              <p>wholesale@casalarga.com</p>
              <p>(585) 223-4210</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhereToBuy;