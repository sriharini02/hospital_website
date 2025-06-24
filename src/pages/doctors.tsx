import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaUserMd, FaCalendarAlt, FaPhoneAlt, FaHospital, FaMapMarkerAlt } from 'react-icons/fa';

interface Doctor {
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

// Doctors data with their specialties and details
const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. A. Sharma',
    designation: 'Senior Cardiologist',
    department: 'Cardiology',
    experience: '15 years',
    image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg',
    bio: 'Dr. Sharma is a renowned cardiologist with over 15 years of experience in interventional cardiology, specializing in complex coronary interventions and structural heart diseases.',
    qualifications: ['MD, DM (Cardiology)', 'Fellowship in Interventional Cardiology', 'FACC, FSCAI'],
    languages: ['English', 'Hindi', 'Telugu']
  },
  {
    id: 2,
    name: 'Dr. Priya Reddy',
    designation: 'Senior Neurologist',
    department: 'Neurology',
    experience: '12 years',
    image: 'https://karetrip-assets.s3.ap-south-1.amazonaws.com/doctors/dr-priya-roy.webp',
    bio: 'Dr. Reddy specializes in treating complex neurological disorders including stroke, epilepsy, and multiple sclerosis with a patient-centered approach.',
    qualifications: ['DM (Neurology)', 'Fellowship in Stroke Medicine', 'Board Certified Neurologist'],
    languages: ['English', 'Hindi', 'Telugu', 'Tamil']
  },
  {
    id: 3,
    name: 'Dr. Rajesh Kumar',
    designation: 'Orthopedic Surgeon',
    department: 'Orthopedics',
    experience: '18 years',
    image: 'https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg',
    bio: 'Specializing in joint replacement and sports medicine, Dr. Kumar has successfully performed over 5000 orthopedic surgeries with excellent outcomes.',
    qualifications: ['MS (Ortho)', 'Fellowship in Joint Replacement', 'MCh (Ortho)'],
    languages: ['English', 'Hindi', 'Telugu']
  },
  {
    id: 4,
    name: 'Dr. Ananya Patel',
    designation: 'Pediatrician',
    department: 'Pediatrics',
    experience: '10 years',
    image: 'https://img.freepik.com/free-photo/doctor-with-white-coat-stethoscope_144627-43879.jpg',
    bio: 'Dr. Patel is a compassionate pediatrician with expertise in neonatal care and childhood diseases, dedicated to providing the best care for your little ones.',
    qualifications: ['MD (Pediatrics)', 'Fellowship in Neonatology', 'IAP Fellowship'],
    languages: ['English', 'Hindi', 'Gujarati']
  },
  {
    id: 5,
    name: 'Dr. Vikram Singh',
    designation: 'Dermatologist',
    department: 'Dermatology',
    experience: '14 years',
    image: 'https://i0.wp.com/drsinghnegi.com/wp-content/uploads/2024/02/doc-2.webp?fit=667%2C500&ssl=1',
    bio: 'Specializing in cosmetic dermatology and skin cancer treatments, Dr. Singh is known for his expertise in advanced dermatological procedures.',
    qualifications: ['MD (Dermatology)', 'Fellowship in Cosmetic Dermatology', 'IADVL Fellowship'],
    languages: ['English', 'Hindi', 'Punjabi']
  },
  {
    id: 6,
    name: 'Dr. Meera Krishnan',
    designation: 'Ophthalmologist',
    department: 'Ophthalmology',
    experience: '16 years',
    image: 'https://www.kimshealth.org/media/filer_public_thumbnails/filer_public/b4/e7/b4e790a6-b207-48b2-b698-4623b95058f4/dr-meera-r.png__247x278_q85_crop_subsampling-2.jpg',
    bio: 'Dr. Krishnan specializes in cataract and refractive surgeries, with extensive experience in treating complex eye conditions and performing LASIK procedures.',
    qualifications: ['MS (Ophthalmology)', 'Fellowship in Cataract & Refractive Surgery', 'FAICO'],
    languages: ['English', 'Hindi', 'Tamil', 'Malayalam']
  },
  {
    id: 7,
    name: 'Dr. Arun Malhotra',
    designation: 'ENT Specialist',
    department: 'ENT',
    experience: '20 years',
    image: 'https://content3.jdmagicbox.com/comp/agra/l7/0562px562.x562.170127200619.g3l7/catalogue/arun-child-hospital-shah-ganj-agra-children-hospitals-sww4kngqr7.jpg',
    bio: 'With two decades of experience, Dr. Malhotra specializes in advanced ENT surgeries including cochlear implants and endoscopic sinus surgeries.',
    qualifications: ['MS (ENT)', 'Fellowship in Head & Neck Surgery', 'FRCS (Edinburgh)'],
    languages: ['English', 'Hindi', 'Punjabi']
  },
  {
    id: 8,
    name: 'Dr. Neha Gupta',
    designation: 'Gynecologist',
    department: 'Obstetrics & Gynecology',
    experience: '11 years',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqpGozVVrOOLxurOaqjOWXkLcHM-ONUoRog&s',
    bio: 'Dr. Gupta specializes in high-risk pregnancies and laparoscopic gynecological surgeries, providing compassionate care to women of all ages.',
    qualifications: ['MD (OBG)', 'Fellowship in Reproductive Medicine', 'FMAS'],
    languages: ['English', 'Hindi', 'Bengali']
  },
  {
    id: 9,
    name: 'Dr. Sanjay Verma',
    designation: 'Gastroenterologist',
    department: 'Gastroenterology',
    experience: '17 years',
    image: 'https://service-prep.tenethealth.com/images/Physicians/uploads/aynwzjvr.jpg',
    bio: 'Specializing in advanced endoscopic procedures and liver diseases, Dr. Verma is a leading expert in therapeutic endoscopy and hepatology.',
    qualifications: ['DM (Gastroenterology)', 'Fellowship in Therapeutic Endoscopy', 'FACP'],
    languages: ['English', 'Hindi', 'Marathi']
  },
];

const departments = [
  'All Specialities',
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Dermatology',
  'Ophthalmology',
  'ENT',
  'Obstetrics & Gynecology',
  'Gastroenterology',
  'Psychiatry'
];

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All Specialities');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const filteredDoctors = doctors.filter((doctor: Doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       doctor.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All Specialities' || doctor.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Meet Our Doctors | Hospital Name</title>
        <meta name="description" content="Meet our team of expert doctors and medical professionals dedicated to your health and well-being." />
      </Head>

      {/* Banner Section */}
      <div className="relative bg-blue-700 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Doctors</h1>
          <div className="text-lg">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>Our Doctors</span>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Expert Medical Care You Can Trust</h2>
            <p className="text-gray-600 text-lg">
              Our team of highly qualified and experienced doctors is dedicated to providing exceptional healthcare services. 
              With expertise across various specialties, we ensure comprehensive and personalized care for all our patients.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter 
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search by doctor name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="block w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Doctors Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Expert Doctors</h2>
          
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor: Doctor) => (
                <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64 bg-gray-200">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium">{doctor.designation}</p>
                    <div className="flex items-center mt-2 text-gray-600">
                      <FaHospital className="mr-2" />
                      <span>{doctor.department}</span>
                    </div>
                    <div className="flex items-center mt-1 text-gray-600">
                      <FaCalendarAlt className="mr-2" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <button 
                        onClick={() => setSelectedDoctor(doctor)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View Profile
                      </button>
                      <Link 
                        href="/book-appointment" 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No doctors found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button 
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="md:flex">
                <div className="md:w-1/3 bg-gray-100 p-6 flex items-center justify-center">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={(selectedDoctor as Doctor).image}
                      alt={(selectedDoctor as Doctor).name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{(selectedDoctor as Doctor).name}</h2>
                  <p className="text-blue-600 text-xl font-medium mb-4">{(selectedDoctor as Doctor).designation}</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaHospital className="mr-2" />
                    <span>{(selectedDoctor as Doctor).department} Department</span>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-lg mb-2">About {(selectedDoctor as Doctor).name.split(' ')[0]} {(selectedDoctor as Doctor).name.split(' ')[1]}</h3>
                    <p className="text-gray-700">{(selectedDoctor as Doctor).bio}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Education & Qualifications</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {(selectedDoctor as Doctor).qualifications.map((qual: string, index: number) => (
                        <li key={index} className="text-gray-700">{qual}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Languages Spoken</h4>
                    <div className="flex flex-wrap gap-2">
                      {(selectedDoctor as Doctor).languages.map((lang: string, index: number) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link 
                      href="/book-appointment"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-center font-medium transition-colors duration-200"
                    >
                      Book Appointment
                    </Link>
                    <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors duration-200">
                      View Availability
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
