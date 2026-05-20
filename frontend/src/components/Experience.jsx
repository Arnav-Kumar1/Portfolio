import React from 'react';
import { experiences } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + heading */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">02 · Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Where I&apos;ve worked.
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-12 border-t border-gray-200 pt-8 first:pt-0 first:border-t-0"
            >
              {/* Left: meta column */}
              <div className="text-sm text-gray-500 space-y-1">
                <p>{exp.duration}</p>
                <p>{exp.location}</p>
                <p className="text-xs uppercase tracking-wider">{exp.type}</p>
              </div>

              {/* Right: content */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight">
                  {exp.role}
                </h3>
                <p className="text-base text-gray-600 mb-5">{exp.company}</p>

                <ul className="space-y-2.5">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm md:text-base text-gray-600 leading-relaxed"
                    >
                      <span className="flex-shrink-0 text-gray-400 mt-1.5">·</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
