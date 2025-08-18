// Utilitário para eventos do Facebook Pixel
export const fbq = (event: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', event, parameters);
  }
};

// Eventos específicos para campanhas de WhatsApp
export const trackWhatsAppClick = () => {
  fbq('Lead', {
    content_name: 'WhatsApp Click',
    content_category: 'Lead Generation',
  });
};

export const trackPageView = () => {
  fbq('PageView');
};

export const trackPurchase = (value: number, currency: string = 'BRL') => {
  fbq('Purchase', {
    value: value,
    currency: currency,
    content_name: 'Guia Prático - Controle do Trips',
  });
};

export const trackAddToCart = () => {
  fbq('AddToCart', {
    content_name: 'Guia Prático - Controle do Trips',
    content_category: 'Digital Product',
    value: 39.90,
    currency: 'BRL',
  });
};

export const trackInitiateCheckout = () => {
  fbq('InitiateCheckout', {
    content_name: 'Guia Prático - Controle do Trips',
    content_category: 'Digital Product',
    value: 39.90,
    currency: 'BRL',
  });
};