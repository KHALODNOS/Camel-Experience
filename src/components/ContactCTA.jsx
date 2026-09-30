import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

export default function ContactCTA() {
  const { t } = useLanguage();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const serviceId = import.meta.env.VITE_SERVICE_ID || 'service_jo71u2t';
    const templateId = import.meta.env.VITE_TEMPLATE_ID || 'template_hxpemwc';
    const publicKey = import.meta.env.VITE_PUBLIC_KEY || 'amqo4tAdENqYMZqAu';

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setLoading(false);
          setStatusMessage({ type: 'success', text: t('form_success') });
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS Error:', error);
          setStatusMessage({ type: 'error', text: t('form_error') });
        }
      );
  };

  return (
    <section className="w-full py-20 sm:py-24 bg-[#faf2ee] relative overflow-hidden border-t border-[#e9e1dd]" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 relative z-10">
        
        {/* Top Header */}
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdcc5] text-[#8f4900] text-xs font-semibold uppercase tracking-widest border border-[#e9e1dd]">
            <span className="material-symbols-outlined text-[16px]">bolt</span>
            {t('instant_confirm')}
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1e1b19] tracking-tight max-w-3xl mx-auto">
            {t('ready_title')}
          </h2>

          <p className="text-base sm:text-lg text-[#554337] max-w-2xl mx-auto font-light leading-relaxed">
            {t('ready_desc')}
          </p>

          {/* Direct Contact Info Box */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 py-3.5 px-6 rounded-2xl bg-white shadow-sm border border-[#e9e1dd] mx-auto text-sm text-[#1e1b19]">
            <a href="tel:0619017615" className="flex items-center gap-2 text-[#8f4900] font-semibold hover:underline">
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>Direct Phone &amp; WhatsApp: 0619017615</span>
            </a>
            <span className="hidden sm:inline text-[#dbc2b2]">|</span>
            <a
              href="https://www.instagram.com/agadir_camel_experience"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[#554337] hover:text-[#8f4900] hover:underline transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              <span>Instagram: @agadir_camel_experience</span>
            </a>
          </div>
        </div>

        {/* EmailJS Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#e9e1dd] max-w-3xl mx-auto space-y-6"
        >
          <div className="text-center space-y-1">
            <h3 className="font-serif text-2xl font-bold text-[#1e1b19]">
              {t('contact_form_title')}
            </h3>
            <p className="text-xs sm:text-sm text-[#554337]">
              {t('contact_form_sub')}
            </p>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* User Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#554337] uppercase tracking-wider block">
                  {t('form_full_name')}
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder={t('form_name_placeholder')}
                  className="w-full h-12 px-4 rounded-xl bg-[#faf2ee] font-semibold text-sm text-[#1e1b19] focus:outline-none focus:ring-2 focus:ring-[#8f4900] transition-all border border-[#e9e1dd]"
                />
              </div>

              {/* User Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#554337] uppercase tracking-wider block">
                  {t('form_email')}
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder={t('form_email_placeholder')}
                  className="w-full h-12 px-4 rounded-xl bg-[#faf2ee] font-semibold text-sm text-[#1e1b19] focus:outline-none focus:ring-2 focus:ring-[#8f4900] transition-all border border-[#e9e1dd]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* User Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#554337] uppercase tracking-wider block">
                  {t('form_phone')}
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="+212 ..."
                  className="w-full h-12 px-4 rounded-xl bg-[#faf2ee] font-semibold text-sm text-[#1e1b19] focus:outline-none focus:ring-2 focus:ring-[#8f4900] transition-all border border-[#e9e1dd]"
                />
              </div>

              {/* Select Experience */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#554337] uppercase tracking-wider block">
                  {t('form_experience')}
                </label>
                <div className="relative">
                  <select
                    name="experience_type"
                    className="w-full h-12 pl-4 pr-10 rounded-xl bg-[#faf2ee] font-semibold text-sm text-[#1e1b19] focus:outline-none focus:ring-2 focus:ring-[#8f4900] transition-all appearance-none cursor-pointer border border-[#e9e1dd]"
                  >
                    <option value="Camel Sunset Trek (2h) — €10">Camel Sunset Trek (2h) — €10</option>
                    <option value="Camel Sunset + Dinner (2h) — €15">Camel Sunset + Dinner (2h) — €15</option>
                    <option value="Horse Riding (2h) — €10">Horse Riding (2h) — €10</option>
                    <option value="Horse Riding + Dinner — €15">Horse Riding + Dinner — €15</option>
                    <option value="Quad / Buggy Safari">Quad / Buggy Safari</option>
                    <option value="Paradise Valley Excursion">Paradise Valley Excursion</option>
                    <option value="Other Excursions">Other Excursions</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-[#554337] text-[18px]">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            {/* Message Body */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#554337] uppercase tracking-wider block">
                {t('form_message')}
              </label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder={t('form_message_placeholder')}
                className="w-full p-4 rounded-xl bg-[#faf2ee] font-medium text-sm text-[#1e1b19] focus:outline-none focus:ring-2 focus:ring-[#8f4900] transition-all border border-[#e9e1dd]"
              ></textarea>
            </div>

            {/* Status Feedback Message */}
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl text-xs sm:text-sm font-semibold text-center ${
                  statusMessage.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
                }`}
              >
                {statusMessage.text}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full h-13 rounded-xl bg-[#8f4900] hover:bg-[#b35e08] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_8px_24px_-2px_rgba(194,106,24,0.35)] cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <span>{t('form_sending')}</span>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  <span>{t('form_send_btn')}</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Quick WhatsApp Alternative */}
          <div className="pt-2 text-center">
            <span className="text-xs text-[#554337]">{t('form_whatsapp_alt')} </span>
            <a
              href="https://wa.me/212619017615?text=Hello%21%20I%20would%20like%20to%20reserve%20an%20Agadir%20experience."
              target="_blank"
              rel="noreferrer"
              className="text-[#8f4900] font-bold text-xs hover:underline inline-flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span> {t('form_whatsapp_link')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
