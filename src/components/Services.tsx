import Image from "next/image";
import { business, services } from "@/lib/site-data";

export default function Services() {
  return (
    <section id="leistungen" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-rose-500">
            Leistungen
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-rose-900 sm:text-4xl">
            Unsere Leistungen
          </h2>
          <p className="mt-4 text-foreground/70">
            Von klassischer Maniküre bis zu individuellem Nail Art Design –
            alle Leistungen und aktuellen Preise findest du bei der
            Terminbuchung.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-rose-100 bg-sand-50 transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif-display text-xl font-semibold text-rose-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/70">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={business.bookingUrl}
            className="inline-block rounded-full bg-rose-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rose-700"
          >
            Termin für Leistungen buchen
          </a>
        </div>
      </div>
    </section>
  );
}
