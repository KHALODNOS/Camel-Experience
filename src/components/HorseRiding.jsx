import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function HorseRiding() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-20 sm:py-24 bg-[#fff8f5]" id="horse-riding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Left */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-[#eee7e3] border border-[#e9e1dd]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                alt="Agadir Horse Riding Excursion on Sunset Beach"
                src="/images/WhatsApp Image 2026-09-30 at 16.14.09 (2).jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#33302d]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-semibold text-[#ffdcc5] uppercase tracking-wider block">
                  Arabian-Barb Stables
                </span>
                <p className="font-serif text-base sm:text-lg italic">
                  "The bond between rider, dunes, and the Atlantic breeze is pure poetry."
                </p>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-[#e9e1dd] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffdcc5] flex items-center justify-center text-[#8f4900]">
                <span className="material-symbols-outlined text-[20px]">sports_score</span>
              </div>
              <div>
                <span className="block font-bold text-sm text-[#1e1b19]">All Levels</span>
                <span className="text-xs text-[#554337]">Beginner to Advanced</span>
              </div>
            </div>
          </div>

          {/* Story & Pricing Right */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbcf] text-[#380c00] text-xs uppercase tracking-widest font-semibold">
              <span className="material-symbols-outlined text-[16px] text-[#9e421f]">wb_sunny</span>
              {t('horse_badge')}
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1e1b19] tracking-tight leading-tight">
              {t('horse_title')}
            </h2>

            <p className="text-base sm:text-lg text-[#554337] leading-relaxed font-light">
              {t('horse_desc')}
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#faf2ee] border border-[#e9e1dd] space-y-1">
                <span className="material-symbols-outlined text-[#8f4900] text-[24px]">verified_user</span>
                <h3 className="font-serif text-base font-bold text-[#1e1b19]">{t('safety_first')}</h3>
                <p className="text-xs text-[#554337]">{t('safety_desc')}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#faf2ee] border border-[#e9e1dd] space-y-1">
                <span className="material-symbols-outlined text-[#8f4900] text-[24px]">workspace_premium</span>
                <h3 className="font-serif text-base font-bold text-[#1e1b19]">{t('purebred')}</h3>
                <p className="text-xs text-[#554337]">{t('purebred_desc')}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#faf2ee] border border-[#e9e1dd] space-y-1">
                <span className="material-symbols-outlined text-[#8f4900] text-[24px]">support_agent</span>
                <h3 className="font-serif text-base font-bold text-[#1e1b19]">{t('guide_escort')}</h3>
                <p className="text-xs text-[#554337]">{t('guide_desc')}</p>
              </div>
            </div>

            {/* Horse Riding Packages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {/* Option 1: 10 EUR */}
              <div className="p-5 rounded-2xl bg-white border border-[#e9e1dd] shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#554337] uppercase tracking-wider block">Ride Only</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <h3 className="font-serif text-base font-bold text-[#1e1b19]">{t('horse_10')}</h3>
                    <span className="font-sans text-xl font-bold text-[#8f4900]">€10</span>
                  </div>
                  <p className="text-xs text-[#554337] mt-2 font-light">
                    Includes hotel pickup, helmet, trail guide, and refreshing mint tea.
                  </p>
                </div>
                <a
                  className="mt-4 w-full py-2.5 text-center rounded-xl bg-[#f4ece8] hover:bg-[#eee7e3] text-[#1e1b19] text-xs font-semibold transition-colors border border-[#e9e1dd]"
                  href="https://wa.me/212619017615?text=Hello%2C%20I%20would%20like%20to%20book%20Horse%20Riding%202h%20at%2010%E2%82%AC"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('book_for_10')}
                </a>
              </div>

              {/* Option 2: 15 EUR */}
              <div className="p-5 rounded-2xl bg-white border border-[#9e421f] shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div>
                  <span className="text-xs font-semibold text-[#9e421f] uppercase tracking-wider block">Ride &amp; Feast</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <h3 className="font-serif text-base font-bold text-[#1e1b19]">{t('horse_15')}</h3>
                    <span className="font-sans text-xl font-bold text-[#9e421f]">€15</span>
                  </div>
                  <p className="text-xs text-[#554337] mt-2 font-light">
                    Includes ride, transfers, and a complete evening Moroccan tagine dinner.
                  </p>
                </div>
                <a
                  className="mt-4 w-full py-2.5 text-center rounded-xl bg-[#9e421f] hover:bg-[#742402] text-white text-xs font-semibold transition-colors shadow-sm"
                  href="https://wa.me/212619017615?text=Hello%2C%20I%20would%20like%20to%20book%20Horse%20Riding%20%2B%20Dinner%20at%2015%E2%82%AC"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('book_for_15')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
