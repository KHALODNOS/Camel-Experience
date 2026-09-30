import React from 'react';

const photos = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwZDarksyVVJIk04sMc58TmyxpY-v3-10zdcPig988WoOT1sSOEN3guTPxTpXfkAx1fsyyPz5UzggBJazL9M0QzfltKMl-7H-wMbAJG7sGHrNiN2i1PO_IkjkhBqAwddqgc1PJz1EhInscfoBmSSG-4Rxrg6h9bGKlyx9O19EzAIIe3Zpe7XO-VTZtHyATtUPP1Q-OgYNwNYQlm7BiJdCSc25qvamLPk1_pJ0uibmbc7JjW8YirlQ',
    alt: 'Camel leader and caravan at sunset on wet beach sands'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT4fHLXW6tb9GP6NDFj3Pd09mY4QUkTBclLiwC33LBb899-Ni2kVsn4IhQHRGxFSEzIOT2zgDAeZdL85jvarjbCWoSJbMzUS8KzvJ-oQowqfwCS53zKsOCGaU-W-04pLXPf0m33uomeI03QszirkNSYUQvOmb3gFk2eaavHpO8aEV8nnI_ty3rwOF7jvL1MimHcPAX9vzwOcjVs9H5hUKvqoU9fEPE21eEWkDKXXMhno22h-WzGrA',
    alt: 'Couple riding camels at golden hour on Agadir beach'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKylWppBCKglwYLXxnZIIrEmoFs4DHe2Mvi0_nZG7PJUpo0xT7l4yrh4OJUpAavLPNOGc229FDFPMx84pVFDRBcQ1nAVdN3fZx80eY6lCysX9vP56_jxerYyzHd6R1DMovEJMlwaYFbCA4saiH-MbQZqZwTRqwdUL3PZBbXyJmvYtPJNHSEuly0pFa6eRWANTJth-f6nKDN21hPXrmrrOenJ8LegtllL8N53t_dyybeApYL6DTESk',
    alt: 'Traditional Moroccan mint tea pouring into glasses at sunset'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGtxaS-YbA3dYHBdcm87-FbIW_OavSeVzxUU9PllBtSPVhe1B5WDt5FG8kQdsg5mq39hVaXWm9dmCpPK1iJjMyx5-NIlxlh1Mvl7bDmpk3qlW6Helgt9S_BXD-8dGAWWQhzEHRzWS2y1-sBtmggpW9zj7k_sY3mf69x45lLEKPTC3MXzwQEF-Muntmgpd_GBObn9sIEraxkAfslWSiopKELYTubXh2UwRhgUGIZSK2epZHLudGIWY',
    alt: 'Flamingos at Souss Massa river mouth'
  }
];

export default function SunsetGallery() {
  return (
    <section className="w-full bg-[#faf2ee]/70 py-20 border-t border-[#e9e1dd]" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#8f4900] uppercase tracking-widest block">
              Real Guests, Real Magic
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e1b19]">
              SUNSET GALLERY PREVIEW
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-2 text-[#8f4900] font-semibold text-sm hover:underline"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            <span>Follow @AgadirCamelExperience</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((item, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden aspect-square shadow-sm bg-[#eee7e3] border border-[#e9e1dd] group">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
