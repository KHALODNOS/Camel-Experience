import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Card3D from './Card3D';

export default function WhyUs() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: 'nature_people',
      title: t('pillar_1_title'),
      desc: t('pillar_1_desc'),
      tag: t('pillar_1_tag'),
      bgColor: 'bg-[#ffdcc5]',
      textColor: 'text-[#8f4900]',
      hoverBg: 'group-hover:bg-[#8f4900]',
      hoverText: 'group-hover:text-white',
    },
    {
      icon: 'airport_shuttle',
      title: t('pillar_2_title'),
      desc: t('pillar_2_desc'),
      tag: t('pillar_2_tag'),
      bgColor: 'bg-[#ffdbcf]',
      textColor: 'text-[#9e421f]',
      hoverBg: 'group-hover:bg-[#9e421f]',
      hoverText: 'group-hover:text-white',
    },
    {
      icon: 'favorite',
      title: t('pillar_3_title'),
      desc: t('pillar_3_desc'),
      tag: t('pillar_3_tag'),
      bgColor: 'bg-[#ffdcc3]',
      textColor: 'text-[#8d4b00]',
      hoverBg: 'group-hover:bg-[#8d4b00]',
      hoverText: 'group-hover:text-white',
    },
    {
      icon: 'wb_twilight',
      title: t('pillar_4_title'),
      desc: t('pillar_4_desc'),
      tag: t('pillar_4_tag'),
      bgColor: 'bg-[#ffb782]/40',
      textColor: 'text-[#8f4900]',
      hoverBg: 'group-hover:bg-[#8f4900]',
      hoverText: 'group-hover:text-white',
    },
  ];

  return (
    <section className="w-full bg-[#faf2ee] pt-28 pb-20 mt-8 sm:mt-12 border-b border-[#e9e1dd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-xs font-bold text-[#8f4900] uppercase tracking-widest block">
            {t('why_badge')}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1e1b19] tracking-tight">
            {t('why_title')}
          </h2>
          <p className="text-sm sm:text-base text-[#554337] leading-relaxed">
            {t('why_desc')}
          </p>
        </motion.div>

        {/* 4 Pillars Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card3D className="h-full">
                <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between border border-[#e9e1dd] h-full cursor-pointer">
                  <div className="space-y-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${item.bgColor} ${item.textColor} ${item.hoverBg} ${item.hoverText} flex items-center justify-center transition-all duration-300 shadow-sm group-hover:rotate-6 group-hover:scale-110`}
                    >
                      <span className="material-symbols-outlined text-[30px]">{item.icon}</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#1e1b19] group-hover:text-[#8f4900] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#554337] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className={`pt-6 flex items-center gap-2 ${item.textColor} text-xs font-semibold uppercase tracking-wider`}>
                    <span>{item.tag}</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
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
