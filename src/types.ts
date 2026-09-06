export type PageType = 'home' | 'about' | 'packages' | 'contact';

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  idealFor: string;
  tagline: string;
  image: string;
  summary: string;
  highlights: string[];
  sampleItinerary: {
    day: string;
    title: string;
    description: string;
  }[];
  category: 'highlights' | 'culture' | 'wildlife' | 'coast' | 'hills' | 'custom';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  country: string;
  travelerType: string;
  tourName: string;
  year: string;
  note?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'Landscapes' | 'Heritage' | 'Wildlife' | 'Coast' | 'Tea Country' | 'Culture';
  image: string;
  caption: string;
}

export interface EnquiryData {
  fullName: string;
  email: string;
  phoneOrWhatsapp: string;
  travelDates: string;
  adultsCount: number;
  childrenCount: number;
  interestedPackage: string;
  travelStyle: string[];
  message: string;
}
