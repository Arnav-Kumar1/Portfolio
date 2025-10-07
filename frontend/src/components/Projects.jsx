import React, { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my work spanning data analytics, machine learning, and full-stack development
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-sm transition-all duration-300 ${
              filter === 'all'
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-black'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-sm transition-all duration-300 ${
              filter === 'featured'
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-black'
            }`}
          >
            Featured
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-sm border border-gray-200 overflow-hidden hover:border-black transition-all duration-300 group flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-xs flex items-center space-x-1">
                    <Star size={12} fill="white" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                
                {project.duration && (
                  <p className="text-xs text-gray-500 mb-3">{project.duration}</p>
                )}

                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-sm text-gray-700 hover:text-black transition-colors"
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
                      className="flex items-center space-x-1 text-sm text-gray-700 hover:text-black transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;