import { FaPhone, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export function ConsultationBanner() {
  return (
    <section className="bg-[rgb(59,130,246,0.5)] text-[#1E3A8A] py-16 px-4 mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Phone and Heading */}
          <div className="flex items-center gap-6">
            <div className="bg-white/20 p-3 rounded-full flex-shrink-0 flex items-center justify-center">
              <FaPhone className="text-white text-xl transform rotate-90" />
            </div>
            <div>
              <h3 className="font-bold text-2xl">Looking For Consultation?</h3>
              <p className="font-medium text-xl">+91 9876543210</p>
            </div>
          </div>

          {/* Center: Description */}
          <p className="text-center md:text-left text-xl font-medium max-w-lg">
            Contact us for all questions and thinks those. We will proud to you
          </p>

          {/* Right: Button */}
          <Link 
            href="/book-appointment"
            className="bg-white text-[#1E3A8A] px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Get Consultation <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ConsultationBanner;
