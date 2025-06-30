import React, { useState } from 'react';
import { Scissors, Palette, Sparkles, Heart, User, Flower2, ArrowRight, Star, Award, X, Plus } from 'lucide-react';
import BookingModal from './BookingModal';

interface ServiceDetailsModalProps {
  service: any;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({ service, isOpen, onClose, onBookNow }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-slate-900 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden border border-gold/30 flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-slate-800 to-slate-900 p-4 sm:p-6 md:p-8 border-b border-gold/20">
          <button
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white/80 hover:text-gold transition-colors duration-300 p-1 sm:p-2"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          <div className="flex items-center space-x-3 sm:space-x-4 pr-10 sm:pr-12">
            <div className="bg-gold/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4">
              <div className="text-gold">
                {React.cloneElement(service.icon, { 
                  size: window.innerWidth < 640 ? 24 : window.innerWidth < 768 ? 32 : 40 
                })}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-wide truncate">
                {service.title}
              </h2>
              <p className="text-gold text-sm sm:text-base md:text-lg font-light truncate">
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 md:p-8">
            {/* Service Info */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 p-3 sm:p-4 bg-black/40 rounded-xl sm:rounded-2xl">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="sm:w-4 sm:h-4 text-gold fill-current" />
                ))}
                <span className="text-white/60 ml-2 text-xs sm:text-sm">(4.9/5)</span>
              </div>
              <div className="bg-gold text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                {service.services.length} Services Available
              </div>
            </div>

            {/* All Services */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-light text-white mb-4 sm:mb-6 flex items-center space-x-2">
                <Star className="text-gold" size={20} className="sm:w-6 sm:h-6" />
                <span>All Services</span>
              </h3>
              
              <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                {service.services.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-black/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 hover:border-gold/50 transition-all duration-300 hover:bg-black/80 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2 flex-wrap">
                          <h4 className="text-white font-semibold text-base sm:text-lg truncate">
                            {item.name}
                          </h4>
                          {item.popular && (
                            <span className="bg-gold text-black px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 flex-shrink-0">
                              <Star size={10} fill="currentColor" />
                              <span>Popular</span>
                            </span>
                          )}
                        </div>
                        <p className="text-white/70 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                          {item.desc}
                        </p>
                        <div className="flex items-center justify-end">
                          <button
                            onClick={onBookNow}
                            className="bg-gold/20 hover:bg-gold hover:text-black text-gold px-3 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 group-hover:scale-105 flex-shrink-0"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/20">
              <button
                onClick={onBookNow}
                className="flex-1 bg-gold text-black py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3"
              >
                <span>Book Appointment</span>
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={onClose}
                className="px-6 sm:px-8 py-3 sm:py-4 border border-gold/50 text-gold rounded-xl sm:rounded-2xl hover:bg-gold hover:text-black transition-all duration-300 font-semibold text-base sm:text-lg"
              >
                Close
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-white/60 text-xs sm:text-sm">
                Need help choosing? Call us at{' '}
                <span className="text-gold font-semibold">+1 (555) 123-4567</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const services = [
    {
      id: 'hair',
      icon: <Scissors size={32} />,
      title: "Hair Services",
      subtitle: "Expert styling for every look and occasion",
      image: "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=800",
      services: [
        { name: "Haircuts & Trims", desc: "Professional cuts for men, women & kids", popular: true },
        { name: "Hair Coloring", desc: "Full color, highlights, balayage", popular: true },
        { name: "Hair Styling", desc: "Blow dry, curling, straightening", popular: false },
        { name: "Hair Treatments", desc: "Keratin, smoothing, deep conditioning", popular: false },
        { name: "Beard Trim & Shave", desc: "Traditional grooming for men", popular: true }
      ]
    },
    {
      id: 'nails',
      icon: <Sparkles size={32} />,
      title: "Nail Services",
      subtitle: "Perfect nails for every special occasion",
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800",
      services: [
        { name: "Manicure", desc: "Basic, spa, gel, acrylic options", popular: true },
        { name: "Pedicure", desc: "Relaxing foot care treatments", popular: true },
        { name: "Nail Art", desc: "Creative designs and patterns", popular: false },
        { name: "Nail Extensions", desc: "Length and strength enhancement", popular: false }
      ]
    },
    {
      id: 'skin',
      icon: <User size={32} />,
      title: "Skin & Face Care",
      subtitle: "Radiant skin and natural beauty treatments",
      image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800",
      services: [
        { name: "Facials", desc: "Clean-up, glow, anti-aging treatments", popular: true },
        { name: "Bleaching", desc: "Face and body lightening treatments", popular: false },
        { name: "De-tan Treatments", desc: "Restore natural skin tone", popular: true },
        { name: "Face Cleanup", desc: "Deep pore cleansing therapy", popular: false }
      ]
    },
    {
      id: 'makeup',
      icon: <Palette size={32} />,
      title: "Makeup & Styling",
      subtitle: "Look stunning for every special moment",
      image: "https://images.pexels.com/photos/3993440/pexels-photo-3993440.jpeg?auto=compress&cs=tinysrgb&w=800",
      services: [
        { name: "Party Makeup", desc: "Glamorous looks for celebrations", popular: true },
        { name: "Bridal Makeup", desc: "Your perfect wedding day look", popular: true },
        { name: "Event Makeup", desc: "Engagement and special occasions", popular: false },
        { name: "Hair Styling", desc: "Professional event hairdos", popular: false }
      ]
    },
    {
      id: 'ayurvedic',
      icon: <Flower2 size={32} />,
      title: "Ayurvedic Treatments",
      subtitle: "Ancient wisdom meets modern wellness care",
      image: "https://images.pexels.com/photos/3985357/pexels-photo-3985357.jpeg?auto=compress&cs=tinysrgb&w=800",
      services: [
        { name: "Shirodhara", desc: "Oil therapy for deep relaxation", popular: true },
        { name: "Abhyanga", desc: "Full body herbal oil massage", popular: true },
        { name: "Mukha Lepam", desc: "Ayurvedic face treatments", popular: false },
        { name: "Hair Oil Massage", desc: "Herbal treatments for hair health", popular: true }
      ]
    },
    {
      id: 'wellness',
      icon: <Heart size={32} />,
      title: "Wellness & Spa",
      subtitle: "Relax, rejuvenate and restore inner balance",
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800",
      services: [
        { name: "Body Massages", desc: "Relaxing therapeutic treatments", popular: true },
        { name: "Aromatherapy", desc: "Essential oil healing sessions", popular: true },
        { name: "Hot Stone Therapy", desc: "Deep muscle relaxation", popular: false },
        { name: "Reflexology", desc: "Pressure point healing", popular: false }
      ]
    }
  ];

  const handleBookNow = () => {
    setIsServiceModalOpen(false);
    setIsBookingModalOpen(true);
  };

  const handleViewDetails = (service: any) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  return (
    <>
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold rounded-full blur-3xl animate-pulse animation-delay-300"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gold rounded-full blur-2xl animate-pulse animation-delay-600"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header - Fully Responsive */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 sm:mb-6 tracking-wide">
                Our Services
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed px-4">
                Complete unisex salon services combining traditional beauty treatments with authentic Ayurvedic wellness therapies
              </p>
            </div>

            {/* Services Grid - Equal Height Cards */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {services.map((service, index) => (
                <div key={service.id} className="group h-full">
                  {/* Main Service Card - Fixed Height Structure */}
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2 h-full flex flex-col">
                    
                    {/* Image Section - Fixed Height */}
                    <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden flex-shrink-0">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Subtle dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
                      {/* Floating Icon - Consistent Position */}
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-xl p-3 group-hover:bg-gold/20 transition-all duration-500">
                        <div className="text-white group-hover:text-gold transition-colors duration-500">
                          {React.cloneElement(service.icon, { size: 24 })}
                        </div>
                      </div>

                      {/* Service Count - Consistent Position */}
                      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs border border-gold/30">
                        {service.services.length} Services
                      </div>
                    </div>

                    {/* Content Section - Flexible Height with Consistent Layout */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Title Section - Fixed Height */}
                      <div className="mb-4 min-h-[80px] flex flex-col justify-center">
                        <h3 className="text-xl sm:text-2xl font-light text-white mb-2 tracking-wide text-center leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-white/70 text-sm sm:text-base text-center leading-relaxed">
                          {service.subtitle}
                        </p>
                      </div>
                      
                      {/* Rating Section - Fixed Height */}
                      <div className="flex items-center justify-center mb-4 h-6">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className="text-gold fill-current" />
                          ))}
                          <span className="text-white/60 ml-2 text-xs">(4.9/5)</span>
                        </div>
                      </div>

                      {/* Popular Services Preview - Fixed Height */}
                      <div className="mb-6 min-h-[100px] flex flex-col">
                        <h4 className="text-xs font-medium text-gold mb-3 uppercase tracking-wide text-center">
                          Popular Services
                        </h4>
                        <div className="space-y-2 flex-grow flex flex-col justify-center">
                          {service.services.filter(s => s.popular).slice(0, 3).map((item, idx) => (
                            <div key={idx} className="text-center">
                              <span className="text-white/80 text-sm">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons - Fixed at Bottom */}
                      <div className="space-y-3 mt-auto">
                        <button
                          onClick={handleBookNow}
                          className="w-full bg-gold text-black py-3 rounded-xl font-semibold text-sm hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                        >
                          <span>Book Appointment</span>
                          <ArrowRight size={16} />
                        </button>
                        
                        <button 
                          onClick={() => handleViewDetails(service)}
                          className="w-full border border-gold/50 text-gold py-3 rounded-xl hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                        >
                          <span>View All Services</span>
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action - Responsive */}
            <div className="text-center mt-12 sm:mt-16 md:mt-20">
              <div className="bg-gradient-to-r from-gold/20 to-yellow-400/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gold/30">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
                  <Award className="text-gold" size={28} />
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white text-center">
                    75+ Years of Excellence
                  </h3>
                </div>
                <p className="text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
                  Experience the perfect blend of traditional beauty and modern wellness. Our expert team is ready to make you unique.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <button 
                    onClick={handleBookNow}
                    className="w-full sm:w-auto bg-gold text-black px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold tracking-wide hover:bg-gold/90 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl sm:rounded-2xl flex items-center justify-center space-x-2 sm:space-x-3"
                  >
                    <span>Book Your Appointment</span>
                    <ArrowRight size={18} />
                  </button>
                  <div className="text-white/60 text-xs sm:text-sm text-center">
                    Or call us at <span className="text-gold font-semibold">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <ServiceDetailsModal
        service={selectedService}
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        onBookNow={handleBookNow}
      />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default Services;