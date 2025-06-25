import { motion } from 'framer-motion';
import Link from 'next/link';

interface BannerProps {
  title: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  className?: string;
}

export function Banner({ title, breadcrumbs, className = '' }: BannerProps) {
  return (
    <motion.div 
      className={`relative bg-blue-700 text-white py-20 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-blue-600/30"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          <motion.div 
            className="text-lg flex justify-center items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">&gt;</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:underline hover:text-blue-200 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-blue-200">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
