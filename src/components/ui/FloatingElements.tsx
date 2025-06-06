'use client';

import { motion } from 'framer-motion';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export default function FloatingElements({ count = 6, className = '' }: FloatingElementsProps) {
  const elements = Array.from({ length: count }, (_, i) => i);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-secondary-500/20 rounded-full"
          initial={{
            x: Math.random() * 1200,
            y: 100,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * 1200,
            y: -100,
            scale: [0.5, 1, 0.5],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

export function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Círculo grande flotante */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 border border-secondary-500/10 rounded-full"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      
      {/* Triángulo */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-accent-500/10"
        animate={{ 
          rotate: [0, 120, 240, 360],
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      
      {/* Cuadrado pequeño */}
      <motion.div
        className="absolute top-3/4 right-1/3 w-6 h-6 bg-primary-500/10 rounded-sm"
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          x: [0, 20, 0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}