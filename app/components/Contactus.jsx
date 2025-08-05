'use client';

import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactDetails() {
  return (
    <div className="bg-[#fffaf6] min-h-screen py-16 px-6 md:px-20">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Panel */}
        <div className="space-y-12">
          {/* Title */}
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900">Let’s Connect</h1>
            <p className="text-lg text-gray-600 mt-2">
              Reach out to our global offices or follow us online.
            </p>
            <div className="h-1 w-16 bg-orange-500 mt-4" />
          </div>

          {/* Headquarters Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">📍 Headquarters – India</h2>
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-500 mt-1" />
                <p className="text-gray-800">
                  No: 1A and 3A, Sridharan Street, Periyar Nagar,<br />
                  NagelKeni, Chromepet, Chennai – 600 044.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-orange-500 mt-1" />
              <p className="text-gray-800">
                +91–442247 1672 / +91–98410 49993 / +91–98410 97997
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-orange-500 mt-1" />
              <p className="text-gray-800">sales@ritzzaccessories.com</p>
            </div>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-3">🌍 Our Global Branches</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-medium italic">United States</p>
                <div className="flex items-start gap-4 mt-1">
                  <MapPin className="text-orange-500 mt-1" />
                  <p className="text-gray-800">7653, 116th Ave SE, Newcastle 98056</p>
                </div>
              </div>
              <div>
                <p className="text-gray-700 font-medium italic">Canada</p>
                <div className="flex items-start gap-4 mt-1">
                  <MapPin className="text-orange-500 mt-1" />
                  <p className="text-gray-800">Unit 615–51, Lower Simcoe St, Toronto ON M5J 3A2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              { src: '/contact/facebook.png', alt: 'Facebook', href: '#' },
              { src: '/contact/instagram.png', alt: 'Instagram', href: '#' },
              { src: '/contact/youtube.png', alt: 'YouTube', href: '#' },
              { src: '/contact/linkedin.png', alt: 'LinkedIn', href: '#' },
            ].map((icon, index) => (
              <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-9 h-9 transition hover:scale-110 hover:rotate-1"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right Panel - Map with Shadow */}
        <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.208254569421!2d80.13067897481763!3d12.952303214575577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f6d6f3d26f5%3A0x5ac81e4e91bc82c2!2sRitz%20Accessories!5e0!3m2!1sen!2sin!4v1692095803933!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
