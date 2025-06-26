import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUserMd, FaProcedures, FaHospital } from 'react-icons/fa';
import { fadeInUp, stagger } from '@/utils/animations';
import { AnimatedHeading } from './ui/AnimatedHeading';

export const About = () => {
  const stats = [
    { icon: <FaUserMd className="text-4xl text-primary-600" />, number: '50+', label: 'Expert Doctors' },
    { icon: <FaHospital className="text-4xl text-primary-600" />, number: '200+', label: 'Hospital Beds' },
    { icon: <FaProcedures className="text-4xl text-primary-600" />, number: '10,000+', label: 'Happy Patients' },
    { icon: <FaAward className="text-4xl text-primary-600" />, number: '25+', label: 'Years Experience' },
  ];

  return (
    <section className="pt-16 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-0">
          <motion.div 
            className="md:w-1/2 md:sticky top-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-md">
              <Image
                src="https://templates.hibootstrap.com/medizo/default/assets/img/appointment/appointment-img.png"
                alt="Team of specialist doctors in hospital corridor"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-xl shadow-2xl z-10 overflow-hidden min-w-[120px]">
                <div className="relative z-10">
                  <span className="block text-xl font-bold">25+</span>
                  <span className="text-xs">Years Experience</span>
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </motion.div>
          
          <div className="md:w-1/2 pt-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-left"
            >
              <motion.div 
                className="mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                  About Us
                </span>
              </motion.div>
              <AnimatedHeading 
                as="h2" 
                className="text-4xl font-bold text-gray-900 mb-4"
                delay={0.4}
              >
                About LifeCare Hospital
              </AnimatedHeading>

            </motion.div>
            <p className="text-gray-600 mb-8 ">
              Established in 2000, LifeCare Hospital has been a trusted name in healthcare in Hyderabad, providing comprehensive medical services with a patient-centered approach.
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
            
            <button className="text-white px-8 py-3 rounded-lg font-semibold transition duration-300" style={{ backgroundColor: 'rgb(37, 99, 235)' }}>
              <Link href="/about">
                Learn More About Us
              </Link>
            </button>
          </div>  
        </div>
      </div>

    </section>
  );
};
