import { Variants } from 'framer-motion';

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'left') => {
  const x = direction === 'left' ? 100 : direction === 'right' ? -100 : 0;
  const y = direction === 'up' ? 100 : direction === 'down' ? -100 : 0;
  
  return {
    initial: { opacity: 0, x, y },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };
};
