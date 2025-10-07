import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, TrendingUp, Users, Award, Target } from 'lucide-react';
import { personalInfo, achievements } from '../data/mock';

const NewAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Technical Expertise",
      description: "Python, SQL, ML frameworks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "ETL pipelines & infrastructure",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Business Impact",
      description: "Measurable results & insights",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Cross-functional teamwork",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full">
              About Me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
            Transforming Data Into
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Strategic Decisions
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Bio */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <p className="text-xl text-gray-700 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experienced in predictive modeling, dashboarding, and reporting automation with a strong track record 
              of delivering high-impact business insights in fast-paced startup environments.
            </p>
            
            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="border-l-4 border-black pl-4">
                <div className="text-3xl font-black text-black">15%</div>
                <div className="text-sm text-gray-600">Avg. Efficiency Gain</div>
              </div>
              <div className="border-l-4 border-black pl-4">
                <div className="text-3xl font-black text-black">100+</div>
                <div className="text-sm text-gray-600">Hours Saved Monthly</div>
              </div>
            </div>
          </div>

          {/* Right: Highlights Grid */}
          <div className={`grid grid-cols-2 gap-4 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:border-black transition-all duration-300 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements - Bento Box Style */}
        <div className={`bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center space-x-3 mb-8">
            <Award size={32} className="text-white" />
            <h3 className="text-3xl font-black text-white">Key Achievements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.slice(0, 6).map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-sm leading-relaxed">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAbout;