import React from 'react';
import { FaHeartbeat, FaBrain, FaBone, FaEye, FaTooth, FaBaby, FaLungs, FaProcedures, FaUserMd, FaStethoscope, FaClinicMedical, FaSyringe } from 'react-icons/fa';

const specialities = [
  {
    name: 'Cardiology',
    description: 'Comprehensive heart care including diagnostics, treatment, and rehabilitation for all cardiac conditions.',
    icon: <FaHeartbeat className="h-10 w-10 text-blue-600" />,
  },
  {
    name: 'Neurology',
    description: 'Expert care for disorders of the brain, spine, and nervous system with advanced diagnostic tools.',
    icon: <FaBrain className="h-10 w-10 text-blue-600" />,
  },
  {
    name: 'Orthopedics',
    description: 'Specialized care for bones, joints, ligaments, tendons, and muscles with minimally invasive techniques.',
    icon: <FaBone className="h-10 w-10 text-blue-600" />,
  },
  {
    name: 'Ophthalmology',
    description: 'Complete eye care services including cataract surgery, LASIK, and treatment for eye diseases.',
    icon: <FaEye className="h-10 w-10 text-blue-600" />,
  },
  {
    name: 'Dentistry',
    description: 'Comprehensive dental care including cosmetic dentistry, implants, and oral surgery.',
    icon: <FaTooth className="h-10 w-10 text-blue-600" />,
  },
  {
    name: 'Pediatrics',
    description: 'Specialized healthcare for infants, children, and adolescents in a child-friendly environment.',
    icon: <FaBaby className="h-10 w-10 text-blue-600" />,
  },
  {
    name: 'Pulmonology',
    description: 'Expert diagnosis and treatment for respiratory conditions including asthma and COPD.',
    icon: <FaLungs className="h-10 w-10 text-blue-600" />,
  },
  {
    name: 'General Surgery',
    description: 'Advanced surgical procedures using minimally invasive techniques for faster recovery.',
    icon: <FaProcedures className="h-10 w-10 text-blue-600" />,
  },
  {
    name: 'Internal Medicine',
    description: 'Comprehensive care for adults, focusing on the prevention, diagnosis, and treatment of diseases.',
    icon: <FaUserMd className="h-10 w-10 text-blue-600" />,
  },
  {
    name: 'ENT',
    description: 'Specialized care for ear, nose, and throat conditions with advanced diagnostic and treatment options.',
    icon: <FaStethoscope className="h-10 w-10 text-blue-600" />,
  },
  {
    name: 'Dermatology',
    description: 'Expert care for skin, hair, and nail conditions with advanced cosmetic and medical treatments.',
    icon: <FaClinicMedical className="h-10 w-10 text-blue-600" />,
  },
  {
    name: 'Rheumatology',
    description: 'Specialized care for arthritis and other rheumatic and musculoskeletal diseases.',
    icon: <FaSyringe className="h-10 w-10 text-blue-600" />,
  },
];

export function Specialities() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Medical Specialities
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive healthcare services across various medical specialities with a team of experienced specialists.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {specialities.map((speciality, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 rounded-md p-2">
                    {React.cloneElement(speciality.icon, { className: 'h-8 w-8 text-blue-600' })}
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-gray-900">
                    {speciality.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                  {speciality.description}
                </p>
                <div className="mt-4">
                  <a
                    href="/contact"
                    className="text-sm text-blue-600 font-medium hover:text-blue-500 inline-flex items-center"
                  >
                    Learn more <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
