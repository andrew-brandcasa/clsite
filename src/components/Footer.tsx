import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C5530] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif mb-4 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-[#D4AF37] transition-colors">Careers</Link></li>
              <li><Link to="/shop" className="hover:text-[#D4AF37] transition-colors">Shop</Link></li>
              <li><Link to="/directions" className="hover:text-[#D4AF37] transition-colors">Directions</Link></li>
              <li><Link to="/terms" className="hover:text-[#D4AF37] transition-colors">Terms & Policies</Link></li>
              <li><Link to="/trade" className="hover:text-[#D4AF37] transition-colors">Trade</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-serif mb-4 text-[#D4AF37]">More</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link to="/where-to-buy" className="hover:text-[#D4AF37] transition-colors">Where to Buy</Link></li>
              <li><Link to="/awards" className="hover:text-[#D4AF37] transition-colors">Awards & Recognition</Link></li>
              <li><Link to="/press" className="hover:text-[#D4AF37] transition-colors">Press & Media</Link></li>
              <li><Link to="/shipping" className="hover:text-[#D4AF37] transition-colors">Shipping Information</Link></li>
              <li><Link to="/returns" className="hover:text-[#D4AF37] transition-colors">Returns & Refunds</Link></li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="text-lg font-serif mb-4 text-[#D4AF37]">Legal & Info</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/accessibility" className="hover:text-[#D4AF37] transition-colors">Accessibility</Link></li>
              <li><Link to="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D4AF37] transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif mb-4 text-[#D4AF37]">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#D4AF37]" />
                <span>(585) 223-4210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#D4AF37]" />
                <span>info@casalarga.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#D4AF37] mt-1" />
                <div>
                  <div>2287 Turk Hill Road</div>
                  <div>Fairport, NY 14450</div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6">
              <h4 className="font-semibold text-[#D4AF37] mb-2">Wine Shop + Tasting Room Hours</h4>
              <div className="text-sm space-y-1">
                <div><strong>Monday-Thursday:</strong> 11:00 a.m. - 6:00 p.m.</div>
                <div><strong>Friday & Saturday:</strong> 10:00 a.m. - 6:00 p.m.</div>
                <div><strong>Sunday:</strong> 12:00 p.m. - 5:00 p.m.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2025. All rights reserved.
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-[#D4AF37] cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-[#D4AF37] cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-300 hover:text-[#D4AF37] cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-[#D4AF37] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;