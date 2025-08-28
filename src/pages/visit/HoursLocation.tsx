import React from 'react';
import Hero from '../../components/Hero';
import { Clock, MapPin, Phone, Mail, Car } from 'lucide-react';

const HoursLocation: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        subtitle="VISIT US"
        title="Experience Award-Winning Wines in the Heart of the Finger Lakes"
        backgroundImage="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
        height="full"
      >
        <button className="btn-primary text-lg font-nunito font-semibold">
          PLAN YOUR VISIT
        </button>
      </Hero>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hours Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Clock className="h-16 w-16 text-gold mx-auto mb-4" />
            <h2 className="section-header mb-4">WINE SHOP + TASTING ROOM HOURS</h2>
            <h3 className="text-3xl font-brawler text-darker-brown mb-4">Open Seven Days a Week</h3>
          </div>
          
          <div className="bg-warm-beige rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <h3 className="font-brawler text-darker-brown">Monday - Thursday</h3>
                <p className="text-dark-brown font-nunito">11:00 a.m. - 6:00 p.m.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-brawler text-darker-brown">Friday & Saturday</h3>
                <p className="text-dark-brown font-nunito">10:00 a.m. - 6:00 p.m.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-brawler text-darker-brown">Sunday</h3>
                <p className="text-dark-brown font-nunito">12:00 p.m. - 5:00 p.m.</p>
              </div>
            </div>
            <p className="text-center text-sm text-dark-brown font-nunito mt-6">
              *All drink services end 15 minutes prior to closing.
            </p>
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <MapPin className="h-16 w-16 text-gold mx-auto mb-4" />
            <h2 className="section-header mb-4">LOCATION & ADDRESS</h2>
            <h3 className="text-3xl font-brawler text-darker-brown mb-4">Find Us in Fairport</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 border border-cream rounded-lg">
                <h3 className="font-brawler text-darker-brown mb-3">Address</h3>
                <p className="text-dark-brown font-nunito">
                  2287 Turk Hill Road<br />
                  Fairport, NY 14450
                </p>
              </div>

              <div className="bg-white p-6 border border-cream rounded-lg">
                <h3 className="font-brawler text-darker-brown mb-3">Phone</h3>
                <p className="text-dark-brown font-nunito">(585) 223-4210</p>
              </div>

              <div className="bg-white p-6 border border-cream rounded-lg">
                <h3 className="font-brawler text-darker-brown mb-3">Directions</h3>
                <p className="text-dark-brown font-nunito">
                  Casa Larga Vineyards is conveniently located just outside Rochester, NY, 
                  slightly north of the traditional Finger Lakes Wine Region. We're easily 
                  accessible from major highways and offer ample parking for all visitors.
                </p>
              </div>
            </div>

            <div className="bg-warm-beige rounded-lg h-96 flex items-center justify-center">
              <p className="text-dark-brown font-nunito">Interactive Google Map would be embedded here</p>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section>
          <div className="text-center mb-12">
            <Car className="h-16 w-16 text-gold mx-auto mb-4" />
            <h2 className="section-header mb-4">ADDITIONAL INFORMATION</h2>
            <h3 className="text-3xl font-brawler text-darker-brown mb-4">What to Know Before You Visit</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-warm-beige rounded-lg">
              <h3 className="font-brawler text-darker-brown mb-3">Pet Policy</h3>
              <p className="text-dark-brown font-nunito text-sm">
                Dogs that are not service animals are not allowed on the premises, including outside areas
              </p>
            </div>
            
            <div className="text-center p-6 bg-warm-beige rounded-lg">
              <h3 className="font-brawler text-darker-brown mb-3">Group Tastings</h3>
              <p className="text-dark-brown font-nunito text-sm">
                Group tastings and private tours available by appointment
              </p>
            </div>
            
            <div className="text-center p-6 bg-warm-beige rounded-lg">
              <h3 className="font-brawler text-darker-brown mb-3">Accessibility</h3>
              <p className="text-dark-brown font-nunito text-sm">
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