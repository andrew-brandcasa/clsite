import React from 'react';
import Hero from '../../components/Hero';
import { ShoppingBag, Truck } from 'lucide-react';

const Shop: React.FC = () => {
  const wineCategories = [
    {
      name: "Red Wines",
      description: "Bold, complex reds including our award-winning Meritage and smooth Cab-Merlot blend.",
      image: "https://images.pexels.com/photos/50691/bottle-wine-red-wine-wine-bottle-50691.jpeg"
    },
    {
      name: "White Wines", 
      description: "Elegant whites featuring our flagship Chardonnays and refreshing Riesling blends.",
      image: "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg"
    },
    {
      name: "Rosé Wines",
      description: "Crisp and refreshing rosé wines perfect for any season.",
      image: "https://images.pexels.com/photos/3407636/pexels-photo-3407636.jpeg"
    },
    {
      name: "Ice Wines",
      description: "Our specialty dessert wines, crafted from grapes naturally frozen on the vine.",
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
    },
    {
      name: "Reserve Collection",
      description: "Limited-production wines showcasing the finest expressions of our vineyard.",
      image: "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg"
    },
    {
      name: "Award Winning Wines",
      description: "Our medal-winning selections recognized by prestigious wine competitions.",
      image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        subtitle="SHOP WINES"
        title="Award-Winning Wines Delivered to Your Door"
        backgroundImage="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
        height="full"
      >
        <button className="btn-primary text-lg font-nunito font-semibold">
          BROWSE OUR COLLECTION
        </button>
      </Hero>

      <div className="container-custom section-padding">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="section-header mb-4">OUR COLLECTION</h2>
          <h3 className="text-4xl md:text-5xl font-brawler text-text-primary mb-8">Handcrafted Excellence</h3>
          <p className="text-lg text-text-primary font-nunito leading-relaxed max-w-3xl mx-auto mb-8">
            Discover our complete collection of handcrafted wines, from our signature Chardonnays to our celebrated ice wines. 
            Each bottle represents our commitment to quality and our passion for winemaking excellence.
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-cream-light text-text-primary px-4 py-2 rounded-lg">
            <Truck className="h-5 w-5" />
            <span className="text-sm font-nunito font-medium">We ship to 40 states with secure packaging</span>
          </div>
        </div>

        {/* Wine Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wineCategories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-brawler text-text-primary mb-3 group-hover:text-gold transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-text-primary font-nunito text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <button className="w-full btn-primary font-nunito font-medium">
                    SHOP {category.name.toUpperCase()}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products Section */}
        <section className="mt-20">
          <h2 className="section-header text-center mb-4">FEATURED WINES</h2>
          <h3 className="text-3xl font-brawler text-text-primary text-center mb-12">Staff Picks</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "CHARDONNAY-CLV", type: "White Wine", price: "$24.00" },
              { name: "MERITAGE", type: "Red Wine", price: "$32.00" },
              { name: "ICE WINE", type: "Dessert Wine", price: "$45.00" },
              { name: "RIESLING", type: "White Wine", price: "$22.00" }
            ].map((wine, i) => (
              <div key={i} className="wine-card">
                <div className="h-64 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <div className="w-20 h-32 bg-text-primary rounded-sm"></div>
                </div>
                <div className="p-4">
                  <h4 className="font-brawler text-text-primary mb-2">{wine.name}</h4>
                  <p className="text-sm text-text-secondary font-nunito mb-2">{wine.type}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-nunito">IN STOCK</span>
                    <span className="font-brawler text-text-primary font-bold">{wine.price}</span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <button className="flex-1 border border-gold text-gold py-1 text-sm hover:bg-gold hover:text-white transition-colors">
                      ♡
                    </button>
                    <button className="flex-1 bg-gold text-white py-1 text-sm hover:bg-deep-gold transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shop;