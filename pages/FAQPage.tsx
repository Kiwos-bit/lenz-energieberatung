import React, { useEffect } from 'react';
import FAQ from '../components/FAQ';

export default function FAQPage() {
  useEffect(() => {
    document.title = 'Häufige Fragen (FAQ) | Energieberatung Düsseldorf | Lenz';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Antworten auf häufige Fragen zur Energieberatung, Energieausweisen, Förderungen und Sanierung. Markus Lenz klärt auf.'
      );
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-gray-50">
      <FAQ />
    </div>
  );
}
