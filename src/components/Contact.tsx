import {
  business,
  fullAddress,
  mapsDirectionsUrl,
  mapsEmbedSrc,
} from "@/lib/site-data";
import SocialLinks from "@/components/SocialLinks";

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
      <path fillRule="evenodd" d="M11.54 22.351a.75.75 0 0 0 .92 0c.005-.004 1.088-.849 2.166-2.038a19.9 19.9 0 0 0 2.09-2.796c.55-1.007 1.03-2.083 1.03-3.267a5.75 5.75 0 1 0-11.5 0c0 1.184.48 2.26 1.03 3.267a19.9 19.9 0 0 0 2.09 2.796c1.078 1.189 2.161 2.034 2.166 2.038ZM12 13.25a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clipRule="evenodd" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
      <path d="M6.75 12a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z" />
      <path fillRule="evenodd" d="M1.5 9.832v4.286c0 1.797 1.46 3.257 3.257 3.257h.001c.4 1.155.98 2.213 1.706 3.146a.75.75 0 0 0 1.229-.848 8.965 8.965 0 0 1-.918-1.573 5.243 5.243 0 0 0 8.45 0 8.965 8.965 0 0 1-.918 1.573.75.75 0 0 0 1.229.848 10.463 10.463 0 0 0 1.706-3.146h.001A3.257 3.257 0 0 0 20.5 14.118V9.832A3.257 3.257 0 0 0 17.243 6.5H6.757A3.257 3.257 0 0 0 3.5 9.75" clipRule="evenodd" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="kontakt" className="bg-[#180406] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-rose-400">
            Kontakt &amp; Anfahrt
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-white sm:text-4xl">
            Wir freuen uns auf deinen Besuch
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-rose-400/70 to-transparent" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <div className="mb-5 flex items-center gap-3 text-rose-300">
              <MapPinIcon />
              <h3 className="font-serif-display text-lg text-white">Adresse</h3>
            </div>
            <p className="text-sm leading-relaxed text-rose-100/70">{fullAddress}</p>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block border-b border-rose-400/40 pb-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-rose-300 transition-colors hover:text-rose-200"
            >
              Route berechnen
            </a>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3 text-rose-300">
              <PhoneIcon />
              <h3 className="font-serif-display text-lg text-white">Kontakt</h3>
            </div>
            <a
              href={business.phoneHref}
              className="block text-sm text-rose-100/70 transition-colors hover:text-white"
            >
              {business.phoneDisplay}
            </a>
            <SocialLinks variant="dark" className="mt-5" />
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3 text-rose-300">
              <CalendarIcon />
              <h3 className="font-serif-display text-lg text-white">Termin</h3>
            </div>
            <p className="text-sm leading-relaxed text-rose-100/70">
              Termine direkt auf dieser Website auswählen und anfragen.
            </p>
            <a
              href={business.bookingUrl}
              className="mt-4 inline-block rounded-full bg-rose-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-rose-500"
            >
              Termin buchen
            </a>
          </div>
        </div>

        <div className="mt-16 aspect-[16/6] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <iframe
            src={mapsEmbedSrc}
            title={`Karte: ${business.name}`}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
