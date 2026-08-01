import Image from "next/image";
import { business } from "@/lib/site-data";

export default function About() {
  return (
    <section id="ueber-uns" className="bg-sand-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <span className="text-sm font-semibold uppercase tracking-wider text-rose-500">
            Über uns
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-rose-900 sm:text-4xl">
            ✨ {business.name} ✨
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
              bist du in besten Händen. Ich freue mich auf deinen Besuch in
              Kerken!
            </p>
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
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/about-1.jpg"
              alt="Sorgfältige Nagelpflege im Nagelstudio by Sinja"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
