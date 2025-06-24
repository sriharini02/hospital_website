import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions or want to book an appointment? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                    <FaMapMarkerAlt className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Our Location</h4>
                  <p className="mt-1 text-gray-600">
                    Road No. 2, Banjara Hills,<br />
                    Hyderabad, Telangana 500034
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                    <FaPhoneAlt className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Phone Number</h4>
                  <p className="mt-1 text-gray-600">
                    +91 40 1234 5678 (Reception)<br />
                    +91 98765 43210 (Emergency)
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Email Address</h4>
                  <p className="mt-1 text-gray-600">
                    info@medicarehospital.com<br />
                    appointments@medicarehospital.com
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                    <FaClock className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Working Hours</h4>
                  <p className="mt-1 text-gray-600">
                    Monday - Saturday: 8:00 AM - 8:00 PM<br />
                    Sunday: 9:00 AM - 2:00 PM<br />
                    Emergency: 24/7
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-600">
                  <span className="sr-only">Facebook</span>
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-600">
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-600">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-600">
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  defaultValue={''}
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-16 bg-gray-200 h-96">
        <div className="h-full flex items-center justify-center">
          <p className="text-gray-500">Google Map Integration Here</p>
        </div>
      </div>
    </section>
  );
};
