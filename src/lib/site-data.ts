export const business = {
  name: "Nagelstudio by Sinja",
  owner: "Sinja",
  category: "Nagelstudio in Kerken",
  street: "Friedensstraße 20",
  zip: "47647",
  city: "Kerken",
  phoneDisplay: "01575 7185533",
  phoneHref: "tel:+4915757185533",
  bookingUrl: "/#terminbuchung",
  instagramUrl: "https://www.instagram.com/nagelstudio_by_sinja/",
  facebookUrl: "https://www.facebook.com/p/Nagelstudio-by-Sinja-61570482923111/",
  rating: 5.0,
  reviewCount: 9,
  mapsQuery: "Nagelstudio by Sinja, Friedensstraße 20, 47647 Kerken",
} as const;

export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@nagelstudio_by_sinja",
    href: business.instagramUrl,
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "Nagelstudio by Sinja",
    href: business.facebookUrl,
  },
] as const;

export const fullAddress = `${business.street}, ${business.zip} ${business.city}`;

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  business.mapsQuery
)}`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  business.mapsQuery
)}`;

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  business.mapsQuery
)}&output=embed`;

export type Review = {
  name: string;
  initial: string;
  rating: number;
  timeAgo: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Sabine Dubielzig-Gottfried",
    initial: "S",
    rating: 5,
    timeAgo: "vor 3 Wochen",
    text: "Habe vor ca. 4 Monaten das erste Mal meine Nägel bei Sinja machen lassen. Ich war sofort begeistert. Sie ist super sympathisch, lustig, nett und ehrlich. Ich …",
  },
  {
    name: "Daniel Reuter",
    initial: "D",
    rating: 5,
    timeAgo: "vor 3 Wochen",
    text: "Da ich gesundheitlich eingeschränkt bin, gibt es mir bei Sinja wieder das Gefühl, mehr Lebensqualität zu haben durch den Besuch ihres Studios. Sie ist sehr …",
  },
  {
    name: "Yvonne van der Pütten",
    initial: "Y",
    rating: 5,
    timeAgo: "vor 3 Wochen",
    text: "Wunderbare Beratung und es passt einfach alles bei Sinja. Man geht immer mit einem super Ergebnis aus dem Studio. …",
  },
];

export type ServiceCategory = {
  title: string;
  description: string;
  items: string[];
  image: string;
};

export type BookingCategory = {
  id: "haende" | "fuesse" | "extras";
  label: string;
  description: string;
};

export type BookingService = {
  id: string;
  categoryId: BookingCategory["id"];
  name: string;
  duration: string;
  price: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  tall?: boolean;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Zartrosa Maniküre mit Glitzerakzent",
    tall: true,
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Nagelpflege im Nagelstudio by Sinja",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Vorbereitung einer Gel-Modellage",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Aushärten der Nägel unter der UV-Lampe",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Präzises Nail Art Design",
    tall: true,
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Frisch lackierte rote Fingernägel",
  },
];

export const bookingCategories: BookingCategory[] = [
  {
    id: "haende",
    label: "Hände",
    description: "Maniküre, Gel-Modellage und gepflegte Naturnägel.",
  },
  {
    id: "fuesse",
    label: "Füße",
    description: "Fußpflege und kosmetische Pediküre.",
  },
  {
    id: "extras",
    label: "Extras",
    description: "Nail Art, Reparatur und besondere Details.",
  },
];

export const bookingServices: BookingService[] = [
  {
    id: "klassische-manikure",
    categoryId: "haende",
    name: "Klassische Maniküre",
    duration: "45 Min.",
    price: "ab 35 €",
  },
  {
    id: "gel-modellage",
    categoryId: "haende",
    name: "Gel-Modellage",
    duration: "90 Min.",
    price: "ab 55 €",
  },
  {
    id: "refill",
    categoryId: "haende",
    name: "Refill / Auffüllen",
    duration: "75 Min.",
    price: "ab 45 €",
  },
  {
    id: "kosmetische-fusspflege",
    categoryId: "fuesse",
    name: "Kosmetische Fußpflege",
    duration: "50 Min.",
    price: "ab 42 €",
  },
  {
    id: "pedikure",
    categoryId: "fuesse",
    name: "Pediküre mit Pflege",
    duration: "60 Min.",
    price: "ab 48 €",
  },
  {
    id: "nail-art",
    categoryId: "extras",
    name: "Nail Art",
    duration: "30 Min.",
    price: "ab 10 €",
  },
  {
    id: "nagelreparatur",
    categoryId: "extras",
    name: "Nagelreparatur",
    duration: "20 Min.",
    price: "ab 8 €",
  },
];

export const services: ServiceCategory[] = [
  {
    title: "Maniküre",
    description:
      "Klassische und moderne Handpflege für gepflegte, gesunde Nägel.",
    items: ["Klassische Maniküre", "Nagelhautpflege", "Handmassage"],
    image: "/images/instagram/service-manicure-display.jpg",
  },
  {
    title: "Gel- & Modellage",
    description:
      "Langlebige Gel-Modellagen und Verstärkungen in deiner Wunschform.",
    items: ["Gelaufbau", "French & Babyboomer", "Nachfüllen / Refill"],
    image: "/images/instagram/service-gel-display.jpg",
  },
  {
    title: "Nail Art & Design",
    description:
      "Individuelle Designs mit viel Liebe zum Detail – von schlicht bis auffällig.",
    items: ["Farbverläufe", "Glitzer & Steinchen", "Individuelle Designs"],
    image: "/images/instagram/service-nailart-display.jpg",
  },
  {
    title: "Fußpflege",
    description:
      "Entspannende Fußpflege für gepflegte, gesunde Füße das ganze Jahr über.",
    items: ["Kosmetische Fußpflege", "Nagelpflege", "Pflegemassage"],
    image: "/images/instagram/service-pedicure-display.jpg",
  },
];

export const features = [
  {
    title: "Schnelle Terminvergabe",
    description: "Termine direkt auf dieser Website auswählen und anfragen.",
  },
  {
    title: "Zentral in Kerken",
    description: "Gut erreichbares Studio in der Friedensstraße 20, mitten in Kerken.",
  },
  {
    title: "Hygiene & Qualität",
    description: "Höchste Hygienestandards und hochwertige Produkte für dein Wohlbefinden.",
  },
  {
    title: "Persönliche Beratung",
    description: "Viel Liebe zum Detail und individuelle Beratung ganz nach deinen Wünschen.",
  },
];
