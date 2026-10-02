import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const plans = [
  {
    key: "standard",
    icon: "local_cafe",
    badge: null,
    accentClass: "border border-[#e9e1dd]",
    priceColor: "text-[#8f4900]",
    badgeBg: "",
    btnClass:
      "bg-[#f4ece8] hover:bg-[#eee7e3] text-[#1e1b19] border border-[#e9e1dd]",
    cardBg: "bg-white",
    glowClass: "",
    titleKey: "pricing_standard_title",
    subKey: "pricing_standard_sub",
    priceKey: "pricing_standard_price",
    descKey: "pricing_standard_desc",
    featureKeys: ["pricing_standard_f1", "pricing_standard_f2", "pricing_standard_f3"],
    btnKey: "pricing_standard_btn",
    iconDone: "done",
    waText: "Hello%2C%20I%20am%20interested%20in%20the%20Standard%20Camel%20Ride",
  },
  {
    key: "sunset",
    icon: "dinner_dining",
    badge: "pricing_popular_badge",
    accentClass: "border-2 border-[#9e421f]",
    priceColor: "text-[#9e421f]",
    badgeBg: "bg-[#9e421f]",
    btnClass: "bg-[#9e421f] hover:bg-[#742402] text-white",
    cardBg: "bg-white",
    glowClass: "shadow-[0_16px_48px_-4px_rgba(194,106,24,0.22)]",
    titleKey: "pricing_sunset_title",
    subKey: "pricing_sunset_sub",
    priceKey: "pricing_sunset_price",
    descKey: "pricing_sunset_desc",
    featureKeys: ["pricing_sunset_f1", "pricing_sunset_f2", "pricing_sunset_f3"],
    btnKey: "pricing_sunset_btn",
    iconDone: "done_all",
    waText: "Hello%2C%20I%20am%20interested%20in%20the%20Sunset%20Camel%20Ride%20with%20BBQ%20Dinner",
  },
  {
    key: "combo",
    icon: "two_wheeler",
    badge: null,
    accentClass: "border border-[#e9e1dd]",
    priceColor: "text-[#8f4900]",
    badgeBg: "",
    btnClass: "bg-[#f4ece8] hover:bg-[#eee7e3] text-[#1e1b19] border border-[#e9e1dd]",
    cardBg: "bg-white",
    glowClass: "",
    titleKey: "pricing_combo_title",
    subKey: "pricing_combo_sub",
    priceKey: "pricing_combo_price",
    descKey: "pricing_combo_desc",
    featureKeys: ["pricing_combo_f1", "pricing_combo_f2", "pricing_combo_f3"],
    btnKey: "pricing_combo_btn",
    iconDone: "done",
    waText: "Hello%2C%20I%20am%20interested%20in%20the%20Combined%20Quad%20%2B%20Camel%20Adventure",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PricingPlans() {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="pricing" className="w-full relative overflow-hidden py-20 sm:py-28">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,210,170,0.28) 0%, transparent 70%), #fff8f5",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdcc5] text-[#301400] text-xs uppercase tracking-widest font-semibold">
            <span className="material-symbols-outlined text-[16px] text-[#8f4900]">sell</span>
            {t("pricing_badge")}
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1e1b19] tracking-tight leading-tight">
            {t("pricing_title")}
          </h2>

          <p className="text-[#554337] text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            {t("pricing_desc")}
          </p>

          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4916b]" />
            <span className="material-symbols-outlined text-[#9e421f] text-[18px]">pets</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4916b]" />
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.key}
              variants={cardVariants}
              onMouseEnter={() => setHovered(plan.key)}
              onMouseLeave={() => setHovered(null)}
              className={`relative rounded-2xl ${plan.cardBg} ${plan.accentClass} ${plan.glowClass} transition-all duration-300 overflow-hidden flex flex-col`}
              style={{
                transform: hovered === plan.key ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  hovered === plan.key
                    ? plan.key === "sunset"
                      ? "0 24px 60px -6px rgba(194,106,24,0.30)"
                      : "0 20px 50px -6px rgba(100,40,10,0.12)"
                    : plan.key === "sunset"
                    ? "0 16px 48px -4px rgba(194,106,24,0.22)"
                    : "0 4px 20px -2px rgba(180,83,9,0.07)",
              }}
            >
              {plan.badge && (
                <div
                  className={`absolute top-0 right-0 ${plan.badgeBg} text-white px-4 py-1 rounded-bl-xl text-[10px] sm:text-xs uppercase tracking-wider font-bold shadow-md`}
                >
                  {t(plan.badge)}
                </div>
              )}

              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{
                  background:
                    plan.key === "sunset"
                      ? "linear-gradient(90deg, #9e421f, #e86a2a, #9e421f)"
                      : "linear-gradient(90deg, #c9a07a, #8f4900, #c9a07a)",
                }}
              />

              <div className="p-7 flex flex-col flex-1 space-y-5">
                {/* Icon */}
                <div className="space-y-2">
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${
                      plan.key === "sunset" ? "bg-[#9e421f] text-white" : "bg-[#f4ece8] text-[#8f4900]"
                    } shadow-sm`}
                  >
                    <span className="material-symbols-outlined text-[22px]">{plan.icon}</span>
                  </div>

                  <span
                    className={`text-xs font-semibold uppercase tracking-wider block ${
                      plan.key === "sunset" ? "text-[#9e421f]" : "text-[#554337]"
                    }`}
                  >
                    {t(plan.subKey)}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#1e1b19] leading-snug">
                    {t(plan.titleKey)}
                  </h3>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 pb-1">
                  <span className={`font-sans text-3xl sm:text-4xl font-extrabold ${plan.priceColor} tracking-tight`}>
                    {t(plan.priceKey)}
                  </span>
                  <span className="text-xs text-[#554337] font-medium">{t("pricing_per_adult")}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#554337] font-light leading-relaxed border-t border-[#ede7e3] pt-4">
                  {t(plan.descKey)}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  {plan.featureKeys.map((fk, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className={`material-symbols-outlined text-[18px] mt-0.5 ${
                          plan.key === "sunset" ? "text-[#9e421f]" : "text-[#8f4900]"
                        }`}
                      >
                        {plan.iconDone}
                      </span>
                      <span className="text-sm text-[#1e1b19]">{t(fk)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/212619017615?text=${plan.waText}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-sm ${plan.btnClass}`}
                >
                  <span>{t(plan.btnKey)}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#554337]"
        >
          {[
            { icon: "verified", text: t("pricing_trust_1") },
            { icon: "currency_exchange", text: t("pricing_trust_2") },
            { icon: "directions_car", text: t("pricing_trust_3") },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#8f4900] text-[17px]">{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
