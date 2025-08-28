import React from 'react';
import Hero from '../components/Hero';
import { Home, Grape, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        subtitle="OUR HISTORY"
        title="New York's 21st Winery"
        backgroundImage="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
        height="full"
      >
        <button className="btn-primary text-lg font-nunito font-semibold">
          DISCOVER OUR STORY
        </button>
      </Hero>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* The Beginning */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-header mb-4">THE BEGINNING</h2>
              <h3 className="text-3xl font-brawler text-darker-brown mb-6">A Vision Realized</h3>
              <p className="text-dark-brown font-nunito leading-relaxed mb-6">
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
              <h2 className="section-header mb-4">OUR HERITAGE</h2>
              <h3 className="text-3xl font-brawler text-darker-brown mb-6">Italian Roots</h3>
              <p className="text-dark-brown font-nunito leading-relaxed mb-6">
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
              <h2 className="section-header mb-4">THE VINEYARD</h2>
              <h3 className="text-3xl font-brawler text-darker-brown mb-6">Unique Terroir</h3>
              <p className="text-dark-brown font-nunito leading-relaxed mb-6">
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
            <Grape className="h-16 w-16 text-gold mx-auto mb-4" />
            <h2 className="section-header mb-4">WINEMAKING PHILOSOPHY</h2>
            <h3 className="text-3xl font-brawler text-darker-brown mb-6">Tradition Meets Innovation</h3>
          </div>
          
          <div className="bg-welcome-beige rounded-lg p-8">
            <p className="text-dark-brown font-nunito leading-relaxed text-center max-w-3xl mx-auto">
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
              <h2 className="section-header mb-4">TODAY AND TOMORROW</h2>
              <h3 className="text-3xl font-brawler text-darker-brown mb-6">Continuing Excellence</h3>
              <p className="text-dark-brown font-nunito leading-relaxed mb-6">
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
            <Award className="h-16 w-16 text-gold mx-auto mb-4" />
            <h2 className="section-header mb-4">AWARDS AND RECOGNITION</h2>
            <h3 className="text-3xl font-brawler text-darker-brown mb-6">Five Decades of Excellence</h3>
            <p className="text-dark-brown font-nunito leading-relaxed max-w-3xl mx-auto mb-8">
              Over the years, our wines have earned numerous awards and accolades, cementing our reputation 
              as one of New York's premier wineries.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-brawler text-darker-brown mb-2">50 Years</h4>
                <p className="text-sm text-dark-brown font-nunito">Of winemaking excellence</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-brawler text-darker-brown mb-2">35 Acres</h4>
                <p className="text-sm text-dark-brown font-nunito">Of premium vineyard land</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-brawler text-darker-brown mb-2">15+ Wines</h4>
                <p className="text-sm text-dark-brown font-nunito">Varieties in production</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;