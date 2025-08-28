import React from 'react';
import { Clock, MapPin, Phone, Mail, Car } from 'lucide-react';

const HoursLocation: React.FC = () => {
  return (
    <div>
      <div className="bg-[#2C5530] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Visit Casa Larga Vineyards</h1>
          <p className="text-xl md:text-2xl text-gray-200">Experience Award-Winning Wines in the Heart of the Finger Lakes</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hours Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Clock className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-[#2C5530] mb-4">Wine Shop + Tasting Room Hours</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <h3 className="font-semibold text-[#2C5530]">Monday - Thursday</h3>
                <p className="text-gray-600">11:00 a.m. - 6:00 p.m.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#2C5530]">Friday & Saturday</h3>
                <p className="text-gray-600">10:00 a.m. - 6:00 p.m.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#2C5530]">Sunday</h3>
                <p className="text-gray-600">12:00 p.m. - 5:00 p.m.</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              *All drink services end 15 minutes prior to closing.
            </p>
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <MapPin className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-[#2C5530] mb-4">Location & Address</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-[#2C5530] mb-3">Address</h3>
                <p className="text-gray-600">
                  2287 Turk Hill Road<br />
                  Fairport, NY 14450
                </p>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-[#2C5530] mb-3">Phone</h3>
                <p className="text-gray-600">(585) 223-4210</p>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-[#2C5530] mb-3">Directions</h3>
                <p className="text-gray-600">
                  Casa Larga Vineyards is conveniently located just outside Rochester, NY, 
                  slightly north of the traditional Finger Lakes Wine Region. We're easily 
                  accessible from major highways and offer ample parking for all visitors.
                </p>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Interactive Google Map would be embedded here</p>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section>
          <div className="text-center mb-12">
            <Car className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-[#2C5530] mb-4">Additional Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-[#2C5530] mb-3">Pet Policy</h3>
              <p className="text-gray-600 text-sm">
                Dogs that are not service animals are not allowed on the premises, including outside areas
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-[#2C5530] mb-3">Group Tastings</h3>
              <p className="text-gray-600 text-sm">
                Group tastings and private tours available by appointment
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-[#2C5530] mb-3">Accessibility</h3>
              <p className="text-gray-600 text-sm">
                Wheelchair accessible facilities available
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HoursLocation;