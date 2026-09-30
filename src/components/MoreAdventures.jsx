import React from 'react';

const activities = [
  {
    title: 'Quad Biking Safari',
    duration: '2 Hours',
    price: '€25',
    desc: 'Conquer the coastal sand dunes and eucalyptus forest tracks with high-performance 250cc ATVs.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpBHBBwSc0o95A6xjmhKxo6ZDN4adKyjfZ3laOf8A3-vQLgPI4pETUvUfV6pmZcF7T_dWzG-IIeHpDGcke8VvXfa67QeFF0OxpFH4Jj2vrRp9RVhVeQzD8i9fl6EEz3wi-LnYwnn5wMBCyKtg-zhXPu-_yTF53mnuJZkNWolHI0TP94yt9xzM5txGK0iIHD37VfZfL79bAjG0CGTzBNsuMenqu6PGrjiPCZff_8D-zvcRNPLEywvc',
    alt: 'Quad biking safari on sand dunes',
    msg: 'Quad Biking Safari'
  },
  {
    title: 'Buggy Safari',
    duration: '2 Hours',
    price: '€45',
    desc: 'High adrenaline tandem dune buggies, perfect for couples and thrill seekers across Takkat sands.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB135cU_2dyULKP8bGX0nSm0P-5GoqCaO2hnGnb58PlSWIFXJwGhcY_G6V7NykwWhv1KrG5vUbklEYEVsUTu-kPNLVdEzAWjeHRcXm3qP5TKZs3dY3yLYa9xmi1yel0_VVCeoxRqujgr5NzhjM40WDhbkjy5uKIarhFEia7kiUof42-JShCWJT6OdfVzePHm-4XcYZfVXsCQFE8E8MCa-jcLZi_CtLdA6UqPsUxHeRW3Dv4C9LRyEw',
    alt: 'Buggy safari on dunes',
    msg: 'Buggy Safari'
  },
  {
    title: 'Surf & Ocean Waves',
    duration: 'Half Day',
    price: '€20',
    desc: 'Learn to surf in world-renowned Taghazout & Anza swells. Equipment and certified coaching included.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2fEVH3HhoJfXQzwAT7yJ6W6rDcoT02Xy2TvPBCzxjluSzTcl6dUkabHpWU1uCN7pNMxKKw-E_3RUVRgTKpW3OED5ZfvidI5qzXVJkHmzrkKFRS8BJptHkOjb8e-bcReFFq3UoJ1VS5vMHJl2hkNFVJo-3qYZ5FcZzxUiiewgIfzZ-U-JpPQUX0mo_s4fj8zMzfowLUKjbYxG9UVuune5DQrxEyOUR1NU3g5-Uo7MzdtdNJQtojSU',
    alt: 'Surfer catching ocean wave in Taghazout',
    msg: 'Surf Lessons'
  },
  {
    title: 'Jet Ski Marina Thrill',
    duration: '30 Mins',
    price: '€35',
    desc: 'Skim across the warm calm waters of Agadir bay facing the historic Kasbah mountain.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6KBQrVL3TNqoJcZKoh4ZTriVp8iqQ3X_pHT1nvW-LKYdQV7UV8aoppJjLBqYTdl_1g1mmJnioEZzz6x8pNT7qiXOw_xn2K_PC7i3bwaJKh0Fg6kfMWvc0-NvNKkZvKzNXm3w4ss-YHYGIDID7cPq4e8bPHs5tnErnXalaCNCKgnxDbe8i7KJ4YHgZaFVwcFvDfbFR1oL33LVSuRDvG_WLGJlmZkEjGJwVDA2rMm0GNXOWDneaVKU',
    alt: 'Jet ski in Agadir bay',
    msg: 'Jet Ski Marina Thrill'
  },
  {
    title: 'Boat Cruise & Fishing',
    duration: 'Half Day',
    price: '€30',
    desc: 'Relax on the open ocean with rod fishing, swimming stops, and fresh grilled fish lunch onboard.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbz_BydzhiXVmiTYN94hYaHHhdU2DMxjIyuOVSxIVuqs9cMHlLzlX4aL0A0hjqP5EZkBPE9PBBZHY1Zq37AQS61qK2FZkKayfD8Ew8LGi_PGgugSG7htaPvQH2kQ1m5FJun3sldgzxo43ovgHcfTa0_fFIEV7uv1tqkrQDRREmelvxJvyQe5nMEISrcQt6OhgMaPM8QLybtpjNk7EGWVPvQ72KjGLwQBzswozLkei-o7oZ7sR6-Zw',
    alt: 'Boat cruise in Agadir ocean',
    msg: 'Boat Cruise & Fishing'
  },
  {
    title: 'Agadir City Tour',
    duration: '3 Hours',
    price: '€15',
    desc: 'Visit the historic Kasbah Oufella, buzzing Souk El Had market, and an authentic Argan oil cooperative.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc_2kqN9mVtWhc_kEmwasBqN2bNnissxltElMcF7-38N_0IpX6FicAfDPY9PtZI-ROhZ4WP9C2Zm_42leqbB435QtxBi08fkqIS4j_ExAY0a3PmVUMp3FCLfd9zZvuFRTqXnRlrIykPcmG0mvvbuTiJnWCqrqEEqDgajQHPOb-UJXptgvp8ImatXDO-h47AaboaDBo_zThW4PLKtJtspwR4UU2yiIDAB8Gc_HXjjaLbQGGj35VxS0',
    alt: 'Agadir Kasbah Oufella viewpoint',
    msg: 'Agadir City Tour'
  },
  {
    title: 'Berber Country Tour',
    duration: '4 Hours',
    price: '€20',
    desc: 'Explore rustic countryside hamlets, traditional honey apiaries, and rural foothill landscapes.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC33li4q5wZWPKBau-d-icLb2GuDopCujA9W4WBK5AtGhGtnBfs3Vha9lYkEoSbpRLUm3g2oiJTH2NVRo0LspKikyT2S6b-3U0t-U0h2pmi8cZo25SfR2U1ATtS9YBp1slHv0UwNSZLPVdUYDqalCvcssMTsRJTpOF-CaztkylWsyufgd1CbWyHOJvsOmqW4rQ8sQxSp-dylqhL1GzFtSH7-kiqzBCbt8gShl5cMJVOKv0Q0E1xddQ',
    alt: 'Berber mountain countryside village',
    msg: 'Berber Country Tour'
  },
  {
    title: 'Bicycle & E-Bike',
    duration: 'Full Day',
    price: '€10',
    desc: "Cruise Agadir's 10km paved seaside corniche at your leisure with premium city bikes and helmets.",
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUiBAr0f7-sEmB6SorVygqLKpgePytbDL3X_wvigCQhRMNakgkNEbJIQd8k1MBfCHUEZCwF1yBgutmr5c2PjdLUFQrXECOwlEBgbG2qeipBJl3fUFeQJKgRakYv9uf39h6if0nhplvgFnxLMx8KFWriTNHmYDuBFVXaNmETzUqZM9I3heZ_MfEx1mRB_UEQnr_0YFJYXEFlgqlnEewSE2hap8-0lxCBHwNW6SRHN9LxqUe4Bl0SSA',
    alt: 'Traveler riding e-bike on Agadir beach corniche',
    msg: 'Bicycle & E-Bike Rental'
  }
];

export default function MoreAdventures() {
  return (
    <section className="w-full bg-[#faf2ee] py-20 sm:py-24 border-t border-[#e9e1dd]" id="activities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-[#8f4900] uppercase tracking-widest block">
              Agadir Thrills &amp; Water
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e1b19]">
              MORE OUTDOOR ADVENTURES
            </h2>
            <p className="text-sm sm:text-base text-[#554337]">
              Combine your camel sunset with quad biking adrenaline, Taghazout surf breaks, or scenic ocean boat excursions.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 text-[#8f4900] font-semibold text-sm hover:underline shrink-0"
            href="tel:0619017615"
          >
            <span>Need custom multi-activity packages? Call us</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>

        {/* Activity Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((act, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e9e1dd] group"
            >
              <div>
                <div className="h-48 w-full overflow-hidden relative bg-[#eee7e3]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={act.img}
                    alt={act.alt}
                  />
                  <span className="absolute top-3 right-3 bg-[#33302d]/85 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    {act.duration}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#1e1b19] group-hover:text-[#8f4900] transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#554337] leading-relaxed font-light">
                    {act.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#554337] uppercase tracking-wider block font-semibold">From</span>
                  <span className="font-sans text-xl font-bold text-[#8f4900]">{act.price}</span>
                </div>
                <a
                  className="px-4 py-2 rounded-xl bg-[#f4ece8] hover:bg-[#8f4900] hover:text-white text-[#1e1b19] text-xs font-semibold transition-all border border-[#e9e1dd]"
                  href={`https://wa.me/212619017615?text=${encodeURIComponent(`Hello, I want to inquire about ${act.msg}`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Discover
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
