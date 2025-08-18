'use client';

import { useEffect, Suspense, useState } from 'react';

function MetaPixelContent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Função para carregar o script do Facebook Pixel
    const loadFacebookPixel = () => {
      if (typeof window !== 'undefined') {
        // Verificar se o fbq já foi inicializado
        if (!(window as any).fbq) {
          (function(f: any, b: any, e: string, v: string, n?: any, t?: any, s?: any) {
            if (f.fbq) return;
            n = f.fbq = function(...args: any[]) {
              if (n.callMethod) {
                n.callMethod(...args);
              } else {
                n.queue.push(args);
              }
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
          })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        }

        // Inicializar o Pixel
        (window as any).fbq('init', '1403975024017865');
        
        // Track PageView
        (window as any).fbq('track', 'PageView');
      }
    };

    if (isClient) {
      loadFacebookPixel();
    }
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Noscript fallback */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1403975024017865&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}

export default function MetaPixel() {
  return (
    <Suspense fallback={null}>
      <MetaPixelContent />
    </Suspense>
  );
}