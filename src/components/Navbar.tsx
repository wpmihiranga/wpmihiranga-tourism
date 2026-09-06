import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Menu, X, Compass, MessageCircle, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'packages', label: 'Tour Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8E2D9]'
            : 'bg-[#FAF8F5]/85 backdrop-blur-sm border-b border-[#E8E2D9]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="group flex flex-col items-start text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9E5B32]"
              aria-label="Serenity Travel - Private Sri Lanka Tours - Return to Home"
            >
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#2C2723] group-hover:text-[#9E5B32] transition-colors">
                  SERENITY TRAVEL
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E5B32]" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-[#73685E]">
                Private Sri Lanka Tours • Guided by Mahesh
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-sm relative whitespace-nowrap ${
                      isActive
                        ? 'text-[#9E5B32] font-semibold'
                        : 'text-[#4A423B] hover:text-[#2C2723]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#9E5B32] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Primary CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                id="desktop-plan-trip-cta"
                onClick={() => handleNavClick('contact')}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide text-white bg-[#2C2723] hover:bg-[#9E5B32] transition-colors duration-200 shadow-xs whitespace-nowrap cursor-pointer rounded-sm"
              >
                <span>Plan Your Trip</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Mobile Actions (Visible on touch/small screens) */}
            <div className="flex items-center md:hidden space-x-2">
              <button
                id="mobile-plan-trip-compact-btn"
                onClick={() => handleNavClick('contact')}
                className="px-3.5 py-2 text-xs font-semibold tracking-wide text-white bg-[#2C2723] hover:bg-[#9E5B32] transition-colors whitespace-nowrap rounded-sm"
              >
                Plan Trip
              </button>

              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-sm text-[#2C2723] hover:bg-[#EFE9E0] focus:outline-hidden focus:ring-2 focus:ring-[#9E5B32] transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#2C2723]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#2C2723]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-overlay"
          className="fixed inset-0 z-50 md:hidden flex flex-col bg-[#FAF8F5] animate-in fade-in duration-200"
        >
          {/* Mobile Overlay Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-20 border-b border-[#E8E2D9]">
            <button
              onClick={() => handleNavClick('home')}
              className="flex flex-col items-start text-left focus:outline-hidden"
            >
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold tracking-wider text-[#2C2723]">
                  SERENITY TRAVEL
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E5B32]" />
              </div>
              <span className="text-[10px] font-medium tracking-widest uppercase text-[#73685E]">
                Private Sri Lanka Tours • Guided by Mahesh
              </span>
            </button>

            <button
              id="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-sm text-[#2C2723] hover:bg-[#EFE9E0] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-[#2C2723]" />
            </button>
          </div>

          {/* Mobile Overlay Body Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#9E5B32] uppercase block mb-3">
                Navigation
              </span>
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left py-3 px-3 text-lg font-serif font-medium border-b border-[#EAE3DA] flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#9E5B32] font-semibold bg-[#F5EFE6]/50' : 'text-[#2C2723] hover:text-[#9E5B32]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#A89F95]" />
                  </button>
                );
              })}
            </nav>

            {/* Mobile Footer CTAs and Direct Connect */}
            <div className="pt-8 space-y-4 border-t border-[#E8E2D9]">
              <button
                id="mobile-drawer-plan-trip-cta"
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center py-4 px-6 text-base font-semibold text-white bg-[#2C2723] hover:bg-[#9E5B32] transition-colors shadow-xs rounded-sm"
              >
                <span>Plan Your Trip</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <div className="p-4 bg-[#F2EDE5] rounded-sm text-xs text-[#594F46] space-y-2">
                <div className="flex items-center gap-2 font-medium text-[#2C2723]">
                  <MessageCircle className="w-4 h-4 text-[#9E5B32]" />
                  <span>Direct WhatsApp Assistance</span>
                </div>
                <p className="text-[#6B6158]">
                  Reach out directly for travel dates & itinerary queries:
                </p>
                <div className="font-mono text-xs font-semibold text-[#2C2723] bg-white/80 p-2 rounded-xs border border-[#E0D7CB]">
                  [WhatsApp Number]
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
