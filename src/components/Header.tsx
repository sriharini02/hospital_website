import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import MobileMenu from './MobileMenu';

interface NavItem {
  name: string;
  href: string;
  dropdown?: Array<{ name: string; href: string }>;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Navigation items
  const navigation: NavItem[] = [
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

  // Close dropdown when clicking outside and handle body scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close dropdown if clicking outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
      
      // Close mobile menu if clicking outside the menu and menu is open
      const menuButton = document.querySelector('[aria-label="Toggle menu"]');
      if (isMenuOpen && !(event.target as Element).closest('.mobile-menu') && 
          menuButton && !menuButton.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Add or remove body scroll lock
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside as EventListener);

    return () => {
      // Cleanup
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside as EventListener);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 relative">
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
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
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        navigation={navigation} 
      />
    </header>
  );
}
