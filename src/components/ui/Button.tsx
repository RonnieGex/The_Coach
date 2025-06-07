// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

export const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-2 font-bold rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg";

  const variants = {
    primary: 'bg-brand-gold-warm text-brand-blue-deep hover:bg-brand-gold-dark',
    ghost: 'bg-transparent border-2 border-brand-gold-warm text-brand-gold-warm hover:bg-brand-gold-warm hover:text-brand-blue-deep',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};