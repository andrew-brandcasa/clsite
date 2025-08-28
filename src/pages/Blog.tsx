import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "Harvest 2024: A Season of Excellence",
      excerpt: "This year's harvest brought exceptional fruit quality and perfect weather conditions. Read about our winemaking team's experience and what to expect from the 2024 vintage.",
      date: "October 15, 2024",
      author: "Casa Larga Team",
      category: "Vineyard Life",
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Behind the Scenes: Crafting Our Ice Wine",
      excerpt: "Discover the meticulous process behind our award-winning ice wine, from waiting for the perfect freeze to the delicate pressing of frozen grapes.",
      date: "September 28, 2024",
      author: "Master Winemaker",
      category: "Winemaking",
      image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Purple Foot Festival Recap: A Day of Celebration",
      excerpt: "Relive the highlights from our annual Purple Foot Festival, featuring photos, videos, and memories from this beloved harvest celebration.",
      date: "September 20, 2024", 
      author: "Events Team",
      category: "Events",
      image: "https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Sustainable Practices in the Vineyard",
      excerpt: "Learn about our commitment to environmental stewardship and the sustainable farming practices we use to protect our land for future generations.",
      date: "August 30, 2024",
      author: "Vineyard Manager",
      category: "Sustainability",
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Wine and Food Pairing: Summer Entertaining",
      excerpt: "Our sommelier shares expert tips for pairing Casa Larga wines with summer dishes, perfect for your next outdoor gathering.",
      date: "July 15, 2024",
      author: "Casa Larga Sommelier",
      category: "Wine Education",
      image: "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "The Art of Barrel Aging",
      excerpt: "Explore how we use French oak barrels to develop complexity and character in our premium red wines.",
      date: "June 22, 2024",
      author: "Cellar Master",
      category: "Winemaking",
      image: "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg",
      readTime: "5 min read"
    }
  ];

  const categories = ['All', 'Vineyard Life', 'Winemaking', 'Events', 'Wine Education', 'Sustainability', 'Community'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div>
      <Hero 
        title="From the Vineyard"
        subtitle="Stories, Updates, and Insights from Casa Larga"
        backgroundImage="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
        height="medium"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Stay connected with Casa Larga through our blog, where we share stories from the vineyard, 
            winemaking insights, event highlights, and seasonal updates. Discover what's happening 
            behind the scenes at our family winery.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-[#2C5530] text-white'
                  : 'border border-[#2C5530] text-[#2C5530] hover:bg-[#2C5530] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <span className="bg-[#D4AF37] text-white px-2 py-1 rounded text-xs font-medium">
                      FEATURED
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{filteredPosts[0].date}</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      <span>{filteredPosts[0].category}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-serif text-[#2C5530] mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{filteredPosts[0].excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <span>{filteredPosts[0].author}</span>
                      <span>•</span>
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                    <button className="text-[#D4AF37] hover:text-[#c29c2a] transition-colors font-medium flex items-center">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#2C5530] text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-serif text-[#2C5530] mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <button className="text-[#D4AF37] hover:text-[#c29c2a] transition-colors text-sm font-medium flex items-center">
                      Read More <ArrowRight className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="bg-[#2C5530] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif mb-4">Subscribe to Our Blog</h2>
            <p className="text-gray-200 mb-6">
              Never miss a post! Subscribe to receive new blog posts directly in your inbox.
            </p>
            
            <div className="max-w-md mx-auto flex space-x-3">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <button className="bg-[#D4AF37] text-white px-6 py-2 rounded hover:bg-[#c29c2a] transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Share Your Story */}
        <section>
          <div className="text-center bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-serif text-[#2C5530] mb-4">Share Your Story</h3>
            <p className="text-gray-600 mb-4">
              Have a Casa Larga memory or story to share? We'd love to hear from you.
            </p>
            <button className="bg-[#D4AF37] text-white px-6 py-2 rounded hover:bg-[#c29c2a] transition-colors font-medium">
              Contact Us
            </button>
            <p className="text-sm text-gray-500 mt-2">blog@casalarga.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;