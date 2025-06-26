import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaCalendarAlt, FaArrowRight, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { fadeInUp, stagger } from '@/utils/animations';

interface DoctorCardProps {
  id: number;
  name: string;
  designation: string;
  department: string;
  experience: string;
  image: string;
  bio: string;
  qualifications: string[];
  languages: string[];
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  id,
  name,
  designation,
  department,
  experience,
  image,
  bio,
  qualifications,
  languages
}) => {
  return (
    <motion.div 
      className="group relative flex flex-col items-center px-4 pt-4 pb-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full flex flex-col items-center">
        <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 group-hover:ring-4 ring-blue-100 ring-offset-4 ring-offset-white transition-all duration-300">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
            <a href="#" className="bg-white/90 rounded-full p-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              <FaFacebookF size={12} />
            </a>
            <a href="#" className="bg-white/90 rounded-full p-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              <FaTwitter size={12} />
            </a>
            <a href="#" className="bg-white/90 rounded-full p-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              <FaLinkedinIn size={12} />
            </a>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors text-center">
          {name}
        </h3>
        <p className="text-blue-600 font-medium text-center mb-3">{designation}</p>
        
        <div className="text-center mb-4">
          <p className="text-gray-600 text-sm mb-2">
            <FaUserMd className="inline-block mr-2 text-blue-500" />
            {department}
          </p>
          <p className="text-gray-500 text-sm">
            <FaCalendarAlt className="inline-block mr-2 text-blue-400" />
            {experience} Experience
          </p>
        </div>
        
        <a 
          href={`/book-appointment?doctor=${encodeURIComponent(name)}`}
          className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group-hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors"
        >
          View Profile
          <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      <div className="absolute inset-0 -z-10 rounded-xl bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"></div>
    </motion.div>
  );
};

export function Doctors() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. A. Sharma',
      designation: 'Senior Cardiologist',
      department: 'Cardiology',
      experience: '15 years',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg',
      bio: 'Specializes in interventional cardiology and complex coronary interventions.',
      qualifications: ['MD, DM (Cardiology)'],
      languages: ['English', 'Hindi', 'Telugu']
    },
    {
      id: 2,
      name: 'Dr. Priya Reddy',
      designation: 'Senior Neurologist',
      department: 'Neurology',
      experience: '12 years',
      image: 'https://karetrip-assets.s3.ap-south-1.amazonaws.com/doctors/dr-priya-roy.webp',
      bio: 'Specializes in treating neurological disorders including stroke and epilepsy.',
      qualifications: ['DM (Neurology)'],
      languages: ['English', 'Hindi', 'Telugu']
    },
    {
      id: 3,
      name: 'Dr. Ananya Patel',
      designation: 'Pediatrician',
      department: 'Pediatrics',
      experience: '8 years',
      image: 'https://img.freepik.com/free-photo/doctor-with-white-coat-stethoscope_144627-43879.jpg',
      bio: 'Specializes in child healthcare and development.',
      qualifications: ['MD (Pediatrics)'],
      languages: ['English', 'Hindi', 'Gujarati']
    },
    {
      id: 4,
      name: 'Dr. Rajesh Kumar',
      designation: 'Orthopedic Surgeon',
      department: 'Orthopedics',
      experience: '18 years',
      image: 'https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg',
      bio: 'Specializes in joint replacements and sports injuries.',
      qualifications: ['MS (Ortho)'],
      languages: ['English', 'Hindi', 'Tamil']
    }
  ];

  return (
    <section id="doctors" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div 
            variants={fadeInUp}
          >
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Doctors
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet Our Expert Specialists
          </motion.h2>
          <p className="text-lg text-gray-600 mt-4">
            Our team of highly qualified doctors is dedicated to providing exceptional healthcare services with compassion and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              id={doctor.id}
              name={doctor.name}
              designation={doctor.designation}
              department={doctor.department}
              experience={doctor.experience}
              image={doctor.image}
              bio={doctor.bio}
              qualifications={doctor.qualifications}
              languages={doctor.languages}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="/doctors"
            className="inline-flex items-center px-8 py-3 text-white font-medium rounded-lg transition-colors duration-300"
            style={{ backgroundColor: 'rgb(37, 99, 235)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Doctors
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
