import blogCapital from "../assets/blog-capital.jpg";
import blogSme from "../assets/blog-sme.jpg";
import blogAdvisory from "../assets/blog-advisory.jpg";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateLabel: string;
  readTime: string;
  cover: string;
  coverAlt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "structuring-growth-capital",
    title: "Structuring growth capital without over-diluting your business",
    excerpt:
      "Most owners are offered one shape of money. Here is how we build a facility around real cash-flow instead of a template.",
    category: "Financing",
    date: "2026-08-18",
    dateLabel: "18 August 2026",
    readTime: "6 min read",
    cover: blogCapital,
    coverAlt: "Boardroom table with printed financial charts in warm daylight",
    body: [
      "When a business is ready to scale, the first offer on the table is rarely the right one. Lenders and investors work from templates, and a template rarely matches the rhythm of your receipts, your seasonality, or the length of your working-capital cycle.",
      "We start the other way around: with twelve to twenty-four months of actual cash movement. From there we can see how much of the raise should be debt, how much should be equity, and how much can be avoided altogether by tightening the collection cycle.",
      "A blended structure — a modest term loan, a revolving line for stock, and a small equity tranche reserved for the expansion itself — often costs a business far less ownership than a single large round. It also keeps the founder in control of timing.",
      "The practical test is simple. If a facility only works when every forecast lands, it is the wrong facility. Good structuring survives a bad quarter.",
    ],
  },
  {
    slug: "small-business-lending-readiness",
    title: "Five things lenders look for before they ever read your forecast",
    excerpt:
      "Approval usually turns on housekeeping, not ambition. A short checklist we run with every small and mid-sized client.",
    category: "SME Playbook",
    date: "2026-07-02",
    dateLabel: "2 July 2026",
    readTime: "5 min read",
    cover: blogSme,
    coverAlt: "Workshop owner reviewing figures on a tablet on the factory floor",
    body: [
      "Founders often assume a financing decision rests on the strength of the plan. In practice, a credit committee forms a view long before the forecast page — from how clean and consistent the record-keeping is.",
      "First, reconcile your accounts. Bank statements that match your books remove the single biggest source of doubt. Second, separate owner spending from business spending; blended accounts make margins impossible to read.",
      "Third, document your customer concentration honestly. One client at sixty percent of revenue is not disqualifying, but discovering it late is. Fourth, keep tax and statutory filings current. Fifth, be able to explain your worst month in one paragraph.",
      "Clients who tidy these five items typically move from first conversation to term sheet in a matter of weeks rather than months.",
    ],
  },
  {
    slug: "advisory-that-earns-its-fee",
    title: "What good advisory actually looks like across sectors",
    excerpt:
      "From manufacturing to healthcare, the value is rarely in the deck. It is in the decision you avoid making badly.",
    category: "Advisory",
    date: "2026-06-11",
    dateLabel: "11 June 2026",
    readTime: "4 min read",
    cover: blogAdvisory,
    coverAlt: "Two advisors shaking hands across a desk in a bright office",
    body: [
      "Advisory earns its fee in the decisions it prevents. A restructuring flagged before a bank sees the numbers, a lease renegotiated before expansion, an acquisition walked away from — these rarely make a case study, but they compound.",
      "Sector context matters more than most firms admit. Working capital in agriculture behaves nothing like working capital in software; a logistics operator's fleet renewal cycle is a financing question, not an operations one.",
      "That is why our engagements pair a generalist advisor with someone who has operated in your industry. One holds the structure, the other holds the reality check.",
      "If you are weighing a move in the next two quarters, an early conversation costs nothing and usually reframes the question.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
