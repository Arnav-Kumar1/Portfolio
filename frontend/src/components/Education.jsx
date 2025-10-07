import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Education</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white p-8 rounded-sm border border-gray-200 hover:border-black transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={32} />
              </div>

              {/* Degree */}
              <h3 className="text-xl font-bold text-black mb-3">{edu.degree}</h3>

              {/* Institution */}
              <p className="text-gray-600 mb-4">{edu.institution}</p>

              {/* Duration and CGPA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">{edu.duration}</span>
                <div className="flex items-center space-x-2">
                  <Award size={16} className="text-gray-400" />
                  <span className="text-sm font-medium text-black">CGPA: {edu.cgpa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievement */}
        <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-sm border border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-black text-white flex items-center justify-center rounded-sm">
                <Award size={40} />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-black mb-2">IIT Madras Certificate Award</h3>
              <p className="text-gray-600">
                Received the Diploma in Data Science certificate at IIT Madras from Mr. Kamakoti Veezhinathan 
                (Director, IIT Madras) and Mr. Venkat Viswanathan (Founder & Chairperson, LatentView Analytics).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;