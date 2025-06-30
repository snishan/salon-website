import React, { useEffect, useState } from 'react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Determine which section is currently active
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }

      // Determine background color based on current section
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      if (currentSection) {
        const sectionId = currentSection.id;
        // Dark backgrounds: home, services, contact
        // Light backgrounds: about, team
        const darkSections = ['home', 'services', 'contact'];
        setIsDarkBackground(darkSections.includes(sectionId));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="fixed right-3 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className={`backdrop-blur-sm rounded-full transition-all duration-300 ${
        isDarkBackground 
          ? 'bg-white/10 border border-white/20' 
          : 'bg-black/10 border border-black/20'
      }`}>
        {/* Very compact for tablet, normal for desktop */}
        <div className="flex flex-col space-y-1.5 md:space-y-2 lg:space-y-3 p-1.5 md:p-2 lg:p-3">
          {navItems.map((item) => (
            <div key={item.id} className="group relative flex items-center justify-end">
              {/* Label - Much smaller on tablet */}
              <span className={`absolute whitespace-nowrap px-2 py-0.5 md:py-1 rounded-full text-xs font-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0 ${
                isDarkBackground 
                  ? 'bg-white/90 text-black right-5 md:right-7 lg:right-9' 
                  : 'bg-black/90 text-white right-5 md:right-7 lg:right-9'
              }`}>
                {item.label}
              </span>
              
              {/* Dot - Much smaller on tablet */}
              <button
                onClick={() => handleNavClick(item.id)}
                className={`rounded-full border transition-all duration-300 transform hover:scale-125 ${
                  activeSection === item.id
                    ? 'bg-gold border-gold scale-110 w-1.5 h-1.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 border-2'
                    : isDarkBackground
                    ? 'border-white/60 hover:border-gold hover:bg-gold/20 w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 border-1 md:border-2'
                    : 'border-black/60 hover:border-gold hover:bg-gold/20 w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 border-1 md:border-2'
                }`}
                aria-label={`Navigate to ${item.label}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;