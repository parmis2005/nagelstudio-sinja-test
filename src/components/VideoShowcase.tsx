export default function VideoShowcase() {
  return (
    <section className="relative overflow-hidden bg-rose-900 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="text-white">
          <span className="text-sm font-semibold uppercase tracking-wider text-rose-200">
            Studio-Atmosphäre
          </span>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-balance sm:text-4xl">
            Erlebe entspannte Nagelpflege in ruhiger Atmosphäre
          </h2>
          <div className="mt-5 h-px w-16 bg-gradient-to-r from-rose-300 to-transparent" />
          <p className="mt-6 max-w-lg text-rose-100/90 leading-relaxed">
            Nimm dir eine Auszeit: Mit Ruhe, Sorgfalt und Liebe zum Detail
            kümmere ich mich um deine Hände und Füße.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[280px]">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] border-4 border-white/20 shadow-2xl">
            <video
              className="h-full w-full object-cover"
              src="/video/nail-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Video: Maniküre-Behandlung im Nagelstudio by Sinja"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
