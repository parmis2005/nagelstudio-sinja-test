import { business, fullAddress, mapsDirectionsUrl } from "@/lib/site-data";

function StarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="m10 1.4 2.44 5.28 5.78.68-4.27 3.95 1.13 5.7L10 14.16l-5.08 2.85 1.13-5.7-4.27-3.95 5.78-.68L10 1.4Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#211b1d]"
    >
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-center"
          src="/video/home-hero-hq.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/15 via-transparent to-black/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-32 text-center text-white animate-fade-up">
        <p className="text-xs uppercase tracking-[0.35em] text-rose-200/90">
          Willkommen im {business.name}
        </p>

        <h1 className="font-serif-display mt-6 text-[2.15rem] font-semibold leading-tight text-white text-balance sm:text-[2.6rem] lg:text-[3.4rem]">
          Nagel- und Fußpflege
        </h1>
        <p className="font-serif-display mt-2 whitespace-nowrap text-[1.25rem] italic font-medium text-rose-200 sm:text-[1.7rem] lg:text-[2.2rem]">
          mit Ruhe, Stil &amp; Liebe zum Detail
        </p>

        <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-rose-300/80 to-transparent" />

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Sorgfältige Pflege in ruhiger Atmosphäre.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/90">
          <span className="flex items-center gap-0.5 text-gold-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </span>
          <span>
            {business.rating.toFixed(1).replace(".", ",")} · {business.reviewCount}{" "}
            Google-Rezensionen
          </span>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={business.bookingUrl}
            className="rounded-full bg-rose-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose-900/30 transition-colors hover:bg-rose-700 sm:text-base"
          >
            Termin buchen
          </a>
          <a
            href="#leistungen"
            className="rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur-sm transition-colors hover:bg-white/20 sm:text-base"
          >
            Leistungen ansehen
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
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

      <a
        href="#vorteile"
        aria-label="Nach unten scrollen"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white animate-bounce"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 8.25 7.5 7.5 7.5-7.5" />
        </svg>
      </a>
    </section>
  );
}
