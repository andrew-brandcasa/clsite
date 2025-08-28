import React from 'react';
import Hero from '../../components/Hero';
import { Wine, Users, Clock } from 'lucide-react';

const TastingsTours: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        subtitle="WINE TASTING & TOURS"
        title="Discover the Art of Winemaking at Casa Larga"
        backgroundImage="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
        height="full"
      >
        <button className="btn-primary text-lg font-nunito font-semibold">
          BOOK YOUR EXPERIENCE
        </button>
      </Hero>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="section-header mb-4">WINE EXPERIENCES</h2>
          <h3 className="text-4xl md:text-5xl font-brawler text-darker-brown mb-8">Taste the Tradition</h3>
          <p className="text-lg text-dark-brown font-nunito leading-relaxed max-w-3xl mx-auto">
            Since 1974, Casa Larga has been crafting exceptional wines that capture the essence of our unique terroir. 
            Join us for an intimate tasting experience or take a behind-the-scenes tour of our winemaking facilities.
          </p>
        </div>

        {/* Tasting Experiences */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Wine className="h-16 w-16 text-gold mx-auto mb-4" />
            <h2 className="section-header mb-4">TASTING EXPERIENCES</h2>
            <h3 className="text-4xl font-brawler text-darker-brown mb-4">Choose Your Adventure</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-cream">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-brawler text-darker-brown mb-3">Classic Wine Tasting</h3>
                <p className="text-dark-brown font-nunito mb-4 text-sm">
                  Sample five of our signature wines including our award-winning Chardonnay and Meritage. 
                  Learn about our winemaking process and the unique characteristics of each varietal.
                </p>
                <div className="flex items-center justify-between text-sm text-dark-brown mb-4">
                  <span><Clock className="inline h-4 w-4 mr-1" /> 45 minutes</span>
                  <span className="font-brawler text-darker-brown">$15 per person</span>
                </div>
                <button className="w-full btn-primary font-nunito">
                  Book Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-cream">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-brawler text-darker-brown mb-3">Premium Reserve Tasting</h3>
                <p className="text-dark-brown font-nunito mb-4 text-sm">
                  Experience our finest wines including limited-release reserves and our celebrated ice wines. 
                  Perfect for wine enthusiasts seeking our most exceptional offerings.
                </p>
                <div className="flex items-center justify-between text-sm text-dark-brown mb-4">
                  <span><Clock className="inline h-4 w-4 mr-1" /> 60 minutes</span>
                  <span className="font-brawler text-darker-brown">$25 per person</span>
                </div>
                <button className="w-full btn-primary font-nunito">
                  Book Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-cream">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-brawler text-darker-brown mb-3">Food & Wine Pairing</h3>
                <p className="text-dark-brown font-nunito mb-4 text-sm">
                  Discover how our wines complement artisanal cheeses and local delicacies. 
                  A guided tasting that enhances both the wine and food experience.
                </p>
                <div className="flex items-center justify-between text-sm text-dark-brown mb-4">
                  <span><Clock className="inline h-4 w-4 mr-1" /> 75 minutes</span>
                  <span className="font-brawler text-darker-brown">$35 per person</span>
                </div>
                <button className="w-full btn-primary font-nunito">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tour Options */}
        <section>
          <div className="text-center mb-12">
            <Users className="h-16 w-16 text-gold mx-auto mb-4" />
            <h2 className="section-header mb-4">TOUR OPTIONS</h2>
            <h3 className="text-4xl font-brawler text-darker-brown mb-4">Behind the Scenes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-cream">
              <div className="h-64 bg-gradient-to-br from-green-200 to-green-300"></div>
              <div className="p-8">
                <h3 className="text-2xl font-brawler text-darker-brown mb-4">Vineyard & Winery Tour</h3>
                <p className="text-dark-brown font-nunito mb-6">
                  Walk through our vineyards and production facilities while learning about our sustainable 
                  farming practices and traditional winemaking techniques.
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-dark-brown font-nunito">
                    <Clock className="inline h-4 w-4 mr-1" /> 90 minutes
                  </span>
                  <span className="font-brawler text-darker-brown">$20 per person (includes tasting)</span>
                </div>
                <button className="w-full btn-primary font-nunito font-medium">
                  Book Your Tour
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-cream">
              <div className="h-64 bg-gradient-to-br from-purple-200 to-purple-300"></div>
              <div className="p-8">
                <h3 className="text-2xl font-brawler text-darker-brown mb-4">Private Group Tours</h3>
                <p className="text-dark-brown font-nunito mb-6">
                  Customized experiences for groups of 8 or more. Perfect for corporate outings, 
                  celebrations, or wine club events.
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-dark-brown font-nunito">
                    <Users className="inline h-4 w-4 mr-1" /> Customizable
                  </span>
                  <span className="font-brawler text-darker-brown">Starting at $30 per person</span>
                </div>
                <button className="w-full btn-primary font-nunito font-medium">
                  Book Your Tour
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Information */}
        <section className="mt-16">
          <div className="bg-warm-beige text-dark-brown rounded-lg p-8 text-center">
            <h3 className="text-2xl font-brawler mb-4">Booking Information</h3>
            <p className="text-lg font-nunito">
              Reservations recommended, especially on weekends. Walk-ins welcome based on availability.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TastingsTours;