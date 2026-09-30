import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Card3D from './Card3D';

export default function MoreAdventures() {
  const { t } = useLanguage();

  const activities = [
    {
      titleKey: 'act_quad_title',
      durationKey: 'act_quad_duration',
      price: '€25',
      descKey: 'act_quad_desc',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpBHBBwSc0o95A6xjmhKxo6ZDN4adKyjfZ3laOf8A3-vQLgPI4pETUvUfV6pmZcF7T_dWzG-IIeHpDGcke8VvXfa67QeFF0OxpFH4Jj2vrRp9RVhVeQzD8i9fl6EEz3wi-LnYwnn5wMBCyKtg-zhXPu-_yTF53mnuJZkNWolHI0TP94yt9xzM5txGK0iIHD37VfZfL79bAjG0CGTzBNsuMenqu6PGrjiPCZff_8D-zvcRNPLEywvc',
      alt: 'Quad biking safari on sand dunes',
      msg: 'Quad Biking Safari'
    },
    {
      titleKey: 'act_buggy_title',
      durationKey: 'act_buggy_duration',
      price: '€45',
      descKey: 'act_buggy_desc',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB135cU_2dyULKP8bGX0nSm0P-5GoqCaO2hnGnb58PlSWIFXJwGhcY_G6V7NykwWhv1KrG5vUbklEYEVsUTu-kPNLVdEzAWjeHRcXm3qP5TKZs3dY3yLYa9xmi1yel0_VVCeoxRqujgr5NzhjM40WDhbkjy5uKIarhFEia7kiUof42-JShCWJT6OdfVzePHm-4XcYZfVXsCQFE8E8MCa-jcLZi_CtLdA6UqPsUxHeRW3Dv4C9LRyEw',
      alt: 'Buggy safari on dunes',
      msg: 'Buggy Safari'
    },
    {
      titleKey: 'act_surf_title',
      durationKey: 'act_surf_duration',
      price: '€20',
      descKey: 'act_surf_desc',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2fEVH3HhoJfXQzwAT7yJ6W6rDcoT02Xy2TvPBCzxjluSzTcl6dUkabHpWU1uCN7pNMxKKw-E_3RUVRgTKpW3OED5ZfvidI5qzXVJkHmzrkKFRS8BJptHkOjb8e-bcReFFq3UoJ1VS5vMHJl2hkNFVJo-3qYZ5FcZzxUiiewgIfzZ-U-JpPQUX0mo_s4fj8zMzfowLUKjbYxG9UVuune5DQrxEyOUR1NU3g5-Uo7MzdtdNJQtojSU',
      alt: 'Surfer catching ocean wave in Taghazout',
      msg: 'Surf Lessons'
    },
    {
      titleKey: 'act_jetski_title',
      durationKey: 'act_jetski_duration',
      price: '€35',
      descKey: 'act_jetski_desc',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6KBQrVL3TNqoJcZKoh4ZTriVp8iqQ3X_pHT1nvW-LKYdQV7UV8aoppJjLBqYTdl_1g1mmJnioEZzz6x8pNT7qiXOw_xn2K_PC7i3bwaJKh0Fg6kfMWvc0-NvNKkZvKzNXm3w4ss-YHYGIDID7cPq4e8bPHs5tnErnXalaCNCKgnxDbe8i7KJ4YHgZaFVwcFvDfbFR1oL33LVSuRDvG_WLGJlmZkEjGJwVDA2rMm0GNXOWDneaVKU',
      alt: 'Jet ski in Agadir bay',
      msg: 'Jet Ski Marina Thrill'
    },
    {
      titleKey: 'act_boat_title',
      durationKey: 'act_boat_duration',
      price: '€30',
      descKey: 'act_boat_desc',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbz_BydzhiXVmiTYN94hYaHHhdU2DMxjIyuOVSxIVuqs9cMHlLzlX4aL0A0hjqP5EZkBPE9PBBZHY1Zq37AQS61qK2FZkKayfD8Ew8LGi_PGgugSG7htaPvQH2kQ1m5FJun3sldgzxo43ovgHcfTa0_fFIEV7uv1tqkrQDRREmelvxJvyQe5nMEISrcQt6OhgMaPM8QLybtpjNk7EGWVPvQ72KjGLwQBzswozLkei-o7oZ7sR6-Zw',
      alt: 'Boat cruise in Agadir ocean',
      msg: 'Boat Cruise & Fishing'
    },
    {
      titleKey: 'act_city_title',
      durationKey: 'act_city_duration',
      price: '€15',
      descKey: 'act_city_desc',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc_2kqN9mVtWhc_kEmwasBqN2bNnissxltElMcF7-38N_0IpX6FicAfDPY9PtZI-ROhZ4WP9C2Zm_42leqbB435QtxBi08fkqIS4j_ExAY0a3PmVUMp3FCLfd9zZvuFRTqXnRlrIykPcmG0mvvbuTiJnWCqrqEEqDgajQHPOb-UJXptgvp8ImatXDO-h47AaboaDBo_zThW4PLKtJtspwR4UU2yiIDAB8Gc_HXjjaLbQGGj35VxS0',
      alt: 'Agadir Kasbah Oufella viewpoint',
      msg: 'Agadir City Tour'
    },
    {
      titleKey: 'act_berber_title',
      durationKey: 'act_berber_duration',
      price: '€20',
      descKey: 'act_berber_desc',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC33li4q5wZWPKBau-d-icLb2GuDopCujA9W4WBK5AtGhGtnBfs3Vha9lYkEoSbpRLUm3g2oiJTH2NVRo0LspKikyT2S6b-3U0t-U0h2pmi8cZo25SfR2U1ATtS9YBp1slHv0UwNSZLPVdUYDqalCvcssMTsRJTpOF-CaztkylWsyufgd1CbWyHOJvsOmqW4rQ8sQxSp-dylqhL1GzFtSH7-kiqzBCbt8gShl5cMJVOKv0Q0E1xddQ',
      alt: 'Berber mountain countryside village',
      msg: 'Berber Country Tour'
    },
    {
      titleKey: 'act_bike_title',
      durationKey: 'act_bike_duration',
      price: '€10',
      descKey: 'act_bike_desc',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUiBAr0f7-sEmB6SorVygqLKpgePytbDL3X_wvigCQhRMNakgkNEbJIQd8k1MBfCHUEZCwF1yBgutmr5c2PjdLUFQrXECOwlEBgbG2qeipBJl3fUFeQJKgRakYv9uf39h6if0nhplvgFnxLMx8KFWriTNHmYDuBFVXaNmETzUqZM9I3heZ_MfEx1mRB_UEQnr_0YFJYXEFlgqlnEewSE2hap8-0lxCBHwNW6SRHN9LxqUe4Bl0SSA',
      alt: 'Traveler riding e-bike on Agadir beach corniche',
      msg: 'Bicycle & E-Bike Rental'
    }
  ];

  return (
    <section className="w-full bg-[#faf2ee] py-20 sm:py-24 border-t border-[#e9e1dd]" id="activities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-[#8f4900] uppercase tracking-widest block">
              {t('adv_badge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e1b19]">
              {t('adv_title')}
            </h2>
            <p className="text-sm sm:text-base text-[#554337]">
              {t('adv_desc')}
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 text-[#8f4900] font-semibold text-sm hover:underline shrink-0"
            href="tel:0619017615"
          >
            <span>{t('custom_pkg')}</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>

        {/* Activity Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
            >
              <Card3D className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between border border-[#e9e1dd] group h-full cursor-pointer">
                  <div>
                    <div className="h-48 w-full overflow-hidden relative bg-[#eee7e3]">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src={act.img}
                        alt={act.alt}
                      />
                      <span className="absolute top-3 right-3 bg-[#33302d]/85 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                        {t(act.durationKey)}
                      </span>
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="font-serif text-lg font-bold text-[#1e1b19] group-hover:text-[#8f4900] transition-colors">
                        {t(act.titleKey)}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#554337] leading-relaxed font-light">
                        {t(act.descKey)}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[10px] text-[#554337] uppercase tracking-wider block font-semibold">{t('act_from')}</span>
                      <span className="font-sans text-xl font-bold text-[#8f4900]">{act.price}</span>
                    </div>
                    <a
                      className="px-4 py-2 rounded-xl bg-[#f4ece8] hover:bg-[#8f4900] hover:text-white text-[#1e1b19] text-xs font-semibold transition-all border border-[#e9e1dd]"
                      href={`https://wa.me/212619017615?text=${encodeURIComponent(`Hello, I want to inquire about ${act.msg}`)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('discover')}
                    </a>
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
