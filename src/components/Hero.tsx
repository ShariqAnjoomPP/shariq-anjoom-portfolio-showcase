
import React from 'react';
import { ArrowDown, Mail, Phone, LinkedIn } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with animation */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mohamed Shariq Anjoom P P
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-blue-200 mb-6">
              Senior Product Engineer
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              3.10+ years of full-stack development expertise, specializing in modern SaaS solutions 
              and enterprise-grade applications in the airline cargo domain.
            </p>
          </div>

          {/* Location and contact info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-300">
            <div className="flex items-center gap-2">
              <span>📍 Cochin</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>7559808778</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>shariq.anjoom.pp@gmail.com</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a 
              href="#about" 
              className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
