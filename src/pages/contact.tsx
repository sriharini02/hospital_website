import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaAmbulance, FaCalendarAlt, FaUser, FaComment } from 'react-icons/fa';
import { Banner } from '@/components/ui/Banner';

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

      {/* Contact Info & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                      {Array.isArray(item.content) ? (
                        <div className="space-y-1">
                          {item.content.map((line, i) => (
                            <p key={i} className="text-gray-600">{line}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                      <Link href={item.link} className="text-blue-600 hover:underline inline-block mt-2">
                        {item.linkText}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a 
                      key={social}
                      href={`https://${social}.com/hospitalname`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                      aria-label={social}
                    >
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="lg:w-2/3 bg-gray-100 rounded-lg overflow-hidden" style={{ minHeight: '500px' }}>
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

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Quick Access</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                {link.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{link.title}</h3>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <Link 
                  href={link.link}
                  className={`inline-block px-6 py-2 rounded-md font-medium ${
                    link.title === 'Emergency Care' 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {link.buttonText}
                </Link>
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
      
      {/* Emergency Banner */}
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
    </div>
  );
}
