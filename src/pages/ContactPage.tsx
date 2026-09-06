import React, { useState, useEffect } from 'react';
import { PageType, EnquiryData } from '../types';
import { tourPackages } from '../data/tours';
import {
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
  Send,
  Clock,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

interface ContactPageProps {
  initialPackage?: string;
  onNavigate: (page: PageType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialPackage, onNavigate }) => {
  const [formData, setFormData] = useState<EnquiryData>({
    fullName: '',
    email: '',
    phoneOrWhatsapp: '',
    travelDates: '',
    adultsCount: 2,
    childrenCount: 0,
    interestedPackage: initialPackage || 'Sri Lanka Highlights',
    travelStyle: ['Comfort & Scenic Pace'],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, interestedPackage: initialPackage }));
    }
  }, [initialPackage]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTravelStyleToggle = (style: string) => {
    setFormData((prev) => {
      const exists = prev.travelStyle.includes(style);
      const updated = exists
        ? prev.travelStyle.filter((s) => s !== style)
        : [...prev.travelStyle, style];
      return { ...prev, travelStyle: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate polished feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 600);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phoneOrWhatsapp: '',
      travelDates: '',
      adultsCount: 2,
      childrenCount: 0,
      interestedPackage: 'Sri Lanka Highlights',
      travelStyle: ['Comfort & Scenic Pace'],
      message: ''
    });
  };

  const travelStyleOptions = [
    'Culture & Ancient Temples',
    'Wildlife & Safaris',
    'Tea Highlands & Scenic Train',
    'Coastal Relaxation',
    'Local Food & Village Life',
    'Family-Friendly Leisure'
  ];

  return (
    <div id="contact-page-container" className="pt-20 bg-[#FAF8F5]">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 bg-[#F2EDE5] border-b border-[#E5DDD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9E5B32]">
              Serenity Travel • Guide Consultation
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#2C2723] leading-tight">
              Let's Plan Your Sri Lankan Journey
            </h1>
            <p className="text-base sm:text-lg text-[#5B5046] leading-relaxed">
              Have questions about itineraries, weather, travel with family, or custom routes? Send Serenity Travel a message. Mahesh, our lead private guide, personally reviews your wishes and provides thoughtful recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Direct Contact Details & WhatsApp Focus */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Highlight Card */}
              <div className="p-6 sm:p-8 bg-[#2C2723] text-white rounded-xs shadow-md space-y-5 border border-[#3D3630]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#38761D] flex items-center justify-center text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#E2B188] font-semibold block">
                      Fastest Reply
                    </span>
                    <h3 className="font-serif text-xl font-bold">
                      Direct WhatsApp Chat
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#D1C6BB] leading-relaxed">
                  For quick questions on availability, seasonal advice, or custom quotes, WhatsApp is the most convenient way to speak directly with guide Mahesh at Serenity Travel.
                </p>

                <div className="p-3.5 bg-white/10 rounded-xs border border-white/15 space-y-1">
                  <span className="text-[11px] text-[#B8AEA3] block">WhatsApp (Direct to Mahesh):</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-white tracking-wide">
                    [WhatsApp Number]
                  </span>
                </div>

                <div className="text-[11px] text-[#A89D91] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E2B188]" />
                  <span>Typically responds within a few hours (Sri Lanka Time GMT+5:30)</span>
                </div>
              </div>

              {/* Direct Details Card */}
              <div className="p-6 sm:p-8 bg-white rounded-xs border border-[#E5DDD2] shadow-2xs space-y-6">
                <h3 className="font-serif text-xl font-bold text-[#2C2723]">
                  Contact Information
                </h3>

                <div className="space-y-4 text-sm text-[#4F463D]">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#9E5B32] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-[#8C8074] font-semibold">
                        Email Address
                      </span>
                      <span className="font-mono text-sm text-[#2C2723] font-medium">
                        [Email Address]
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#9E5B32] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-[#8C8074] font-semibold">
                        Direct Phone
                      </span>
                      <span className="font-mono text-sm text-[#2C2723] font-medium">
                        [Phone Number]
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#9E5B32] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-[#8C8074] font-semibold">
                        Service Base & Pickup
                      </span>
                      <span className="text-sm text-[#2C2723]">
                        Serenity Travel • Free pickup from Bandaranaike International Airport (CMB) or any hotel island-wide.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0EAE2] space-y-2 text-xs text-[#70655B]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#9E5B32]" />
                    <span>No deposit required for initial consultation & itinerary planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9E5B32]" />
                    <span>Comfortable private vehicle with complete passenger insurance</span>
                  </div>
                </div>
              </div>

              {/* Sri Lanka Regional Map Overview */}
              <div className="p-6 bg-[#F2EDE5] rounded-xs border border-[#E0D8CC] space-y-3">
                <h4 className="font-serif text-base font-bold text-[#2C2723] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#9E5B32]" />
                  <span>Sri Lanka Travel Regions Covered</span>
                </h4>
                <p className="text-xs text-[#63584D] leading-relaxed">
                  Serenity Travel routes operate throughout Colombo, the Cultural Triangle (Sigiriya/Dambulla), Kandy, Nuwara Eliya tea hills, Ella, Yala & Udawalawe national parks, and the entire southern coast (Galle, Mirissa, Tangalle).
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Trip Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-10 rounded-xs border border-[#E5DDD2] shadow-2xs">
                {submitted ? (
                  <div className="py-8 space-y-6 text-center animate-in fade-in duration-300">
                    <div className="w-16 h-16 bg-[#F0EBE1] text-[#9E5B32] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#9E5B32]">
                        Enquiry Received
                      </span>
                      <h2 className="font-serif text-3xl font-bold text-[#2C2723]">
                        Thank You, {formData.fullName || 'Traveller'}
                      </h2>
                      <p className="text-sm text-[#5B5045] max-w-md mx-auto leading-relaxed">
                        Your travel enquiry for{' '}
                        <strong className="text-[#2C2723] font-semibold">
                          {formData.interestedPackage}
                        </strong>{' '}
                        has been successfully recorded. Mahesh will review your dates and travel preferences, then reply with a personalized proposal.
                      </p>
                    </div>

                    {/* Summary of submitted details */}
                    <div className="p-5 bg-[#FAF8F5] rounded-xs border border-[#E8E1D7] text-left text-xs text-[#4F463E] max-w-md mx-auto space-y-2">
                      <div className="flex justify-between border-b border-[#EDE6DD] pb-1.5">
                        <span className="text-[#877C72]">Name:</span>
                        <span className="font-medium text-[#2C2723]">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between border-b border-[#EDE6DD] pb-1.5">
                        <span className="text-[#877C72]">Email:</span>
                        <span className="font-mono text-[#2C2723]">{formData.email}</span>
                      </div>
                      <div className="flex justify-between border-b border-[#EDE6DD] pb-1.5">
                        <span className="text-[#877C72]">WhatsApp / Phone:</span>
                        <span className="font-mono text-[#2C2723]">
                          {formData.phoneOrWhatsapp || 'Not provided'}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-[#EDE6DD] pb-1.5">
                        <span className="text-[#877C72]">Estimated Dates:</span>
                        <span className="font-medium text-[#2C2723]">
                          {formData.travelDates || 'Flexible'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#877C72]">Travellers:</span>
                        <span className="font-medium text-[#2C2723]">
                          {formData.adultsCount} Adult{formData.adultsCount > 1 ? 's' : ''}
                          {formData.childrenCount > 0 ? `, ${formData.childrenCount} Children` : ''}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleResetForm}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-[#5B5045] bg-[#F2EDE5] hover:bg-[#E8E2D7] rounded-sm transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Send Another Enquiry</span>
                      </button>

                      <button
                        onClick={() => onNavigate('home')}
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-semibold text-white bg-[#2C2723] hover:bg-[#9E5B32] rounded-sm transition-colors cursor-pointer"
                      >
                        <span>Return to Home</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-[#F0EAE2] pb-4">
                      <h2 className="font-serif text-2xl font-bold text-[#2C2723]">
                        Trip Enquiry Form
                      </h2>
                      <p className="text-xs text-[#73685E] mt-1">
                        Please share some details about your planned visit to Sri Lanka.
                      </p>
                    </div>

                    {/* Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B]"
                        >
                          Your Name <span className="text-[#9E5B32]">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Marie Dupont"
                          className="w-full px-3.5 py-3 text-sm bg-[#FAF8F5] border border-[#DCD3C7] rounded-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#9E5B32] focus:border-[#9E5B32] transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B]"
                        >
                          Email Address <span className="text-[#9E5B32]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="marie.dupont@example.com"
                          className="w-full px-3.5 py-3 text-sm bg-[#FAF8F5] border border-[#DCD3C7] rounded-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#9E5B32] focus:border-[#9E5B32] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone / WhatsApp & Travel Dates */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="phoneOrWhatsapp"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B]"
                        >
                          Phone or WhatsApp <span className="text-[#9E5B32]">*</span>
                        </label>
                        <input
                          type="text"
                          id="phoneOrWhatsapp"
                          name="phoneOrWhatsapp"
                          required
                          value={formData.phoneOrWhatsapp}
                          onChange={handleInputChange}
                          placeholder="+33 6 12 34 56 78"
                          className="w-full px-3.5 py-3 text-sm bg-[#FAF8F5] border border-[#DCD3C7] rounded-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#9E5B32] focus:border-[#9E5B32] transition-colors"
                        />
                        <span className="text-[11px] text-[#8C8074]">
                          Include country code for fast WhatsApp reply
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="travelDates"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B]"
                        >
                          Approximate Travel Dates
                        </label>
                        <input
                          type="text"
                          id="travelDates"
                          name="travelDates"
                          value={formData.travelDates}
                          onChange={handleInputChange}
                          placeholder="e.g. October 2025 (2 weeks)"
                          className="w-full px-3.5 py-3 text-sm bg-[#FAF8F5] border border-[#DCD3C7] rounded-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#9E5B32] focus:border-[#9E5B32] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Number of Travellers & Package Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="adultsCount"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B]"
                        >
                          Adults (12+)
                        </label>
                        <select
                          id="adultsCount"
                          name="adultsCount"
                          value={formData.adultsCount}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3 text-sm bg-[#FAF8F5] border border-[#DCD3C7] rounded-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#9E5B32] focus:border-[#9E5B32]"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, '8+'].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Adult' : 'Adults'}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="childrenCount"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B]"
                        >
                          Children (under 12)
                        </label>
                        <select
                          id="childrenCount"
                          name="childrenCount"
                          value={formData.childrenCount}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3 text-sm bg-[#FAF8F5] border border-[#DCD3C7] rounded-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#9E5B32] focus:border-[#9E5B32]"
                        >
                          {[0, 1, 2, 3, 4, '5+'].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Child' : 'Children'}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5 sm:col-span-1">
                        <label
                          htmlFor="interestedPackage"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B]"
                        >
                          Interested Package
                        </label>
                        <select
                          id="interestedPackage"
                          name="interestedPackage"
                          value={formData.interestedPackage}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3 text-sm bg-[#FAF8F5] border border-[#DCD3C7] rounded-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#9E5B32] focus:border-[#9E5B32]"
                        >
                          {tourPackages.map((pkg) => (
                            <option key={pkg.id} value={pkg.title}>
                              {pkg.title}
                            </option>
                          ))}
                          <option value="Custom Private Journey">Custom Private Journey</option>
                          <option value="General Advice / Not Sure Yet">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    {/* Travel Style Preference Checkboxes */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B]">
                        What would you most like to experience?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {travelStyleOptions.map((opt) => {
                          const isSelected = formData.travelStyle.includes(opt);
                          return (
                            <button
                              type="button"
                              key={opt}
                              onClick={() => handleTravelStyleToggle(opt)}
                              className={`flex items-center gap-2 p-2.5 rounded-xs border text-left text-xs transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-[#F2ECE3] border-[#9E5B32] text-[#2C2723] font-medium'
                                  : 'bg-[#FAF8F5] border-[#E0D7CB] text-[#61574D] hover:bg-white'
                              }`}
                            >
                              <div
                                className={`w-3.5 h-3.5 rounded-2xs border flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? 'bg-[#9E5B32] border-[#9E5B32] text-white'
                                    : 'border-[#A89F95]'
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="w-3 h-3 text-white" />}
                              </div>
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Personal Message */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B]"
                      >
                        Tell Us About Your Travel Wishlist
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about places you'd love to visit, your ideal pace, hotel preferences, or any specific questions for guide Mahesh..."
                        className="w-full px-3.5 py-3 text-sm bg-[#FAF8F5] border border-[#DCD3C7] rounded-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#9E5B32] focus:border-[#9E5B32] transition-colors leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        id="contact-form-submit-btn"
                        disabled={submitting}
                        className="w-full flex items-center justify-center gap-2 py-4 px-8 text-base font-semibold text-white bg-[#2C2723] hover:bg-[#9E5B32] disabled:opacity-60 transition-colors rounded-sm shadow-xs cursor-pointer"
                      >
                        {submitting ? (
                          <span>Submitting enquiry...</span>
                        ) : (
                          <>
                            <span>Send Trip Enquiry</span>
                            <Send className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-[#7A6F64] text-center mt-3">
                        Serenity Travel and guide Mahesh review every enquiry personally. No pressure, no obligations.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
