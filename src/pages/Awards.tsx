import React from 'react';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const Awards: React.FC = () => {
  const recentAwards = [
    {
      year: "2024",
      competition: "New York Wine & Food Classic",
      wine: "2022 Meritage",
      award: "Gold Medal",
      description: "Recognized for exceptional quality and craftsmanship"
    },
    {
      year: "2023", 
      competition: "Finger Lakes International Wine Competition",
      wine: "2021 Ice Wine",
      award: "Best in Class",
      description: "Outstanding dessert wine with perfect balance"
    },
    {
      year: "2023",
      competition: "New York State Fair Wine Competition", 
      wine: "2022 Chardonnay",
      award: "Silver Medal",
      description: "Elegant white wine with crisp finish"
    },
    {
      year: "2022",
      competition: "American Wine Society",
      wine: "2020 Cab-Merlot",
      award: "Gold Medal", 
      description: "Bold red blend showcasing vineyard terroir"
    }
  ];

  return (
    <div>
      <div className="bg-[#2C5530] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Awards & Recognition</h1>
          <p className="text-xl md:text-2xl text-gray-200">Celebrating Excellence in Winemaking</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <Trophy className="h-16 w-16 text-[#D4AF37] mx-auto mb-6" />
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            For nearly five decades, Casa Larga has been recognized for producing exceptional wines that 
            showcase the best of New York's wine country. Our commitment to quality has earned us numerous 
            awards and accolades from prestigious wine competitions.
          </p>
        </div>

        {/* Recent Awards */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Recent Awards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentAwards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37] rounded-full p-3">
                    <Medal className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-[#2C5530] text-white px-2 py-1 rounded text-xs font-medium">
                        {award.year}
                      </span>
                      <span className="bg-[#D4AF37] text-white px-2 py-1 rounded text-xs font-medium">
                        {award.award}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif text-[#2C5530] mb-2">{award.wine}</h3>
                    <p className="text-sm text-gray-500 mb-2">{award.competition}</p>
                    <p className="text-gray-600 text-sm">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competition Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Wine Competition Recognition</h2>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Our wines regularly compete in national and international competitions, earning medals and 
              recognition for their quality and craftsmanship.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">25+</div>
                <p className="text-sm text-gray-600">Gold Medals</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">40+</div>
                <p className="text-sm text-gray-600">Silver Medals</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">15+</div>
                <p className="text-sm text-gray-600">Best in Class</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">50</div>
                <p className="text-sm text-gray-600">Years Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Industry Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
              <Star className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-[#2C5530] mb-3">Wine Publications</h3>
              <p className="text-gray-600 text-sm">
                Featured in leading wine magazines and publications
              </p>
            </div>
            
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
              <Award className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-[#2C5530] mb-3">Expert Reviews</h3>
              <p className="text-gray-600 text-sm">
                High ratings from wine critics and sommeliers
              </p>
            </div>
            
            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
              <Trophy className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-[#2C5530] mb-3">Industry Leadership</h3>
              <p className="text-gray-600 text-sm">
                Recognized contributions to New York's wine industry
              </p>
            </div>
          </div>
        </section>

        {/* Commitment to Excellence */}
        <section>
          <div className="text-center bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <h2 className="text-2xl font-serif text-[#2C5530] mb-4">Commitment to Excellence</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              These awards reflect our unwavering commitment to producing wines of the highest quality 
              while honoring our Italian heritage and the unique terroir of our vineyard. Each recognition 
              motivates us to continue pushing the boundaries of excellence in winemaking.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Awards;