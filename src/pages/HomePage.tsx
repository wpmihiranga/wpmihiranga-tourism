import React from 'react';
import guidePortrait from '../assets/images/sri_lankan_guide_1788692590890.jpg';
import { PageType, TourPackage } from '../types';
import { tourPackages } from '../data/tours';
import { testimonials } from '../data/testimonials';
import { galleryItems } from '../data/gallery';
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  Compass,
  Shield,
  HeartHandshake,
  Sparkles,
  MapPin,
  Quote,
  Calendar,
  Users
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onSelectPackageForEnquiry: (packageTitle: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectPackageForEnquiry }) => {
  const featuredTours = tourPackages.slice(0, 4);

  const handleRequestTour = (packageTitle: string) => {
    onSelectPackageForEnquiry(packageTitle);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-page-container" className="pt-20">
      {/* 1. FULL-SCREEN CINEMATIC HERO */}
      <section
        id="hero-section"
        className="relative min-h-[92vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1E1B18]"
      >
        {/* Background Image with warm cinematic overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=85"
            alt="Scenic mountain landscape of Sri Lanka misty hills and tea terraces"
            className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient to ensure legible typography on mobile and desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B18]/90 via-[#1F1B18]/50 to-[#1F1B18]/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8">
            <Compass className="w-4 h-4 text-[#E2B188]" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-[#F3EDE6]">
              Serenity Travel • Private Sri Lanka Tours
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF8F5] leading-tight sm:leading-none max-w-4xl mx-auto">
            Discover Sri Lanka <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E8DACB]">with Serenity Travel</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#E8DFD5] max-w-2xl mx-auto font-normal leading-relaxed">
            Private journeys, authentic island experiences, and personal guidance by Mahesh.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md sm:max-w-none mx-auto">
            <button
              id="hero-primary-cta"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#9E5B32] hover:bg-[#854B27] transition-colors rounded-sm shadow-md cursor-pointer"
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={() => onNavigate('packages')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#FAF8F5] bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 transition-colors rounded-sm cursor-pointer"
            >
              <span>Explore Packages</span>
            </button>
          </div>

          {/* Key Trust Signals */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto text-xs sm:text-sm text-[#D6CBC0]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E2B188] shrink-0" />
              <span>100% Private Itineraries</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E2B188] shrink-0" />
              <span>Comfortable A/C Vehicle</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1 justify-center sm:justify-start">
              <CheckCircle2 className="w-4 h-4 text-[#E2B188] shrink-0" />
              <span>Flexible Daily Pacing</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT INTRODUCTION TO MAHESH */}
      <section id="introduction-section" className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Guide Portrait Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-4/5 rounded-xs overflow-hidden shadow-md bg-[#EBE4DA]">
                  <img
                    src={guidePortrait}
                    alt="Mahesh - Independent Sri Lankan Private Tour Guide"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Visual Accent Badge */}
                <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#2C2723] text-white p-5 rounded-xs shadow-lg max-w-[240px] border border-[#3E3832]">
                  <span className="text-[11px] uppercase tracking-wider text-[#D48B55] font-semibold block">
                    Experience
                  </span>
                  <p className="text-sm font-serif font-bold text-white mt-1">
                    [Years of Experience]
                  </p>
                  <p className="text-xs text-[#B8AEA3] mt-0.5">
                    Guiding international travellers & French guests
                  </p>
                </div>
              </div>
            </div>

            {/* Introduction Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#9E5B32]">
                  Meet Your Guide
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2723] leading-tight">
                  Ayubowan. I am Mahesh, your private guide & chauffeur in Sri Lanka.
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#524941] leading-relaxed">
                Sri Lanka is an island of extraordinary contrast: mist-shrouded tea hills, sacred ancient kingdoms, pristine Indian Ocean coastlines, and untamed national parks. With Serenity Travel, you are not following a rigid bus tour; you are experiencing the warmth, rhythm, and hospitality of Sri Lanka as a welcome guest.
              </p>

              <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
                Whether you are a couple seeking quiet secluded spots, a family travelling with curious children, or independent wanderers wanting deep cultural discussions, I personally arrange and drive your entire journey with flexibility, comfort, and safety at heart.
              </p>

              {/* Guide Highlights Grid */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#3E3630]">
                <div className="p-3.5 bg-[#F2EDE5] rounded-xs border border-[#E4DCD0]">
                  <span className="text-xs font-semibold text-[#874A25] block mb-1">
                    Spoken Languages
                  </span>
                  <span className="font-medium text-[#2C2723]">[Languages Spoken]</span>
                </div>
                <div className="p-3.5 bg-[#F2EDE5] rounded-xs border border-[#E4DCD0]">
                  <span className="text-xs font-semibold text-[#874A25] block mb-1">
                    Accreditation
                  </span>
                  <span className="font-medium text-[#2C2723]">[Certification]</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  id="intro-meet-guide-cta"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-[#2C2723] bg-white border border-[#2C2723] hover:bg-[#2C2723] hover:text-white transition-colors duration-200 rounded-sm cursor-pointer shadow-2xs"
                >
                  <span>Meet Mahesh & Read His Story</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <span className="text-xs text-[#7B7167]">
                  Discover Mahesh's philosophy and touring style
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY TRAVEL WITH SERENITY TRAVEL */}
      <section id="why-choose-section" className="py-20 sm:py-24 bg-[#F2EDE5] border-y border-[#E5DDD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9E5B32]">
              The Private Advantage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2723]">
              Why Choose Serenity Travel
            </h2>
            <p className="text-base text-[#61574E] leading-relaxed">
              With Mahesh as your dedicated guide, experience the difference between a generic tour bus and a personal, unhurried journey shaped around your pace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Reason 1 */}
            <div className="bg-[#FAF8F5] p-8 rounded-xs border border-[#E2DAD0] shadow-2xs space-y-4 hover:border-[#9E5B32]/40 transition-colors">
              <div className="w-12 h-12 rounded-sm bg-[#F0E8DD] flex items-center justify-center text-[#9E5B32]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2C2723]">
                Local Knowledge
              </h3>
              <p className="text-sm text-[#61574E] leading-relaxed">
                Discover uncrowded temple viewpoints, authentic family-run clay pot dining, and stories that guidebooks never mention.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-[#FAF8F5] p-8 rounded-xs border border-[#E2DAD0] shadow-2xs space-y-4 hover:border-[#9E5B32]/40 transition-colors">
              <div className="w-12 h-12 rounded-sm bg-[#F0E8DD] flex items-center justify-center text-[#9E5B32]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2C2723]">
                Private & Personal
              </h3>
              <p className="text-sm text-[#61574E] leading-relaxed">
                Dedicated exclusively to your party in a clean, modern air-conditioned vehicle. No strangers, no rushed group schedules.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-[#FAF8F5] p-8 rounded-xs border border-[#E2DAD0] shadow-2xs space-y-4 hover:border-[#9E5B32]/40 transition-colors">
              <div className="w-12 h-12 rounded-sm bg-[#F0E8DD] flex items-center justify-center text-[#9E5B32]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2C2723]">
                Authentic Experiences
              </h3>
              <p className="text-sm text-[#61574E] leading-relaxed">
                Taste warm king coconuts picked on country roads, meet traditional cinnamon peelers, and connect meaningfully with locals.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-[#FAF8F5] p-8 rounded-xs border border-[#E2DAD0] shadow-2xs space-y-4 hover:border-[#9E5B32]/40 transition-colors">
              <div className="w-12 h-12 rounded-sm bg-[#F0E8DD] flex items-center justify-center text-[#9E5B32]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2C2723]">
                Flexible Itineraries
              </h3>
              <p className="text-sm text-[#61574E] leading-relaxed">
                Linger longer when an elephant herd crosses the road or take a spontaneous chai break. Your schedule adapts to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED TOUR PACKAGES */}
      <section id="featured-packages-section" className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#9E5B32]">
                Signature Private Journeys
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2723]">
                Featured Tour Packages
              </h2>
              <p className="text-base text-[#61574E]">
                Every package is a sample itinerary that can be tailored precisely to your flight timings, interests, and preferred pace.
              </p>
            </div>

            <button
              id="view-all-packages-top-btn"
              onClick={() => onNavigate('packages')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#9E5B32] hover:text-[#2C2723] transition-colors group cursor-pointer"
            >
              <span>Explore All Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {featuredTours.map((tour) => (
              <div
                key={tour.id}
                id={`featured-tour-card-${tour.id}`}
                className="bg-white rounded-xs border border-[#E5DDD2] overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-[#E2D9CE]">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#2C2723]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-2xs flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#E2B188]" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[11px] uppercase tracking-wider text-[#8A512C] font-semibold">
                        {tour.idealFor}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#2C2723]">
                        {tour.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#5B5249] leading-relaxed line-clamp-3">
                      {tour.summary}
                    </p>

                    <div className="pt-2 border-t border-[#F0EAE2] space-y-2">
                      <span className="text-xs font-semibold text-[#3C342E] block">
                        Trip Highlights:
                      </span>
                      <ul className="text-xs text-[#635950] space-y-1.5">
                        {tour.highlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9E5B32] shrink-0 mt-1.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[#F2EDE7] mt-4">
                  <div className="text-xs text-[#7A7066]">
                    <span className="font-medium text-[#2C2723] block">Price on request</span>
                    <span>Personalised quote based on season</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleRequestTour(tour.title)}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-[#2C2723] hover:bg-[#9E5B32] transition-colors rounded-sm cursor-pointer whitespace-nowrap"
                    >
                      <span>Request This Tour</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom All Packages CTA */}
          <div className="mt-14 text-center">
            <button
              id="view-all-packages-bottom-btn"
              onClick={() => onNavigate('packages')}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-[#2C2723] bg-[#F2EDE5] hover:bg-[#E8DFC2] border border-[#D8CFC3] transition-colors rounded-sm cursor-pointer"
            >
              <span>Explore All 6 Private Tour Packages</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. SRI LANKA PHOTOGRAPHY SECTION */}
      <section id="photography-gallery-section" className="py-20 sm:py-28 bg-[#231F1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#E2B188]">
              Island Wonders
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              The Living Landscapes of Sri Lanka
            </h2>
            <p className="text-sm sm:text-base text-[#CDC2B6] leading-relaxed">
              From misty mountain tea ridges to sunlit tropical shores and ancient rock monuments, travel through an island of timeless charm.
            </p>
          </div>

          {/* Editorial Asymmetrical Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.slice(0, 6).map((item, index) => (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                className={`group relative overflow-hidden rounded-xs bg-[#2F2925] border border-[#3E3731] ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-16/10' : 'aspect-4/3'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B18]/90 via-[#1F1B18]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#E2B188] bg-black/40 px-2 py-0.5 rounded-2xs">
                      {item.category}
                    </span>
                    <span className="text-xs text-[#BDB2A6]">{item.location}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#D8CFC4] line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-[#A89D91] italic">
              All photographic locations featured are regular destinations on Serenity Travel's private tours guided by Mahesh.
            </p>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section id="testimonials-section" className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0E8DD] text-[#8A512C] text-xs font-semibold uppercase tracking-wide">
              <span>Verified Traveller Feedback</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2723]">
              What Travellers Say About Us & Guide Mahesh
            </h2>
            <p className="text-sm sm:text-base text-[#61574E] leading-relaxed">
              Real reflections from couples, families, and solo travellers who explored Sri Lanka with Serenity Travel and Mahesh.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                id={`testimonial-card-${test.id}`}
                className="bg-white p-8 rounded-xs border border-[#E5DDD2] shadow-2xs flex flex-col justify-between relative hover:border-[#9E5B32]/30 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[#9E5B32]">
                    <Quote className="w-8 h-8 opacity-40" />
                    <span className="text-[11px] font-mono text-[#8C8075] bg-[#F2EDE5] px-2 py-0.5 rounded-2xs">
                      {test.note}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#4D453D] italic leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[#F0E9E0] mt-6 space-y-1">
                  <div className="font-serif font-bold text-base text-[#2C2723]">
                    {test.author}
                  </div>
                  <div className="text-xs text-[#73685E] flex items-center justify-between">
                    <span>{test.country} • {test.travelerType}</span>
                    <span className="text-[#9E5B32] font-medium">{test.year}</span>
                  </div>
                  <div className="text-[11px] text-[#8C8075] font-medium pt-1">
                    Trip: {test.tourName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CONTACT CTA */}
      <section id="final-cta-section" className="py-20 sm:py-28 bg-[#F0EAE1] border-t border-[#E2DAD0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#9E5B32]">
            Begin Your Adventure
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2C2723] leading-tight">
            Let's Create Your Sri Lankan Journey
          </h2>
          <p className="text-base sm:text-lg text-[#5B5046] max-w-2xl mx-auto leading-relaxed">
            Whether you already have a detailed list of places you wish to visit or simply want expert local guidance on crafting the ideal route, Serenity Travel and guide Mahesh are ready to help you plan an unforgettable private journey.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="final-cta-plan-trip-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-base font-semibold text-white bg-[#2C2723] hover:bg-[#9E5B32] transition-colors rounded-sm shadow-md cursor-pointer"
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <button
              id="final-cta-about-guide-btn"
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#2C2723] bg-white hover:bg-[#FAF8F5] border border-[#2C2723]/30 transition-colors rounded-sm cursor-pointer"
            >
              <span>About Us & Guide</span>
            </button>
          </div>

          <div className="pt-4 text-xs text-[#7A6F64]">
            <span>Personal consultation • No obligation • Direct reply within 24 hours</span>
          </div>
        </div>
      </section>
    </div>
  );
};
