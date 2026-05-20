import React from 'react';
import { education } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + heading */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">05 · Education</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Where I trained.
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-12 border-t border-gray-200 pt-8 first:pt-0 first:border-t-0"
            >
              <div className="text-sm text-gray-500 space-y-1">
                <p>{edu.duration}</p>
                <p>CGPA: {edu.cgpa}</p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-1 tracking-tight">
                  {edu.degree}
                </h3>
                <p className="text-base text-gray-600">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
