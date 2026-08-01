import type { Metadata } from "next";
import { business, fullAddress } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Datenschutzerklärung | ${business.name}`,
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <h1 className="font-serif-display text-3xl font-semibold text-rose-900">
        Datenschutzerklärung
      </h1>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground/80">
        <div>
          <h2 className="font-semibold text-foreground">
            1. Verantwortlicher
          </h2>
          <p className="mt-2">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            {business.name}, {fullAddress}, Telefon: {business.phoneDisplay}
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-foreground">
            2. Erhebung und Verarbeitung von Daten
          </h2>
          <p className="mt-2">
            Diese Website dient ausschließlich der Information über unsere
            Leistungen. Beim Besuch dieser Website werden durch den Hosting-
            Anbieter automatisch technische Informationen (z. B. IP-Adresse,
            Datum und Uhrzeit des Zugriffs, aufgerufene Seite) in
            Server-Logdateien gespeichert, um den Betrieb der Website
            technisch zu gewährleisten. Eine Zusammenführung dieser Daten
            mit anderen Datenquellen findet nicht statt.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-foreground">
            3. Terminbuchung über TerminPanda
          </h2>
          <p className="mt-2">
            Für die Online-Terminbuchung wird der externe Dienst
            TerminPanda genutzt. Beim Klick auf „Termin buchen“ verlassen
            Sie diese Website und gelangen auf die Plattform des Anbieters
            TerminPanda, für die dessen eigene Datenschutzbestimmungen
            gelten.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-foreground">
            4. Google Maps
          </h2>
          <p className="mt-2">
            Zur Anzeige unseres Standorts binden wir eine Karte von Google
            Maps ein. Beim Aufruf der Kontaktseite kann eine Verbindung zu
            Servern von Google LLC hergestellt und dabei Ihre IP-Adresse
            übertragen werden. Weitere Informationen entnehmen Sie der
            Datenschutzerklärung von Google.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-foreground">
            5. Instagram
          </h2>
          <p className="mt-2">
            Wir verlinken auf unser Instagram-Profil. Beim Anklicken des
            Links werden Sie zu Instagram (Meta Platforms Ireland Limited)
            weitergeleitet, für das die dortigen Datenschutzbestimmungen
            gelten.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-foreground">
            6. Ihre Rechte
          </h2>
          <p className="mt-2">
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
            Löschung sowie Einschränkung der Verarbeitung Ihrer
            gespeicherten personenbezogenen Daten. Wenden Sie sich hierzu
            gerne an uns unter den im Impressum genannten Kontaktdaten.
          </p>
        </div>

        <div className="rounded-xl bg-rose-50 p-4 text-xs text-rose-700 ring-1 ring-rose-100">
          Hinweis: Dies ist eine allgemeine Vorlage. Bitte vor
          Veröffentlichung durch eine rechtssichere, individuell geprüfte
          Datenschutzerklärung ergänzen bzw. bestätigen lassen.
        </div>
      </div>
    </section>
  );
}
