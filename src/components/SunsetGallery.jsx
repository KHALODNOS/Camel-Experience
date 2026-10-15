import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Card3D from './Card3D';

const allGalleryPhotos = [
  // Camels & Sunset Experience
  { src: '/images/camel1.png', alt: 'Camel Trek Dunes Sunset 1', category: 'camels' },
  { src: '/images/camel2.png', alt: 'Camel Trek Dunes Sunset 2', category: 'camels' },
  { src: '/images/camel3.png', alt: 'Camel Trek Dunes Sunset 3', category: 'camels' },
  { src: '/images/camel4.png', alt: 'Camel Trek Dunes Sunset 4', category: 'camels' },
  { src: '/images/camel5.png', alt: 'Camel Trek Dunes Sunset 5', category: 'camels' },
  { src: '/images/WhatsApp Image 2026-09-30 at 16.14.09.jpeg', alt: 'Sunset camel trek through golden dunes', category: 'camels' },
  { src: '/images/WhatsApp Image 2026-09-30 at 16.14.10.jpeg', alt: 'Camel riding along Agadir coastal beach', category: 'camels' },
  { src: '/images/WhatsApp Image 2026-09-30 at 16.14.10 (1).jpeg', alt: 'Atlantic ocean sunset camel riders', category: 'camels' },
  { src: '/images/WhatsApp Image 2026-09-30 at 16.14.10 (2).jpeg', alt: 'Guest enjoying camel ride in eucalyptus grove', category: 'camels' },
  { src: '/images/WhatsApp Image 2026-09-30 at 16.14.10 (3).jpeg', alt: 'Gentle camels on the trail', category: 'camels' },
  { src: '/images/WhatsApp Image 2026-09-30 at 16.14.09 (1).jpeg', alt: 'Berber sunset silhouette', category: 'camels' },

  // Horse Riding
  { src: '/images/horse.png', alt: 'Arabian-Barb horse riding experience', category: 'horses' },
  { src: '/images/WhatsApp Image 2026-09-30 at 16.14.10 (4).jpeg', alt: 'Horse galloping on Agadir sunset beach', category: 'horses' },
  { src: '/images/WhatsApp Image 2026-09-30 at 16.14.09 (2).jpeg', alt: 'Equestrian horse riding through coastal sand dunes', category: 'horses' },

  // Quad & Buggy
  { src: '/images/quad.png', alt: 'Quad biking safari in coastal dunes 1', category: 'quads' },
  { src: '/images/quad2.png', alt: 'Quad biking safari in coastal dunes 2', category: 'quads' },
  { src: '/images/quad5.png', alt: 'Quad biking safari in coastal dunes 3', category: 'quads' },
  { src: '/images/quad6.png', alt: 'Quad bike track through eucalyptus woods', category: 'quads' },
  { src: '/images/quad7.png', alt: 'Quad bike adventure group photo', category: 'quads' },
  { src: '/images/tomobilat.png', alt: 'Dune buggy safari 1', category: 'quads' },
  { src: '/images/tomobilat2.png', alt: 'Dune buggy safari 2', category: 'quads' },

  // Ocean, Surf & Fishing
  { src: '/images/surf.png', alt: 'Surf lesson in Taghazout waves 1', category: 'ocean' },
  { src: '/images/surf2.png', alt: 'Surf lesson in Taghazout waves 2', category: 'ocean' },
  { src: '/images/surf3.png', alt: 'Surfer riding Atlantic waves 3', category: 'ocean' },
  { src: '/images/boat.png', alt: 'Boat cruise in Agadir ocean bay', category: 'ocean' },
  { src: '/images/fishing.png', alt: 'Deep sea fishing excursion 1', category: 'ocean' },
  { src: '/images/fishing2.png', alt: 'Deep sea fishing excursion 2', category: 'ocean' },
  { src: '/images/fishing3.png', alt: 'Deep sea fishing excursion 3', category: 'ocean' },

  // Day Tours & Moroccan Landscapes
  { src: '/images/paradise.png', alt: 'Paradise Valley natural turquoise rock pools', category: 'tours' },
  { src: '/images/tiznit.png', alt: 'Tiznit historic silver medina ramparts', category: 'tours' },
  { src: '/images/taroudantt.png', alt: 'Taroudant mud brick citadel and Tiout palm oasis', category: 'tours' },
  { src: '/images/essaouira.png', alt: 'Essaouira coastal harbor blue boats', category: 'tours' },
  { src: '/images/lgzira.png', alt: 'Legzira wild beach red sandstone arch', category: 'tours' },
  { src: '/images/agadir.png', alt: 'Agadir Kasbah Oufella historic hill view 1', category: 'tours' },
  { src: '/images/agadir2.png', alt: 'Agadir Kasbah Oufella hill view 2', category: 'tours' },
  { src: '/images/berber.png', alt: 'Berber mountain village countryside 1', category: 'tours' },
  { src: '/images/berber2.png', alt: 'Berber mountain village countryside 2', category: 'tours' },
  { src: '/images/berber3.png', alt: 'Berber mountain village countryside 3', category: 'tours' },
  { src: '/images/biking.png', alt: 'Bicycle & e-bike tour along Agadir beach promenade', category: 'tours' }
];

const categoryTabs = [
  { key: 'all', label: 'All Photos' },
  { key: 'camels', label: 'Camels & Sunset' },
  { key: 'horses', label: 'Horse Riding' },
  { key: 'quads', label: 'Quad & Buggy' },
  { key: 'ocean', label: 'Surf & Ocean' },
  { key: 'tours', label: 'Day Tours' }
];

export default function SunsetGallery() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeTab === 'all'
    ? allGalleryPhotos
    : allGalleryPhotos.filter((p) => p.category === activeTab);

  const displayed = showAll ? filtered : filtered.slice(0, 16);

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
            <p className="text-xs sm:text-sm text-[#554337] mt-1 font-light">
              Explore authentic moments captured by our guests across all Agadir adventures ({allGalleryPhotos.length} photos)
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 text-[#8f4900] font-semibold text-sm hover:underline shrink-0"
            href="https://www.instagram.com/agadir_camel_experience"
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            <span>{t('insta_follow')}</span>
          </a>
        </div>

        {/* Filter Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  setActiveTab(tab.key);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#8f4900] text-white shadow-sm'
                    : 'bg-white hover:bg-[#f4ece8] text-[#554337] border border-[#e9e1dd]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid with 3D Tilt */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {displayed.map((item, idx) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
              >
                <Card3D>
                  <div className="rounded-2xl overflow-hidden aspect-square shadow-sm bg-[#eee7e3] border border-[#e9e1dd] group cursor-pointer relative">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-white text-[11px] font-medium line-clamp-2 drop-shadow-sm">
                        {item.alt}
                      </span>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All / Collapse Button */}
        {filtered.length > 16 && (
          <div className="text-center pt-4">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#8f4900] hover:text-white text-[#1e1b19] border border-[#e9e1dd] text-xs font-semibold transition-all shadow-sm"
            >
              <span>{showAll ? 'Show Less' : `View All (${filtered.length} Photos)`}</span>
              <span className="material-symbols-outlined text-[18px]">
                {showAll ? 'expand_less' : 'expand_more'}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
