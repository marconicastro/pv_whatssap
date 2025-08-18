// Utilitário para eventos do TikTok Pixel
export const ttq = (event: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).ttq) {
    (window as any).ttq.track(event, parameters);
  }
};

// Eventos específicos para campanhas de WhatsApp
export const trackTikTokWhatsAppClick = () => {
  ttq('Contact', {
    content_name: 'WhatsApp Click',
    content_category: 'Lead Generation',
    description: 'User clicked WhatsApp button to contact about Maracuja Guide',
  });
};

export const trackTikTokPageView = () => {
  if (typeof window !== 'undefined' && (window as any).ttq) {
    (window as any).ttq.page();
  }
};

export const trackTikTokPurchase = (value: number, currency: string = 'BRL') => {
  ttq('Purchase', {
    value: value,
    currency: currency,
    content_name: 'Guia Prático - Controle do Trips',
    content_type: 'Digital Product',
  });
};

export const trackTikTokAddToCart = () => {
  ttq('AddToCart', {
    content_name: 'Guia Prático - Controle do Trips',
    content_category: 'Digital Product',
    content_type: 'Digital Product',
    value: 39.90,
    currency: 'BRL',
  });
};

export const trackTikTokInitiateCheckout = () => {
  ttq('InitiateCheckout', {
    content_name: 'Guia Prático - Controle do Trips',
    content_category: 'Digital Product',
    content_type: 'Digital Product',
    value: 39.90,
    currency: 'BRL',
  });
};

export const trackTikTokViewContent = () => {
  ttq('ViewContent', {
    content_name: 'Guia Prático - Controle do Trips',
    content_category: 'Digital Product',
    content_type: 'Digital Product',
    value: 39.90,
    currency: 'BRL',
  });
};

export const trackTikTokSubmitForm = () => {
  ttq('SubmitForm', {
    content_name: 'WhatsApp Contact Form',
    content_category: 'Lead Generation',
    description: 'User submitted WhatsApp contact for Maracuja Guide',
  });
};