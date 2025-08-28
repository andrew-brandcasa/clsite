import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Camera, Download, Share2 } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryCategories = [
    {
      name: "Vineyard & Grounds",
      description: "Experience the natural beauty of our 35-acre vineyard through the seasons. From spring bud break to autumn harvest, witness the annual cycle of the vine.",
      photos: [
        { url: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg", caption: "Sunset over the vineyard" },
        { url: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg", caption: "Spring vineyard rows" },
        { url: "https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg", caption: "Harvest season beauty" },
        { url: "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg", caption: "Winter vineyard" }
      ]
    },
    {
      name: "Winemaking Process", 
      description: "Go behind the scenes to see how our wines are crafted, from grape to bottle. Discover the artistry and science of winemaking at Casa Larga.",
      photos: [
        { url: "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg", caption: "Oak barrel aging" },
        { url: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg", caption: "Grape sorting" },
        { url: "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg", caption: "Fermentation tanks" },
        { url: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg", caption: "Bottling process" }
      ]
    },
    {
      name: "Events & Celebrations",
      description: "Relive the joy and excitement of our events, from intimate wine dinners to festive celebrations like the Purple Foot Festival.",
      photos: [
        { url: "https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg", caption: "Purple Foot Festival" },
        { url: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg", caption: "Patio Party Series" },
        { url: "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg", caption: "Wine dinner event" },
        { url: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg", caption: "Live music night" }
      ]
    },
    {
      name: "Private Events",
      description: "See how we transform our spaces for weddings, corporate events, and special occasions. Get inspired for your own celebration.",
      photos: [
        { url: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg", caption: "Wedding ceremony" },
        { url: "https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg", caption: "Corporate event" },
        { url: "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg", caption: "Reception setup" },
        { url: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg", caption: "Special occasion" }
      ]
    }
  ];

  const categories = ['All', ...galleryCategories.map(cat => cat.name)];

  const getFilteredPhotos = () => {
    if (selectedCategory === 'All') {
      return galleryCategories.flatMap(cat => cat.photos.map(photo => ({ ...photo, category: cat.name })));
    }
    const selectedCat = galleryCategories.find(cat => cat.name === selectedCategory);
    return selectedCat ? selectedCat.photos.map(photo => ({ ...photo, category: selectedCat.name })) : [];
  };

  return (
    <div>
      <Hero 
        title="Photo Gallery"
        subtitle="Capturing the Beauty of Casa Larga"
        backgroundImage="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg"
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <Camera className="h-16 w-16 text-[#D4AF37] mx-auto mb-6" />
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Explore the beauty of Casa Larga through our photo gallery. From stunning vineyard vistas 
            to memorable events, these images capture the essence of our winery and the experiences we create.
          </p>
        </div>

        {/* Category Filter */}
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

        {/* Category Descriptions */}
        {selectedCategory !== 'All' && (
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-serif text-[#2C5530] mb-4">{selectedCategory}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {galleryCategories.find(cat => cat.name === selectedCategory)?.description}
            </p>
          </div>
        )}

        {/* Photo Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredPhotos().map((photo, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={photo.url} 
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex space-x-2">
                        <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-colors">
                          <Share2 className="h-4 w-4 text-gray-700" />
                        </button>
                        <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-colors">
                          <Download className="h-4 w-4 text-gray-700" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-sm text-gray-600 text-center">{photo.caption}</p>
                    {selectedCategory === 'All' && (
                      <p className="text-xs text-[#D4AF37] text-center mt-1">{photo.category}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photography Guidelines */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-serif text-[#2C5530] mb-6 text-center">Photography Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-[#2C5530] mb-2">Public Areas Welcome</h4>
                <p className="text-sm text-gray-600">Photography is welcome throughout our public areas</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#2C5530] mb-2">Respectful Photography</h4>
                <p className="text-sm text-gray-600">Please be respectful of other guests and private events</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#2C5530] mb-2">Commercial Use</h4>
                <p className="text-sm text-gray-600">Commercial photography requires advance permission</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#2C5530] mb-2">Drone Policy</h4>
                <p className="text-sm text-gray-600">Drone photography is not permitted</p>
              </div>
            </div>
          </div>
        </section>

        {/* Media Access and User Generated Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#2C5530] text-white rounded-lg p-8">
            <h3 className="text-xl font-serif mb-4">Media Access</h3>
            <p className="text-gray-200 mb-6">
              Media professionals and partners can access high-resolution images for promotional use.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-sm">Contact: press@casalarga.com</p>
              <p className="text-sm">Phone: (585) 223-4210</p>
            </div>
            <button className="bg-[#D4AF37] text-white px-6 py-2 rounded hover:bg-[#c29c2a] transition-colors">
              Request Media Access
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-xl font-serif text-[#2C5530] mb-4">Share Your Photos</h3>
            <p className="text-gray-600 mb-6">
              Visited Casa Larga? Share your photos with us on social media using 
              <span className="font-semibold text-[#2C5530]"> #CasaLargaMemories</span> for a chance 
              to be featured in our gallery.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-1"></div>
                <p className="text-xs text-gray-500">Facebook</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-pink-600 rounded-full mx-auto mb-1"></div>
                <p className="text-xs text-gray-500">Instagram</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-black rounded-full mx-auto mb-1"></div>
                <p className="text-xs text-gray-500">Twitter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;