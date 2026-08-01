import type { Metadata } from "next";
import { business, fullAddress } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Impressum | ${business.name}`,
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <h1 className="font-serif-display text-3xl font-semibold text-rose-900">
        Impressum
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/80">
        <div>
          <h2 className="font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
          <p className="mt-2">
            {business.name}
            <br />
            [Vollständiger Vor- und Nachname der Inhaberin – bitte ergänzen]
            <br />
            {fullAddress}
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-foreground">Kontakt</h2>
          <p className="mt-2">
            Telefon: {business.phoneDisplay}
            <br />
            E-Mail: [bitte ergänzen]
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-foreground">Umsatzsteuer-ID</h2>
          <p className="mt-2">
            [Umsatzsteuer-Identifikationsnummer, falls vorhanden – bitte
            ergänzen]
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-foreground">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-2">
            {business.name}, {fullAddress}
          </p>
        </div>

        <div className="rounded-xl bg-rose-50 p-4 text-xs text-rose-700 ring-1 ring-rose-100">
          Hinweis: Diese Seite enthält Platzhalter für gesetzlich
          vorgeschriebene Angaben, die vor Veröffentlichung der Website
          vollständig ergänzt werden müssen.
        </div>
      </div>
    </section>
  );
}
