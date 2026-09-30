import React from 'react';

const tours = [
  {
    title: 'Paradise Valley',
    price: '€15',
    timing: '8:30 AM – 2:00 PM',
    desc: 'Trek through the Immouzzer foothills, swim in natural turquoise limestone pools, and relax at sunlit riverside cafes.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTUFvLz1oOVT6MAMTe7TZWE6VYXkwRtH81uX9v0lRwIDZbuHR9H4A7_qNctEx_uEcc8iwM4FGZs-MA3Qy57dF6ZVi44ez4NGYulewl2iw-DwOMUxxQamw9zf5Pqme83guEhj4d_Lqxg0y05wmsHlU-8g6Qevb9QpJAm96HQwHTtrcIa9b9QoxcRHmD4RZshMeRlxyrnogeoAH-dksRFGyuJ1gH6YlCJB5Nz_-IxBwYZClkikdWxLA',
    alt: 'Paradise valley turquoise rock pools'
  },
  {
    title: 'Massa & Tiznit',
    price: '€25',
    timing: 'Full Day Excursion',
    desc: 'Explore the Massa National Bird Park, fisherman cave dwellings at Sidi Rbat, and Tiznit’s renowned Berber silver medina.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0EdmbhB87aUbJJrHOlGNP0fDGwQ8-BnEzpBpe-2_9dtZ4JCSD1dnP1ejwpbsAfZFRFv3NMBxPUynkJFD6X82OS8809IG-0_yrVEbnPJiEZLiM56SKpXnjCDn2y5Gd5Q_wW6AD7DzmGIlrv0_hdqz8WKLSlzHl_HNDBiuSSKp1Zm3NgeyPMCJiI2sPPAkz0vMSlodwFK2CkUhAh4pEo4xP5nhYiM87-z8SxU4W1UjbZdWyTNmXKpw',
    alt: 'Tiznit red fortress walls'
  },
  {
    title: 'Tiout & Taroudant',
    price: '€25',
    timing: 'Full Day with Lunch',
    desc: '"Little Marrakech"—witness 6km of intact adobe ramparts, lively Berber craft markets, and the sprawling palm oasis of Tiout.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQDVP01rTKL3wWdjZry5Oa-nTZOaRt-QBvYCOiO2ECuMoKWHvs1sjrKglv4UNaFqdIqlaS-22JC2lla4vWN7EBF4dUcu0NVA1j070NCb7Fc1LitiZJOGUwjlN5ocEvafG6U54F5PCv9mjF7QiDSDh7AbKK_9maWvj-59Mwp8OVk29AnbMxTlOENtDuWxRs4Q4DL-cYCSuBDhH_9L0AKXtxjdQNRiL8L9IxunywQI-6DrUMjs6a-Zg',
    alt: 'Taroudant mud brick ramparts'
  },
  {
    title: 'Essaouira (Mogador)',
    price: '€30',
    timing: 'Full Day Departure',
    desc: 'UNESCO World Heritage coastal citadel with whitewashed alleyways, blue shutters, artisan thuya wood shops, and fresh seafood.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFURuSiaUFn3RZhz-D6b55s7MD6i8n8c5w5brrx2q1oACECCXbHG3m5599vXBK0FRGnYl0TYaS8Wfa5HuH_R-gvqLUVYAZpi8ZGIIwSjhrTAjALt1VrT4tWzE8qCm904r7hUVX_0pivAs1kiElGzJx887yQadfpFcd0mmJaEhLYZqD96adk7sqUqjX_k00WnShyR8UFoF2WRoBTvskBUxuKsRlhIxVQwwQR6StOFZJ8bexga_XyxA',
    alt: 'Essaouira harbor blue fishing boats'
  },
  {
    title: 'Marrakech Day Trip',
    price: '€35',
    timing: '7:00 AM – 8:00 PM',
    desc: 'The Red City: Visit the majestic Bahia Palace, Koutoubia gardens, the bustling souks of the Medina, and mythical Jemaa el-Fnaa.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEdmxOWc4-9kGm0FWe6hCWGwpQNwVv6hIx-7DIaa44vKLJRg8OjX0-XhVpo1iWfYbyIwOTtbyy5OC_Y7BXPmvs5n06iW-lM4Ny3YB7FTUh5vZU5GL2A0zOncfJI8EiIHEmrhwp88izOUdjGhSWGgf2FMgz4iyEEIpNmSV2H4JobhSAk5zMQdIbsNZQ5--7Qr8EpC2FZs13ZfD_SlQxl424W8VL6gu1YxAZmCI2Z7C01-R3JGfAKVU',
    alt: 'Marrakech Jemaa el Fnaa square'
  },
  {
    title: 'Legzira Sea Arches',
    price: '€35',
    timing: 'Full Day Coastal',
    desc: 'Morocco’s most photographed wild ocean beach, known for immense red stone arches sculpted by tides, followed by fresh grilled fish.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxITOd1XMhD2wDDWAIs8VWjOCNWn_v4HEBHs7kSUs04Ih86WW0TTVcrjTAMVf7-gMvTacUVz2K-moVQw7CQxeuSS9shUJdt99Yv9UTSnnzhIzqwu48x-xPVWmRA9MOSq96771_2rXAapXxcRr-nCWLo3sFz1NkRu5DoG-Zir5n6unJSBJmvMjGeznQR3cjjmfevb0Yk8Hjdg_gd6YUeBIwelN5odKpT5a36kFXovm4WclBJebNUyg',
    alt: 'Legzira red sandstone arch'
  }
];

export default function DayTours() {
  return (
    <section className="w-full py-20 sm:py-24 bg-[#fff8f5]" id="tours">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#9e421f] uppercase tracking-widest block">
            Full &amp; Half-Day Day Trips
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e1b19]">
            DISCOVER MOROCCO — TOURS &amp; EXCURSIONS
          </h2>
          <p className="text-sm sm:text-base text-[#554337]">
            Step beyond Agadir. Venture to emerald mountain pools, red sandstone sea arches, and ancient walled medinas.
          </p>
        </div>

        {/* Excursion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#e9e1dd] flex flex-col justify-between"
            >
              <div>
                <div className="h-60 w-full overflow-hidden relative bg-[#eee7e3]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={tour.img}
                    alt={tour.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#33302d]/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                    <h3 className="font-serif text-xl font-bold">{tour.title}</h3>
                    <span className="font-sans text-xl font-bold text-[#ffdcc5]">
                      {tour.price} <span className="text-xs font-normal text-white/80">/ person</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs sm:text-sm text-[#554337] leading-relaxed font-light">
                    {tour.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-[#554337] text-xs font-medium border-t border-[#e9e1dd]/50 mt-2">
                <span className="flex items-center gap-1.5 pt-3">
                  <span className="material-symbols-outlined text-[#8f4900] text-[18px]">schedule</span>
                  {tour.timing}
                </span>
                <a
                  className="text-[#8f4900] font-bold hover:underline pt-3"
                  href={`https://wa.me/212619017615?text=${encodeURIComponent(`Hello, I want to book ${tour.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Reserve Tour →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
