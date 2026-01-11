
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Etwas ist schiefgelaufen.');
      }
    } catch (err: any) {
      console.error('Submit error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Leider konnte die Nachricht nicht gesendet werden. Bitte versuchen Sie es später erneut.');
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* ... (left side remains the same) */}
          <div className="flex flex-col justify-center">
            <h2 className="text-base font-bold text-emerald-600 uppercase tracking-widest mb-3">Kontakt</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Lassen Sie uns über Ihre Sanierung sprechen
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Haben Sie Fragen oder möchten Sie direkt einen Termin in Düsseldorf vereinbaren? Rufen Sie uns an oder nutzen Sie das Kontaktformular. Wir freuen uns auf Ihr Projekt.
            </p>

            <div className="space-y-8">
              <div className="group flex gap-6 items-start">
                <div className="w-14 h-14 bg-emerald-50 group-hover:bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0 transition-colors">
                  <Phone size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Telefon</h4>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-xl font-bold text-slate-900 hover:text-emerald-600 transition-colors">{CONTACT_INFO.phone}</a>
                </div>
              </div>

              <div className="group flex gap-6 items-start">
                <div className="w-14 h-14 bg-emerald-50 group-hover:bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0 transition-colors">
                  <Mail size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">E-Mail</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-bold text-slate-900 hover:text-emerald-600 transition-colors">{CONTACT_INFO.email}</a>
                </div>
              </div>

              <div className="group flex gap-6 items-start">
                <div className="w-14 h-14 bg-emerald-50 group-hover:bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0 transition-colors">
                  <MapPin size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Standort</h4>
                  <address className="text-xl font-bold text-slate-900 not-italic">{CONTACT_INFO.address}</address>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-50 rounded-[2rem] -z-10 blur-xl opacity-50" />

            <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
              {status === 'success' ? (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Vielen Dank!</h3>
                  <p className="text-slate-600 mb-8">
                    Ihre Anfrage wurde erfolgreich gesendet. Wir werden uns so schnell wie möglich bei Ihnen melden.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-emerald-600 font-bold hover:underline"
                  >
                    Weitere Nachricht senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-center gap-3 text-rose-700 text-sm font-medium">
                      <AlertCircle size={20} className="flex-shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="full-name" className="block text-sm font-bold text-slate-800 mb-2 ml-1">Vor- & Nachname</label>
                      <input
                        id="full-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        disabled={status === 'loading'}
                        placeholder="Erika Musterfrau"
                        className="w-full px-5 py-4 bg-slate-50/50 rounded-2xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-800 mb-2 ml-1">Telefonnummer</label>
                      <input
                        id="phone"
                        name="tel"
                        type="tel"
                        autoComplete="tel"
                        required
                        disabled={status === 'loading'}
                        placeholder="0157..."
                        className="w-full px-5 py-4 bg-slate-50/50 rounded-2xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-800 mb-2 ml-1">E-Mail Adresse</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      disabled={status === 'loading'}
                      placeholder="name@beispiel.de"
                      className="w-full px-5 py-4 bg-slate-50/50 rounded-2xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="service-select" className="block text-sm font-bold text-slate-800 mb-2 ml-1">Ihr Anliegen</label>
                    <div className="relative">
                      <select
                        id="service-select"
                        name="service"
                        required
                        disabled={status === 'loading'}
                        className="w-full px-5 py-4 bg-slate-50/50 rounded-2xl border border-slate-200 text-slate-900 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none appearance-none cursor-pointer disabled:opacity-50"
                        defaultValue=""
                      >
                        <option disabled value="">Bitte wählen Sie eine Leistung</option>
                        {SERVICES.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="sonstiges">Sonstiges Anliegen</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <Send size={16} className="rotate-90" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-800 mb-2 ml-1">Ihre Nachricht</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={status === 'loading'}
                      placeholder="Wie können wir Ihnen helfen?"
                      className="w-full px-5 py-4 bg-slate-50/50 rounded-2xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none resize-none disabled:opacity-50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-3 bg-emerald-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 hover:-translate-y-1 active:translate-y-0 transition-all shadow-xl shadow-emerald-600/20 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Anfrage jetzt senden
                        <Send size={20} className="transition-transform" aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <div className="pt-2">
                    <p className="text-xs text-slate-400 text-center leading-relaxed">
                      Ihre Daten werden sicher verschlüsselt übertragen.<br />Mit dem Absenden erklären Sie sich mit unserer <a href="/datenschutz" className="underline hover:text-emerald-600">Datenschutzerklärung</a> einverstanden.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
