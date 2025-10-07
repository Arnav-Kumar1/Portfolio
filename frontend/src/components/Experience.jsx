import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute left-8 top-20 bottom-0 w-0.5 bg-gray-200"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-sm text-xl font-bold">
                    {exp.logo}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 p-6 md:p-8 rounded-sm border border-gray-200 hover:border-black transition-all duration-300">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-black">{exp.role}</h3>
                      <span className="text-sm px-3 py-1 bg-black text-white rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Briefcase size={16} className="mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm md:text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;