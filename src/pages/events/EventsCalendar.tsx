import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const EventsCalendar: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  
  const events = [
    {
      id: 1,
      name: "Purple Foot Festival",
      date: "September 14, 2025",
      time: "11:00 AM - 5:00 PM",
      description: "Our signature harvest celebration featuring grape stomping, live music, and family fun.",
      category: "Festival",
      price: "$20"
    },
    {
      id: 2,
      name: "Patio Party Series",
      date: "Monthly through summer",
      time: "6:00 PM - 9:00 PM", 
      description: "Live music, wine, and food trucks on our scenic patio.",
      category: "Live Music",
      price: "$15"
    },
    {
      id: 3,
      name: "Holiday Wine & Dine",
      date: "December dates TBA",
      time: "6:30 PM - 9:30 PM",
      description: "Elegant wine dinners featuring seasonal cuisine and wine pairings.",
      category: "Wine Dinner",
      price: "$85"
    },
    {
      id: 4,
      name: "Ice Wine Festival",
      date: "February 2026",
      time: "12:00 PM - 4:00 PM",
      description: "Celebrate our award-winning ice wines with tastings and winter activities.",
      category: "Festival",
      price: "$25"
    }
  ];

  const categories = ["All Events", "Festivals", "Wine Dinners", "Live Music", "Educational", "Seasonal"];

  return (
    <div>
      <div className="bg-[#2C5530] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Winery Events Calendar</h1>
          <p className="text-xl md:text-2xl text-gray-200">Join Us for Unforgettable Experiences Throughout the Year</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
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
              className="px-4 py-2 border border-[#2C5530] text-[#2C5530] rounded-md hover:bg-[#2C5530] hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Featured Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200"></div>
                <div className="p-6">
                  <span className="bg-[#D4AF37] text-white px-2 py-1 rounded text-xs font-medium mb-3 inline-block">
                    {event.category}
                  </span>
                  <h3 className="text-lg font-serif text-[#2C5530] mb-2">{event.name}</h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-[#D4AF37]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-[#D4AF37]" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#2C5530]">{event.price}</span>
                    <button className="bg-[#D4AF37] text-white px-4 py-2 rounded hover:bg-[#c29c2a] transition-colors text-sm">
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
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Calendar View</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-center text-gray-500 py-20">
              Interactive calendar would be implemented here
            </div>
          </div>
        </section>

        {/* Ticket Information */}
        <section>
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-serif text-[#2C5530] mb-6 text-center">Ticket Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-[#2C5530] mb-2">Advance Purchase</h4>
                <p className="text-sm text-gray-600">Recommended for all events</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#2C5530] mb-2">Member Discounts</h4>
                <p className="text-sm text-gray-600">Available for wine club members</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#2C5530] mb-2">Group Rates</h4>
                <p className="text-sm text-gray-600">For 10 or more people</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#2C5530] mb-2">Sell Out Notice</h4>
                <p className="text-sm text-gray-600">Some events may sell out</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventsCalendar;