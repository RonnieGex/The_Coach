// src/components/ui/ServiceCard.tsx
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-brand-blue-light/10 p-8 rounded-lg border border-brand-blue-light/20 text-center flex flex-col items-center hover:border-brand-gold-warm hover:bg-brand-blue-light/20 transition-all duration-300">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold font-serif-display mb-2 text-brand-white-pure">
        {title}
      </h3>
      <p className="text-brand-blue-light">
        {description}
      </p>
    </div>
  );
};
