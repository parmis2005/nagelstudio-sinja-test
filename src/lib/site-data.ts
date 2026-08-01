export const business = {
  name: "Nagelstudio by Sinja",
  owner: "Sinja",
  category: "Nagelstudio in Kerken",
  street: "Friedensstraße 20",
  zip: "47647",
  city: "Kerken",
  phoneDisplay: "01575 7185533",
  phoneHref: "tel:+4915757185533",
  bookingUrl: "https://terminpanda.de/anbieter/NagelstudiobySinja+p817im",
  instagramUrl: "https://www.instagram.com/nagelstudio_by_sinja/",
  rating: 5.0,
  reviewCount: 9,
  mapsQuery: "Nagelstudio by Sinja, Friedensstraße 20, 47647 Kerken",
} as const;

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

export const services: ServiceCategory[] = [
  {
    title: "Maniküre",
    description:
      "Klassische und moderne Handpflege für gepflegte, gesunde Nägel.",
    items: ["Klassische Maniküre", "Nagelhautpflege", "Handmassage"],
    image: "/images/gallery-3.jpg",
  },
  {
    title: "Gel- & Modellage",
    description:
      "Langlebige Gel-Modellagen und Verstärkungen in deiner Wunschform.",
    items: ["Gelaufbau", "French & Babyboomer", "Nachfüllen / Refill"],
    image: "/images/gallery-1.jpg",
  },
  {
    title: "Nail Art & Design",
    description:
      "Individuelle Designs mit viel Liebe zum Detail – von schlicht bis auffällig.",
    items: ["Farbverläufe", "Glitzer & Steinchen", "Individuelle Designs"],
    image: "/images/gallery-6.jpg",
  },
  {
    title: "Fußpflege",
    description:
      "Entspannende Fußpflege für gepflegte, gesunde Füße das ganze Jahr über.",
    items: ["Kosmetische Fußpflege", "Nagelpflege", "Pflegemassage"],
    image: "/images/gallery-5.jpg",
  },
];

export const features = [
  {
    title: "Schnelle Terminvergabe",
    description: "Bequem online buchen über TerminPanda – ganz ohne Wartezeit am Telefon.",
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
