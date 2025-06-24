import Link from 'next/link';
import React from 'react';
import { FaAward, FaUserMd, FaProcedures, FaHospital } from 'react-icons/fa';

export const About = () => {
  const stats = [
    { icon: <FaUserMd className="text-4xl text-primary-600" />, number: '50+', label: 'Expert Doctors' },
    { icon: <FaHospital className="text-4xl text-primary-600" />, number: '200+', label: 'Hospital Beds' },
    { icon: <FaProcedures className="text-4xl text-primary-600" />, number: '10,000+', label: 'Happy Patients' },
    { icon: <FaAward className="text-4xl text-primary-600" />, number: '25+', label: 'Years Experience' },
  ];

  return (
    <section className="pt-10 bg-white" style={{ paddingBottom: '2px' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="relative">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg" 
                  alt="Team of specialist doctors in hospital corridor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg">
                <span className="block text-2xl font-bold">25+</span>
                <span className="text-sm">Years of Experience</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About LifeCare Hospital</h2>
            <p className="text-gray-600 mb-6">
              Established in 2000, LifeCare Hospital has been a trusted name in healthcare in Hyderabad, providing comprehensive medical services with a patient-centered approach.
            </p>
            <p className="text-gray-600 mb-8">
              Our state-of-the-art facility is equipped with the latest medical technology, and our team of highly skilled professionals is dedicated to delivering exceptional care to every patient.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 text-primary-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">24/7 Emergency Care</h4>
                  <p className="text-sm text-gray-600">Round-the-clock medical assistance</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 text-primary-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Expert Doctors</h4>
                  <p className="text-sm text-gray-600">Highly qualified specialists</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 text-primary-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Modern Equipment</h4>
                  <p className="text-sm text-gray-600">Advanced medical technology</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 text-primary-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Patient Care</h4>
                  <p className="text-sm text-gray-600">Compassionate and personalized</p>
                </div>
              </div>
            </div>
            
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              <Link href="/about">
              Learn More About Us
              </Link>
            </button>
          </div>  
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-primary-700 text-white py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="mb-2">{stat.icon}</div>
                <h3 className="text-3xl font-bold mb-1">{stat.number}</h3>
                <p className="text-primary-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
