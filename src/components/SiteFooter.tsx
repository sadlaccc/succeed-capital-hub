import { Link } from "@tanstack/react-router";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line/70 bg-white/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-primary/15 font-display text-lg font-bold text-primary ring-1 ring-primary/25">
                S
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink">Succeed Capital</span>
            </div>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-pretty text-muted">
              Financing and consultancy for businesses of every size and sector — patient capital paired with hands-on counsel.
            </p>
            <div className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              <span className="size-1.5 rounded-full bg-accent" />
              Trusted across 14 industries
            </div>
          </div>

          <nav aria-label="Services" className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li><Link to="/" hash="services" className="transition-colors hover:text-ink">Corporate Financing</Link></li>
              <li><Link to="/" hash="services" className="transition-colors hover:text-ink">Strategic Advisory</Link></li>
              <li><Link to="/" hash="services" className="transition-colors hover:text-ink">Private Wealth</Link></li>
              <li><Link to="/" hash="services" className="transition-colors hover:text-ink">Public Markets</Link></li>
              <li><Link to="/" hash="services" className="transition-colors hover:text-ink">Wealth Structuring</Link></li>
            </ul>
          </nav>

          <nav aria-label="Company" className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li><Link to="/" hash="about" className="transition-colors hover:text-ink">About us</Link></li>
              <li><Link to="/" hash="sectors" className="transition-colors hover:text-ink">Sectors</Link></li>
              <li><Link to="/" hash="voices" className="transition-colors hover:text-ink">Clients</Link></li>
              <li><Link to="/blog" className="transition-colors hover:text-ink">Insights</Link></li>
              <li><Link to="/" hash="contact" className="transition-colors hover:text-ink">Contact</Link></li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a href="mailto:hello@succeed.capital" className="font-medium text-ink transition-colors hover:text-primary">
                  hello@succeed.capital
                </a>
              </li>
              <li>Mon–Fri, 8:00–18:00 EAT</li>
              <li>Nairobi · Kampala · Dar es Salaam · Kigali</li>
            </ul>
            <Link
              to="/"
              hash="contact"
              className="mt-5 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15"
            >
              Book a consult
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line/70 pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-[11px]">© 2026 Succeed Capital. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <Link to="/" hash="contact" className="transition-colors hover:text-ink">Privacy</Link>
            <Link to="/" hash="contact" className="transition-colors hover:text-ink">Terms</Link>
            <Link to="/" hash="contact" className="transition-colors hover:text-ink">Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
