
import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile image placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-6xl">👨‍💻</div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>

            {/* About content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Passionate Full-Stack Developer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With 3.10 years of comprehensive experience in full-stack development, I specialize in 
                creating modern, scalable SaaS solutions and enterprise applications. My expertise spans 
                across the entire development lifecycle, from conceptualization to deployment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I have a proven track record of working with modern agile development teams, implementing 
                best practices, and successfully migrating complex monolithic applications to modern 
                microservices architectures.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently working in the airline cargo domain, I collaborate directly with leading 
                international airline customers, ensuring solutions meet enterprise-grade requirements.
              </p>
              
              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">3.10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">2</div>
                  <div className="text-sm text-gray-600">Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
