
import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle2, FileText, Info, Euro, Calendar, Plus, Minus, TrendingUp, ShieldCheck, HelpCircle, ChevronRight, RefreshCcw, Calculator, Zap } from 'lucide-react';
import { ServiceDetail, CONTACT_INFO } from '../constants';

interface ServiceDetailViewProps {
  service: ServiceDetail;
  onBack: () => void;
}

const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ service, onBack }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Inject Service & Breadcrumb Schema
    const existingSchema = document.getElementById('service-schema');
    if (existingSchema) existingSchema.remove();

    const existingBreadcrumb = document.getElementById('breadcrumb-schema');
    if (existingBreadcrumb) existingBreadcrumb.remove();

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": service.title,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Lenz Energieberatung",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Düsseldorf",
          "postalCode": "40227"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Düsseldorf"
      },
      "description": service.longDescription
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Startseite",
          "item": "https://lenz-energieberatung.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Leistungen",
          "item": "https://lenz-energieberatung.com/#leistungen"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": `https://lenz-energieberatung.com/#${service.id}`
        }
      ]
    };

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

    const scriptS = document.createElement('script');
    scriptS.id = 'service-schema';
    scriptS.type = 'application/ld+json';
    scriptS.text = JSON.stringify(serviceSchema);
    document.head.appendChild(scriptS);

    const scriptB = document.createElement('script');
    scriptB.id = 'breadcrumb-schema';
    scriptB.type = 'application/ld+json';
    scriptB.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(scriptB);

    const scriptF = document.createElement('script');
    scriptF.id = 'faq-schema';
    scriptF.type = 'application/ld+json';
    scriptF.text = JSON.stringify(faqSchema);
    document.head.appendChild(scriptF);

    return () => {
      const s = document.getElementById('service-schema');
      if (s) s.remove();
      const b = document.getElementById('breadcrumb-schema');
      if (b) b.remove();
      const f = document.getElementById('faq-schema');
      if (f) f.remove();
    };
  }, [service]);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-medium mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Zurück zur Übersicht
        </button>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                {service.icon}
              </div>
              <div>
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Leistungsdetails</span>
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{service.title}</h1>
              </div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              {service.longDescription}
            </p>

            {service.id === 'energieausweis' && <EnergyCertificateWizard />}
            {service.id === 'isfp' && (
              <>
                <div className="mb-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-8 text-white shadow-xl shadow-emerald-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <TrendingUp className="text-emerald-300" size={32} />
                      <h2 className="text-2xl font-bold">Der iSFP-Bonus: Ihr finanzieller Vorsprung</h2>
                    </div>
                    <p className="text-emerald-50 mb-8 leading-relaxed text-lg">
                      Gemäß den aktuellen Richtlinien der <strong>Bundesförderung für effiziente Gebäude (BEG)</strong> bietet ein Sanierungsfahrplan zusätzliche Boni.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <div className="text-3xl font-black mb-2 text-emerald-300">+5%</div>
                        <p className="text-sm font-bold uppercase tracking-wider mb-2">Förder-Bonus</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <div className="text-3xl font-black mb-2 text-emerald-300">60.000 €</div>
                        <p className="text-sm font-bold uppercase tracking-wider mb-2">Fördergrenze</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ISFPCalculator />
              </>
            )}

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Ihre Vorteile</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={24} />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Benötigte Unterlagen</h2>
            <div className="bg-emerald-50 rounded-2xl p-8 mb-12 border border-emerald-100 shadow-sm shadow-emerald-100/50">
              <ul className="space-y-4">
                {service.documents.map((doc, idx) => (
                  <li key={idx} className="flex gap-4 items-center text-slate-700">
                    <FileText className="text-emerald-600" size={20} />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-8">Häufige Fragen zu {service.title}</h2>
            <div className="space-y-4 mb-12">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md">
                  <button onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left">
                    <span className="text-lg font-bold text-slate-900 pr-8">{faq.question}</span>
                    <span className="bg-emerald-50 text-emerald-600 rounded-lg p-2">
                      {openFaqIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {openFaqIndex === idx && <div className="p-6 pt-0 text-slate-600 border-t border-slate-50">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <h3 className="text-xl font-bold mb-6">Zusammenfassung</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <Euro className="text-emerald-400 mt-1" size={20} />
                    <div><p className="text-sm text-slate-400 uppercase font-bold tracking-wider">Kosten</p><p className="font-medium text-slate-100">{service.pricing}</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Calendar className="text-emerald-400 mt-1" size={20} />
                    <div><p className="text-sm text-slate-400 uppercase font-bold tracking-wider">Dauer</p><p className="font-medium text-slate-100">Termin i.d.R. in 1-7 Tagen</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Info className="text-emerald-400 mt-1" size={20} />
                    <div><p className="text-sm text-slate-400 uppercase font-bold tracking-wider">Ort</p><p className="font-medium text-slate-100">Vor-Ort in Düsseldorf & Umgebung</p></div>
                  </div>
                </div>
                <a href="#kontakt" onClick={handleScrollToContact} className="mt-8 block w-full bg-emerald-500 text-slate-900 py-4 rounded-xl font-bold text-center hover:bg-emerald-400 shadow-lg active:scale-95">Beratung anfragen</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const ISFPCalculator: React.FC = () => {
  const [investment, setInvestment] = useState(30000);
  const baseRate = 0.15;
  const iSFPBonus = 0.05;
  const limitWithoutISFP = 30000;
  const limitWithISFP = 60000;
  const eligibleWithout = Math.min(investment, limitWithoutISFP);
  const subsidyWithout = eligibleWithout * baseRate;
  const eligibleWith = Math.min(investment, limitWithISFP);
  const subsidyWith = eligibleWith * (baseRate + iSFPBonus);
  return (
    <div className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-10 mb-12 text-white shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-slate-900 shadow-lg"><Calculator size={32} /></div>
            <div><h3 className="text-2xl font-black tracking-tight">iSFP Bonus-Rechner</h3><p className="text-emerald-400 font-bold text-sm uppercase">Simulieren Sie Ihren Vorteil</p></div>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Investitionssumme</label>
            <input type="range" min="5000" max="80000" step="1000" value={investment} onChange={(e) => setInvestment(parseInt(e.target.value))} className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
            <div className="relative mt-4">
              <input type="number" value={investment} onChange={(e) => setInvestment(Math.max(0, parseInt(e.target.value) || 0))} className="w-full bg-slate-800/50 border-2 border-slate-700 rounded-2xl py-5 pl-16 pr-6 text-3xl font-black text-white outline-none" />
            </div>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-800/40 rounded-3xl border border-slate-700"><p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Ohne iSFP</p><div className="text-4xl font-black mb-2">{subsidyWithout.toLocaleString('de-DE')} €</div><p className="text-sm text-slate-400">Förderung (15%)</p></div>
            <div className="p-8 bg-emerald-600 rounded-3xl shadow-2xl"><p className="text-xs font-black text-emerald-200 uppercase tracking-[0.2em] mb-4">Mit iSFP Bonus</p><div className="text-4xl font-black mb-2">{subsidyWith.toLocaleString('de-DE')} €</div><p className="text-sm text-emerald-100">Förderung (20%)</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnergyCertificateWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const resetWizard = () => setStep(1);
  const handleAnswer = () => setStep(4);
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 mb-12 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6"><HelpCircle className="text-emerald-600" size={28} /><h3 className="text-xl font-bold text-slate-900">Welchen Ausweis brauche ich?</h3></div>
      <div className="relative min-h-[100px]">
        {step === 1 && (
          <div>
            <p className="text-slate-700 font-medium mb-6">Wie viele Wohneinheiten hat Ihr Gebäude?</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <button onClick={handleAnswer} className="p-4 bg-white border-2 border-slate-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-all text-left group">
                <span className="block font-bold text-slate-900 group-hover:text-emerald-700">5 oder mehr</span>
              </button>
              <button onClick={handleAnswer} className="p-4 bg-white border-2 border-slate-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-all text-left group">
                <span className="block font-bold text-slate-900 group-hover:text-emerald-700">Weniger als 5</span>
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="p-6 bg-emerald-600 rounded-2xl text-white">
            <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><CheckCircle2 size={24} />Sie haben die Wahlfreiheit!</h4>
            <p className="mb-6 opacity-90 leading-relaxed">Für Ihr Gebäude können Sie sowohl einen Verbrauchsausweis als auch einen Bedarfsausweis erstellen lassen.</p>
            <button onClick={resetWizard} className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold transition-all">Neustart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailView;
