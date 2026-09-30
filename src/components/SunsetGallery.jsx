import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Card3D from './Card3D';

const realPhotos = [
  {
    src: '/images/WhatsApp Image 2026-09-30 at 16.14.09.jpeg',
    alt: 'Traditional Moroccan camel caravan guided through golden Souss dunes at sunset'
  },
  {
    src: '/images/WhatsApp Image 2026-09-30 at 16.14.10.jpeg',
    alt: 'Riders enjoying camel ride on Agadir coastal sand beach'
  },
  {
    src: '/images/WhatsApp Image 2026-09-30 at 16.14.10 (1).jpeg',
    alt: 'Sunset view over Atlantic ocean shoreline with camel riders'
  },
  {
    src: '/images/WhatsApp Image 2026-09-30 at 16.14.10 (2).jpeg',
    alt: 'Happy guest on camel trek near eucalyptus forest'
  },
  {
    src: '/images/WhatsApp Image 2026-09-30 at 16.14.10 (3).jpeg',
    alt: 'Close-up of gentle camels on dune path'
  },
  {
    src: '/images/WhatsApp Image 2026-09-30 at 16.14.10 (4).jpeg',
    alt: 'Group camel tour along Agadir estuary river'
  },
  {
    src: '/images/WhatsApp Image 2026-09-30 at 16.14.09 (1).jpeg',
    alt: 'Beautiful Berber sunset silhouette'
  },
  {
    src: '/images/WhatsApp Image 2026-09-30 at 16.14.09 (2).jpeg',
    alt: 'Equestrian horse ride on golden beach'
  }
];

export default function SunsetGallery() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#faf2ee]/70 py-20 border-t border-[#e9e1dd]" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#8f4900] uppercase tracking-widest block">
              {t('gallery_badge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e1b19]">
              {t('gallery_title')}
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-2 text-[#8f4900] font-semibold text-sm hover:underline"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            <span>{t('insta_follow')}</span>
          </a>
        </div>

        {/* Gallery Grid with 3D Tilt */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {realPhotos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
            >
              <Card3D>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-sm bg-[#eee7e3] border border-[#e9e1dd] group cursor-pointer">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
