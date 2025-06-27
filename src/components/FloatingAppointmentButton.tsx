import Link from 'next/link';
import { FaCalendarPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function FloatingAppointmentButton() {
  return (
    <motion.div 
      className="fixed bottom-8 right-8 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Link 
          href="/book-appointment"
          className="group flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300
                    bg-gradient-to-r from-blue-400 to-blue-600 p-1 hover:from-blue-500 hover:to-blue-700"
          aria-label="Book Appointment"
        >
          <motion.div 
            className="w-full h-full rounded-full bg-white flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <FaCalendarPlus className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
          <motion.span 
            className="absolute right-full mr-3 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: 10, opacity: 0 }}
          >
            Book Appointment
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default FloatingAppointmentButton;
