'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  variant?: 'fade' | 'slide' | 'scale' | 'typing';
  delay?: number;
  className?: string;
  stagger?: boolean;
}

const variants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  typing: {
    hidden: { width: 0 },
    visible: { width: 'auto' },
  },
};

export default function AnimatedText({
  children,
  variant = 'slide',
  delay = 0,
  className = '',
  stagger = false,
}: AnimatedTextProps) {
  if (stagger && typeof children === 'string') {
    const words = children.split(' ');
    
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: delay,
            },
          },
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={variants[variant]}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants[variant]}
      transition={{
        duration: variant === 'typing' ? 2 : 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

export function GlowingText({ 
  children, 
  className = '',
  intensity = 'medium' 
}: { 
  children: ReactNode; 
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}) {
  const glowIntensity = {
    low: 'drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]',
    medium: 'drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]',
    high: 'drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]',
  };

  return (
    <motion.div
      className={`${glowIntensity[intensity]} ${className}`}
      animate={{
        filter: [
          'drop-shadow(0 0 5px rgba(212,175,55,0.3))',
          'drop-shadow(0 0 15px rgba(212,175,55,0.6))',
          'drop-shadow(0 0 5px rgba(212,175,55,0.3))',
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}