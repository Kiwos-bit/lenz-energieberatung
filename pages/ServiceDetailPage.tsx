import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowLeft, CheckCircle, FileText, Phone } from 'lucide-react';

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find(s => s.id === serviceId);

  useEffect(() => {
    if (service) {
      document.title = service.seoTitle;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', service.seoMeta);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', service.seoTitle);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', service.seoMeta);
      }

      // FAQ Schema für SEO
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

      const existingScript = document.getElementById('faq-schema');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = 'faq-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(faqSchema);
      document.head.appendChild(script);

      // Breadcrumb Schema
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Startseite",
            "item": "https://lenzenergieberatung.de"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Leistungen",
            "item": "https://lenzenergieberatung.de/leistungen"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://lenzenergieberatung.de/leistungen/${service.id}`
          }
        ]
      };

      const existingBreadcrumb = document.getElementById('breadcrumb-schema');
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'breadcrumb-schema';
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);

      // Service Schema für SEO
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.longDescription,
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://lenzenergieberatung.de/#business",
          "name": "Lenz Energieberatung"
        },
        "areaServed": {
          "@type": "City",
          "name": "Düsseldorf"
        },
        "serviceType": "Energieberatung",
        "url": `https://lenzenergieberatung.de/leistungen/${service.id}`
      };

      const existingService = document.getElementById('service-schema');
      if (existingService) {
        existingService.remove();
      }

      const serviceScript = document.createElement('script');
      serviceScript.id = 'service-schema';
      serviceScript.type = 'application/ld+json';
      serviceScript.text = JSON.stringify(serviceSchema);
      document.head.appendChild(serviceScript);

      // Canonical URL setzen
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `https://lenzenergieberatung.de/leistungen/${service.id}`;
    }

    window.scrollTo(0, 0);
  }, [service]);

  if (!service) {
    return <Navigate to="/leistungen" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-emerald-600">Startseite</Link>
            <span className="mx-2">/</span>
            <Link to="/leistungen" className="hover:text-emerald-600">Leistungen</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/leistungen"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Zurück zur Übersicht
          </Link>

          <div className="flex items-start gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              {service.icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {service.details.map((detail, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Leistungsbeschreibung
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Ihre Vorteile
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Benötigte Unterlagen
                </h2>
                <div className="space-y-3">
                  {service.documents.map((doc, index) => (
                    <div key={index} className="flex items-start">
                      <FileText className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Häufige Fragen zu {service.title}
                </h2>
                <div className="space-y-6">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Box */}
                <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-emerald-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Investition
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {service.pricing}
                  </p>
                  <Link
                    to="/kontakt"
                    className="block w-full bg-emerald-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Jetzt anfragen
                  </Link>
                </div>

                {/* Contact Box */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Direkt beraten lassen
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Sie haben Fragen zu {service.title}? Rufen Sie mich gerne an!
                  </p>
                  <a
                    href="tel:015736533337"
                    className="flex items-center justify-center w-full bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-emerald-600"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    01573 6533337
                  </a>
                </div>

                {/* Other Services */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Weitere Leistungen
                  </h3>
                  <div className="space-y-3">
                    {SERVICES.filter(s => s.id !== serviceId).slice(0, 3).map((otherService) => (
                      <Link
                        key={otherService.id}
                        to={`/leistungen/${otherService.id}`}
                        className="block text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        → {otherService.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
