import React from 'react';

const pillars = [
  {
    icon: 'nature_people',
    title: 'Authentic Experiences',
    desc: 'True Berber hospitality, traditional handcrafted leather saddles, and scenic uncrowded trails along coastal dunes and the serene Souss River.',
    tag: 'Berber Heritage',
    bgColor: 'bg-[#ffdcc5]',
    textColor: 'text-[#8f4900]',
    hoverBg: 'group-hover:bg-[#8f4900]',
    hoverText: 'group-hover:text-white',
  },
  {
    icon: 'airport_shuttle',
    title: 'Hotel Pickup Included',
    desc: 'Complimentary air-conditioned transfer directly from your Agadir or Taghazout hotel reception, returning you safely right after the ride.',
    tag: 'Agadir & Taghazout',
    bgColor: 'bg-[#ffdbcf]',
    textColor: 'text-[#9e421f]',
    hoverBg: 'group-hover:bg-[#9e421f]',
    hoverText: 'group-hover:text-white',
  },
  {
    icon: 'favorite',
    title: 'Friendly Local Team',
    desc: 'Experienced, multilingual camel handlers who treat travelers like family, capturing photos and sharing stories of the Souss region.',
    tag: 'Local Guides',
    bgColor: 'bg-[#ffdcc3]',
    textColor: 'text-[#8d4b00]',
    hoverBg: 'group-hover:bg-[#8d4b00]',
    hoverText: 'group-hover:text-white',
  },
  {
    icon: 'wb_twilight',
    title: 'Unforgettable Sunsets',
    desc: 'Carefully timed departures that place you beside the Atlantic dunes exactly when the sky blushes amber, rose, and burnished gold.',
    tag: 'Golden Hour',
    bgColor: 'bg-[#ffb782]/40',
    textColor: 'text-[#8f4900]',
    hoverBg: 'group-hover:bg-[#8f4900]',
    hoverText: 'group-hover:text-white',
  },
];

export default function WhyUs() {
  return (
    <section className="w-full bg-[#faf2ee] pt-28 pb-20 mt-8 sm:mt-12 border-b border-[#e9e1dd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#8f4900] uppercase tracking-widest block">
            The Trusted Agadir Difference
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1e1b19] tracking-tight">
            WHY TRAVELERS LOVE AGADIR CAMEL EXPERIENCE
          </h2>
          <p className="text-sm sm:text-base text-[#554337] leading-relaxed">
            Curated desert encounters with genuine Berber warmth, reliable hotel door-to-door transit, and no hidden surprises.
          </p>
        </div>

        {/* 4 Pillars Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between border border-[#e9e1dd]"
            >
              <div className="space-y-4">
                <div
                  className={`w-14 h-14 rounded-xl ${item.bgColor} ${item.textColor} ${item.hoverBg} ${item.hoverText} flex items-center justify-center transition-colors shadow-sm`}
                >
                  <span className="material-symbols-outlined text-[30px]">{item.icon}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1e1b19]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#554337] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className={`pt-6 flex items-center gap-2 ${item.textColor} text-xs font-semibold uppercase tracking-wider`}>
                <span>{item.tag}</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
