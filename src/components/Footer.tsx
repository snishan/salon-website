import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Footer Grid - Responsive */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <img 
                  src="/logo_3.png" 
                  alt="SJ Unisex Salon Logo" 
                  className="h-12 sm:h-16 w-auto"
                />
                <div>
                  <h3 className="text-lg sm:text-2xl font-light tracking-wider">SJ UNISEX SALON</h3>
                  <p className="text-gold text-xs sm:text-sm">Since 1950</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Complete unisex salon services for men, women & children. Traditional beauty meets modern wellness.
              </p>
              <p className="text-gold italic font-light text-sm sm:text-base">Makes You Unique...</p>
            </div>
            
            {/* Hair Services */}
            <div>
              <h4 className="text-base sm:text-lg font-light mb-3 sm:mb-4 tracking-wide">Hair Services</h4>
              <ul className="space-y-1 sm:space-y-2 text-white/70 text-xs sm:text-sm">
                <li>Haircuts & Styling</li>
                <li>Hair Coloring</li>
                <li>Hair Treatments</li>
                <li>Beard Trim & Shave</li>
              </ul>
            </div>
            
            {/* Beauty & Wellness */}
            <div>
              <h4 className="text-base sm:text-lg font-light mb-3 sm:mb-4 tracking-wide">Beauty & Wellness</h4>
              <ul className="space-y-1 sm:space-y-2 text-white/70 text-xs sm:text-sm">
                <li>Nail Services</li>
                <li>Facial Treatments</li>
                <li>Makeup & Styling</li>
                <li>Ayurvedic Treatments</li>
              </ul>
            </div>
            
            {/* Connect Section */}
            <div>
              <h4 className="text-base sm:text-lg font-light mb-3 sm:mb-4 tracking-wide">Connect With Us</h4>
              <div className="flex space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <Instagram className="text-white/70 hover:text-gold cursor-pointer transition-colors duration-300" size={20} />
                <Facebook className="text-white/70 hover:text-gold cursor-pointer transition-colors duration-300" size={20} />
                <Twitter className="text-white/70 hover:text-gold cursor-pointer transition-colors duration-300" size={20} />
                <Youtube className="text-white/70 hover:text-gold cursor-pointer transition-colors duration-300" size={20} />
              </div>
              <div className="text-white/70 text-xs sm:text-sm">
                <p>123 Heritage Avenue</p>
                <p>Beverly Hills, CA 90210</p>
                <p className="mt-2">+1 (555) 123-4567</p>
                <p className="text-gold mt-2 font-medium">Unisex Salon</p>
              </div>
            </div>
          </div>
          
          {/* Copyright - Responsive */}
          <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
            <p className="text-white/60 font-light text-xs sm:text-sm">
              © {new Date().getFullYear()} SJ Unisex Salon. All rights reserved. | Unisex Salon Since 1950 | Makes You Unique...
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;