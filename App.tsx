
import React, { useState, useEffect } from 'react';
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
import { ServiceDetail, CONTACT_INFO, SERVICES } from './constants';
import { ShieldCheck, Award, CheckCircle2, BadgeCheck, MessageCircle } from 'lucide-react';

const DEFAULT_TITLE = "Lenz Energieberatung Düsseldorf | Schornsteinfegermeister & Energieexperte";
const DEFAULT_META = "Zertifizierte Energieberatung in Düsseldorf. Markus Lenz hilft Ihnen bei Energieausweisen, iSFP, Heizlastberechnung & BEG-Förderung. Jetzt Kosten sparen!";
const BASE_URL = "https://lenz-energieberatung.com";
const DEFAULT_IMAGE = `${BASE_URL}/markus-lenz-portrait.jpg`;

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [selectedLegalPage, setSelectedLegalPage] = useState<'impressum' | 'datenschutz' | 'agb' | null>(null);
  const [showBlog, setShowBlog] = useState(false);
  const [selectedBlogPost, setSelectedBlogPost] = useState<any>(null);

  useEffect(() => {
    const updateMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    let title = DEFAULT_TITLE;
    let description = DEFAULT_META;
    let image = DEFAULT_IMAGE;
    let canonical = BASE_URL;

    if (showBlog) {
      if (selectedBlogPost) {
        title = `${selectedBlogPost.title} | Lenz Energieberatung`;
        description = selectedBlogPost.excerpt;
        image = selectedBlogPost.image.startsWith('http') ? selectedBlogPost.image : `${BASE_URL}${selectedBlogPost.image}`;
        canonical = `${BASE_URL}/blog/${selectedBlogPost.id}`;
      } else {
        title = "Blog | Energie-News & Tipps Düsseldorf | Lenz";
        description = "Aktuelle Berichte zu Energieeffizienz, Förderung und Technik in Düsseldorf. Expertenwissen von Markus Lenz.";
        canonical = `${BASE_URL}/blog`;
      }
    } else if (selectedService) {
      title = selectedService.seoTitle;
      description = selectedService.seoMeta;
      canonical = `${BASE_URL}/#${selectedService.id}`;
    } else if (selectedLegalPage) {
      const legalTitles = {
        impressum: "Impressum | Lenz Energieberatung",
        datenschutz: "Datenschutzerklärung | Lenz Energieberatung",
        agb: "Allgemeine Geschäftsbedingungen | Lenz Energieberatung"
      };
      title = legalTitles[selectedLegalPage];
      description = `Rechtliche Informationen zur Lenz Energieberatung Düsseldorf - ${selectedLegalPage.toUpperCase()}. NAP-konforme Angaben nach TMG.`;
      canonical = `${BASE_URL}/${selectedLegalPage}`;
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

    const existingSchema = document.getElementById('local-business-schema');
    if (existingSchema) existingSchema.remove();

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Lenz Energieberatung",
      "description": "Zertifizierte Energieberatung in Düsseldorf. Markus Lenz ist Schornsteinfegermeister und BAFA-gelisteter Energieeffizienz-Experte. Spezialisiert auf Energieausweise, iSFP Sanierungsfahrpläne, Heizlastberechnungen und BEG-Förderberatung.",
      "image": image,
      "@id": `${BASE_URL}/#localbusiness`,
      "url": BASE_URL,
      "telephone": "+4915736533337",
      "email": "info@lenzenergieberatung.de",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kirchstr. 55",
        "addressLocality": "Düsseldorf",
        "postalCode": "40227",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.2131,
        "longitude": 6.8045
      },
      "priceRange": "€€",
      "founder": {
        "@type": "Person",
        "name": "Markus Lenz",
        "jobTitle": "Schornsteinfegermeister & Energieeffizienz-Experte"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "47"
      },
      "sameAs": [
        "https://www.facebook.com/lenz-energieberatung", // Placeholder
        "https://www.instagram.com/lenz-energieberatung" // Placeholder
      ]
    };

    const script = document.createElement('script');
    script.id = 'local-business-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    if (showBlog && selectedBlogPost) {
      const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": selectedBlogPost.title,
        "image": image,
        "datePublished": selectedBlogPost.date.split('.').reverse().join('-'), // YYYY-MM-DD
        "author": [{
          "@type": "Person",
          "name": "Markus Lenz",
          "url": BASE_URL
        }],
        "description": selectedBlogPost.excerpt,
        "publisher": {
          "@type": "Organization",
          "name": "Lenz Energieberatung",
          "logo": {
            "@type": "ImageObject",
            "url": image
          }
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

    return () => {
      const s = document.getElementById('local-business-schema');
      if (s) s.remove();
      const b = document.getElementById('blog-schema');
      if (b) b.remove();
    };
  }, [selectedService, selectedLegalPage, showBlog]);

  const handleHome = () => {
    setSelectedService(null);
    setSelectedLegalPage(null);
    setShowBlog(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (service: ServiceDetail) => {
    setSelectedService(service);
    setSelectedLegalPage(null);
    setShowBlog(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLegal = (type: 'impressum' | 'datenschutz' | 'agb') => {
    setSelectedLegalPage(type);
    setSelectedService(null);
    setShowBlog(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlog = () => {
    setShowBlog(true);
    setSelectedBlogPost(null);
    setSelectedService(null);
    setSelectedLegalPage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappLink = `https://wa.me/4915736533337?text=${encodeURIComponent('Guten Tag Herr Lenz, ich interessiere mich für eine Energieberatung in Düsseldorf. Könnten Sie mich bitte kontaktieren?')}`;

  return (
    <div className="min-h-screen">
      <Navigation onHome={handleHome} onSelectService={handleSelectService} onBlog={handleBlog} />

      <main>
        {showBlog ? (
          <BlogView selectedPost={selectedBlogPost} onSelectPost={setSelectedBlogPost} />
        ) : selectedService ? (
          <ServiceDetailView
            service={selectedService}
            onBack={() => setSelectedService(null)}
          />
        ) : selectedLegalPage ? (
          <LegalView
            type={selectedLegalPage}
            onBack={() => setSelectedLegalPage(null)}
          />
        ) : (
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

            <Services onSelectService={setSelectedService} />
            <Process />
            <About />
            <FAQ />
          </>
        )}
        <Contact />
      </main>

      <Footer onHome={handleHome} onLegal={handleSelectLegal} onBlog={handleBlog} />

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
          onClick={handleScrollToContact}
          className="flex items-center justify-center gap-2 bg-emerald-600 text-white w-full py-4 rounded-2xl font-bold shadow-2xl shadow-emerald-900/20 active:scale-95 transition-transform"
        >
          Jetzt Termin anfragen
        </a>
      </div>
    </div>
  );
};

export default App;
