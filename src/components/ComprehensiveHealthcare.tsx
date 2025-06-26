import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaHeartbeat, FaBrain, FaBone, FaEye, FaTooth, FaBaby, FaLungs, FaProcedures, FaUserMd, FaStethoscope, FaClinicMedical, FaSyringe } from 'react-icons/fa';
import { fadeInUp, stagger, slideIn } from '@/utils/animations';

interface Speciality {
  id: number;
  name: string;
  doctorName: string;
  specialistIn: string;
  availability: string;
  description: string;
  icon: JSX.Element;
  image: string;
  treatments: string[];
}

const specialities: Speciality[] = [
  {
    id: 1,
    name: 'Cardiology',
    doctorName: 'Dr.A Sharma',
    specialistIn: 'Cardiologist',
    availability: 'Mon - Fri: 9:00 AM - 5:00 PM',
    description: 'Comprehensive heart care including diagnostics, treatment, and rehabilitation for all cardiac conditions.',
    icon: <FaHeartbeat className="h-10 w-10 text-blue-600" />,
    image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg',
    treatments: ['Angioplasty', 'ECG', 'Echocardiogram', 'Cardiac Rehab']
  },
  {
    id: 2,
    name: 'Neurology',
    doctorName: 'Dr. Priya Reddy',
    specialistIn: 'Neurologist',
    availability: 'Mon, Wed, Fri: 10:00 AM - 6:00 PM',
    description: 'Expert care for disorders of the brain, spine, and nervous system with advanced diagnostic tools.',
    icon: <FaBrain className="h-10 w-10 text-blue-600" />,
    image: 'https://t4.ftcdn.net/jpg/06/47/16/29/360_F_647162966_SFu8GP6awkeW0OnFnAxPjiGXSoeme4ht.jpg',
    treatments: ['EEG', 'EMG', 'Nerve Conduction Studies', 'Botulinum Toxin Therapy']
  },
  {
    id: 3,
    name: 'Orthopedics',
    doctorName: 'Dr. Rajesh Kumar',
    specialistIn: 'Orthopedic Surgeon',
    availability: 'Tue, Thu, Sat: 8:00 AM - 4:00 PM',
    description: 'Specialized care for bones, joints, ligaments, tendons, and muscles with minimally invasive techniques.',
    icon: <FaBone className="h-10 w-10 text-blue-600" />,
    image: 'https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg',
    treatments: ['Joint Replacement', 'Arthroscopy', 'Fracture Care', 'Sports Medicine']
  },
  {
    id: 4,
    name: 'Ophthalmology',
    doctorName: 'Dr. Meera Krishnan',
    specialistIn: 'Ophthalmologist',
    availability: 'Mon - Sat: 9:00 AM - 6:00 PM',
    description: 'Comprehensive eye care including diagnosis, treatment, and surgery for all eye conditions and vision problems.',
    icon: <FaEye className="h-10 w-10 text-blue-600" />,
    image: 'https://www.shutterstock.com/image-photo/cheerful-millennial-lady-doctor-white-600nw-2408068201.jpg',
    treatments: ['Cataract Surgery', 'Glaucoma Treatment', 'LASIK', 'Diabetic Eye Care']
  }
];

const ComprehensiveHealthcare: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;
    
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isPaused]);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === specialities.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? specialities.length - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  const currentSpeciality = specialities[currentIndex];

  return (
    <section className="pt-16 pb-8 bg-white w-full">
      <div className="max-w-full px-4">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div 
            className="flex justify-center mb-4"
            variants={fadeInUp}
          >
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Our Specialists
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           Find your right doctor for best consulatation
          </h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            We offer comprehensive healthcare services across various medical specialities with a team of experienced specialists.
          </motion.p>
        </motion.div>

        <div 
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-6">
            {/* Left Side - Doctor Image */}
            <div className="relative w-full lg:w-5/12 h-80 lg:h-auto bg-gray-100 rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSpeciality.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full relative"
                >
                  <div className="w-full h-full overflow-hidden rounded-[10px]">
                    <img 
                      src={currentSpeciality.image} 
                      alt={currentSpeciality.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-xl max-w-xs border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                        {React.cloneElement(currentSpeciality.icon, { className: 'h-6 w-6 text-blue-600' })}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{currentSpeciality.doctorName}</h3>
                        <p className="text-sm text-blue-600 font-medium">{currentSpeciality.specialistIn}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{currentSpeciality.availability}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous doctor"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Next doctor"
              >
                <FaChevronRight />
              </button>
            </div>
            
            {/* Right Side - Doctor Info */}
            <div className="w-full lg:w-7/12 py-6 pr-6 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSpeciality.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentSpeciality.name}</h3>
                    <p className="text-gray-600 mb-6">{currentSpeciality.description}</p>
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        {React.cloneElement(currentSpeciality.icon, { className: 'h-8 w-8 text-blue-600' })}
                      </div>
                      <span className="text-sm text-gray-600">Expert Care • Advanced Treatment • Comprehensive Services</span>
                    </div>
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-800">Key Treatments:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {currentSpeciality.treatments.map((treatment, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                            <span className="text-sm text-gray-600">{treatment}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <button 
                      onClick={() => router.push('/book-appointment')}
                      className="px-6 py-3 text-white font-medium rounded-lg transition-colors duration-300 flex-1 sm:flex-none"
                      style={{ backgroundColor: 'rgb(37, 99, 235)' }}
                    >
                      Book Consultation
                    </button>
                    
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Dots Navigation */}
              <div className="flex justify-center mt-8 space-x-2">
                {specialities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Explore More Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => router.push('/our-specialities')}
            className="px-8 py-3 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center"
            style={{ backgroundColor: 'rgb(37, 99, 235)' }}
          >
            Explore More Specialities
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveHealthcare;
