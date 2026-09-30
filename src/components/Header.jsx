import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f5]/90 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(180,83,9,0.07)] border-b border-[#e9e1dd]/60">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Logo & Title */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <img
            alt="Agadir Camel Experience Logo"
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD7gHw7vFgWaIijxlf9blF_fSx8m1-aZ9jo__ECUb6DZOm1pnCBQsDofCjN8751_fqa5STOQUyzsW-X0ibdD8r0vlEadhuw_0-7ypjY1ehM3SgiR9tT9wcJ2ehO1kVk8tnuk-iox5Ngp0sfluc-SmrYK70LOkjQSwoHPaxAXEdesg54rlWqZeifzmOS64SaRbemE4Wup2LMtP1IpQSaTK880_fPSll3RxDdx8MhMYaV_RWnVV6zBU"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-[#1e1b19] tracking-tight leading-tight group-hover:text-[#8f4900] transition-colors">
              Agadir Camel Experience
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-[#554337] uppercase tracking-widest">
              Est. Agadir, Morocco
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#faf2ee] px-3 py-1.5 rounded-full shadow-inner border border-[#e9e1dd]/50">
          <a href="#" className="px-4 py-1.5 bg-[#b35e08] text-white font-semibold text-xs tracking-wider rounded-full shadow-sm">
            HOME
          </a>
          <a href="#experiences" className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#554337] hover:bg-[#eee7e3] hover:text-[#1e1b19] transition-all">
            EXPERIENCES
          </a>
          <a href="#activities" className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#554337] hover:bg-[#eee7e3] hover:text-[#1e1b19] transition-all">
            ACTIVITIES
          </a>
          <a href="#tours" className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#554337] hover:bg-[#eee7e3] hover:text-[#1e1b19] transition-all">
            TOURS
          </a>
          <a href="#gallery" className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#554337] hover:bg-[#eee7e3] hover:text-[#1e1b19] transition-all">
            GALLERY
          </a>
          <a href="#about" className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#554337] hover:bg-[#eee7e3] hover:text-[#1e1b19] transition-all">
            ABOUT US
          </a>
          <a href="#contact" className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#554337] hover:bg-[#eee7e3] hover:text-[#1e1b19] transition-all">
            CONTACT
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4ece8] text-xs font-semibold text-[#1e1b19] hover:bg-[#eee7e3] transition-colors shadow-sm border border-[#e9e1dd]"
            href="tel:0619017615"
          >
            <span class="material-symbols-outlined text-[#8f4900] text-[18px]">call</span>
            <span>0619017615</span>
          </a>
          <a
            className="inline-flex items-center px-3.5 sm:px-5 py-2.5 rounded-full bg-[#8f4900] hover:bg-[#b35e08] text-white font-semibold text-[11px] sm:text-xs tracking-wider uppercase transition-all shadow-[0_8px_24px_-2px_rgba(194,106,24,0.35)] hover:shadow-lg active:scale-95"
            href="#quick-booking"
          >
            BOOK EXPERIENCE
          </a>
          <div className="w-8 h-8 rounded-full bg-[#8f4900] flex items-center justify-center shrink-0 text-white shadow-sm">
            <span class="material-symbols-outlined text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
