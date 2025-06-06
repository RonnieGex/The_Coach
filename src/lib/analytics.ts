// src/lib/analytics.ts
// Sistema completo de Analytics para Coach José Luis

// Configuración de Google Analytics 4
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Tipos para eventos
interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface ConversionEvent {
  event_name?: string;
  service?: string;
  contact_method?: string;
  location?: string;
  value?: number;
}

// Track eventos generales
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', { action, category, label, value });
  }
};

// Track conversiones específicas
export const trackConversion = (conversionType: string, details: ConversionEvent = {}) => {
  const conversionEvents: Record<string, Required<ConversionEvent>> = {
    'form_submit': {
      event_name: 'generate_lead',
      value: 100,
      service: '',
      contact_method: '',
      location: ''
    },
    'phone_click': {
      event_name: 'contact_phone',
      value: 50,
      service: '',
      contact_method: '',
      location: ''
    },
    'whatsapp_click': {
      event_name: 'contact_whatsapp', 
      value: 75,
      service: '',
      contact_method: '',
      location: ''
    },
    'consultation_booking': {
      event_name: 'book_consultation',
      value: 200,
      service: '',
      contact_method: '',
      location: ''
    }
  };

  const eventData = conversionEvents[conversionType] || { 
    event_name: conversionType,
    value: 0,
    service: '',
    contact_method: '',
    location: ''
  };
  const finalEventData = { ...eventData, ...details };

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', finalEventData.event_name, {
      event_category: 'conversion',
      event_label: finalEventData.service || finalEventData.contact_method || '',
      value: finalEventData.value || 0,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('Conversion Event:', finalEventData);
  }
};

// Eventos específicos para Coach José Luis
export const coachingEvents = {
  heroCtaClick: (location: string = 'hero') => trackConversion('consultation_booking', { 
    location,
    service: 'consulta_inicial' 
  }),

  contactFormStart: () => trackEvent({
    action: 'form_start',
    category: 'form',
    label: 'contact_form'
  }),

  contactFormSubmit: (formData: any) => {
    trackConversion('form_submit', {
      service: 'consulta_inicial',
      contact_method: 'contact_form'
    });
  },

  phoneClick: (location: string = 'header') => trackConversion('phone_click', { 
    location,
    contact_method: 'telefono' 
  }),

  whatsappClick: (location: string = 'floating') => trackConversion('whatsapp_click', { 
    location,
    contact_method: 'whatsapp' 
  }),

  serviceCardClick: (serviceName: string) => {
    trackEvent({
      action: 'service_card_click',
      category: 'engagement',
      label: serviceName,
      value: 1
    });
  },
};

// Hook para usar analytics en componentes
import { useEffect } from 'react';

export const useAnalytics = (pageName: string) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
      window.gtag('config', GA_TRACKING_ID, {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  }, [pageName]);
};

const analyticsModule = {
  track: trackEvent,
  conversion: trackConversion,
  coaching: coachingEvents,
  useAnalytics
};

export default analyticsModule;
