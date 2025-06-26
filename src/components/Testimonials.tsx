import React, { useRef } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { scrollToSection } from '@/utils/scrollToSection';
import Image from 'next/image';
import styles from '@/styles/Testimonials.module.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
    <div className="flex-grow flex flex-col">
      <div className="relative mb-6">
        <FaQuoteLeft className="text-blue-100 text-5xl absolute -top-4 -left-2" />
        <p className="text-gray-600 text-sm leading-relaxed pl-8 pr-4">"{testimonial.comment}"</p>
      </div>
      
      <div className="mt-auto pt-6 border-t border-gray-100">
        <div className="flex justify-center mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={`w-4 h-4 mx-0.5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`} 
            />
          ))}
        </div>
        
        <div className="text-center">
          <h4 className="font-semibold text-gray-900 text-base">{testimonial.name}</h4>
          <p className="text-blue-600 text-xs mt-1">{testimonial.role}</p>
        </div>
      </div>
    </div>
  </div>
);

export function Testimonials() {
  const router = useRouter();
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Heart Surgery Patient',
      comment: 'The care I received at LifeCare was exceptional. The doctors were knowledgeable and took the time to explain everything to me. The staff was friendly and supportive throughout my treatment.',
      rating: 5,
      image: 'http://templates.hibootstrap.com/medizo/default/assets/img/testimonials/testimonials-img.jpg'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Mother of Pediatric Patient',
      comment: 'As a mother, I was extremely worried about my child\'s health. The pediatric team was amazing - so patient and caring. They made us feel comfortable and well taken care of.',
      rating: 5,
      image: 'http://templates.hibootstrap.com/medizo/default/assets/img/testimonials/testimonials-img2.jpg'
    },
    {
      id: 3,
      name: 'Arjun Mehta',
      role: 'Orthopedic Patient',
      comment: 'After my knee surgery, the rehabilitation team helped me get back on my feet faster than I expected. The facilities are top-notch and the care was personalized to my needs.',
      rating: 4,
      image: 'http://templates.hibootstrap.com/medizo/default/assets/img/testimonials/testimonials-img3.jpg'
    },
    {
      id: 4,
      name: 'Ananya Reddy',
      role: 'Dental Patient',
      comment: 'I was very anxious about my dental procedure, but the dentist and staff made me feel completely at ease. The procedure was painless and the results are amazing!',
      rating: 5,
      image: 'http://templates.hibootstrap.com/medizo/default/assets/img/testimonials/testimonials-img4.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

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
  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

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
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">What Our Patients Say</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative px-6 md:px-12 lg:px-16">
          <div className="relative flex flex-col md:flex-row items-center md:items-stretch md:min-h-[550px] gap-10 md:gap-12">
            {/* Left Side - Image */}
            <div className="hidden md:block w-full md:w-[48%] relative">
              <div className="relative h-full min-h-[450px] md:min-h-[550px] rounded-xl overflow-hidden">
                <Image 
                  src="https://templates.hibootstrap.com/medizo/default/assets/img/testimonials/testimonials-img.jpg" 
                  alt="Happy patient"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Right Side - Testimonial Card */}
            <div className="w-full md:w-[52%] relative z-10 -mt-20 md:mt-0 md:ml-[-6%] md:flex md:items-center">
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="relative overflow-hidden bg-white rounded-xl shadow-2xl px-8 py-10">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {testimonials.map((testimonial) => (
                      <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                        <TestimonialCard testimonial={testimonial} />
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300 w-3'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={prevSlide}
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -left-6 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors z-10"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft className="w-5 h-5" />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -right-6 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors z-10"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation Dots */}
          <div className="md:hidden flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300 w-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={handleLeaveReview}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 inline-flex items-center text-sm"
            >
              Leave a Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
