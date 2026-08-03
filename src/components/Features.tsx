import { features } from "@/lib/site-data";

const icons = [
  <path key="1" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  <path key="2" strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />,
  <path key="3" strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />,
  <path key="4" strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM3.751 20.25a8.25 8.25 0 0 1 16.498 0" />,
];

export default function Features() {
  return (
    <section id="vorteile" className="bg-sand-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {features.map((feature, i) => (
          <div key={feature.title} className="group flex flex-col items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-700 transition-colors group-hover:bg-rose-600 group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="h-6 w-6"
              >
                {icons[i]}
              </svg>
            </span>
            <h3 className="font-serif-display text-lg font-semibold text-rose-900">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/70">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
