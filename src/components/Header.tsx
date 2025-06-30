import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section - Responsive */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/logo_3.png" 
              alt="SJ Unisex Salon Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
            <div className="text-white">
              <div className="text-sm sm:text-lg md:text-xl font-bold tracking-wider">SJ UNISEX SALON</div>
              <div className="text-xs text-gold font-light">Since 1950</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-300 font-light tracking-wide text-sm xl:text-base"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Phone */}
          <div className="hidden lg:flex items-center space-x-3 text-white/90">
            <Phone size={16} className="xl:w-5 xl:h-5" />
            <span className="font-light text-sm xl:text-base">+1 (555) 123-4567</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white z-50 relative"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-0 bg-black/95 backdrop-blur-md z-40 flex flex-col justify-center">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-2xl text-white/90 hover:text-gold transition-all duration-300 font-light tracking-wide py-3 border-b border-white/10"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-6 flex items-center space-x-3 text-white/80">
                <Phone size={20} />
                <span className="text-lg">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;