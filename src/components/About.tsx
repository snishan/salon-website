import React from 'react';
import { Award, Users, Clock, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Award className="text-gold" size={32} />, number: "75+", label: "Years Experience" },
    { icon: <Users className="text-gold" size={32} />, number: "15,000+", label: "Happy Clients" },
    { icon: <Clock className="text-gold" size={32} />, number: "6", label: "Service Categories" },
    { icon: <Sparkles className="text-gold" size={32} />, number: "100%", label: "Satisfaction" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 mb-4 sm:mb-6 tracking-wide">
                  Our Legacy
                </h2>
                <div className="w-16 sm:w-20 h-0.5 bg-gold mb-6 sm:mb-8"></div>
              </div>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Since 1950, SJ Unisex Salon has been a pioneering unisex salon, serving men, women, and children 
                with comprehensive beauty and wellness services. We blend traditional techniques with 
                modern innovations to create truly unique experiences.
              </p>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our philosophy "Makes You Unique..." reflects our commitment to personalized service. 
                From classic haircuts to authentic Ayurvedic treatments, we offer a complete range of 
                services under one roof, ensuring every client leaves feeling confident and beautiful.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                As a full-service unisex salon, we specialize in hair services, nail care, skincare, 
                makeup artistry, and traditional Ayurvedic wellness treatments, making us your one-stop 
                destination for all beauty and wellness needs.
              </p>
              
              {/* Stats Grid - Responsive */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                        {React.cloneElement(stat.icon, { 
                          size: window.innerWidth < 640 ? 24 : 32 
                        })}
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-light text-slate-800 mb-1 sm:mb-2">{stat.number}</div>
                    <div className="text-sm sm:text-base text-slate-600 font-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image Section */}
            <div className="relative order-1 lg:order-2">
              <img 
                src="https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional salon with modern styling chairs and equipment"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-gold/20 rounded-lg -z-10"></div>
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-gold/10 rounded-full -z-10"></div>
              
              {/* Logo overlay - Responsive */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 p-2 sm:p-3 rounded-lg">
                <img 
                  src="/logo_3.png" 
                  alt="SJ Unisex Salon Logo" 
                  className="h-8 sm:h-12 md:h-16 w-auto"
                />
              </div>

              {/* Service badges - Responsive */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 space-y-1 sm:space-y-2">
                <div className="bg-gold/90 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Unisex Salon
                </div>
                <div className="bg-white/90 text-slate-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Ayurvedic Treatments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;