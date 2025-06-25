import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Appointment', href: '#appointment' },
    { name: 'Contact Us', href: '#contact' },
  ];
  
  const services = [
    { name: 'Cardiology', href: '#' },
    { name: 'Neurology', href: '#' },
    { name: 'Orthopedics', href: '#' },
    { name: 'Pediatrics', href: '#' },
    { name: 'Dermatology', href: '#' },
    { name: 'Emergency Care', href: '#' },
  ];
  
  const contactInfo = [
    { icon: <FaMapMarkerAlt className="text-primary-600" />, text: 'Road No. 2, Banjara Hills, Hyderabad, Telangana 500034' },
    { icon: <FaPhoneAlt className="text-primary-600" />, text: '+91 40 1234 5678' },
    { icon: <FaEnvelope className="text-primary-600" />, text: 'info@lifecarehospital.com' },
    { icon: <FaClock className="text-primary-600" />, text: 'Mon-Sat: 8:00 AM - 8:00 PM' },
  ];
  
  const socialLinks = [
    { 
      name: 'Facebook',
      icon: 'https://img.freepik.com/premium-vector/facebook-color-icons_1209566-7.jpg',
      href: '#' 
    },
    { 
      name: 'Twitter',
      icon: 'https://static.vecteezy.com/system/resources/thumbnails/018/930/752/small/twitter-logo-twitter-icon-transparent-free-free-png.png',
      href: '#' 
    },
    { 
      name: 'Instagram',
      icon: 'https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png',
      href: '#' 
    },
    { 
      name: 'LinkedIn',
      icon: 'https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png',
      href: '#' 
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16" style={{ paddingTop: '35px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">About LifeCare</h3>
            <p className="mb-6 text-base">
              LifeCare Hospital is a leading multi-specialty healthcare provider in Hyderabad, offering comprehensive medical services with state-of-the-art technology and expert healthcare professionals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="inline-block w-10 h-10 rounded-full overflow-hidden bg-white p-1 hover:opacity-80 transition-opacity duration-300"
                  aria-label={`${social.name} link`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition duration-300 text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition duration-300 text-base"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 mr-3 text-lg">{item.icon}</span>
                  <span className="text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-gray-800 mt-10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              &copy; {currentYear} LifeCare Hospital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-400 hover:text-white transition duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
