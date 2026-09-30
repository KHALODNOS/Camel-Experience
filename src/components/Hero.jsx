import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [adventure, setAdventure] = useState('camel_10');
  const [date, setDate] = useState('2025-05-18');
  const [travelers, setTravelers] = useState('2');
  
  const [isAdvOpen, setIsAdvOpen] = useState(false);
  const [isTravOpen, setIsTravOpen] = useState(false);

  const advRef = useRef();
  const travRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (advRef.current && !advRef.current.contains(e.target)) setIsAdvOpen(false);
      if (travRef.current && !travRef.current.contains(e.target)) setIsTravOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const adventures = [
    { id: 'camel_10', title: t('opt_camel_10'), fakePrice: t('price_10_fake'), realPrice: t('price_10_real') },
    { id: 'camel_15', title: t('opt_camel_15'), fakePrice: t('price_15_fake'), realPrice: t('price_15_real') },
    { id: 'horse_10', title: t('opt_horse_10'), fakePrice: t('price_10_fake'), realPrice: t('price_10_real') },
    { id: 'horse_15', title: t('opt_horse_15'), fakePrice: t('price_15_fake'), realPrice: t('price_15_real') },
  ];

  const travelerOptions = [
    { id: '1', label: t('person_1') },
    { id: '2', label: t('person_2') },
    { id: '3', label: t('person_3') },
    { id: '4', label: t('person_4') },
    { id: '5+ Family', label: t('person_5') },
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    const selectedAdv = adventures.find(a => a.id === adventure);
    const message = `Hello! I would like to check availability for:
- Adventure: ${selectedAdv.title} (${selectedAdv.realPrice})
- Date: ${date}
- Guests: ${travelerOptions.find(t => t.id === travelers)?.label || travelers}`;
    const whatsappUrl = `https://wa.me/212619017615?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[920px] flex flex-col justify-end pt-20">
      
      {/* Background layers wrapper to contain scaled image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background Image using real guest photo */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/WhatsApp Image 2026-09-30 at 16.14.10 (1).jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
          }}
        ></motion.div>

        {/* Cinematic Scrim Overlays — 3-layer depth */}
        {/* Bottom-to-top dark gradient for text area */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-[#1a1410]/65 to-transparent"></div>
        {/* Top fade for sky softening */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>
        {/* Warm amber tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8f4900]/20 via-transparent to-[#c26a18]/15"></div>
      </div>

      {/* Main Hero Banner Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-28 pb-16 sm:pb-32">
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

      {/* Docked Booking Widget - Dark Glassmorphism */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full -mb-16 sm:-mb-12" id="quick-booking">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-[#1a1410]/80 backdrop-blur-xl rounded-3xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)] p-5 sm:p-7 border border-white/10 relative overflow-visible"
        >
          {/* Glowing amber accent behind the card */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8f4900] to-[#ffb77d] opacity-20 blur-2xl rounded-[3rem] -z-10 pointer-events-none"></div>

          {/* Flash Sale Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-[#c26a18] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg border border-red-400/30 flex items-center gap-1.5 whitespace-nowrap z-30">
            <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
            {t('special_discount')}
          </div>

          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
            
            {/* Experience Selection (Custom Dropdown) */}
            <div className="space-y-2 relative" ref={advRef}>
              <label className="text-[11px] font-semibold text-[#ffb77d] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                {t('form_adventure')}
              </label>
              <div 
                className="w-full h-14 px-4 rounded-xl bg-white/5 hover:bg-white/10 font-medium text-sm text-[#faf2ee] border border-white/10 transition-all cursor-pointer flex items-center justify-between"
                onClick={() => setIsAdvOpen(!isAdvOpen)}
              >
                <div className="truncate flex-1 flex flex-col justify-center">
                  <span className="block truncate">{adventures.find(a => a.id === adventure)?.title}</span>
                </div>
                <div className="flex flex-col items-end flex-shrink-0 mr-3">
                  <span className="text-[10px] text-white/40 line-through decoration-red-500/70 leading-none mb-0.5">{adventures.find(a => a.id === adventure)?.fakePrice}</span>
                  <span className="text-[13px] font-bold text-[#ffb77d] leading-none">{adventures.find(a => a.id === adventure)?.realPrice}</span>
                </div>
                <span className={`material-symbols-outlined text-white/50 text-[20px] transition-transform duration-300 ${isAdvOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </div>

              <AnimatePresence>
                {isAdvOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+8px)] left-0 w-full lg:w-[130%] bg-[#221a15]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                  >
                    {adventures.map((adv) => (
                      <div
                        key={adv.id}
                        onClick={() => { setAdventure(adv.id); setIsAdvOpen(false); }}
                        className={`px-4 py-3 cursor-pointer hover:bg-white/10 transition-colors flex items-center justify-between border-b border-white/5 last:border-0 ${adventure === adv.id ? 'bg-white/5' : ''}`}
                      >
                        <span className="text-sm text-[#faf2ee] font-medium mr-2">{adv.title}</span>
                        <div className="flex flex-col items-end flex-shrink-0">
                          <span className="text-[11px] text-white/40 line-through decoration-red-500/70">{adv.fakePrice}</span>
                          <span className="text-[13px] font-bold text-[#ffb77d]">{adv.realPrice}</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
              <label className="text-[11px] font-semibold text-[#ffb77d] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                {t('form_date')}
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full h-14 px-4 rounded-xl bg-white/5 hover:bg-white/10 font-medium text-sm text-[#faf2ee] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#8f4900] transition-all cursor-pointer [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Guests Selection (Custom Dropdown) */}
            <div className="space-y-2 relative" ref={travRef}>
              <label className="text-[11px] font-semibold text-[#ffb77d] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">group</span>
                {t('form_travelers')}
              </label>
              <div 
                className="w-full h-14 px-4 rounded-xl bg-white/5 hover:bg-white/10 font-medium text-sm text-[#faf2ee] border border-white/10 transition-all cursor-pointer flex items-center justify-between"
                onClick={() => setIsTravOpen(!isTravOpen)}
              >
                <div className="truncate flex-1 flex flex-col justify-center">
                  <span className="block truncate">{travelerOptions.find(t => t.id === travelers)?.label}</span>
                </div>
                <span className={`material-symbols-outlined text-white/50 text-[20px] transition-transform duration-300 ${isTravOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </div>

              <AnimatePresence>
                {isTravOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#221a15]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                  >
                    {travelerOptions.map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => { setTravelers(opt.id); setIsTravOpen(false); }}
                        className={`px-4 py-3 cursor-pointer hover:bg-white/10 transition-colors flex items-center border-b border-white/5 last:border-0 ${travelers === opt.id ? 'bg-white/5' : ''}`}
                      >
                        <span className="text-sm text-[#faf2ee] font-medium">{opt.label}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Check Availability Trigger */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full h-14 rounded-xl bg-gradient-to-r from-[#8f4900] to-[#c26a18] hover:from-[#a65500] hover:to-[#d97820] text-white font-bold text-[13px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(194,106,24,0.4)] cursor-pointer border border-white/10"
            >
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              <span>{t('btn_check_availability')}</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

