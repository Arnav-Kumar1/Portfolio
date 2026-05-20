import React from 'react';
import { skills } from '../data/mock';

const NewSkills = () => {
  const skillGroups = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frameworks', items: skills.frameworks },
    { title: 'Tools & infrastructure', items: skills.tools },
    { title: 'ML / AI', items: skills.ml },
    { title: 'Specializations', items: skills.specializations },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + heading */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">04 · Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            What I work with.
          </h2>
        </div>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-12 border-t border-gray-200 pt-8 first:pt-0 first:border-t-0"
            >
              <p className="text-sm font-semibold text-black md:pt-0.5">{group.title}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 bg-gray-50 text-gray-700 text-sm font-medium border border-gray-200 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewSkills;
