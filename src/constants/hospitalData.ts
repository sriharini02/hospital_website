// Gallery categories
export const GALLERY_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'facilities', name: 'Facilities' },
  { id: 'patient-care', name: 'Patient Care' },
  { id: 'events', name: 'Events' },
  { id: 'awards', name: 'Awards' },
];

// Sample gallery images
export const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/images/gallery/operation-theater.jpg',
    alt: 'Modern Operation Theater',
    category: 'facilities',
    title: 'Advanced Operation Theater',
    description: 'State-of-the-art surgical facilities with cutting-edge technology'
  },
  // Add more images...
];

// Hospital branches
export const BRANCHES = [
  {
    id: 1,
    name: 'LifeCare Main Hospital',
    address: '123 Medical Avenue, Banjara Hills, Hyderabad, Telangana 500034',
    phone: '+91 40 1234 5678',
    email: 'info@lifecarehyd.com',
    hours: '24/7 Emergency, OPD: 8:00 AM - 9:00 PM',
    specialties: ['Cardiology', 'Neurology', 'Emergency', 'General Medicine'],
    image: '/images/branches/main-hospital.jpg',
    coordinates: { lat: 17.4258, lng: 78.4496 }
  },
  // Add more branches...
];

// Contact information
export const CONTACT_INFO = {
  emergency: '+91 98765 43210',
  email: 'contact@lifecarehyd.com',
  address: '123 Medical Avenue, Hyderabad, Telangana 500034'
};
