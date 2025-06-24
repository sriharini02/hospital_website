import { FaPhone, FaCalendarAlt } from 'react-icons/fa';

export function CTA() {
  return (
    <section className="bg-[#E0F2FE] text-[#1E3A8A] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Doctor for Check-up?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Book an appointment with our expert doctors today and take the first step towards better health.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#appointment"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors duration-200"
          >
            <FaCalendarAlt className="mr-2" />
            Book Appointment
          </a>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1E3A8A] text-base font-medium rounded-full text-[#1E3A8A] hover:bg-[#1E3A8A] hover:bg-opacity-10 transition-colors duration-200"
          >
            <FaPhone className="mr-2 transform rotate-90" />
            Call Now: +91 98765 43210
          </a>
        </div>
      </div>
    </section>
  );
}
