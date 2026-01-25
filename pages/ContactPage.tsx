import React, { useEffect } from 'react';
import Contact from '../components/Contact';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Kontakt | Energieberatung Düsseldorf | Markus Lenz';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Kontaktieren Sie Markus Lenz für Energieberatung in Düsseldorf. Telefon: 01573 6533337 | E-Mail: info@lenzenergieberatung.de | Termin in 1-7 Tagen'
      );
    }

    // Canonical URL setzen
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://lenzenergieberatung.de/kontakt';

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
