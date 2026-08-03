import Link from "next/link";
import { business } from "@/lib/site-data";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-[#0d0203] py-8 px-5 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <p className="font-serif-display text-lg text-white/85">
            {business.name}
          </p>
          <p className="mt-1 text-xs text-white/35">
            © {new Date().getFullYear()} · Alle Rechte vorbehalten
          </p>
        </div>

        <div className="flex gap-6">
          <Link
            href="/impressum"
            className="text-xs uppercase tracking-[0.1em] text-white/40 transition-colors hover:text-white/70"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-xs uppercase tracking-[0.1em] text-white/40 transition-colors hover:text-white/70"
          >
            Datenschutz
          </Link>
          <Link
            href="/#kontakt"
            className="text-xs uppercase tracking-[0.1em] text-white/40 transition-colors hover:text-white/70"
          >
            Kontakt
          </Link>
        </div>

        <SocialLinks variant="dark" />
      </div>
    </footer>
  );
}
