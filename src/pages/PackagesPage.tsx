import React, { useState } from 'react';
import { PageType } from '../types';
import { tourPackages } from '../data/tours';
import {
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Filter,
  Car,
  ShieldCheck
} from 'lucide-react';

interface PackagesPageProps {
  onNavigate: (page: PageType) => void;
  onSelectPackageForEnquiry: (packageTitle: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  onNavigate,
  onSelectPackageForEnquiry
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Packages' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'culture', label: 'Culture & Heritage' },
    { id: 'coast', label: 'Coast & Galle' },
    { id: 'wildlife', label: 'Wildlife & Safari' },
    { id: 'hills', label: 'Hill Country & Tea' },
    { id: 'custom', label: 'Tailor-Made' },
  ];

  const filteredPackages =
    activeCategory === 'all'
      ? tourPackages
      : tourPackages.filter((pkg) => pkg.category === activeCategory);

  const handleRequestTour = (packageTitle: string) => {
    onSelectPackageForEnquiry(packageTitle);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleItinerary = (id: string) => {
    setExpandedPackageId(expandedPackageId === id ? null : id);
  };

  return (
    <div id="packages-page-container" className="pt-20 bg-[#FAF8F5]">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-[#F2EDE5] border-b border-[#E5DDD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9E5B32]">
              Serenity Travel • Sri Lanka Tour Packages
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#2C2723] leading-tight">
              Curated Private Journeys
            </h1>
            <p className="text-lg sm:text-xl text-[#594E44] leading-relaxed">
              Explore example itineraries crafted by Serenity Travel and guided by Mahesh. Each private tour is completely customizable to your travel dates, preferred tempo, and interests.
            </p>
          </div>

          {/* Key Assurance Banner */}
          <div className="mt-8 p-4 bg-white rounded-xs border border-[#E0D7CB] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#4A423B]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E5B32] shrink-0" />
              <span>100% Private Car & Dedicated Guide</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E5B32] shrink-0" />
              <span>Flexible Daily Departures</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E5B32] shrink-0" />
              <span>Personalised Quote for Any Season</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <div className="sticky top-20 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE3DA] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-xs text-[#82766B] flex items-center gap-1 mr-2 font-medium">
              <Filter className="w-3.5 h-3.5 text-[#9E5B32]" />
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2C2723] text-white shadow-2xs'
                    : 'bg-white text-[#524941] border border-[#E0D7CB] hover:bg-[#F2EDE5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tour Packages List */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredPackages.map((tour, index) => {
            const isExpanded = expandedPackageId === tour.id;

            return (
              <div
                key={tour.id}
                id={`package-detail-${tour.id}`}
                className="bg-white rounded-xs border border-[#E5DDD2] overflow-hidden shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Package Imagery */}
                  <div className="lg:col-span-5 relative bg-[#E2D9CE] min-h-[280px] sm:min-h-[340px] lg:min-h-full">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#2C2723]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-2xs flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#E2B188]" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>

                  {/* Package Core Info */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#9E5B32] font-semibold">
                          Ideal For: {tour.idealFor}
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2723] mt-1">
                          {tour.title}
                        </h2>
                      </div>

                      <p className="text-sm sm:text-base text-[#4F463E] leading-relaxed font-normal">
                        {tour.summary}
                      </p>

                      {/* Key Highlights */}
                      <div className="pt-2 border-t border-[#F2EDE7] space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#2C2723] block">
                          Key Highlights:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#524940]">
                          {tour.highlights.map((hl, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#9E5B32] shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Pricing Note & Actions */}
                    <div className="pt-4 border-t border-[#F2EDE7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-0.5">
                        <span className="text-xs text-[#8A7E73] block uppercase tracking-wider font-semibold">
                          Estimated Cost:
                        </span>
                        <span className="font-serif font-bold text-base text-[#2C2723]">
                          Price on request
                        </span>
                        <p className="text-[11px] text-[#786D63]">
                          Contact me for a personalised quote tailored to your dates.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <button
                          onClick={() => toggleItinerary(tour.id)}
                          className="px-4 py-2.5 text-xs font-semibold text-[#2C2723] bg-[#FAF8F5] hover:bg-[#F0EAE1] border border-[#D8CFC3] transition-colors rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>{isExpanded ? 'Hide Sample Days' : 'View Sample Days'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        <button
                          onClick={() => handleRequestTour(tour.title)}
                          className="px-6 py-2.5 text-xs font-semibold text-white bg-[#2C2723] hover:bg-[#9E5B32] transition-colors rounded-sm shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Request This Tour</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collapsible Sample Day-by-Day Itinerary */}
                {isExpanded && (
                  <div className="bg-[#FAF8F5] p-6 sm:p-8 border-t border-[#EAE3DA] animate-in fade-in duration-200">
                    <div className="max-w-4xl space-y-4">
                      <div className="flex items-center justify-between border-b border-[#E0D7CB] pb-2">
                        <h4 className="font-serif text-lg font-bold text-[#2C2723] flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#9E5B32]" />
                          <span>Sample Day-by-Day Schedule</span>
                        </h4>
                        <span className="text-xs text-[#7A6F64] italic">
                          (Fully customizable upon request)
                        </span>
                      </div>

                      <div className="space-y-4 pt-2">
                        {tour.sampleItinerary.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-white rounded-xs border border-[#E5DDD2] space-y-1"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-[#9E5B32] bg-[#F2ECE3] px-2 py-0.5 rounded-2xs">
                                {item.day}
                              </span>
                              <span className="font-semibold text-sm text-[#2C2723]">
                                {item.title}
                              </span>
                            </div>
                            <p className="text-xs text-[#594F45] leading-relaxed pl-1 pt-1">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 flex items-center justify-between">
                        <span className="text-xs text-[#6B6157]">
                          Want to extend or modify this itinerary?
                        </span>
                        <button
                          onClick={() => handleRequestTour(`Customized: ${tour.title}`)}
                          className="text-xs font-semibold text-[#9E5B32] hover:text-[#2C2723] underline cursor-pointer"
                        >
                          Enquire about customizing this route →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Prominent Custom Tailor-Made Banner */}
      <section className="py-16 sm:py-20 bg-[#F0EAE1] border-t border-[#E2DAD0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#9E5B32]">
            Looking for something unique?
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2723]">
            Have Specific Dates or Special Interests?
          </h3>
          <p className="text-base text-[#574D43] leading-relaxed max-w-2xl mx-auto">
            Sri Lanka offers endless possibilities. Send Serenity Travel your preferred dates, party size, and what you’d love to see. Guide Mahesh will personally review your request and write back with a tailor-made proposal and a transparent quote.
          </p>
          <div className="pt-2">
            <button
              id="packages-custom-journey-cta"
              onClick={() => handleRequestTour('Custom Private Journey')}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-[#2C2723] hover:bg-[#9E5B32] transition-colors rounded-sm shadow-sm cursor-pointer"
            >
              <span>Create Your Journey</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
