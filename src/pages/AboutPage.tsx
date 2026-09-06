import React from 'react';
import guidePortrait from '../assets/images/sri_lankan_guide_1788692590890.jpg';
import { PageType } from '../types';
import {
  Compass,
  CheckCircle2,
  Heart,
  Shield,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  Car,
  UserCheck
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const regionsCovered = [
    {
      name: 'The Cultural Triangle',
      desc: 'Sigiriya, Anuradhapura, Polonnaruwa, Dambulla Cave Temples, and Mihintale.',
      highlight: 'Sacred history & ancient engineering'
    },
    {
      name: 'The Central Hill Country',
      desc: 'Kandy, Nuwara Eliya, Ella, Horton Plains, tea factories, and mountain passes.',
      highlight: 'Cool climates & scenic rail trails'
    },
    {
      name: 'Southern & Southwestern Coast',
      desc: 'Galle Dutch Fort, Mirissa, Weligama, Bentota, Tangalle, and tranquil coves.',
      highlight: 'Colonial heritage & palm-fringed bays'
    },
    {
      name: 'National Parks & Wildlife Sanctuaries',
      desc: 'Yala, Udawalawe, Wilpattu, Minneriya elephant gatherings, and Bundala.',
      highlight: 'Wild elephants, leopards & birdlife'
    },
    {
      name: 'Colombo & Western Gateway',
      desc: 'Negombo coastal fishing lagoon, Colombo colonial architecture, and airport transfers.',
      highlight: 'Smooth arrivals & island departures'
    },
    {
      name: 'Eastern Shore & Marine Escapes',
      desc: 'Trincomalee, Pasikudah, and Pigeon Island marine sanctuary (seasonal).',
      highlight: 'Calm summer waters & coral reefs'
    }
  ];

  return (
    <div id="about-page-container" className="pt-20 bg-[#FAF8F5]">
      {/* Editorial Header / Hero */}
      <section className="relative py-16 sm:py-24 bg-[#F2EDE5] border-b border-[#E5DDD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9E5B32]">
              About Serenity Travel & Your Guide
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#2C2723] leading-tight">
              About Serenity Travel
            </h1>
            <p className="text-lg sm:text-xl text-[#594E44] leading-relaxed">
              Tailored private Sri Lanka journeys crafted with care, and personally guided by independent chauffeur guide Mahesh.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Introduction Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Guide Profile & Key Credentials */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-4/5 rounded-xs overflow-hidden shadow-md bg-[#E8E1D7]">
                <img
                  src={guidePortrait}
                  alt="Mahesh - Professional Sri Lankan Tour Guide"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Official Credentials Box */}
              <div className="p-6 bg-white rounded-xs border border-[#E5DDD2] shadow-2xs space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#2C2723] border-b border-[#F0EAE2] pb-3">
                  Service & Guide Profile
                </h3>

                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-xs text-[#8A7E73] uppercase tracking-wider font-semibold">
                      Service:
                    </dt>
                    <dd className="font-medium text-[#2C2723]">Serenity Travel</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#8A7E73] uppercase tracking-wider font-semibold">
                      Lead Chauffeur Guide:
                    </dt>
                    <dd className="font-medium text-[#2C2723]">Mahesh</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#8A7E73] uppercase tracking-wider font-semibold">
                      Experience:
                    </dt>
                    <dd className="font-medium text-[#2C2723]">[Years of Experience]</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#8A7E73] uppercase tracking-wider font-semibold">
                      Spoken Languages:
                    </dt>
                    <dd className="font-medium text-[#2C2723]">[Languages Spoken]</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#8A7E73] uppercase tracking-wider font-semibold">
                      Professional Certification:
                    </dt>
                    <dd className="font-medium text-[#2C2723]">[Certification]</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#8A7E73] uppercase tracking-wider font-semibold">
                      Service Base:
                    </dt>
                    <dd className="font-medium text-[#2C2723]">[Location] (All regions covered)</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#8A7E73] uppercase tracking-wider font-semibold">
                      Vehicle Standard:
                    </dt>
                    <dd className="font-medium text-[#2C2723]">
                      Dedicated Private Air-Conditioned Vehicle (Licensed & Fully Insured)
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Mahesh's Story and Philosophy */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#9E5B32]">
                  The Personal Story
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2723]">
                  A Passion for Sharing the Spirit of Sri Lanka
                </h2>
                <p className="text-base sm:text-lg text-[#524941] leading-relaxed">
                  Ayubowan. Growing up surrounded by Sri Lanka’s lush nature and historic temple towns, I discovered early on that what makes our island truly unforgettable is not just its monuments, but the genuine warmth of its people and the quiet moments between destinations.
                </p>
                <p className="text-base text-[#61574E] leading-relaxed">
                  Over [Years of Experience] of guiding international visitors—including many couples, solo travellers, and families from France, Switzerland, and Belgium—I founded Serenity Travel to offer an approach centered on deep respect, absolute comfort, and genuine local encounters.
                </p>
              </div>

              {/* Mahesh's Approach to Tourism */}
              <div className="space-y-4 pt-4 border-t border-[#E8E2D9]">
                <h3 className="font-serif text-2xl font-bold text-[#2C2723]">
                  Our Guiding Principles with Mahesh
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xs border border-[#E5DDD2] space-y-2">
                    <div className="flex items-center gap-2 text-[#9E5B32]">
                      <Compass className="w-5 h-5" />
                      <h4 className="font-semibold text-sm text-[#2C2723]">Unhurried Pace</h4>
                    </div>
                    <p className="text-xs text-[#63584E] leading-relaxed">
                      Travel without feeling rushed. We take time to absorb the beauty, enjoy leisurely meals, and stop for spontaneous discoveries.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xs border border-[#E5DDD2] space-y-2">
                    <div className="flex items-center gap-2 text-[#9E5B32]">
                      <Heart className="w-5 h-5" />
                      <h4 className="font-semibold text-sm text-[#2C2723]">Cultural Respect</h4>
                    </div>
                    <p className="text-xs text-[#63584E] leading-relaxed">
                      Receive gentle guidance on temple etiquette, traditions, and local customs so you feel welcome everywhere you visit.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xs border border-[#E5DDD2] space-y-2">
                    <div className="flex items-center gap-2 text-[#9E5B32]">
                      <Car className="w-5 h-5" />
                      <h4 className="font-semibold text-sm text-[#2C2723]">Safety & Driving Comfort</h4>
                    </div>
                    <p className="text-xs text-[#63584E] leading-relaxed">
                      Sri Lankan mountain roads require experienced, defensive driving. You can rest assured in a spotless, quiet vehicle.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xs border border-[#E5DDD2] space-y-2">
                    <div className="flex items-center gap-2 text-[#9E5B32]">
                      <UserCheck className="w-5 h-5" />
                      <h4 className="font-semibold text-sm text-[#2C2723]">Direct Relationship</h4>
                    </div>
                    <p className="text-xs text-[#63584E] leading-relaxed">
                      The person who plans your journey with you is the exact same guide who meets you at the airport and accompanies you throughout.
                    </p>
                  </div>
                </div>
              </div>

              {/* Callout quote */}
              <div className="p-6 bg-[#F2ECE3] border-l-4 border-[#9E5B32] rounded-r-xs">
                <p className="font-serif italic text-base sm:text-lg text-[#3D352F]">
                  "My goal is not merely to show you our monuments, but to ensure that when you return home, you carry the serenity, tastes, and genuine smile of Sri Lanka with you forever."
                </p>
                <p className="text-xs font-semibold text-[#874A25] mt-2 uppercase tracking-wider">
                  — Mahesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Sri Lanka Covered */}
      <section className="py-16 sm:py-24 bg-[#F2EDE5] border-y border-[#E5DDD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9E5B32]">
              Island-Wide Reach
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2723]">
              Areas of Sri Lanka Covered
            </h2>
            <p className="text-base text-[#61574E]">
              Serenity Travel and guide Mahesh operate private tours across every key geographical region of Sri Lanka, offering seamless door-to-door comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionsCovered.map((reg, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] p-6 rounded-xs border border-[#E2DAD0] shadow-2xs space-y-3"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#9E5B32]" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#9E5B32]">
                    {reg.highlight}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C2723]">
                  {reg.name}
                </h3>
                <p className="text-sm text-[#61574E] leading-relaxed">
                  {reg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Travellers Choose Serenity Travel */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9E5B32]">
              Trust & Peace of Mind
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2723]">
              Why Travellers Choose Serenity Travel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xs border border-[#E5DDD2] space-y-3 shadow-2xs">
              <CheckCircle2 className="w-6 h-6 text-[#9E5B32]" />
              <h3 className="font-serif text-lg font-bold text-[#2C2723]">
                Transparent & Honest
              </h3>
              <p className="text-sm text-[#61574E] leading-relaxed">
                Clear recommendations on hotels, restaurants, and sights without hidden commissions or forced shopping stops.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xs border border-[#E5DDD2] space-y-3 shadow-2xs">
              <CheckCircle2 className="w-6 h-6 text-[#9E5B32]" />
              <h3 className="font-serif text-lg font-bold text-[#2C2723]">
                Family & Couple Friendly
              </h3>
              <p className="text-sm text-[#61574E] leading-relaxed">
                Patient and thoughtful with travellers of all ages, adapting daily energy levels for restful, enjoyable holidays.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xs border border-[#E5DDD2] space-y-3 shadow-2xs">
              <CheckCircle2 className="w-6 h-6 text-[#9E5B32]" />
              <h3 className="font-serif text-lg font-bold text-[#2C2723]">
                Stress-Free Logistics
              </h3>
              <p className="text-sm text-[#61574E] leading-relaxed">
                From luggage handling to scenic train seat reservations, national park permits, and temple tickets, everything is managed for you.
              </p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="mt-14 text-center">
            <button
              id="about-plan-trip-cta"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#2C2723] hover:bg-[#9E5B32] transition-colors rounded-sm shadow-sm cursor-pointer"
            >
              <span>Plan Your Journey with Serenity Travel</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
