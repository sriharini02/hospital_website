import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Banner } from '@/components/ui/Banner';
import { 
  FaSearch, 
  FaImages, 
  FaHospital, 
  FaCalendarAlt, 
  FaUserFriends, 
  FaAward,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope
} from 'react-icons/fa';
import { GALLERY_CATEGORIES, GALLERY_IMAGES, CONTACT_INFO } from '@/constants/hospitalData';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

// Extend window interface for fullscreen API
declare global {
  interface Document {
    webkitExitFullscreen?: () => Promise<void>;
    mozCancelFullScreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
    webkitFullscreenElement?: Element;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
  }
  
  interface HTMLElement {
    webkitRequestFullscreen?: () => Promise<void>;
    mozRequestFullScreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
  }
}

const galleryCategories = [
  { id: 'all', name: 'All', icon: <FaImages className="mr-2" /> },
  { id: 'facilities', name: 'Facilities', icon: <FaHospital className="mr-2" /> },
  { id: 'patient-care', name: 'Patient Care', icon: <FaUserFriends className="mr-2" /> },
  { id: 'events', name: 'Events', icon: <FaCalendarAlt className="mr-2" /> },
  { id: 'awards', name: 'Awards', icon: <FaAward className="mr-2" /> },
];

// Sample gallery items - replace with actual data from your API
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: 'http://5.imimg.com/data5/SELLER/Default/2021/6/CY/WV/WS/121021499/modular-operation-theater-service-500x500.jpg',
    alt: 'Modern Operation Theater',
    category: 'facilities',
    title: 'Advanced Operation Theater',
    description: 'State-of-the-art surgical facilities with cutting-edge technology'
  },
  {
    id: 2,
    src: 'https://www.analog.com/en/_/media/analog/en/signals/smart-hospital-tech-in-the-icu/top-image-mobile.jpg?rev=9b7e44eaa0864062bcba9ec7b6bea212&sc_lang=en&la=en&h=350&w=640&hash=EA65FECF1EEE28042F3F43C785A212E0',
    alt: 'Intensive Care Unit',
    category: 'facilities',
    title: 'Intensive Care Unit',
    description: '24/7 critical care with advanced monitoring systems'
  },
  {
    id: 3,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpi_5nNVxut3k7citKD0QMH9M8itFheyI9A&s',
    alt: 'Pediatric Care',
    category: 'patient-care',
    title: 'Pediatric Care',
    description: 'Specialized care for our youngest patients in a child-friendly environment'
  },
  {
    id: 4,
    src: 'https://cdn.expresshealthcare.in/wp-content/uploads/2020/01/03174832/Medical-camp-750x409.jpg',
    alt: 'Community Health Camp',
    category: 'events',
    title: 'Community Health Camp',
    description: 'Free health checkup camp for the local community'
  },
  {
    id: 5,
    src: 'https://bestdoctorsinindia.in/img/slider/parallax/healthcare-industry-awards.png',
    alt: 'Award Ceremony',
    category: 'awards',
    title: 'Healthcare Excellence Award',
    description: 'Recognized for outstanding healthcare services and patient care'
  },
  {
    id: 6,
    src: 'https://reliva.in/wp-content/uploads/2024/01/ReLiva-Physiotherapy-Clinic-in-Ameerpet-Hyderabad.webp',
    alt: 'Physiotherapy Center',
    category: 'facilities',
    title: 'Physiotherapy Center',
    description: 'Comprehensive rehabilitation services for faster recovery'
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Filter gallery items based on category and search term
  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Our Gallery | LifeCare Hospital</title>
        <meta name="description" content="Explore our hospital's state-of-the-art facilities, patient care, and community events through our photo gallery." />
      </Head>

      
      {/* Hero Banner */}
      <Banner 
        title="Our Gallery"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gallery' }
        ]}
      />
      

      {/* Gallery Content */}
      <div className="container mx-auto px-6 pt-32 pb-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4" style={{ paddingTop: '35px' }}>Capturing Moments of Care & Excellence</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our world-class facilities, compassionate patient care, and community events through our gallery. 
            We're committed to transparency and excellence in healthcare delivery.
          </p>
        </div>

        
        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-blue-200 text-sm mt-1">
                      {galleryCategories.find(cat => cat.id === item.category)?.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FaImages className="mx-auto text-4xl text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-700">No images found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      {/* CTA Section */}
            <section className="py-12 bg-[#E0F2FE] text-[#1E3A8A] mt-16">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold">Experience Exceptional Healthcare</h2>
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

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-blue-400 text-3xl z-10"
            aria-label="Close lightbox"
          >
            <FaTimes />
          </button>
          
          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 text-white hover:text-blue-400 text-3xl z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            aria-label="Previous image"
          >
            <FaArrowLeft />
          </button>
          
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain"
              />
              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 text-white hover:text-blue-400 text-3xl z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            aria-label="Next image"
          >
            <FaArrowRight />
          </button>
          
          <button 
            onClick={toggleFullscreen}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-black/70 transition-colors"
          >
            {isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
          </button>
        </div>
      )}
    </motion.div>
  );
}
