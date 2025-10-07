import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const contactEmail = 'arnav9637@gmail.com';

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-sm border border-gray-200 hover:border-black transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-black mb-1">Email Me</div>
                <div className="text-sm text-gray-600">{contactEmail}</div>
                <div className="text-xs text-gray-500 mt-2">Click to send an email</div>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-sm border border-gray-200 hover:border-black transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-black mb-1">Call Me</div>
                <div className="text-sm text-gray-600">{personalInfo.phone}</div>
                <div className="text-xs text-gray-500 mt-2">Click to make a call</div>
              </div>
            </a>
          </div>

          {/* Main Email CTA */}
          <div className="bg-black text-white p-12 rounded-sm text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Connect?</h3>
            <p className="text-gray-300 mb-8">
              Click the button below to send me an email. I'll get back to you as soon as possible!
            </p>
            <a
              href={`mailto:${contactEmail}?subject=Portfolio Inquiry`}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-black rounded-sm hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              <Mail size={24} />
              <span>Send Email</span>
            </a>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-sm border border-gray-200">
              <MapPin size={24} className="mx-auto mb-3 text-gray-600" />
              <div className="font-medium text-black mb-1">Location</div>
              <div className="text-sm text-gray-600">{personalInfo.location}</div>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-6 bg-gray-50 rounded-sm border border-gray-200 hover:border-black transition-all group"
            >
              <Linkedin size={24} className="mx-auto mb-3 text-gray-600 group-hover:text-black transition-colors" />
              <div className="font-medium text-black mb-1">LinkedIn</div>
              <div className="text-sm text-gray-600">Connect with me</div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-6 bg-gray-50 rounded-sm border border-gray-200 hover:border-black transition-all group"
            >
              <Github size={24} className="mx-auto mb-3 text-gray-600 group-hover:text-black transition-colors" />
              <div className="font-medium text-black mb-1">GitHub</div>
              <div className="text-sm text-gray-600">View my projects</div>
            </a>
          </div>

          {/* Resume Download */}
          <div className="mt-12 text-center">
            <h4 className="text-lg font-bold text-black mb-4">Download My Resume</h4>
            <a
              href="/Arnav-Kumar-FlowCV-Resume-20251007.pdf"
              download="Arnav-Kumar-Resume.pdf"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-black text-white rounded-sm hover:bg-gray-800 transition-colors"
            >
              <Download size={20} />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;