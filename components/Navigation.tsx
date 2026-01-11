
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Leaf, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, SERVICES, ServiceDetail } from '../constants';

interface NavigationProps {
  onHome: () => void;
  onSelectService: (service: ServiceDetail) => void;
  onBlog: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onHome, onSelectService, onBlog }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Leistungen', href: '#leistungen', hasDropdown: true },
    { name: 'Ablauf', href: '#ablauf' },
    { name: 'Über mich', href: '#ueber-mich' },
    { name: 'Blog', action: onBlog },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  const handleLinkClick = (href: string) => {
    onHome();
    setIsOpen(false);
    setIsDropdownOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleServiceSelect = (service: ServiceDetail) => {
    onSelectService(service);
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // WhatsApp Link Setup
  const whatsappLink = `https://wa.me/4915736533337?text=${encodeURIComponent('Hallo Herr Lenz, ich habe Ihre Website besucht und würde mich gerne über eine Energieberatung informieren.')}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <button 
            onClick={onHome}
            className="flex-shrink-0 flex items-center gap-3 outline-none group"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0">
              <div className="absolute inset-0 bg-emerald-600 rounded-xl rotate-3 group-hover:rotate-6 transition-transform shadow-lg shadow-emerald-200/50" />
              <div className="absolute inset-0 bg-slate-900 rounded-xl -rotate-3 group-hover:-rotate-0 transition-transform flex items-center justify-center text-emerald-400">
                <Leaf size={22} fill="currentColor" className="opacity-90" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-baseline">
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tighter leading-none transition-colors group-hover:text-emerald-700">
                  Lenz
                </span>
                <span className="text-xl sm:text-2xl font-medium text-emerald-600 tracking-tight leading-none ml-1.5">
                  Energieberatung
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-px w-3 bg-emerald-500 rounded-full" />
                <span className="text-[8px] sm:text-[9.5px] font-black text-slate-400 uppercase tracking-[0.18em] leading-none">
                  Schornsteinfegermeister & Energieeffizienz-Experte
                </span>
              </div>
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1 text-slate-600 hover:text-emerald-600 font-bold text-sm uppercase tracking-wider transition-colors outline-none py-8"
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className={`absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 transition-all duration-200 ${
                      isDropdownOpen 
                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    {SERVICES.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceSelect(service)}
                        className="w-full text-left px-5 py-3 hover:bg-emerald-50 group transition-colors flex items-start gap-4"
                      >
                        <div className="mt-1 p-1.5 bg-slate-50 rounded-lg group-hover:bg-white text-emerald-600 transition-colors">
                          {/* Fix: Using React.ReactElement<any> to allow the injection of Lucide-specific props during cloneElement */}
                          {React.cloneElement(service.icon as React.ReactElement<any>, { size: 18, className: 'w-4.5 h-4.5' })}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {service.title}
                          </span>
                          <span className="text-xs text-slate-500 group-hover:text-emerald-600/70">
                            {service.description.split('.')[0]}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={link.name}
                  onClick={() => link.action ? link.action() : handleLinkClick(link.href!)}
                  className="text-slate-600 hover:text-emerald-600 font-bold text-sm uppercase tracking-wider transition-colors outline-none"
                >
                  {link.name}
                </button>
              )
            ))}
            
            {/* Enhanced Direct Contact Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white pl-3 pr-6 py-2 rounded-full font-bold text-sm hover:from-emerald-700 hover:to-emerald-600 transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:scale-95 group"
            >
              <div className="relative w-10 h-10 flex items-center justify-center bg-white/20 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                <MessageCircle size={20} fill="currentColor" className="relative group-hover:rotate-12 transition-transform duration-300" />
                <span className="absolute inset-0 rounded-full animate-ping bg-white/20 opacity-0 group-hover:opacity-100 pointer-events-none" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-100/90 mb-0.5">Direkt-Kontakt</span>
                <span className="text-sm font-black tracking-tight">{CONTACT_INFO.phone}</span>
              </div>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-emerald-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-6 px-4 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="space-y-2">
              <button
                onClick={() => {
                  if (link.hasDropdown) setIsDropdownOpen(!isDropdownOpen);
                  else if (link.action) { link.action(); setIsOpen(false); }
                  else handleLinkClick(link.href!);
                }}
                className="flex items-center justify-between w-full text-left text-lg font-bold text-slate-700 hover:text-emerald-600 py-3 border-b border-slate-50 last:border-0 outline-none"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={20} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />}
              </button>
            </div>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white w-full py-5 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200"
          >
            <MessageCircle size={24} fill="currentColor" />
            WhatsApp Nachricht senden
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
