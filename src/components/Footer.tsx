import Link from "next/link";
import {
  business,
  fullAddress,
  mapsDirectionsUrl,
} from "@/lib/site-data";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-rose-950 text-rose-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-serif-display text-xl font-semibold text-white">
            {business.name}
          </p>
          <p className="mt-2 text-sm text-rose-200/80">{business.category}</p>
          <SocialLinks variant="dark" showLabels className="mt-4" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-rose-300">
            Kontakt
          </p>
          <ul className="mt-4 space-y-2 text-sm text-rose-200/90">
            <li>
              <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {fullAddress}
              </a>
            </li>
            <li>
              <a href={business.phoneHref} className="hover:text-white">
                {business.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-rose-300">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 text-sm text-rose-200/90">
            <li><Link href="/#leistungen" className="hover:text-white">Leistungen</Link></li>
            <li><Link href="/galerie" className="hover:text-white">Galerie</Link></li>
            <li><Link href="/#ueber-uns" className="hover:text-white">Über mich</Link></li>
            <li><Link href="/#bewertungen" className="hover:text-white">Bewertungen</Link></li>
            <li><Link href="/#kontakt" className="hover:text-white">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-rose-300">
            Termin
          </p>
          <p className="mt-4 text-sm text-rose-200/90">
            Termine direkt auf dieser Website auswählen und anfragen.
          </p>
          <a
            href={business.bookingUrl}
            className="mt-4 inline-block rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rose-500"
          >
            Termin buchen
          </a>
        </div>
      </div>

      <div className="border-t border-rose-900/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-rose-300/80 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {business.name}. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
