import React from 'react';
import ContactForm from '../../components/ContactForm';
import Hero from '../../components/Hero';
import { Heart, Building, PartyPopper, Users, Award, MapPin } from 'lucide-react';

const PrivateEvents: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        subtitle="PRIVATE EVENTS"
        title="Where Memories Are Made and Celebrations Come to Life"
        backgroundImage="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
        height="full"
      >
        <button className="btn-primary text-lg font-nunito font-semibold">
          PLAN YOUR EVENT
        </button>
      </Hero>

      <div className="container-custom section-padding">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="section-header mb-4">HOST YOUR CELEBRATION</h2>
          <h3 className="text-4xl md:text-5xl font-brawler text-text-primary mb-8">The Perfect Venue</h3>
          <p className="text-lg text-text-primary font-nunito leading-relaxed max-w-3xl mx-auto">
            Casa Larga provides the perfect backdrop for your most important celebrations. With our stunning 
            vineyard views, elegant facilities, and award-winning wines, we create unforgettable experiences 
            for weddings, corporate events, and special occasions.
          </p>
        </div>

        {/* Why Choose Casa Larga */}
        <section className="mb-20">
          <h2 className="section-header text-center mb-4">WHY CHOOSE CASA LARGA</h2>
          <h3 className="text-3xl font-brawler text-text-primary text-center mb-12">Exceptional Experiences</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Breathtaking Setting",
                description: "Panoramic vineyard views and beautifully landscaped grounds"
              },
              {
                icon: Users,
                title: "Flexible Spaces", 
                description: "Indoor and outdoor venues to accommodate 50-300 guests"
              },
              {
                icon: Award,
                title: "Award-Winning Wines",
                description: "Exclusive access to our complete wine collection"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-cream-light rounded-lg">
                <feature.icon className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-brawler text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-primary font-nunito text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Event Types */}
        <section className="mb-20">
          <h2 className="section-header text-center mb-4">EVENT TYPES</h2>
          <h3 className="text-3xl font-brawler text-text-primary text-center mb-12">Celebrations for Every Occasion</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <Heart className="h-16 w-16 text-pink-400" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-brawler text-text-primary mb-4">Weddings</h3>
                <p className="text-text-primary font-nunito mb-4">
                  Create your dream wedding surrounded by rolling vineyards and elegant charm. 
                  Our wedding packages include ceremony and reception options with customizable details.
                </p>
                <p className="text-sm text-text-secondary font-nunito mb-4">Capacity: 50-250 guests</p>
                <button className="w-full btn-primary font-nunito">
                  LEARN MORE
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Building className="h-16 w-16 text-blue-400" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-brawler text-text-primary mb-4">Corporate Events</h3>
                <p className="text-text-primary font-nunito mb-4">
                  Impress clients and reward employees with sophisticated corporate gatherings. 
                  Perfect for meetings, retreats, product launches, and team building.
                </p>
                <p className="text-sm text-text-secondary font-nunito mb-4">Capacity: 25-200 guests</p>
                <button className="w-full btn-primary font-nunito">
                  LEARN MORE
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <PartyPopper className="h-16 w-16 text-purple-400" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-brawler text-text-primary mb-4">Proms & Special Occasions</h3>
                <p className="text-text-primary font-nunito mb-4">
                  Celebrate life's milestones in style. From proms to anniversaries, graduations 
                  to family reunions, we make every occasion special.
                </p>
                <p className="text-sm text-text-secondary font-nunito mb-4">Capacity: 50-300 guests</p>
                <button className="w-full btn-primary font-nunito">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-header mb-4">START PLANNING</h2>
              <h3 className="text-3xl font-brawler text-text-primary mb-6">Your Perfect Event</h3>
              <p className="text-text-primary font-nunito mb-8">
                Ready to create an unforgettable celebration? Contact our events team to begin planning 
                your perfect day at Casa Larga.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-text-primary font-nunito">Phone: (585) 223-4210 ext. 3</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-text-primary font-nunito">Email: events@casalarga.com</span>
                </div>
              </div>
            </div>

            <ContactForm 
              title="Event Inquiry"
              submitText="Send Inquiry"
              fields={['name', 'email', 'phone', 'message']}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivateEvents;