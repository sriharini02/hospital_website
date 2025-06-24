import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaHospital, FaUserMd, FaAward, FaHeartbeat, FaUsers, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import dynamic from 'next/dynamic';

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
      <div className="relative bg-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="text-lg">
            <Link href="/" className="hover:underline">Home</Link> &gt; <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2000, our hospital began as a small healthcare facility with a big vision: to provide exceptional medical care to our community. 
                What started as a modest 50-bed hospital has grown into a leading multi-specialty healthcare institution with state-of-the-art facilities.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've expanded our services, incorporated cutting-edge technology, and assembled a team of highly skilled medical professionals 
                who share our commitment to excellence in patient care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/doctors" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
                  Meet Our Doctors
                </Link>
                <Link href="/contact" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md font-medium transition-colors duration-200">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://content.jdmagicbox.com/v2/comp/hyderabad/f4/040pxx40.xx40.220714152317.h2f4/catalogue/lifecare-hospitals-chaitanya-nagar-b-n-reddy-nagar-hyderabad-hospitals-q0ik222w9n.jpg"
                  alt="Our Hospital"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Hospital at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center">
                  {stat.icon}
                  <span className="text-3xl font-bold text-gray-800">{stat.number}</span>
                  <span className="text-gray-600">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Guiding Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {value.icon}
                  <h3 className="text-xl font-semibold ml-2">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Carousel */}
      <VideoCarousel />

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Journey</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  <div className="hidden md:flex w-1/2">
                    {index % 2 === 0 && <div className="w-full"></div>}
                    <div className={`w-full ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-blue-600">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center w-full md:w-auto">
                    <div className="relative">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="md:hidden absolute top-16 left-1/2 w-1 h-12 bg-blue-200 transform -translate-x-1/2"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:hidden w-full mt-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-blue-600">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-80 bg-gray-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{leader.name}</h3>
                  <p className="text-blue-600 font-medium">{leader.position}</p>
                  <p className="text-gray-600 mt-2">{leader.bio}</p>
                </div>
              </div>
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
