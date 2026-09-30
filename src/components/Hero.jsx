import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [adventure, setAdventure] = useState('Camel Sunset Trek (2h) — €10');
  const [date, setDate] = useState('2025-05-18');
  const [travelers, setTravelers] = useState('2');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    const message = `Hello! I would like to check availability for:
- Adventure: ${adventure}
- Date: ${date}
- Guests: ${travelers}`;
    const whatsappUrl = `https://wa.me/212619017615?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[85vh] lg:min-h-[920px] flex flex-col justify-end pt-20">
      {/* Parallax / Zoom Background Image */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeHxH2hKGfCluEWWudOlnViajg3WXqchPnpXG9MboGq3OBi8IDVCoiwxVdTWVsRPXTKRvMe6mfy_wESlQkSBTtBNw2PAc0X1cTz_QOHI6sdBlerXd0iD_rZ003ChrRzc-GqK-y5hoankQ2oidTeMAGw42kJ_dLn2KTFRjKc5HipTR5aFJO4PXhQEHK6QlXkGtiBMh63pT5tYZWGXGFPWStVKO77FWKqIvTNOmcCIQIvF2Ig8Zul5c')`
        }}
      ></motion.div>

      {/* Scrim Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#33302d] via-[#33302d]/50 to-transparent opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#b35e08]/25 via-transparent to-[#9e421f]/25 mix-blend-soft-light"></div>

      {/* Main Hero Banner Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-28 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl space-y-6"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#ffdcc5] shadow-sm border border-white/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#ffdcc5] text-[18px]">wb_twilight</span>
            <span className="font-semibold text-[11px] sm:text-xs tracking-widest uppercase">
              {t('hero_badge')}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] drop-shadow-md">
            {t('hero_title_1')} <br />
            <span className="italic font-normal text-[#ffb77d]">{t('hero_title_2')}</span>
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-[#faf2ee]/95 max-w-2xl leading-relaxed font-light">
            {t('hero_desc')}
          </p>

          {/* Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {[t('hero_chip_1'), t('hero_chip_2'), t('hero_chip_3'), t('hero_chip_4'), t('hero_chip_5')].map((chip, index) => (
              <React.Fragment key={chip}>
                {index > 0 && <span className="text-[#ffb77d] text-xs">•</span>}
                <motion.span
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                  className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium border border-white/10 cursor-pointer transition-colors"
                >
                  {chip}
                </motion.span>
              </React.Fragment>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#8f4900] hover:bg-[#b35e08] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_12px_32px_-4px_rgba(194,106,24,0.45)]"
              href="#quick-booking"
            >
              <span>{t('btn_book')}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all border border-white/20"
              href="#activities"
            >
              <span className="material-symbols-outlined text-[18px]">explore</span>
              <span>{t('btn_explore')}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Docked Booking Widget with 3D Float */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full -mb-12 sm:-mb-10" id="quick-booking">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-[0_20px_50px_-6px_rgba(142,70,0,0.22)] p-4 sm:p-6 border border-[#e9e1dd]"
        >
          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Experience Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#554337] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#8f4900] text-[16px]">location_on</span>
                {t('form_adventure')}
              </label>
              <div className="relative">
                <select
                  value={adventure}
                  onChange={(e) => setAdventure(e.target.value)}
                  className="w-full h-12 pl-3.5 pr-10 rounded-xl bg-[#faf2ee] font-semibold text-sm text-[#1e1b19] focus:outline-none focus:ring-2 focus:ring-[#8f4900] transition-all appearance-none cursor-pointer border border-[#e9e1dd]"
                >
                  <option value="Camel Sunset Trek (2h) — €10">Camel Sunset Trek (2h) — €10</option>
                  <option value="Camel + Moroccan Tagine (2h) — €15">Camel + Moroccan Tagine (2h) — €15</option>
                  <option value="Arabian Horse Riding (2h) — €10">Arabian Horse Riding (2h) — €10</option>
                  <option value="Horse Riding + Dinner (2h) — €15">Horse Riding + Dinner (2h) — €15</option>
                  <option value="Quad Dune Safari (2h) — €25">Quad Dune Safari (2h) — €25</option>
                  <option value="Paradise Valley Excursion — €15">Paradise Valley Excursion — €15</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-[#554337] text-[18px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#554337] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#8f4900] text-[16px]">calendar_today</span>
                {t('form_date')}
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-12 px-3.5 rounded-xl bg-[#faf2ee] font-semibold text-sm text-[#1e1b19] focus:outline-none focus:ring-2 focus:ring-[#8f4900] transition-all cursor-pointer border border-[#e9e1dd]"
              />
            </div>

            {/* Guests Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#554337] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#8f4900] text-[16px]">group</span>
                {t('form_travelers')}
              </label>
              <div className="relative">
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full h-12 pl-3.5 pr-10 rounded-xl bg-[#faf2ee] font-semibold text-sm text-[#1e1b19] focus:outline-none focus:ring-2 focus:ring-[#8f4900] transition-all appearance-none cursor-pointer border border-[#e9e1dd]"
                >
                  <option value="1">{t('person_1')}</option>
                  <option value="2">{t('person_2')}</option>
                  <option value="3">{t('person_3')}</option>
                  <option value="4">{t('person_4')}</option>
                  <option value="5+ Family">{t('person_5')}</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-[#554337] text-[18px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Check Availability Trigger */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full h-12 rounded-xl bg-[#8f4900] hover:bg-[#b35e08] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_8px_20px_-2px_rgba(194,106,24,0.3)] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              <span>{t('btn_check_availability')}</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
