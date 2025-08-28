import React, { useState } from 'react';
import Hero from '../../components/Hero';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const faqCategories: FAQCategory[] = [
    {
      title: "Visiting Questions",
      items: [
        {
          question: "Do I need a reservation for wine tasting?",
          answer: "Reservations are recommended, especially on weekends and during peak season. Walk-ins are welcome based on availability."
        },
        {
          question: "Are children allowed at the winery?",
          answer: "Yes, children are welcome. We offer grape juice tastings for younger guests and have family-friendly outdoor spaces."
        },
        {
          question: "Is the winery wheelchair accessible?",
          answer: "Yes, our tasting room and main facilities are fully wheelchair accessible."
        },
        {
          question: "Can I bring my dog?",
          answer: "Dogs that are not service animals are not allowed on the premises, including outdoor areas."
        },
        {
          question: "What should I wear for my visit?",
          answer: "Casual attire is perfectly fine. If you're taking a vineyard tour, we recommend comfortable walking shoes."
        }
      ]
    },
    {
      title: "Wine Questions",
      items: [
        {
          question: "Do you ship wine?",
          answer: "Yes, we ship to 40 states. Shipping costs vary by location, with a flat rate of $20 for most destinations."
        },
        {
          question: "Do you have a wine club?",
          answer: "Yes, our wine club offers quarterly shipments of our finest wines with member-exclusive benefits and discounts."
        },
        {
          question: "What makes Casa Larga wines special?",
          answer: "Our unique location north of the traditional Finger Lakes region, combined with our Italian winemaking heritage and 50 years of experience, creates wines with distinctive character and exceptional quality."
        }
      ]
    },
    {
      title: "Event Questions",
      items: [
        {
          question: "Can I host a private event at Casa Larga?",
          answer: "Absolutely! We specialize in weddings, corporate events, and special celebrations. Contact our events team for availability and pricing."
        },
        {
          question: "What's included in your event packages?",
          answer: "Our packages include venue rental, tables, chairs, and basic setup. Catering, bar service, and additional amenities can be customized to your needs."
        }
      ]
    },
    {
      title: "Wine on Wheels Questions",
      items: [
        {
          question: "What is Wine on Wheels?",
          answer: "Our mobile bar service brings Casa Larga wines and professional bartending to your location for any event."
        },
        {
          question: "How far do you travel for Wine on Wheels?",
          answer: "We typically serve within a 50-mile radius of the winery, but special arrangements can be made for destination events."
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        subtitle="FREQUENTLY ASKED QUESTIONS"
        title="Everything You Need to Know About Visiting Casa Larga"
        backgroundImage="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
        height="full"
      >
        <button className="btn-primary text-lg font-nunito font-semibold">
          PLAN YOUR VISIT
        </button>
      </Hero>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {faqCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-12">
            <h2 className="section-header mb-6">{category.title.toUpperCase()}</h2>
            <div className="space-y-4">
              {category.items.map((item, itemIndex) => {
                const itemId = `${categoryIndex}-${itemIndex}`;
                const isOpen = openItems.includes(itemId);
                
                return (
                  <div key={itemIndex} className="bg-white border border-cream rounded-lg shadow-sm">
                    <button
                      onClick={() => toggleItem(itemId)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-warm-beige transition-colors"
                    >
                      <span className="font-brawler text-darker-brown">{item.question}</span>
                      <ChevronDown 
                        className={`h-5 w-5 text-dark-brown transform transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4">
                        <p className="text-dark-brown font-nunito leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default FAQ;