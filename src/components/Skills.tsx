
import React from 'react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
      color: "blue"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Microservices", "API Development", "Database Design", "Server Architecture"],
      color: "purple"
    },
    {
      title: "Development Practices",
      skills: ["Agile Methodology", "Modern Best Practices", "Version Control", "CI/CD", "Testing"],
      color: "green"
    },
    {
      title: "Domain Expertise",
      skills: ["e-Commerce SaaS", "Enterprise Applications", "Airline Cargo Systems", "Product Development"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-700",
      purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-700",
      green: "from-green-500 to-green-600 bg-green-50 text-green-700",
      orange: "from-orange-500 to-orange-600 bg-orange-50 text-orange-700"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Technical Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color);
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} text-white rounded-lg mb-4 font-semibold`}>
                    {category.title}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className={`px-3 py-2 ${colorClasses.split(' ')[2]} ${colorClasses.split(' ')[3]} rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional info section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Personal Projects & Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Beyond professional work, I actively engage in developing personal modern product ideas 
                using the latest technology stacks. This keeps me at the forefront of emerging technologies 
                and allows me to experiment with innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
