import React, { useState } from 'react';
import Hero from '../../components/Hero';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const EventsCalendar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  
  const events = [
    {
      id: 1,
      name: "Purple Foot Festival",
      date: "September 14, 2025",
      time: "11:00 AM - 5:00 PM",
      description: "Our signature harvest celebration featuring grape stomping, live music, and family fun.",
      category: "Festival",
      price: "$20",
      image: "https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg"
    },
    {
      id: 2,
      name: "Patio Party Series",
      date: "Monthly through summer",
      time: "6:00 PM - 9:00 PM", 
      description: "Live music, wine, and food trucks on our scenic patio.",
      category: "Live Music",
      price: "$15",
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
    },
    {
      id: 3,
      name: "Holiday Wine & Dine",
      date: "December dates TBA",
      time: "6:30 PM - 9:30 PM",
      description: "Elegant wine dinners featuring seasonal cuisine and wine pairings.",
      category: "Wine Dinner",
      price: "$85",
      image: "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg"
    },
    {
      id: 4,
      name: "Ice Wine Festival",
      date: "February 2026",
      time: "12:00 PM - 4:00 PM",
      description: "Celebrate our award-winning ice wines with tastings and winter activities.",
      category: "Festival",
      price: "$25",
      image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg"
    }
  ];

  const categories = ["All Events", "Festivals", "Wine Dinners", "Live Music", "Educational", "Seasonal"];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        subtitle="WINERY EVENTS"
        title="Join Us for Unforgettable Experiences Throughout the Year"
        backgroundImage="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
        height="full"
      >
        <button className="btn-primary text-lg font-nunito font-semibold">
          VIEW ALL EVENTS
        </button>
      </Hero>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="section-header mb-4">JOIN THE CELEBRATION</h2>
          <h3 className="text-4xl md:text-5xl font-brawler text-text-primary mb-8">Events Calendar</h3>
          <p className="text-lg text-text-primary font-nunito leading-relaxed max-w-3xl mx-auto">
            From intimate wine dinners to festive harvest celebrations, Casa Larga hosts events that bring our 
            community together to celebrate wine, food, and friendship. Check our calendar for upcoming events 
            and join us for your next memorable experience.
          </p>
        </div>

        {/* Event Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 transition-colors font-nunito ${
                selectedCategory === category
                  ? 'bg-gold text-white'
                  : 'border border-gold text-gold hover:bg-gold hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Events */}
        <section className="mb-16">
          <h2 className="section-header text-center mb-4">FEATURED EVENTS</h2>
          <h3 className="text-3xl font-brawler text-text-primary text-center mb-12">Don't Miss These Celebrations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-gold text-white px-2 py-1 text-xs font-medium mb-3 inline-block font-nunito">
                    {event.category}
                  </span>
                  <h3 className="text-lg font-brawler text-text-primary mb-2">{event.name}</h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-text-secondary font-nunito">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gold" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gold" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-text-primary font-nunito text-sm mb-4">{event.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-brawler text-text-primary font-bold">{event.price}</span>
                    <button className="bg-gold text-white px-4 py-2 hover:bg-deep-gold transition-colors text-sm font-nunito">
                      Get Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calendar View */}
        <section className="mb-16">
          <h2 className="section-header text-center mb-4">CALENDAR VIEW</h2>
          <h3 className="text-3xl font-brawler text-text-primary text-center mb-12">Plan Your Visit</h3>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-center text-text-secondary py-20 font-nunito">
              Interactive calendar would be implemented here
            </div>
          </div>
        </section>

        {/* Ticket Information */}
        <section>
          <div className="bg-cream-light rounded-lg p-8">
            <h3 className="text-2xl font-brawler text-text-primary mb-6 text-center">Ticket Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-brawler text-text-primary mb-2">Advance Purchase</h4>
                <p className="text-sm text-text-primary font-nunito">Recommended for all events</p>
              </div>
              <div className="text-center">
                <h4 className="font-brawler text-text-primary mb-2">Member Discounts</h4>
                <p className="text-sm text-text-primary font-nunito">Available for wine club members</p>
              </div>
              <div className="text-center">
                <h4 className="font-brawler text-text-primary mb-2">Group Rates</h4>
                <p className="text-sm text-text-primary font-nunito">For 10 or more people</p>
              </div>
              <div className="text-center">
                <h4 className="font-brawler text-text-primary mb-2">Sell Out Notice</h4>
                <p className="text-sm text-text-primary font-nunito">Some events may sell out</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventsCalendar;