import React from 'react';
import { PageType } from '../types';
import { ArrowUpRight, ShieldCheck, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = 2026;

  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="global-footer" className="bg-[#1F1B18] text-[#D8CFC4] pt-16 pb-12 border-t border-[#3A332C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#352F29]">
          {/* Brand & Introduction */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl font-bold tracking-wider text-white">
                SERENITY TRAVEL
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D48B55]" />
            </div>
            <p className="text-xs uppercase tracking-widest text-[#A89F94] font-medium">
              Private Sri Lanka Tours • Guided by Mahesh
            </p>
            <p className="text-sm text-[#B8AEA3] leading-relaxed max-w-sm pt-2">
              Serenity Travel offers personalized private journeys, authentic cultural encounters, and scenic island explorations personally guided by Mahesh.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#E5DCD2]">
              <ShieldCheck className="w-4 h-4 text-[#D48B55]" />
              <span>Registered Independent Chauffeur Guide • [Certification]</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#E5DCD2]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-[#B8AEA3] hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-[#B8AEA3] hover:text-white transition-colors cursor-pointer"
                >
                  About & Your Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('packages')}
                  className="text-[#B8AEA3] hover:text-white transition-colors cursor-pointer"
                >
                  Tour Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-[#B8AEA3] hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Trip Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#E5DCD2]">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm text-[#B8AEA3]">
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#D48B55] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-[#8E847A]">WhatsApp:</span>
                  <span className="font-mono text-xs text-white">[WhatsApp Number]</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D48B55] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-[#8E847A]">Email:</span>
                  <span className="font-mono text-xs text-white">[Email Address]</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D48B55] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-[#8E847A]">Direct Phone:</span>
                  <span className="font-mono text-xs text-white">[Phone Number]</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D48B55] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-[#8E847A]">Island Base:</span>
                  <span className="text-xs text-white">[Location] (Island-wide routes)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social / Direct Connect */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#E5DCD2]">
              Connect
            </h3>
            <div className="space-y-2 text-xs text-[#B8AEA3]">
              <div className="block p-2.5 rounded-sm bg-[#2B2521] border border-[#3A332C]">
                <span className="text-[#8E847A] block text-[11px]">Social Media:</span>
                <span className="text-white font-mono">[Social Media Link]</span>
              </div>
              <p className="text-[12px] leading-normal text-[#9A9085] pt-1">
                Every tour is 100% private, with personal guidance and comfortable air-conditioned vehicle.
              </p>
            </div>
          </div>
        </div>

        {/* Sub-footer Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E847A] gap-4">
          <p>© {currentYear} Serenity Travel. All rights reserved. Private Sri Lanka tours guided by Mahesh.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#6D6359] text-[11px]">Designed for international travellers & French guests</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
