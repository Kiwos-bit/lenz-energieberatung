import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SERVICES } from '../constants';
import { Shield, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Startseite', href: '/' },
    { name: 'Leistungen', href: '/leistungen' },
    { name: 'Der Ablauf', href: '/ablauf' },
    { name: 'Über mich', href: '/ueber-mich' },
    { name: 'Blog / Magazin', href: '/blog' },
    { name: 'Häufige Fragen (FAQ)', href: '/faq' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold text-white tracking-tight leading-none">Lenz Energieberatung</span>
              <span className="text-[10px] uppercase font-semibold text-emerald-400 tracking-widest mt-1.5">Schornsteinfegermeister & Energieexperte</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-6">
              Zertifizierte Energieberatung in Düsseldorf. Unabhängige Planung, Fördermittel-Check und Baubegleitung für Ihre Immobilien-Zukunft.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 ring-1 ring-slate-700">
                <Shield size={20} />
              </div>
              <p className="text-sm font-medium text-slate-300">BAFA & KfW zertifizierter Experte</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Leistungen</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/leistungen/${service.id}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-slate-400 hover:text-emerald-400 transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Lenz Energieberatung. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link 
                to="/impressum"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Impressum
              </Link>
              <Link 
                to="/datenschutz"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Datenschutz
              </Link>
              <Link 
                to="/agb"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
