import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, ShoppingCart, Search, User, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container-custom">
          <span>Design your own custom Casa Larga wine labels. </span>
          <Link to="/shop/custom-labels" className="text-gold hover:text-deep-gold font-medium">
            Learn More
          </Link>
        </div>
      </div>

      {/* Navigation Overlay */}
      <div className="navigation-overlay">
        <div className="container-custom relative">
          {/* Social Media Icons - Left */}
          <div className="social-icons">
            <Facebook className="icon-white cursor-pointer" />
            <Instagram className="icon-white cursor-pointer" />
            <Youtube className="icon-white cursor-pointer" />
            <Twitter className="icon-white cursor-pointer" />
          </div>

          {/* Logo Section - Center */}
          <div className="logo-section">
            <Link to="/">
              <div className="logo-main">CASA LARGA</div>
              <div className="logo-tagline">VINEYARDS AND WINERY</div>
            </Link>
          </div>

          {/* Main Navigation - Center */}
          <nav className="main-navigation">
            {/* Visit Us Dropdown */}
            <div className="relative group">
              <button className="nav-item flex items-center hover:text-gold transition-colors">
                Visit Us <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg border border-gray-200 rounded-md py-2 min-w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-50">
                <Link to="/visit/hours-location" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Hours & Location</Link>
                <Link to="/visit/tastings-tours" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Wine Tasting & Tours</Link>
                <Link to="/visit/faq" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">FAQ</Link>
                <Link to="/directions" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Directions</Link>
              </div>
            </div>

            {/* Shop Wines Dropdown */}
            <div className="relative group">
              <button className="nav-item flex items-center hover:text-gold transition-colors">
                Shop Wines <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg border border-gray-200 rounded-md py-2 min-w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-50">
                <Link to="/shop" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">All Wines</Link>
                <Link to="/shop" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Red Wines</Link>
                <Link to="/shop" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">White Wines</Link>
                <Link to="/shop" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Rosé</Link>
                <Link to="/shop" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Ice Wines</Link>
                <Link to="/shop" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Reserve Collection</Link>
                <Link to="/shop/custom-labels" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Custom Labels</Link>
              </div>
            </div>

            {/* Winery Events Dropdown */}
            <div className="relative group">
              <button className="nav-item flex items-center hover:text-gold transition-colors">
                Winery Events <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg border border-gray-200 rounded-md py-2 min-w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-50">
                <Link to="/events/calendar" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Events Calendar</Link>
                <Link to="/events/purple-foot-festival" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Purple Foot Festival</Link>
                <Link to="/events/patio-party-series" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Patio Party Series</Link>
                <Link to="/events/wine-dinners" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Wine Dinners</Link>
                <Link to="/blog" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Blog</Link>
                <Link to="/gallery" className="block px-4 py-2 text-sm text-text-primary hover:bg-cream-light font-nunito">Photo Gallery</Link>
              </div>
            </div>

            {/* Private Events */}
            <Link to="/private-events" className="nav-item hover:text-gold transition-colors">
              Private Events
            </Link>
          </nav>

          {/* User Interface Icons - Right */}
          <div className="user-icons">
            <User className="icon-white cursor-pointer" />
            <div className="relative">
              <ShoppingCart className="icon-white cursor-pointer" />
              <span className="cart-counter">2</span>
            </div>
            <Search className="icon-white cursor-pointer" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <button 
            className="mobile-close"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
          
          <nav className="mt-8">
            <div className="space-y-4">
              <div>
                <button 
                  onClick={() => toggleDropdown('visit')}
                  className="mobile-nav-item flex items-center justify-between w-full"
                >
                  Visit Us <ChevronDown className="h-4 w-4" />
                </button>
                {openDropdown === 'visit' && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link to="/visit/hours-location" className="block text-sm text-gray-300 font-nunito py-2" onClick={() => setIsMenuOpen(false)}>Hours & Location</Link>
                    <Link to="/visit/tastings-tours" className="block text-sm text-gray-300 font-nunito py-2" onClick={() => setIsMenuOpen(false)}>Wine Tasting & Tours</Link>
                    <Link to="/visit/faq" className="block text-sm text-gray-300 font-nunito py-2" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
                  </div>
                )}
              </div>
              
              <div>
                <button 
                  onClick={() => toggleDropdown('shop')}
                  className="mobile-nav-item flex items-center justify-between w-full"
                >
                  Shop Wines <ChevronDown className="h-4 w-4" />
                </button>
                {openDropdown === 'shop' && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link to="/shop" className="block text-sm text-gray-300 font-nunito py-2" onClick={() => setIsMenuOpen(false)}>All Wines</Link>
                    <Link to="/shop/custom-labels" className="block text-sm text-gray-300 font-nunito py-2" onClick={() => setIsMenuOpen(false)}>Custom Labels</Link>
                  </div>
                )}
              </div>

              <div>
                <button 
                  onClick={() => toggleDropdown('events')}
                  className="mobile-nav-item flex items-center justify-between w-full"
                >
                  Winery Events <ChevronDown className="h-4 w-4" />
                </button>
                {openDropdown === 'events' && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link to="/events/calendar" className="block text-sm text-gray-300 font-nunito py-2" onClick={() => setIsMenuOpen(false)}>Events Calendar</Link>
                    <Link to="/events/purple-foot-festival" className="block text-sm text-gray-300 font-nunito py-2" onClick={() => setIsMenuOpen(false)}>Purple Foot Festival</Link>
                  </div>
                )}
              </div>

              <Link to="/private-events" className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>
                Private Events
              </Link>

              <Link to="/contact" className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;