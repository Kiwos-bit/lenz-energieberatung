
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50 rounded-bl-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 -z-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Lokal in Düsseldorf & Umgebung
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
              Energiekosten senken, <span className="text-emerald-600">Förderung sichern.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              <strong>Theorie trifft Praxis:</strong> Ihr unabhängiger Energieberater in Düsseldorf. Markus Lenz bringt die Erfahrung aus dem Schornsteinfeger-Handwerk direkt in Ihre Sanierungsplanung. Ehrlich, fundiert und mit Blick für das Machbare.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#kontakt"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 active:scale-95"
              >
                Kostenloses Erstgespräch
                <ArrowRight size={20} aria-hidden="true" />
              </a>
              <a
                href="#leistungen"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all active:scale-95"
              >
                Unsere Leistungen
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["Meister-Erfahrung", "Bis zu 70% Zuschuss", "Blick vom Fachmann", "Zertifizierte Expertise"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-600 font-medium">
                  <CheckCircle2 className="text-emerald-500" size={20} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group flex justify-center lg:justify-end">
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-200 to-slate-200 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />

            <div className="relative w-full max-w-[450px] h-[800px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-200 bg-slate-100">
              <img
                src="/markus-lenz-portrait.jpg"
                alt="Markus Lenz - Ihr zertifizierter Energieberater und Schornsteinfegermeister in Düsseldorf"
                width="688"
                height="1552"
                fetchPriority="high"
                className="w-full h-full object-cover object-[center_36%] scale-[1.45]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200";
                }}
              />
            </div>

            {/* Trust badge overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 max-w-[320px] z-10">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-emerald-600" size={28} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Markus Lenz</p>
                <p className="text-xs text-slate-500 font-medium">Energieeffizienz-Experte & Schornsteinfegermeister</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
