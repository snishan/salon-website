import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Phone, Mail, Award, Star, Calendar } from 'lucide-react';

const Team: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const team = [
    {
      name: "Sarah Johnson",
      role: "Master Stylist & Creative Director",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "15+ years of experience in luxury hair styling and color artistry",
      specialties: ["Hair Cuts", "Color Correction", "Bridal Styling"],
      experience: "15+ Years",
      rating: 4.9,
      phone: "+1 (555) 123-4567",
      email: "sarah@sjunisexsalon.com",
      social: {
        instagram: "@sarahjohnson_stylist",
        facebook: "Sarah Johnson Hair",
        twitter: "@sarahstylist"
      },
      achievements: ["Master Colorist Certified", "Bridal Specialist", "Salon Owner"]
    },
    {
      name: "Maria Rodriguez",
      role: "Senior Color Specialist",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Expert in balayage, custom color matching and hair transformation",
      specialties: ["Balayage", "Highlights", "Color Correction"],
      experience: "12+ Years",
      rating: 4.8,
      phone: "+1 (555) 234-5678",
      email: "maria@sjunisexsalon.com",
      social: {
        instagram: "@maria_colorist",
        facebook: "Maria Rodriguez Color",
        twitter: "@mariacolor"
      },
      achievements: ["Advanced Colorist", "Balayage Expert", "Color Correction Specialist"]
    },
    {
      name: "Emma Chen",
      role: "Wellness & Spa Director",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Certified in advanced facial treatments, Ayurvedic wellness and holistic beauty",
      specialties: ["Facials", "Ayurvedic Treatments", "Wellness Therapy"],
      experience: "10+ Years",
      rating: 5.0,
      phone: "+1 (555) 345-6789",
      email: "emma@sjunisexsalon.com",
      social: {
        instagram: "@emma_wellness",
        facebook: "Emma Chen Spa",
        twitter: "@emmawellness"
      },
      achievements: ["Ayurveda Certified", "Spa Therapist", "Wellness Coach"]
    }
  ];

  const handleBookWithStylist = (member: any) => {
    window.open(`tel:${member.phone}`, '_self');
  };

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gold rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gold rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Consistent Header Style */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 mb-4 sm:mb-6 tracking-wide">Our Team</h2>
            <div className="w-16 sm:w-20 h-0.5 bg-gold mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light px-4">
              Meet our talented professionals dedicated to your beauty journey
            </p>
          </div>
          
          {/* Team Grid - Equal Height Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group relative h-full"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Main Card - Fixed Height Structure */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-slate-100 h-full flex flex-col">
                  
                  {/* Image Section - Fixed Height */}
                  <div className="relative h-64 sm:h-72 overflow-hidden flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Experience Badge */}
                    <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {member.experience}
                    </div>
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star size={14} className="text-gold fill-current" />
                      <span className="text-slate-800 font-semibold text-sm">{member.rating}</span>
                    </div>

                    {/* Social Links - Appear on Hover */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex justify-center space-x-4 mb-4">
                        <div className="bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer">
                          <Instagram size={18} className="text-white hover:text-black" />
                        </div>
                        <div className="bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer">
                          <Facebook size={18} className="text-white hover:text-black" />
                        </div>
                        <div className="bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer">
                          <Twitter size={18} className="text-white hover:text-black" />
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleBookWithStylist(member)}
                        className="w-full bg-gold text-black py-3 rounded-xl font-semibold hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <Calendar size={16} />
                        <span>Book with {member.name.split(' ')[0]}</span>
                      </button>
                    </div>
                  </div>

                  {/* Content Section - Flexible Height with Consistent Layout */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    {/* Name & Role - Fixed Height */}
                    <div className="text-center mb-6 min-h-[120px] flex flex-col justify-center">
                      <h3 className="text-xl sm:text-2xl font-light text-slate-800 mb-2 tracking-wide">
                        {member.name}
                      </h3>
                      <p className="text-gold font-medium mb-3 text-sm uppercase tracking-wider">
                        {member.role}
                      </p>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                        {member.bio}
                      </p>
                    </div>

                    {/* Specialties - Fixed Height */}
                    <div className="mb-6 min-h-[80px] flex flex-col">
                      <h4 className="text-slate-800 font-semibold mb-3 text-sm uppercase tracking-wide">Specialties</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.specialties.map((specialty, idx) => (
                          <span 
                            key={idx} 
                            className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-gold hover:text-black transition-colors duration-300"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements - Fixed Height */}
                    <div className="mb-6 min-h-[100px] flex flex-col">
                      <h4 className="text-slate-800 font-semibold mb-3 text-sm uppercase tracking-wide">Achievements</h4>
                      <div className="space-y-2 flex-grow flex flex-col justify-center">
                        {member.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Award size={12} className="text-gold flex-shrink-0" />
                            <span className="text-slate-600 text-xs">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info - Fixed at Bottom */}
                    <div className="border-t border-slate-200 pt-6 mt-auto">
                      <div className="flex items-center justify-between text-sm mb-4">
                        <div className="flex items-center space-x-2 text-slate-600">
                          <Phone size={14} />
                          <span className="text-xs">{member.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-600">
                          <Mail size={14} />
                          <span className="text-xs">{member.email}</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => handleBookWithStylist(member)}
                        className="w-full bg-slate-800 text-white py-3 rounded-xl font-medium hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <Calendar size={16} />
                        <span>Book Appointment</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full transition-all duration-500 ${
                  hoveredMember === index ? 'scale-150 opacity-100' : 'scale-100 opacity-60'
                }`}></div>
                <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-gold/60 rounded-full transition-all duration-700 ${
                  hoveredMember === index ? 'scale-125 opacity-100' : 'scale-100 opacity-40'
                }`}></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-16 sm:mt-20">
            <div className="bg-gradient-to-r from-slate-800 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/20 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
                  <Award className="text-gold" size={28} />
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-center sm:text-left">
                    Expert Care Since 1950
                  </h3>
                </div>
                
                <p className="text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
                  Our team of certified professionals brings decades of combined experience to ensure you receive the highest quality service and personalized attention.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <button className="w-full sm:w-auto bg-gold text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <Phone size={20} />
                    <span>Call +1 (555) 123-4567</span>
                  </button>
                  <div className="text-white/60 text-sm text-center">
                    Available 7 days a week for appointments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;