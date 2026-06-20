'use client'

export const useMetaPixel = () => {
  const trackLead = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  };

  const trackPageView = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  };

  const trackEvent = (eventName: string, data?: any) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, data);
    }
  };

  return { trackLead, trackPageView, trackEvent };
};
