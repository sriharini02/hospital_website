import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
  className?: string;
  children: ReactNode;
  delay?: number;
  duration?: number;
}

const zoomVariants: Variants = {
  offscreen: {
    scale: 0.9,
    opacity: 0,
  },
  onscreen: (custom: { delay: number; duration: number }) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: custom.duration,
      delay: custom.delay,
    },
  }),
  hover: {
    scale: 1.03,
    transition: {
      type: 'spring',
      bounce: 0.6,
    },
  },
};

export const AnimatedHeading = ({
  as: Tag = 'h2',
  className = '',
  children,
  delay = 0,
  duration = 0.8,
}: AnimatedHeadingProps) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: '-100px' }}
      custom={{ delay, duration }}
      variants={zoomVariants}
      whileHover="hover"
      className={`inline-block ${className}`}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
};
