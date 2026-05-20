import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-bold text-black text-lg mb-1">{personalInfo.name}</p>
            <p className="text-sm text-gray-500">
              {personalInfo.title} · {personalInfo.location}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-100 text-sm text-gray-500">
          <p>
            © {currentYear} {personalInfo.name} · Last updated 2026-05-21 ·{' '}
            <a
              href="https://github.com/Arnav-Kumar1/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black underline underline-offset-2"
            >
              Source on GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
