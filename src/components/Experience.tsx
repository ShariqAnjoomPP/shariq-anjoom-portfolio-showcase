
import React from 'react';

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Product Engineer",
      company: "IBS Software Pvt Ltd",
      period: "Current Position",
      description: "Working as a full stack developer with multiple stacks in airline cargo domain. Leading the migration of a large complex enterprise product from conventional monolithic application to microservices based modern solutions. Direct interaction with leading airline customers internationally.",
      technologies: ["Microservices", "Full Stack Development", "Enterprise Solutions", "International Clients"],
      isActive: true
    },
    {
      title: "Software Engineer",
      company: "Mozanta Technologies Pvt Ltd",
      period: "Previous Role",
      description: "Developed e-Commerce SaaS based products from scratch. Was part of modern agile based development team implementing modern development best practices and methodologies.",
      technologies: ["e-Commerce SaaS", "Agile Development", "Modern Best Practices", "Product Development"],
      isActive: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Professional Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 ${exp.isActive ? 'ring-2 ring-blue-500' : ''}`}>
                    {exp.isActive && (
                      <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-4">
                        Current Role
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <h4 className="text-blue-600 font-semibold mb-2">{exp.company}</h4>
                    <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
