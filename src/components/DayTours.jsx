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
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTUFvLz1oOVT6MAMTe7TZWE6VYXkwRtH81uX9v0lRwIDZbuHR9H4A7_qNctEx_uEcc8iwM4FGZs-MA3Qy57dF6ZVi44ez4NGYulewl2iw-DwOMUxxQamw9zf5Pqme83guEhj4d_Lqxg0y05wmsHlU-8g6Qevb9QpJAm96HQwHTtrcIa9b9QoxcRHmD4RZshMeRlxyrnogeoAH-dksRFGyuJ1gH6YlCJB5Nz_-IxBwYZClkikdWxLA',
      alt: 'Paradise valley turquoise rock pools'
    },
    {
      titleKey: 'tour_massa_title',
      price: '€25',
      timingKey: 'tour_massa_timing',
      descKey: 'tour_massa_desc',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0EdmbhB87aUbJJrHOlGNP0fDGwQ8-BnEzpBpe-2_9dtZ4JCSD1dnP1ejwpbsAfZFRFv3NMBxPUynkJFD6X82OS8809IG-0_yrVEbnPJiEZLiM56SKpXnjCDn2y5Gd5Q_wW6AD7DzmGIlrv0_hdqz8WKLSlzHl_HNDBiuSSKp1Zm3NgeyPMCJiI2sPPAkz0vMSlodwFK2CkUhAh4pEo4xP5nhYiM87-z8SxU4W1UjbZdWyTNmXKpw',
      alt: 'Tiznit red fortress walls'
    },
    {
      titleKey: 'tour_tiout_title',
      price: '€25',
      timingKey: 'tour_tiout_timing',
      descKey: 'tour_tiout_desc',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQDVP01rTKL3wWdjZry5Oa-nTZOaRt-QBvYCOiO2ECuMoKWHvs1sjrKglv4UNaFqdIqlaS-22JC2lla4vWN7EBF4dUcu0NVA1j070NCb7Fc1LitiZJOGUwjlN5ocEvafG6U54F5PCv9mjF7QiDSDh7AbKK_9maWvj-59Mwp8OVk29AnbMxTlOENtDuWxRs4Q4DL-cYCSuBDhH_9L0AKXtxjdQNRiL8L9IxunywQI-6DrUMjs6a-Zg',
      alt: 'Taroudant mud brick ramparts'
    },
    {
      titleKey: 'tour_essaouira_title',
      price: '€30',
      timingKey: 'tour_essaouira_timing',
      descKey: 'tour_essaouira_desc',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFURuSiaUFn3RZhz-D6b55s7MD6i8n8c5w5brrx2q1oACECCXbHG3m5599vXBK0FRGnYl0TYaS8Wfa5HuH_R-gvqLUVYAZpi8ZGIIwSjhrTAjALt1VrT4tWzE8qCm904r7hUVX_0pivAs1kiElGzJx887yQadfpFcd0mmJaEhLYZqD96adk7sqUqjX_k00WnShyR8UFoF2WRoBTvskBUxuKsRlhIxVQwwQR6StOFZJ8bexga_XyxA',
      alt: 'Essaouira harbor blue fishing boats'
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
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxITOd1XMhD2wDDWAIs8VWjOCNWn_v4HEBHs7kSUs04Ih86WW0TTVcrjTAMVf7-gMvTacUVz2K-moVQw7CQxeuSS9shUJdt99Yv9UTSnnzhIzqwu48x-xPVWmRA9MOSq96771_2rXAapXxcRr-nCWLo3sFz1NkRu5DoG-Zir5n6unJSBJmvMjGeznQR3cjjmfevb0Yk8Hjdg_gd6YUeBIwelN5odKpT5a36kFXovm4WclBJebNUyg',
      alt: 'Legzira red sandstone arch'
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
                        <span className="font-sans text-xl font-bold text-[#ffdcc5]">
                          {tour.price} <span className="text-xs font-normal text-white/80">{t('per_person_short')}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <p className="text-xs sm:text-sm text-[#554337] leading-relaxed font-light">
                        {t(tour.descKey)}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex items-center justify-between text-[#554337] text-xs font-medium border-t border-[#e9e1dd]/50 mt-2">
                    <span className="flex items-center gap-1.5 pt-3">
                      <span className="material-symbols-outlined text-[#8f4900] text-[18px]">schedule</span>
                      {t(tour.timingKey)}
                    </span>
                    <a
                      className="text-[#8f4900] font-bold hover:underline pt-3 group-hover:translate-x-1 transition-transform"
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
