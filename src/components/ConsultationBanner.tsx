import { FaPhone, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export function ConsultationBanner() {
  return (
    <section className="w-full bg-white text-[#1E3A8A] py-20">
      <div className="w-full px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto bg-[rgb(59,130,246,0.3)] p-12 rounded-xl">
          {/* Left: Phone and Heading */}
          <div className="flex items-center gap-6">
            <div className="bg-white/20 p-2 rounded-full flex-shrink-0 flex items-center justify-center">
              <FaPhone className="text-white text-xl transform rotate-90" />
            </div>
            <div>
              <h3 className="font-bold text-3xl">Looking For Consultation?</h3>
              <p className="font-medium text-2xl">+91 9876543210</p>
            </div>
          </div>

          {/* Center: Description */}
          <p className="text-center md:text-left text-2xl font-medium max-w-2xl">
            Contact us for all questions and thinks those. We will proud to you
          </p>

          {/* Right: Button */}
          <Link 
            href="/book-appointment"
            className="bg-white text-[#1E3A8A] px-10 py-5 rounded-full font-semibold text-xl flex items-center gap-3 hover:bg-gray-100 transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Get Consultation <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ConsultationBanner;
