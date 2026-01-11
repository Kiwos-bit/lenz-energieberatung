
import React from 'react';
import { Award, ShieldCheck, Target, Zap, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="ueber-mich" className="py-24 bg-white overflow-hidden relative" aria-labelledby="about-heading">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-600/5 rounded-full blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1200"
                alt="Energetisch saniertes Einfamilienhaus in Düsseldorf - Beispiel für erfolgreiche Energieberatung"
                width="600"
                height="600"
                className="rounded-[2.5rem] shadow-2xl object-cover w-full h-[600px] ring-1 ring-slate-200 hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000";
                }}
              />

              <div className="absolute -bottom-10 -right-6 md:right-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[280px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                    <ShieldCheck size={28} />
                  </div>
                  <div className="font-black text-slate-900 leading-tight">
                    Offiziell <br /> Zertifiziert
                  </div>
                </div>
                <p className="text-sm text-slate-500 font-medium">Gelistet in der Energieeffizienz-Expertenliste für Förderprogramme des Bundes.</p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 md:gap-12">
              <div>
                <div className="text-4xl font-black text-emerald-600 mb-1">100%</div>
                <div className="text-sm font-bold text-slate-900 uppercase tracking-widest">Unabhängig</div>
              </div>
              <div>
                <div className="text-4xl font-black text-emerald-600 mb-1">Meister</div>
                <div className="text-sm font-bold text-slate-900 uppercase tracking-widest">Qualifikation</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold mb-6">
              <Award size={18} />
              Ihre beste Wahl in Düsseldorf
            </div>

            <h2 id="about-heading" className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Theorie ist gut. <br />
              <span className="text-emerald-600 italic">Praxis ist entscheidend.</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 mb-12 leading-relaxed">
              <p>
                In der Energieberatung gibt es viele Planer, die nur auf den Bildschirm schauen. Als <strong>Schornsteinfegermeister</strong> kenne ich die Gebäude in Düsseldorf jedoch von innen – vom feuchten Keller bis zum undichten First.
              </p>
              <p>
                <strong>Mein Versprechen an Sie:</strong> Ich kombiniere modernste Ingenieurs-Software mit dem geschulten Auge des Handwerkers.
              </p>
            </div>

            <div className="grid gap-4 mb-12">
              {[
                {
                  title: "Realitäts-Check statt Standard-Software",
                  desc: "Ich erkenne energetische Schwachstellen vor Ort in Düsseldorf.",
                  icon: <Target size={20} />
                },
                {
                  title: "Maximale Förderung – Garantiert",
                  desc: "Ich hole das Maximum aus BAFA & KfW für Sie heraus.",
                  icon: <Zap size={20} />
                },
                {
                  title: "Regionale Nähe (40227)",
                  desc: "Kurze Wege, schnelle Termine vor Ort in Düsseldorf.",
                  icon: <MapPin size={20} />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-emerald-200 transition-all">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-emerald-600 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative p-8 bg-emerald-600 rounded-3xl text-white shadow-xl">
              <p className="relative z-10 text-lg font-medium leading-relaxed mb-6 italic">
                "Ich berate Sie so, wie ich auch mein eigenes Haus sanieren würde: Wirtschaftlich sinnvoll und technisch ausgereift."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center font-bold">ML</div>
                <div>
                  <div className="font-bold">Markus Lenz</div>
                  <div className="text-emerald-100 text-xs font-medium uppercase tracking-widest">Energieeffizienz-Experte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
