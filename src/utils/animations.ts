import { Variants, Transition } from 'framer-motion';

const transition: Transition = {
  duration: 0.6,
  ease: [0.6, -0.05, 0.01, 0.99]
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition
  }
};

export const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition
  }
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'left'): Variants => {
  const x = direction === 'left' ? 100 : direction === 'right' ? -100 : 0;
  const y = direction === 'up' ? 100 : direction === 'down' ? -100 : 0;
  
  return {
    initial: { opacity: 0, x, y },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition
    }
  };
};
