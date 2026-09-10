import { useCallback, useEffect, useState } from "react";
import slideCity from "../assets/slide-city.jpg";
import slideRetail from "../assets/slide-retail.jpg";
import slideAgri from "../assets/slide-agri.jpg";

const slides = [
  {
    image: slideCity,
    alt: "City business district at golden hour",
    kicker: "Corporate financing",
    title: "Capital structured around your cash-flow",
    copy: "Term loans, growth capital and working lines built from your real numbers — not a template.",
    href: "#services",
    cta: "Explore services",
  },
  {
    image: slideRetail,
    alt: "Retail shop interior with the owner at the counter",
    kicker: "Small & mid-sized business",
    title: "Funding for the shop, the workshop, the team",
    copy: "From a first facility to a refinance, we sit on the same side of the table as the owner.",
    href: "#contact",
    cta: "Book a consult",
  },
  {
    image: slideAgri,
    alt: "Greenhouse and logistics trucks at dawn",
    kicker: "Every sector",
    title: "Agriculture, logistics, healthcare and beyond",
    copy: "Fourteen industries served by advisors who have operated inside them.",
    href: "#sectors",
    cta: "See sectors",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      aria-label="Featured highlights"
      aria-roledescription="carousel"
      className="mt-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-line">
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/7]">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                width={1600}
                height={900}
                loading={i === 0 ? "eager" : "lazy"}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10" />
              <div className="absolute inset-0 flex items-end p-6 sm:items-center sm:p-12">
                <div className="max-w-[46ch] text-background">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-soft">
                    {slide.kicker}
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
                    {slide.title}
                  </h2>
                  <p className="mt-3 hidden text-pretty text-background/80 sm:block">{slide.copy}</p>
                  <a
                    href={slide.href}
                    className="mt-5 inline-block rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-ink ring-1 ring-line backdrop-blur transition-colors hover:bg-background"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-ink ring-1 ring-line backdrop-blur transition-colors hover:bg-background"
        >
          ›
        </button>

        <div className="absolute bottom-4 right-5 flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-7 bg-background" : "w-3 bg-background/50 hover:bg-background/80"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
