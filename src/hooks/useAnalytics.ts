import { useEffect } from 'react';

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: { [key: string]: any }
    ) => void;
  }
}

export const useAnalytics = () => {
  // Custom event tracking function
  const trackEvent = (
    eventName: string,
    eventParams?: { [key: string]: any }
  ) => {
    if (typeof window.gtag !== 'undefined') {
      console.log('Tracking event:', eventName, eventParams); // Debug log
      window.gtag('event', eventName, eventParams);
    } else {
      console.warn('Google Analytics not initialized'); // Debug warning
    }
  };

  return { trackEvent };
};

export default useAnalytics;