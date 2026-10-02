import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", label: t('nav_home') },
    { href: "#experiences", label: t('nav_experiences') },
    { href: "#route", label: t('nav_route') },
    { href: "#horse-riding", label: t('nav_horse_riding') },
    { href: "#activities", label: t('nav_activities') },
    { href: "#tours", label: t('nav_tours') },
    { href: "#gallery", label: t('nav_gallery') },
    { href: "#pricing", label: t('nav_pricing') },
    { href: "#about", label: t('nav_about') },
    { href: "#contact", label: t('nav_contact') },
  ];
  const handleScroll = (e, href) => {
    // If it's a hash link, handle it manually for smooth scroll and closing menu
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      
      setIsMenuOpen(false);
      
      // Wait for the menu closing animation to start/unmount before scrolling
      setTimeout(() => {
        if (targetId === '') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            // Calculate exact position adjusting for header height
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f5]/90 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(180,83,9,0.07)] border-b border-[#e9e1dd]/60">
      <div className="h-20 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-2 xl:gap-4">
        {/* Logo & Title */}
        <a href="#" onClick={(e) => handleScroll(e, '#')} className="flex items-center gap-3 shrink-0 group">
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
            <span className="text-[10px] sm:text-xs font-semibold text-[#554337] uppercase tracking-widest hidden sm:block">
              Est. Agadir, Morocco
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-0.5 bg-[#faf2ee] px-1.5 py-1 rounded-full shadow-inner border border-[#e9e1dd]/50">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className={`px-2 lg:px-2.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all whitespace-nowrap ${index === 0 ? 'bg-[#b35e08] text-white shadow-sm' : 'text-[#554337] hover:bg-[#eee7e3] hover:text-[#1e1b19]'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons & Language Switcher */}
        <div className="hidden xl:flex items-center gap-1.5 shrink-0">
          <button
            onClick={toggleLanguage}
            title={lang === 'en' ? 'Switch to French' : 'Passer en Anglais'}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#faf2ee] hover:bg-[#eee7e3] border border-[#e9e1dd] text-[#1e1b19] text-xs font-bold transition-all shadow-sm cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[#8f4900] text-[16px]">language</span>
            <span className="uppercase tracking-wider text-[10px]">{lang === 'en' ? 'EN' : 'FR'}</span>
            <span className="text-[9px] text-[#554337] font-semibold bg-[#e9e1dd] px-1.5 py-0.5 rounded-full">
              {lang === 'en' ? 'FR' : 'EN'}
            </span>
          </button>

          <a
            className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4ece8] text-[11px] font-semibold text-[#1e1b19] hover:bg-[#eee7e3] transition-colors shadow-sm border border-[#e9e1dd] shrink-0 whitespace-nowrap"
            href="tel:0619017615"
          >
            <span className="material-symbols-outlined text-[#8f4900] text-[16px]">call</span>
            <span>0619017615</span>
          </a>

          <a
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#8f4900] hover:bg-[#b35e08] text-white font-semibold text-[10px] tracking-wider uppercase transition-all shadow-[0_8px_24px_-2px_rgba(194,106,24,0.35)] hover:shadow-lg active:scale-95 shrink-0 whitespace-nowrap"
            href="#quick-booking"
            onClick={(e) => handleScroll(e, '#quick-booking')}
          >
            {t('book_experience')}
          </a>
        </div>

        {/* Mobile Action Buttons (Menu Toggle) */}
        <div className="flex xl:hidden items-center gap-2 shrink-0">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 rounded-full bg-[#faf2ee] border border-[#e9e1dd] flex items-center justify-center text-[#1e1b19] shadow-sm active:scale-95 transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#fff8f5] border-t border-[#e9e1dd]/60 overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-6 space-y-6 h-[calc(100vh-80px)] overflow-y-auto pb-32">
              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-between w-full max-w-sm px-6 py-4 rounded-xl bg-[#faf2ee] border border-[#e9e1dd] text-[#1e1b19] text-sm font-bold shadow-sm active:scale-95 transition-transform cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#8f4900]">language</span>
                    <span className="uppercase tracking-wider">{lang === 'en' ? 'ENGLISH' : 'FRANÇAIS'}</span>
                  </div>
                  <span className="text-[10px] text-[#554337] font-bold bg-[#e9e1dd] px-3 py-1.5 rounded-full uppercase tracking-wider">
                    SWITCH TO {lang === 'en' ? 'FR' : 'EN'}
                  </span>
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col gap-3 max-w-sm mx-auto">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="flex items-center justify-between px-6 py-4 rounded-xl bg-white border border-[#e9e1dd]/50 hover:bg-[#faf2ee] text-[#1e1b19] font-bold text-sm uppercase tracking-wider transition-colors shadow-sm"
                  >
                    {link.label}
                    <span className="material-symbols-outlined text-[#8f4900]">chevron_right</span>
                  </a>
                ))}
              </nav>
              
              {/* Mobile Call & Book CTAs */}
              <div className="flex flex-col gap-3 max-w-sm mx-auto mt-6">
                <a
                  href="#quick-booking"
                  onClick={(e) => handleScroll(e, '#quick-booking')}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#8f4900] text-white font-bold text-sm uppercase tracking-wider shadow-md active:scale-95 transition-transform"
                >
                  <span className="material-symbols-outlined">book_online</span>
                  {t('book_experience')}
                </a>
                <a
                  href="tel:0619017615"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#f4ece8] border border-[#e9e1dd] text-[#1e1b19] font-bold text-sm shadow-sm active:scale-95 transition-transform"
                >
                  <span className="material-symbols-outlined text-[#8f4900]">call</span>
                  CALL: 0619017615
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
