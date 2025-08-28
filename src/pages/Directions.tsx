import React from 'react';
import Hero from '../components/Hero';
import { MapPin, Navigation, Clock, Car, Phone } from 'lucide-react';

const Directions: React.FC = () => {
  const directions = [
    {
      from: "Rochester",
      time: "15 minutes",
      steps: [
        "Take I-490 East to Exit 28 (Fairport/Route 31)",
        "Turn right onto Route 31 East",
        "Continue for 2.5 miles",
        "Turn left onto Turk Hill Road",
        "Casa Larga will be on your right after 1 mile"
      ]
    },
    {
      from: "Syracuse", 
      time: "1 hour",
      steps: [
        "Take I-90 West to Exit 43 (Manchester/Route 21)",
        "Follow Route 21 North for 8 miles",
        "Turn left onto Route 31 West",
        "Continue for 3 miles",
        "Turn right onto Turk Hill Road",
        "Casa Larga will be on your right after 1 mile"
      ]
    },
    {
      from: "Buffalo",
      time: "1.5 hours", 
      steps: [
        "Take I-90 East to I-490 East",
        "Follow I-490 East to Exit 28 (Fairport/Route 31)",
        "Turn right onto Route 31 East",
        "Continue for 2.5 miles",
        "Turn left onto Turk Hill Road",
        "Casa Larga will be on your right after 1 mile"
      ]
    },
    {
      from: "Albany",
      time: "3 hours",
      steps: [
        "Take I-90 West to Exit 43 (Manchester/Route 21)",
        "Follow Route 21 North for 8 miles", 
        "Turn left onto Route 31 West",
        "Continue for 3 miles",
        "Turn right onto Turk Hill Road",
        "Casa Larga will be on your right after 1 mile"
      ]
    }
  ];

  return (
    <div>
      <Hero 
        title="Directions to Casa Larga"
        subtitle="Find Your Way to Wine Country"
        backgroundImage="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
        height="medium"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Address Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <MapPin className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-[#2C5530] mb-6">Winery Address</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-[#2C5530] mb-3">Casa Larga Vineyards</h3>
                <p className="text-gray-600">
                  2287 Turk Hill Road<br />
                  Fairport, NY 14450
                </p>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-[#2C5530] mb-3">GPS Coordinates</h3>
                <p className="text-gray-600">
                  Latitude: 43.0731° N<br />
                  Longitude: 77.4481° W
                </p>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-[#2C5530] mb-3">Contact</h3>
                <p className="text-gray-600">
                  Phone: (585) 223-4210<br />
                  Email: info@casalarga.com
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Interactive Google Map would be embedded here</p>
                <p className="text-sm text-gray-400 mt-2">Showing Casa Larga Vineyards location</p>
              </div>
            </div>
          </div>
        </section>

        {/* Driving Directions */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Driving Directions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directions.map((direction, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
                <div className="flex items-center mb-6">
                  <Navigation className="h-6 w-6 text-[#D4AF37] mr-3" />
                  <h3 className="text-xl font-serif text-[#2C5530]">From {direction.from}</h3>
                  <span className="ml-auto text-sm text-gray-500 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {direction.time}
                  </span>
                </div>
                
                <ol className="space-y-2">
                  {direction.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="bg-[#D4AF37] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                        {stepIndex + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* Transportation Options */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-[#2C5530] text-center mb-12">Transportation Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Car className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-[#2C5530] mb-3">Private Vehicle</h3>
              <p className="text-gray-600 text-sm">
                Recommended - Ample free parking available on-site
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-[#2C5530] mb-3">Ride Share</h3>
              <p className="text-gray-600 text-sm">
                Uber and Lyft services available to our location
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-[#2C5530] mb-3">Group Transportation</h3>
              <p className="text-gray-600 text-sm">
                Bus and charter vehicle parking available for large groups
              </p>
            </div>
          </div>
        </section>

        {/* Parking Information */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-[#2C5530] text-center mb-12">Parking Information</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-[#2C5530] mb-2">Free Parking</h4>
                <p className="text-sm text-gray-600">Ample complimentary parking available</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#2C5530] mb-2">Accessibility</h4>
                <p className="text-sm text-gray-600">Handicapped accessible parking spaces near entrance</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#2C5530] mb-2">Group Parking</h4>
                <p className="text-sm text-gray-600">Large vehicle parking available for tour groups</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#2C5530] mb-2">Event Overflow</h4>
                <p className="text-sm text-gray-600">Additional parking in adjacent field during events</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Landmarks */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-[#2C5530] text-center mb-8">Nearby Landmarks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-[#2C5530] mb-2">Fairport Village</h4>
              <p className="text-sm text-gray-600">3 miles away</p>
            </div>
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-[#2C5530] mb-2">Erie Canal</h4>
              <p className="text-sm text-gray-600">2 miles away</p>
            </div>
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-[#2C5530] mb-2">Eastview Mall</h4>
              <p className="text-sm text-gray-600">8 miles away</p>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-[#2C5530] text-center mb-8">What to Expect Upon Arrival</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <ul className="space-y-3 text-gray-600 max-w-2xl mx-auto">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Look for our Casa Larga sign at the entrance</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Follow the driveway to the main parking area</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>The tasting room entrance is clearly marked</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Our staff will greet you and assist with any questions</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Need Help Section */}
        <section>
          <div className="bg-[#2C5530] text-white rounded-lg p-8 text-center">
            <Phone className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-2xl font-serif mb-4">Need Directions?</h3>
            <p className="text-gray-200 mb-6">
              Lost or need additional assistance? Call us and we'll help guide you to the winery.
            </p>
            <div className="space-y-2">
              <p className="text-lg font-semibold">(585) 223-4210</p>
              <p className="text-sm text-gray-300">Available during business hours</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Directions;