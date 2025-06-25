import React, { useState, useCallback } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { scrollToSection } from '@/utils/scrollToSection';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar 
          key={i} 
          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`} 
        />
      ))}
    </div>
    
    <div className="relative mb-6 flex-grow">
      <FaQuoteLeft className="text-blue-100 text-4xl absolute -top-2 -left-2" />
      <p className="text-gray-700 pl-8 relative z-10">{testimonial.comment}</p>
      <FaQuoteRight className="text-blue-100 text-4xl absolute bottom-0 right-0 opacity-50" />
    </div>
    
    <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
        {testimonial.name.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <p className="text-gray-500 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export function Testimonials() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Patient, Heart Surgery',
      comment: 'The care I received at LifeCare was exceptional. The doctors were knowledgeable and took the time to explain everything to me. The staff was friendly and supportive throughout my treatment.',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Mother of Pediatric Patient',
      comment: 'As a mother, I was extremely worried about my child\'s health. The pediatric team was amazing - so patient and caring. They made us feel comfortable and well taken care of.',
      rating: 5
    },
    {
      id: 3,
      name: 'Arjun Mehta',
      role: 'Orthopedic Patient',
      comment: 'After my knee surgery, the rehabilitation team helped me get back on my feet faster than I expected. The facilities are top-notch and the care was personalized to my needs.',
      rating: 4
    },
    {
      id: 4,
      name: 'Ananya Reddy',
      role: 'Dental Patient',
      comment: 'I was very anxious about my dental procedure, but the dentist and staff made me feel completely at ease. The procedure was painless and the results are amazing!',
      rating: 5
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Cardiac Patient',
      comment: 'The cardiac care unit is outstanding. The doctors are experts in their field and the nursing staff is attentive and caring. I highly recommend LifeCare for heart-related treatments.',
      rating: 5
    },
    {
      id: 6,
      name: 'Meera Kapoor',
      role: 'Neurology Patient',
      comment: 'The neurology team provided excellent care during my treatment. They were thorough in their diagnosis and explained everything in a way that was easy to understand.',
      rating: 4
    }
  ];

  const visibleTestimonials = testimonials.slice(activeIndex * 3, activeIndex * 3 + 3);
  const totalSlides = Math.ceil(testimonials.length / 3);

  const nextSlide = () => {
    setActiveIndex((prev: number) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev: number) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleLeaveReview = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    
    if (router.pathname === '/contact') {
      // If already on contact page, just scroll to the form
      scrollToSection('contact-form');
    } else {
      // If on another page, navigate to contact page first, then scroll
      router.push('/contact').then(() => {
        // Small timeout to ensure the page has loaded
        setTimeout(() => {
          scrollToSection('contact-form');
        }, 100);
      });
    }
  }, [router]);

  return (
    <section id="testimonials" className="pt-12 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our patients about their experiences and the quality care they received at our hospital.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="flex justify-center items-center space-x-2 mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={handleLeaveReview}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            Leave a Review
          </button>
        </div>
      </div>
    </section>
  );
};
