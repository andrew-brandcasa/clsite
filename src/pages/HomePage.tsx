import React from 'react';
import Hero from '../components/Hero';
import { Heart, ShoppingCart, Calendar, MapPin, Award, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredWines = [
    {
      name: "PALLIDO",
      type: "White Wine",
      price: "$99.00",
      image: "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg"
    },
    {
      name: "MERITAGE",
      type: "Red Wine",
      price: "$85.00",
      image: "https://images.pexels.com/photos/50691/bottle-wine-red-wine-wine-bottle-50691.jpeg"
    },
    {
      name: "ICE WINE",
      type: "Dessert Wine",
      price: "$45.00",
      image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg"
    },
    {
      name: "CHARDONNAY",
      type: "White Wine",
      price: "$65.00",
      image: "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        subtitle="OUR HISTORY"
        title="New York's 21st Winery"
        backgroundImage="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
        height="full"
      >
        <button className="btn-primary text-lg">
          ABOUT CASA LARGA
        </button>
      </Hero>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-header mb-4">WELCOME TO CASA LARGA</h2>
            <h3 className="text-4xl md:text-5xl font-brawler text-[#2C1810] mb-8">Experience Excellence Since 1974</h3>
            <p className="text-lg text-[#3C2415] max-w-3xl mx-auto font-nunito leading-relaxed">
              Nestled in the heart of New York's wine country, Casa Larga Vineyards has been crafting 
              exceptional wines for nearly five decades. Our Italian heritage and commitment to quality 
              create wines that celebrate both tradition and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#F5F5DC] rounded-lg">
              <div className="text-6xl font-brawler text-[#D4AF37] mb-4">01</div>
              <h4 className="section-header mb-4">AWARD-WINNING WINES</h4>
              <p className="text-[#3C2415] font-nunito">
                Our wines have earned numerous medals and accolades from prestigious competitions, 
                cementing our reputation for excellence.
              </p>
            </div>

            <div className="text-center p-8 bg-[#F5F5DC] rounded-lg">
              <div className="text-6xl font-brawler text-[#D4AF37] mb-4">02</div>
              <h4 className="section-header mb-4">FAMILY TRADITION</h4>
              <p className="text-[#3C2415] font-nunito">
                Founded by Andrew Colaruotolo in 1974, Casa Larga remains a family-owned winery 
                dedicated to Italian winemaking traditions.
              </p>
            </div>

            <div className="text-center p-8 bg-[#F5F5DC] rounded-lg">
              <div className="text-6xl font-brawler text-[#D4AF37] mb-4">03</div>
              <h4 className="section-header mb-4">UNIQUE TERROIR</h4>
              <p className="text-[#3C2415] font-nunito">
                Our 35-acre vineyard's unique microclimate and well-drained soils create ideal 
                conditions for producing premium wine grapes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Catalog Section */}
      <section className="py-20 section-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-header mb-4">OUR WINES</h2>
            <h3 className="text-4xl md:text-5xl font-brawler text-[#2C1810] mb-8">Featured Wine Collection</h3>
            <p className="text-lg text-[#3C2415] max-w-2xl mx-auto font-nunito">
              Discover our handcrafted wines, from crisp whites to bold reds and our signature ice wines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredWines.map((wine, index) => (
              <div key={index} className="wine-card group cursor-pointer">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={wine.image} 
                    alt={wine.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-brawler text-[#2C1810] text-lg mb-1">{wine.name}</h4>
                  <p className="text-sm text-[#3C2415] mb-3 font-nunito">{wine.type}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-green-600 font-nunito font-medium">IN STOCK</span>
                    <span className="font-brawler text-[#2C1810] font-bold">{wine.price}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 border border-[#D4AF37] text-[#D4AF37] py-2 rounded hover:bg-[#D4AF37] hover:text-white transition-colors">
                      <Heart className="h-4 w-4 mx-auto" />
                    </button>
                    <button className="flex-1 bg-[#D4AF37] text-white py-2 rounded hover:bg-[#CD7F32] transition-colors">
                      <ShoppingCart className="h-4 w-4 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn-primary text-lg">
              SHOP OUR CATALOG
            </button>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 section-bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-header mb-4">OUR STORY</h2>
              <h3 className="text-4xl md:text-5xl font-brawler text-[#2C1810] mb-8">Five Decades of Excellence</h3>
              <p className="text-lg text-[#3C2415] mb-6 font-nunito leading-relaxed">
                In 1974, Andrew Colaruotolo had a vision: to create exceptional wines in the beautiful 
                Finger Lakes region of New York. Drawing on his Italian heritage and passion for winemaking, 
                Andrew planted the first vines at Casa Larga, beginning a family legacy that continues today.
              </p>
              <p className="text-lg text-[#3C2415] mb-8 font-nunito leading-relaxed">
                The name "Casa Larga" means "large house" in Italian, reflecting our commitment to welcoming 
                guests as family. Our Italian roots run deep, influencing everything from our winemaking 
                philosophy to our warm hospitality.
              </p>
              <button className="btn-primary">
                LEARN MORE ABOUT US
              </button>
            </div>
            <div className="h-96 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-[#3C2415]">
                <Award className="h-16 w-16 mx-auto mb-4" />
                <p className="font-nunito">Vintage Photo Gallery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center order-2 lg:order-1">
              <div className="text-center text-[#3C2415]">
                <Users className="h-16 w-16 mx-auto mb-4" />
                <p className="font-nunito">Wedding & Event Photos</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="section-header mb-4">PRIVATE EVENTS</h2>
              <h3 className="text-4xl md:text-5xl font-brawler text-[#2C1810] mb-8">Your Perfect Venue</h3>
              <p className="text-lg text-[#3C2415] mb-6 font-nunito leading-relaxed">
                Casa Larga provides the perfect backdrop for your most important celebrations. With our stunning 
                vineyard views, elegant facilities, and award-winning wines, we create unforgettable experiences 
                for weddings, corporate events, and special occasions.
              </p>
              <ul className="text-[#3C2415] mb-8 font-nunito space-y-2">
                <li>• Weddings and receptions for 50-250 guests</li>
                <li>• Corporate events and meetings</li>
                <li>• Proms and special celebrations</li>
                <li>• Custom catering and bar service</li>
              </ul>
              <button className="btn-primary">
                PLAN YOUR EVENT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wine on Wheels Section */}
      <section className="py-20 section-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-header mb-4">MOBILE BAR SERVICE</h2>
              <h3 className="text-4xl md:text-5xl font-brawler text-[#2C1810] mb-8">Wine on Wheels</h3>
              <p className="text-lg text-[#3C2415] mb-6 font-nunito leading-relaxed">
                Bring the Casa Larga experience to your location with our mobile bar service. Our professional 
                bartenders serve our award-winning wines at your event, complete with our signature pink truck 
                that's sure to be a conversation starter.
              </p>
              <ul className="text-[#3C2415] mb-8 font-nunito space-y-2">
                <li>• Professional bartending service</li>
                <li>• Full selection of Casa Larga wines</li>
                <li>• Signature pink truck experience</li>
                <li>• Available within 50-mile radius</li>
              </ul>
              <button className="btn-primary">
                BOOK WINE ON WHEELS
              </button>
            </div>
            <div className="h-96 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-[#3C2415]">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="font-nunito">Pink Truck Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 section-bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-header mb-4">UPCOMING EVENTS</h2>
            <h3 className="text-4xl md:text-5xl font-brawler text-[#2C1810] mb-8">Join Us for Memorable Experiences</h3>
            <p className="text-lg text-[#3C2415] max-w-2xl mx-auto font-nunito">
              From intimate wine dinners to festive harvest celebrations, discover what's happening at Casa Larga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Purple Foot Festival",
                date: "September 14, 2025",
                description: "Our signature harvest celebration with grape stomping and live music."
              },
              {
                title: "Patio Party Series",
                date: "Monthly through summer",
                description: "Live music, wine, and food trucks on our scenic patio."
              },
              {
                title: "Holiday Wine Dinners",
                date: "December dates TBA",
                description: "Elegant wine dinners featuring seasonal cuisine and pairings."
              }
            ].map((event, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-[#E8DCC0]">
                <Calendar className="h-8 w-8 text-[#D4AF37] mb-4" />
                <h4 className="font-brawler text-[#2C1810] text-xl mb-2">{event.title}</h4>
                <p className="text-sm text-[#D4AF37] mb-3 font-nunito font-medium">{event.date}</p>
                <p className="text-[#3C2415] font-nunito">{event.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn-primary text-lg">
              VIEW ALL EVENTS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;