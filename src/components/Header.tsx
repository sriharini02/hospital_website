import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Navigation items
  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      href: '/about',
      dropdown: [
        { name: 'Our Gallery', href: '/gallery' },
        { name: 'Our Branches', href: '/branches' },
      ]
    },
    { name: 'Our Specialities', href: '/our-specialities' },
    { name: 'Our Doctors', href: '/doctors' },
    { name: 'Contact', href: '/contact' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="LifeCare Hospital Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-blue-600 hidden sm:inline">LifeCare</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group" ref={item.dropdown ? dropdownRef : null}>
                {item.dropdown ? (
                  <div>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        onClick={(e) => {
                          if (isAboutOpen) {
                            e.preventDefault();
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center focus:outline-none"
                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                      >
                        {isAboutOpen ? (
                          <FaChevronUp className="ml-1 h-3 w-3" />
                        ) : (
                          <FaChevronDown className="ml-1 h-3 w-3" />
                        )}
                      </button>
                    </div>
                    {isAboutOpen && (
                      <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                              onClick={() => {
                                setIsAboutOpen(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Emergency Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+919876543210"
              className="flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
              title="Emergency Call"
            >
              <FaPhone className="mr-2 transform rotate-90" />
              <span>Emergency</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <div className="flex justify-between items-center w-full">
                      <Link
                        href={item.href}
                        className="px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none flex-grow"
                        onClick={(e) => {
                          if (isAboutOpen) {
                            e.preventDefault();
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsAboutOpen(!isAboutOpen);
                        }}
                        className="px-4 py-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      >
                        {isAboutOpen ? (
                          <FaChevronUp className="h-4 w-4" />
                        ) : (
                          <FaChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {isAboutOpen && (
                      <div className="pl-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsAboutOpen(false);
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
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 text-center"
              title="Emergency Call"
            >
              <FaPhone className="mr-2 transform rotate-90" />
              <span>Emergency</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
