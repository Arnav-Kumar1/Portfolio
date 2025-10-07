import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, TrendingUp, Database } from 'lucide-react';
import { personalInfo } from '../data/mock';
import AnimatedCounter from './AnimatedCounter';

const NewHero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Open to Opportunities</span>
          </div>

          {/* Main heading with gradient */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent animate-fade-in-up">
              {personalInfo.name}
            </span>
          </h1>

          {/* Subtitle with typing effect feel */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="text-gray-600" size={24} />
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {personalInfo.title}
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {personalInfo.tagline} • Turning complex datasets into strategic business decisions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span className="font-semibold">Explore My Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-black text-black rounded-xl hover:bg-black hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Let's Connect
            </button>
          </div>

          {/* Stats Cards - Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="group relative backdrop-blur-sm bg-white/60 border border-gray-200 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <Database className="text-gray-400 group-hover:text-black transition-colors" size={24} />
                <div className="text-4xl font-black text-black">
                  <AnimatedCounter end={personalInfo.yearsOfExperience} suffix="+" />
                </div>
              </div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="group relative backdrop-blur-sm bg-white/60 border border-gray-200 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <Sparkles className="text-gray-400 group-hover:text-black transition-colors" size={24} />
                <div className="text-4xl font-black text-black">
                  <AnimatedCounter end={personalInfo.projectsCompleted} suffix="+" />
                </div>
              </div>
              <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="group relative backdrop-blur-sm bg-white/60 border border-gray-200 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="text-gray-400 group-hover:text-black transition-colors" size={24} />
                <div className="text-4xl font-black text-black">
                  <AnimatedCounter end={personalInfo.companies} />
                </div>
              </div>
              <div className="text-sm text-gray-600 font-medium">Companies Impacted</div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          {/* Social Links - Floating */}
          <div className="flex items-center justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;