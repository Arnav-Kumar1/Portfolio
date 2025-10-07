import React from 'react';
import { Code2, Database, Wrench, Brain, Target } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      items: skills.languages,
      color: "bg-black"
    },
    {
      icon: Brain,
      title: "ML/AI",
      items: skills.ml,
      color: "bg-gray-800"
    },
    {
      icon: Database,
      title: "Frameworks & Libraries",
      items: skills.frameworks,
      color: "bg-gray-700"
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      items: skills.tools,
      color: "bg-gray-600"
    },
    {
      icon: Target,
      title: "Specializations",
      items: skills.specializations,
      color: "bg-gray-500"
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technical skills and tools I use to transform data into insights
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-sm border border-gray-200 hover:border-black transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 ${category.color} text-white flex items-center justify-center rounded-sm`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-black">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-sm rounded-sm hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Continuously learning and adapting to new technologies. Currently exploring advanced 
            deep learning architectures and MLOps practices for production-scale deployments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;