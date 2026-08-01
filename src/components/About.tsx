import Image from "next/image";
import { business } from "@/lib/site-data";

const highlights = ["Ruhige Atmosphäre", "Sorgfältige Arbeit", "Hohe Hygiene"];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m5 12.5 4.1 4.1L19.5 6.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="ueber-uns"
      className="relative overflow-hidden bg-sand-50 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 hidden w-[38vw] bg-[#180406] lg:block" />
        <div className="absolute right-[38vw] top-0 hidden h-full w-px bg-rose-700/20 lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rose-700/20 to-transparent" />
        <div className="absolute left-0 top-24 hidden h-44 w-1 bg-rose-600/70 lg:block" />
        <div className="absolute right-[6vw] top-20 hidden h-40 w-40 border-r border-t border-rose-500/25 lg:block" />
        <div className="absolute bottom-20 right-[30vw] hidden h-28 w-28 border-b border-l border-rose-500/20 lg:block" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <span className="text-sm font-semibold uppercase tracking-wider text-rose-500">
            Über mich
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-rose-900 sm:text-4xl">
            {business.name}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/75">
            <p>
              Willkommen in meinem Nagelstudio – deinem Wohlfühlort für
              gepflegte Hände und Füße. Ich biete dir professionelle Nagel-
              und Fußpflege in entspannter Atmosphäre, mit viel Liebe zum
              Detail und höchsten Hygienestandards.
            </p>
            <p>
              Ob klassische Maniküre, langlebige Gel-Modellage oder
              individuelles Nail Art Design nach deinen Wünschen – bei mir
              bist du in besten Händen.{" "}
              <span className="whitespace-nowrap">
                Ich freue mich auf deinen Besuch in Kerken!
              </span>
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-2 text-sm font-semibold text-rose-900"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-600 text-white">
                  <CheckIcon />
                </span>
                {highlight}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={business.bookingUrl}
              className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rose-700"
            >
              Termin vereinbaren
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-md lg:mr-0">
            <div className="absolute -right-5 -top-5 hidden h-24 w-24 border-r border-t border-rose-500/50 sm:block" />
            <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 border-b border-l border-rose-500/45 sm:block" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] shadow-2xl shadow-rose-950/25 ring-1 ring-white/15">
              <Image
                src="/images/about-1.jpg"
                alt="Sorgfältige Nagelpflege im Nagelstudio by Sinja"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-3 left-8 h-1.5 w-40 rounded-full bg-rose-600 shadow-lg shadow-rose-900/30"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 left-36 h-1.5 w-16 rounded-full bg-rose-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
