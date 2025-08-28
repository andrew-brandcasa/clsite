import React from 'react';
import ContactForm from '../../components/ContactForm';
import { Heart, Building, PartyPopper, Users, Award, MapPin } from 'lucide-react';

const PrivateEvents: React.FC = () => {
  return (
    <div>
      <div className="bg-[#2C5530] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Host Your Private Event at Casa Larga</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">Where Memories Are Made and Celebrations Come to Life</p>
          <button className="bg-[#D4AF37] text-white px-8 py-3 rounded-md hover:bg-[#c29c2a] transition-colors font-medium">
            Plan Your Event
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Casa Larga provides the perfect backdrop for your most important celebrations. With our stunning 
            vineyard views, elegant facilities, and award-winning wines, we create unforgettable experiences 
            for weddings, corporate events, and special occasions.
          </p>
        </div>

        {/* Why Choose Casa Larga */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Why Choose Casa Larga</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Breathtaking Setting",
                description: "Panoramic vineyard views and beautifully landscaped grounds"
              },
              {
                icon: Users,
                title: "Flexible Spaces", 
                description: "Indoor and outdoor venues to accommodate 50-300 guests"
              },
              {
                icon: Award,
                title: "Award-Winning Wines",
                description: "Exclusive access to our complete wine collection"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <feature.icon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-lg font-serif text-[#2C5530] mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Event Types */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Event Types</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <Heart className="h-16 w-16 text-pink-400" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-[#2C5530] mb-4">Weddings</h3>
                <p className="text-gray-600 mb-4">
                  Create your dream wedding surrounded by rolling vineyards and elegant charm. 
                  Our wedding packages include ceremony and reception options with customizable details.
                </p>
                <p className="text-sm text-gray-500 mb-4">Capacity: 50-250 guests</p>
                <button className="w-full bg-[#D4AF37] text-white py-2 rounded hover:bg-[#c29c2a] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Building className="h-16 w-16 text-blue-400" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-[#2C5530] mb-4">Corporate Events</h3>
                <p className="text-gray-600 mb-4">
                  Impress clients and reward employees with sophisticated corporate gatherings. 
                  Perfect for meetings, retreats, product launches, and team building.
                </p>
                <p className="text-sm text-gray-500 mb-4">Capacity: 25-200 guests</p>
                <button className="w-full bg-[#D4AF37] text-white py-2 rounded hover:bg-[#c29c2a] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <PartyPopper className="h-16 w-16 text-purple-400" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-[#2C5530] mb-4">Proms & Special Occasions</h3>
                <p className="text-gray-600 mb-4">
                  Celebrate life's milestones in style. From proms to anniversaries, graduations 
                  to family reunions, we make every occasion special.
                </p>
                <p className="text-sm text-gray-500 mb-4">Capacity: 50-300 guests</p>
                <button className="w-full bg-[#D4AF37] text-white py-2 rounded hover:bg-[#c29c2a] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">What's Included</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-[#2C5530]">Standard Package Includes:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Venue rental for ceremony and reception</li>
                <li>• Tables, chairs, and basic linens</li>
                <li>• Dedicated event coordinator</li>
                <li>• Complimentary wine tasting for planning</li>
                <li>• Ample parking</li>
                <li>• Bridal suite access (weddings)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif text-[#2C5530]">Additional Services:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom catering menus</li>
                <li>• Professional bar service</li>
                <li>• Floral arrangements</li>
                <li>• Photography coordination</li>
                <li>• Transportation assistance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Planning Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Planning Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Initial Consultation",
              "Site Visit", 
              "Proposal",
              "Planning",
              "Celebration"
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#D4AF37] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 font-bold">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-[#2C5530] text-sm">{step}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-[#2C5530] mb-6">Start Planning Your Event</h2>
              <p className="text-gray-600 mb-8">
                Ready to create an unforgettable celebration? Contact our events team to begin planning 
                your perfect day at Casa Larga.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="text-gray-600">Phone: (585) 223-4210 ext. 3</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="text-gray-600">Email: events@casalarga.com</span>
                </div>
              </div>
            </div>

            <ContactForm 
              title="Event Inquiry"
              submitText="Send Inquiry"
              fields={['name', 'email', 'phone', 'message']}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivateEvents;