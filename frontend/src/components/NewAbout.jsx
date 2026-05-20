import React, { useEffect, useRef, useState } from 'react';
import { personalInfo, achievements } from '../data/mock';

const NewAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const node = ref.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Eyebrow + heading */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">01 · About</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            What I actually do, regardless of job title.
          </h2>
        </div>

        {/* Bio paragraphs */}
        <div className={`space-y-6 mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {personalInfo.bio}
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            I&apos;m a generalist by training and by accident. IIT Madras BS Degree in Data Science, B.E. in Electronics &amp; Telecommunication from SKNCOE Pune. Four data roles between 2023 and 2025 — two ended in layoffs (Recro and Cointab, both during the 2024–25 sector downturn), one was an internship that closed on schedule, one was a department shutdown before conversion. In late 2025 I joined Leo Hydra Studio as the full operating team and have been running it since.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            AI tools — Claude Code, LLM agents — used as a force multiplier, not a substitute for thinking. Not the deepest specialist in any one lane. Probably the best generalist you&apos;ll meet for a seed-to-Series-A startup looking for the first or second non-founder hire.
          </p>
        </div>

        {/* Selected highlights — typography list, no rainbow cards */}
        <div
          className={`border-t border-gray-200 pt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.15s' }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">Selected highlights</p>
          <ul className="space-y-4">
            {achievements.slice(0, 6).map((achievement, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-base md:text-lg text-gray-700 leading-relaxed"
              >
                <span className="flex-shrink-0 text-gray-400 mt-1.5">—</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewAbout;
