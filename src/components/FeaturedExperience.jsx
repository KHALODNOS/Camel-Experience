import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Card3D from './Card3D';

const galleryImages = [
  { src: '/images/camel1.png', alt: 'Camel Sunset 1', tag: 'Desert Glow' },
  { src: '/images/camel2.png', alt: 'Camel Sunset 2', tag: 'Golden Dunes' },
  { src: '/images/camel3.png', alt: 'Camel Sunset 3', tag: 'Caravan Trail' },
  { src: '/images/camel4.png', alt: 'Camel Sunset 4', tag: 'Agadir Horizon' },
  { src: '/images/camel5.png', alt: 'Camel Sunset 5', tag: 'Sunset Solitude' },
  { src: '/images/WhatsApp Image 2026-09-30 at 16.14.10 (2).jpeg', alt: 'Camel Experience 6', tag: 'Authentic Ride' },
  { src: '/images/WhatsApp Image 2026-09-30 at 16.14.09 (2).jpeg', alt: 'Camel Experience 7', tag: 'Beach & Dunes' },
  { src: '/images/WhatsApp Image 2026-09-30 at 16.14.09.jpeg', alt: 'Camel Experience 8', tag: 'Peaceful Views' },
  { src: '/images/WhatsApp Image 2026-09-30 at 16.14.10 (1).jpeg', alt: 'Camel Experience 9', tag: 'Unforgettable Moments' },
];

function ExperienceGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full mb-8 select-none">
      {/* Main Showcase Image Frame */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] sm:aspect-[16/11] bg-[#fdf8f4] group border border-[#e9e1dd]">
        <AnimatePresence mode="wait">
          <motion.img
            key={galleryImages[currentIndex].src}
            src={galleryImages[currentIndex].src}
            alt={galleryImages[currentIndex].alt}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Badge & Caption */}
        <div className="absolute bottom-3 sm:bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#301400] text-xs font-semibold tracking-wide shadow-md border border-white/60">
            {galleryImages[currentIndex].tag}
          </span>
          <span className="text-[#301400] text-xs font-mono bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/60 font-semibold shadow-md">
            {currentIndex + 1} / {galleryImages.length}
          </span>
        </div>

        {/* Prev Button */}
        <button
          type="button"
          onClick={prevImage}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-[#1e1b19] shadow-lg backdrop-blur-sm flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 focus:outline-none"
        >
          <span className="material-symbols-outlined text-[20px] sm:text-[24px]">chevron_left</span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextImage}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-[#1e1b19] shadow-lg backdrop-blur-sm flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 focus:outline-none"
        >
          <span className="material-symbols-outlined text-[20px] sm:text-[24px]">chevron_right</span>
        </button>
      </div>

      {/* Pagination Thumbnails Row */}
      <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-orange-200">
        {galleryImages.map((img, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to image ${idx + 1}`}
              className={`relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden transition-all duration-300 focus:outline-none ${
                isActive
                  ? 'ring-2 ring-[#8f4900] ring-offset-2 scale-105 shadow-md'
                  : 'opacity-55 hover:opacity-100'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* Pagination Dots indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-2">
        {galleryImages.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Select slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'w-6 h-1.5 bg-[#8f4900]'
                : 'w-1.5 h-1.5 bg-[#d8c3b7] hover:bg-[#8f4900]/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function FeaturedExperience() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative" id="experiences">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Storytelling Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6 lg:pr-8 lg:sticky lg:top-28"
        >
          {/* 2x2 Animated Photo Grid */}


          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdcc5] text-[#301400] text-xs uppercase tracking-widest font-semibold">
            <span className="material-symbols-outlined text-[16px] text-[#8f4900]">star</span>
            {t('iconic_badge')}
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1e1b19] tracking-tight leading-tight">
            {t('camel_sunset_title')}
          </h2>

          {/* Highlights List */}

          {/* Interactive Paginated Gallery */}
          <ExperienceGallery />





        </motion.div>

        {/* Pricing Cards Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex flex-col gap-5"
        >
          {/* Card 1: Standard */}
          <Card3D>
            <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_-2px_rgba(180,83,9,0.07)] hover:shadow-xl transition-all space-y-3 border border-[#e9e1dd]">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-[10px] font-bold text-[#554337] uppercase tracking-widest block">
                    {t('pricing_standard_sub')}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1e1b19] leading-tight mt-0.5">{t('pricing_standard_title')}</h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-sans text-xl font-bold text-[#8f4900]">{t('pricing_standard_price')}</span>
                  <span className="block text-[10px] text-[#554337]">{t('pricing_per_adult')}</span>
                </div>
              </div>

              <p className="text-[13px] text-[#554337] font-light leading-relaxed">
                {t('pricing_standard_desc')}
              </p>

              <ul className="space-y-1.5 text-[13px] text-[#1e1b19]">
                {[t('pricing_standard_f1'), t('pricing_standard_f2'), t('pricing_standard_f3')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#8f4900] text-[14px]">done</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                className="w-full py-2.5 rounded-xl bg-[#f4ece8] hover:bg-[#eee7e3] text-[#1e1b19] font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#e9e1dd] mt-2"
                href="https://wa.me/212619017615?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Standard%20Camel%20Ride"
                target="_blank"
                rel="noreferrer"
              >
                <span>{t('pricing_standard_btn')}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </Card3D>

          {/* Card 2: Sunset + BBQ (Most Popular) */}
          <Card3D>
            <div className="bg-white p-5 rounded-2xl shadow-[0_12px_32px_-4px_rgba(194,106,24,0.18)] hover:shadow-2xl relative overflow-hidden space-y-3 border-2 border-[#9e421f] transition-all">
              <div className="absolute top-0 right-0 bg-[#9e421f] text-white px-3 py-0.5 rounded-bl-lg text-[9px] uppercase tracking-widest font-bold shadow-sm">
                {t('pricing_popular_badge')}
              </div>

              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-[10px] font-bold text-[#9e421f] uppercase tracking-widest block">
                    {t('pricing_sunset_sub')}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1e1b19] leading-tight mt-0.5">{t('pricing_sunset_title')}</h3>
                </div>
                <div className="text-right shrink-0 mt-3">
                  <span className="font-sans text-xl font-bold text-[#9e421f]">{t('pricing_sunset_price')}</span>
                  <span className="block text-[10px] text-[#554337]">{t('pricing_per_adult')}</span>
                </div>
              </div>

              <p className="text-[13px] text-[#554337] font-light leading-relaxed">
                {t('pricing_sunset_desc')}
              </p>

              <ul className="space-y-1.5 text-[13px] text-[#1e1b19]">
                {[t('pricing_sunset_f1'), t('pricing_sunset_f2'), t('pricing_sunset_f3')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#9e421f] text-[14px]">done_all</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                className="w-full py-2.5 rounded-xl bg-[#9e421f] hover:bg-[#742402] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm mt-2"
                href="https://wa.me/212619017615?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Sunset%20Ride%20%2B%20BBQ%20Dinner"
                target="_blank"
                rel="noreferrer"
              >
                <span>{t('pricing_sunset_btn')}</span>
                <span className="material-symbols-outlined text-[16px]">dinner_dining</span>
              </a>
            </div>
          </Card3D>

          {/* Card 3: Combined Quad & Camel */}
          <Card3D>
            <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_-2px_rgba(180,83,9,0.07)] hover:shadow-xl transition-all space-y-3 border border-[#e9e1dd]">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-[10px] font-bold text-[#554337] uppercase tracking-widest block">
                    {t('pricing_combo_sub')}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1e1b19] leading-tight mt-0.5">{t('pricing_combo_title')}</h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-sans text-xl font-bold text-[#8f4900]">{t('pricing_combo_price')}</span>
                  <span className="block text-[10px] text-[#554337]">{t('pricing_per_adult')}</span>
                </div>
              </div>

              <p className="text-[13px] text-[#554337] font-light leading-relaxed">
                {t('pricing_combo_desc')}
              </p>

              <ul className="space-y-1.5 text-[13px] text-[#1e1b19]">
                {[t('pricing_combo_f1'), t('pricing_combo_f2'), t('pricing_combo_f3')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#8f4900] text-[14px]">done</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                className="w-full py-2.5 rounded-xl bg-[#f4ece8] hover:bg-[#eee7e3] text-[#1e1b19] font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#e9e1dd] mt-2"
                href="https://wa.me/212619017615?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Quad%20Bike%20%2B%20Camel%20Combo"
                target="_blank"
                rel="noreferrer"
              >
                <span>{t('pricing_combo_btn')}</span>
                <span className="material-symbols-outlined text-[16px]">two_wheeler</span>
              </a>
            </div>
          </Card3D>
        </motion.div>

      </div>

      {/* CTA + No Prepayment — independent, at the bottom of the section */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-16 pt-8 border-t border-[#e9e1dd]">
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

    </section>
  );
}
