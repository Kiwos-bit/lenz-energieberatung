
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="ablauf" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
         <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-base font-bold text-emerald-400 uppercase tracking-widest mb-3">Transparenz</h2>
            <p className="text-3xl sm:text-4xl font-extrabold mb-8 tracking-tight">
              So einfach kommen Sie zur energetischen Sanierung
            </p>
            <p className="text-lg text-slate-400 mb-10">
              Vom ersten Kontakt bis zur fertigen Sanierung: Wir begleiten Sie mit einem klaren Prozess und festen Ansprechpartnern durch den gesamten Förderdschungel.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center bg-emerald-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all"
            >
              Jetzt Beratung anfragen
            </a>
          </div>

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex gap-6 relative group">
                {index !== PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-12 left-6 bottom-[-32px] w-0.5 bg-slate-800" />
                )}
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center font-bold text-slate-900 text-xl z-10 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
