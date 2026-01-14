import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const whatsappLink = `https://wa.me/4915736533337?text=${encodeURIComponent('Guten Tag Herr Lenz, ich interessiere mich für eine Energieberatung in Düsseldorf. Könnten Sie mich bitte kontaktieren?')}`;

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leistungen" element={<ServicesPage />} />
            <Route path="/leistungen/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/ueber-mich" element={<AboutPage />} />
            <Route path="/ablauf" element={<ProcessPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/impressum" element={<LegalPage />} />
            <Route path="/datenschutz" element={<LegalPage />} />
            <Route path="/agb" element={<LegalPage />} />
          </Routes>
        </main>
        
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-50 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group bottom-6 right-6 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 mb-20 md:mb-0"
          aria-label="WhatsApp Kontakt"
        >
          <span className="absolute -top-12 right-0 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block pointer-events-none">
            Haben Sie Fragen? 👋
          </span>
          <MessageCircle size={32} fill="currentColor" />
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
