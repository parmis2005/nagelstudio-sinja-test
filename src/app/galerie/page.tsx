import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { business, galleryImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Galerie | Nagelstudio by Sinja",
  description:
    "Einblicke in meine Arbeit im Nagelstudio by Sinja in Kerken: Maniküre, Gel-Modellage, Nail Art und gepflegte Nägel.",
};

export default function GaleriePage() {
  return (
    <>
      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-rose-500">
              Galerie
            </span>
            <h1 className="mt-4 font-serif-display text-4xl font-semibold text-rose-950 sm:text-5xl">
              Einblicke in meine Arbeit
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              Gepflegte Hände, natürliche Looks und liebevolle Details aus dem
              Studioalltag von {business.name}.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/#terminbuchung"
                className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rose-700"
              >
                Termin buchen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl bg-rose-50 shadow-sm ring-1 ring-rose-100 ${
                  image.tall ? "sm:row-span-2" : ""
                }`}
              >
                <div
                  className={
                    image.tall ? "aspect-[4/5] sm:h-full" : "aspect-square"
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-sand-50 p-6 ring-1 ring-rose-100 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
            <div>
              <p className="font-serif-display text-2xl font-semibold text-rose-950">
                Mehr aktuelle Designs
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Neue Arbeiten und Eindrücke findest du auch auf den Social
                Media Profilen.
              </p>
            </div>
            <SocialLinks showLabels className="mt-5 sm:mt-0" />
          </div>
        </div>
      </section>
    </>
  );
}
