// Cloudflare Pages Function
// Serves GET https://quietwealth.news/news-sitemap.xml — a Google News
// sitemap containing only articles published within the last 48 hours.
//
// The 48-hour window is computed fresh on every request (Date.now()), so
// articles automatically age out of this feed without any redeploy or
// scheduled job. This file does NOT touch /sitemap.xml, which remains the
// full, permanent sitemap and is generated separately.
//
// MAINTENANCE: this ARTICLES array is a static snapshot of every article's
// slug / headline / datePublished as of the last deploy. It is not read from
// the site's HTML at request time (Pages Functions don't have filesystem
// access to the rest of the build), so add a new entry here — in the same
// { slug, title, pub } shape, pub as an ISO 8601 timestamp with UTC offset
// matching the article's real datePublished — whenever a new article is
// published. Nothing needs to be removed manually; entries simply stop
// appearing once they age past 48 hours.

const SITE_URL = "https://quietwealth.news";
const PUBLICATION_NAME = "QuietWealth.news";
const LANGUAGE = "en";
const WINDOW_HOURS = 48;

const ARTICLES = [
  { slug: "credit-card-points-value-airport-lounge-access", title: "What a Lounge Visit Is Actually Worth: The Math Behind Premium Travel Cards", pub: "2026-09-27T08:00:00-05:00" },
  { slug: "trust-jurisdictions-nevada-south-dakota-wyoming-delaware", title: "Why So Many Trusts Are Written in Nevada and South Dakota \u2014 Not Wherever You Actually Live", pub: "2026-09-27T08:00:00-05:00" },
  { slug: "warren-buffett-father-time-patient-investing-legacy", title: "Warren Buffett Stepped Down Saying 'Father Time Always Wins.' His Career Was the Rebuttal.", pub: "2026-09-27T08:00:00-05:00" },
  { slug: "1099-k-threshold-2026-gig-sellers", title: "The 1099-K Threshold Is Back to $20,000. Here's What That Means for Your Side Hustle.", pub: "2026-09-26T23:30:00-05:00" },
  { slug: "custodial-roth-ira-kids-earned-income", title: "Custodial Roth IRA: How to Invest Your Kid's First Paycheck Tax-Free", pub: "2026-09-26T23:30:00-05:00" },
  { slug: "family-office-101-who-needs-one", title: "Family Office 101: What They Are, and Who Actually Needs One", pub: "2026-09-26T23:30:00-05:00" },
  { slug: "scam-series-part-2-ai-voice-cloning", title: "The Scam Series, Part 2: When the Voice on the Phone Is a Perfect Fake", pub: "2026-09-26T23:30:00-05:00" },
  { slug: "tax-loss-harvesting-year-end-2026", title: "Tax-Loss Harvesting: The Year-End Move Worth Understanding Before December 31", pub: "2026-09-26T23:30:00-05:00" },
  { slug: "trusts-101-revocable-vs-irrevocable", title: "Trusts 101: Revocable vs. Irrevocable, and When a Will Isn't Enough", pub: "2026-09-26T23:30:00-05:00" },
  { slug: "utma-ugma-custodial-accounts-explained", title: "UTMA and UGMA Accounts, Explained: The Custodial Account Most Parents Get Wrong", pub: "2026-09-26T23:30:00-05:00" },
  { slug: "bitcoin-etf-inflows-patient-investor-2026", title: "Spot Bitcoin ETFs Just Posted Their Fattest 2026 Inflow Day. That Is a Plumbing Story, Not a Signal to Chase.", pub: "2026-09-22T08:00:00-05:00" },
  { slug: "existing-home-sales-august-2026-affordability", title: "Existing-Home Sales Dipped in August. Affordability Quietly Got Better Anyway.", pub: "2026-09-22T08:00:00-05:00" },
  { slug: "kevin-oleary-signal-noise-investing-discipline", title: "Mr. Wonderful's Real Investing Rulebook Isn't From Shark Tank. It's From His Mother.", pub: "2026-09-22T08:00:00-05:00" },
  { slug: "meta-muse-ai-agent-index-investor", title: "Meta's Muse AI Agent Is Rewriting Wall Street's Monetization Thesis. You Probably Already Own the Stock.", pub: "2026-09-22T08:00:00-05:00" },
  { slug: "social-security-2027-cola-preview", title: "The 2027 Social Security COLA Estimate: What to Do (and Not Do) With It Right Now", pub: "2026-09-22T08:00:00-05:00" },
  { slug: "fed-rate-hike-mortgage-impact-2026", title: "The Fed Just Hiked, Not Cut: What It Means for Your Mortgage", pub: "2026-09-21T08:00:00-05:00" },
  { slug: "fractional-real-estate-investing-fine-print", title: "Fractional Real Estate Investing: What $100 Actually Buys You", pub: "2026-09-21T08:00:00-05:00" },
  { slug: "passive-income-myth", title: "The \"Passive Income\" Myth: What Most of These Income Streams Actually Require", pub: "2026-09-21T08:00:00-05:00" },
  { slug: "scam-series-part-1-phishing-basics", title: "The Scam Series, Part 1: How to Spot Phishing Before It Costs You", pub: "2026-09-21T08:00:00-05:00" },
  { slug: "529-or-brokerage-account-investing-for-your-kid", title: "529 or Brokerage Account? Two Ways to Start Investing for Your Kid", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "7-dividend-stocks-worth-watching", title: "7 Dividend Stocks Worth Putting on Your Watchlist", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "backdoor-roth-ira-explained", title: "Backdoor Roth IRA, Explained Without the Jargon", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "bitcoin-dollar-cost-averaging-explained", title: "Bitcoin Dollar-Cost Averaging: The Boring Way to Own Crypto", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "boring-blue-chip-stocks-2026", title: "The Case for Boring Blue Chips in 2026", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "donating-appreciated-assets-tax-move", title: "Donating Appreciated Assets: The Tax Move Most People Never Make", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "estate-planning-basics-everyone-skips", title: "Estate Planning Basics Everyone Under 40 Skips (and Shouldn't)", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "expat-retirement-destinations-2026", title: "Where American Retirees Are Actually Moving in 2026: Portugal, Panama, and the New Expat Map", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "farmland-as-an-asset-class", title: "Farmland as an Asset Class: What the Data Actually Shows", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "house-hacking-owner-occupied-multifamily", title: "House Hacking: How to Get Your Housing Costs to (Almost) Zero", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "how-to-read-a-balance-sheet", title: "How to Read a Balance Sheet in Five Minutes", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "hsa-most-underrated-retirement-account", title: "The HSA: The Most Underrated Retirement Account Nobody Maxes Out", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "index-funds-vs-active-management", title: "Index vs. Active: What Decades of Data Actually Say", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "is-flipping-houses-still-worth-it", title: "Is Flipping Houses Still Worth It? Run These Numbers Before You Buy", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "new-etfs-investors-should-know", title: "The New ETFs Investors Should Know About This Year", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "old-401k-options-when-you-change-jobs", title: "What to Do With an Old 401(k) When You Change Jobs", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "peer-to-peer-rental-marketplaces", title: "Peer-to-Peer Rental Apps: Renting Out What You Already Own", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "reits-vs-rental-property", title: "REITs vs. Rental Property: Two Very Different Ways to Invest in Real Estate", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "roth-ira-vs-traditional-ira", title: "Roth IRA vs. Traditional IRA: Where Should Your Next $7,000 Go?", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "side-hustles-2026-what-actually-works", title: "Dropshipping Had Its Day. Here's What's Actually Working in Side Hustles Now", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "stablecoins-explained", title: "Stablecoins, Explained: What They Are and What They're Not", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "tokenized-treasuries-explained", title: "Tokenized Treasuries: Government Debt Meets the Blockchain", pub: "2026-09-15T08:00:00-05:00" },
  { slug: "wright-thurston-bitcoin-collectibles-mentor-podcast", title: "Before Bitcoin Went Mainstream: Wright Thurston on Collectibles, Crypto and Finding Overlooked Value", pub: "2026-09-15T08:00:00-05:00" },
];

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function onRequestGet(context) {
  const now = Date.now();
  const cutoffMs = now - WINDOW_HOURS * 60 * 60 * 1000;

  const eligible = ARTICLES.filter((a) => {
    const t = Date.parse(a.pub);
    return Number.isFinite(t) && t >= cutoffMs && t <= now;
  }).sort((a, b) => Date.parse(b.pub) - Date.parse(a.pub));

  const urlEntries = eligible
    .map((a) => {
      const loc = `${SITE_URL}/${a.slug}`;
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapeXml(PUBLICATION_NAME)}</news:name>
        <news:language>${LANGUAGE}</news:language>
      </news:publication>
      <news:publication_date>${a.pub}</news:publication_date>
      <news:title>${escapeXml(a.title)}</news:title>
    </news:news>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urlEntries}
</urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
