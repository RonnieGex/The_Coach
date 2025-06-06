// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-2 font-bold rounded-md transition-transform transform hover:scale-105 shadow-lg";
  
  const variants = {
    primary: 'bg-brand-gold-warm text-brand-blue-deep hover:bg-brand-gold-dark',
    secondary: 'bg-brand-blue-deep text-brand-white-pure hover:bg-opacity-90 border border-brand-gold-warm',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};