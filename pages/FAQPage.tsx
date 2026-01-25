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

    // Canonical URL setzen
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://lenzenergieberatung.de/faq';

    // FAQ Schema für SEO
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Warum brauche ich einen Energieberater?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ein Energieberater identifiziert Schwachstellen an Ihrem Haus, plant Sanierungen wirtschaftlich und sichert Ihnen den Zugang zu staatlichen Förderungen (bis zu 70%)."
          }
        },
        {
          "@type": "Question",
          "name": "Was kostet eine Energieberatung in Düsseldorf?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Kosten hängen vom Umfang ab. Ein iSFP wird staatlich bezuschusst, sodass Ihr Eigenanteil für die Planung deutlich reduziert wird."
          }
        },
        {
          "@type": "Question",
          "name": "Wie schnell bekomme ich einen Termin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In der Regel melden wir uns innerhalb von 24 Stunden zurück. Ein Vor-Ort-Termin findet meist innerhalb von 1-7 Tagen statt."
          }
        },
        {
          "@type": "Question",
          "name": "Muss ich Fördermittel selbst beantragen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nein, als gelisteter Energieeffizienz-Experte übernehmen wir die komplette technische Antragstellung bei der BAFA oder KfW für Sie."
          }
        }
      ]
    };

    const existingFaq = document.getElementById('faq-page-schema');
    if (existingFaq) {
      existingFaq.remove();
    }

    const faqScript = document.createElement('script');
    faqScript.id = 'faq-page-schema';
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-gray-50">
      <FAQ />
    </div>
  );
}
