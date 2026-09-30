import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import FeaturedExperience from './components/FeaturedExperience';
import RouteTimeline from './components/RouteTimeline';
import HorseRiding from './components/HorseRiding';
import MoreAdventures from './components/MoreAdventures';
import DayTours from './components/DayTours';
import SunsetGallery from './components/SunsetGallery';
import AboutUs from './components/AboutUs';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#fff8f5] text-[#1e1b19] font-sans antialiased selection:bg-[#8f4900] selection:text-white flex flex-col">
        {/* Sticky Header Navigation */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          <Hero />
          <WhyUs />
          <FeaturedExperience />
          <RouteTimeline />
          <HorseRiding />
          <MoreAdventures />
          <DayTours />
          <SunsetGallery />
          <AboutUs />
          <ContactCTA />
        </main>

        {/* Footer */}
        <Footer />
        
        {/* Fixed Floating Icons */}
        <FloatingSocials />
      </div>
    </LanguageProvider>
  );
}
