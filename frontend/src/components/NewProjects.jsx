import React, { useState } from 'react';
import { ExternalLink, Github, Star, Calendar, Code2 } from 'lucide-react';
import { projects } from '../data/mock';

const NewProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
            Featured
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of impactful projects spanning data analytics, machine learning, and full-stack development
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-black text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-black'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter('featured')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
              activeFilter === 'featured'
                ? 'bg-black text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-black'
            }`}
          >
            <Star size={18} />
            <span>Featured</span>
          </button>
        </div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-black transition-all duration-500 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container with Overlay */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    {project.duration && (
                      <div className="flex items-center space-x-2 text-white text-sm mb-2">
                        <Calendar size={14} />
                        <span>{project.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                    <Star size={12} fill="white" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <Code2 size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-300 text-sm font-medium group/link"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-200 text-gray-700 rounded-lg hover:border-black hover:text-black transition-all duration-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover glow effect */}
              <div 
                className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProjects;