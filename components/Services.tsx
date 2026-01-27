import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="leistungen" className="py-24 bg-white content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-emerald-600 uppercase tracking-widest mb-3">Unsere Expertise</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Leistungen für Ihre Energiewende
          </p>
          <p className="text-lg text-slate-600">
            Wir bieten Ihnen ganzheitliche Beratungslösungen, um den Wert Ihrer Immobilie zu steigern und gleichzeitig CO₂-Emissionen sowie Kosten zu senken.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={`/leistungen/${service.id}`}
              className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-emerald-50/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ring-1 ring-slate-200">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 line-clamp-2">{service.description}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="text-emerald-500 mt-0.5 flex-shrink-0" size={16} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="inline-flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-3 transition-all mt-auto">
                Details ansehen
                <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
