import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const STEPS = [
  {
    num: '01', icon: 'car_rental',
    title: 'Hotel Pickup', titleFr: 'Prise en Charge HÃ´tel',
    desc: 'Air-conditioned Mercedes van collects you directly from your hotel lobby in Agadir or Taghazout.',
    descFr: "Un van Mercedes climatisÃ© vous rÃ©cupÃ¨re directement Ã  la rÃ©ception de votre hÃ´tel.",
    time: '15â€“20 Mins Prior', timeFr: '15â€“20 Min avant',
    dot: '#f97316', color: '#b45309', bg: '#fff7ed', border: '#fed7aa',
  },
  {
    num: '02', icon: 'pets',
    title: 'Camel Station', titleFr: 'Station des Chameaux',
    desc: 'Meet our friendly gentle camels, safety briefing & comfortable saddle mounting.',
    descFr: "Rencontrez nos chameaux amicaux, participez au briefing et montez confortablement.",
    time: 'Ranch Arrival', timeFr: 'ArrivÃ©e au Ranch',
    dot: '#d97706', color: '#92400e', bg: '#fffbeb', border: '#fde68a',
  },
  {
    num: '03', icon: 'forest',
    title: 'Eucalyptus Forest', titleFr: "ForÃªt d'Eucalyptus",
    desc: 'Serene quiet ride through scented tall trees sheltering you from Atlantic winds.',
    descFr: "Balade calme Ã  travers des arbres parfumÃ©s qui vous protÃ¨gent des vents atlantiques.",
    time: 'First 30 Mins', timeFr: '30 PremiÃ¨res Min',
    dot: '#22c55e', color: '#166534', bg: '#f0fdf4', border: '#bbf7d0',
  },
  {
    num: '04', icon: 'fort',
    title: 'Royal Palace Views', titleFr: 'Vue sur le Palais Royal',
    desc: 'Glance at the majestic Moroccan architectural gates and manicured palace gardens.',
    descFr: "Admirez les majestueuses portes marocaines et les jardins soigneusement entretenus.",
    time: 'Mid-Route', timeFr: 'Mi-Parcours',
    dot: '#f59e0b', color: '#b45309', bg: '#fff7ed', border: '#fed7aa',
  },
  {
    num: '05', icon: 'sports_golf',
    title: 'Golf Dunes Path', titleFr: 'Chemin des Dunes Golf',
    desc: 'Lush green contrasts against coastal golden sands as the trail widens toward the ocean.',
    descFr: "Les fairways verts contrastent avec les dunes dorÃ©es vers l'ocÃ©an.",
    time: 'Hour 1.0', timeFr: 'Heure 1.0',
    dot: '#0ea5e9', color: '#0c4a6e', bg: '#f0f9ff', border: '#bae6fd',
  },
  {
    num: '06', icon: 'water',
    title: 'Souss Estuary', titleFr: 'Estuaire du Souss',
    desc: 'Observe migratory wild flamingos feeding calmly in the shallow coastal waters.',
    descFr: "Observez les flamants roses migrateurs dans les eaux cÃ´tiÃ¨res calmes.",
    time: 'Hour 1.3', timeFr: 'Heure 1.3',
    dot: '#ec4899', color: '#be185d', bg: '#fdf2f8', border: '#fbcfe8',
  },
  {
    num: '07', icon: 'wb_twilight',
    title: 'Golden Sunset', titleFr: 'Coucher de Soleil DorÃ©',
    desc: 'Watch the blazing sun melt into the Atlantic while mounted high on your camel â€” pure magic.',
    descFr: "Regardez le soleil plonger dans l'Atlantique depuis le dos de votre chameau.",
    time: 'Peak Magic', timeFr: 'Moment Magique',
    dot: '#ea580c', color: '#c2410c', bg: '#fff7ed', border: '#fed7aa',
  },
  {
    num: '08', icon: 'photo_camera',
    title: 'Photos & Tea / Dinner', titleFr: 'Photos & ThÃ© / DÃ®ner',
    desc: 'Berber mint tea, silhouette photos, and optional hot chicken tagine under the stars.',
    descFr: "ThÃ© Ã  la menthe berbÃ¨re, photos de silhouettes et tagine sous les Ã©toiles.",
    time: 'Return & Feast', timeFr: 'Retour & Festin',
    dot: '#a855f7', color: '#6b21a8', bg: '#faf5ff', border: '#e9d5ff',
  },
];

// â”€â”€â”€ Info Tabs Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const INFO_TABS = [
  {
    id: 'route',
    icon: 'route',
    titleKey: 'route_card_title',
    descKey: 'route_card_desc',
    bg: '#fff7ed', border: '#fed7aa', iconBg: 'linear-gradient(135deg,#f97316,#b45309)', textColor: '#92400e',
    items: null,
    tags: null,
  },
  {
    id: 'duration',
    icon: 'schedule',
    titleKey: 'duration_card_title',
    descKey: 'duration_card_desc',
    bg: '#f0f9ff', border: '#bae6fd', iconBg: 'linear-gradient(135deg,#0ea5e9,#0c4a6e)', textColor: '#0c4a6e',
    items: null,
    tags: null,
  },
  {
    id: 'inclusions',
    icon: 'check_circle',
    titleKey: 'inclusions_card_title',
    descKey: 'inclusions_card_desc',
    bg: '#f0fdf4', border: '#bbf7d0', iconBg: 'linear-gradient(135deg,#22c55e,#166534)', textColor: '#166534',
    itemColor: '#166534', checkColor: '#22c55e',
    items: ['inclusions_item_1','inclusions_item_2','inclusions_item_3','inclusions_item_4'],
    tags: null,
  },
  {
    id: 'safety',
    icon: 'shield',
    titleKey: 'safety_card_title',
    descKey: 'safety_card_desc',
    bg: '#faf5ff', border: '#e9d5ff', iconBg: 'linear-gradient(135deg,#a855f7,#6b21a8)', textColor: '#6b21a8',
    tagBg: '#e9d5ff', tagColor: '#6b21a8',
    items: null,
    tags: ['safety_tag_1','safety_tag_2','safety_tag_3','safety_tag_4'],
  },
  {
    id: 'wear',
    icon: 'checkroom',
    titleKey: 'what_to_wear_title',
    descKey: 'what_to_wear_desc',
    bg: '#fff7ed', border: '#fed7aa', iconBg: 'linear-gradient(135deg,#f97316,#c2410c)', textColor: '#92400e',
    itemColor: '#92400e', checkColor: '#f97316',
    items: ['what_to_wear_item_1','what_to_wear_item_2','what_to_wear_item_3','what_to_wear_item_4'],
    tags: null,
  },
  {
    id: 'family',
    icon: 'family_restroom',
    titleKey: 'family_suit_title',
    descKey: 'family_suit_desc',
    bg: '#fdf2f8', border: '#fbcfe8', iconBg: 'linear-gradient(135deg,#ec4899,#be185d)', textColor: '#be185d',
    itemColor: '#be185d', checkColor: '#ec4899',
    items: ['family_suit_item_1','family_suit_item_2','family_suit_item_3','family_suit_item_4'],
    tags: null,
  },
];

function InfoTabs({ t }) {
  const [active, setActive] = useState(0);
  const [anim, setAnim] = useState(true);

  const switchTab = (idx) => {
    if (idx === active) return;
    setAnim(false);
    setTimeout(() => {
      setActive(idx);
      setAnim(true);
    }, 160);
  };

  const tab = INFO_TABS[active];

  return (
    <div className="mt-12">
      {/* Tab bar */}
      <div
        className="flex items-center justify-center gap-2 flex-wrap mb-6"
        role="tablist"
      >
        {INFO_TABS.map((tb, idx) => {
          const isActive = idx === active;
          return (
            <button
              key={tb.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => switchTab(idx)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-200 focus:outline-none"
              style={{
                background: isActive ? tb.iconBg : '#f5f0ee',
                color: isActive ? '#fff' : '#7c6056',
                border: isActive ? `1.5px solid transparent` : `1.5px solid #e9e1dd`,
                boxShadow: isActive ? '0 4px 14px rgba(0,0,0,0.15)' : 'none',
                transform: isActive ? 'scale(1.06)' : 'scale(1)',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>{tb.icon}</span>
              <span className="hidden sm:inline">{t(tb.titleKey)}</span>
            </button>
          );
        })}
      </div>

      {/* Animated Panel */}
      <div
        style={{
          opacity: anim ? 1 : 0,
          transform: anim ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
        }}
      >
        <div
          className="rounded-2xl p-6 shadow-md"
          style={{ background: tab.bg, border: `1.5px solid ${tab.border}` }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: tab.iconBg }}
            >
              <span className="material-symbols-outlined text-white text-[22px]">{tab.icon}</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#1e1b19]">{t(tab.titleKey)}</h4>
          </div>
          <p className="text-sm text-[#554337] leading-relaxed">{t(tab.descKey)}</p>

          {/* Bullet items */}
          {tab.items && (
            <ul className="mt-4 space-y-2">
              {tab.items.map((key) => (
                <li key={key} className="flex items-center gap-2 text-sm font-medium" style={{ color: tab.itemColor }}>
                  <span className="material-symbols-outlined text-[16px]" style={{ color: tab.checkColor }}>check_small</span>
                  {t(key)}
                </li>
              ))}
            </ul>
          )}

          {/* Tag pills */}
          {tab.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tab.tags.map((key) => (
                <span
                  key={key}
                  className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{ background: tab.tagBg, color: tab.tagColor }}
                >
                  {t(key)}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dot indicators + prev/next */}
      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          onClick={() => switchTab((active - 1 + INFO_TABS.length) % INFO_TABS.length)}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: '#f5f0ee', border: '1.5px solid #e9e1dd', color: '#7c6056' }}
          aria-label="Previous tab"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span>
        </button>

        <div className="flex items-center gap-1.5">
          {INFO_TABS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => switchTab(idx)}
              aria-label={`Tab ${idx + 1}`}
              style={{
                width: idx === active ? '22px' : '8px',
                height: '8px',
                borderRadius: '999px',
                background: idx === active ? INFO_TABS[active].iconBg.replace('linear-gradient(135deg,', '').split(',')[0] : '#d6cdc9',
                transition: 'all 0.25s ease',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => switchTab((active + 1) % INFO_TABS.length)}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: '#f5f0ee', border: '1.5px solid #e9e1dd', color: '#7c6056' }}
          aria-label="Next tab"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
        </button>
      </div>
    </div>
  );
}
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function RouteTimeline() {
  const { t, lang } = useLanguage();
  const containerRef = useRef(null);
  const mobileRef = useRef(null);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observe = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const i = parseInt(entry.target.dataset.index, 10);
          setVisible((prev) => prev.includes(i) ? prev : [...prev, i]);
        }
      });
    };
    const observer = new IntersectionObserver(observe, { threshold: 0.1 });
    const desktopEls = containerRef.current?.querySelectorAll('[data-index]');
    const mobileEls = mobileRef.current?.querySelectorAll('[data-index]');
    desktopEls?.forEach((el) => observer.observe(el));
    mobileEls?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="route"
      className="w-full py-20 sm:py-28 border-y border-[#e9e1dd]"
      style={{ background: 'linear-gradient(180deg, #eee7e3 0%, #ffffff 40%, #eee7e3 100%)' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#fff1e6] text-[#b45309] text-xs font-bold uppercase tracking-widest border border-[#fcd9a4]">
            {t('timeline_badge')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e1b19]">
            {t('timeline_title')}
          </h2>
          <p className="text-sm sm:text-base text-[#554337] max-w-xl mx-auto leading-relaxed">
            {t('timeline_desc')}
          </p>
        </div>

        {/* DESKTOP: Alternating Timeline */}
        <div ref={containerRef} className="hidden md:block relative">
          {/* Central spine */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 rounded-full"
            style={{ background: 'linear-gradient(to bottom, transparent, #f97316 8%, #ea580c 50%, #f97316 92%, transparent)' }}
          />

          <div className="flex flex-col gap-10">
            {STEPS.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              const isVis = visible.includes(idx);
              const title = lang === 'fr' ? step.titleFr : step.title;
              const desc = lang === 'fr' ? step.descFr : step.desc;
              const time = lang === 'fr' ? step.timeFr : step.time;

              return (
                <div
                  key={idx}
                  data-index={idx}
                  className={`relative flex items-center w-full ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{
                    opacity: isVis ? 1 : 0,
                    transform: isVis ? 'translateY(0)' : 'translateY(36px)',
                    transition: `opacity 0.55s ease ${idx * 0.09}s, transform 0.55s ease ${idx * 0.09}s`,
                  }}
                >
                  {/* Card */}
                  <div className={`w-[calc(50%-2.5rem)] ${isLeft ? 'pr-6' : 'pl-6'}`}>
                    <div
                      className="relative rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                      style={{ background: step.bg, border: `1.5px solid ${step.border}` }}
                    >
                      {/* Time badge */}
                      <span
                        className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3"
                        style={{ background: step.border, color: step.color }}
                      >
                        {time}
                      </span>

                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                        <span
                          className="material-symbols-outlined text-[22px] shrink-0"
                          style={{ color: step.dot }}
                        >
                          {step.icon}
                        </span>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-[#1e1b19] leading-tight">
                          {title}
                        </h3>
                      </div>

                      <p className={`text-xs sm:text-sm text-[#554337] leading-relaxed ${isLeft ? 'text-left' : 'text-right'}`}>
                        {desc}
                      </p>

                      {/* Connector arrow */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rotate-45 ${isLeft ? '-right-[9px]' : '-left-[9px]'}`}
                        style={{ background: step.bg, border: `1.5px solid ${step.border}`, clipPath: isLeft ? 'polygon(0 0,100% 0,100% 100%)' : 'polygon(0 0,100% 0,0 100%)' }}
                      />
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 flex items-center justify-center w-20 shrink-0">
                    <div
                      className="w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white"
                      style={{ background: `linear-gradient(135deg, ${step.dot}, ${step.color})` }}
                    >
                      <span className="text-white font-bold text-[10px] leading-none">{step.num}</span>
                      <span className="material-symbols-outlined text-white text-[16px] leading-none mt-0.5">
                        {step.icon}
                      </span>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE: Single column timeline */}
        <div ref={mobileRef} className="md:hidden relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 rounded-full"
            style={{ background: 'linear-gradient(to bottom, transparent, #f97316 8%, #ea580c 92%, transparent)' }}
          />
          <div className="flex flex-col gap-7">
            {STEPS.map((step, idx) => {
              const isVis = visible.includes(idx);
              const title = lang === 'fr' ? step.titleFr : step.title;
              const desc = lang === 'fr' ? step.descFr : step.desc;
              const time = lang === 'fr' ? step.timeFr : step.time;
              return (
                <div
                  key={idx}
                  data-index={idx}
                  className="flex items-start gap-4"
                  style={{
                    opacity: isVis ? 1 : 0,
                    transform: isVis ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.5s ease ${idx * 0.08}s, transform 0.5s ease ${idx * 0.08}s`,
                  }}
                >
                  <div className="relative z-10 shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex flex-col items-center justify-center shadow-md border-2 border-white"
                      style={{ background: `linear-gradient(135deg, ${step.dot}, ${step.color})` }}
                    >
                      <span className="text-white font-bold text-[9px] leading-none">{step.num}</span>
                      <span className="material-symbols-outlined text-white text-[15px] leading-none mt-0.5">
                        {step.icon}
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex-1 rounded-2xl p-4 shadow-sm"
                    style={{ background: step.bg, border: `1.5px solid ${step.border}` }}
                  >
                    <span
                      className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest mb-2"
                      style={{ background: step.border, color: step.color }}
                    >
                      {time}
                    </span>
                    <h3 className="font-serif text-sm font-bold text-[#1e1b19] mb-1">{title}</h3>
                    <p className="text-xs text-[#554337] leading-relaxed">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom quick-info pills */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center flex-wrap">
          <div className="flex items-center gap-2 bg-[#fff7ed] border border-[#fed7aa] rounded-full px-5 py-2.5">
            <span className="material-symbols-outlined text-[#ea580c] text-[20px]">schedule</span>
            <span className="text-sm font-semibold text-[#92400e]">
              {t('pill_duration')}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] rounded-full px-5 py-2.5">
            <span className="material-symbols-outlined text-[#16a34a] text-[20px]">check_circle</span>
            <span className="text-sm font-semibold text-[#166534]">
              {t('pill_transfer')}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-[#fdf2f8] border border-[#fbcfe8] rounded-full px-5 py-2.5">
            <span className="material-symbols-outlined text-[#db2777] text-[20px]">photo_camera</span>
            <span className="text-sm font-semibold text-[#be185d]">
              {t('pill_photos')}
            </span>
          </div>
        </div>

        {/* Detailed Info Cards â€” Tabbed UI */}
        <InfoTabs t={t} />

      </div>
    </section>
  );
}
