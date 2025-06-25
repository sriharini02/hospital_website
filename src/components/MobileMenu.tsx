import { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';

interface NavItem {
  name: string;
  href: string;
  dropdown?: Array<{ name: string; href: string }>;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavItem[];
}

export default function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
        style={{ zIndex: 50 }}
      />
      
      {/* Mobile Menu */}
      <div 
        className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-xl overflow-y-auto"
        style={{ zIndex: 60 }}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <Link href="/" className="flex items-center" onClick={onClose}>
              <img 
                src="/images/logo.png" 
                alt="LifeCare Hospital Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-blue-600 ml-2">LifeCare</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Close menu"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-0">
                {item.dropdown ? (
                  <div>
                    <div className="flex justify-between items-center w-full rounded-lg hover:bg-gray-50">
                      <Link
                        href={item.href}
                        className="px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none flex-grow"
                        onClick={(e) => {
                          if (openDropdown === item.name) {
                            e.preventDefault();
                          } else {
                            onClose();
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(item.name);
                        }}
                        className="px-4 py-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      >
                        {openDropdown === item.name ? (
                          <FaChevronUp className="h-4 w-4" />
                        ) : (
                          <FaChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {openDropdown === item.name && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                            onClick={() => {
                              onClose();
                              setOpenDropdown(null);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6 px-4">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white text-base font-medium hover:bg-blue-700 transition-colors w-full"
              onClick={onClose}
            >
              <FaPhone className="mr-2 transform rotate-90" />
              <span>Emergency Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
