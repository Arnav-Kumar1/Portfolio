import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const contactEmail = 'arnav9637@gmail.com';
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactEmail).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  const whatsappNumber = "917038606744"; // Phone number without + and spaces
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-sm border border-gray-200 mb-12">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-3">
                  <Mail size={24} className="text-gray-600" />
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-lg font-medium text-black">{contactEmail}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-sm hover:border-black transition-colors text-sm"
                >
                  {emailCopied ? (
                    <>
                      <Check size={16} className="text-green-600" />
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="border-t border-gray-200"></div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone size={24} className="text-gray-600" />
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="text-lg font-medium text-black">{personalInfo.phone}</div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-black text-white p-12 rounded-sm text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect on WhatsApp</h3>
            <p className="text-gray-300 mb-8">
              Or simply click below to drop me a message on WhatsApp — I'll get back to you soon!
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-black rounded-sm hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              <MessageCircle size={24} />
              <span>Message on WhatsApp</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
          <div className="text-center">
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