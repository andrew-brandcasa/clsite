import React from 'react';
import Hero from '../components/Hero';
import { Heart, ShoppingCart, Calendar, MapPin, Award, Users, Wine, Grape, Music } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredWines = [
    {
      name: "PALLIDO",
      type: "White Wine",
      price: "$99.00",
      image: "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg"
    },
    {
      name: "PALLIDO",
      type: "Red Wine",
      price: "$85.00",
      image: "https://images.pexels.com/photos/50691/bottle-wine-red-wine-wine-bottle-50691.jpeg"
    },
    {
      name: "PALLIDO",
      type: "Dessert Wine",
      price: "$45.00",
      image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg"
    },
    {
      name: "PALLIDO",
      type: "White Wine",
      price: "$65.00",
      image: "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg"
    }
  ];

  return (
    <div>
      {/* Hero Section - Aerial Vineyard View */}
      <Hero 
        subtitle="ITALIAN HERITAGE"
        title="From Graft to Glass"
        backgroundImage="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
        height="full"
      >
        <button className="btn-primary text-lg font-nunito font-semibold">
          PLAN YOUR VISIT
        </button>
      </Hero>

      {/* Welcome Section */}
      <section className="section-padding section-bg-welcome">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="red-dot mx-auto mb-6"></div>
            <h2 className="section-header mb-4">WELCOME TO CASA LARGA</h2>
            <p className="text-lg text-text-primary max-w-3xl mx-auto font-nunito leading-relaxed">
              Located in Fairport, NY. Celebrating 50 years of winemaking from 
              graft to glass. Find solace in our premium wines, unwind in our 
              tasting room and discover the art of winemaking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="numbered-feature">01</div>
              <h4 className="section-header mb-4">OUR WINES</h4>
              <p className="text-text-primary font-nunito">
                Our wines have earned numerous medals and accolades from prestigious competitions, 
                cementing our reputation for excellence.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="numbered-feature">02</div>
              <h4 className="section-header mb-4">OUR HISTORY</h4>
              <p className="text-text-primary font-nunito">
                Founded by Andrew Colaruotolo in 1974, Casa Larga remains a family-owned winery 
                dedicated to Italian winemaking traditions.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="numbered-feature">03</div>
              <h4 className="section-header mb-4">OUR VENUE</h4>
              <p className="text-text-primary font-nunito">
                Our 35-acre vineyard's unique microclimate and well-drained soils create ideal 
                conditions for producing premium wine grapes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Catalog Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-header mb-4">OUR WINES</h2>
            <h3 className="text-4xl md:text-5xl font-brawler text-text-primary mb-8">Shop Our Catalog</h3>
            <p className="text-lg text-text-primary max-w-2xl mx-auto font-nunito mb-8">
              We ship to 40 states! Shop our selection of award-winning wines through our 
              online Store. Reds, whites, ice wines, reserve wines, limited wines, 
              gift sets and more. Free shipping on orders over $100.
            </p>
            <button className="btn-primary text-lg font-nunito font-semibold">
              SHOP OUR CATALOG
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "CHARDONNAY-CLV", type: "White Wine", price: "$24.00", image: "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg" },
              { name: "MERITAGE", type: "Red Wine", price: "$32.00", image: "https://images.pexels.com/photos/50691/bottle-wine-red-wine-wine-bottle-50691.jpeg" },
              { name: "ICE WINE", type: "Dessert Wine", price: "$45.00", image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg" },
              { name: "CAB-MERLOT", type: "Red Wine", price: "$28.00", image: "https://images.pexels.com/photos/50691/bottle-wine-red-wine-wine-bottle-50691.jpeg" }
            ].map((wine, index) => (
              <div key={index} className="wine-card group cursor-pointer">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={wine.image} 
                    alt={wine.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-brawler text-text-primary text-lg mb-1">{wine.name}</h4>
                  <p className="text-sm text-text-secondary mb-3 font-nunito">{wine.type}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-green-600 font-nunito font-medium">IN STOCK</span>
                    <span className="font-brawler text-text-primary font-bold">{wine.price}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 border border-gold text-gold py-2 hover:bg-gold hover:text-white transition-colors">
                      <Heart className="h-4 w-4 mx-auto" />
                    </button>
                    <button className="flex-1 bg-gold text-white py-2 hover:bg-deep-gold transition-colors">
                      <ShoppingCart className="h-4 w-4 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="relative section-padding">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg)` }}
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 container-custom text-white text-center">
          <h2 className="hero-subtitle mb-4">OUR VENUE</h2>
          <h3 className="text-4xl md:text-5xl font-brawler mb-8 text-shadow">Bella Vista at Casa Larga</h3>
          <p className="text-lg max-w-3xl mx-auto font-nunito leading-relaxed mb-8 text-shadow">
            With breathtaking views, Bella Vista at Casa Larga is the perfect venue for your 
            wedding, corporate event, or special celebration. Our experienced event coordinators 
            will work with you to create an unforgettable experience that reflects your unique 
            style and vision. Contact us today to schedule a tour and see why Bella Vista is 
            the premier event destination in the Finger Lakes region.
          </p>
          <button className="btn-primary text-lg font-nunito font-semibold">
            PLAN YOUR EVENT
          </button>
        </div>
      </section>

      {/* Wine on Wheels Section */}
      <section className="section-padding section-bg-wine-wheels">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-text-primary">
                <div className="w-32 h-20 bg-pink-accent rounded-lg mx-auto mb-4"></div>
                <p className="font-nunito">Pink Truck Illustration</p>
              </div>
            </div>
            <div>
              <h2 className="section-header mb-4">WE COME TO YOU!</h2>
              <h3 className="text-4xl md:text-5xl font-brawler text-text-primary mb-8">Wine on Wheels</h3>
              <p className="text-lg text-text-primary mb-6 font-nunito leading-relaxed">
                Bring the Casa Larga experience to your location with our mobile bar service. 
                Our professional bartenders serve our award-winning wines at your event, 
                complete with our signature pink truck.
              </p>
              <ul className="text-text-primary mb-8 font-nunito space-y-2">
                <li>• BOOK YOUR DATE</li>
                <li>• PROFESSIONAL BARTENDING</li>
                <li>• FULL WINE SELECTION</li>
                <li>• CELEBRATE IN STYLE</li>
              </ul>
              <button className="btn-primary font-nunito font-semibold">
                BOOK WINE ON WHEELS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding section-bg-events">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-header mb-4">JOIN US</h2>
            <h3 className="text-4xl md:text-5xl font-brawler text-text-primary mb-8">Upcoming Events</h3>
            <p className="text-lg text-text-primary max-w-2xl mx-auto font-nunito mb-8">
              The fun doesn't stop at the vineyard, come connect! Join the fun with wine tastings when we are open, 
              or enjoy our upcoming events featuring live music, food, and of course, wine! Check out our 
              upcoming events and mark your calendar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "PATIO PARTY SERIES",
                date: "MONTHLY EVENTS",
                description: "Join us for live music on our patio with wine and food trucks.",
                image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
              },
              {
                title: "PURPLE FOOT FESTIVAL",
                date: "SPECIAL EVENT",
                description: "Our signature harvest celebration with grape stomping and festivities.",
                image: "https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg"
              },
              {
                title: "WINE DINNERS",
                date: "SEASONAL",
                description: "Elegant wine dinners featuring seasonal cuisine and wine pairings.",
                image: "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-brawler text-text-primary text-lg mb-2">{event.title}</h4>
                  <p className="text-sm text-gold mb-3 font-nunito font-medium">{event.date}</p>
                  <p className="text-text-primary font-nunito text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn-primary text-lg font-nunito font-semibold">
              VIEW EVENT CALENDAR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;