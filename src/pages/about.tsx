import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Banner } from '@/components/ui/Banner';
import { FaHospital, FaUserMd, FaAward, FaHeartbeat, FaUsers, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Import types from framer-motion
import { Variants, Transition } from 'framer-motion';

// Define a custom easing function type
type EasingFunction = (t: number) => number;

// Animation variants with proper typing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as unknown as EasingFunction
    }
  }
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const slideIn = (direction: 'left' | 'right' = 'left'): Variants => ({
  hidden: { 
    opacity: 0, 
    x: direction === 'left' ? -50 : 50 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as unknown as EasingFunction
    }
  }
});

// Import VideoCarousel component
const VideoCarousel = dynamic(() => import('../components/VideoCarousel'), {
  ssr: false,
});


const stats = [
  { icon: <FaUserMd className="text-4xl text-blue-600 mb-2" />, number: '200+', label: 'Expert Doctors' },
  { icon: <FaHospital className="text-4xl text-blue-600 mb-2" />, number: '50+', label: 'Specialties' },
  { icon: <FaHeartbeat className="text-4xl text-blue-600 mb-2" />, number: '1M+', label: 'Patients Treated' },
  { icon: <FaAward className="text-4xl text-blue-600 mb-2" />, number: '25+', label: 'Years of Service' },
];

const values = [
  {
    title: 'Our Mission',
    description: 'To provide exceptional healthcare services with compassion, innovation, and excellence, making a meaningful difference in the lives of our patients.',
    icon: <FaCheckCircle className="text-blue-600 text-2xl" />
  },
  {
    title: 'Our Vision',
    description: 'To be the most trusted healthcare provider, recognized for clinical excellence and patient-centered care in the region.',
    icon: <FaCheckCircle className="text-blue-600 text-2xl" />
  },
  {
    title: 'Core Values',
    description: 'Compassion, Integrity, Excellence, Innovation, and Patient-Centered Care guide everything we do.',
    icon: <FaCheckCircle className="text-blue-600 text-2xl" />
  }
];

const milestones = [
  { year: '2000', title: 'Foundation', description: 'Established with a vision for quality healthcare' },
  { year: '2005', title: 'Expansion', description: 'Added new specialty departments' },
  { year: '2010', title: 'Accreditation', description: 'Received NABH accreditation' },
  { year: '2015', title: 'Technology', description: 'Implemented advanced medical technologies' },
  { year: '2020', title: 'Pandemic Response', description: 'Served as a COVID-19 treatment center' },
  { year: '2023', title: 'Modernization', description: 'Completed hospital expansion and renovation' },
];

const leadership = [
  {
    name: 'Dr. Ramesh Kumar',
    position: 'Founder & Chairman',
    image: 'https://ashrayahospitals.com/wp-content/uploads/2021/06/services-370x461-2.jpg',
    bio: 'With over 30 years of experience in healthcare management, Dr. Kumar has been instrumental in shaping our hospital\'s vision and growth.'
  },
  {
    name: 'Dr. Priya Singh',
    position: 'Medical Director',
    image: 'https://www.apexhospitals.com/_next/image?url=https%3A%2F%2Fbed.apexhospitals.com%2Fuploads%2FDr_Priya_4d642fcb24.png&w=640&q=75',
    bio: 'A renowned specialist with numerous publications, Dr. Singh leads our clinical excellence initiatives.'
  },
  {
    name: 'Dr. Arjun Mehta',
    position: 'CEO',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMCBa25nR1rxuMeJNz79aEjrAstxCUXUKMg&s',
    bio: 'Bringing over 20 years of healthcare administration experience, Dr. Mehta oversees our hospital operations.'
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Us | Hospital Name</title>
        <meta name="description" content="Learn about our hospital's history, mission, and the team dedicated to your health and well-being." />
      </Head>

      {/* Hero Banner */}
      <Banner 
        title="About Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />

      {/* Our Story */}
      <motion.section 
        className="py-16 bg-white overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div 
              className="md:w-1/2 mb-12 md:mb-0 md:pr-8"
              variants={fadeInUp}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Story
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-4 text-lg leading-relaxed"
                variants={fadeInUp}
              >
                Founded in 2000, our hospital began as a small healthcare facility with a big vision: to provide exceptional medical care to our community. 
              </motion.p>
              <motion.p 
                className="text-gray-600 mb-8 text-lg leading-relaxed"
                variants={fadeInUp}
              >
                What started as a modest 50-bed hospital has grown into a leading multi-specialty healthcare institution with state-of-the-art facilities and a team of highly skilled medical professionals.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/doctors" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                    Meet Our Doctors
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/contact" className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ 
                scale: 1, 
                opacity: 1,
                transition: { 
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                } 
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                <Image
                  src="https://content.jdmagicbox.com/v2/comp/hyderabad/f4/040pxx40.xx40.220714152317.h2f4/catalogue/lifecare-hospitals-chaitanya-nagar-b-n-reddy-nagar-hyderabad-hospitals-q0ik222w9n.jpg"
                  alt="Our Hospital"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-5 rounded-xl shadow-2xl z-10 overflow-hidden min-w-[140px]">
                <div className="relative z-10">
                  <span className="block text-2xl font-bold">25+</span>
                  <span className="text-sm">Years Experience</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hospital at a Glance
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group border border-blue-50 hover:border-blue-100"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5,
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.03,
                  borderColor: '#dbeafe' // blue-100
                }}
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.span 
                    className="block text-3xl font-bold text-gray-800 mb-1"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.1 * index
                    }}
                  >
                    {stat.number}
                  </motion.span>
                  <span className="text-gray-600 text-sm md:text-base">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission, Vision & Values */}
      <motion.section 
        className="py-20 bg-white overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Guiding Principles
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg border border-blue-50 select-none cursor-default"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: { 
                      duration: 0.6,
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }
                  }
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  rotate: index % 2 === 0 ? 0.5 : -0.5,
                  boxShadow: '0 15px 30px -5px rgba(59, 130, 246, 0.2)',
                  borderColor: 'rgba(59, 130, 246, 0.3)'
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15
                }}
              >
                <motion.div 
                  className="flex items-center mb-6"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="p-3 bg-blue-100 rounded-lg text-blue-600"
                    whileHover={{ 
                      rotate: [0, 10, -5, 10, 0],
                      scale: [1, 1.1, 1.05, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 1,
                      ease: 'easeInOut',
                      times: [0, 0.2, 0.5, 0.8, 1]
                    }}
                  >
                    {value.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold ml-4 text-gray-800"
                    whileHover={{ color: '#2563eb' }}
                  >
                    {value.title}
                  </motion.h3>
                </motion.div>
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  whileHover={{ color: '#4b5563' }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Video Carousel */}
      <VideoCarousel />

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16 overflow-hidden"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 inline-block"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our Leadership
            </motion.h2>
            <motion.div 
              
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {leadership.map((leader, index) => (
                  <motion.div 
                    key={index}
                    className="group relative flex flex-col items-center px-4 pt-4 pb-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative w-full flex flex-col items-center">
                      <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 group-hover:ring-4 ring-blue-100 ring-offset-4 ring-offset-white transition-all duration-300">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                          <a href="#" className="bg-white/90 rounded-full p-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.797v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </a>
                          <a href="#" className="bg-white/90 rounded-full p-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          </a>
                          <a href="#" className="bg-white/90 rounded-full p-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors text-center">
                        {leader.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-center mb-3">{leader.position}</p>
                      
                      <div className="text-center mb-4">
                        <p className="text-gray-600 text-sm mb-2">
                          {leader.bio}
                        </p>
                      </div>
                      
                      <a 
                        href="/doctors"
                        className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group-hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                      >
                        View Profile
                        <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                    <div className="absolute inset-0 -z-10 rounded-xl bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-[#E0F2FE] text-[#1E3A8A]">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Experience Exceptional Healthcare</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Our team is dedicated to providing you with the highest quality care in a compassionate and supportive environment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/book-appointment" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
                  Book an Appointment
                </Link>
                <Link href="/contact" className="border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:bg-opacity-10 px-8 py-3 rounded-full font-medium transition-colors duration-200">
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </div>
      );
    }
