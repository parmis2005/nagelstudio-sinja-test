import { business, fullAddress, mapsDirectionsUrl } from "@/lib/site-data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#211b1d]">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-center"
          src="/video/home-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 sm:min-h-[92vh] lg:justify-center lg:px-8 lg:pb-24">
        <div className="max-w-2xl animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/30 backdrop-blur-sm">
            <span className="flex items-center gap-0.5 text-gold-400">
              {"★★★★★"}
            </span>
            <span>
              {business.rating.toFixed(1).replace(".", ",")} · {business.reviewCount}{" "}
              Google-Rezensionen
            </span>
          </div>

          <h1 className="font-serif-display text-4xl font-semibold leading-tight text-white text-balance sm:text-5xl lg:text-6xl">
            Dein Wohlfühlort für gepflegte Hände &amp; Füße
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Willkommen im {business.name} in {business.city} – professionelle
            Nagel- und Fußpflege in entspannter Atmosphäre, mit viel Liebe
            zum Detail und höchsten Hygienestandards.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-rose-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose-900/30 transition-colors hover:bg-rose-700 sm:text-base"
            >
              Termin online buchen
            </a>
            <a
              href="#leistungen"
              className="rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur-sm transition-colors hover:bg-white/20 sm:text-base"
            >
              Leistungen ansehen
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/85">
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M11.54 22.351a.75.75 0 0 0 .92 0c.005-.004 1.088-.849 2.166-2.038a19.9 19.9 0 0 0 2.09-2.796c.55-1.007 1.03-2.083 1.03-3.267a5.75 5.75 0 1 0-11.5 0c0 1.184.48 2.26 1.03 3.267a19.9 19.9 0 0 0 2.09 2.796c1.078 1.189 2.161 2.034 2.166 2.038ZM12 13.25a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clipRule="evenodd" />
              </svg>
              {fullAddress}
            </a>
            <a href={business.phoneHref} className="flex items-center gap-2 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
