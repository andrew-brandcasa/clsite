import React from 'react';
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
    },
    {
      name: "Wine Specials",
      description: "Limited-time offers and seasonal selections at special prices.",
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
    },
    {
      name: "Gift Sets",
      description: "Thoughtfully curated wine collections perfect for any occasion.",
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
    },
    {
      name: "Custom Wine Labels",
      description: "Personalize any wine with custom labels for weddings, corporate gifts, or special celebrations.",
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
    },
    {
      name: "Wine Accessories",
      description: "Everything you need to enhance your wine experience.",
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
    },
    {
      name: "Gift Cards",
      description: "The perfect gift for wine lovers - redeemable for wines, tastings, and events.",
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
    }
  ];

  return (
    <div>
      <div className="bg-[#2C5530] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Shop Casa Larga Wines</h1>
          <p className="text-xl md:text-2xl text-gray-200">Award-Winning Wines Delivered to Your Door</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Discover our complete collection of handcrafted wines, from our signature Chardonnays to our celebrated ice wines. 
            Each bottle represents our commitment to quality and our passion for winemaking excellence.
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-green-50 text-[#2C5530] px-4 py-2 rounded-lg">
            <Truck className="h-5 w-5" />
            <span className="text-sm font-medium">We ship to 40 states with secure packaging</span>
          </div>
        </div>

        {/* Wine Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wineCategories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#2C5530] mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <button className="w-full bg-[#D4AF37] text-white py-2 rounded hover:bg-[#c29c2a] transition-colors font-medium">
                    Shop {category.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Featured Wines</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="h-64 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <div className="w-20 h-32 bg-green-800 rounded-sm"></div>
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-[#2C5530] mb-2">PALLIDO</h4>
                  <p className="text-sm text-gray-500 mb-2">White Wine</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600">IN STOCK</span>
                    <span className="font-semibold text-[#2C5530]">$99.00</span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <button className="flex-1 border border-[#D4AF37] text-[#D4AF37] py-1 rounded text-sm hover:bg-[#D4AF37] hover:text-white transition-colors">
                      ♡
                    </button>
                    <button className="flex-1 bg-[#D4AF37] text-white py-1 rounded text-sm hover:bg-[#c29c2a] transition-colors">
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