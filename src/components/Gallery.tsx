import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/site-data";

export default function Gallery() {
  return (
    <section id="galerie" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
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

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl bg-rose-50 ${
                img.tall ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
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
