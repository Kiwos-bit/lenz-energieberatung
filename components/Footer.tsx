
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CONTACT_INFO, SERVICES } from '../constants';
import { Shield, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const targetId = href.split('#')[1];
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex flex-col mb-6 outline-none">
              <span className="text-2xl font-bold text-white tracking-tight leading-none transition-colors hover:text-emerald-600">Lenz Energieberatung</span>
              <span className="text-[10px] uppercase font-semibold text-emerald-400 tracking-widest mt-1.5">Schornsteinfegermeister & Energieexperte</span>
            </Link>
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
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Startseite</Link></li>
              <li><a href="/#leistungen" onClick={(e) => handleLinkClick(e, '/#leistungen')} className="hover:text-emerald-400 transition-colors">Leistungen</a></li>
              <li><a href="/#ablauf" onClick={(e) => handleLinkClick(e, '/#ablauf')} className="hover:text-emerald-400 transition-colors">Der Ablauf</a></li>
              <li><a href="/#ueber-mich" onClick={(e) => handleLinkClick(e, '/#ueber-mich')} className="hover:text-emerald-400 transition-colors">Über mich</a></li>
              <li><Link to="/blog" className="hover:text-emerald-400 transition-colors">Blog / Magazin</Link></li>
              <li><a href="/#faq" onClick={(e) => handleLinkClick(e, '/#faq')} className="hover:text-emerald-400 transition-colors">Häufige Fragen (FAQ)</a></li>
              <li><a href="/#kontakt" onClick={(e) => handleLinkClick(e, '/#kontakt')} className="hover:text-emerald-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Leistungen</h4>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link to={`/leistungen/${service.id}`} className="hover:text-emerald-400 transition-colors">{service.title}</Link>
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
          <div className="flex gap-8 text-slate-600 text-[10px] hidden lg:flex">
            <span>Düsseldorf-Stadtmitte</span>
            <span>Oberbilk</span>
            <span>Unterrath</span>
            <span>Gerresheim</span>
            <span>Benrath</span>
            <span>Kaiserswerth</span>
            <span>Düsseltal</span>
          </div>
          <div className="flex gap-8">
            <Link to="/impressum" className="hover:text-emerald-400 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-emerald-400 transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-emerald-400 transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
