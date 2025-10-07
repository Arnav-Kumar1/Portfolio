import React, { useState, useEffect, useRef } from 'react';
import { Code2, Database, Wrench, Brain, Target, Zap } from 'lucide-react';
import { skills } from '../data/mock';

const SkillBar = ({ skill, percentage, delay }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setWidth(percentage);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible, percentage, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-800">{skill}</span>
        <span className="text-sm font-bold text-black">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-black to-gray-700 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const NewSkills = () => {
  const skillsWithPercentage = [
    { name: 'Python', percentage: 95 },
    { name: 'SQL (PostgreSQL)', percentage: 90 },
    { name: 'Machine Learning', percentage: 85 },
    { name: 'Data Visualization', percentage: 88 },
    { name: 'ETL Pipelines', percentage: 82 },
    { name: 'Power BI / Tableau', percentage: 80 },
  ];

  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      items: skills.languages,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "ML/AI",
      items: skills.ml,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Frameworks",
      items: skills.frameworks,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Wrench,
      title: "Tools",
      items: skills.tools,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Specializations",
      items: skills.specializations,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full flex items-center space-x-2">
              <Zap size={16} />
              <span>Technical Arsenal</span>
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
            Skills &
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for transforming data into insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left: Skill Bars */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
              <div className="flex items-center space-x-2 mb-6">
                <Target className="text-black" size={24} />
                <h3 className="text-2xl font-black text-black">Proficiency</h3>
              </div>
              {skillsWithPercentage.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  percentage={skill.percentage}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          {/* Right: Skill Categories */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-black transition-all duration-300 card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-black">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-black hover:text-white transition-all duration-300 cursor-default"
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

        {/* Additional Info Box */}
        <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-black text-white mb-4">Continuous Learner</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Constantly exploring advanced deep learning architectures, MLOps practices, and cutting-edge 
            data engineering tools to stay at the forefront of the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewSkills;
