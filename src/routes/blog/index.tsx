import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "../../data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Insights & Notes — Succeed Capital Blog" },
      {
        name: "description",
        content:
          "Practical notes on financing, lending readiness and advisory from the Succeed Capital team — written for owners of businesses in every sector.",
      },
      { property: "og:title", content: "Insights & Notes — Succeed Capital Blog" },
      {
        property: "og:description",
        content: "Practical notes on financing, lending readiness and advisory for business owners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const lead = posts[0]!;
  const rest = posts.slice(1);

  return (
    <div className="min-h-screen bg-background font-body text-ink antialiased">
      <nav className="sticky top-0 z-50 border-b border-line/70 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-primary/15 font-display text-lg font-bold text-primary ring-1 ring-primary/25">
              S
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">Succeed Capital</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            <Link to="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <Link to="/blog" className="text-ink">
              Insights
            </Link>
          </div>
          <a
            href="mailto:hello@succeed.capital"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15"
          >
            Book a consult
          </a>
        </div>
      </nav>

      <header className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Insights</span>
        <h1 className="mt-3 max-w-[24ch] font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance">
          Notes from the table.
        </h1>
        <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-pretty text-muted">
          Short, practical pieces on financing, lending readiness and advisory — written for owners, not for committees.
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20">
        <Link
          to="/blog/$slug"
          params={{ slug: lead.slug }}
          className="group grid gap-6 overflow-hidden rounded-[2rem] bg-white/60 p-5 ring-1 ring-line backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl hover:shadow-primary/10 md:grid-cols-2 md:p-6"
        >
          <img
            src={lead.cover}
            alt={lead.coverAlt}
            width={1200}
            height={800}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              <span className="rounded-full bg-primary-soft px-2.5 py-1 text-primary">{lead.category}</span>
              <span>{lead.dateLabel}</span>
              <span>{lead.readTime}</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance">
              {lead.title}
            </h2>
            <p className="mt-3 max-w-[46ch] text-pretty text-muted">{lead.excerpt}</p>
            <span className="mt-5 text-sm font-semibold text-primary">Read the piece →</span>
          </div>
        </Link>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white/60 ring-1 ring-line backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl hover:shadow-primary/10"
            >
              <img
                src={post.cover}
                alt={post.coverAlt}
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  <span className="rounded-full bg-primary-soft px-2.5 py-1 text-primary">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight text-balance">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">{post.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-primary">Read the piece →</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-line/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-muted">
          <Link to="/" className="font-display font-semibold text-ink">
            Succeed Capital
          </Link>
          <span className="font-mono text-[11px]">© 2026 Succeed Capital</span>
        </div>
      </footer>
    </div>
  );
}
