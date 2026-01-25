import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Unsere Leistungen | Energieberatung Düsseldorf | Lenz';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Energieberatung Düsseldorf: Energieausweis, iSFP Sanierungsfahrplan, Heizlastberechnung, BAFA-Förderung. BAFA-zertifiziert. Jetzt Leistungen entdecken!'
      );
    }

    // Canonical URL setzen
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://lenzenergieberatung.de/leistungen';

    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BAFA-zertifizierte Energieberatung für Ihr Gebäude in Düsseldorf. 
            Von der Analyse bis zur Umsetzung – alles aus einer Hand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={`/leistungen/${service.id}`}
              className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <span className="text-emerald-600 mr-2">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                Mehr erfahren
                <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sie sind sich unsicher, welche Leistung die richtige ist?
          </h2>
          <p className="text-gray-600 mb-6">
            Kontaktieren Sie mich für eine kostenlose Erstberatung. Gemeinsam finden wir die optimale Lösung für Ihr Gebäude.
          </p>
          <Link
            to="/kontakt"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
