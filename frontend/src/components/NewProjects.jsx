import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/mock';

const NewProjects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + heading */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">03 · Selected work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            What I&apos;ve shipped.
          </h2>
        </div>

        {/* Editorial long-form list */}
        <div className="space-y-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-12 border-t border-gray-200 pt-10 first:pt-0 first:border-t-0"
            >
              {/* Left: date column */}
              <div className="text-sm text-gray-500">
                <p>{project.duration}</p>
              </div>

              {/* Right: content */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.achievements && project.achievements.length > 0 && (
                  <ul className="space-y-2.5 mb-6">
                    {project.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm md:text-base text-gray-600 leading-relaxed"
                      >
                        <span className="flex-shrink-0 text-gray-400 mt-1.5">·</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-gray-50 text-gray-700 text-xs font-medium border border-gray-200 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 text-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-black font-medium underline underline-offset-4 hover:no-underline"
                    >
                      Live site
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-600 font-medium hover:text-black"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProjects;
