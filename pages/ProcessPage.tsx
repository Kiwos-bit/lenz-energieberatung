import React, { useEffect } from 'react';
import Process from '../components/Process';

export default function ProcessPage() {
  useEffect(() => {
    document.title = 'Unser Ablauf | So arbeite ich | Lenz Energieberatung';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'So läuft eine Energieberatung ab: Von der Kontaktaufnahme bis zur Umsetzung. Transparenter Prozess in 5 Schritten.'
      );
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-white">
      <Process />
    </div>
  );
}
