import { TourPackage } from '../types';

export const tourPackages: TourPackage[] = [
  {
    id: 'sri-lanka-highlights',
    title: 'Sri Lanka Highlights',
    duration: '10 Days / 9 Nights',
    idealFor: 'First-time visitors, couples & families',
    tagline: 'The essential Sri Lankan route: ancient wonders, tea-cloaked mountains, wildlife safari and ocean breezes.',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
    summary: 'A curated journey through the island’s most iconic landscapes. Climb ancient Sigiriya, explore holy Kandy, ride the scenic train through mist-covered tea plantations, spot elephants in the wild, and relax inside the colonial ramparts of Galle Fort.',
    highlights: [
      'Climb the 5th-century UNESCO Sigiriya Rock Fortress at sunrise',
      'Sacred Relic of the Tooth Temple & traditional Kandy cultural walk',
      'Scenic hill-country train ride through tea valleys to Ella',
      'Private 4x4 safari in Udawalawe or Yala National Park',
      'Walking tour of UNESCO Galle Dutch Fort and peaceful southern beaches'
    ],
    sampleItinerary: [
      { day: 'Day 1–3', title: 'Arrival & The Cultural Triangle', description: 'Airport pickup, journey to Sigiriya, visit Dambulla Golden Cave Temple, and climb Sigiriya Rock Fortress.' },
      { day: 'Day 4–5', title: 'Kandy & The Sacred Hills', description: 'Explore spice groves, visit the Temple of the Sacred Tooth Relic, and stroll around Kandy Lake.' },
      { day: 'Day 6–7', title: 'Tea Country & Scenic Ella Rail', description: 'Wind through emerald Ceylon tea plantations, visit a historic tea factory, and ride the famous Nine Arch Bridge train.' },
      { day: 'Day 8', title: 'Wildlife Safari in Udawalawe', description: 'Early morning private 4x4 jeep safari encountering wild Asian elephant herds in their natural habitat.' },
      { day: 'Day 9–10', title: 'Galle Dutch Fort & Departure', description: 'Explore the 17th-century ramparts of Galle, relax by southern shores, and return to Colombo for your departure.' }
    ],
    category: 'highlights'
  },
  {
    id: 'cultural-triangle',
    title: 'Cultural Triangle & Ancient Cities',
    duration: '6 Days / 5 Nights',
    idealFor: 'History enthusiasts, photographers & cultural travellers',
    tagline: 'Step back two millennia into sacred monastic cities, rock monasteries, and living Buddhist heritage.',
    image: 'https://images.unsplash.com/photo-1588598198308-56925586616e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Sri Lanka’s central plains hold over two thousand years of history. Guided by Mahesh, explore ancient Anuradhapura, the medieval palace ruins of Polonnaruwa, the cave frescoes of Dambulla, and the sacred citadel of Sigiriya.',
    highlights: [
      'Climb Sigiriya Fortress and explore the surrounding royal water gardens',
      'Marvel at the ancient rock-cut Buddha statues at Gal Vihara in Polonnaruwa',
      'The sacred Jaya Sri Maha Bodhi tree & stupas of Anuradhapura',
      'Golden Temple and painted cave sanctuaries of Dambulla',
      'Traditional village lunch prepared in clay pots over wood fires'
    ],
    sampleItinerary: [
      { day: 'Day 1', title: 'Arrival to the Heart of the Island', description: 'Scenic drive from airport to Habarana / Sigiriya with a welcome king coconut stop.' },
      { day: 'Day 2', title: 'Sigiriya Rock & Country Village', description: 'Early ascent of Sigiriya Lion Rock before the midday sun, followed by a calm village catamaran cruise.' },
      { day: 'Day 3', title: 'Ancient Polonnaruwa Kingdom', description: 'Explore royal palaces, council chambers, and the monumental stone sculptures of Gal Vihara.' },
      { day: 'Day 4', title: 'Sacred Anuradhapura Pilgrimage', description: 'Discover ancient monasteries, enormous brick stupas, and ancient irrigation tanks.' },
      { day: 'Day 5–6', title: 'Dambulla Caves & Journey to Kandy', description: 'Walk through the painted ceiling caves of Dambulla before concluding in the hill capital of Kandy.' }
    ],
    category: 'culture'
  },
  {
    id: 'southern-coast-galle',
    title: 'Southern Coast & Galle Fort',
    duration: '5 Days / 4 Nights',
    idealFor: 'Couples, ocean lovers & slow travellers',
    tagline: 'Ocean breezes, cinnamon-scented lakes, Dutch colonial architecture and golden tropical shores.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    summary: 'A refined coastal exploration along Sri Lanka’s south. Walk the cobblestone ramparts of Galle Fort, encounter marine life, visit quiet cinnamon plantations, and enjoy gentle, private beachside living at your own pace.',
    highlights: [
      'Guided historical stroll inside the UNESCO Galle Dutch Fort',
      'Traditional boat ride across peaceful Madu River or Koggala Lake',
      'Visit a traditional cinnamon peeling homestead',
      'Marine turtle conservation centre and coastal viewpoints',
      'Unhurried sunsets overlooking palm-fringed bays at Mirissa or Tangalle'
    ],
    sampleItinerary: [
      { day: 'Day 1', title: 'Arrival on the Palm Coast', description: 'Pick up from Colombo / airport and picturesque coastal drive to your boutique ocean hotel.' },
      { day: 'Day 2', title: 'Galle Fort Heritage Walk', description: 'An intimate walking tour of 17th-century bastions, boutique jewelry workshops, and historic churches.' },
      { day: 'Day 3', title: 'Cinnamon Island & River Serenity', description: 'Wooden boat cruise among mangrove islets, visiting spice craftsmen and quiet Buddhist hermitages.' },
      { day: 'Day 4', title: 'Beaches, Turtles & Coastal Life', description: 'Visit sea turtle sanctuaries, witness traditional stilt fishing heritage, and enjoy sunset over the Indian Ocean.' },
      { day: 'Day 5', title: 'Farewell Coastal Morning', description: 'Relaxed morning swim, fresh tropical fruit breakfast, and private return transfer.' }
    ],
    category: 'coast'
  },
  {
    id: 'wildlife-safari',
    title: 'Wildlife & Safari Expedition',
    duration: '5 Days / 4 Nights',
    idealFor: 'Nature lovers, wildlife photographers & families',
    tagline: 'Private 4x4 safaris seeking wild leopards, majestic Asian elephants, sloth bears and endemic birds.',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1200&q=80',
    summary: 'Sri Lanka is one of Asia’s premier wildlife sanctuaries. Experience uncrowded, private game drives in national parks with an experienced guide who understands animal behavior and natural habitats.',
    highlights: [
      'Two private 4x4 game drives in Yala National Park (famed for leopards)',
      'Close encounters with free-roaming elephant families in Udawalawe',
      'Birdwatching at Bundala coastal wetland lagoons (UNESCO Biosphere)',
      'Scenic rural drives through tranquil southern wilderness',
      'Private safari jeep with experienced local tracker alongside Mahesh'
    ],
    sampleItinerary: [
      { day: 'Day 1', title: 'Journey to Udawalawe', description: 'Scenic drive south into the open scrub jungles of Udawalawe, home to hundreds of wild elephants.' },
      { day: 'Day 2', title: 'Udawalawe Elephant Sanctuary', description: 'Dawn safari tracking majestic elephant herds around the reservoir, followed by afternoon transit to Yala.' },
      { day: 'Day 3', title: 'Yala National Park Game Drive', description: 'Early morning expedition into leopard and sloth bear territory, passing rugged granite boulders and lagoons.' },
      { day: 'Day 4', title: 'Bundala Wetland Sanctuary', description: 'Discover thousands of migratory birds, crocodiles, and wild boar across tranquil coastal salt flats.' },
      { day: 'Day 5', title: 'Return via Southern Countryside', description: 'Scenic drive back toward Colombo or southern coastal resorts for onward travel.' }
    ],
    category: 'wildlife'
  },
  {
    id: 'hill-country-tea',
    title: 'Hill Country & Tea Trails',
    duration: '6 Days / 5 Nights',
    idealFor: 'Hikers, scenery admirers, cooler climate lovers',
    tagline: 'Misty mountain ridges, cascading waterfalls, colonial tea bungalows and scenic mountain rail.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    summary: 'Climb into Sri Lanka’s central highlands where temperatures drop and emerald tea bushes blanket steep hillsides. Visit artisanal tea estates, walk along mountain ridges, and admire iconic railway engineering.',
    highlights: [
      'Tour a working British colonial-era Ceylon tea estate and taste single-origin brews',
      'Ride the celebrated scenic mountain train through tunnels and tea valleys',
      'Hike to Little Adam’s Peak and photograph the iconic Nine Arch Bridge',
      'Marvel at cascading waterfalls including Ramboda Falls & Ravana Falls',
      'Crisp mountain air in colonial Nuwara Eliya (“Little England”)'
    ],
    sampleItinerary: [
      { day: 'Day 1', title: 'Ascent to the Highland Capital', description: 'Drive past cascading waterfalls and terraced hills toward misty Nuwara Eliya.' },
      { day: 'Day 2', title: 'Ceylon Tea Heritage & Gregory Lake', description: 'Walk through working tea fields with pluckers, observe the orthodox processing stages, and taste premium leaves.' },
      { day: 'Day 3', title: 'Horton Plains & World’s End', description: 'Early morning hike through misty cloud forests ending at a dramatic 880-meter vertical drop.' },
      { day: 'Day 4', title: 'Scenic Mountain Train to Ella', description: 'One of the world’s most scenic railway journeys, weaving through eucalyptus forests and dramatic gorges.' },
      { day: 'Day 5', title: 'Nine Arch Bridge & Ella Gap', description: 'Morning walk to Nine Arch Bridge to watch the blue train pass, followed by Little Adam’s Peak panorama.' },
      { day: 'Day 6', title: 'Descent through Southern Foothills', description: 'Visit Ravana Falls and journey onwards to the coast or airport.' }
    ],
    category: 'hills'
  },
  {
    id: 'custom-private-journey',
    title: 'Custom Private Journey',
    duration: 'Flexible (7 to 21+ Days)',
    idealFor: 'Tailor-made itineraries, special occasions & families',
    tagline: 'A completely personalized route designed around your interests, preferred travel rhythm, and dates.',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    summary: 'Every traveler is unique. Whether you want slow mornings by the ocean, vigorous mountain treks, deep Buddhist philosophy discussions, or a child-friendly family route, Mahesh will handcraft your itinerary with you.',
    highlights: [
      '100% private vehicle with dedicated chauffeur guide (Mahesh)',
      'Flexible daily schedule — adjust stops, pacing, and rest times as you wish',
      'Handpicked accommodations from colonial tea bungalows to seaside villas',
      'Insider access to authentic local eateries, hidden viewpoints, and family artisans',
      'Direct one-on-one consultation before you book'
    ],
    sampleItinerary: [
      { day: 'Step 1', title: 'Initial Consultation', description: 'Share your travel dates, preferred pace, interests, and group size with Mahesh via message or email.' },
      { day: 'Step 2', title: 'Custom Route Proposal', description: 'Mahesh crafts a bespoke day-by-day proposal with recommended stays, driving times, and highlights.' },
      { day: 'Step 3', title: 'Refinement & Personalization', description: 'We adjust details together until your itinerary feels effortless and exciting.' },
      { day: 'Step 4', title: 'Warm Island Welcome', description: 'Mahesh meets you at Bandaranaike International Airport and your journey begins.' }
    ],
    category: 'custom'
  }
];
