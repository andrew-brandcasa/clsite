import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Star, Truck, Award } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { productName } = useParams<{ productName: string }>();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-12 flex items-center justify-center h-96">
            <div className="w-32 h-80 bg-green-800 rounded-sm shadow-lg"></div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg h-20 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                <div className="w-6 h-16 bg-green-800 rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-serif text-[#2C5530] mb-2">PALLIDO</h1>
            <p className="text-lg text-gray-600 mb-4">White Wine</p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-[#D4AF37]" />
                ))}
              </div>
              <span className="text-sm text-gray-500">(24 reviews)</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-[#2C5530]">$99.00</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">IN STOCK</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif text-[#2C5530]">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              Our signature white wine showcases the elegant characteristics of our unique terroir. 
              With notes of crisp apple, pear, and subtle oak, this wine pairs beautifully with seafood, 
              poultry, and light pasta dishes. Crafted using traditional techniques passed down through generations.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif text-[#2C5530]">Tasting Notes</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-[#2C5530]">Aroma:</strong>
                <p className="text-gray-600">Fresh citrus, green apple, floral notes</p>
              </div>
              <div>
                <strong className="text-[#2C5530]">Palate:</strong>
                <p className="text-gray-600">Crisp, well-balanced, mineral finish</p>
              </div>
              <div>
                <strong className="text-[#2C5530]">Food Pairing:</strong>
                <p className="text-gray-600">Seafood, poultry, light pasta</p>
              </div>
              <div>
                <strong className="text-[#2C5530]">Alcohol:</strong>
                <p className="text-gray-600">12.5% ABV</p>
              </div>
            </div>
          </div>

          {/* Add to Cart Section */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-4 mb-6">
              <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Quantity:</label>
              <select 
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="flex-1 bg-[#D4AF37] text-white py-3 px-6 rounded-md hover:bg-[#c29c2a] transition-colors font-medium">
                Add to Cart
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <Heart className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Truck className="h-4 w-4" />
              <span>Free shipping on orders over $100</span>
            </div>
          </div>

          {/* Awards */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-2 text-sm">
              <Award className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-gray-600">Gold Medal - New York Wine Competition 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;