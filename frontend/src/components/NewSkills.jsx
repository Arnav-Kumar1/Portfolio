import React from 'react';
import { Code2, Database, Wrench, Brain, Target } from 'lucide-react';
import { skills } from '../data/mock';

const NewSkills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      items: skills.languages,
    },
    {
      icon: Database,
      title: 'Frameworks',
      items: skills.frameworks,
    },
    {
      icon: Wrench,
      title: 'Tools & Infrastructure',
      items: skills.tools,
    },
    {
      icon: Brain,
      title: 'ML / AI',
      items: skills.ml,
    },
    {
      icon: Target,
      title: 'Specializations',
      items: skills.specializations,
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Skills</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-md p-8 hover:border-black transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Icon size={22} className="text-black" />
                  <h3 className="text-xl font-bold text-black">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded border border-gray-100 hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewSkills;
