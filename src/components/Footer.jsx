import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#33302d] text-[#f7efeb] pt-16 pb-12 relative overflow-hidden border-t border-[#887365]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden border border-[#ffb77d] shadow-sm">
                <img
                  alt="Agadir Camel Experience Logo"
                  className="w-full h-full object-cover"
                  src="/images/logo.jpg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold text-white leading-tight">
                  Agadir Camel Experience
                </span>
                <span className="text-[10px] text-[#ffb77d] uppercase tracking-wider font-semibold">
                  Coastal &amp; Desert Escapes
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#e9e1dd] leading-relaxed font-light">
              Discover Agadir. Live the authentic Moroccan experience with desert sunset treks, scenic dunes, and coastal ocean paths.
            </p>
            <div className="pt-2 space-y-2 text-[#e9e1dd] text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ffdcc3] text-[18px]">call</span>
                <a className="hover:text-[#ffb782] transition-colors" href="tel:0619017615">0619017615</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ffdcc3] text-[18px]">photo_camera</span>
                <span className="hover:text-[#ffb782] transition-colors">@AgadirCamelExperience</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Experiences */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#ffdcc5] uppercase tracking-wider">
              Core Experiences
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#e9e1dd]">
              <li><a href="#experiences" className="hover:text-white transition-colors">Camel Sunset Experience</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Moroccan Dinner Trek</a></li>
              <li><a href="#horse-riding" className="hover:text-white transition-colors">Horse Riding Forest &amp; Beach</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Sunrise Camel Tour</a></li>
            </ul>
          </div>

          {/* Col 3: Adventures */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#ffdcc5] uppercase tracking-wider">
              Adventures &amp; Excursions
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#e9e1dd]">
              <li><a href="#activities" className="hover:text-white transition-colors">Quad &amp; Buggy Safari</a></li>
              <li><a href="#activities" className="hover:text-white transition-colors">Surf &amp; Ocean Sports</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors">Paradise Valley Day Trip</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors">Essaouira Coastal Tour</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors">Marrakech Heritage Excursion</a></li>
            </ul>
          </div>

          {/* Col 4: Trust & Assurance */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#ffdcc5] uppercase tracking-wider">
              Trust &amp; Assurance
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#e9e1dd]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#ffdcc3] text-[18px] shrink-0 mt-0.5">verified</span>
                <span>Free Hotel Pickup in Agadir &amp; Taghazout</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#ffdcc3] text-[18px] shrink-0 mt-0.5">verified</span>
                <span>Professional Local Guides</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#ffdcc3] text-[18px] shrink-0 mt-0.5">verified</span>
                <span>No Advance Deposit Required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#ffdcc3] text-[18px] shrink-0 mt-0.5">verified</span>
                <span>100% Authentic Moroccan Hospitality</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 bg-[#887365]/30 h-px w-full"></div>

        {/* Operating Hours Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 rounded-xl bg-white/5 px-6 text-xs sm:text-sm text-[#e9e1dd] border border-white/5">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-[#ffb77d] font-semibold">{t('daily_ops')}</span>
            <span>Direct WhatsApp &amp; Reservation Desk Active</span>
          </div>
          <div className="flex items-center gap-4">
            <a className="inline-flex items-center gap-1.5 text-white hover:text-[#ffb77d] transition-colors" href="tel:0619017615">
              <span className="material-symbols-outlined text-[16px]">call</span> {t('call_desk')}
            </a>
            <a className="inline-flex items-center gap-1.5 text-white hover:text-[#ffb77d] transition-colors" href="https://wa.me/212619017615" target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined text-[16px]">chat</span> {t('whatsapp_chat')}
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[#887365] text-xs">
          <p>© 2025 Agadir Camel Experience. All rights reserved. Souss-Massa, Morocco.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Pickup Locations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
