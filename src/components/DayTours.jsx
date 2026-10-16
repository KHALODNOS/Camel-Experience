import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Card3D from './Card3D';

export default function DayTours() {
  const { t } = useLanguage();

  const tours = [
    {
      titleKey: 'tour_paradise_title',
      price: '€15',
      timingKey: 'tour_paradise_timing',
      descKey: 'tour_paradise_desc',
      img: '/images/paradise.png',
      alt: 'Paradise valley turquoise rock pools'
    },
    {
      titleKey: 'tour_massa_title',
      price: '€25',
      timingKey: 'tour_massa_timing',
      descKey: 'tour_massa_desc',
      img: '/images/tiznit.png',
      alt: 'Massa and Tiznit red fortress walls'
    },
    {
      titleKey: 'tour_tiout_title',
      price: '€25',
      timingKey: 'tour_tiout_timing',
      descKey: 'tour_tiout_desc',
      img: '/images/taroudantt.png',
      alt: 'Taroudant mud brick ramparts and Tiout oasis'
    },
    {
      titleKey: 'tour_essaouira_title',
      price: '€30',
      timingKey: 'tour_essaouira_timing',
      descKey: 'tour_essaouira_desc',
      img: '/images/essaouira.png',
      alt: 'Essaouira harbor and historic medina'
    },
    {
      titleKey: 'tour_marrakech_title',
      price: '€35',
      timingKey: 'tour_marrakech_timing',
      descKey: 'tour_marrakech_desc',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEdmxOWc4-9kGm0FWe6hCWGwpQNwVv6hIx-7DIaa44vKLJRg8OjX0-XhVpo1iWfYbyIwOTtbyy5OC_Y7BXPmvs5n06iW-lM4Ny3YB7FTUh5vZU5GL2A0zOncfJI8EiIHEmrhwp88izOUdjGhSWGgf2FMgz4iyEEIpNmSV2H4JobhSAk5zMQdIbsNZQ5--7Qr8EpC2FZs13ZfD_SlQxl424W8VL6gu1YxAZmCI2Z7C01-R3JGfAKVU',
      alt: 'Marrakech Jemaa el Fnaa square'
    },
    {
      titleKey: 'tour_legzira_title',
      price: '€35',
      timingKey: 'tour_legzira_timing',
      descKey: 'tour_legzira_desc',
      img: '/images/lgzira.png',
      alt: 'Legzira red sandstone ocean arch'
    }
  ];

  return (
    <section className="w-full py-20 sm:py-24 bg-[#fff8f5]" id="tours">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#9e421f] uppercase tracking-widest block">
            {t('tours_badge')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e1b19]">
            {t('tours_title')}
          </h2>
          <p className="text-sm sm:text-base text-[#554337]">
            {t('tours_desc')}
          </p>
        </div>

        {/* Excursion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
            >
              <Card3D className="h-full">
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-[#e9e1dd] flex flex-col justify-between h-full cursor-pointer">
                  <div>
                    <div className="h-60 w-full overflow-hidden relative bg-[#eee7e3]">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src={tour.img}
                        alt={tour.alt}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#33302d]/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                        <h3 className="font-serif text-xl font-bold">{t(tour.titleKey)}</h3>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <p className="text-xs sm:text-sm text-[#554337] leading-relaxed font-light">
                        {t(tour.descKey)}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex items-center justify-end text-[#554337] text-xs font-medium border-t border-[#e9e1dd]/50 mt-2">
                    <a
                      className="w-full text-center py-2.5 rounded-xl bg-[#f4ece8] hover:bg-[#8f4900] hover:text-white text-[#1e1b19] font-bold text-xs uppercase tracking-wider transition-all border border-[#e9e1dd] mt-3"
                      href={`https://wa.me/212619017615?text=${encodeURIComponent(`Hello, I want to book ${t(tour.titleKey)}`)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('reserve_tour')}
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
