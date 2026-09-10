import { createFileRoute, Link } from "@tanstack/react-router";
import danaOkafor from "../assets/dana-okafor.jpg";
import marcusLindqvist from "../assets/marcus-lindqvist.jpg";
import HeroSlider from "../components/HeroSlider";
import { posts } from "../data/posts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Succeed Capital — Financing & Consultancy for Every Business" },
      { name: "description", content: "Succeed Capital pairs patient capital with hands-on counsel for businesses of every size and sector. Book a confidential consultation." },
      { property: "og:title", content: "Succeed Capital — Financing & Consultancy for Every Business" },
      { property: "og:description", content: "Succeed Capital pairs patient capital with hands-on counsel for businesses of every size and sector." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-ink antialiased selection:bg-primary/20">
      <nav className="sticky top-0 z-50 border-b border-line/70 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="/" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-primary/15 font-display text-lg font-bold text-primary ring-1 ring-primary/25">
              S
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">Succeed Capital</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            <a href="#services" className="transition-colors hover:text-ink">
              Services
            </a>
            <a href="#sectors" className="transition-colors hover:text-ink">
              Sectors
            </a>
            <a href="#about" className="transition-colors hover:text-ink">
              About
            </a>
            <a href="#voices" className="transition-colors hover:text-ink">
              Clients
            </a>
            <Link to="/blog" className="transition-colors hover:text-ink">
              Insights
            </Link>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-background ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15"
          >
            Book a consult
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-primary-soft/60 blur-3xl" />
        <div className="pointer-events-none absolute top-32 -right-24 size-96 rounded-full bg-peach/70 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 size-72 rounded-full bg-mint/60 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="inline-flex animate-[rise_600ms_cubic-bezier(.2,.7,0,1)_both] items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-muted ring-1 ring-line backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-accent" />
                Financing & strategy for every stage
              </span>
              <h1 className="animate-rise mt-5 max-w-[16ch] font-display text-5xl font-semibold leading-[1.03] tracking-tight text-balance md:text-6xl">
                Capital that grows with your ambition.
              </h1>
              <p className="animate-rise mt-5 max-w-[46ch] text-lg leading-relaxed text-pretty text-muted">
                We pair patient capital with hands-on counsel — so businesses of every size can fund the next move with confidence, not guesswork.
              </p>
              <div className="animate-rise mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white ring-1 ring-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
                >
                  Start the conversation
                </a>
                <a
                  href="#services"
                  className="rounded-full bg-white/60 px-6 py-3 text-sm font-semibold text-ink ring-1 ring-line backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white"
                >
                  Explore services
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="animate-rise rounded-3xl bg-white/60 p-6 ring-1 ring-line backdrop-blur-xl">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Capital facilitated</span>
                  <span className="font-mono text-[11px] text-accent">FY 2024</span>
                </div>
                <div className="mt-1 font-display text-4xl font-semibold tracking-tight">$2.4B</div>
                <div className="mt-4 flex items-end gap-1.5">
                  <div className="h-6 flex-1 rounded-md bg-primary-soft" />
                  <div className="h-10 flex-1 rounded-md bg-primary-soft" />
                  <div className="h-8 flex-1 rounded-md bg-primary-soft" />
                  <div className="h-14 flex-1 rounded-md bg-primary-soft" />
                  <div className="h-12 flex-1 rounded-md bg-primary-soft" />
                  <div className="h-20 flex-1 rounded-md bg-primary" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-mint/50 p-3 ring-1 ring-line">
                    <div className="font-display text-xl font-semibold">98%</div>
                    <div className="text-xs text-muted">client retention</div>
                  </div>
                  <div className="rounded-2xl bg-sky/50 p-3 ring-1 ring-line">
                    <div className="font-display text-xl font-semibold">14</div>
                    <div className="text-xs text-muted">industries served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HeroSlider />
        </div>
      </section>


      <section className="border-y border-line/70 bg-white/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Trusted across sectors</span>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            <span className="font-display text-base font-semibold text-ink/70">Northwind</span>
            <span className="font-display text-base font-semibold text-ink/70">Atlas Foods</span>
            <span className="font-display text-base font-semibold text-ink/70">Meridian</span>
            <span className="font-display text-base font-semibold text-ink/70">Cedar & Co</span>
            <span className="font-display text-base font-semibold text-ink/70">Bloom Health</span>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-[30ch]">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">(a) Services</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance">One partner, every lever of growth.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-6">
          <div className="group rounded-3xl bg-white/60 p-6 ring-1 ring-line backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl hover:shadow-primary/10 md:col-span-4">
            <div className="flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-2xl bg-primary/12 font-display text-lg font-bold text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-105">
                C
              </span>
              <span className="font-mono text-[11px] text-muted">01 / Core</span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">Corporate Financing</h3>
            <p className="mt-2 max-w-[42ch] text-[15px] leading-relaxed text-pretty text-muted">
              Term loans, growth capital and working-line facilities structured around real cash-flow, not a one-size template.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium">
              <span className="rounded-full bg-primary-soft px-3 py-1 text-primary">Term loans</span>
              <span className="rounded-full bg-peach px-3 py-1 text-ink/70">Growth capital</span>
              <span className="rounded-full bg-butter px-3 py-1 text-ink/70">Working line</span>
            </div>
          </div>
          <div className="rounded-3xl bg-primary/10 p-6 ring-1 ring-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/15 md:col-span-2">
            <span className="font-mono text-[11px] text-primary">02</span>
            <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">Strategic Advisory</h3>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">Independent counsel on entry, expansion and M&A.</p>
          </div>
          <div className="rounded-3xl bg-white/60 p-6 ring-1 ring-line backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl hover:shadow-primary/10 md:col-span-2">
            <span className="font-mono text-[11px] text-muted">03</span>
            <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">Private Wealth</h3>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">Portfolio and estate planning for founders and families.</p>
          </div>
          <div className="rounded-3xl bg-white/60 p-6 ring-1 ring-line backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl hover:shadow-primary/10 md:col-span-2">
            <span className="font-mono text-[11px] text-muted">04</span>
            <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">Public Markets</h3>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">Access, allocation and liquidity for listed growth.</p>
          </div>
          <div className="rounded-3xl bg-white/60 p-6 ring-1 ring-line backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl hover:shadow-primary/10 md:col-span-2">
            <span className="font-mono text-[11px] text-muted">05</span>
            <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">Wealth Structuring</h3>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">Tax-efficient vehicles that keep owners protected.</p>
          </div>
        </div>
      </section>

      <section id="sectors" className="mx-auto max-w-6xl px-6 py-8 pb-20">
        <div className="rounded-[2rem] bg-ink p-8 text-background ring-1 ring-black/5 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-soft">(b) Sectors</span>
              <h2 className="mt-3 max-w-[18ch] font-display text-4xl font-semibold tracking-tight text-balance">Built for every industry we serve.</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 font-display text-lg font-medium text-background/85 sm:grid-cols-3">
              <span>Manufacturing</span>
              <span>Retail</span>
              <span>Healthcare</span>
              <span>Logistics</span>
              <span>Technology</span>
              <span>Real Estate</span>
              <span>Agriculture</span>
              <span>Hospitality</span>
              <span>Energy</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">(c) About</span>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance">A steady hand for businesses built to last.</h2>
            <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-pretty text-muted">
              Succeed Capital was founded on the belief that financing should feel less like a transaction and more like a partnership. Our advisors have sat on both sides of the table — as operators, founders and institutional investors — and we bring that perspective to every engagement.
            </p>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-pretty text-muted">
              Whether you are raising your first round, refinancing for growth, or planning a succession, we stay on the climb with you.
            </p>
          </div>
          <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-line backdrop-blur-md">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="font-display text-3xl font-semibold tracking-tight">12</div>
                <div className="mt-1 text-sm text-muted">Years advising founders and firms</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold tracking-tight">40+</div>
                <div className="mt-1 text-sm text-muted">Senior advisors across sectors</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold tracking-tight">6</div>
                <div className="mt-1 text-sm text-muted">Regional offices</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold tracking-tight">1</div>
                <div className="mt-1 text-sm text-muted">Clear promise: no guesswork</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="voices" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="rounded-3xl bg-white/60 p-7 ring-1 ring-line backdrop-blur-md md:col-span-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">(d) A client's words</span>
            <p className="mt-4 font-display text-2xl font-medium italic leading-snug tracking-tight text-pretty">
              "Succeed didn't just write us a cheque — they sat with us through the whole build-out, and the capital arrived exactly when we needed it."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={danaOkafor}
                alt="Dana Okafor, Co-founder of Atlas Foods"
                width={44}
                height={44}
                loading="lazy"
                className="size-11 rounded-full object-cover ring-1 ring-line"
              />
              <div>
                <div className="text-sm font-semibold">Dana Okafor</div>
                <div className="text-xs text-muted">Co-founder, Atlas Foods</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="grid h-full gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/60 p-6 ring-1 ring-line backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl hover:shadow-primary/10">
                <div className="font-display text-3xl font-semibold tracking-tight">120+</div>
                <div className="mt-1 text-sm text-pretty text-muted">financing structures closed across the region in the last twelve months.</div>
              </div>
              <div className="rounded-3xl bg-mint/40 p-6 ring-1 ring-line backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-mint/60 hover:shadow-xl hover:shadow-primary/10">
                <div className="font-display text-3xl font-semibold tracking-tight">3 wks</div>
                <div className="mt-1 text-sm text-pretty text-muted">median from first call to a signed term sheet, on average.</div>
              </div>
              <div className="rounded-3xl bg-white/60 p-6 ring-1 ring-line backdrop-blur-md sm:col-span-2">
                <p className="font-display text-lg font-medium leading-snug tracking-tight text-pretty">
                  "Their advisory team flagged a restructuring that saved us eight figures — before the bank ever saw the numbers."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={marcusLindqvist}
                    alt="Marcus Lindqvist, COO of Meridian Logistics"
                    width={40}
                    height={40}
                    loading="lazy"
                    className="size-10 rounded-full object-cover ring-1 ring-line"
                  />
                  <div>
                    <div className="text-sm font-semibold">Marcus Lindqvist</div>
                    <div className="text-xs text-muted">COO, Meridian Logistics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[30ch]">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">(e) Insights</span>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance">Notes from the table.</h2>
          </div>
          <Link to="/blog" className="text-sm font-semibold text-primary transition-colors hover:text-ink">
            View all insights →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="flex flex-col overflow-hidden rounded-3xl bg-white/60 ring-1 ring-line backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl hover:shadow-primary/10"
            >
              <img
                src={post.cover}
                alt={post.coverAlt}
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  <span className="rounded-full bg-primary-soft px-2.5 py-1 text-primary">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight text-balance">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 text-white ring-1 ring-primary/30 md:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary-soft/40 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="max-w-[16ch] font-display text-4xl font-semibold tracking-tight text-balance">Let's map your next move.</h2>
              <p className="mt-3 max-w-[40ch] text-pretty text-white/80">A confidential, no-pressure conversation with a senior advisor — usually within one business day.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@succeed.capital"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10"
              >
                Book a consult
              </a>
              <a
                href="mailto:hello@succeed.capital"
                className="rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition-all hover:-translate-y-0.5 hover:bg-white/25"
              >
                hello@succeed.capital
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line/70 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-primary/15 font-display text-lg font-bold text-primary ring-1 ring-primary/25">S</span>
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
                <li><a href="#services" className="transition-colors hover:text-ink">Corporate Financing</a></li>
                <li><a href="#services" className="transition-colors hover:text-ink">Strategic Advisory</a></li>
                <li><a href="#services" className="transition-colors hover:text-ink">Private Wealth</a></li>
                <li><a href="#services" className="transition-colors hover:text-ink">Public Markets</a></li>
                <li><a href="#services" className="transition-colors hover:text-ink">Wealth Structuring</a></li>
              </ul>
            </nav>

            <nav aria-label="Company" className="md:col-span-2">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Company</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                <li><a href="#about" className="transition-colors hover:text-ink">About us</a></li>
                <li><a href="#sectors" className="transition-colors hover:text-ink">Sectors</a></li>
                <li><a href="#voices" className="transition-colors hover:text-ink">Clients</a></li>
                <li><Link to="/blog" className="transition-colors hover:text-ink">Insights</Link></li>
                <li><a href="#contact" className="transition-colors hover:text-ink">Contact</a></li>
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
              <a
                href="#contact"
                className="mt-5 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15"
              >
                Book a consult
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-line/70 pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
            <span className="font-mono text-[11px]">© 2026 Succeed Capital. All rights reserved.</span>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <a href="#contact" className="transition-colors hover:text-ink">Privacy</a>
              <a href="#contact" className="transition-colors hover:text-ink">Terms</a>
              <a href="#contact" className="transition-colors hover:text-ink">Disclosures</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
