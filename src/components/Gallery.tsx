import Image from "next/image";
import Link from "next/link";

const showcaseImages = [
  {
    src: "/images/instagram/service-manicure-pink.jpg",
    alt: "Pink French Nails mit Blütendetail",
    label: "French & Pflege",
  },
  {
    src: "/images/instagram/service-nailart-color.jpg",
    alt: "Buntes Nail Art Design mit feinen Details",
    label: "Nail Art",
  },
  {
    src: "/images/instagram/service-gel-turquoise.jpg",
    alt: "Türkise Gel-Modellage mit Glitzerlinien",
    label: "Gel-Modellage",
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-rose-500">
            Galerie
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-rose-900 sm:text-4xl">
            Einblicke in meine Arbeit
          </h2>
          <p className="mt-4 text-foreground/70">
            Ein paar Impressionen aus dem Studioalltag – von natürlicher
            Maniküre bis zu individuellem Nail Art Design.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] bg-[#211b1d] p-2.5 shadow-2xl shadow-rose-950/15 ring-1 ring-rose-950/10 sm:p-3">
          <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="group relative min-h-[22rem] overflow-hidden rounded-[1.1rem] bg-rose-950 sm:min-h-[27rem]">
              <Image
                src="/images/gallery-3.jpg"
                alt="Nagelstudio by Sinja bei der Arbeit"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-[50%_34%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211b1d]/95 via-[#211b1d]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-200">
                  Studioalltag
                </p>
                <h3 className="mt-3 max-w-md font-serif-display text-2xl font-semibold text-white sm:text-3xl">
                  Präzise Arbeit, ruhige Atmosphäre und liebevolle Details.
                </h3>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {showcaseImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`group relative overflow-hidden rounded-[1.1rem] bg-rose-950 ${
                    index === 0 ? "sm:col-span-3 lg:col-span-1" : ""
                  }`}
                >
                  <div
                    className={
                      index === 0
                        ? "aspect-[16/9] lg:aspect-[16/10]"
                        : "aspect-[4/5] lg:aspect-[16/9]"
                    }
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 42vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211b1d]/75 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/14 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur-sm">
                    {image.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/galerie"
            className="inline-flex rounded-full border border-rose-200 px-7 py-3 text-sm font-semibold text-rose-700 transition-colors hover:bg-rose-100"
          >
            Mehr Bilder ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
