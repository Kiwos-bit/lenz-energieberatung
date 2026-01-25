import React, { useEffect } from 'react';
import About from '../components/About';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'Über mich | Markus Lenz | Energieberater Düsseldorf';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Markus Lenz: Schornsteinfegermeister & BAFA-zertifizierter Energieeffizienz-Experte aus Düsseldorf. Praxiserfahrung seit vielen Jahren.'
      );
    }

    // Canonical URL setzen
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://lenzenergieberatung.de/ueber-mich';

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-white">
      <About />
    </div>
  );
}
