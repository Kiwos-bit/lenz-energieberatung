
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { LEGAL_CONTENT } from '../constants';

interface LegalViewProps {
  type: 'impressum' | 'datenschutz' | 'agb';
  onBack: () => void;
}

const LegalView: React.FC<LegalViewProps> = ({ type, onBack }) => {
  const content = LEGAL_CONTENT[type];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-medium mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Zurück zur Startseite
        </button>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-12 tracking-tight">
          {content.title}
        </h1>

        <div 
          className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
      </div>
    </div>
  );
};

export default LegalView;
