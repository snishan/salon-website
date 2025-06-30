import React from 'react';
import { X, Phone } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Master Stylist",
      phone: "+1 (555) 123-4567",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Hair Cuts", "Color Services", "Styling"],
      experience: "15+ years"
    },
    {
      name: "Maria Rodriguez", 
      role: "Color Specialist",
      phone: "+1 (555) 234-5678",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Balayage", "Highlights", "Color Correction"],
      experience: "12+ years"
    },
    {
      name: "Emma Chen",
      role: "Spa Therapist", 
      phone: "+1 (555) 345-6789",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Facials", "Spa Treatments", "Wellness"],
      experience: "10+ years"
    }
  ];

  const handleCallNow = (phone: string, name: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header - Responsive */}
        <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 sm:p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white/80 hover:text-white transition-colors duration-300"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          <div className="flex items-center space-x-3 sm:space-x-4 pr-8">
            <img 
              src="/logo_3.png" 
              alt="SJ Unisex Salon Logo" 
              className="h-12 sm:h-16 w-auto"
            />
            <div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-wide">Book Your Appointment</h2>
              <p className="text-gold italic font-light text-sm sm:text-base">Choose your preferred stylist</p>
            </div>
          </div>
        </div>

        {/* Content - Responsive */}
        <div className="p-4 sm:p-6">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-light text-slate-800 mb-2">Select Your Stylist</h3>
            <p className="text-slate-600 text-sm sm:text-base">Call directly to book your appointment with your preferred professional</p>
          </div>

          {/* Team Grid - Responsive */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-b from-slate-50 to-white rounded-xl p-4 sm:p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 group">
                {/* Profile Image */}
                <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gold text-black px-2 py-1 rounded-full text-xs font-medium">
                    {member.experience}
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-3 sm:mb-4">
                  <h4 className="text-lg sm:text-xl font-light text-slate-800 mb-1">{member.name}</h4>
                  <p className="text-gold font-light mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                  
                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1 justify-center mb-3 sm:mb-4">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-slate-200 text-slate-700 px-2 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-slate-600">
                    <Phone size={14} className="sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-medium">{member.phone}</span>
                  </div>
                  
                  {/* Call Button */}
                  <button
                    onClick={() => handleCallNow(member.phone, member.name)}
                    className="w-full bg-gold text-black py-2 sm:py-3 rounded-lg font-medium tracking-wide hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Phone size={16} className="sm:w-5 sm:h-5" />
                    <span>CALL NOW</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note - Responsive */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-slate-500 text-xs sm:text-sm">
              Can't decide? Call our main line at <span className="font-medium text-gold">+1 (555) 123-4567</span> for assistance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;