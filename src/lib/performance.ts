// src/lib/performance.ts
// Utilidades para optimización de performance

// Preload de recursos críticos
export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    const heroImages = [
      '/images/hero-background.jpg',
      '/images/coach-profile.jpg'
    ];
    
    heroImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
};

// Performance Observer
export const observePerformance = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) {
          console.warn('Long task detected:', entry);
        }
      });
    });
    
    try {
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      console.log('Long task observer not supported');
    }
  }
};

// Debounce utility
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const performanceModule = {
  preloadCriticalResources,
  observePerformance,
  debounce
};

export default performanceModule;
