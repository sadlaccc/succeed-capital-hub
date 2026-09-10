import { Link } from "@tanstack/react-router";

export default function SiteNav({ active }: { active?: "insights" }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-line/70 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-primary/15 font-display text-lg font-bold text-primary ring-1 ring-primary/25">
            S
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Succeed Capital</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          <Link to="/" hash="services" className="transition-colors hover:text-ink">
            Services
          </Link>
          <Link to="/" hash="sectors" className="transition-colors hover:text-ink">
            Sectors
          </Link>
          <Link to="/" hash="about" className="transition-colors hover:text-ink">
            About
          </Link>
          <Link to="/" hash="voices" className="transition-colors hover:text-ink">
            Clients
          </Link>
          <Link to="/blog" className={active === "insights" ? "text-ink" : "transition-colors hover:text-ink"}>
            Insights
          </Link>
        </div>
        <Link
          to="/"
          hash="contact"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-background ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15"
        >
          Book a consult
        </Link>
      </div>
    </nav>
  );
}
