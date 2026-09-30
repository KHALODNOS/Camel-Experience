import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f5]/90 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(180,83,9,0.07)] border-b border-[#e9e1dd]/60">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Logo & Title */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden border border-[#8f4900] shadow-sm">
            <img
              alt="Agadir Camel Experience Logo"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              src="/images/logo.jpg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-[#1e1b19] tracking-tight leading-tight group-hover:text-[#8f4900] transition-colors">
              Agadir Camel Experience
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-[#554337] uppercase tracking-widest">
              Est. Agadir, Morocco
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#faf2ee] px-3 py-1.5 rounded-full shadow-inner border border-[#e9e1dd]/50">
          <a href="#" className="px-4 py-1.5 bg-[#b35e08] text-white font-semibold text-xs tracking-wider rounded-full shadow-sm">
            {t('nav_home')}
          </a>
          <a href="#experiences" className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#554337] hover:bg-[#eee7e3] hover:text-[#1e1b19] transition-all">
            {t('nav_experiences')}
          </a>
          <a href="#activities" className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#554337] hover:bg-[#eee7e3] hover:text-[#1e1b19] transition-all">
            {t('nav_activities')}
          </a>
          <a href="#tours" className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#554337] hover:bg-[#eee7e3] hover:text-[#1e1b19] transition-all">
            {t('nav_tours')}
          </a>
          <a href="#gallery" className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#554337] hover:bg-[#eee7e3] hover:text-[#1e1b19] transition-all">
            {t('nav_gallery')}
          </a>
          <a href="#about" className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#554337] hover:bg-[#eee7e3] hover:text-[#1e1b19] transition-all">
            {t('nav_about')}
          </a>
          <a href="#contact" className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#554337] hover:bg-[#eee7e3] hover:text-[#1e1b19] transition-all">
            {t('nav_contact')}
          </a>
        </nav>

        {/* Action Buttons & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            title={lang === 'en' ? 'Switch to French' : 'Passer en Anglais'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#faf2ee] hover:bg-[#eee7e3] border border-[#e9e1dd] text-[#1e1b19] text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#8f4900] text-[18px]">language</span>
            <span className="uppercase tracking-wider">{lang === 'en' ? 'EN' : 'FR'}</span>
            <span className="text-[10px] text-[#554337] font-semibold bg-[#e9e1dd] px-1.5 py-0.5 rounded-full">
              {lang === 'en' ? 'FR' : 'EN'}
            </span>
          </button>

          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4ece8] text-xs font-semibold text-[#1e1b19] hover:bg-[#eee7e3] transition-colors shadow-sm border border-[#e9e1dd]"
            href="tel:0619017615"
          >
            <span className="material-symbols-outlined text-[#8f4900] text-[18px]">call</span>
            <span>0619017615</span>
          </a>

          <a
            className="inline-flex items-center px-3.5 sm:px-5 py-2.5 rounded-full bg-[#8f4900] hover:bg-[#b35e08] text-white font-semibold text-[11px] sm:text-xs tracking-wider uppercase transition-all shadow-[0_8px_24px_-2px_rgba(194,106,24,0.35)] hover:shadow-lg active:scale-95"
            href="#quick-booking"
          >
            {t('book_experience')}
          </a>
        </div>
      </div>
    </header>
  );
}
