import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';

interface EmergencyContactSectionProps {
  noBackground?: boolean;
  container?: boolean;
  noBottomPadding?: boolean;
}

export const EmergencyContactSection: React.FC<EmergencyContactSectionProps> = ({ 
  noBackground = false,
  container = false,
  noBottomPadding = false
}) => {
  return (
    <div className={`w-full min-w-[320px] ${noBackground ? 'bg-transparent' : 'bg-white'} pt-8 md:pt-12 ${noBottomPadding ? 'pb-0' : 'pb-12 md:pb-16'}`}>
      <div className={container ? 'container mx-auto px-4' : 'w-full'}>
        <div className={`min-w-[300px] bg-white shadow-md overflow-hidden rounded-lg`}>
          <div className="md:flex">
            {/* Left Side */}
            <div className="pl-20 pr-4 sm:pl-32 sm:pr-8 py-4 md:py-10 md:w-1/2">
              <div className="flex flex-col h-full justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 bg-[rgb(37,99,235)] rounded-full p-1.5">
                    <FaPhoneAlt className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Need An Emergency Help</h3>
                </div>
                <a href="tel:+952543256" className="text-2xl md:text-3xl font-bold text-[rgb(37,99,235)] mb-3 hover:opacity-90 transition-opacity no-underline">
                  +952-543256
                </a>
                <p className="text-gray-700 text-lg md:text-xl">
                  Our emergency team is available 24/7 to provide you with the best medical care. 
                  Don't hesitate to reach out in case of any medical emergency.
                </p>
              </div>
            </div>
            
            {/* Right Side */}
            <div className="md:w-1/2 relative overflow-hidden flex items-center justify-center">
              <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full bg-blue-100 opacity-50"></div>
              <div className="absolute -right-24 top-1/4 w-48 h-48 rounded-full bg-blue-200 opacity-30"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full max-w-xs">
                  <Image
                    src="https://htmldesigntemplates.com/html/ayurvedic/images/inner/n-e1633078810928.png"
                    alt="Emergency doctor ready to help"
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="contain"
                    className="object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContactSection;
