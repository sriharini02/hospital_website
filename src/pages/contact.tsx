import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaAmbulance, FaCalendarAlt, FaUser, FaComment, FaDirections } from 'react-icons/fa';
import { Banner } from '@/components/ui/Banner';

interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
  specialties: string[];
  features: string[];
  rating: number;
  reviewCount: number;
}

// Mock data - same as in branches.tsx
const branches: Branch[] = [
  {
    id: 1,
    name: 'LifeCare Main Hospital',
    address: '123 Health Avenue, Medical District, Hyderabad, Telangana 500032',
    phone: '+91 40 1234 5678',
    email: 'info@lifecarehyd.com',
    hours: '24/7 Emergency, OPD: 8:00 AM - 9:00 PM',
    coordinates: { lat: 17.3850, lng: 78.4867 },
    image: '/images/branches/main-hospital.jpg',
    specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Emergency', 'ICU', 'Surgery'],
    features: ['24/7 Emergency', 'ICU', 'Pharmacy', 'Diagnostics', 'Ambulance'],
    rating: 4.8,
    reviewCount: 1245
  },
  {
    id: 2,
    name: 'LifeCare Westside',
    address: '456 Wellness Road, Gachibowli, Hyderabad, Telangana 500032',
    phone: '+91 40 2345 6789',
    email: 'westside@lifecarehyd.com',
    hours: '8:00 AM - 10:00 PM, Emergency: 24/7',
    coordinates: { lat: 17.4401, lng: 78.3489 },
    image: '/images/branches/westside.jpg',
    specialties: ['Pediatrics', 'Dermatology', 'ENT', 'Dental', 'Ophthalmology'],
    features: ['Child Care', 'Dental Care', 'Eye Care', 'Pharmacy'],
    rating: 4.7,
    reviewCount: 876
  },
  {
    id: 3,
    name: 'LifeCare East Campus',
    address: '789 Healing Street, Uppal, Hyderabad, Telangana 500039',
    phone: '+91 40 3456 7890',
    email: 'east@lifecarehyd.com',
    hours: '7:00 AM - 11:00 PM, Emergency: 24/7',
    coordinates: { lat: 17.4016, lng: 78.5600 },
    image: '/images/branches/east-campus.jpg',
    specialties: ['Maternity', 'Pediatrics', 'General Medicine', 'Physiotherapy'],
    features: ['Mother & Child Care', 'Neonatal ICU', 'Vaccination', 'Wellness Programs'],
    rating: 4.6,
    reviewCount: 932
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean, message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt className="text-blue-600 text-2xl" />, 
      title: 'Our Location', 
      content: '123 Healthcare Ave, Medical District, Hyderabad, Telangana 500032',
      link: 'https://maps.google.com',
      linkText: 'View on Map'
    },
    { icon: <FaPhoneAlt className="text-blue-600 text-2xl" />, 
      title: 'Phone Number', 
      content: ['+91 98765 43210', '+91 40 1234 5678 (Landline)'],
      link: 'tel:+919876543210',
      linkText: 'Call Now'
    },
    { icon: <FaEnvelope className="text-blue-600 text-2xl" />, 
      title: 'Email Address', 
      content: ['info@hospitalname.com', 'appointments@hospitalname.com'],
      link: 'mailto:info@hospitalname.com',
      linkText: 'Send Email'
    },
    { icon: <FaClock className="text-blue-600 text-2xl" />, 
      title: 'Working Hours', 
      content: ['Mon - Sat: 8:00 AM - 9:00 PM', 'Sun: 9:00 AM - 2:00 PM', 'Emergency: 24/7'],
      link: '/book-appointment',
      linkText: 'Book Appointment'
    },
  ];

  const quickLinks = [
    { 
      title: 'Book Appointment', 
      description: 'Schedule a consultation with our specialists',
      icon: <FaCalendarAlt className="text-4xl text-blue-600 mb-4" />,
      link: '/book-appointment',
      buttonText: 'Book Now'
    },
    { 
      title: 'Emergency Care', 
      description: 'Immediate medical attention when you need it most',
      icon: <FaAmbulance className="text-4xl text-red-600 mb-4" />,
      link: '/emergency',
      buttonText: 'Call Emergency'
    },
    { 
      title: 'Health Checkup', 
      description: 'Comprehensive health checkup packages',
      icon: <FaUser className="text-4xl text-green-600 mb-4" />,
      link: '/health-checkup',
      buttonText: 'Learn More'
    },
    { 
      title: 'Feedback', 
      description: 'Share your experience with us',
      icon: <FaComment className="text-4xl text-yellow-600 mb-4" />,
      link: '/feedback',
      buttonText: 'Submit Feedback'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contact Us | Hospital Name</title>
        <meta name="description" content="Get in touch with us for appointments, inquiries, or feedback. We're here to help with all your healthcare needs." />
      </Head>

      {/* Banner Section */}
      <Banner 
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' }
        ]}
      />

      {/* Contact Info & Map - Compact */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Information - Compact */}
            <div className="lg:w-2/5">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-0.5">{item.icon}</div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-800 mb-0.5">{item.title}</h3>
                      {Array.isArray(item.content) ? (
                        <div className="space-y-0.5">
                          {item.content.map((line, i) => (
                            <p key={i} className="text-sm text-gray-600">{line}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-600">{item.content}</p>
                      )}
                      <Link href={item.link} className="text-blue-600 hover:underline text-sm inline-block mt-1">
                        {item.linkText}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h3>
                <div className="flex space-x-5">
                  {[
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
                  ].map((social) => (
                    <a 
                      key={social.name}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden p-2 hover:opacity-80 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                      aria-label={social.name}
                    >
                      <img 
                        src={social.icon} 
                        alt={social.name}
                        className="w-8 h-8 object-contain"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Map - Smaller */}
            <div className="lg:w-3/5 bg-gray-100 rounded-lg overflow-hidden" style={{ minHeight: '400px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.266598425717!2d78.3752774153531!3d17.44792498803939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e8a3b3f7c1%3A0x8f7d7f9b3b9e3b3b!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Hospital Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Hospital Locations</h2>
            <p className="text-gray-600 text-lg">Select a branch to view details and get directions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {branches.slice(0, 3).map((branch) => (
              <div 
                key={branch.id} 
                className="group bg-white rounded-xl border-2 border-transparent overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col hover:border-blue-300 relative after:absolute after:inset-0 after:border-2 after:border-transparent after:rounded-xl after:transition-all after:duration-300 hover:after:border-blue-50 hover:after:scale-95"
              >
                <div className="h-40 bg-gradient-to-r from-blue-50 to-blue-100 relative overflow-hidden transition-all duration-300 group-hover:from-blue-100 group-hover:to-blue-200">
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <FaMapMarkerAlt className="text-6xl text-blue-300 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {branch.name}
                    </h3>
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                      <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-800">
                        {branch.rating} <span className="text-gray-500 font-normal">({branch.reviewCount})</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-12">
                    {branch.address}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                    {branch.features.slice(0, 2).map((feature: string, index: number) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 group-hover:bg-blue-200 transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                    {branch.features.length > 2 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        +{branch.features.length - 2} more
                      </span>
                    )}
                  </div>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates.lat},${branch.coordinates.lng}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <FaDirections className="mr-2" /> Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/branches" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
            >
              View All Branches
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Quick Access</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 rounded-lg shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-t-4 hover:border-blue-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(link.icon, { 
                      className: 'text-4xl mb-4 transition-colors duration-300 ' + 
                        (link.title === 'Emergency Care' 
                          ? 'text-red-600 group-hover:text-red-700' 
                          : 'text-blue-600 group-hover:text-blue-700')
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {link.description}
                  </p>
                  <Link 
                    href={link.link}
                    className={`inline-flex items-center px-6 py-2.5 rounded-md font-medium transition-all duration-300 ${
                      link.title === 'Emergency Care' 
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-200' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-200'
                    } transform hover:scale-105`}
                  >
                    {link.buttonText}
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or need assistance? Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            {submitStatus && (
              <div className={`p-4 mb-6 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject <span className="text-red-500">*</span></label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Appointment">Appointment</option>
                    <option value="Billing">Billing</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Emergency">Emergency</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  I agree to the <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> and 
                  <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
                </label>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Emergency Banner 
      <div className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex items-center mb-2 md:mb-0 md:mr-8">
              <FaAmbulance className="text-2xl mr-2" />
              <span className="font-semibold text-lg">Medical Emergency?</span>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <a href="tel:108" className="text-2xl font-bold mr-4">108</a>
              <span className="hidden md:block">or</span>
              <a href="tel:+919876543210" className="text-2xl font-bold ml-0 md:ml-4">+91 98765 43210</a>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
}
