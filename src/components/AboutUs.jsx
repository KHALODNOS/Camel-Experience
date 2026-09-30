import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function AboutUs() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: t('faq_1_q'), a: t('faq_1_a') },
    { q: t('faq_2_q'), a: t('faq_2_a') },
    { q: t('faq_3_q'), a: t('faq_3_a') },
    { q: t('faq_4_q'), a: t('faq_4_a') },
    { q: t('faq_5_q'), a: t('faq_5_a') },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#faf2ee]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8f4900]/10 text-[#8f4900] text-xs font-bold tracking-widest uppercase">
            <span className="material-symbols-outlined text-[16px]">help_center</span>
            {t('about_badge')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1e1b19]">
            {t('about_title')}
          </h2>
          <p className="text-[#554337] max-w-2xl mx-auto text-lg pt-2 leading-relaxed">
            {t('about_desc')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              className={`border ${openIndex === index ? 'border-[#8f4900]/30 shadow-md bg-white' : 'border-[#e9e1dd] bg-white/50'} rounded-2xl overflow-hidden transition-all duration-300`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer hover:bg-white/50"
              >
                <span className={`font-bold text-lg sm:text-xl pr-4 ${openIndex === index ? 'text-[#8f4900]' : 'text-[#1e1b19]'}`}>
                  {faq.q}
                </span>
                <span className={`material-symbols-outlined flex-shrink-0 transition-transform duration-300 text-[#8f4900] bg-[#8f4900]/10 rounded-full p-1 ${openIndex === index ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-[#554337] text-base sm:text-lg leading-relaxed border-t border-transparent pt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
