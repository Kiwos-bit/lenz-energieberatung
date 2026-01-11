
import React from 'react';
import { CONTACT_INFO, SERVICES } from '../constants';
import { Shield, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onHome?: () => void;
  onLegal?: (type: 'impressum' | 'datenschutz' | 'agb') => void;
  onBlog?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onHome, onLegal, onBlog }) => {
  const quickLinks = [
    { name: 'Startseite', href: '#', action: onHome },
    { name: 'Leistungen', href: '#leistungen' },
    { name: 'Der Ablauf', href: '#ablauf' },
    { name: 'Über mich', href: '#ueber-mich' },
    { name: 'Blog / Magazin', action: onBlog },
    { name: 'Häufige Fragen (FAQ)', href: '#faq' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: any) => {
    e.preventDefault();
    if (link.action) {
      link.action();
    } else if (onHome) {
      onHome();
      if (link.href !== '#') {
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }
  };

  const handleLegalClick = (e: React.MouseEvent<HTMLAnchorElement>, type: 'impressum' | 'datenschutz' | 'agb') => {
    e.preventDefault();
    if (onLegal) onLegal(type);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold text-white tracking-tight leading-none transition-colors group-hover:text-emerald-600">Lenz Energieberatung</span>
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

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Schnellzugriff</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href || '#'} 
                    onClick={(e) => handleLinkClick(e, link)}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Leistungen</h4>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a 
                    href="#leistungen" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (onHome) onHome();
                      setTimeout(() => {
                        const element = document.getElementById('leistungen');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }, 50);
                    }}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Kontakt Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-emerald-500 flex-shrink-0" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-emerald-500 flex-shrink-0" size={18} />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-emerald-500 flex-shrink-0" size={18} />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© {new Date().getFullYear()} {CONTACT_INFO.name}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8">
            <a href="#" onClick={(e) => handleLegalClick(e, 'impressum')} className="hover:text-emerald-400 transition-colors">Impressum</a>
            <a href="#" onClick={(e) => handleLegalClick(e, 'datenschutz')} className="hover:text-emerald-400 transition-colors">Datenschutz</a>
            <a href="#" onClick={(e) => handleLegalClick(e, 'agb')} className="hover:text-emerald-400 transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
