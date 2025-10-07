import React from 'react';
import { Code, Database, TrendingUp, Users } from 'lucide-react';
import { personalInfo, achievements } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Expertise",
      description: "Proficient in Python, SQL, and modern ML/AI frameworks"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust ETL pipelines and data infrastructure"
    },
    {
      icon: TrendingUp,
      title: "Business Impact",
      description: "Delivering measurable results and actionable insights"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working with cross-functional teams and stakeholders"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* Bio */}
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            {personalInfo.bio}
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Experienced in predictive modeling, dashboarding, and reporting automation with a strong track record 
            of delivering high-impact business insights in fast-paced startup environments. Skilled in transforming 
            complex datasets into clear, actionable strategies that drive growth and operational efficiency.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-sm border border-gray-200 hover:border-black transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-sm mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Key Achievements */}
        <div className="bg-white p-8 md:p-12 rounded-sm border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;