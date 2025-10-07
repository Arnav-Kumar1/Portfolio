import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { personalInfo, resumes } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    alert('Thank you for your message! This is a mock submission. The backend will handle actual form submission.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleResumeDownload = (resume) => {
    // Mock download
    alert(`Downloading: ${resume.name}. This is a mock action. The backend will handle actual downloads.`);
    setShowResumeDropdown(false);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-start space-x-4 text-gray-700 hover:text-black transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm group-hover:bg-black group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-medium text-black mb-1">Email</div>
                  <div className="text-sm">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-start space-x-4 text-gray-700 hover:text-black transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm group-hover:bg-black group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-medium text-black mb-1">Phone</div>
                  <div className="text-sm">{personalInfo.phone}</div>
                </div>
              </a>

              <div className="flex items-start space-x-4 text-gray-700">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-medium text-black mb-1">Location</div>
                  <div className="text-sm">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="font-medium text-black mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm hover:bg-black hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm hover:bg-black hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="relative">
              <h4 className="font-medium text-black mb-4">Download Resume</h4>
              <button
                onClick={() => setShowResumeDropdown(!showResumeDropdown)}
                className="w-full flex items-center justify-between px-6 py-3 bg-black text-white rounded-sm hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Download size={20} />
                  <span>Select Resume Version</span>
                </div>
                <ChevronDown size={20} className={`transition-transform ${showResumeDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showResumeDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-sm shadow-lg z-10">
                  {resumes.map((resume) => (
                    <button
                      key={resume.id}
                      onClick={() => handleResumeDownload(resume)}
                      className="w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <div className="font-medium text-black mb-1">{resume.name}</div>
                      <div className="text-xs text-gray-600">{resume.description}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition-colors"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-black text-white rounded-sm hover:bg-gray-800 transition-colors group"
              >
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;