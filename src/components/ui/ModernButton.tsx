'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ModernButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const variants = {
  primary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-lg shadow-secondary-500/20 hover:shadow-xl hover:shadow-secondary-500/30 border border-secondary-400/20 hover:from-secondary-400 hover:to-secondary-500',
  secondary: 'bg-gradient-to-r from-primary-900 to-primary-800 text-brand-white-pure shadow-lg shadow-primary-900/20 hover:shadow-xl hover:shadow-primary-900/30 border border-primary-700/20 hover:from-primary-800 hover:to-primary-700',
  ghost: 'bg-transparent text-primary-900 border border-primary-200 hover:bg-primary-50 hover:border-primary-300',
  glass: 'bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg hover:bg-white/20',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function ModernButton({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  loading = false,
  glow = false,
  className = '',
  disabled = false,
  type = 'button',
  onClick,
}: ModernButtonProps) {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      className={`${variants[variant]} ${sizes[size]} font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
    >
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
        />
      ) : (
        <>
          {icon && icon}
          {children}
        </>
      )}
    </motion.button>
  );
}
