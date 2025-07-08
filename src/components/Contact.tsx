
import React from 'react';
import { Mail, Phone, LinkedIn } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborating on innovative projects, 
            or simply connecting with fellow developers and industry professionals.
          </p>

          {/* Contact methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a 
              href="mailto:shariq.anjoom.pp@gmail.com"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                shariq.anjoom.pp@gmail.com
              </p>
            </a>

            <a 
              href="tel:7559808778"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-8 h-8 mx-auto mb-4 text-green-400 group-hover:text-green-300" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                +91 7559808778
              </p>
            </a>

            <a 
              href="https://linkedin.com/in/shariq-anjoom"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <LinkedIn className="w-8 h-8 mx-auto mb-4 text-blue-500 group-hover:text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                Connect with me
              </p>
            </a>
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Ready to collaborate?</h3>
            <p className="text-gray-300 mb-6">
              Whether you're looking for a skilled developer for your team or want to discuss 
              an exciting project, I'd love to hear from you.
            </p>
            <a 
              href="mailto:shariq.anjoom.pp@gmail.com?subject=Portfolio Contact - Let's Connect"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 mt-16 pt-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Mohamed Shariq Anjoom P P. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};
