import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaHeartbeat, FaProcedures, FaUserMd, FaTeeth, FaBrain, FaBone, FaArrowRight } from 'react-icons/fa';
import { fadeInUp, stagger } from '@/utils/animations';
import { AnimatedHeading } from './ui/AnimatedHeading';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => (
  <motion.div 
    className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    custom={delay}
    whileHover={{ y: -5 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <motion.div 
        className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600"
        whileHover={{ rotate: 5, scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-center mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 text-center mb-6 flex-grow">{description}</p>
      <motion.a 
        href="#" 
        className="inline-flex items-center justify-center mx-auto text-blue-600 group-hover:text-blue-800 font-medium text-sm transition-colors duration-300"
        whileHover={{ x: 5 }}
      >
        Learn more <FaArrowRight className="ml-2" />
      </motion.a>
    </div>
  </motion.div>
);

export function Services() {
  const services = [
    {
      icon: <FaHeartbeat className="text-3xl" />,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment options for all cardiac conditions.',
    },
    {
      icon: <FaProcedures className="text-3xl" />,
      title: 'General Surgery',
      description: 'Expert surgical care using minimally invasive techniques for faster recovery and better outcomes.',
    },
    {
      icon: <FaUserMd className="text-3xl" />,
      title: 'Dermatology',
      description: 'Specialized care for all skin conditions, from acne to skin cancer, and cosmetic procedures.',
    },
    {
      icon: <FaTeeth className="text-3xl" />,
      title: 'Dental Care',
      description: 'Complete dental services including preventive, restorative, and cosmetic dentistry.',
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: 'Neurology',
      description: 'Advanced diagnosis and treatment for disorders of the nervous system and brain.',
    },
    {
      icon: <FaBone className="text-3xl" />,
      title: 'Orthopedics',
      description: 'Comprehensive care for bones, joints, and the musculoskeletal system.',
    },
  ];

  return (
    <section id="services" className="pt-12 pb-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div 
            className="flex justify-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
              Our Services
            </span>
          </motion.div>
          <AnimatedHeading 
            as="h2" 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            delay={0.2}
          >
            Comprehensive Healthcare Services
          </AnimatedHeading>
          <motion.p 
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            We offer a wide range of medical services to meet all your healthcare needs with the highest standards of quality and care.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="/our-specialities"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Services
            <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
