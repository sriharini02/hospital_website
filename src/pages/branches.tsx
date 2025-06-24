import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaSearch, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaDirections } from 'react-icons/fa';

interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
  specialties: string[];
  features: string[];
  rating: number;
  reviewCount: number;
}

// Mock data - replace with actual data from your API
const branches = [
  {
    id: 1,
    name: 'LifeCare Main Hospital',
    address: '123 Health Avenue, Medical District, Hyderabad, Telangana 500032',
    phone: '+91 40 1234 5678',
    email: 'info@lifecarehyd.com',
    hours: '24/7 Emergency, OPD: 8:00 AM - 9:00 PM',
    coordinates: { lat: 17.3850, lng: 78.4867 },
    image: '/images/branches/main-hospital.jpg',
    specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Emergency', 'ICU', 'Surgery'],
    features: ['24/7 Emergency', 'ICU', 'Pharmacy', 'Diagnostics', 'Ambulance'],
    rating: 4.8,
    reviewCount: 1245
  },
  {
    id: 2,
    name: 'LifeCare Westside',
    address: '456 Wellness Road, Gachibowli, Hyderabad, Telangana 500032',
    phone: '+91 40 2345 6789',
    email: 'westside@lifecarehyd.com',
    hours: '8:00 AM - 10:00 PM, Emergency: 24/7',
    coordinates: { lat: 17.4401, lng: 78.3489 },
    image: '/images/branches/westside.jpg',
    specialties: ['Pediatrics', 'Dermatology', 'ENT', 'Dental', 'Ophthalmology'],
    features: ['Child Care', 'Dental Care', 'Eye Care', 'Pharmacy'],
    rating: 4.7,
    reviewCount: 876
  },
  {
    id: 3,
    name: 'LifeCare East Campus',
    address: '789 Healing Street, Uppal, Hyderabad, Telangana 500039',
    phone: '+91 40 3456 7890',
    email: 'east@lifecarehyd.com',
    hours: '7:00 AM - 11:00 PM, Emergency: 24/7',
    coordinates: { lat: 17.4016, lng: 78.5600 },
    image: '/images/branches/east-campus.jpg',
    specialties: ['Maternity', 'Pediatrics', 'General Medicine', 'Physiotherapy'],
    features: ['Mother & Child Care', 'Neonatal ICU', 'Vaccination', 'Wellness Programs'],
    rating: 4.6,
    reviewCount: 932
  },
  {
    id: 4,
    name: 'LifeCare North Point',
    address: '101 Care Circle, Kompally, Hyderabad, Telangana 500014',
    phone: '+91 40 4567 8901',
    email: 'north@lifecarehyd.com',
    hours: '7:30 AM - 10:30 PM, Emergency: 24/7',
    coordinates: { lat: 17.5500, lng: 78.5000 },
    image: '/images/branches/north-point.jpg',
    specialties: ['Orthopedics', 'Sports Medicine', 'Physiotherapy', 'Pain Management'],
    features: ['Advanced Physio', 'Joint Replacement', 'Sports Injury', 'Rehabilitation'],
    rating: 4.5,
    reviewCount: 754
  },
  {
    id: 5,
    name: 'LifeCare South City',
    address: '202 Wellness Boulevard, Kondapur, Hyderabad, Telangana 500084',
    phone: '+91 40 5678 9012',
    email: 'south@lifecarehyd.com',
    hours: '8:00 AM - 10:00 PM, Emergency: 24/7',
    coordinates: { lat: 17.4352, lng: 78.3824 },
    image: '/images/branches/south-city.jpg',
    specialties: ['Cardiology', 'Dermatology', 'Gastroenterology', 'Diabetology'],
    features: ['Cardiac Care', 'Dermatology', 'Endoscopy', 'Diabetes Management'],
    rating: 4.7,
    reviewCount: 1023
  },
  {
    id: 6,
    name: 'LifeCare Central Hub',
    address: '303 Care Plaza, Secunderabad, Hyderabad, Telangana 500003',
    phone: '+91 40 6789 0123',
    email: 'central@lifecarehyd.com',
    hours: '24/7 Emergency, OPD: 7:00 AM - 11:00 PM',
    coordinates: { lat: 17.4399, lng: 78.4983 },
    image: '/images/branches/central-hub.jpg',
    specialties: ['Neurology', 'Neurosurgery', 'Spine Care', 'Pain Management'],
    features: ['Advanced Neurology', 'Neurosurgery', 'Pain Clinic', 'Rehabilitation'],
    rating: 4.9,
    reviewCount: 1345
  }
];

export default function BranchesPage() {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(branches[0]);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Use all branches since we're removing the search filter
  const filteredBranches = branches;

  // Map placeholder with improved styling and interactive elements
  const MapPlaceholder = ({ branch }: { branch: Branch }) => (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-200 rounded-xl overflow-hidden shadow-sm">
      <div className="h-48 bg-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <FaMapMarkerAlt className="text-6xl text-blue-600/30" />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800">{branch.name}</h3>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
            <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-800">{branch.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({branch.reviewCount})</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{branch.address}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {branch.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {feature}
            </span>
          ))}
          {branch.features.length > 3 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              +{branch.features.length - 3} more
            </span>
          )}
        </div>
        <a 
          href={`https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates.lat},${branch.coordinates.lng}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          <FaDirections className="mr-2" /> Get Directions
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Our Branches | LifeCare Hospital</title>
        <meta name="description" content="Find your nearest LifeCare Hospital branch. We're expanding our network to provide quality healthcare closer to you." />
      </Head>

      {/* Banner Section */}
      <div className="relative bg-blue-700 text-white pt-16 pb-10 md:pt-20 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50">
          
          
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-white/20">
            <FaMapMarkerAlt className="mr-2 animate-pulse" />
            <span>Our Locations</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
            Find Your Nearest <br className="hidden md:block" />
            <span className="text-blue-100">LifeCare Branch</span>
          </h1>
          <p className="text-sm md:text-base max-w-3xl mx-auto text-blue-100/90 mb-3">
            Expert healthcare services across Hyderabad with state-of-the-art facilities.
            <span className="hidden md:inline"> We're here for you 24/7.</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="bg-green-400 rounded-full w-3 h-3 mr-2 animate-pulse"></div>
              <span className="text-sm">6 Locations</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <FaClock className="text-yellow-400 mr-2" />
              <span className="text-sm">24/7 Emergency</span>
            </div>
          </div>
        </div>
        
        {/* Animated circles 
        <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-blue-400/20"></div>
        <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-teal-400/20"></div>*/}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-35px md:pb-35px -mt-4">
        <div className="max-w-6xl mx-auto">
          {/* Branches List Header */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Our Hospital Locations</h2>
            <p className="text-gray-600 mt-2">Select a branch to view details and get directions</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Branches List */}
            <div className="lg:w-2/5 space-y-6">

              
              {filteredBranches.length > 0 ? (
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {filteredBranches.map((branch) => (
                    <div 
                      key={branch.id}
                      className={`p-6 rounded-xl cursor-pointer transition-all ${
                        selectedBranch?.id === branch.id 
                          ? 'bg-blue-50 border-2 border-blue-200 shadow-md' 
                          : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-sm'
                      }`}
                      onClick={() => setSelectedBranch(branch)}
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{branch.name}</h3>
                      <div className="flex items-start text-gray-600 mb-3">
                        <FaMapMarkerAlt className="mt-1 mr-2 text-blue-600 flex-shrink-0" />
                        <p className="text-sm">{branch.address}</p>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <FaPhone className="mr-2 text-blue-600 transform rotate-90" />
                        <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="hover:underline">
                          {branch.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <FaClock className="mr-2 text-blue-600" />
                        <span>{branch.hours}</span>
                      </div>
                      
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {branch.specialties.slice(0, 4).map((specialty, index) => (
                          <span key={index} className="inline-block bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full border border-blue-100">
                            {specialty}
                          </span>
                        ))}
                        {branch.specialties.length > 4 && (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{branch.specialties.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                  <FaMapMarkerAlt className="mx-auto text-4xl text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium text-gray-700">No branches found</h3>
                  <p className="text-gray-500 mt-1">Try adjusting your search or check back later.</p>
                </div>
              )}
            </div>

            {/* Map View */}
            <div className="lg:w-2/3 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
              {selectedBranch ? (
                <div className="h-full flex flex-col">
                  {/* Branch Image */}
                  <div className="h-48 md:h-64 bg-gray-200 relative">
                    <Image
                      src={selectedBranch.image}
                      alt={selectedBranch.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Branch Details */}
                  <div className="p-6 flex-grow">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">{selectedBranch.name}</h2>
                    
                    <div className="space-y-4">
                      <div className="flex">
                        <FaMapMarkerAlt className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">{selectedBranch.address}</p>
                          <a 
                            href={`https://www.google.com/maps/dir/?api=1&destination=${selectedBranch.coordinates.lat},${selectedBranch.coordinates.lng}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:underline text-sm mt-1"
                          >
                            <FaDirections className="mr-1" /> Get Directions
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <FaPhone className="mr-3 text-blue-600 transform rotate-90" />
                        <div>
                          <p className="text-gray-700">
                            <a href={`tel:${selectedBranch.phone.replace(/\s+/g, '')}`} className="hover:underline">
                              {selectedBranch.phone}
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <FaEnvelope className="mr-3 text-blue-600" />
                        <div>
                          <a href={`mailto:${selectedBranch.email}`} className="text-blue-600 hover:underline">
                            {selectedBranch.email}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <FaClock className="mt-1 mr-3 text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">{selectedBranch.hours}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Specialties & Services</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedBranch.specialties.map((specialty, index) => (
                          <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <a
                        href="/book-appointment"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Book an Appointment
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center p-8 text-center">
                  <div>
                    <FaMapMarkerAlt className="mx-auto text-4xl text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-700">Select a branch to view details</h3>
                    <p className="text-gray-500 mt-1">Click on any branch from the list to see more information.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative bg-[#E0F2FE] text-[#1E3A8A] py-12 md:py-16 overflow-hidden mt-12 md:mt-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-[#1E3A8A]/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <FaSearch className="mr-2" />
              <span>Can't find what you're looking for?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for a Specific Department or Service?</h2>
            <p className="text-[#1E3A8A] mb-4">Need help finding the right specialist?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+914012345678" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors"
              >
                <FaPhone className="mr-2 transform rotate-90" />
                +91 40 1234 5678
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#1E3A8A] text-base font-medium rounded-full text-[#1E3A8A] hover:bg-[#1E3A8A] hover:bg-opacity-10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-white/5"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-teal-400/10"></div>
      </section>
    </div>
  );
}
