"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business } from "@/lib/site-data";

const links = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#ueber-uns", label: "Über mich" },
  { href: "/#bewertungen", label: "Bewertungen" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const overlaysHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = overlaysHero && !scrolled;

  return (
    <header
      className={`${overlaysHero ? "fixed" : "sticky"} top-0 z-50 w-full transition-all duration-500 ${
        transparent
          ? "bg-transparent py-6"
          : "bg-white/95 py-3 shadow-sm backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href="/#top" className="flex flex-col leading-none">
          <span
            className={`font-serif-display text-lg font-semibold tracking-wide transition-colors sm:text-xl ${
              transparent ? "text-white" : "text-rose-800"
            }`}
          >
            {business.name}
          </span>
          <span
            className={`mt-0.5 text-[0.65rem] uppercase tracking-[0.2em] transition-colors ${
              transparent ? "text-white/75" : "text-rose-500"
            }`}
          >
            {business.city} · {business.category.split(" in ")[0]}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:text-rose-500 ${
                  transparent ? "text-white/90" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className={`text-sm font-medium transition-colors hover:text-rose-500 ${
              transparent ? "text-white/90" : "text-foreground/80"
            }`}
          >
            {business.phoneDisplay}
          </a>
          <a
            href={business.bookingUrl}
            className="rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rose-700"
          >
            Termin buchen
          </a>
        </div>

        <button
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
            transparent ? "text-white" : "text-rose-800"
          }`}
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-rose-100 bg-white px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-rose-50 hover:text-rose-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-3">
            <a
              href={business.phoneHref}
              className="rounded-full border border-rose-200 px-5 py-3 text-center text-sm font-semibold text-rose-700"
            >
              {business.phoneDisplay} anrufen
            </a>
            <a
              href={business.bookingUrl}
              onClick={() => setOpen(false)}
              className="rounded-full bg-rose-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Termin buchen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
