import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-20 sm:py-24 bg-[#faf2ee] relative overflow-hidden border-t border-[#e9e1dd]" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-8 relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdcc5] text-[#8f4900] text-xs font-semibold uppercase tracking-widest border border-[#e9e1dd]">
          <span className="material-symbols-outlined text-[16px]">bolt</span>
          {t('instant_confirm')}
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1e1b19] tracking-tight max-w-3xl mx-auto">
          {t('ready_title')}
        </h2>

        <p className="text-base sm:text-lg text-[#554337] max-w-2xl mx-auto font-light leading-relaxed">
          {t('ready_desc')}
        </p>

        {/* Direct Contact Box */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 py-3.5 px-6 rounded-2xl bg-white shadow-sm border border-[#e9e1dd] mx-auto text-sm text-[#1e1b19]">
          <a href="tel:0619017615" className="flex items-center gap-2 text-[#8f4900] font-semibold hover:underline">
            <span className="material-symbols-outlined text-[20px]">call</span>
            <span>Direct Phone &amp; WhatsApp: 0619017615</span>
          </a>
          <span className="hidden sm:inline text-[#dbc2b2]">|</span>
          <span className="flex items-center gap-2 text-[#554337]">
            <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            <span>Instagram: @AgadirCamelExperience</span>
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#8f4900] hover:bg-[#b35e08] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[0_12px_32px_-4px_rgba(194,106,24,0.35)] hover:-translate-y-0.5"
            href="https://wa.me/212619017615?text=Hello%21%20I%20would%20like%20to%20reserve%20an%20Agadir%20experience."
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>{t('book_whatsapp')}</span>
          </a>
          <a
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#f4ece8] text-[#1e1b19] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm border border-[#e9e1dd]"
            href="#quick-booking"
          >
            <span className="material-symbols-outlined text-[20px]">edit_calendar</span>
            <span>{t('book_online')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
