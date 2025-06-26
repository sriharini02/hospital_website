import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUserMd, FaProcedures, FaHeartbeat, FaHospital } from 'react-icons/fa';
import Image from 'next/image';

const features = [
  {
    icon: <FaUserMd className="text-blue-600 text-1xl" />,
    title: 'Expert Medical Team',
    
  },
  {
    icon: <FaProcedures className="text-blue-600 text-1xl" />,
    title: 'Advanced Medical Technology',
    
  },
  {
    icon: <FaHeartbeat className="text-blue-600 text-1xl" />,
    title: 'Patient-Centered Care',
    
  },
  {
    icon: <FaHospital className="text-blue-600 text-1xl" />,
    title: '24/7 Emergency Services',
  
  }
];

export function WhatMakesUsSpecial() {
  return (
    <section className="pt-8 pb-16 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side - Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Makes Us <span className="text-blue-600">More Special</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8 text-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience healthcare excellence with our dedicated team and advanced facilities
            </motion.p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-50 p-2 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-normal text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Image */}
          <motion.div 
            className="lg:w-1/2 relative lg:pl-8 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-auto max-w-xl mx-auto">
              <div className="relative w-full h-0 pb-[100%] md:pb-[90%] lg:pb-[80%] rounded-2xl overflow-hidden">
                <Image
                  src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/newsletter.png"
                  alt="Professional medical team providing care"
                  fill
                  className="object-contain rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
