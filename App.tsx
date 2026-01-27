import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetailView from './components/ServiceDetailView';
import LegalView from './components/LegalView';
import BlogView from './components/BlogView';
import { CONTACT_INFO, SERVICES, BLOG_POSTS, FAQS, LOCAL_CITIES } from './constants';
import LocalLandingPage from './components/LocalLandingPage';
import { ShieldCheck, Award, CheckCircle2, BadgeCheck, MessageCircle } from 'lucide-react';

const DEFAULT_TITLE = "Energieberatung Düsseldorf | Energieausweis & iSFP vom Experten - Lenz";
const DEFAULT_META = "Zertifizierter Energieberater in Düsseldorf. ✓ Energieausweise ✓ iSFP Sanierungsfahrplan ✓ BAFA-Förderberatung ✓ Heizlastberechnung. Jetzt kostenlos beraten lassen!";
const BASE_URL = "https://www.lenzenergieberatung.de";
const DEFAULT_IMAGE = `${BASE_URL}/markus-lenz-portrait.jpg`;

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    const updateMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    let title = DEFAULT_TITLE;
    let description = DEFAULT_META;
    let image = DEFAULT_IMAGE;
    let canonical = `${BASE_URL}${location.pathname}`;

    const path = location.pathname;

    if (path === '/blog') {
      title = "Blog | Energie-News & Tipps Düsseldorf | Lenz";
      description = "Aktuelle Berichte zu Energieeffizienz, Förderung und Technik in Düsseldorf. Expertenwissen von Markus Lenz.";
    } else if (path.startsWith('/blog/')) {
      const blogId = path.split('/')[2];
      const blogPost = BLOG_POSTS.find(b => b.id === blogId);
      if (blogPost) {
        title = `${blogPost.title} | Lenz Energieberatung`;
        description = blogPost.excerpt;
        image = blogPost.image.startsWith('http') ? blogPost.image : `${BASE_URL}${blogPost.image}`;
      }
    } else if (path.startsWith('/leistungen/')) {
      const serviceId = path.split('/')[2];
      const service = SERVICES.find(s => s.id === serviceId);
      if (service) {
        title = service.seoTitle;
        description = service.seoMeta;
      }
    } else if (['/impressum', '/datenschutz', '/agb'].includes(path)) {
      const type = path.substring(1);
      const legalTitles: any = {
        impressum: "Impressum | Lenz Energieberatung",
        datenschutz: "Datenschutzerklärung | Lenz Energieberatung",
        agb: "Allgemeine Geschäftsbedingungen | Lenz Energieberatung"
      };
      title = legalTitles[type];
      description = `Rechtliche Informationen zur Lenz Energieberatung Düsseldorf - ${type.toUpperCase()}. NAP-konforme Angaben nach TMG.`;
    } else if (path.startsWith('/energieberatung-')) {
      const cityId = path.replace('/energieberatung-', '');
      const city = LOCAL_CITIES.find(c => c.id === cityId);
      if (city) {
        title = city.seoTitle;
        description = city.seoMeta;
      }
    }

    document.title = title;
    updateMeta('meta[name="description"]', 'content', description);
    updateMeta('link[rel="canonical"]', 'href', canonical);
    updateMeta('meta[property="og:title"]', 'content', title);
    updateMeta('meta[property="og:description"]', 'content', description);
    updateMeta('meta[property="og:url"]', 'content', canonical);
    updateMeta('meta[property="og:image"]', 'content', image);
    updateMeta('meta[property="twitter:title"]', 'content', title);
    updateMeta('meta[property="twitter:description"]', 'content', description);
    updateMeta('meta[property="twitter:image"]', 'content', image);
    updateMeta('meta[property="twitter:url"]', 'content', canonical);

    // Schema logic
    const existingSchema = document.getElementById('local-business-schema');
    if (existingSchema) existingSchema.remove();

    const schemaData: any = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "name": "Lenz Energieberatung",
      "alternateName": "Energieberater Düsseldorf - Markus Lenz",
      "description": "Zertifizierte Energieberatung in Düsseldorf. Markus Lenz ist Schornsteinfegermeister und BAFA-gelisteter Energieeffizienz-Experte. Spezialisiert auf Energieausweise, iSFP Sanierungsfahrpläne, Heizlastberechnungen und BEG-Förderberatung.",
      "image": DEFAULT_IMAGE,
      "@id": `${BASE_URL}/#localbusiness`,
      "url": BASE_URL,
      "telephone": "+4915736533337",
      "email": "info@lenzenergieberatung.de",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kirchstr. 55",
        "addressLocality": "Düsseldorf",
        "postalCode": "40227",
        "addressRegion": "Nordrhein-Westfalen",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.2131,
        "longitude": 6.8045
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Düsseldorf"
        },
        {
          "@type": "State",
          "name": "Nordrhein-Westfalen"
        }
      ],
      "priceRange": "€€",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Überweisung, Bar",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "Markus Lenz",
        "jobTitle": "Schornsteinfegermeister & Energieeffizienz-Experte"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Energieberatung Leistungen",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energieausweis",
              "description": "Bedarfs- oder Verbrauchsausweise für Wohngebäude"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "iSFP Sanierungsfahrplan",
              "description": "Individueller Sanierungsfahrplan für maximale Förderquoten"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Heizlastberechnung",
              "description": "Präzise Berechnung nach DIN 12831 für Wärmepumpen"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hydraulischer Abgleich",
              "description": "Effizienzsteigerung und Pflicht für WP-Förderung"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "BEG Förderberatung",
              "description": "Beratung und Begleitung für Einzelmaßnahmen"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/lenz-energieberatung",
        "https://www.instagram.com/lenz-energieberatung"
      ],
      "knowsAbout": [
        "Energieberatung",
        "Energieausweis",
        "iSFP Sanierungsfahrplan",
        "BAFA Förderung",
        "KfW Förderung",
        "Heizlastberechnung",
        "Wärmepumpe",
        "Hydraulischer Abgleich",
        "GEG Gebäudeenergiegesetz"
      ]
    };

    const script = document.createElement('script');
    script.id = 'local-business-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // Blog Schema
    const existingBlogSchema = document.getElementById('blog-schema');
    if (existingBlogSchema) existingBlogSchema.remove();

    if (path.startsWith('/blog/')) {
      const blogId = path.split('/')[2];
      const blogPost = BLOG_POSTS.find(b => b.id === blogId);
      if (blogPost) {
        const blogSchema = {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blogPost.title,
          "image": blogPost.image.startsWith('http') ? blogPost.image : `${BASE_URL}${blogPost.image}`,
          "datePublished": blogPost.date.split('.').reverse().join('-'),
          "author": [{
            "@type": "Person",
            "name": "Markus Lenz",
            "url": BASE_URL
          }],
          "description": blogPost.excerpt,
          "publisher": {
            "@type": "Organization",
            "name": "Lenz Energieberatung"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonical
          }
        };
        const scriptB = document.createElement('script');
        scriptB.id = 'blog-schema';
        scriptB.type = 'application/ld+json';
        scriptB.text = JSON.stringify(blogSchema);
        document.head.appendChild(scriptB);
      }
    }

    // FAQ Schema (für Startseite und Leistungsseiten)
    const existingFaqSchema = document.getElementById('faq-schema');
    if (existingFaqSchema) existingFaqSchema.remove();

    if (path === '/') {
      // FAQ Schema für Startseite
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
      const scriptF = document.createElement('script');
      scriptF.id = 'faq-schema';
      scriptF.type = 'application/ld+json';
      scriptF.text = JSON.stringify(faqSchema);
      document.head.appendChild(scriptF);
    } else if (path.startsWith('/leistungen/')) {
      // FAQ Schema für Leistungsseiten
      const serviceId = path.split('/')[2];
      const service = SERVICES.find(s => s.id === serviceId);
      if (service && service.faqs && service.faqs.length > 0) {
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
        const scriptF = document.createElement('script');
        scriptF.id = 'faq-schema';
        scriptF.type = 'application/ld+json';
        scriptF.text = JSON.stringify(faqSchema);
        document.head.appendChild(scriptF);
      }
    }

    // Service Schema für Leistungsseiten
    const existingServiceSchema = document.getElementById('service-schema');
    if (existingServiceSchema) existingServiceSchema.remove();

    if (path.startsWith('/leistungen/')) {
      const serviceId = path.split('/')[2];
      const service = SERVICES.find(s => s.id === serviceId);
      if (service) {
        const serviceSchema = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.longDescription,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Lenz Energieberatung",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kirchstr. 55",
              "addressLocality": "Düsseldorf",
              "postalCode": "40227",
              "addressCountry": "DE"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Düsseldorf"
          },
          "serviceType": service.title
        };
        const scriptS = document.createElement('script');
        scriptS.id = 'service-schema';
        scriptS.type = 'application/ld+json';
        scriptS.text = JSON.stringify(serviceSchema);
        document.head.appendChild(scriptS);
      }
    }

    // Breadcrumb Schema
    const existingBreadcrumbSchema = document.getElementById('breadcrumb-schema');
    if (existingBreadcrumbSchema) existingBreadcrumbSchema.remove();

    const breadcrumbItems: Array<{ name: string; url: string }> = [
      { name: "Startseite", url: BASE_URL }
    ];

    if (path.startsWith('/leistungen/')) {
      const serviceId = path.split('/')[2];
      const service = SERVICES.find(s => s.id === serviceId);
      breadcrumbItems.push({ name: "Leistungen", url: `${BASE_URL}/leistungen` });
      if (service) {
        breadcrumbItems.push({ name: service.title, url: `${BASE_URL}${path}` });
      }
    } else if (path === '/blog') {
      breadcrumbItems.push({ name: "Blog", url: `${BASE_URL}/blog` });
    } else if (path.startsWith('/blog/')) {
      const blogId = path.split('/')[2];
      const blogPost = BLOG_POSTS.find(b => b.id === blogId);
      breadcrumbItems.push({ name: "Blog", url: `${BASE_URL}/blog` });
      if (blogPost) {
        breadcrumbItems.push({ name: blogPost.title, url: `${BASE_URL}${path}` });
      }
    } else if (path === '/impressum') {
      breadcrumbItems.push({ name: "Impressum", url: `${BASE_URL}/impressum` });
    } else if (path === '/datenschutz') {
      breadcrumbItems.push({ name: "Datenschutz", url: `${BASE_URL}/datenschutz` });
    } else if (path === '/agb') {
      breadcrumbItems.push({ name: "AGB", url: `${BASE_URL}/agb` });
    } else if (path.startsWith('/energieberatung-')) {
      const cityId = path.replace('/energieberatung-', '');
      const city = LOCAL_CITIES.find(c => c.id === cityId);
      if (city) {
        breadcrumbItems.push({ name: `Energieberatung ${city.name}`, url: `${BASE_URL}${path}` });
      }
    }

    if (breadcrumbItems.length > 1) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };
      const scriptBC = document.createElement('script');
      scriptBC.id = 'breadcrumb-schema';
      scriptBC.type = 'application/ld+json';
      scriptBC.text = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(scriptBC);
    }

    return () => {
      const s = document.getElementById('local-business-schema');
      if (s) s.remove();
      const b = document.getElementById('blog-schema');
      if (b) b.remove();
      const f = document.getElementById('faq-schema');
      if (f) f.remove();
      const sv = document.getElementById('service-schema');
      if (sv) sv.remove();
      const bc = document.getElementById('breadcrumb-schema');
      if (bc) bc.remove();
    };
  }, [location]);

  const whatsappLink = `https://wa.me/4915736533337?text=${encodeURIComponent('Guten Tag Herr Lenz, ich interessiere mich für eine Energieberatung in Düsseldorf. Könnten Sie mich bitte kontaktieren?')}`;

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />

              <section className="py-16 bg-white relative overflow-hidden" aria-labelledby="certifications-heading">
                <div className="absolute inset-0 bg-slate-50/50 -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col items-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                      <ShieldCheck size={14} aria-hidden="true" />
                      Offiziell Anerkannt
                    </div>
                    <h2 id="certifications-heading" className="text-2xl sm:text-3xl font-black text-slate-900 text-center tracking-tight">
                      Zertifizierte Qualität nach Bundesvorgaben
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {[
                      { label: "BAFA", sub: "GELISTET", desc: "Zertifizierter Berater", color: "emerald", icon: <Award size={24} aria-hidden="true" /> },
                      { label: "KfW", sub: "FÖRDERFÄHIG", desc: "Bestätigter Sachverständiger", color: "blue", icon: <BadgeCheck size={24} aria-hidden="true" /> },
                      { label: "DENA", sub: "EXPERTE", desc: "Energieeffizienz-Experte", color: "indigo", icon: <ShieldCheck size={24} aria-hidden="true" /> },
                      { label: "GEG", sub: "KONFORM", desc: "Rechtssichere Prüfung", color: "slate", icon: <CheckCircle2 size={24} aria-hidden="true" /> }
                    ].map((cert, i) => (
                      <div key={i} className="group relative bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1">
                        <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-${cert.color}-50 text-${cert.color}-600 group-hover:scale-110 transition-transform`}>
                          {cert.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-2xl sm:text-3xl font-black italic tracking-tighter text-${cert.color}-900`}>{cert.label}</span>
                          <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-${cert.color}-600 mb-2`}>{cert.sub}</span>
                          <div className="h-px w-8 bg-slate-200 mb-3 group-hover:w-full transition-all duration-500" />
                          <span className="text-xs sm:text-sm font-bold text-slate-400 group-hover:text-slate-600 transition-colors leading-tight">
                            {cert.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <Services />
              <Process />
              <About />
              <FAQ />
            </>
          } />
          <Route path="/leistungen/:id" element={<ServiceDetailView />} />
          <Route path="/blog" element={<BlogView />} />
          <Route path="/blog/:id" element={<BlogView />} />
          <Route path="/impressum" element={<LegalView type="impressum" />} />
          <Route path="/datenschutz" element={<LegalView type="datenschutz" />} />
          <Route path="/agb" element={<LegalView type="agb" />} />
          <Route path="/energieberatung-:cityId" element={<LocalLandingPage />} />
        </Routes>
        <Contact />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group bottom-6 right-6 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 mb-20 md:mb-0"
        aria-label="WhatsApp Kontakt"
      >
        <span className="absolute -top-12 right-0 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block pointer-events-none">
          Haben Sie Fragen? 👋
        </span>
        <MessageCircle size={32} fill="currentColor" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
      </a>

      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <a
          href="#kontakt"
          className="flex items-center justify-center gap-2 bg-emerald-600 text-white w-full py-4 rounded-2xl font-bold shadow-2xl shadow-emerald-900/20 active:scale-95 transition-transform"
        >
          Jetzt Termin anfragen
        </a>
      </div>
    </div>
  );
};

export default App;
