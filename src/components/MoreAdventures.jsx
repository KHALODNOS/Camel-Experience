import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Card3D from './Card3D';

function ActivityImageSlider({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentSrc = images[currentIndex] || images[0];

  return (
    <div className="h-52 w-full overflow-hidden relative bg-[#eee7e3] select-none group/slider">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSrc}
          src={currentSrc}
          alt={alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </AnimatePresence>

      {/* Dark gradient overlay on bottom for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Pagination arrows (if more than 1 image) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevImage}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/85 hover:bg-white text-[#1e1b19] shadow-md flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover/slider:opacity-100 hover:scale-110 active:scale-95 z-20"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/85 hover:bg-white text-[#1e1b19] shadow-md flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover/slider:opacity-100 hover:scale-110 active:scale-95 z-20"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-10 pointer-events-auto">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-4 h-1.5 bg-white shadow-sm'
                    : 'w-1.5 h-1.5 bg-white/60 hover:bg-white/90'
                }`}
              />
            ))}
          </div>

          {/* Counter Badge */}
          <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-white/90 bg-black/45 backdrop-blur-sm px-1.5 py-0.5 rounded z-10 pointer-events-none border border-white/10">
            {currentIndex + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  );
}

export default function MoreAdventures() {
  const { t } = useLanguage();

  const activities = [
    {
      titleKey: 'act_quad_title',
      durationKey: 'act_quad_duration',
      price: '€25',
      descKey: 'act_quad_desc',
      images: [
        '/images/quad.png',
        '/images/quad2.png',
        '/images/quad5.png'
      ],
      alt: 'Quad biking safari on sand dunes',
      msg: 'Quad Biking Safari'
    },
    {
      titleKey: 'act_buggy_title',
      durationKey: 'act_buggy_duration',
      price: '€45',
      descKey: 'act_buggy_desc',
      images: [
        '/images/tomobilat.png',
        '/images/tomobilat2.png'
      ],
      alt: 'Buggy safari on dunes',
      msg: 'Buggy Safari'
    },
    {
      titleKey: 'act_surf_title',
      durationKey: 'act_surf_duration',
      price: '€20',
      descKey: 'act_surf_desc',
      images: [
        '/images/surf.png',
        '/images/surf2.png',
        '/images/surf3.png'
      ],
      alt: 'Surfer catching ocean wave in Taghazout',
      msg: 'Surf Lessons'
    },
    {
      titleKey: 'act_jetski_title',
      durationKey: 'act_jetski_duration',
      price: '€35',
      descKey: 'act_jetski_desc',
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD6KBQrVL3TNqoJcZKoh4ZTriVp8iqQ3X_pHT1nvW-LKYdQV7UV8aoppJjLBqYTdl_1g1mmJnioEZzz6x8pNT7qiXOw_xn2K_PC7i3bwaJKh0Fg6kfMWvc0-NvNKkZvKzNXm3w4ss-YHYGIDID7cPq4e8bPHs5tnErnXalaCNCKgnxDbe8i7KJ4YHgZaFVwcFvDfbFR1oL33LVSuRDvG_WLGJlmZkEjGJwVDA2rMm0GNXOWDneaVKU'
      ],
      alt: 'Jet ski in Agadir bay',
      msg: 'Jet Ski Marina Thrill'
    },
    {
      titleKey: 'act_boat_title',
      durationKey: 'act_boat_duration',
      price: '€30',
      descKey: 'act_boat_desc',
      images: [
        '/images/fishing.png',
        '/images/fishing2.png',
        '/images/fishing3.png'
      ],
      alt: 'Boat cruise in Agadir ocean',
      msg: 'Boat Cruise & Fishing'
    },
    {
      titleKey: 'act_city_title',
      durationKey: 'act_city_duration',
      price: '€15',
      descKey: 'act_city_desc',
      images: [
        '/images/agadir.png',
        '/images/agadir2.png'
      ],
      alt: 'Agadir Kasbah Oufella viewpoint',
      msg: 'Agadir City Tour'
    },
    {
      titleKey: 'act_berber_title',
      durationKey: 'act_berber_duration',
      price: '€20',
      descKey: 'act_berber_desc',
      images: [
        '/images/berber.png',
        '/images/berber2.png',
        '/images/berber3.png'
      ],
      alt: 'Berber mountain countryside village',
      msg: 'Berber Country Tour'
    },
    {
      titleKey: 'act_bike_title',
      durationKey: 'act_bike_duration',
      price: '€10',
      descKey: 'act_bike_desc',
      images: [
        '/images/biking.png'
      ],
      alt: 'Traveler riding e-bike on Agadir beach corniche',
      msg: 'Bicycle & E-Bike Rental'
    }
  ];

  return (
    <section className="w-full bg-[#faf2ee] py-20 sm:py-24 border-t border-[#e9e1dd]" id="activities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-[#8f4900] uppercase tracking-widest block">
              {t('adv_badge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e1b19]">
              {t('adv_title')}
            </h2>
            <p className="text-sm sm:text-base text-[#554337]">
              {t('adv_desc')}
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 text-[#8f4900] font-semibold text-sm hover:underline shrink-0"
            href="tel:0619017615"
          >
            <span>{t('custom_pkg')}</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>

        {/* Activity Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
            >
              <Card3D className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between border border-[#e9e1dd] group h-full cursor-pointer">
                  <div>
                    <ActivityImageSlider
                      images={act.images}
                      alt={act.alt}
                    />
                    <div className="p-5 space-y-2">
                      <h3 className="font-serif text-lg font-bold text-[#1e1b19] group-hover:text-[#8f4900] transition-colors">
                        {t(act.titleKey)}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#554337] leading-relaxed font-light">
                        {t(act.descKey)}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-end mt-auto">
                    <a
                      className="w-full text-center px-4 py-2.5 rounded-xl bg-[#f4ece8] hover:bg-[#8f4900] hover:text-white text-[#1e1b19] text-xs font-semibold transition-all border border-[#e9e1dd]"
                      href={`https://wa.me/212619017615?text=${encodeURIComponent(`Hello, I want to inquire about ${act.msg}`)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('discover')}
                    </a>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
