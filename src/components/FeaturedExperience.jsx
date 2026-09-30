import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Card3D from './Card3D';

export default function FeaturedExperience() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12" id="experiences">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Storytelling Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdcc5] text-[#301400] text-xs uppercase tracking-widest font-semibold">
            <span className="material-symbols-outlined text-[16px] text-[#8f4900]">star</span>
            {t('iconic_badge')}
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1e1b19] tracking-tight leading-tight">
            {t('camel_sunset_title')}
          </h2>

          <p className="text-base sm:text-lg text-[#554337] leading-relaxed font-light">
            {t('camel_sunset_desc')}
          </p>

          {/* Highlights List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {[t('feat_1'), t('feat_2'), t('feat_3'), t('feat_4')].map((highlight, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f4ece8] border border-[#e9e1dd] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#8f4900] text-[20px]">check_circle</span>
                <span className="text-xs sm:text-sm font-semibold text-[#1e1b19]">{highlight}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#8f4900] hover:bg-[#b35e08] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[0_8px_24px_-2px_rgba(194,106,24,0.35)]"
              href="#quick-booking"
            >
              <span>{t('discover_exp')}</span>
              <span className="material-symbols-outlined text-[18px]">keyboard_double_arrow_right</span>
            </motion.a>
            <span className="text-[#554337] text-xs sm:text-sm flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#8f4900] text-[18px]">verified</span>
              {t('no_prepayment')}
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
        >
          {/* Card 1: Standard 10 EUR */}
          <Card3D>
            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-2px_rgba(180,83,9,0.07)] hover:shadow-xl transition-all space-y-4 border border-[#e9e1dd]">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-semibold text-[#554337] uppercase tracking-wider block">
                    {t('package_10_sub')}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1e1b19]">{t('package_10_title')}</h3>
                </div>
                <div className="text-right">
                  <span className="font-sans text-2xl font-bold text-[#8f4900]">€10</span>
                  <span className="block text-xs text-[#554337]">{t('per_person')}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#554337] font-light">
                {t('package_10_desc')}
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-[#1e1b19]">
                {[t('feat_pkg10_b1'), t('feat_pkg10_b2'), t('feat_pkg10_b3')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#8f4900] text-[16px]">done</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                className="w-full py-2.5 rounded-xl bg-[#f4ece8] hover:bg-[#eee7e3] text-[#1e1b19] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors border border-[#e9e1dd]"
                href="https://wa.me/212619017615?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Camel%20Sunset%202h%20at%2010%E2%82%AC"
                target="_blank"
                rel="noreferrer"
              >
                <span>{t('select_10')}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </Card3D>

          {/* Card 2: 15 EUR (Most Popular) */}
          <Card3D>
            <div className="bg-white p-6 rounded-2xl shadow-[0_12px_32px_-4px_rgba(194,106,24,0.18)] hover:shadow-2xl relative overflow-hidden space-y-4 border-2 border-[#9e421f] transition-all">
              {/* Most Popular Badge */}
              <div className="absolute top-0 right-0 bg-[#9e421f] text-white px-4 py-1 rounded-bl-xl text-[10px] sm:text-xs uppercase tracking-wider font-bold shadow-md">
                {t('most_popular')}
              </div>

              <div>
                <span className="text-xs font-semibold text-[#9e421f] uppercase tracking-wider block">
                  {t('package_15_sub')}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1e1b19]">{t('package_15_title')}</h3>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-sans text-2xl font-bold text-[#9e421f]">€15</span>
                <span className="text-xs text-[#554337]">{t('per_person_all')}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#554337] font-light">
                {t('package_15_desc')}
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-[#1e1b19]">
                {[t('feat_pkg15_b1'), t('feat_pkg15_b2'), t('feat_pkg15_b3')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#9e421f] text-[16px]">done_all</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                className="w-full py-2.5 rounded-xl bg-[#9e421f] hover:bg-[#742402] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                href="https://wa.me/212619017615?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Camel%20Sunset%20%2B%20Dinner%20at%2015%E2%82%AC"
                target="_blank"
                rel="noreferrer"
              >
                <span>{t('select_15')}</span>
                <span className="material-symbols-outlined text-[16px]">dinner_dining</span>
              </a>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </section>
  );
}
