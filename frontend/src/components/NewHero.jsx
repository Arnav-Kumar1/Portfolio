import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const NewHero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-black animate-fade-in-up">
            {personalInfo.name}
          </h1>

          {/* Title · Location */}
          <p
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-light mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.15s' }}
          >
            {personalInfo.title} · {personalInfo.location}
          </p>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {personalInfo.tagline}
          </p>

          {/* Sub-line */}
          <p
            className="text-base md:text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Currently running an artist&apos;s full commerce stack from Mumbai while the founder is in Dubai.
          </p>

          {/* Availability */}
          <p
            className="text-sm md:text-base text-gray-500 italic mb-12 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            {personalInfo.availability}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-3 bg-black text-white rounded-md hover:bg-gray-900 transition-all duration-300 flex items-center space-x-2"
            >
              <span className="font-semibold">Selected Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-black text-black rounded-md hover:bg-black hover:text-white transition-all duration-300 font-semibold"
            >
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center space-x-6 animate-fade-in-up"
            style={{ animationDelay: '0.7s' }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
