import Link from "next/link";
import {
  business,
  fullAddress,
  mapsDirectionsUrl,
} from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-rose-950 text-rose-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-serif-display text-xl font-semibold text-white">
            {business.name}
          </p>
          <p className="mt-2 text-sm text-rose-200/80">{business.category}</p>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-rose-200 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.428.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808v-.63c0-2.43.012-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Z" clipRule="evenodd" />
            </svg>
            @nagelstudio_by_sinja
          </a>
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
            <li><a href="#leistungen" className="hover:text-white">Leistungen</a></li>
            <li><a href="#galerie" className="hover:text-white">Galerie</a></li>
            <li><a href="#ueber-uns" className="hover:text-white">Über uns</a></li>
            <li><a href="#bewertungen" className="hover:text-white">Bewertungen</a></li>
            <li><a href="#kontakt" className="hover:text-white">Kontakt</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-rose-300">
            Termin
          </p>
          <p className="mt-4 text-sm text-rose-200/90">
            Termine nach Vereinbarung – bequem online buchen.
          </p>
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
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
