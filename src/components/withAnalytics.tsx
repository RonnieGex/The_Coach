// src/components/withAnalytics.tsx
// HOC para agregar analytics a cualquier componente

import React, { useEffect } from 'react';
import analytics from '@/lib/analytics';

interface WithAnalyticsProps {
  pageName?: string;
  trackClicks?: boolean;
  trackScroll?: boolean;
  customEvents?: Record<string, any>;
}

export function withAnalytics<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: WithAnalyticsProps = {}
) {
  const {
    pageName = 'Unknown Page',
    trackClicks = true,
    trackScroll = true,
    customEvents = {}
  } = options;

  return function WithAnalyticsComponent(props: P) {
    // Use analytics hook
    analytics.useAnalytics(pageName);

    useEffect(() => {
      // Track custom events
      Object.entries(customEvents).forEach(([eventName, eventData]) => {
        analytics.track({
          action: eventName,
          category: 'custom',
          ...eventData
        });
      });

      // Setup click tracking
      if (trackClicks) {
        const handleClick = (e: MouseEvent) => {
          const target = e.target as HTMLElement;
          
          // Track CTA clicks
          const ctaElement = target.closest('[data-cta]');
          if (ctaElement) {
            const ctaType = ctaElement.getAttribute('data-cta');
            analytics.track({
              action: 'cta_click',
              category: 'conversion',
              label: ctaType || 'unknown'
            });
          }

          // Track button clicks
          const button = target.closest('button');
          if (button && button.textContent) {
            analytics.track({
              action: 'button_click',
              category: 'interaction',
              label: button.textContent.trim().substring(0, 50)
            });
          }

          // Track link clicks
          const link = target.closest('a');
          if (link && link.href) {
            const isExternal = !link.href.includes(window.location.hostname);
            analytics.track({
              action: isExternal ? 'external_link_click' : 'internal_link_click',
              category: 'navigation',
              label: link.href
            });
          }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
}

// Específico para páginas
export function withPageAnalytics(pageName: string) {
  return function<P extends object>(WrappedComponent: React.ComponentType<P>) {
    return withAnalytics(WrappedComponent, {
      pageName,
      trackClicks: true,
      trackScroll: true
    });
  };
}

// Específico para componentes de formulario
export function withFormAnalytics(formName: string) {
  return function<P extends object>(WrappedComponent: React.ComponentType<P>) {
    return withAnalytics(WrappedComponent, {
      pageName: `Form - ${formName}`,
      trackClicks: true,
      customEvents: {
        form_view: {
          category: 'form',
          label: formName
        }
      }
    });
  };
}

export default withAnalytics;
