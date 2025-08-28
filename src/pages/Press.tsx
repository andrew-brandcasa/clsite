import React from 'react';
import { FileText, Download, Camera, Calendar } from 'lucide-react';

const Press: React.FC = () => {
  const pressReleases = [
    {
      title: "Casa Larga Wins Gold at New York Wine Competition",
      date: "October 2024",
      excerpt: "Casa Larga's 2022 Meritage receives gold medal recognition at the prestigious New York Wine & Food Classic."
    },
    {
      title: "Purple Foot Festival Celebrates 25 Years", 
      date: "September 2024",
      excerpt: "Annual harvest festival marks milestone anniversary with record attendance and expanded activities."
    },
    {
      title: "New Ice Wine Release Honors Family Tradition",
      date: "February 2024", 
      excerpt: "Limited edition ice wine celebrates 50 years of Casa Larga winemaking excellence."
    }
  ];

  const mediaKit = [
    "Company Fact Sheet",
    "High-Resolution Logos",
    "Product Images", 
    "Vineyard Photos",
    "Executive Bios",
    "Awards List"
  ];

  return (
    <div>
      <div className="bg-[#2C5530] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Press & Media</h1>
          <p className="text-xl md:text-2xl text-gray-200">Resources for Media Professionals</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Media Contact */}
        <section className="mb-16">
          <div className="bg-[#2C5530] text-white rounded-lg p-8">
            <h2 className="text-3xl font-serif mb-6 text-center">Media Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-[#D4AF37] mb-2">Press Inquiries</h3>
                <p>press@casalarga.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#D4AF37] mb-2">Phone</h3>
                <p>(585) 223-4210</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#D4AF37] mb-2">Media Relations</h3>
                <p>Available for interviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Casa Larga */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-8">About Casa Larga</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              Casa Larga Vineyards is a family-owned winery established in 1974, located in the Finger Lakes 
              region of New York. We specialize in producing award-winning wines that reflect our Italian 
              heritage and the unique terroir of our vineyard.
            </p>
          </div>
        </section>

        {/* Recent Press Releases */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <FileText className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-[#2C5530] mb-4">Recent Press Releases</h2>
          </div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-[#2C5530] mb-2">{release.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{release.date}</p>
                    <p className="text-gray-600">{release.excerpt}</p>
                  </div>
                  <button className="ml-6 text-[#D4AF37] hover:text-[#c29c2a] transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Media Kit */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Download className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-[#2C5530] mb-4">Media Kit Downloads</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaKit.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold text-[#2C5530] mb-2">{item}</h3>
                <p className="text-gray-500 text-sm mb-4">High-resolution files available</p>
                <button className="text-[#D4AF37] hover:text-[#c29c2a] transition-colors text-sm font-medium">
                  Download
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Interview Opportunities */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Interview Opportunities</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-serif text-[#2C5530] mb-6">Our team is available for interviews on:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• New York wine industry trends</li>
                <li>• Sustainable winemaking practices</li>
                <li>• Family business operations</li>
                <li>• Italian winemaking traditions</li>
                <li>• Finger Lakes terroir and climate</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Camera className="h-6 w-6 text-[#D4AF37] mr-3" />
                <h3 className="text-lg font-serif text-[#2C5530]">Photography & Video</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• On-site filming welcome with advance coordination</li>
                <li>• B-roll footage available upon request</li>
                <li>• Photo opportunities throughout vineyard and winery</li>
                <li>• Usage rights provided with proper attribution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Industry Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Industry Statistics</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#D4AF37] mb-2">1974</div>
              <p className="text-sm text-gray-600">Established</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#D4AF37] mb-2">35</div>
              <p className="text-sm text-gray-600">Acres</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#D4AF37] mb-2">15+</div>
              <p className="text-sm text-gray-600">Wine Varieties</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#D4AF37] mb-2">NY+</div>
              <p className="text-sm text-gray-600">Distribution</p>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section>
          <div className="bg-[#2C5530] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif mb-6">Follow Our Story</h2>
            <p className="text-gray-200 mb-6">Connect with us on social media for the latest updates</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <h4 className="font-semibold text-[#D4AF37] mb-1">Facebook</h4>
                <p className="text-sm">@CasaLargaVineyards</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#D4AF37] mb-1">Instagram</h4>
                <p className="text-sm">@casalargawinery</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#D4AF37] mb-1">Twitter</h4>
                <p className="text-sm">@CasaLargaNY</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Press;