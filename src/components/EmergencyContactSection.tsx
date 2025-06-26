import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';

export const EmergencyContactSection = () => {
  return (
    <div className="w-full bg-white py-4 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-gradient-to-r from-blue-50 to-white shadow-md overflow-hidden rounded-lg">
          <div className="md:flex">
            {/* Left Side */}
            <div className="px-6 py-4 md:py-6 md:w-1/2">
              <div className="flex flex-col h-full justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 bg-[rgb(37,99,235)] rounded-full p-1.5">
                    <FaPhoneAlt className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Need An Emergency Help</h3>
                </div>
                <a href="tel:+952543256" className="text-xl font-bold text-[rgb(37,99,235)] mb-2 hover:opacity-90 transition-opacity no-underline">
                  +952-543256
                </a>
                <p className="text-gray-700 text-base">
                  Our emergency team is available 24/7 to provide you with the best medical care. 
                  Don't hesitate to reach out in case of any medical emergency.
                </p>
              </div>
            </div>
            
            {/* Right Side */}
            <div className="md:w-1/2 relative overflow-hidden flex items-center justify-center">
              <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full bg-blue-100 opacity-50"></div>
              <div className="absolute -right-24 top-1/4 w-48 h-48 rounded-full bg-blue-200 opacity-30"></div>
              <div className="relative w-full h-full min-h-[200px] md:min-h-[300px] flex items-center justify-center">
                <div className="relative w-3/4 h-3/4 max-w-xs">
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
