import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ArrowRight, Phone, Clock, Award, Building2 } from 'lucide-react';
import { LOCAL_CITIES, SERVICES, CONTACT_INFO } from '../constants';

const LocalLandingPage: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = LOCAL_CITIES.find(c => c.id === cityId);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Stadt nicht gefunden</h1>
          <Link to="/" className="text-emerald-600 hover:underline">Zurück zur Startseite</Link>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const phoneClean = CONTACT_INFO.phone.replace(/\s/g, '');

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-100/30 rounded-bl-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-6">
                <MapPin size={16} />
                Energieberatung in {city.name}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Ihr Energieberater in{' '}
                <span className="text-emerald-600">{city.name}</span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {city.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
                >
                  Kostenlose Erstberatung
                  <ArrowRight size={20} />
                </button>
                <a
                  href={`tel:${phoneClean}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all"
                >
                  <Phone size={20} />
                  Jetzt anrufen
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="font-medium">BAFA-gelistet</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="font-medium">Vor-Ort in {city.name}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="font-medium">Bis 70% Förderung</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="font-medium">Entfernung {city.distance}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Building2 className="text-emerald-600" size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{city.name}</h3>
                    <p className="text-slate-500">{city.region}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin size={18} className="text-emerald-600" />
                    <span>Entfernung: {city.distance} von Düsseldorf</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock size={18} className="text-emerald-600" />
                    <span>Termine meist innerhalb von 7 Tagen</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Award size={18} className="text-emerald-600" />
                    <span>Zertifizierter Energieeffizienz-Experte</span>
                  </div>
                </div>

                <hr className="my-6 border-slate-100" />

                <p className="text-sm text-slate-500 mb-4">Stadtteile in {city.name}:</p>
                <div className="flex flex-wrap gap-2">
                  {city.neighborhoods.map((n, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Ihre Vorteile mit Lenz Energieberatung in {city.name}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {city.localInfo}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {city.highlights.map((highlight, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-emerald-600" size={24} />
                </div>
                <p className="font-semibold text-slate-900">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Meine Leistungen für {city.name}
            </h2>
            <p className="text-lg text-slate-600">
              Alle Dienstleistungen auch für Kunden aus {city.name} und Umgebung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                to={`/leistungen/${service.id}`}
                className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-emerald-600 font-medium text-sm">
                  Mehr erfahren
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Energieberatung in {city.name} anfragen
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie jetzt einen kostenlosen Ersttermin. Ich berate Sie persönlich vor Ort in {city.name} zu Ihren Möglichkeiten.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all"
            >
              Termin anfragen
              <ArrowRight size={20} />
            </button>
            <a
              href={`tel:${phoneClean}`}
              className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-all"
            >
              <Phone size={20} />
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Andere Städte */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Energieberatung auch in anderen Städten
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {LOCAL_CITIES.filter(c => c.id !== cityId).map((c) => (
              <Link
                key={c.id}
                to={`/energieberatung-${c.id}`}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full hover:bg-emerald-100 hover:text-emerald-700 transition-colors font-medium"
              >
                Energieberatung {c.name}
              </Link>
            ))}
            <Link
              to="/"
              className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium"
            >
              Energieberatung Düsseldorf
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalLandingPage;
