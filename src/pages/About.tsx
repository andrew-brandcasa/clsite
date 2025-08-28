import React from 'react';
import { Home, Grape, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      <div className="bg-[#2C5530] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-200">A Family Legacy of Winemaking Excellence</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* The Beginning */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-[#2C5530] mb-6">The Beginning</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In 1974, Andrew Colaruotolo had a vision: to create exceptional wines in the beautiful 
                Finger Lakes region of New York. Drawing on his Italian heritage and passion for winemaking, 
                Andrew planted the first vines at Casa Larga, beginning a family legacy that continues today.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg h-64"></div>
          </div>
        </section>

        {/* Our Heritage */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg h-64 order-2 lg:order-1"></div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif text-[#2C5530] mb-6">Our Heritage</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The name "Casa Larga" means "large house" in Italian, reflecting our commitment to welcoming 
                guests as family. Our Italian roots run deep, influencing everything from our winemaking 
                philosophy to our warm hospitality.
              </p>
            </div>
          </div>
        </section>

        {/* The Vineyard */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-[#2C5530] mb-6">The Vineyard</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Located just north of the traditional Finger Lakes region, our unique microclimate and 
                well-drained soils create ideal conditions for growing premium wine grapes. Our 35-acre 
                vineyard produces a diverse range of varietals, from classic Chardonnay and Riesling to 
                bold reds and our signature ice wines.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg h-64"></div>
          </div>
        </section>

        {/* Winemaking Philosophy */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Grape className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-[#2C5530] mb-6">Winemaking Philosophy</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              We believe great wine begins in the vineyard. Our sustainable farming practices and careful 
              attention to detail ensure that each grape reaches its full potential. In the winery, we 
              combine traditional techniques with modern technology to craft wines that express the unique 
              character of our terroir.
            </p>
          </div>
        </section>

        {/* Today and Tomorrow */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg h-64 order-2 lg:order-1"></div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif text-[#2C5530] mb-6">Today and Tomorrow</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Now in its second generation of family ownership, Casa Larga continues to innovate while 
                honoring our traditions. We remain committed to producing award-winning wines and creating 
                memorable experiences for every guest who visits our "large house."
              </p>
            </div>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section>
          <div className="text-center">
            <Award className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-[#2C5530] mb-6">Awards and Recognition</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Over the years, our wines have earned numerous awards and accolades, cementing our reputation 
              as one of New York's premier wineries.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-[#2C5530] mb-2">50 Years</h4>
                <p className="text-sm text-gray-600">Of winemaking excellence</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-[#2C5530] mb-2">35 Acres</h4>
                <p className="text-sm text-gray-600">Of premium vineyard land</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-[#2C5530] mb-2">15+ Wines</h4>
                <p className="text-sm text-gray-600">Varieties in production</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;