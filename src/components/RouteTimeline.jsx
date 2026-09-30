import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function RouteTimeline() {
  const { t } = useLanguage();

  const steps = [
    {
      num: '01',
      icon: 'car_rental',
      title: 'Hotel Pickup',
      desc: 'Air-conditioned Mercedes van collects you directly from your hotel lobby.',
      time: '15–20 Mins Prior',
      badgeBg: 'bg-[#ffdcc5]',
      textColor: 'text-[#8f4900]',
    },
    {
      num: '02',
      icon: 'pets',
      title: 'Camel Station',
      desc: 'Meet our friendly gentle camels, safety briefing & comfortable saddle mounting.',
      time: 'Ranch Arrival',
      badgeBg: 'bg-[#ffdcc5]',
      textColor: 'text-[#8f4900]',
    },
    {
      num: '03',
      icon: 'forest',
      title: 'Eucalyptus Forest',
      desc: 'Serene quiet ride through scented tall trees sheltering you from Atlantic winds.',
      time: 'First 30 Mins',
      badgeBg: 'bg-[#ffdcc5]',
      textColor: 'text-[#8f4900]',
    },
    {
      num: '04',
      icon: 'fort',
      title: 'Royal Palace Views',
      desc: 'Glance at the majestic Moroccan architectural gates and manicured gardens.',
      time: 'Mid-Route',
      badgeBg: 'bg-[#ffdcc5]',
      textColor: 'text-[#8f4900]',
    },
    {
      num: '05',
      icon: 'sports_golf',
      title: 'Golf Dunes Path',
      desc: 'Lush green contrasts against coastal golden sands as the trail widens toward the ocean.',
      time: 'Hour 1.0',
      badgeBg: 'bg-[#ffdbcf]',
      textColor: 'text-[#9e421f]',
    },
    {
      num: '06',
      icon: 'water',
      title: 'Souss Estuary',
      desc: 'Observe migratory wild flamingos feeding calmly in the shallow coastal waters.',
      time: 'Hour 1.3',
      badgeBg: 'bg-[#ffdbcf]',
      textColor: 'text-[#9e421f]',
    },
    {
      num: '07',
      icon: 'wb_twilight',
      title: 'Golden Sunset',
      desc: 'Watch the blazing sun melt into the Atlantic while mounted high on your camel.',
      time: 'Peak Magic',
      badgeBg: 'bg-[#ffdbcf]',
      textColor: 'text-[#9e421f]',
    },
    {
      num: '08',
      icon: 'photo_camera',
      title: 'Photos & Tea / Dinner',
      desc: 'Berber tea celebration, memorable silhouette photos, and optional hot tagine.',
      time: 'Return & Feast',
      badgeBg: 'bg-[#ffdbcf]',
      textColor: 'text-[#9e421f]',
    },
  ];

  return (
    <section className="w-full bg-[#eee7e3]/50 py-20 border-y border-[#e9e1dd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold text-[#8f4900] uppercase tracking-widest block">
            {t('timeline_badge')}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1e1b19]">
            {t('timeline_title')}
          </h2>
          <p className="text-sm sm:text-base text-[#554337]">
            {t('timeline_desc')}
          </p>
        </div>

        {/* 8-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e9e1dd]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`w-8 h-8 rounded-full ${step.badgeBg} ${step.textColor} font-bold flex items-center justify-center text-xs`}>
                    {step.num}
                  </span>
                  <span className={`material-symbols-outlined ${step.textColor} text-[22px]`}>
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1e1b19]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#554337] leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <span className={`pt-4 text-xs font-semibold ${step.textColor}`}>
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
