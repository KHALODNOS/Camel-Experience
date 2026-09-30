import React, { useState } from 'react';

export default function Hero() {
  const [adventure, setAdventure] = useState('camel-sunset');
  const [date, setDate] = useState('2025-05-18');
  const [travelers, setTravelers] = useState('2');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! I would like to check availability for:
- Adventure: ${adventure}
- Date: ${date}
- Guests: ${travelers}`;
    const whatsappUrl = `https://wa.me/212619017615?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[85vh] lg:min-h-[920px] flex flex-col justify-end pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeHxH2hKGfCluEWWudOlnViajg3WXqchPnpXG9MboGq3OBi8IDVCoiwxVdTWVsRPXTKRvMe6mfy_wESlQkSBTtBNw2PAc0X1cTz_QOHI6sdBlerXd0iD_rZ003ChrRzc-GqK-y5hoankQ2oidTeMAGw42kJ_dLn2KTFRjKc5HipTR5aFJO4PXhQEHK6QlXkGtiBMh63pT5tYZWGXGFPWStVKO77FWKqIvTNOmcCIQIvF2Ig8Zul5c')`
        }}
      ></div>

      {/* Scrim Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#33302d] via-[#33302d]/50 to-transparent opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#b35e08]/25 via-transparent to-[#9e421f]/25 mix-blend-soft-light"></div>

      {/* Main Hero Banner Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-28 pb-16 sm:pb-24">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#ffdcc5] shadow-sm border border-white/20">
            <span className="material-symbols-outlined text-[#ffdcc5] text-[18px]">wb_twilight</span>
            <span className="font-semibold text-[11px] sm:text-xs tracking-widest uppercase">
              Moroccan Desert &amp; Coastal Adventures
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] drop-shadow-md">
            EXPERIENCE AGADIR <br />
            <span className="italic font-normal text-[#ffb77d]">DIFFERENTLY</span>
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-[#faf2ee]/95 max-w-2xl leading-relaxed font-light">
            Authentic camel rides, ocean sunset adventures, and coastal equestrian trails. Glide through eucalyptus groves and estuary dunes under Morocco's golden hour.
          </p>

          {/* Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {['Camel Experiences', 'Horse Riding', 'Atlantic Sunset', 'Souss Valley Tours', 'Desert Safaris'].map((chip, index) => (
              <React.Fragment key={chip}>
                {index > 0 && <span className="text-[#ffb77d] text-xs">•</span>}
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                  {chip}
                </span>
              </React.Fragment>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              className="inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#8f4900] hover:bg-[#b35e08] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_12px_32px_-4px_rgba(194,106,24,0.45)] hover:-translate-y-0.5"
              href="#quick-booking"
            >
              <span>BOOK YOUR EXPERIENCE</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all border border-white/20"
              href="#activities"
            >
              <span className="material-symbols-outlined text-[18px]">explore</span>
              <span>EXPLORE ACTIVITIES</span>
            </a>
          </div>
        </div>
      </div>

      {/* Docked Booking Widget */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full -mb-12 sm:-mb-10" id="quick-booking">
        <div className="bg-white rounded-2xl shadow-[0_16px_40px_-6px_rgba(142,70,0,0.18)] p-4 sm:p-6 border border-[#e9e1dd]">
          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Experience Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#554337] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#8f4900] text-[16px]">location_on</span>
                Choose Adventure
              </label>
              <div className="relative">
                <select
                  value={adventure}
                  onChange={(e) => setAdventure(e.target.value)}
                  className="w-full h-12 pl-3.5 pr-10 rounded-xl bg-[#faf2ee] font-semibold text-sm text-[#1e1b19] focus:outline-none focus:ring-2 focus:ring-[#8f4900] transition-all appearance-none cursor-pointer border border-[#e9e1dd]"
                >
                  <option value="Camel Sunset Trek (2h) — €10">Camel Sunset Trek (2h) — €10</option>
                  <option value="Camel + Moroccan Tagine (2h) — €15">Camel + Moroccan Tagine (2h) — €15</option>
                  <option value="Arabian Horse Riding (2h) — €10">Arabian Horse Riding (2h) — €10</option>
                  <option value="Horse Riding + Dinner (2h) — €15">Horse Riding + Dinner (2h) — €15</option>
                  <option value="Quad Dune Safari (2h) — €25">Quad Dune Safari (2h) — €25</option>
                  <option value="Paradise Valley Excursion — €15">Paradise Valley Excursion — €15</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-[#554337] text-[18px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#554337] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#8f4900] text-[16px]">calendar_today</span>
                Select Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-12 px-3.5 rounded-xl bg-[#faf2ee] font-semibold text-sm text-[#1e1b19] focus:outline-none focus:ring-2 focus:ring-[#8f4900] transition-all cursor-pointer border border-[#e9e1dd]"
              />
            </div>

            {/* Guests Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#554337] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#8f4900] text-[16px]">group</span>
                Travelers
              </label>
              <div className="relative">
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full h-12 pl-3.5 pr-10 rounded-xl bg-[#faf2ee] font-semibold text-sm text-[#1e1b19] focus:outline-none focus:ring-2 focus:ring-[#8f4900] transition-all appearance-none cursor-pointer border border-[#e9e1dd]"
                >
                  <option value="1">1 Person (Private or Group)</option>
                  <option value="2">2 Travelers</option>
                  <option value="3">3 Travelers</option>
                  <option value="4">4 Travelers</option>
                  <option value="5+ Family">Family Group (5+)</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-[#554337] text-[18px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Check Availability Trigger */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-[#8f4900] hover:bg-[#b35e08] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_8px_20px_-2px_rgba(194,106,24,0.3)] active:scale-[0.99] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              <span>Check Availability</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
