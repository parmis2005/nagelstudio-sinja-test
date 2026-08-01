import Image from "next/image";

const galleryImages = [
  {
    src: "/images/instagram/service-manicure-display.jpg",
    alt: "Pink French Nails mit Blütendetail",
  },
  {
    src: "/images/instagram/service-gel-display.jpg",
    alt: "Türkise Gel-Modellage mit Glitzerlinien",
  },
  {
    src: "/images/instagram/service-nailart-display.jpg",
    alt: "Buntes Nail Art Design mit feinen Details",
  },
  {
    src: "/images/instagram/service-pedicure-display.jpg",
    alt: "Fußpflege mit rotem Nagellack",
  },
  {
    src: "/images/instagram/spring.webp",
    alt: "Frühlingshaftes Nageldesign",
  },
  {
    src: "/images/instagram/blue-marble.webp",
    alt: "Blau marmoriertes Nageldesign",
  },
  {
    src: "/images/instagram/cat-eye.webp",
    alt: "Cat-Eye Nageldesign",
  },
  {
    src: "/images/instagram/nude.webp",
    alt: "Nude Nageldesign",
  },
];

export default function Gallery() {
  return (
    <section
      id="galerie"
      className="bg-gradient-to-b from-[#fff7f1] via-[#fff3eb] to-[#fff8f3] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif-display text-3xl font-semibold italic text-red-600">
            Galerie
          </p>
          <h2 className="mt-2 font-serif-display text-3xl font-semibold text-rose-950 sm:text-5xl">
            Meine Nagelkunst
          </h2>
          <div className="mx-auto mt-5 flex w-24 items-center justify-center gap-3 text-red-600/70">
            <span className="h-px flex-1 bg-current" />
            <span className="h-2 w-2 rotate-45 bg-current" />
            <span className="h-px flex-1 bg-current" />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-foreground/65 sm:text-base">
            Eine kleine Auswahl vergangener Arbeiten. Mehr Designs findest du
            auf Instagram.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105 group-hover:saturate-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
