import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-sm border-b border-[#E8DCC0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
              <div className="text-white text-xs font-libre font-bold">CL</div>
            </div>
            <div>
              <div className="text-xl font-brawler text-[#2C1810]">CASA LARGA</div>
              <div className="text-xs text-[#3C2415] tracking-widest font-libre">VINEYARDS AND WINERY</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Visit Us Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-[#3C2415] hover:text-[#D4AF37] transition-colors font-nunito font-medium">
                Visit Us <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg border border-[#E8DCC0] rounded-md py-2 min-w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all">
                <Link to="/visit/hours-location" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">Hours & Location</Link>
                <Link to="/visit/tastings-tours" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">Wine Tasting & Tours</Link>
                <Link to="/visit/faq" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">FAQ</Link>
              </div>
            </div>

            {/* Shop Wines Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-[#3C2415] hover:text-[#D4AF37] transition-colors font-nunito font-medium">
                Shop Wines <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg border border-[#E8DCC0] rounded-md py-2 min-w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all">
                <Link to="/shop" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">Red Wines</Link>
                <Link to="/shop" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">White Wines</Link>
                <Link to="/shop" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">Rosé</Link>
                <Link to="/shop" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">Ice Wines</Link>
                <Link to="/shop" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">Reserve Collection</Link>
                <Link to="/shop" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">Award Winners</Link>
                <Link to="/shop/custom-labels" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">Custom Labels</Link>
              </div>
            </div>

            {/* Winery Events Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-[#3C2415] hover:text-[#D4AF37] transition-colors font-nunito font-medium">
                Winery Events <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg border border-[#E8DCC0] rounded-md py-2 min-w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all">
                <Link to="/events/calendar" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">Events Calendar</Link>
                <Link to="/events/purple-foot-festival" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">Purple Foot Festival</Link>
              </div>
            </div>

            {/* Private Events Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-[#3C2415] hover:text-[#D4AF37] transition-colors font-nunito font-medium">
                Private Events <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg border border-[#E8DCC0] rounded-md py-2 min-w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all">
                <Link to="/private-events" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">All Private Events</Link>
                <Link to="/private-events#weddings" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">Weddings</Link>
                <Link to="/private-events#corporate" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">Corporate Events</Link>
                <Link to="/private-events#special" className="block px-4 py-2 text-sm text-[#3C2415] hover:bg-[#F5F5DC] font-nunito">Special Occasions</Link>
              </div>
            </div>

            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#E8DCC0] py-4">
            <nav className="space-y-4">
              <div>
                <button 
                  onClick={() => toggleDropdown('visit')}
                  className="flex items-center justify-between w-full text-left text-[#3C2415] hover:text-[#D4AF37] font-nunito"
                >
                  Visit Us <ChevronDown className="h-4 w-4" />
                </button>
                {openDropdown === 'visit' && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link to="/visit/hours-location" className="block text-sm text-[#3C2415] font-nunito">Hours & Location</Link>
                    <Link to="/visit/tastings-tours" className="block text-sm text-[#3C2415] font-nunito">Wine Tasting & Tours</Link>
                    <Link to="/visit/faq" className="block text-sm text-[#3C2415] font-nunito">FAQ</Link>
                  </div>
                )}
              </div>
              
              <div>
                <button 
                  onClick={() => toggleDropdown('shop')}
                  className="flex items-center justify-between w-full text-left text-[#3C2415] hover:text-[#D4AF37] font-nunito"
                >
                  Shop Wines <ChevronDown className="h-4 w-4" />
                </button>
                {openDropdown === 'shop' && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link to="/shop" className="block text-sm text-[#3C2415] font-nunito">All Wines</Link>
                    <Link to="/shop/custom-labels" className="block text-sm text-[#3C2415] font-nunito">Custom Labels</Link>
                  </div>
                )}
              </div>

              <div>
                <button 
                  onClick={() => toggleDropdown('events')}
                  className="flex items-center justify-between w-full text-left text-[#3C2415] hover:text-[#D4AF37] font-nunito"
                >
                  Winery Events <ChevronDown className="h-4 w-4" />
                </button>
                {openDropdown === 'events' && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link to="/events/calendar" className="block text-sm text-[#3C2415] font-nunito">Events Calendar</Link>
                    <Link to="/events/purple-foot-festival" className="block text-sm text-[#3C2415] font-nunito">Purple Foot Festival</Link>
                  </div>
                )}
              </div>

              <div>
                <button 
                  onClick={() => toggleDropdown('private')}
                  className="flex items-center justify-between w-full text-left text-[#3C2415] hover:text-[#D4AF37] font-nunito"
                >
                  Private Events <ChevronDown className="h-4 w-4" />
                </button>
                {openDropdown === 'private' && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link to="/private-events" className="block text-sm text-[#3C2415] font-nunito">All Private Events</Link>
                  </div>
                )}
              </div>

              <Link to="/contact" className="block btn-primary text-center">
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;