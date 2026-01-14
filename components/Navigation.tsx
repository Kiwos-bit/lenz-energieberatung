import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Leaf, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Leistungen', href: '/leistungen', hasDropdown: true },
    { name: 'Ablauf', href: '/ablauf' },
    { name: 'Über mich', href: '/ueber-mich' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const whatsappLink = `https://wa.me/4915736533337?text=${encodeURIComponent('Guten Tag Herr Lenz, ich interessiere mich für eine Energieberatung in Düsseldorf. Könnten Sie mich bitte kontaktieren?')}`;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-emerald-600 p-2 rounded-lg group-hover:bg-emerald-700 transition-colors">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Lenz Energieberatung</span>
                <span className="text-xs text-gray-600">Düsseldorf | BAFA-zertifiziert</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => 
                link.hasDropdown ? (
                  <div key={link.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                    >
                      {link.name}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            to={`/leistungen/${service.id}`}
                            className="block px-4 py-3 hover:bg-emerald-50 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <div className="flex items-start">
                              <div className="mt-1">{service.icon}</div>
                              <div className="ml-3">
                                <div className="font-medium text-gray-900">{service.title}</div>
                                <div className="text-sm text-gray-600 line-clamp-1">{service.description}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                        <Link
                          to="/leistungen"
                          className="block px-4 py-3 mt-2 border-t border-gray-100 text-emerald-600 font-medium hover:bg-emerald-50 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Alle Leistungen ansehen →
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              )}

              {/* CTA Buttons */}
              <div className="flex items-center space-x-3 ml-4">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="px-4 py-2 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center justify-between w-full text-gray-700 font-medium py-2"
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                      <div className="pl-4 space-y-2 mt-2">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            to={`/leistungen/${service.id}`}
                            className="block py-2 text-gray-600 hover:text-emerald-600"
                            onClick={() => { setIsOpen(false); setIsDropdownOpen(false); }}
                          >
                            {service.title}
                          </Link>
                        ))}
                        <Link
                          to="/leistungen"
                          className="block py-2 text-emerald-600 font-medium"
                          onClick={() => { setIsOpen(false); setIsDropdownOpen(false); }}
                        >
                          Alle Leistungen →
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-gray-700 font-medium py-2 hover:text-emerald-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="block w-full text-center px-4 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold"
                >
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-[#25D366] text-white rounded-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Kontakt
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20"></div>
    </>
  );
};

export default Navigation;
