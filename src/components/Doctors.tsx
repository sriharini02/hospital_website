import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaUserMd, FaStar, FaArrowRight } from 'react-icons/fa';
import { fadeInUp, stagger, slideIn } from '@/utils/animations';

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  image?: string;
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialization,
  experience,
  rating,
  image,
  social = {}
}) => {
  const { facebook, twitter, linkedin, instagram } = social;

  return (
    <motion.div 
      className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative overflow-hidden">
        <div className="h-72 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          ) : (
            <FaUserMd className="text-gray-300 text-8xl" />
          )}
        </div>
        <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center shadow-md">
          <FaStar className="mr-1 text-yellow-700" /> {rating}
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-1">{name}</h3>
            <p className="text-blue-200 font-medium">{specialization}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{name}</h3>
          <p className="text-blue-600 font-medium">{specialization}</p>
          <p className="text-gray-500 text-sm mt-1">{experience} years of experience</p>
        </div>
        
        <div className="mt-auto">
          <div className="flex justify-center space-x-4 mb-4">
            {facebook && (
              <motion.a 
                href={facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaFacebook className="text-xl" />
              </motion.a>
            )}
            {twitter && (
              <motion.a 
                href={twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaTwitter className="text-xl" />
              </motion.a>
            )}
            {linkedin && (
              <motion.a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
            )}
            {instagram && (
              <motion.a 
                href={instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaInstagram className="text-xl" />
              </motion.a>
            )}
          </div>
          <motion.a 
            href="#" 
            className="mt-4 block w-full text-center py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center group-hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Appointment
            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export function Doctors() {
  const doctors: DoctorCardProps[] = [
    {
      name: 'Dr.A Sharma',
      specialization: 'Cardiologist',
      experience: 12,
      rating: 4.9,
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg',
      social: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Dr.Priya Reddy',
      specialization: 'Neurologist',
      experience: 15,
      rating: 4.8,
      image: 'https://karetrip-assets.s3.ap-south-1.amazonaws.com/doctors/dr-priya-roy.webp',
      social: {
        linkedin: '#'
      }
    },
    {
      name: 'Dr. Ananya Patel',
      specialization: 'Pediatrician',
      experience: 8,
      rating: 4.7,
      image: 'https://img.freepik.com/free-photo/doctor-with-white-coat-stethoscope_144627-43879.jpg',
      social: {
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Dr. Rajesh Kumar',
      specialization: 'Orthopedic Surgeon',
      experience: 18,
      rating: 4.9,
      image: 'https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg',
      social: {
        facebook: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section id="doctors" className="pt-10 pb-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.span 
            className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2"
            variants={fadeInUp}
          >
            Our Doctors
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            Meet Our Expert Specialists
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto"
            variants={fadeInUp}
          ></motion.div>
          <motion.p 
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Our team of highly qualified doctors is dedicated to providing the best healthcare services with compassion and expertise.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index * 0.1}
            >
              <DoctorCard
                name={doctor.name}
                specialization={doctor.specialization}
                experience={doctor.experience}
                rating={doctor.rating}
                image={doctor.image}
                social={doctor.social}
              />
            </motion.div>
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
            href="/doctors"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Doctors
            <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
