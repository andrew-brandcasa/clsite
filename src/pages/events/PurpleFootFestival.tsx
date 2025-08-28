import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Music, Users, Camera, Grape } from 'lucide-react';

const PurpleFootFestival: React.FC = () => {
  const [ticketType, setTicketType] = useState('adult');
  const [quantity, setQuantity] = useState(1);

  const ticketPrices = {
    adult: 20,
    child: 0,
    vip: 45
  };

  return (
    <div>
      <div className="bg-[#2C5530] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Purple Foot Festival</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">A Harvest Celebration Like No Other</p>
          <button className="bg-[#D4AF37] text-white px-8 py-3 rounded-md hover:bg-[#c29c2a] transition-colors font-medium">
            Get Your Tickets
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Event Details */}
        <section className="mb-16">
          <div className="bg-[#2C5530] text-white rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-serif mb-6 text-center">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Calendar className="h-8 w-8 text-[#D4AF37] mb-2" />
                <span className="font-semibold">Sunday, September 14, 2025</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-8 w-8 text-[#D4AF37] mb-2" />
                <span className="font-semibold">11:00 AM - 5:00 PM</span>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-[#D4AF37] mb-2" />
                <span className="font-semibold">Casa Larga Vineyards</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Join us for our annual harvest celebration featuring traditional grape stomping, live music, 
              horse-drawn vineyard rides, and family-friendly activities. This beloved tradition brings 
              together wine lovers of all ages for a day of fun, food, and fantastic wine.
            </p>
          </div>
        </section>

        {/* Activities */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Festival Activities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Grape, title: "Grape Stomping", description: "Traditional competitions for all ages" },
              { icon: Music, title: "Live Music", description: "Performances throughout the day" }, 
              { icon: Users, title: "Vineyard Tours", description: "Horse-drawn tours of our vineyard" },
              { icon: Camera, title: "Family Activities", description: "Games and entertainment for kids" }
            ].map((activity, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <activity.icon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-semibold text-[#2C5530] mb-2">{activity.title}</h3>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-serif text-[#2C5530] mb-4">Complete Activity List</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <ul className="space-y-2 text-gray-600">
                <li>• Traditional grape stomping competitions</li>
                <li>• Seated wine tastings</li>
                <li>• Live music performances</li>
                <li>• Horse-drawn vineyard tours</li>
              </ul>
              <ul className="space-y-2 text-gray-600">
                <li>• Artisan food vendors</li>
                <li>• Children's activities and games</li>
                <li>• Harvest demonstrations</li>
                <li>• Photography opportunities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tickets */}
        <section className="mb-16">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-serif text-[#2C5530] mb-8 text-center">Purchase Tickets</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-[#2C5530] mb-4">Ticket Options</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                    <div>
                      <span className="font-medium text-[#2C5530]">Adults</span>
                      <p className="text-sm text-gray-600">Includes wine tasting</p>
                    </div>
                    <span className="font-bold text-[#2C5530]">$20</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                    <div>
                      <span className="font-medium text-[#2C5530]">Children (12 and under)</span>
                      <p className="text-sm text-gray-600">All activities included</p>
                    </div>
                    <span className="font-bold text-green-600">FREE</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                    <div>
                      <span className="font-medium text-[#2C5530]">VIP Experience</span>
                      <p className="text-sm text-gray-600">Reserved seating & premium tastings</p>
                    </div>
                    <span className="font-bold text-[#2C5530]">$45</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#2C5530] mb-4">Purchase</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ticket Type</label>
                    <select 
                      value={ticketType}
                      onChange={(e) => setTicketType(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                    >
                      <option value="adult">Adult - $20</option>
                      <option value="child">Child - FREE</option>
                      <option value="vip">VIP Experience - $45</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                    <select 
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                    >
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="font-bold text-[#2C5530] text-lg">
                        ${(ticketPrices[ticketType as keyof typeof ticketPrices] * quantity).toFixed(2)}
                      </span>
                    </div>
                    <button className="w-full bg-[#D4AF37] text-white py-3 rounded hover:bg-[#c29c2a] transition-colors font-medium">
                      Purchase Tickets
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Bring */}
        <section>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <h3 className="text-xl font-serif text-[#2C5530] mb-4 text-center">What to Bring</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-2 text-gray-600">
                <li>• Comfortable shoes (grape stomping can get messy!)</li>
                <li>• Lawn chairs or blankets</li>
              </ul>
              <ul className="space-y-2 text-gray-600">
                <li>• Camera for memories</li>
                <li>• Appetite for fun!</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PurpleFootFestival;