import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header - Responsive */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 tracking-wide">Contact Us</h2>
            <div className="w-16 sm:w-20 h-0.5 bg-gold mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-light px-4">
              Ready to discover what makes you unique? Get in touch with us today
            </p>
          </div>
          
          {/* Content Grid - Responsive */}
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg sm:text-xl font-light mb-2">Location</h3>
                  <p className="text-white/80 text-sm sm:text-base">123 Heritage Avenue<br />Beverly Hills, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Phone className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg sm:text-xl font-light mb-2">Phone</h3>
                  <p className="text-white/80 text-sm sm:text-base">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Mail className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg sm:text-xl font-light mb-2">Email</h3>
                  <p className="text-white/80 text-sm sm:text-base">info@sjunisexsalon.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Clock className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="text-lg sm:text-xl font-light mb-2">Hours</h3>
                  <div className="text-white/80 space-y-1 text-sm sm:text-base">
                    <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p>Saturday: 8:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Logo in contact section - Responsive */}
              <div className="pt-6 sm:pt-8 border-t border-white/20">
                <img 
                  src="/logo_3.png" 
                  alt="SJ Unisex Salon Logo" 
                  className="h-16 sm:h-20 w-auto opacity-80"
                />
                <p className="text-gold italic mt-2 font-light text-sm sm:text-base">Makes You Unique...</p>
              </div>
            </div>
            
            {/* Contact Form - Responsive */}
            <div>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-gold transition-colors duration-300 text-white placeholder-white/60 text-sm sm:text-base"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-gold transition-colors duration-300 text-white placeholder-white/60 text-sm sm:text-base"
                  />
                </div>
                
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-gold transition-colors duration-300 text-white placeholder-white/60 text-sm sm:text-base"
                />
                
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-gold transition-colors duration-300 text-white placeholder-white/60 text-sm sm:text-base"
                />
                
                <textarea 
                  rows={5}
                  placeholder="Tell us about your desired service..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-gold transition-colors duration-300 text-white placeholder-white/60 resize-none text-sm sm:text-base"
                ></textarea>
                
                <button 
                  type="submit"
                  className="w-full bg-gold text-black py-3 sm:py-4 rounded font-light tracking-wider hover:bg-gold/90 transition-colors duration-300 text-sm sm:text-base"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;