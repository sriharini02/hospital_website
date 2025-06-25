import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCalendarAlt, FaPhone } from 'react-icons/fa';
import { fadeInUp, stagger } from '@/utils/animations';
import { AnimatedHeading } from './ui/AnimatedHeading';

// Hospital images for the hero carousel with dimensions
const heroImages = [
  {
    src: 'https://i.vimeocdn.com/video/1763617005-fd51e626de54a7b7a683cd6724bd030ca6b59095295f73192bd589b5a361dcf3-d',
    alt: 'Modern hospital facility with advanced medical equipment',
    width: 1920,
    height: 1080
  },
  {
    src: 'https://healthcentric.com/wp-content/uploads/2021/05/healtHcentricAloe_EmergencyRoom.jpg',
    alt: 'Emergency room with medical staff ready for patient care',
    width: 1920,
    height: 1080
  },
  {
    src: 'https://images.cnbctv18.com/uploads/2021/05/icubeds1.jpg',
    alt: 'Modern ICU with advanced medical equipment',
    width: 1920,
    height: 1080
  },
  {
    src: 'https://content.jdmagicbox.com/v2/comp/hyderabad/k7/040pxx40.xx40.240426100746.f5k7/catalogue/lifecare-hospital-bandlaguda-jagir-kismatpura-hyderabad-hospitals-eim6dn1u4j.jpg',
    alt: 'LifeCare Hospital modern facility exterior',
    width: 1920,
    height: 1080
  }
];

export function Hero() {
  const stats = [
    { number: '500+', label: 'Expert Doctors' },
    { number: '50+', label: 'Medical Departments' },
    { number: '50,000+', label: 'Happy Patients' },
    { number: '24/7', label: 'Emergency Services' },
  ];

  const sliderRef = React.useRef<Slider>(null);

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-white pt-16 pb-8 md:pb-12 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-50 -mr-32 -mt-32"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.span 
              className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4"
              variants={fadeInUp}
            >
              Welcome to LifeCare Hospital
            </motion.span>
            
            <div className="w-full mb-4">
              <AnimatedHeading as="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <div className="mb-0">Your Health is Our</div>
                <div className="text-blue-600 -mt-2">Top Priority</div>
              </AnimatedHeading>
            </div>
            
            <AnimatedHeading as="h2" className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl" delay={0.2}>
              Providing exceptional healthcare services with compassion and cutting-edge technology. 
              Our team of expert doctors is dedicated to your well-being.
            </AnimatedHeading>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <motion.a
                href="#appointment"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaCalendarAlt className="mr-2" />
                Book Appointment
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 border border-blue-600 text-base font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPhone className="mr-2 transform rotate-90" />
                Emergency Call
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
              <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden">
                <Slider 
                  ref={sliderRef}
                  dots={true}
                  infinite={true}
                  speed={1000}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={3000}
                  className="h-full"
                  dotsClass="slick-dots !bottom-4"
                >
                  {heroImages.map((image, index) => (
                    <div key={index} className="relative h-[400px] md:h-[450px] w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                  ))}
                </Slider>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Stats Grid */}
                <div className="absolute bottom-0 left-0 right-0">
                  <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-2 px-2 sm:px-4 md:px-6 w-full max-w-6xl mx-auto mb-4"
                    initial="initial"
                    animate="animate"
                    variants={stagger}
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-white p-3 rounded-lg shadow-md text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-center min-h-[80px]"
                        variants={fadeInUp}
                      >
                        <p className="text-lg md:text-xl font-bold text-blue-600 leading-none mb-1">{stat.number}</p>
                        <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
