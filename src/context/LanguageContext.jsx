import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Header
    nav_home: "HOME",
    nav_experiences: "EXPERIENCES",
    nav_activities: "ACTIVITIES",
    nav_tours: "TOURS",
    nav_gallery: "GALLERY",
    nav_about: "ABOUT US",
    nav_contact: "CONTACT",
    book_experience: "BOOK EXPERIENCE",

    // Hero
    hero_badge: "Moroccan Desert & Coastal Adventures",
    hero_title_1: "EXPERIENCE AGADIR",
    hero_title_2: "DIFFERENTLY",
    hero_desc: "Authentic camel rides, ocean sunset adventures, and coastal equestrian trails. Glide through eucalyptus groves and estuary dunes under Morocco's golden hour.",
    hero_chip_1: "Camel Experiences",
    hero_chip_2: "Horse Riding",
    hero_chip_3: "Atlantic Sunset",
    hero_chip_4: "Souss Valley Tours",
    hero_chip_5: "Desert Safaris",
    btn_book: "BOOK YOUR EXPERIENCE",
    btn_explore: "EXPLORE ACTIVITIES",

    // Booking Form
    form_adventure: "Choose Adventure",
    form_date: "Select Date",
    form_travelers: "Travelers",
    btn_check_availability: "Check Availability",
    person_1: "1 Person (Private or Group)",
    person_2: "2 Travelers",
    person_3: "3 Travelers",
    person_4: "4 Travelers",
    person_5: "Family Group (5+)",

    // Why Us
    why_badge: "The Trusted Agadir Difference",
    why_title: "WHY TRAVELERS LOVE AGADIR CAMEL EXPERIENCE",
    why_desc: "Curated desert encounters with genuine Berber warmth, reliable hotel door-to-door transit, and no hidden surprises.",
    pillar_1_title: "Authentic Experiences",
    pillar_1_desc: "True Berber hospitality, traditional handcrafted leather saddles, and scenic uncrowded trails along coastal dunes and the serene Souss River.",
    pillar_1_tag: "Berber Heritage",
    pillar_2_title: "Hotel Pickup Included",
    pillar_2_desc: "Complimentary air-conditioned transfer directly from your Agadir or Taghazout hotel reception, returning you safely right after the ride.",
    pillar_2_tag: "Agadir & Taghazout",
    pillar_3_title: "Friendly Local Team",
    pillar_3_desc: "Experienced, multilingual camel handlers who treat travelers like family, capturing photos and sharing stories of the Souss region.",
    pillar_3_tag: "Local Guides",
    pillar_4_title: "Unforgettable Sunsets",
    pillar_4_desc: "Carefully timed departures that place you beside the Atlantic dunes exactly when the sky blushes amber, rose, and burnished gold.",
    pillar_4_tag: "Golden Hour",

    // Featured Experience
    iconic_badge: "Most Iconic Journey",
    camel_sunset_title: "CAMEL SUNSET EXPERIENCE",
    camel_sunset_desc: "Embark on our signature 2-hour coastal odyssey. You will gentle-trot through the aromatic eucalyptus forest, trace the outer perimeter of the Moroccan Royal Palace and manicured fairways, before breaking through the rolling sand dunes of the Souss River estuary where migratory pink flamingos congregate in the setting sun.",
    feat_1: "Free Agadir & Taghazout Pickups",
    feat_2: "Eucalyptus & Beach Sand Dunes",
    feat_3: "Flamingo Sanctuary at River Souss",
    feat_4: "Moroccan Mint Tea & Sweet Biscuits",
    no_prepayment: "No prepayment required • Pay on pickup",
    discover_exp: "DISCOVER THE EXPERIENCE",
    package_10_title: "2 Hours Ride",
    package_10_sub: "Sunset Standard",
    package_10_desc: "Full 2-hour guided camel sunset journey without dinner. Ideal for couples, solo travelers, and light afternoon itineraries.",
    select_10: "Select €10 Package",
    package_15_title: "2 Hours + Moroccan Dinner",
    package_15_sub: "Gourmet Sunset & Feast",
    package_15_desc: "Our premier evening. Full 2-hour sunset trek followed by an authentic Moroccan chicken/meat tagine dinner, fresh bread, and seasonal fruits under the Berber tent.",
    select_15: "Select €15 Dinner Package",
    most_popular: "MOST POPULAR",

    // Route Timeline
    timeline_badge: "The 8-Step Itinerary",
    timeline_title: "HOW YOUR SUNSET JOURNEY UNFOLDS",
    timeline_desc: "Every minute is planned so you relax, savor the coastal air, and capture stunning portraits.",

    // Horse Riding
    horse_badge: "Coastal Equestrian Excursions",
    horse_title: "HORSE RIDING IN AGADIR",
    horse_desc: "Experience the thrill of riding spirited yet calm Arabian-Barb horses through sandy trails, fragrant eucalyptus woods, and open ocean shorelines. Whether you are stepping onto a stirrup for the first time or longing to gallop down Moroccan sands, our equestrian masters tailor every stride.",
    safety_first: "Safety First",
    safety_desc: "Helmets & safety briefing for every guest.",
    purebred: "Purebred Horses",
    purebred_desc: "Well-cared-for, responsive Moroccan steeds.",
    guide_escort: "Guide Escort",
    guide_desc: "Dedicated escort riding alongside you.",
    horse_10: "2 Hours Horse Riding",
    horse_15: "2 Hours + Tagine Dinner",
    book_for_10: "Book for €10",
    book_for_15: "Book for €15",

    // More Adventures
    adv_badge: "Agadir Thrills & Water",
    adv_title: "MORE OUTDOOR ADVENTURES",
    adv_desc: "Combine your camel sunset with quad biking adrenaline, Taghazout surf breaks, or scenic ocean boat excursions.",
    custom_pkg: "Need custom multi-activity packages? Call us",
    discover: "Discover",

    // Day Tours
    tours_badge: "Full & Half-Day Day Trips",
    tours_title: "DISCOVER MOROCCO — TOURS & EXCURSIONS",
    tours_desc: "Step beyond Agadir. Venture to emerald mountain pools, red sandstone sea arches, and ancient walled medinas.",
    reserve_tour: "Reserve Tour →",

    // Gallery & Contact
    gallery_badge: "Real Guests, Real Magic",
    gallery_title: "SUNSET GALLERY PREVIEW",
    insta_follow: "Follow @AgadirCamelExperience",
    instant_confirm: "Instant Confirmation",
    ready_title: "READY FOR YOUR AGADIR ADVENTURE?",
    ready_desc: "Reserve in 2 minutes. No advance payment required — pay comfortably on pickup. Call, WhatsApp, or request pickup right here.",
    book_whatsapp: "BOOK NOW VIA WHATSAPP",
    book_online: "BOOK ONLINE FORM",
    daily_ops: "Daily Operations: 7:00 AM - 9:00 PM",
    call_desk: "Call Desk",
    whatsapp_chat: "WhatsApp Chat"
  },
  fr: {
    // Header
    nav_home: "ACCUEIL",
    nav_experiences: "EXPÉRIENCES",
    nav_activities: "ACTIVITÉS",
    nav_tours: "EXCURSIONS",
    nav_gallery: "GALERIE",
    nav_about: "À PROPOS",
    nav_contact: "CONTACT",
    book_experience: "RÉSERVER",

    // Hero
    hero_badge: "Aventures Désert & Littoral Marocain",
    hero_title_1: "VIVEZ AGADIR",
    hero_title_2: "DIFFÉREMMENT",
    hero_desc: "Balades authentiques à dos de chameau, couchers de soleil sur l'océan et promenades équestres. Glissez à travers les forêts d'eucalyptus et les dunes pendant l'heure dorée du Maroc.",
    hero_chip_1: "Expériences Chameau",
    hero_chip_2: "Équitation",
    hero_chip_3: "Coucher de soleil Atlantique",
    hero_chip_4: "Tours Vallée du Souss",
    hero_chip_5: "Safaris Désert",
    btn_book: "RÉSERVEZ VOTRE EXPÉRIENCE",
    btn_explore: "EXPLORER LES ACTIVITÉS",

    // Booking Form
    form_adventure: "Choisir l'aventure",
    form_date: "Sélectionner la date",
    form_travelers: "Voyageurs",
    btn_check_availability: "Vérifier la disponibilité",
    person_1: "1 Personne (Privé ou Groupe)",
    person_2: "2 Voyageurs",
    person_3: "3 Voyageurs",
    person_4: "4 Voyageurs",
    person_5: "Groupe Familial (5+)",

    // Why Us
    why_badge: "La différence de confiance Agadir",
    why_title: "POURQUOI LES VOYAGEURS ADORENT AGADIR CAMEL EXPERIENCE",
    why_desc: "Des rencontres désertiques authentiques avec la vraie chaleur berbère, un transport porte-à-porte fiable et sans aucune mauvaise surprise.",
    pillar_1_title: "Expériences Authentiques",
    pillar_1_desc: "Hospitalité berbère authentique, selles traditionnelles en cuir faites à la main et sentiers calmes le long des dunes côtières et de la rivière Souss.",
    pillar_1_tag: "Héritage Berbère",
    pillar_2_title: "Transfert Hôtel Inclus",
    pillar_2_desc: "Transfert gratuit en van climatisé depuis la réception de votre hôtel à Agadir ou Taghazout, retour sécurisé juste après la balade.",
    pillar_2_tag: "Agadir & Taghazout",
    pillar_3_title: "Équipe Locale Chaleureuse",
    pillar_3_desc: "Chameliers locaux expérimentés et multilingues qui vous accueillent comme en famille, prennent des photos et partagent des anecdotes.",
    pillar_3_tag: "Guides Locaux",
    pillar_4_title: "Couchers de Soleil Inoubliables",
    pillar_4_desc: "Des départs soigneusement planifiés pour vous placer devant les dunes atlantiques exactement quand le ciel se teinte d'ambre et d'or.",
    pillar_4_tag: "Heure Dorée",

    // Featured Experience
    iconic_badge: "Le Parcours le Plus Iconique",
    camel_sunset_title: "EXPÉRIENCE CHAMEAU AU COUCHER DU SOLEIL",
    camel_sunset_desc: "Embarquez pour notre odyssée côtière de 2 heures. Vous traverserez doucement la forêt d'eucalyptus parfumée, longez le Palais Royal et les greens du golf, avant d'atteindre les dunes de l'estuaire du Souss où se rassemblent les flamants roses au coucher du soleil.",
    feat_1: "Transfert Gratuit Agadir & Taghazout",
    feat_2: "Forêt d'Eucalyptus & Dunes de Plage",
    feat_3: "Santuaires de Flamants Roses au Souss",
    feat_4: "Thé à la Menthe & Biscuits Marocains",
    no_prepayment: "Aucun prépaiement requis • Payez au ramassage",
    discover_exp: "DÉCOUVRIR L'EXPÉRIENCE",
    package_10_title: "Balade 2 Heures",
    package_10_sub: "Coucher de soleil Standard",
    package_10_desc: "Circuit guidé complet de 2h à dos de chameau sans dîner. Idéal pour les couples, voyageurs solos et itinéraires légers.",
    select_10: "Choisir l'offre €10",
    package_15_title: "2h + Dîner Marocain",
    package_15_sub: "Coucher de soleil & Festin",
    package_15_desc: "Notre soirée vedette. 2 heures de balade suivies d'un dîner tajine marocain authentique (poulet/viande), pain frais et fruits sous tente berbère.",
    select_15: "Choisir l'offre €15 Dîner",
    most_popular: "LE PLUS POPULAIRE",

    // Route Timeline
    timeline_badge: "Itinéraire en 8 Étapes",
    timeline_title: "DÉROULEMENT DE VOTRE EXPÉRIENCE",
    timeline_desc: "Chaque minute est organisée pour vous détendre, savourer l'air marin et capturer de superbes photos.",

    // Horse Riding
    horse_badge: "Excursions Équestres Côtières",
    horse_title: "ÉQUITATION À AGADIR",
    horse_desc: "Ressentez la sensation de monter des chevaux barbe-arabes énergiques mais dociles à travers les dunes, la forêt d'eucalyptus et la plage. Que ce soit votre première fois ou que vous souhaitiez galoper sur les sables marocains, nos moniteurs adaptent la balade.",
    safety_first: "Sécurité Avant Tout",
    safety_desc: "Casques et briefing de sécurité pour tous.",
    purebred: "Chevaux de Race",
    purebred_desc: "Chevaux marocains bien soignés et attentifs.",
    guide_escort: "Accompagnement Guide",
    guide_desc: "Un guide dédié chevauche à vos côtés.",
    horse_10: "2 Heures Équitation",
    horse_15: "2 Heures + Dîner Tajine",
    book_for_10: "Réserver pour €10",
    book_for_15: "Réserver pour €15",

    // More Adventures
    adv_badge: "Sensations & Ocean Agadir",
    adv_title: "PLUS D'AVENTURES EN PLEIN AIR",
    adv_desc: "Combinez votre coucher de soleil à chameau avec le quad dans les dunes, le surf à Taghazout ou une balade en bateau.",
    custom_pkg: "Besoin d'un package multi-activités personnalisé ? Appelez-nous",
    discover: "Découvrir",

    // Day Tours
    tours_badge: "Excursions d'une Journée ou Demi-Journée",
    tours_title: "DÉCOUVREZ LE MAROC — TOURS & EXCURSIONS",
    tours_desc: "Allez au-delà d'Agadir. Explorez les piscines naturelles de montagne, les arches de grès rouge et les médinas historiques.",
    reserve_tour: "Réserver Excursion →",

    // Gallery & Contact
    gallery_badge: "Vrais Clients, Vraie Magie",
    gallery_title: "APERÇU DE LA GALERIE",
    insta_follow: "Suivre @AgadirCamelExperience",
    instant_confirm: "Confirmation Immédiate",
    ready_title: "PRÊT POUR VOTRE AVENTURE À AGADIR ?",
    ready_desc: "Réservez en 2 minutes. Aucun paiement d'avance requis — payez directement au ramassage. Appelez ou envoyez un message WhatsApp.",
    book_whatsapp: "RÉSERVER VIA WHATSAPP",
    book_online: "FORMULAIRE EN LIGNE",
    daily_ops: "Service client : 7h00 - 21h00",
    call_desk: "Appeler",
    whatsapp_chat: "Chat WhatsApp"
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  const t = (key) => {
    return translations[lang][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
