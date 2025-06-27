import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { scrollToSection } from '@/utils/scrollToSection';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-xl h-full flex flex-col">
    <div className="flex-grow">
      <FaQuoteLeft className="text-blue-100 text-5xl mb-6" />
      <p className="text-gray-600 text-base leading-relaxed mb-6">"{testimonial.comment}"</p>
      
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          <Image 
            src={testimonial.image} 
            alt={testimonial.name}
            width={60}
            height={60}
            className="rounded-full object-cover h-15 w-15"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
          <p className="text-blue-600 text-sm">{testimonial.role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export function Testimonials() {
  const router = useRouter();
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Heart Surgery Patient',
      comment: 'The care I received at LifeCare was exceptional. The doctors were knowledgeable and took the time to explain everything to me. The staff was friendly and supportive throughout my treatment.',
      rating: 5,
      image: '/images/testimonial-1.jpg'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Mother of Pediatric Patient',
      comment: 'The pediatric team was amazing - so patient and caring. They made us feel comfortable and well taken care of during our entire stay at the hospital.',
      rating: 5,
      image: '/images/testimonial-2.jpg'
    },
    {
      id: 3,
      name: 'Arjun Mehta',
      role: 'Orthopedic Patient',
      comment: 'After my knee surgery, the rehabilitation team helped me get back on my feet faster than I expected. The facilities are top-notch and the care was personalized to my needs.',
      rating: 4,
      image: '/images/testimonial-3.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }; 
  
  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const handleLeaveReview = (e: React.MouseEvent) => {
    e.preventDefault();
    if (router.pathname === '/contact') {
      scrollToSection('contact-form');
    } else {
      router.push('/contact').then(() => {
        setTimeout(() => scrollToSection('contact-form'), 100);
      });
    }
  };

  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side - Large Image */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image 
                  src="https://templates.hibootstrap.com/medizo/default/assets/img/testimonials/testimonials-img.jpg" 
                  alt="Patient consultation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Right Side - Testimonial Card Container */}
            <div className="lg:col-span-5 relative lg:ml-[-180px] lg:mt-52">
              
              {/* Testimonial Card */}
              <div className="bg-[rgb(59_130_246_/_0.3)] rounded-2xl p-6 md:p-8 lg:p-10 mx-auto max-w-lg lg:max-w-none">
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={handleLeaveReview}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition duration-300 inline-flex items-center text-base"
          >
            Leave a Review
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
