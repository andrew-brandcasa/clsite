import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Ticket } from 'lucide-react';

const EventDetail: React.FC = () => {
  const { eventName } = useParams<{ eventName: string }>();
  const [ticketQuantity, setTicketQuantity] = useState(1);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Event Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-[#2C5530] mb-4">Patio Party Series</h1>
        <div className="flex flex-wrap justify-center items-center space-x-6 text-gray-600 mb-6">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-[#D4AF37]" />
            <span>Monthly through summer</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-[#D4AF37]" />
            <span>6:00 PM - 9:00 PM</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-[#D4AF37]" />
            <span>Casa Larga Vineyards</span>
          </div>
        </div>
      </div>

      {/* Event Image */}
      <div className="mb-12">
        <div className="h-96 bg-gradient-to-r from-green-200 to-yellow-200 rounded-lg"></div>
      </div>

      {/* Event Description */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif text-[#2C5530] mb-6">Event Description</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Join us for our popular Patio Party Series featuring live music, delicious food trucks, and 
          our award-winning wines on our beautiful outdoor patio. Each month brings a new musical act 
          and exciting food options in a relaxed, family-friendly atmosphere.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Bring your lawn chairs or blankets and enjoy an evening under the stars with great music, 
          fantastic wine, and the scenic beauty of our vineyard as your backdrop.
        </p>
      </section>

      {/* Schedule */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif text-[#2C5530] mb-6">Event Schedule</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="space-y-3">
            <div className="flex justify-between py-2">
              <span className="font-medium text-[#2C5530]">6:00 PM</span>
              <span className="text-gray-600">Patio opens, wine service begins</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium text-[#2C5530]">6:30 PM</span>
              <span className="text-gray-600">Food trucks open</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium text-[#2C5530]">7:00 PM</span>
              <span className="text-gray-600">Live music begins</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium text-[#2C5530]">9:00 PM</span>
              <span className="text-gray-600">Event concludes</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif text-[#2C5530] mb-6">What's Included</h2>
        <ul className="space-y-2 text-gray-600">
          <li>• Access to outdoor patio and grounds</li>
          <li>• Live musical entertainment</li>
          <li>• Wine available for purchase</li>
          <li>• Food truck vendors on-site</li>
          <li>• Family-friendly atmosphere</li>
        </ul>
      </section>

      {/* Ticket Purchase */}
      <section className="mb-12">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-serif text-[#2C5530] mb-6 flex items-center">
            <Ticket className="h-6 w-6 mr-3 text-[#D4AF37]" />
            Ticket Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#2C5530]">General Admission</span>
                  <span className="font-bold text-[#2C5530]">$15 per person</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#2C5530]">Group Rates (10+)</span>
                  <span className="text-gray-600">Available upon request</span>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Tickets
                </label>
                <select 
                  id="quantity"
                  value={ticketQuantity}
                  onChange={(e) => setTicketQuantity(parseInt(e.target.value))}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              <button className="w-full bg-[#D4AF37] text-white py-3 mt-6 rounded hover:bg-[#c29c2a] transition-colors font-medium">
                Purchase Tickets - ${15 * ticketQuantity}
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-[#2C5530]">What to Bring</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Lawn chairs or blankets</li>
                <li>• Camera for memories</li>
                <li>• Appetite for great music!</li>
              </ul>

              <h3 className="font-semibold text-[#2C5530] pt-4">Weather Policy</h3>
              <p className="text-gray-600 text-sm">
                Events may be cancelled due to severe weather. Full refunds or rain dates will be offered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-serif text-[#2C5530] mb-4">Questions?</h3>
          <p className="text-gray-600 mb-4">Contact us for more information about this event.</p>
          <div className="space-x-4">
            <span className="text-[#2C5530] font-medium">(585) 223-4210</span>
            <span className="text-gray-400">|</span>
            <span className="text-[#2C5530] font-medium">events@casalarga.com</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;