'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg';
  opacity?: 'low' | 'medium' | 'high';
  hover?: boolean;
  delay?: number;
}

const blurVariants = {
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur-md',
  lg: 'backdrop-blur-lg',
};

const opacityVariants = {
  low: 'bg-glass-white',
  medium: 'bg-glass-white-md',
  high: 'bg-glass-white-lg',
};

export default function GlassCard({ 
  children, 
  className = '', 
  blur = 'md',
  opacity = 'medium',
  hover = true,
  delay = 0
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      whileHover={hover ? { 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      } : undefined}
      className={`
        ${opacityVariants[opacity]}
        ${blurVariants[blur]}
        border border-white/20
        rounded-2xl
        shadow-glass
        shadow-glass-inset
        transition-all
        duration-300
        ${hover ? 'hover:shadow-glow-md hover:border-secondary-500/30' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}