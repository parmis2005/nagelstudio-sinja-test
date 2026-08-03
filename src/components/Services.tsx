import Image from "next/image";
import { business, services } from "@/lib/site-data";

export default function Services() {
  return (
    <section id="leistungen" className="bg-[#4b030d] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-rose-500">
            Leistungen
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-white sm:text-4xl">
            Meine Leistungen
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-rose-400/70 to-transparent" />
          <p className="mt-6 text-rose-100/75">
            Von klassischer Maniküre bis zu individuellem Nail Art Design –
            alle Leistungen und aktuellen Preise findest du bei der
            Terminbuchung.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <a
              key={service.title}
              href={business.bookingUrl}
              className="group flex h-[25rem] flex-col overflow-hidden rounded-2xl bg-[#2a2022] ring-1 ring-white/10 transition-[box-shadow,ring-color] duration-300 hover:shadow-2xl hover:shadow-red-950/35 hover:ring-red-500/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
              aria-label={`${service.title} Termin buchen`}
            >
              <div className="relative h-64 shrink-0 overflow-hidden bg-[#211b1d]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-[filter] duration-500 group-hover:brightness-110 group-hover:saturate-110 group-focus-visible:brightness-110 group-focus-visible:saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211b1d]/35 via-transparent to-transparent" />
              </div>
              <div className="relative flex flex-1 flex-col border-t border-white/10 bg-gradient-to-b from-[#3a2527] to-[#211b1d] p-5">
                <span className="-mt-8 mb-6 inline-flex w-fit rounded-full bg-white/14 px-3 py-1 text-xs font-semibold text-rose-50 ring-1 ring-white/15 backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif-display text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-rose-50/85">
                  {service.items.slice(0, 1).map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto h-px origin-left scale-x-0 bg-gradient-to-r from-red-500 via-red-300 to-transparent transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </div>
            </a>
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
