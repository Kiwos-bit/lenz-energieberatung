import React, { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { LEGAL_CONTENT } from '../constants';

type LegalType = 'impressum' | 'datenschutz' | 'agb';

export default function LegalPage() {
  const location = useLocation();
  const type = location.pathname.substring(1) as LegalType; // Entfernt führenden "/"
  const content = LEGAL_CONTENT[type];

  useEffect(() => {
    if (content) {
      document.title = `${content.title} | Lenz Energieberatung`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          `${content.title} der Lenz Energieberatung - Markus Lenz, Düsseldorf`
        );
      }
    }

    window.scrollTo(0, 0);
  }, [content]);

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {content.title}
          </h1>
          
          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </div>
      </div>
    </section>
  );
}
