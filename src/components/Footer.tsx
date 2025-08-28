import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
              <div className="text-white text-xs font-libre font-bold">CL</div>
            </div>
            <div>
              <div className="text-xl font-brawler text-white">CASA LARGA</div>
              <div className="text-xs text-gray-300 tracking-widest font-libre">VINEYARDS AND WINERY</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-libre mb-4 text-gold section-header">Quick Links</h3>
            <ul className="space-y-2 font-nunito">
              <li><Link to="/about" className="text-white hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/shop" className="text-white hover:text-gold transition-colors">Shop</Link></li>
              <li><Link to="/visit/hours-location" className="text-white hover:text-gold transition-colors">Visit</Link></li>
              <li><Link to="/events/calendar" className="text-white hover:text-gold transition-colors">Events</Link></li>
              <li><Link to="/private-events" className="text-white hover:text-gold transition-colors">Private Events</Link></li>
              <li><Link to="/contact" className="text-white hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/where-to-buy" className="text-white hover:text-gold transition-colors">Where to Buy</Link></li>
              <li><Link to="/awards" className="text-white hover:text-gold transition-colors">Awards</Link></li>
              <li><Link to="/careers" className="text-white hover:text-gold transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-libre mb-4 text-gold section-header">Hours</h3>
            <div className="space-y-2 font-nunito text-sm">
              <div><strong>Monday-Thursday:</strong> 11:00 a.m. - 6:00 p.m.</div>
              <div><strong>Friday & Saturday:</strong> 10:00 a.m. - 6:00 p.m.</div>
              <div><strong>Sunday:</strong> 12:00 p.m. - 5:00 p.m.</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-libre mb-4 text-gold section-header">Contact Us</h3>
            <div className="space-y-3 font-nunito">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold" />
                <span>(585) 223-4210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold" />
                <span>info@casalarga.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gold mt-1" />
                <div>
                  <div>2287 Turk Hill Road</div>
                  <div>Fairport, NY 14450</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0 font-nunito">
              © 2025 Casa Larga Vineyards. All rights reserved.
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-gold cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-gold cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-300 hover:text-gold cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;