import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const STEPS = [
  {
    num: '01', icon: 'car_rental',
    title: 'Hotel Pickup', titleFr: 'Prise en Charge Hôtel',
    desc: 'Air-conditioned Mercedes van collects you directly from your hotel lobby in Agadir or Taghazout.',
    descFr: "Un van Mercedes climatisé vous récupère directement à la réception de votre hôtel.",
    time: '15–20 Mins Prior', timeFr: '15–20 Min avant',
    dot: '#f97316', color: '#b45309', bg: '#fff7ed', border: '#fed7aa',
  },
  {
    num: '02', icon: 'pets',
    title: 'Camel Station', titleFr: 'Station des Chameaux',
    desc: 'Meet our friendly gentle camels, safety briefing & comfortable saddle mounting.',
    descFr: "Rencontrez nos chameaux amicaux, participez au briefing et montez confortablement.",
    time: 'Ranch Arrival', timeFr: 'Arrivée au Ranch',
    dot: '#d97706', color: '#92400e', bg: '#fffbeb', border: '#fde68a',
  },
  {
    num: '03', icon: 'forest',
    title: 'Eucalyptus Forest', titleFr: "Forêt d'Eucalyptus",
    desc: 'Serene quiet ride through scented tall trees sheltering you from Atlantic winds.',
    descFr: "Balade calme à travers des arbres parfumés qui vous protègent des vents atlantiques.",
    time: 'First 30 Mins', timeFr: '30 Premières Min',
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
    descFr: "Les fairways verts contrastent avec les dunes dorées vers l'océan.",
    time: 'Hour 1.0', timeFr: 'Heure 1.0',
    dot: '#0ea5e9', color: '#0c4a6e', bg: '#f0f9ff', border: '#bae6fd',
  },
  {
    num: '06', icon: 'water',
    title: 'Souss Estuary', titleFr: 'Estuaire du Souss',
    desc: 'Observe migratory wild flamingos feeding calmly in the shallow coastal waters.',
    descFr: "Observez les flamants roses migrateurs dans les eaux côtières calmes.",
    time: 'Hour 1.3', timeFr: 'Heure 1.3',
    dot: '#ec4899', color: '#be185d', bg: '#fdf2f8', border: '#fbcfe8',
  },
  {
    num: '07', icon: 'wb_twilight',
    title: 'Golden Sunset', titleFr: 'Coucher de Soleil Doré',
    desc: 'Watch the blazing sun melt into the Atlantic while mounted high on your camel — pure magic.',
    descFr: "Regardez le soleil plonger dans l'Atlantique depuis le dos de votre chameau.",
    time: 'Peak Magic', timeFr: 'Moment Magique',
    dot: '#ea580c', color: '#c2410c', bg: '#fff7ed', border: '#fed7aa',
  },
  {
    num: '08', icon: 'photo_camera',
    title: 'Photos & Tea / Dinner', titleFr: 'Photos & Thé / Dîner',
    desc: 'Berber mint tea, silhouette photos, and optional hot chicken tagine under the stars.',
    descFr: "Thé à la menthe berbère, photos de silhouettes et tagine sous les étoiles.",
    time: 'Return & Feast', timeFr: 'Retour & Festin',
    dot: '#a855f7', color: '#6b21a8', bg: '#faf5ff', border: '#e9d5ff',
  },
];

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

        {/* Bottom info strip */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center flex-wrap">
          <div className="flex items-center gap-2 bg-[#fff7ed] border border-[#fed7aa] rounded-full px-5 py-2.5">
            <span className="material-symbols-outlined text-[#ea580c] text-[20px]">schedule</span>
            <span className="text-sm font-semibold text-[#92400e]">
              {lang === 'fr' ? 'Durée totale : ~2 heures' : 'Total Duration: ~2 Hours'}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] rounded-full px-5 py-2.5">
            <span className="material-symbols-outlined text-[#16a34a] text-[20px]">check_circle</span>
            <span className="text-sm font-semibold text-[#166534]">
              {lang === 'fr' ? 'Transfert aller-retour inclus' : 'Round-trip Transfer Included'}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-[#fdf2f8] border border-[#fbcfe8] rounded-full px-5 py-2.5">
            <span className="material-symbols-outlined text-[#db2777] text-[20px]">photo_camera</span>
            <span className="text-sm font-semibold text-[#be185d]">
              {lang === 'fr' ? 'Photos offertes' : 'Complimentary Photos'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
