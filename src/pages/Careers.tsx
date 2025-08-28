import React from 'react';
import { Users, MapPin, TrendingUp, Award } from 'lucide-react';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "Tasting Room Associate",
      type: "Part-time/Full-time positions available",
      description: "Provide exceptional customer service, conduct wine tastings, and share the Casa Larga story with guests.",
      requirements: "Customer service experience, wine knowledge preferred, weekend availability"
    },
    {
      title: "Event Coordinator Assistant",
      type: "Full-time position", 
      description: "Support our events team in planning and executing private events and winery celebrations.",
      requirements: "Event planning experience, strong organizational skills, flexibility for weekend events"
    },
    {
      title: "Vineyard Worker",
      type: "Seasonal positions",
      description: "Assist with vineyard operations including pruning, harvesting, and general maintenance.", 
      requirements: "Physical ability to work outdoors, reliable transportation, agricultural experience preferred"
    },
    {
      title: "Kitchen Staff",
      type: "Part-time positions",
      description: "Support our catering operations for events and special dinners.",
      requirements: "Food service experience, ability to work in fast-paced environment"
    }
  ];

  return (
    <div>
      <div className="bg-[#2C5530] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Careers at Casa Larga</h1>
          <p className="text-xl md:text-2xl text-gray-200">Join Our Family and Grow Your Career in Wine Country</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Working at Casa Larga */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-[#2C5530] mb-6">About Working at Casa Larga</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Casa Larga is more than a workplace—it's a family. We're passionate about creating exceptional 
              wines and memorable experiences for our guests. If you share our commitment to excellence and 
              hospitality, we'd love to have you join our team.
            </p>
          </div>
        </section>

        {/* Why Work at Casa Larga */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Why Work at Casa Larga</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Family Atmosphere",
                description: "Supportive, collaborative work environment"
              },
              {
                icon: TrendingUp,
                title: "Growth Opportunities",
                description: "Advance your career in the wine industry"
              },
              {
                icon: MapPin,
                title: "Beautiful Location", 
                description: "Work in the scenic Finger Lakes region"
              },
              {
                icon: Award,
                title: "Employee Benefits",
                description: "Competitive wages, wine discounts, and more"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <benefit.icon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-semibold text-[#2C5530] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Current Opportunities */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Current Opportunities</h2>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1 mb-6 lg:mb-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-serif text-[#2C5530]">{position.title}</h3>
                      <span className="bg-[#D4AF37] text-white px-2 py-1 rounded text-xs font-medium">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div>
                      <h4 className="font-semibold text-[#2C5530] text-sm mb-2">Requirements:</h4>
                      <p className="text-gray-600 text-sm">{position.requirements}</p>
                    </div>
                  </div>
                  <button className="bg-[#D4AF37] text-white px-6 py-2 rounded hover:bg-[#c29c2a] transition-colors font-medium lg:ml-6">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-16">
          <div className="bg-[#2C5530] text-white rounded-lg p-8">
            <h2 className="text-2xl font-serif mb-6 text-center">How to Apply</h2>
            <div className="text-center mb-6">
              <p className="text-gray-200 mb-4">
                Interested candidates should submit a resume and cover letter to careers@casalarga.com 
                or apply in person at the winery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-[#D4AF37] mb-2">Email Applications</h3>
                <p className="text-sm">careers@casalarga.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#D4AF37] mb-2">In-Person Applications</h3>
                <p className="text-sm">2287 Turk Hill Road, Fairport, NY 14450</p>
              </div>
            </div>
          </div>
        </section>

        {/* Equal Opportunity Employer */}
        <section>
          <div className="text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-serif text-[#2C5530] mb-4">Equal Opportunity Employer</h2>
            <p className="text-gray-600">
              Casa Larga is an equal opportunity employer committed to diversity and inclusion.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;