import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import BookingModal from './BookingModal';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      
      if (videoRef.current) {
        videoRef.current.style.transform = `translate3d(0, ${rate}px, 0) scale(1.1)`;
      }
      
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${rate * 0.5}px, 0)`;
        contentRef.current.style.opacity = `${Math.max(0, 1 - scrolled * 0.002)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookAppointment = () => {
    setIsBookingModalOpen(true);
  };

  const handleViewServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <section id="home" className="relative h-screen overflow-hidden bg-black">
        {/* Background container */}
        <div ref={heroRef} className="absolute inset-0 w-full h-full">
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover min-w-full min-h-full"
            style={{ 
              width: '110%', 
              height: '110%', 
              top: '-5%', 
              left: '-5%',
              transform: 'scale(1.1)'
            }}
            poster="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920"
          >
            <source src="https://cdn.pixabay.com/vimeo/459761340/salon-59315.mp4?width=1280&hash=b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0" type="video/mp4" />
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          
          {/* Fallback Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920)',
              width: '110%',
              height: '110%',
              top: '-5%',
              left: '-5%',
              display: 'none'
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'block';
              if (videoRef.current) {
                videoRef.current.style.display = 'none';
              }
            }}
          ></div>
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
        </div>

        {/* Content - Fully Responsive */}
        <div ref={contentRef} className="relative z-20 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="mb-6 sm:mb-8">
              <img 
                src="/logo_3.png" 
                alt="SJ Unisex Salon Logo" 
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto mx-auto mb-4 sm:mb-6 animate-fadeInUp"
              />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 tracking-wider animate-fadeInUp animation-delay-300">
              SJ UNISEX SALON
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gold mb-3 sm:mb-4 font-light tracking-wide animate-fadeInUp animation-delay-600 italic">
              Makes You Unique...
            </p>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 font-light animate-fadeInUp animation-delay-600">
              Complete Beauty & Wellness • Since 1950
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-900 px-4">
              Complete beauty and wellness services for men, women & children. From traditional haircuts to authentic Ayurvedic treatments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fadeInUp animation-delay-900 px-4">
              <button 
                onClick={handleBookAppointment}
                className="w-full sm:w-auto bg-gold text-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-light tracking-wider hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 rounded-lg"
              >
                BOOK APPOINTMENT
              </button>
              <button 
                onClick={handleViewServices}
                className="w-full sm:w-auto border border-gold text-gold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-light tracking-wider hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-105 rounded-lg"
              >
                VIEW SERVICES
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
          <ChevronDown size={28} className="sm:w-8 sm:h-8 animate-pulse" />
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default Hero;