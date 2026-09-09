import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, posts } from "../../data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    const title = post ? `${post.title} — Succeed Capital` : "Insight — Succeed Capital";
    const description = post?.excerpt ?? "Insights on financing and advisory from Succeed Capital.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug);

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
          <Link to="/blog" className="text-sm font-medium text-muted transition-colors hover:text-ink">
            All insights
          </Link>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-6 pt-14 pb-20">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span className="rounded-full bg-primary-soft px-2.5 py-1 text-primary">{post.category}</span>
          <time dateTime={post.date}>{post.dateLabel}</time>
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">{post.excerpt}</p>
        <img
          src={post.cover}
          alt={post.coverAlt}
          width={1200}
          height={800}
          className="mt-8 aspect-[16/9] w-full rounded-3xl object-cover ring-1 ring-line"
        />
        <div className="mt-8 space-y-5">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-[17px] leading-[1.75] text-pretty text-ink/85">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-primary p-8 text-white">
          <h2 className="max-w-[20ch] font-display text-2xl font-semibold tracking-tight text-balance">
            Want this applied to your own numbers?
          </h2>
          <p className="mt-2 max-w-[44ch] text-pretty text-white/80">
            A confidential conversation with a senior advisor, usually within one business day.
          </p>
          <a
            href="mailto:hello@succeed.capital"
            className="mt-5 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10"
          >
            Book a consult
          </a>
        </div>

        <div className="mt-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Keep reading</span>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                to="/blog/$slug"
                params={{ slug: other.slug }}
                className="rounded-3xl bg-white/60 p-5 ring-1 ring-line backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl hover:shadow-primary/10"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{other.category}</span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight text-balance">
                  {other.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </article>

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
