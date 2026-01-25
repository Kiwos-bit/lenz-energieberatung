import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Energieberatung Düsseldorf | Markus Lenz | BAFA-zertifiziert';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        '⚡ Energieberatung Düsseldorf: BAFA-zertifiziert ✓ Energieausweis ✓ iSFP ✓ Förderberatung ✓ Vor-Ort-Termin in 1-7 Tagen ✓ Jetzt anfragen!'
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Energieberatung Düsseldorf | Markus Lenz');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content',
        'BAFA-zertifizierte Energieberatung in Düsseldorf. Energieausweise, Sanierungsfahrpläne, Förderberatung. Schornsteinfegermeister mit Praxis-Know-how.'
      );
    }

    // Canonical URL setzen
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = 'https://lenzenergieberatung.de/';
    }
  }, []);

  return (
    <>
      <Hero />
      
      {/* Certifications Section */}
      <section className="py-16 bg-white relative overflow-hidden" aria-labelledby="certifications-heading">
        <div className="absolute inset-0 bg-slate-50/50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              Offiziell Anerkannt
            </div>
            <h2 id="certifications-heading" className="text-2xl sm:text-3xl font-black text-slate-900 text-center tracking-tight">
              Zertifizierte Qualität nach Bundesvorgaben
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { label: "BAFA", sub: "GELISTET", desc: "Zertifizierter Berater", color: "emerald" },
              { label: "KfW", sub: "FÖRDERFÄHIG", desc: "Bestätigter Sachverständiger", color: "blue" },
              { label: "DENA", sub: "EXPERTE", desc: "Energieeffizienz-Experte", color: "indigo" },
              { label: "GEG", sub: "KONFORM", desc: "Rechtssichere Prüfung", color: "slate" }
            ].map((cert, i) => (
              <div key={i} className="group relative bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1">
                <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-${cert.color}-50 text-${cert.color}-600 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
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
      <Contact />
    </>
  );
}
