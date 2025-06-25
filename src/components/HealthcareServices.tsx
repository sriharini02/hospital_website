import React from 'react';
import { FaUserMd, FaCalendarAlt, FaStethoscope, FaAmbulance, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/utils/animations';

const services = [
  {
    id: 1,
    icon: <FaUserMd className="w-8 h-8" />,
    title: 'Expert Consultation',
    description: 'Book an appointment with our experienced doctors for personalized healthcare solutions.'
  },
  {
    id: 2,
    icon: <FaCalendarAlt className="w-8 h-8" />,
    title: 'Schedule Appointment',
    description: 'Easy online scheduling to book your visit at your convenience.'
  },
  {
    id: 3,
    icon: <FaStethoscope className="w-8 h-8" />,
    title: 'Get Diagnosis',
    description: 'Accurate diagnosis using state-of-the-art medical equipment and expertise.'
  },
  {
    id: 4,
    icon: <FaAmbulance className="w-8 h-8" />,
    title: 'Start Treatment',
    description: 'Comprehensive treatment plans tailored to your specific health needs.'
  }
];

const HealthcareServices = () => {
  return (
    <section className="bg-[#E0F2FE] text-[#1E3A8A] py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p 
            className="text-[#1E3A8A] text-sm font-semibold tracking-wider uppercase mb-4"
            variants={fadeInUp}
          >
            Easy Solutions
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={fadeInUp}
          >
            4 Easy Steps to Get the World's Best Treatment
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-[#1E3A8A] mx-auto mb-8"
            variants={fadeInUp}
          />
          
          {/* 4 Steps Section */}
          <motion.div 
            className="mb-12"
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="group bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg select-none cursor-default"
                >
                  <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-opacity-90">
                    <div className="text-white text-2xl transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                  <div className="text-[#1E3A8A] font-bold text-lg mb-2">Step {service.id}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#2563EB] transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-800">{service.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Removed CTA Buttons */}
        </motion.div>
      </div>
    </section>
  );
};

export default HealthcareServices;
