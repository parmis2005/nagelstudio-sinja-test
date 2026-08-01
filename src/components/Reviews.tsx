import { business, mapsSearchUrl, reviews } from "@/lib/site-data";

function Stars({ count }: { count: number }) {
  return (
    <span className="text-gold-500" aria-hidden="true">
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="bewertungen" className="bg-sand-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-rose-500">
            Bewertungen
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-rose-900 sm:text-4xl">
            Was unsere Kundinnen &amp; Kunden sagen
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Stars count={Math.round(business.rating)} />
            <span className="text-lg font-semibold text-rose-900">
              {business.rating.toFixed(1).replace(".", ",")}
            </span>
            <span className="text-foreground/60">
              · {business.reviewCount} Google-Rezensionen
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-rose-100"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-200 font-serif-display text-lg font-semibold text-rose-800">
                  {review.initial}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-foreground/50">
                    Rezension aus Google · {review.timeAgo}
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <Stars count={review.rating} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-rose-600 underline underline-offset-4 hover:text-rose-700"
          >
            Alle Rezensionen auf Google ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
