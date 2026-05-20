import React, { useState } from 'react';
import { Github, Linkedin, Download, Copy, Check, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  const whatsappNumber = '917038606744';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + heading */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">06 · Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
            Get in touch.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
            Open to <strong className="text-black">founding engineer / first-non-founder operator</strong> roles at Series A–B startups. Mumbai-based, open to remote and relocation.
          </p>
        </div>

        {/* Contact rows */}
        <div>
          {/* Email */}
          <div className="flex items-center justify-between border-t border-gray-200 py-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base md:text-lg text-black font-medium hover:underline underline-offset-4"
              >
                {personalInfo.email}
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-black transition-colors"
              aria-label="Copy email"
            >
              {emailCopied ? (
                <>
                  <Check size={16} className="text-green-600" />
                  <span className="hidden sm:inline text-green-600">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-between border-t border-gray-200 py-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">WhatsApp</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg text-black font-medium hover:underline underline-offset-4"
              >
                {personalInfo.phone}
              </a>
            </div>
            <ArrowUpRight size={16} className="text-gray-400" />
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-between border-t border-gray-200 py-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">LinkedIn</p>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg text-black font-medium hover:underline underline-offset-4"
              >
                linkedin.com/in/arnav-kumar1
              </a>
            </div>
            <Linkedin size={20} className="text-gray-400" />
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-between border-t border-gray-200 py-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">GitHub</p>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg text-black font-medium hover:underline underline-offset-4"
              >
                github.com/Arnav-Kumar1
              </a>
            </div>
            <Github size={20} className="text-gray-400" />
          </div>

          {/* Location */}
          <div className="flex items-center justify-between border-t border-b border-gray-200 py-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Based in</p>
              <p className="text-base md:text-lg text-black font-medium">{personalInfo.location}</p>
            </div>
            <p className="text-sm text-gray-500">Open to remote &amp; relocation</p>
          </div>
        </div>

        {/* Resume download */}
        <div className="mt-12">
          <a
            href="/Arnav-Kumar-FlowCV-Resume-20251007.pdf"
            download="Arnav-Kumar-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-colors rounded"
          >
            <Download size={16} />
            Download résumé (PDF)
          </a>
          <p className="text-xs text-gray-500 mt-3 italic">
            Note: résumé currently being rebuilt (May 2026). For the latest, reach out by email.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
